import { Elysia, t } from 'elysia';
import { db } from '../../database';
import { translate } from '../ai/translation';
import { jwt } from '@elysiajs/jwt';

// JWT type extension
declare module '@elysiajs/jwt' {
  interface JWT {
    userId: string;
  }
}

const jwtPlugin = jwt({
  secret: process.env.JWT_SECRET!,
  exp: '7d'
});

// Helper functions with explicit return types
async function verifyAuthToken(token: string, context: any): Promise<{ userId: string }> {
  const decoded = await context.jwt.verify(token);
  if (!decoded || typeof decoded === 'boolean') throw new Error('Unauthorized');
  return decoded;
}

async function getMatchWithUsers(matchId: string) {
  return db.match.findUnique({
    where: { id: matchId },
    include: { user1: true, user2: true }
  });
}

export const messageRoutes = new Elysia()
  .use(jwtPlugin)
  .group('/messages', (app) => app
    .get('/:matchId', async ({ params, cookie: { auth }, set, jwt }) => {
      try {
        if (!auth?.value) throw new Error('Unauthorized');
        if (!auth?.value) throw new Error('Unauthorized');
        const { userId } = await verifyAuthToken(auth.value as string, { jwt });
        const messages = await db.message.findMany({
          where: {
            matchId: params.matchId,
            OR: [{ senderId: userId }, { receiverId: userId }]
          },
          include: {
            sender: { select: { id: true, name: true } }
          }
        });
        return messages;
      } catch {
        set.status = 401;
        return { error: 'Unauthorized' };
      }
    }, {
      params: t.Object({ matchId: t.String() })
    })
    .post('/:matchId', async ({ params, body, cookie: { auth }, set, jwt }) => {
      try {
        if (!auth?.value) throw new Error('Unauthorized');
        const { userId } = await verifyAuthToken(auth.value, { jwt });
        const match = await getMatchWithUsers(params.matchId);

        if (!match) {
          set.status = 404;
          throw new Error('Match not found');
        }

        if (![match.userId1, match.userId2].includes(userId)) {
          set.status = 403;
          throw new Error('Not part of this match');
        }

        const recipient = match.userId1 === userId ? match.user2 : match.user1;
        const translation = await translate(body.content, recipient.languagePreference || 'en');

        return db.message.create({
          data: {
            senderId: userId,
            receiverId: recipient.id,
            matchId: params.matchId,
            content: body.content,
            translation,
            language: recipient.languagePreference || 'en',
            isRead: false
          }
        });
      } catch (error) {
        if (!(error instanceof Error)) {
          set.status = 500;
          return { error: 'Unknown error' };
        }
        return { error: error.message };
      }
    }, {
      params: t.Object({ matchId: t.String() }),
      body: t.Object({ content: t.String({ minLength: 1, maxLength: 500 }) })
    })
  );
import { Elysia, t } from 'elysia';
import { db } from '../../database';
import { TranslationService } from '../ai/translation.service'; // Updated import
import { jwt } from '@elysiajs/jwt';
import { rateLimit } from 'elysia-rate-limit';

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

// Initialize AI service
const translator = new TranslationService();

// Helper functions
async function verifyAuthToken(token: string, jwt: any) {
  const decoded = await jwt.verify(token);
  if (!decoded || typeof decoded === 'boolean') throw new Error('Unauthorized');
  return decoded as { userId: string };
}

async function getMatchWithUsers(matchId: string) {
  return db.match.findUnique({
    where: { id: matchId },
    include: { user1: true, user2: true }
  });
}

export const messageRoutes = new Elysia()
  .use(jwtPlugin)
  .use(rateLimit({ max: 5, duration: 60000 })) // 5 requests/minute
  .group('/messages', (app) => app
    .get('/:matchId', async ({ params, cookie: { auth }, set, jwt }) => {
      try {
        if (!auth?.value) throw new Error('Unauthorized');
        const { userId } = await verifyAuthToken(auth.value, jwt);
        
        const messages = await db.message.findMany({
          where: {
            matchId: params.matchId,
            OR: [{ senderId: userId }, { receiverId: userId }]
          },
          include: {
            sender: { select: { id: true, name: true } },
            match: {
              include: {
                user1: { select: { languagePreference: true } },
                user2: { select: { languagePreference: true } }
              }
            }
          }
        });

        return messages;
      } catch (error) {
        set.status = 401;
        return { error: 'Unauthorized' };
      }
    }, {
      params: t.Object({ matchId: t.String() })
    })
    .post('/:matchId', async ({ params, body, cookie: { auth }, set, jwt }) => {
      try {
        if (!auth?.value) throw new Error('Unauthorized');
        const { userId } = await verifyAuthToken(auth.value, jwt);
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
        const translation = await translator.translate(
          body.content, 
          recipient.languagePreference || 'en'
        );

        const newMessage = await db.message.create({
          data: {
            senderId: userId,
            receiverId: recipient.id,
            matchId: params.matchId,
            content: body.content,
            translation,
            language: recipient.languagePreference || 'en',
            isRead: false
          },
          include: {
            sender: { select: { id: true, name: true } }
          }
        });

        return newMessage;
      } catch (error) {
        const status = error instanceof Error
          ? error.message.includes('Unauthorized') ? 401
          : error.message.includes('Match not found') ? 404
          : error.message.includes('Not part of') ? 403
          : 400
          : 500;

        set.status = status;
        return { 
          error: error instanceof Error 
            ? error.message 
            : 'An unknown error occurred' 
        };
      }
    }, {
      params: t.Object({ matchId: t.String() }),
      body: t.Object({ content: t.String({ minLength: 1, maxLength: 500 }) })
    })
  );
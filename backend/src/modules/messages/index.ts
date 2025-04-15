import { Elysia, t } from 'elysia';
import { db } from '../../database';
import { translate } from '../ai/translation'; // Corrected the import path
import { jwt } from '@elysiajs/jwt';

export const messageRoutes = new Elysia({ prefix: '/messages' })
  // Get messages for a match
  .get('/:matchId', async ({ params, cookie: { auth }, request }) => {
    if (!auth || !auth.value) throw new Error('Unauthorized');
    const { default: jwtLib } = await import('jsonwebtoken');
    const decodedToken = jwtLib.verify(auth.value, process.env.JWT_SECRET!);
    const userId = (decodedToken as any)?.id;
    if (!userId) throw new Error('Unauthorized');

    return db.message.findMany({
      where: {
        matchId: params.matchId,
        OR: [
          { senderId: userId },
          { receiverId: userId }
        ]
      },
      orderBy: {
        sentAt: 'asc'
      }
    });
  }, {
    params: t.Object({
      matchId: t.String()
    })
  })

  const app = new Elysia()
  .use(jwt({ secret: process.env.JWT_SECRET! }))
  .use(messageRoutes)

  // Send message
  .post('/:matchId', async ({ params, body, jwt, cookie: { auth } }) => {
    const senderId = await jwt.verify(auth.value);
    if (!senderId) throw new Error('Unauthorized');

    const match = await db.match.findUnique({
      where: { id: params.matchId }
    });

    if (!match) throw new Error('Match not found');
    if (![match.userId1, match.userId2].includes(senderId)) {
      throw new Error('Not part of this match');
    }

    const receiverId = match.userId1 === senderId ? match.userId2 : match.userId1;
    const translation = await translate(body.content, 'en'); // Target user's language

    return db.message.create({
      data: {
        senderId,
        receiverId,
        matchId: params.matchId,
        content: body.content,
        translation,
        isRead: false
      }
    });
  }, {
    params: t.Object({
      matchId: t.String()
    }),
    body: t.Object({
      content: t.String()
    })
  });
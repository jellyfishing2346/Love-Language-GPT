import { Elysia, t } from 'elysia';
import { db } from '../../database';

export const matchRoutes = new Elysia({ prefix: '/matches' })
  .decorate('jwt', async () => {
    const jwt = await import('jsonwebtoken');
    return jwt;
  })
  // Get all matches for current user
  .get('/', async ({ jwt, cookie: { auth } }) => {
    const { default: jwtLib } = await jwt();
    if (!auth?.value) throw new Error('Unauthorized');
    if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined');
    const userId = jwtLib.verify(auth.value as string, process.env.JWT_SECRET);
    if (!userId) throw new Error('Unauthorized');

    return db.match.findMany({
      where: {
        OR: [
          { userId1: userId },
          { userId2: userId }
        ],
        status: 'active'
      },
      include: {
        user1: true,
        user2: true
      }
    });
  })

  // Create new match
  .post('/:userId', async ({ params, jwt, cookie: { auth } }) => {
    const { default: jwtLib } = await jwt();
    if (!auth?.value) throw new Error('Unauthorized');
    if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET is not defined');
    const currentUserId = jwtLib.verify(auth.value, process.env.JWT_SECRET);
    if (!currentUserId) throw new Error('Unauthorized');

    // Check if reciprocal like exists
    const existingLike = await db.match.findFirst({
      where: {
        userId1: params.userId,
        userId2: currentUserId
      }
    });

    const match = await db.match.create({
      data: {
        userId1: currentUserId,
        userId2: params.userId,
        status: existingLike ? 'active' : 'pending'
      }
    });

    return match;
  }, {
    params: t.Object({
      userId: t.String()
    })
  });
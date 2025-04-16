import { Elysia, t } from 'elysia';

export const userRoutes = new Elysia({ prefix: '/users' })
  .get('/me', () => {
    return { id: '123', name: 'Test User' };
  })
  .get('/discover', () => {
    return [
      { id: '1', name: 'User A' },
      { id: '2', name: 'User B' }
    ];
  });
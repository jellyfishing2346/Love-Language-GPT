// apps/backend/src/modules/auth/index.ts
import { Elysia, t } from 'elysia';

export const authRoutes = new Elysia({ prefix: '/auth' })
  .post('/register', async ({ body }) => {
    // Registration logic
  }, {
    body: t.Object({
      email: t.String({ format: 'email' }),
      password: t.String({ minLength: 8 })
    })
  })
  .post('/login', async ({ body }) => {
    // Login logic
  });
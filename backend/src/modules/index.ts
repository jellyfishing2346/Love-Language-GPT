// backend/src/index.ts
import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { authRoutes } from '../modules/auth';
import { userRoutes } from '../modules/users';
import { matchRoutes } from '../modules/matches';
import { messageRoutes } from '../modules/messages';
import { aiRoutes } from '../modules/ai';

const app = new Elysia()
  .use(cors())
  .use(authRoutes)
  .use(userRoutes)
  .use(matchRoutes)
  .use(messageRoutes)
  .use(aiRoutes)
  .listen(3000);

console.log(`🦊 Backend running at ${app.server?.hostname}:${app.server?.port}`);
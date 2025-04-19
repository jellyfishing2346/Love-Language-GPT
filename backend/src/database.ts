import { PrismaClient } from '@prisma/client';

type MiddlewareParams = {
  model?: string;
  action: string;
  args: any;
  dataPath: string[];
  runInTransaction: boolean;
};

const db = new PrismaClient({
  log: [
    { level: 'warn', emit: 'event' },
    { level: 'error', emit: 'event' },
    { level: 'query', emit: 'event' }
  ],
  errorFormat: 'pretty'
});

// Logging and middleware setup
db.$on('warn', (e: { message: string }) => console.warn('Prisma Warning:', e.message));
db.$on('error', (e: { message: string }) => console.error('Prisma Error:', e.message));

db.$use(async (params: MiddlewareParams, next: (params: MiddlewareParams) => Promise<any>) => {
  const before = Date.now();
  const result = await next(params);
  console.log(`Query ${params.model}.${params.action} took ${Date.now() - before}ms`);
  return result;
});

process.on('beforeExit', async () => {
  await db.$disconnect();
});

// Export all Prisma types explicitly
export { db };
export * from '@prisma/client';
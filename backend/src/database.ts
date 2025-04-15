import { Prisma, PrismaClient } from '@prisma/client';

type MiddlewareParams = {
  model?: string;
  action: string;
  args: any;
  dataPath: string[];
  runInTransaction: boolean;
};

// Initialize Prisma Client with proper configuration
const db = new PrismaClient({
  log: [
    { level: 'warn', emit: 'event' },
    { level: 'error', emit: 'event' },
    { level: 'query', emit: 'event' }
  ],
  errorFormat: 'pretty'
});

// Add logging for better debugging
db.$on('warn', (e: any) => {
  console.warn('Prisma Warning:', e.message);
});

db.$on('error', (e: any) => {
  console.error('Prisma Error:', e.message);
});

// Optional: Add middleware for logging queries
db.$use(async (params: MiddlewareParams, next: (params: MiddlewareParams) => Promise<any>) => {
  const before = Date.now();
  const result = await next(params);
  const after = Date.now();
  
  console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
  return result;
});

// Graceful shutdown handling
process.on('beforeExit', async () => {
  await db.$disconnect();
});

// Export the configured client and types
export { db };

// Re-export Prisma types for convenience
export type { 
  // User, 
  Prisma as PrismaTypes 
} from '@prisma/client';
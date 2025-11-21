// Prisma client - will be properly initialized after running `pnpm prisma generate`
// For now, using a placeholder that will be replaced when database is connected

const globalForPrisma = globalThis as unknown as {
  prisma: unknown | undefined
}

// Placeholder - run `pnpm prisma generate` after setting up DATABASE_URL
export const db = globalForPrisma.prisma ?? (null as unknown)

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db

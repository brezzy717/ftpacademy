import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

// Note: PrismaAdapter and database integration will be added after running:
// 1. Set DATABASE_URL in .env
// 2. Run `pnpm prisma generate`
// 3. Run `pnpm prisma db push`

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: PrismaAdapter(db) as Adapter, // Uncomment after database setup
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Placeholder auth - replace with database lookup after setup
        // For demo purposes, accept any email/password combination
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // TODO: Replace with actual database lookup
        // const user = await db.user.findUnique({
        //   where: { email: credentials.email as string },
        // })
        // if (!user || !user.passwordHash) return null
        // const passwordMatch = await bcrypt.compare(credentials.password, user.passwordHash)
        // if (!passwordMatch) return null

        // Demo user for testing UI
        if (credentials.email === "demo@ftp.academy" && credentials.password === "demo123") {
          return {
            id: "demo-user-id",
            email: "demo@ftp.academy",
            name: "Demo Student",
            role: "STUDENT",
          }
        }

        if (credentials.email === "admin@ftp.academy" && credentials.password === "admin123") {
          return {
            id: "admin-user-id",
            email: "admin@ftp.academy",
            name: "Admin User",
            role: "ADMIN",
          }
        }

        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string
        token.role = (user as { role: string }).role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
})

// Helper to get current user
export async function getCurrentUser() {
  const session = await auth()
  return session?.user
}

// Helper to check if user has role
export async function hasRole(role: string | string[]) {
  const user = await getCurrentUser()
  if (!user?.role) return false
  const roles = Array.isArray(role) ? role : [role]
  return roles.includes(user.role)
}

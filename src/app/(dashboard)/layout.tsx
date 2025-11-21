import { redirect } from "next/navigation"
import { auth } from "@/lib/auth"
import { DashboardNav } from "@/components/dashboard/nav"
import { Providers } from "@/components/providers"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  return (
    <Providers>
      <div className="min-h-screen flex">
        <DashboardNav user={session.user} />
        <main className="flex-1 bg-secondary/30">
          {children}
        </main>
      </div>
    </Providers>
  )
}

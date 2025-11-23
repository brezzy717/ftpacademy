import Link from "next/link"
import { GraduationCap } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple header */}
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-primary">FTP Academy</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-4">
        {children}
      </main>

      {/* Simple footer */}
      <footer className="border-t py-4">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} First Thought Project Academy. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

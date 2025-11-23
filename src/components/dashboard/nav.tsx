"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut } from "next-auth/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  LayoutDashboard,
  BookOpen,
  FileText,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Users,
  BarChart3,
  Calendar,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

interface User {
  name?: string | null
  email?: string | null
  role?: string
}

interface DashboardNavProps {
  user: User
}

const studentNav = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Courses", href: "/dashboard/courses", icon: BookOpen },
  { name: "Resources", href: "/dashboard/resources", icon: FileText },
  { name: "AI Tutor", href: "/dashboard/tutor", icon: MessageSquare },
  { name: "Announcements", href: "/dashboard/announcements", icon: Bell },
]

const staffNav = [
  { name: "Dashboard", href: "/staff", icon: LayoutDashboard },
  { name: "My Courses", href: "/staff/courses", icon: BookOpen },
  { name: "Students", href: "/staff/students", icon: Users },
  { name: "Schedule", href: "/staff/schedule", icon: Calendar },
]

const adminNav = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Students", href: "/admin/students", icon: Users },
  { name: "Courses", href: "/admin/courses", icon: BookOpen },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Announcements", href: "/admin/announcements", icon: Bell },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function DashboardNav({ user }: DashboardNavProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const role = user.role?.toUpperCase() || "STUDENT"
  const navItems = role === "ADMIN" ? adminNav : role === "STAFF" ? staffNav : studentNav

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-background border shadow-sm"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out lg:relative lg:transform-none",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="font-bold text-primary">FTP Academy</span>
                <p className="text-xs text-muted-foreground capitalize">
                  {role.toLowerCase()} Portal
                </p>
              </div>
            </Link>
          </div>

          {/* User info */}
          <div className="p-4 border-b">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">
                  {user.name?.charAt(0) || user.email?.charAt(0) || "U"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{user.name || "User"}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-foreground"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}

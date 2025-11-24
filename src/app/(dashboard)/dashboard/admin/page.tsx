import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  BookOpen,
  GraduationCap,
  TrendingUp,
  UserPlus,
  FileEdit,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  Clock,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Admin Dashboard",
}

// Mock data - will be replaced with database queries
const statsData = {
  totalStudents: 247,
  activeEnrollments: 189,
  completionRate: 78,
  averageProgress: 64,
  totalRevenue: 2847500, // in cents
  pendingApplications: 12,
  activePrograms: 3,
  totalLessons: 156,
}

const recentStudents = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    program: "Agentic AI & ML",
    status: "Active",
    enrolledDate: "Nov 15, 2024",
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "mchen@example.com",
    program: "HVAC Certification",
    status: "Active",
    enrolledDate: "Nov 14, 2024",
  },
  {
    id: "3",
    name: "Emma Davis",
    email: "emma.d@example.com",
    program: "Agentic AI & ML",
    status: "Pending",
    enrolledDate: "Nov 13, 2024",
  },
  {
    id: "4",
    name: "James Wilson",
    email: "jwilson@example.com",
    program: "CDL Training",
    status: "Active",
    enrolledDate: "Nov 12, 2024",
  },
]

const recentActivity = [
  {
    id: "1",
    type: "completion",
    message: "Sarah Johnson completed Module 5: Neural Networks",
    time: "2 hours ago",
  },
  {
    id: "2",
    type: "enrollment",
    message: "New student enrolled in HVAC Certification program",
    time: "5 hours ago",
  },
  {
    id: "3",
    type: "quiz",
    message: "Michael Chen achieved 95% on Machine Learning Fundamentals Quiz",
    time: "1 day ago",
  },
  {
    id: "4",
    type: "application",
    message: "New application submitted for Agentic AI & ML program",
    time: "1 day ago",
  },
]

export default async function AdminDashboardPage() {
  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Manage students, courses, and monitor platform performance
        </p>
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link href="/dashboard/admin/students">
          <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
            <Users className="h-6 w-6" />
            <span>Manage Students</span>
          </Button>
        </Link>
        <Link href="/dashboard/admin/courses">
          <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
            <BookOpen className="h-6 w-6" />
            <span>Manage Courses</span>
          </Button>
        </Link>
        <Link href="/dashboard/admin/applications">
          <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
            <UserPlus className="h-6 w-6" />
            <span>Applications</span>
          </Button>
        </Link>
        <Link href="/dashboard/admin/analytics">
          <Button variant="outline" className="w-full h-auto py-4 flex flex-col gap-2">
            <BarChart3 className="h-6 w-6" />
            <span>Analytics</span>
          </Button>
        </Link>
      </div>

      {/* Stats grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Students</p>
                <p className="text-3xl font-bold">{statsData.totalStudents}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {statsData.activeEnrollments} active enrollments
                </p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-3xl font-bold">{statsData.completionRate}%</p>
                <p className="text-xs text-teal mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +5% from last month
                </p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-teal" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending Applications</p>
                <p className="text-3xl font-bold">{statsData.pendingApplications}</p>
                <p className="text-xs text-muted-foreground mt-1">Require review</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-3xl font-bold">
                  ${(statsData.totalRevenue / 100).toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground mt-1">This year</p>
              </div>
              <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent students */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Students</CardTitle>
              <Link href="/dashboard/admin/students" className="text-sm text-primary hover:underline">
                View all
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{student.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{student.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">{student.program}</p>
                  </div>
                  <div className="ml-4 text-right">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        student.status === "Active"
                          ? "bg-teal/10 text-teal"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {student.status}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">{student.enrolledDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                      activity.type === "completion"
                        ? "bg-teal/10"
                        : activity.type === "enrollment"
                        ? "bg-primary/10"
                        : activity.type === "quiz"
                        ? "bg-accent/10"
                        : "bg-secondary"
                    }`}
                  >
                    {activity.type === "completion" ? (
                      <CheckCircle2 className="h-4 w-4 text-teal" />
                    ) : activity.type === "enrollment" ? (
                      <UserPlus className="h-4 w-4 text-primary" />
                    ) : activity.type === "quiz" ? (
                      <GraduationCap className="h-4 w-4 text-accent" />
                    ) : (
                      <FileEdit className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">{activity.message}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

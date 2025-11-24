import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  GraduationCap,
  DollarSign,
  ChevronLeft,
  Download,
} from "lucide-react"

export const metadata = {
  title: "Analytics Dashboard",
}

// Mock analytics data - will be replaced with database queries
const analyticsData = {
  enrollment: {
    thisMonth: 34,
    lastMonth: 28,
    percentChange: 21.4,
    trend: "up" as const,
  },
  completion: {
    thisMonth: 18,
    lastMonth: 15,
    percentChange: 20.0,
    trend: "up" as const,
  },
  revenue: {
    thisMonth: 485000, // in cents
    lastMonth: 427500,
    percentChange: 13.5,
    trend: "up" as const,
  },
  engagement: {
    avgHoursPerStudent: 24.5,
    lastMonth: 22.3,
    percentChange: 9.9,
    trend: "up" as const,
  },
}

const programPerformance = [
  {
    name: "Agentic AI & ML",
    enrolled: 142,
    completed: 48,
    avgProgress: 58,
    avgScore: 86,
    retention: 94,
  },
  {
    name: "HVAC Certification",
    enrolled: 67,
    completed: 32,
    avgProgress: 62,
    avgScore: 91,
    retention: 96,
  },
  {
    name: "CDL Training",
    enrolled: 38,
    completed: 24,
    avgProgress: 71,
    avgScore: 88,
    retention: 97,
  },
]

const monthlyData = [
  { month: "Jun", enrollments: 42, completions: 12, revenue: 600000 },
  { month: "Jul", enrollments: 38, completions: 15, revenue: 540000 },
  { month: "Aug", enrollments: 51, completions: 18, revenue: 725000 },
  { month: "Sep", enrollments: 45, completions: 14, revenue: 642000 },
  { month: "Oct", enrollments: 28, completions: 15, revenue: 427500 },
  { month: "Nov", enrollments: 34, completions: 18, revenue: 485000 },
]

export default function AnalyticsPage() {
  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <Link
          href="/dashboard/admin"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Admin Dashboard
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Track platform performance and student outcomes
            </p>
          </div>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Enrollments</p>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold mb-1">{analyticsData.enrollment.thisMonth}</p>
            <div className="flex items-center gap-1 text-sm">
              {analyticsData.enrollment.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-teal" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
              <span
                className={
                  analyticsData.enrollment.trend === "up" ? "text-teal" : "text-destructive"
                }
              >
                {analyticsData.enrollment.percentChange}%
              </span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Completions</p>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold mb-1">{analyticsData.completion.thisMonth}</p>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="h-4 w-4 text-teal" />
              <span className="text-teal">{analyticsData.completion.percentChange}%</span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Revenue</p>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold mb-1">
              ${(analyticsData.revenue.thisMonth / 100).toLocaleString()}
            </p>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="h-4 w-4 text-teal" />
              <span className="text-teal">{analyticsData.revenue.percentChange}%</span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Avg. Study Time</p>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold mb-1">{analyticsData.engagement.avgHoursPerStudent}h</p>
            <div className="flex items-center gap-1 text-sm">
              <TrendingUp className="h-4 w-4 text-teal" />
              <span className="text-teal">{analyticsData.engagement.percentChange}%</span>
              <span className="text-muted-foreground">vs last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Program performance */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Program Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Program
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Enrolled
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Completed
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Avg Progress
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Avg Score
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Retention
                  </th>
                </tr>
              </thead>
              <tbody>
                {programPerformance.map((program, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-4 px-4 font-medium">{program.name}</td>
                    <td className="py-4 px-4">{program.enrolled}</td>
                    <td className="py-4 px-4">{program.completed}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-[100px] bg-secondary rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${program.avgProgress}%` }}
                          />
                        </div>
                        <span className="text-sm">{program.avgProgress}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-teal font-medium">{program.avgScore}%</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-teal font-medium">{program.retention}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Monthly trends */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Month
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Enrollments
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Completions
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Revenue
                  </th>
                </tr>
              </thead>
              <tbody>
                {monthlyData.map((data, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-4 px-4 font-medium">{data.month} 2024</td>
                    <td className="py-4 px-4">{data.enrollments}</td>
                    <td className="py-4 px-4">{data.completions}</td>
                    <td className="py-4 px-4 font-medium">
                      ${(data.revenue / 100).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

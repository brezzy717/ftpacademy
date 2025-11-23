import { Metadata } from "next"
import Link from "next/link"
import { auth } from "@/lib/auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Clock,
  CheckCircle2,
  Bell,
  ArrowRight,
  Play,
  Laptop,
  Gift,
  Award,
  Calendar,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Student Dashboard",
}

// Placeholder data - will be replaced with real data from database
const mockCourse = {
  name: "Agentic AI Development & Machine Learning",
  progress: 35,
  currentModule: "Module 4: Machine Learning Fundamentals",
  currentLesson: "Supervised Learning Basics",
  nextSession: "Monday, Dec 2 at 10:00 AM MST",
}

const mockAnnouncements = [
  {
    id: "1",
    title: "Holiday Schedule Update",
    date: "Nov 20, 2024",
    preview: "Classes will be paused from Dec 23-Jan 2...",
  },
  {
    id: "2",
    title: "New AI Tutor Features",
    date: "Nov 18, 2024",
    preview: "We've added voice capabilities to the AI tutor...",
  },
]

const mockBenefits = {
  laptop: "Delivered",
  gear: "Delivered",
  giftCard: "Issued",
  voucher: "Pending",
}

export default async function DashboardPage() {
  const session = await auth()
  const firstName = session?.user?.name?.split(" ")[0] || "Student"

  return (
    <div className="p-4 lg:p-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {firstName}!</h1>
        <p className="text-muted-foreground mt-1">
          Continue your learning journey where you left off.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main content - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Course Card */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{mockCourse.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {mockCourse.currentModule}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {mockCourse.progress}%
                  </div>
                  <p className="text-xs text-muted-foreground">Complete</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Progress bar */}
              <div className="w-full bg-secondary rounded-full h-2 mb-4">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${mockCourse.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Play className="h-4 w-4" />
                  <span>Continue: {mockCourse.currentLesson}</span>
                </div>
                <Link href="/dashboard/courses">
                  <Button>
                    Continue Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-muted-foreground">Lessons Done</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-teal/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-teal" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">8</p>
                    <p className="text-sm text-muted-foreground">Quizzes Passed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24h</p>
                    <p className="text-sm text-muted-foreground">Study Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Sessions */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <CardTitle className="text-lg">Upcoming Sessions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div>
                    <p className="font-medium">Live Q&A Session</p>
                    <p className="text-sm text-muted-foreground">{mockCourse.nextSession}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Add to Calendar
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                  <div>
                    <p className="font-medium">Module 5 Kickoff</p>
                    <p className="text-sm text-muted-foreground">Wednesday, Dec 4 at 10:00 AM MST</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Announcements */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Announcements</CardTitle>
                </div>
                <Link href="/dashboard/announcements" className="text-sm text-primary hover:underline">
                  View all
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="border-b last:border-0 pb-3 last:pb-0">
                    <p className="font-medium text-sm">{announcement.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{announcement.date}</p>
                    <p className="text-sm text-muted-foreground mt-1">{announcement.preview}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Benefits Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Laptop className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">HP Laptop</span>
                  </div>
                  <span className="text-sm font-medium text-teal">{mockBenefits.laptop}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">School Gear</span>
                  </div>
                  <span className="text-sm font-medium text-teal">{mockBenefits.gear}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">$250 Gift Card</span>
                  </div>
                  <span className="text-sm font-medium text-teal">{mockBenefits.giftCard}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Exam Voucher</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{mockBenefits.voucher}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* AI Tutor Promo */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Our AI Course Tutor is available 24/7 to answer your questions.
              </p>
              <Link href="/dashboard/tutor">
                <Button variant="secondary" className="w-full">
                  Chat with AI Tutor
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

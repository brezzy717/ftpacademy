import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, CheckCircle2, Play, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "My Courses",
}

// Mock data - will be replaced with database queries
const enrolledCourses = [
  {
    id: "1",
    name: "Agentic AI Development & Machine Learning",
    slug: "agentic-ai-ml",
    progress: 35,
    totalModules: 12,
    completedModules: 4,
    totalLessons: 48,
    completedLessons: 17,
    nextLesson: {
      title: "Supervised Learning Basics",
      module: "Module 4: Machine Learning Fundamentals",
    },
    thumbnailUrl: "/images/ai-course.jpg",
  },
]

export default function MyCoursesPage() {
  return (
    <div className="p-4 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-muted-foreground mt-1">
          Continue your learning journey
        </p>
      </div>

      {enrolledCourses.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No courses yet</h3>
            <p className="text-muted-foreground mb-4">
              You're not enrolled in any courses. Contact admissions to get started.
            </p>
            <Link href="/contact">
              <Button>Contact Admissions</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid lg:grid-cols-5">
                {/* Course thumbnail */}
                <div className="lg:col-span-2 bg-gradient-to-br from-primary/20 to-teal/20 flex items-center justify-center p-8">
                  <Award className="h-24 w-24 text-primary/40" />
                </div>

                {/* Course info */}
                <div className="lg:col-span-3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl">{course.name}</CardTitle>
                    <CardDescription>
                      {course.completedLessons} of {course.totalLessons} lessons completed
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Progress bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-semibold text-primary">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-3">
                        <div
                          className="bg-primary h-3 rounded-full transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {course.completedModules}/{course.totalModules} Modules
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal" />
                        <span className="text-sm">
                          {course.completedLessons} Lessons Done
                        </span>
                      </div>
                    </div>

                    {/* Next lesson */}
                    {course.nextLesson && (
                      <div className="p-3 rounded-lg bg-secondary/50 mb-4">
                        <p className="text-xs text-muted-foreground mb-1">Up Next</p>
                        <p className="font-medium text-sm">{course.nextLesson.title}</p>
                        <p className="text-xs text-muted-foreground">{course.nextLesson.module}</p>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Link href={`/dashboard/courses/${course.slug}`} className="flex-1">
                        <Button className="w-full">
                          <Play className="mr-2 h-4 w-4" />
                          Continue Learning
                        </Button>
                      </Link>
                      <Link href={`/dashboard/courses/${course.slug}?tab=resources`}>
                        <Button variant="outline">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Resources
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

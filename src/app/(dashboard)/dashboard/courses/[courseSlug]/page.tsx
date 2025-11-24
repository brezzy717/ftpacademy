import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Clock,
  Play,
  FileText,
  Award,
  ChevronRight,
  Lock,
} from "lucide-react"

interface Props {
  params: Promise<{ courseSlug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { courseSlug } = await params
  return {
    title: "Course",
  }
}

// Mock data - will be replaced with database queries
const courseData = {
  id: "1",
  name: "Agentic AI Development & Machine Learning",
  slug: "agentic-ai-ml",
  description: "Master AI agents, machine learning, automation workflows, and LLM integration.",
  progress: 35,
  modules: [
    {
      id: "1",
      name: "Introduction to AI and Machine Learning",
      description: "AI history, industry trends, and foundational concepts",
      duration: "2 weeks",
      order: 1,
      lessons: [
        {
          id: "1",
          title: "What is Artificial Intelligence?",
          duration: 15,
          completed: true,
          slug: "what-is-ai",
        },
        {
          id: "2",
          title: "History of AI and Machine Learning",
          duration: 20,
          completed: true,
          slug: "history-of-ai",
        },
        {
          id: "3",
          title: "Key Concepts and Terminology",
          duration: 18,
          completed: true,
          slug: "key-concepts",
        },
      ],
    },
    {
      id: "2",
      name: "Programming Foundations (Python)",
      description: "Core Python skills, data structures, and development workflows",
      duration: "2 weeks",
      order: 2,
      lessons: [
        {
          id: "4",
          title: "Python Basics",
          duration: 25,
          completed: true,
          slug: "python-basics",
        },
        {
          id: "5",
          title: "Data Structures",
          duration: 30,
          completed: true,
          slug: "data-structures",
        },
        {
          id: "6",
          title: "Working with Libraries",
          duration: 20,
          completed: false,
          slug: "working-with-libraries",
        },
      ],
    },
    {
      id: "3",
      name: "Data Management and Big Data",
      description: "Data collection, databases, ETL pipelines",
      duration: "2 weeks",
      order: 3,
      lessons: [
        {
          id: "7",
          title: "Introduction to Databases",
          duration: 25,
          completed: false,
          slug: "intro-databases",
        },
        {
          id: "8",
          title: "SQL Fundamentals",
          duration: 30,
          completed: false,
          slug: "sql-fundamentals",
        },
        {
          id: "9",
          title: "NoSQL Databases",
          duration: 25,
          completed: false,
          slug: "nosql-databases",
        },
      ],
    },
  ],
}

export default async function CoursePage({ params }: Props) {
  const { courseSlug } = await params

  const totalLessons = courseData.modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const completedLessons = courseData.modules.reduce(
    (acc, m) => acc + m.lessons.filter((l) => l.completed).length,
    0
  )

  // Find next incomplete lesson
  const nextLesson = courseData.modules
    .flatMap((m) => m.lessons.map((l) => ({ ...l, moduleSlug: m.name })))
    .find((l) => !l.completed)

  return (
    <div className="p-4 lg:p-8">
      {/* Course header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link href="/dashboard/courses" className="hover:text-primary">
            My Courses
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>{courseData.name}</span>
        </div>
        <h1 className="text-3xl font-bold">{courseData.name}</h1>
        <p className="text-muted-foreground mt-1">{courseData.description}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress card */}
          <Card>
            <CardHeader>
              <CardTitle>Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">
                    {completedLessons} of {totalLessons} lessons completed
                  </span>
                  <span className="font-semibold text-primary">{courseData.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${courseData.progress}%` }}
                  />
                </div>
              </div>
              {nextLesson && (
                <Link
                  href={`/dashboard/courses/${courseSlug}/lessons/${nextLesson.slug}`}
                >
                  <Button className="w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Continue: {nextLesson.title}
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>

          {/* Modules list */}
          <div className="space-y-4">
            {courseData.modules.map((module) => {
              const moduleCompleted = module.lessons.every((l) => l.completed)
              const moduleLessonsCompleted = module.lessons.filter((l) => l.completed).length

              return (
                <Card key={module.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          Module {module.order}: {module.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {module.description}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-sm font-medium">
                          {moduleLessonsCompleted}/{module.lessons.length}
                        </div>
                        <div className="text-xs text-muted-foreground">Lessons</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {module.lessons.map((lesson, index) => {
                        const isLocked = index > 0 && !module.lessons[index - 1].completed
                        return (
                          <Link
                            key={lesson.id}
                            href={`/dashboard/courses/${courseSlug}/lessons/${lesson.slug}`}
                            className={isLocked ? "pointer-events-none" : ""}
                          >
                            <div
                              className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                                isLocked
                                  ? "opacity-50 cursor-not-allowed"
                                  : "hover:bg-secondary cursor-pointer"
                              }`}
                            >
                              <div className="shrink-0">
                                {isLocked ? (
                                  <Lock className="h-5 w-5 text-muted-foreground" />
                                ) : lesson.completed ? (
                                  <CheckCircle2 className="h-5 w-5 text-teal" />
                                ) : (
                                  <Circle className="h-5 w-5 text-muted-foreground" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-sm truncate">{lesson.title}</p>
                              </div>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Clock className="h-3 w-3" />
                                <span>{lesson.duration} min</span>
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Course stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{courseData.modules.length} Modules</p>
                  <p className="text-xs text-muted-foreground">Learning units</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{totalLessons} Lessons</p>
                  <p className="text-xs text-muted-foreground">Video content</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">Certificate</p>
                  <p className="text-xs text-muted-foreground">Upon completion</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Course Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-primary">
                  <FileText className="h-4 w-4" />
                  <span>Course Workbook (PDF)</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 text-sm hover:text-primary">
                  <FileText className="h-4 w-4" />
                  <span>Syllabus</span>
                </Link>
                <Link href="/dashboard/tutor" className="flex items-center gap-2 text-sm hover:text-primary">
                  <FileText className="h-4 w-4" />
                  <span>AI Course Tutor</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

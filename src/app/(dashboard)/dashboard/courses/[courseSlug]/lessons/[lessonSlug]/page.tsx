"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle2,
  Circle,
  ChevronRight,
  ChevronLeft,
  Download,
  MessageSquare,
  FileText,
  Clock,
  Play,
} from "lucide-react"

interface Props {
  params: Promise<{ courseSlug: string; lessonSlug: string }>
}

// Mock data - will be replaced with database queries
const lessonData = {
  id: "3",
  title: "Key Concepts and Terminology",
  slug: "key-concepts",
  description: "Learn essential AI and ML terminology, understand key concepts that form the foundation of artificial intelligence, and explore the different types of machine learning approaches.",
  videoUrl: "https://www.youtube.com/embed/aircAruvnKk", // Example: 3Blue1Brown Neural Networks
  duration: 18,
  completed: false,
  moduleId: "1",
  moduleName: "Introduction to AI and Machine Learning",
  keyTakeaways: [
    "Understand the difference between AI, ML, and Deep Learning",
    "Learn about supervised, unsupervised, and reinforcement learning",
    "Explore key terminology used in the field",
    "Understand the role of data in machine learning",
  ],
  resources: [
    { id: "1", name: "Lesson Slides (PDF)", url: "#" },
    { id: "2", name: "Key Terms Glossary", url: "#" },
    { id: "3", name: "Additional Reading", url: "#" },
  ],
  hasQuiz: true,
  course: {
    name: "Agentic AI Development & Machine Learning",
    slug: "agentic-ai-ml",
  },
}

// Mock lesson navigation data
const moduleData = {
  name: "Introduction to AI and Machine Learning",
  lessons: [
    { id: "1", title: "What is Artificial Intelligence?", slug: "what-is-ai", completed: true },
    { id: "2", title: "History of AI and Machine Learning", slug: "history-of-ai", completed: true },
    { id: "3", title: "Key Concepts and Terminology", slug: "key-concepts", completed: false },
    { id: "4", title: "Real-World Applications", slug: "real-world-applications", completed: false },
  ],
}

export default function LessonPage({ params }: Props) {
  const [isCompleted, setIsCompleted] = useState(lessonData.completed)
  const [videoProgress, setVideoProgress] = useState(0)

  const currentLessonIndex = moduleData.lessons.findIndex(
    (l) => l.slug === lessonData.slug
  )
  const previousLesson = currentLessonIndex > 0 ? moduleData.lessons[currentLessonIndex - 1] : null
  const nextLesson =
    currentLessonIndex < moduleData.lessons.length - 1
      ? moduleData.lessons[currentLessonIndex + 1]
      : null

  const handleMarkComplete = () => {
    // TODO: Update database
    setIsCompleted(true)
  }

  const handleVideoProgress = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget
    const progress = (video.currentTime / video.duration) * 100
    setVideoProgress(progress)
    // TODO: Save progress to database
  }

  return (
    <div className="p-4 lg:p-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link href="/dashboard/courses" className="hover:text-primary">
          My Courses
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link
          href={`/dashboard/courses/${lessonData.course.slug}`}
          className="hover:text-primary"
        >
          {lessonData.course.name}
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span>{lessonData.title}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video player */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-black relative">
                <iframe
                  src={lessonData.videoUrl}
                  title={lessonData.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {/* Progress bar under video */}
              {videoProgress > 0 && (
                <div className="w-full bg-secondary h-1">
                  <div
                    className="bg-teal h-1 transition-all"
                    style={{ width: `${videoProgress}%` }}
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Lesson info */}
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-2xl font-bold">{lessonData.title}</h1>
                    {isCompleted && (
                      <CheckCircle2 className="h-6 w-6 text-teal shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {moduleData.name}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground ml-4">
                  <Clock className="h-4 w-4" />
                  <span>{lessonData.duration} min</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">About This Lesson</h3>
                <p className="text-muted-foreground">{lessonData.description}</p>
              </div>

              {/* Key takeaways */}
              <div>
                <h3 className="font-semibold mb-3">Key Takeaways</h3>
                <ul className="space-y-2">
                  {lessonData.keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                {!isCompleted && (
                  <Button onClick={handleMarkComplete} className="flex-1">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Mark as Complete
                  </Button>
                )}
                {lessonData.hasQuiz && (
                  <Link
                    href={`/dashboard/courses/${lessonData.course.slug}/lessons/${lessonData.slug}/quiz`}
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Take Quiz
                    </Button>
                  </Link>
                )}
                <Link href="/dashboard/tutor" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Ask AI Tutor
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Lesson Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {lessonData.resources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{resource.name}</span>
                    </div>
                    <Download className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            {previousLesson ? (
              <Link
                href={`/dashboard/courses/${lessonData.course.slug}/lessons/${previousLesson.slug}`}
                className="flex-1"
              >
                <Button variant="outline" className="w-full justify-start">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  <span className="truncate">Previous: {previousLesson.title}</span>
                </Button>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
            {nextLesson ? (
              <Link
                href={`/dashboard/courses/${lessonData.course.slug}/lessons/${nextLesson.slug}`}
                className="flex-1"
              >
                <Button className="w-full justify-end">
                  <span className="truncate">Next: {nextLesson.title}</span>
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Link
                href={`/dashboard/courses/${lessonData.course.slug}`}
                className="flex-1"
              >
                <Button className="w-full">Back to Course</Button>
              </Link>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Module lessons */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{moduleData.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {moduleData.lessons.map((lesson) => {
                  const isCurrent = lesson.slug === lessonData.slug
                  return (
                    <Link
                      key={lesson.id}
                      href={`/dashboard/courses/${lessonData.course.slug}/lessons/${lesson.slug}`}
                    >
                      <div
                        className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                          isCurrent
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        <div className="shrink-0">
                          {isCurrent ? (
                            <Play className="h-4 w-4" />
                          ) : lesson.completed ? (
                            <CheckCircle2 className="h-4 w-4 text-teal" />
                          ) : (
                            <Circle className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                        <span className="text-sm font-medium truncate">
                          {lesson.title}
                        </span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Help card */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-primary-foreground/80 mb-4">
                Our AI Course Tutor can answer questions about this lesson in real-time.
              </p>
              <Link href="/dashboard/tutor">
                <Button variant="secondary" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Ask AI Tutor
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

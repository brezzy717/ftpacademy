"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  Eye,
  Users,
  Clock,
  CheckCircle2,
  MoreVertical,
} from "lucide-react"

// Mock course data - will be replaced with database queries
const coursesData = [
  {
    id: "1",
    name: "Agentic AI Development & Machine Learning",
    slug: "agentic-ai-ml",
    description: "Master AI agents, machine learning, automation workflows, and LLM integration.",
    status: "Active",
    modules: 12,
    lessons: 64,
    enrolledStudents: 142,
    averageProgress: 58,
    duration: "20 weeks",
    createdDate: "2024-08-01",
  },
  {
    id: "2",
    name: "HVAC Certification Program",
    slug: "hvac-certification",
    description: "Comprehensive training in heating, ventilation, and air conditioning systems.",
    status: "Active",
    modules: 8,
    lessons: 42,
    enrolledStudents: 67,
    averageProgress: 62,
    duration: "12 weeks",
    createdDate: "2024-07-15",
  },
  {
    id: "3",
    name: "Commercial Driver's License (CDL) Training",
    slug: "cdl-training",
    description: "Professional CDL training with hands-on driving experience.",
    status: "Active",
    modules: 6,
    lessons: 28,
    enrolledStudents: 38,
    averageProgress: 71,
    duration: "8 weeks",
    createdDate: "2024-06-01",
  },
]

const modulesList = [
  {
    id: "1",
    courseId: "1",
    courseName: "Agentic AI & ML",
    name: "Introduction to AI and Machine Learning",
    order: 1,
    lessons: 5,
    duration: "2 weeks",
    status: "Published",
  },
  {
    id: "2",
    courseId: "1",
    courseName: "Agentic AI & ML",
    name: "Programming Foundations (Python)",
    order: 2,
    lessons: 6,
    duration: "2 weeks",
    status: "Published",
  },
  {
    id: "3",
    courseId: "1",
    courseName: "Agentic AI & ML",
    name: "Data Management and Big Data",
    order: 3,
    lessons: 5,
    duration: "2 weeks",
    status: "Draft",
  },
]

export default function CourseManagementPage() {
  const [activeTab, setActiveTab] = useState<"courses" | "modules">("courses")

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
            <h1 className="text-3xl font-bold">Course Management</h1>
            <p className="text-muted-foreground mt-1">
              Create and manage courses, modules, and lessons
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            {activeTab === "courses" ? "New Course" : "New Module"}
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        <button
          onClick={() => setActiveTab("courses")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "courses"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          Courses
        </button>
        <button
          onClick={() => setActiveTab("modules")}
          className={`px-4 py-2 font-medium transition-colors ${
            activeTab === "modules"
              ? "border-b-2 border-primary text-primary"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          Modules & Lessons
        </button>
      </div>

      {/* Courses tab */}
      {activeTab === "courses" && (
        <>
          {/* Stats */}
          <div className="grid sm:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Total Courses</p>
                <p className="text-2xl font-bold">{coursesData.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Total Modules</p>
                <p className="text-2xl font-bold">
                  {coursesData.reduce((sum, course) => sum + course.modules, 0)}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Total Lessons</p>
                <p className="text-2xl font-bold">
                  {coursesData.reduce((sum, course) => sum + course.lessons, 0)}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Total Enrollments</p>
                <p className="text-2xl font-bold">
                  {coursesData.reduce((sum, course) => sum + course.enrolledStudents, 0)}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Courses grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-2">{course.name}</CardTitle>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {course.modules} modules, {course.lessons} lessons
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.enrolledStudents} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-teal" />
                      <span>{course.averageProgress}% avg</span>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="pt-3 border-t">
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        course.status === "Active"
                          ? "bg-teal/10 text-teal"
                          : "bg-secondary text-muted-foreground"
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

      {/* Modules tab */}
      {activeTab === "modules" && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>All Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                        Module Name
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                        Course
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                        Order
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                        Lessons
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                        Duration
                      </th>
                      <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                        Status
                      </th>
                      <th className="text-right py-3 px-4 font-medium text-sm text-muted-foreground">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {modulesList.map((module) => (
                      <tr key={module.id} className="border-b last:border-0 hover:bg-secondary/50">
                        <td className="py-4 px-4">
                          <p className="font-medium">{module.name}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-muted-foreground">
                            {module.courseName}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm">Module {module.order}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{module.lessons} lessons</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{module.duration}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-block px-2 py-1 text-xs rounded-full ${
                              module.status === "Published"
                                ? "bg-teal/10 text-teal"
                                : "bg-accent/10 text-accent"
                            }`}
                          >
                            {module.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}

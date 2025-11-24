"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  Calendar,
  MoreVertical,
  UserPlus,
  ChevronLeft,
} from "lucide-react"

// Mock student data - will be replaced with database queries
const studentsData = [
  {
    id: "1",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 123-4567",
    program: "Agentic AI & ML",
    cohort: "Fall 2024",
    status: "Active",
    progress: 68,
    enrolledDate: "2024-09-15",
    lastActive: "2024-11-23",
  },
  {
    id: "2",
    firstName: "Michael",
    lastName: "Chen",
    email: "mchen@example.com",
    phone: "(555) 234-5678",
    program: "HVAC Certification",
    cohort: "Fall 2024",
    status: "Active",
    progress: 45,
    enrolledDate: "2024-09-20",
    lastActive: "2024-11-22",
  },
  {
    id: "3",
    firstName: "Emma",
    lastName: "Davis",
    email: "emma.d@example.com",
    phone: "(555) 345-6789",
    program: "Agentic AI & ML",
    cohort: "Fall 2024",
    status: "Pending",
    progress: 0,
    enrolledDate: "2024-11-13",
    lastActive: "2024-11-20",
  },
  {
    id: "4",
    firstName: "James",
    lastName: "Wilson",
    email: "jwilson@example.com",
    phone: "(555) 456-7890",
    program: "CDL Training",
    cohort: "Winter 2025",
    status: "Active",
    progress: 92,
    enrolledDate: "2024-08-01",
    lastActive: "2024-11-24",
  },
  {
    id: "5",
    firstName: "Olivia",
    lastName: "Martinez",
    email: "olivia.m@example.com",
    phone: "(555) 567-8901",
    program: "Agentic AI & ML",
    cohort: "Fall 2024",
    status: "Active",
    progress: 34,
    enrolledDate: "2024-10-05",
    lastActive: "2024-11-23",
  },
  {
    id: "6",
    firstName: "David",
    lastName: "Brown",
    email: "dbrown@example.com",
    phone: "(555) 678-9012",
    program: "HVAC Certification",
    cohort: "Fall 2024",
    status: "Inactive",
    progress: 15,
    enrolledDate: "2024-09-10",
    lastActive: "2024-10-15",
  },
]

export default function StudentsManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // Filter students based on search and status
  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || student.status.toLowerCase() === statusFilter

    return matchesSearch && matchesStatus
  })

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <Link href="/dashboard/admin" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Admin Dashboard
        </Link>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">Student Management</h1>
            <p className="text-muted-foreground mt-1">
              View and manage all enrolled students
            </p>
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Filters and actions */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search students by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Status filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-background"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
              <option value="graduated">Graduated</option>
            </select>

            {/* Export button */}
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid sm:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Total Students</p>
            <p className="text-2xl font-bold">{studentsData.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Active</p>
            <p className="text-2xl font-bold text-teal">
              {studentsData.filter((s) => s.status === "Active").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-accent">
              {studentsData.filter((s) => s.status === "Pending").length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Inactive</p>
            <p className="text-2xl font-bold text-muted-foreground">
              {studentsData.filter((s) => s.status === "Inactive").length}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Students table */}
      <Card>
        <CardHeader>
          <CardTitle>
            Students ({filteredStudents.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Student
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Contact
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Program
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Progress
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-sm text-muted-foreground">
                    Enrolled
                  </th>
                  <th className="text-right py-3 px-4 font-medium text-sm text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="border-b last:border-0 hover:bg-secondary/50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="font-medium">
                          {student.firstName} {student.lastName}
                        </p>
                        <p className="text-sm text-muted-foreground">{student.cohort}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <a href={`mailto:${student.email}`} className="hover:text-primary">
                            {student.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          <span>{student.phone}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-sm">{student.program}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          student.status === "Active"
                            ? "bg-teal/10 text-teal"
                            : student.status === "Pending"
                            ? "bg-accent/10 text-accent"
                            : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-[100px] bg-secondary rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(student.enrolledDate).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredStudents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No students found matching your criteria.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

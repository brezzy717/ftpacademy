import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Laptop,
  HelpCircle,
  BookOpen,
  Briefcase,
  FileText,
  Mail,
  Phone,
  ArrowRight,
  Download,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Student Resources",
  description: "Access student support resources including tech support, academic help, career services, and important documents.",
}

const resources = [
  {
    title: "Tech Support",
    description: "Having issues with your laptop, software, or accessing the learning platform? Our tech team is here to help.",
    icon: Laptop,
    links: [
      { label: "Submit Support Ticket", href: "/support/ticket" },
      { label: "FAQ: Common Tech Issues", href: "/support/faq" },
    ],
    contact: "techsupport@ftp.academy",
  },
  {
    title: "Academic Support",
    description: "Need help understanding course material or want to connect with a tutor? We've got you covered.",
    icon: BookOpen,
    links: [
      { label: "AI Course Tutor (in Dashboard)", href: "/login" },
      { label: "Office Hours Schedule", href: "/support/office-hours" },
    ],
    contact: "academics@ftp.academy",
  },
  {
    title: "Career Services",
    description: "Ready to job search? Access resume help, interview prep, and job placement assistance.",
    icon: Briefcase,
    links: [
      { label: "Career Services Portal", href: "/careers" },
      { label: "Resume Templates", href: "/resources/resume-templates" },
    ],
    contact: "careers@ftp.academy",
  },
  {
    title: "Student Services",
    description: "Questions about enrollment, funding, or general student matters? Our team is here.",
    icon: HelpCircle,
    links: [
      { label: "Contact Admissions", href: "/contact" },
      { label: "WIOA Support", href: "/admissions#wioa" },
    ],
    contact: "students@ftp.academy",
  },
]

const documents = [
  { title: "Student Handbook", description: "Policies, procedures, and expectations", icon: FileText },
  { title: "Academic Calendar", description: "Important dates and deadlines", icon: FileText },
  { title: "Course Catalog", description: "Detailed program information", icon: FileText },
  { title: "Tuition & Fees Schedule", description: "Complete cost breakdown", icon: FileText },
]

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Student Resources
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Everything you need to succeed in your program. From tech support to career services, we're here to help every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource) => (
              <Card key={resource.title}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <resource.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{resource.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <div className="space-y-2 mb-4">
                    {resource.links.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <ArrowRight className="h-4 w-4" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="pt-4 border-t">
                    <a
                      href={`mailto:${resource.contact}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Mail className="h-4 w-4" />
                      {resource.contact}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Documents */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Important Documents</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc) => (
              <Card key={doc.title} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                      <doc.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                    <Button variant="ghost" size="sm" className="mt-4">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="py-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-semibold mb-2">General Inquiries</h3>
                  <a href="mailto:info@ftp.academy" className="flex items-center justify-center gap-2 hover:underline">
                    <Mail className="h-4 w-4" />
                    info@ftp.academy
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <a href="tel:+1234567890" className="flex items-center justify-center gap-2 hover:underline">
                    <Phone className="h-4 w-4" />
                    (123) 456-7890
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Hours</h3>
                  <p className="text-primary-foreground/80">
                    Mon-Fri: 9am-6pm MST
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Current Student?</h2>
          <p className="mt-4 text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Log in to access your courses, AI tutor, and personalized dashboard.
          </p>
          <div className="mt-8">
            <Link href="/login">
              <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Student Login
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

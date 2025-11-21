import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  Users,
  Laptop,
  Award,
  Briefcase,
  Clock,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Wrench,
  Truck,
  Gift,
  CreditCard,
  BookOpen,
  HeadphonesIcon,
  Building2,
  Shield
} from "lucide-react"

const programs = [
  {
    title: "Agentic AI Development & Machine Learning",
    description: "Master AI agents, machine learning, automation workflows, and LLM integration for real-world applications.",
    duration: "20 weeks",
    tuition: "$14,250",
    icon: Cpu,
    href: "/programs/agentic-ai-development",
    status: "active",
  },
  {
    title: "HVAC Technician",
    description: "Learn heating, ventilation, and air conditioning systems with hands-on labs and certification prep.",
    duration: "24 weeks",
    tuition: "$12,500",
    icon: Wrench,
    href: "/programs/hvac-technician",
    status: "active",
  },
  {
    title: "CDL Professional Driver",
    description: "Prepare for your Commercial Driver's License with theory and in-person driving hours.",
    duration: "12 weeks",
    tuition: "$7,220",
    icon: Truck,
    href: "/programs/cdl-driver",
    status: "coming-soon",
  },
]

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Submit your application online. We'll review your background and goals to find the right program fit.",
  },
  {
    number: "02",
    title: "Funding & Admissions",
    description: "Work with our team to explore WIOA grants, payment plans, and other funding options available to you.",
  },
  {
    number: "03",
    title: "Classes & Training",
    description: "Engage in live online classes, pre-recorded modules, and hands-on training with expert instructors.",
  },
  {
    number: "04",
    title: "Graduate & Launch",
    description: "Earn your certification and access our job placement services or start your own business.",
  },
]

const audiences = [
  {
    title: "WIOA-Eligible Students",
    description: "Workforce Innovation and Opportunity Act funding may cover your entire tuition.",
    icon: CreditCard,
  },
  {
    title: "Veterans",
    description: "Special programs and support for those who served our country.",
    icon: Shield,
  },
  {
    title: "Justice-Impacted Individuals",
    description: "A fresh start with skills that employers value and respect.",
    icon: Users,
  },
  {
    title: "Career Changers",
    description: "Ready for something new? We'll help you build in-demand skills.",
    icon: Briefcase,
  },
]

const benefits = [
  { title: "HP Laptop", description: "Brand new, fully loaded with software", icon: Laptop },
  { title: "School Gear", description: "Sweatshirt, t-shirt, hat, lanyard, water bottle", icon: Gift },
  { title: "Exam Voucher", description: "Certification exam fees covered", icon: Award },
  { title: "$250 Gift Card", description: "Help with meals, gas, essentials", icon: CreditCard },
  { title: "Study Materials", description: "Notebooks, pens, day planner", icon: BookOpen },
  { title: "AI/LLM Credits", description: "Database access for your program", icon: Cpu },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Career-focused certification programs for the real world.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 sm:text-xl">
              Live and online programs in AI & automation, HVAC, and CDL — with WIOA and workforce funding options, job placement support, and everything you need to start your next chapter.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/apply">
                <Button size="xl" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="xl" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Talk to Admissions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs at a Glance */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Programs at a Glance</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              High-demand certifications that lead to real careers
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.title} className="relative overflow-hidden transition-shadow hover:shadow-lg">
                {program.status === "coming-soon" && (
                  <div className="absolute right-4 top-4 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                    Coming Soon
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <program.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {program.duration}
                    </span>
                    <span className="font-medium text-foreground">{program.tuition}</span>
                  </div>
                  <Link href={program.href} className="mt-4 inline-block">
                    <Button variant="outline" size="sm" disabled={program.status === "coming-soon"}>
                      {program.status === "coming-soon" ? "Learn More Soon" : "View Program"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How FTP Academy Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How FTP Academy Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your path from application to career in four simple steps
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-0.5 w-full bg-border lg:block" style={{ left: '50%', width: '100%' }} />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who We Serve</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              We believe everyone deserves a shot at a better future
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience) => (
              <div key={audience.title} className="rounded-xl bg-white/10 p-6 backdrop-blur">
                <audience.icon className="h-10 w-10 text-accent" />
                <h3 className="mt-4 text-lg font-semibold">{audience.title}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What&apos;s Included</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every enrolled student receives everything needed for success
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 rounded-lg border p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal/10">
                  <benefit.icon className="h-6 w-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Placement */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Job Placement & Career Support
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We don&apos;t just train you — we help you launch your career. Our partnerships with employers,
                including Fortune 500 companies, create real pathways to employment.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Resume and interview preparation",
                  "Direct connections to hiring employers",
                  "Entrepreneurship training for those starting their own business",
                  "Ongoing career support after graduation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/employers">
                  <Button variant="outline">
                    Learn About Our Partners
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-teal/20 flex items-center justify-center">
                <Building2 className="h-24 w-24 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-accent-foreground/80">
            Take the first step toward a rewarding career. Apply today and discover how FTP Academy
            can help you achieve your goals.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/apply">
              <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/programs">
              <Button size="xl" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Accreditation Strip */}
      <section className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span>AZ Private Postsecondary Education</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              <span>SARA Distance Learning Authorized</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              <span>WIOA Approved Provider</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

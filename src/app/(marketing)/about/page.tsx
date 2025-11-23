import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Shield,
  GraduationCap,
  Building2,
  Users,
  Home,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about First Thought Project Academy's mission to provide career-focused certification programs and transform lives through education.",
}

const values = [
  {
    title: "Opportunity for All",
    description: "We believe everyone deserves a chance at a better future, regardless of their past.",
    icon: Heart,
  },
  {
    title: "Real-World Skills",
    description: "Our programs focus on practical, in-demand skills that lead to actual careers.",
    icon: Target,
  },
  {
    title: "Student Success",
    description: "We measure our success by the success of our graduates in their careers.",
    icon: GraduationCap,
  },
  {
    title: "Integrity",
    description: "We operate with transparency and hold ourselves to the highest standards.",
    icon: Shield,
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About FTP Academy
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              First Thought Project Academy was founded with a simple belief: everyone deserves access to quality education that leads to real careers and meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground">
                To provide accessible, high-quality career certification programs that empower individuals — especially those who need a second chance — to build meaningful careers and transform their lives.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-teal/5 border border-teal/10">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-teal" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground">
                A world where anyone with determination can access the education and support they need to achieve financial stability, personal growth, and career fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                First Thought Project Academy was born from a simple realization: the people who need education the most often have the hardest time accessing it.
              </p>
              <p>
                We learned about the WIOA (Workforce Innovation and Opportunity Act) grant program — federal funding designed to help justice-impacted individuals, veterans, those at the poverty line, and people exiting rehabilitation get the skills they need for a fresh start.
              </p>
              <p>
                Rather than leaving these individuals to navigate expensive traditional education or predatory programs, we decided to build something different: a school designed from the ground up to serve these populations with high-quality, career-focused programs.
              </p>
              <p>
                After navigating the rigorous process of accreditation, state oversight approval, and WIOA provider certification, FTP Academy was born. Today, we offer distance learning programs that serve students across all 50 states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trades + Tech */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Why Trades + Tech?</h2>
          <div className="max-w-3xl mx-auto text-center text-primary-foreground/80">
            <p className="text-lg">
              We chose to focus on AI/automation, HVAC, and CDL because these are high-demand fields with strong job growth and real career potential. They don't require 4-year degrees, they pay well, and they offer paths to both employment and entrepreneurship.
            </p>
            <p className="mt-4 text-lg">
              71% of all new STEM jobs are in computing. HVAC technicians are in high demand everywhere. And America always needs qualified truck drivers. These aren't just jobs — they're careers with staying power.
            </p>
          </div>
        </div>
      </section>

      {/* Future Vision - Transitional Housing */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Home className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wide">Coming 2026-2027</span>
              </div>
              <h2 className="text-3xl font-bold">Transitional Housing Community</h2>
              <p className="mt-4 text-muted-foreground">
                Our vision extends beyond education. We're working to establish a transitional housing community for students exiting confinement or rehabilitation centers.
              </p>
              <p className="mt-4 text-muted-foreground">
                This community will provide not just housing and meals, but a supportive environment of like-minded peers all working toward similar goals while attending our certification programs.
              </p>
              <p className="mt-4 text-muted-foreground">
                This program will be 100% funded through angel investors, grants from state and federal governments, and our non-profit sister organization.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl bg-gradient-to-br from-primary/20 to-teal/20 flex items-center justify-center">
              <Building2 className="h-24 w-24 text-primary/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Accreditation & Oversight</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg border bg-background">
                <Shield className="h-8 w-8 mx-auto text-primary mb-3" />
                <h3 className="font-semibold">State Oversight</h3>
                <p className="text-sm text-muted-foreground mt-2">Arizona State Board for Private Postsecondary Education</p>
              </div>
              <div className="p-6 rounded-lg border bg-background">
                <GraduationCap className="h-8 w-8 mx-auto text-primary mb-3" />
                <h3 className="font-semibold">Distance Learning</h3>
                <p className="text-sm text-muted-foreground mt-2">SARA (State Authorization Reciprocity Agreement)</p>
              </div>
              <div className="p-6 rounded-lg border bg-background">
                <Users className="h-8 w-8 mx-auto text-primary mb-3" />
                <h3 className="font-semibold">Workforce Programs</h3>
                <p className="text-sm text-muted-foreground mt-2">WIOA Approved Provider with AZ DES</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Join Us in Making a Difference</h2>
          <p className="mt-4 text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Whether you're a student ready to change your life, an employer looking to hire, or someone who wants to support our mission — we'd love to connect.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/apply">
              <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Apply as a Student
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/employers">
              <Button size="xl" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

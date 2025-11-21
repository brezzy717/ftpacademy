import Link from "next/link"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { programs, getProgramBySlug, formatTuition } from "@/lib/programs"
import {
  Clock,
  DollarSign,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Users,
  Briefcase,
  ChevronDown,
} from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const program = getProgramBySlug(slug)

  if (!program) {
    return { title: "Program Not Found" }
  }

  return {
    title: program.name,
    description: program.fullDescription,
  }
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params
  const program = getProgramBySlug(slug)

  if (!program) {
    notFound()
  }

  if (program.status === "coming-soon") {
    return (
      <div className="flex flex-col">
        <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent">
              Coming Soon
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {program.name}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {program.fullDescription}
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Notified When Available
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {program.name}
              </h1>
              <p className="mt-6 text-lg text-primary-foreground/80">
                {program.fullDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary-foreground/70" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary-foreground/70" />
                  <span className="font-semibold">{formatTuition(program.tuition)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary-foreground/70" />
                  <span>{program.format}</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="/apply">
                  <Button size="xl" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="xl" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Schedule a Call
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Info Card */}
            <Card className="bg-white/10 border-white/20 text-primary-foreground">
              <CardHeader>
                <CardTitle>Program Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                  <span>Live + pre-recorded instruction</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                  <span>Brand new HP laptop included</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                  <span>AI-powered course tutor</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                  <span>WIOA funding available</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5" />
                  <span>Job placement assistance</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Who This Program Is For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {program.whoItsFor.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-lg bg-secondary/50">
                <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">What You&apos;ll Learn</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {program.whatYoullLearn.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum / Modules */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Curriculum Overview</h2>
          <div className="space-y-4">
            {program.modules.map((module, index) => (
              <div
                key={module.title}
                className="border rounded-lg p-4 sm:p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{module.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {module.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {module.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6" />
            <h2 className="text-2xl font-bold">Career Outcomes</h2>
          </div>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl">
            Graduates of this program are prepared for a variety of roles and career paths:
          </p>
          <div className="flex flex-wrap gap-3">
            {program.careerOutcomes.map((outcome) => (
              <span
                key={outcome}
                className="rounded-full bg-white/10 px-4 py-2 text-sm"
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {program.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border rounded-lg"
              >
                <summary className="flex cursor-pointer items-center justify-between p-4 sm:p-6 font-medium">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="mt-4 text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Take the first step toward your new career. Apply today or schedule a call with our admissions team.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/apply">
              <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/admissions">
              <Button size="xl" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                Explore Funding Options
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

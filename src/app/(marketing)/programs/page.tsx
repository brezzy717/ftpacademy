import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { programs, formatTuition } from "@/lib/programs"
import { Clock, ArrowRight, Cpu, Wrench, Truck, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore our career-focused certification programs in AI & Machine Learning, HVAC, and CDL. Distance learning with WIOA funding options.",
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  cpu: Cpu,
  wrench: Wrench,
  truck: Truck,
}

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Programs
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Choose from high-demand certification programs designed for the real world.
              Each program combines live instruction, hands-on training, and career support.
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program) => {
              const Icon = iconMap[program.icon] || Cpu
              return (
                <Card key={program.slug} className="overflow-hidden">
                  <div className="grid lg:grid-cols-3">
                    {/* Program Info */}
                    <div className="lg:col-span-2 p-6 sm:p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold">{program.name}</h2>
                            {program.status === "coming-soon" && (
                              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                                Coming Soon
                              </span>
                            )}
                          </div>
                          <p className="mt-2 text-muted-foreground">
                            {program.fullDescription}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="font-semibold text-primary">
                          {formatTuition(program.tuition)}
                        </div>
                        <div className="text-muted-foreground">
                          {program.format}
                        </div>
                      </div>

                      <div className="mt-6">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          Career Outcomes
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {program.careerOutcomes.slice(0, 4).map((outcome) => (
                            <span
                              key={outcome}
                              className="rounded-full bg-secondary px-3 py-1 text-sm"
                            >
                              {outcome}
                            </span>
                          ))}
                          {program.careerOutcomes.length > 4 && (
                            <span className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                              +{program.careerOutcomes.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Quick Facts & CTA */}
                    <div className="bg-secondary/50 p-6 sm:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold mb-4">What You&apos;ll Learn</h3>
                        <ul className="space-y-2">
                          {program.whatYoullLearn.slice(0, 5).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 mt-0.5 text-teal shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 space-y-3">
                        <Link href={`/programs/${program.slug}`}>
                          <Button
                            className="w-full"
                            disabled={program.status === "coming-soon"}
                          >
                            {program.status === "coming-soon" ? "Coming Soon" : "View Full Program"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                        {program.status === "active" && (
                          <Link href="/apply">
                            <Button variant="outline" className="w-full">
                              Apply Now
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Funding CTA */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Worried About Tuition?</h2>
          <p className="mt-4 text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Many of our students qualify for WIOA grants that cover their entire tuition.
            We also offer payment plans and scholarships.
          </p>
          <div className="mt-8">
            <Link href="/admissions">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Learn About Funding Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

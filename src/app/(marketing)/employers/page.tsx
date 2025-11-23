import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Users,
  Award,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Building2,
  Handshake,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Employer Partners",
  description: "Partner with FTP Academy to access a pipeline of skilled, motivated graduates in AI, HVAC, and CDL. Hire trained professionals.",
}

const benefits = [
  {
    title: "Pre-Screened Candidates",
    description: "Our graduates have completed rigorous training and demonstrated commitment to their career path.",
    icon: Users,
  },
  {
    title: "Workforce-Ready Skills",
    description: "Students learn practical, industry-relevant skills through hands-on training and real-world projects.",
    icon: Award,
  },
  {
    title: "Diverse Talent Pool",
    description: "Access motivated individuals including veterans, career changers, and those seeking a fresh start.",
    icon: Briefcase,
  },
  {
    title: "Ongoing Partnership",
    description: "We work with you to understand your needs and help match graduates to your open positions.",
    icon: Handshake,
  },
]

const partnershipTypes = [
  {
    title: "Hiring Pipeline",
    description: "Get first access to our graduates for entry-level positions. We'll match qualified candidates to your open roles.",
  },
  {
    title: "Externship Host",
    description: "Provide hands-on training opportunities for our HVAC students while evaluating potential hires.",
  },
  {
    title: "Industry Advisor",
    description: "Help shape our curriculum to ensure graduates have the skills your industry needs.",
  },
  {
    title: "Sponsorship",
    description: "Sponsor student tuition in exchange for work commitments after graduation.",
  },
]

export default function EmployersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Partner With FTP Academy
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Access a pipeline of motivated, trained professionals in AI/automation, HVAC, and commercial driving. Our graduates are workforce-ready and eager to contribute.
            </p>
            <div className="mt-10">
              <a href="#partner-form">
                <Button size="xl" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Partner With Us</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Partnership Opportunities</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We offer flexible partnership models to meet your hiring and training needs.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnershipTypes.map((type) => (
              <Card key={type.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{type.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Programs We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  Graduates skilled in AI development, automation, prompt engineering, and LLM integration.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    Python, TensorFlow, LangChain
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    Workflow automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    Cloud deployment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>HVAC Technician</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  Entry-level technicians trained in installation, maintenance, and troubleshooting.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    EPA 608 certification prep
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    Hands-on lab experience
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    Safety & diagnostics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>CDL Driver</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center mb-4">
                  CDL-ready drivers trained in safety, compliance, and professional driving skills.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    Class A CDL preparation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    DOT regulations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal" />
                    Coming Soon
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Form */}
      <section id="partner-form" className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Ready to Partner?</h2>
              <p className="mt-4 text-primary-foreground/80">
                Fill out the form and our partnerships team will be in touch to discuss how we can work together to meet your workforce needs.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Access skilled, motivated graduates",
                  "No recruitment fees",
                  "Ongoing support and communication",
                  "Flexible partnership models",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-white text-foreground">
              <CardHeader>
                <CardTitle>Partner Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name *</label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company *</label>
                      <Input id="company" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email *</label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                      <Input id="phone" type="tel" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-medium">Partnership Interest *</label>
                    <select
                      id="interest"
                      required
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm"
                    >
                      <option value="">Select an option</option>
                      <option value="hiring">Hiring Pipeline</option>
                      <option value="externship">Externship Host</option>
                      <option value="advisor">Industry Advisor</option>
                      <option value="sponsor">Tuition Sponsorship</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={3}
                      className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm"
                      placeholder="Tell us about your hiring needs..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Inquiry
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

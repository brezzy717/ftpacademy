import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle2,
  ArrowRight,
  DollarSign,
  FileText,
  Users,
  Calendar,
  CreditCard,
  Shield,
  HelpCircle,
  ChevronDown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Admissions & Tuition",
  description: "Learn about FTP Academy admissions process, tuition costs, WIOA funding, payment plans, and financial aid options.",
}

const steps = [
  {
    number: "1",
    title: "Submit Your Application",
    description: "Complete our online application form with your basic information, program interest, and background.",
    icon: FileText,
  },
  {
    number: "2",
    title: "Speak with Admissions",
    description: "Our team will contact you to discuss your goals, answer questions, and explore funding options.",
    icon: Users,
  },
  {
    number: "3",
    title: "Complete Enrollment",
    description: "Once approved, complete your enrollment paperwork and prepare for your start date.",
    icon: Calendar,
  },
  {
    number: "4",
    title: "Begin Your Journey",
    description: "Receive your student materials, access the learning platform, and start classes!",
    icon: CheckCircle2,
  },
]

const fundingOptions = [
  {
    title: "WIOA Grants",
    description: "The Workforce Innovation and Opportunity Act provides funding for eligible students. This can cover your entire tuition.",
    highlights: ["Up to 100% tuition coverage", "No repayment required", "Available in all 50 states"],
    icon: Shield,
  },
  {
    title: "Payment Plans",
    description: "We offer flexible, no-interest payment plans to help you manage tuition costs over time.",
    highlights: ["No interest charges", "Flexible terms", "Low monthly payments"],
    icon: CreditCard,
  },
  {
    title: "Scholarships",
    description: "Internal scholarships are available for qualified students based on need and merit.",
    highlights: ["Need-based awards", "Merit scholarships", "Special populations"],
    icon: DollarSign,
  },
]

const faqs = [
  {
    question: "What are the admission requirements?",
    answer: "You must be 18 or older, have a high school diploma or GED, and have basic computer literacy. No prior experience in your chosen field is required.",
  },
  {
    question: "How do I know if I qualify for WIOA funding?",
    answer: "WIOA eligibility is determined by your local workforce development office. Generally, you may qualify if you're unemployed, underemployed, a veteran, justice-impacted, or meet certain income requirements. We'll help connect you with your local WIOA office.",
  },
  {
    question: "What documents do I need to apply?",
    answer: "You'll need a valid ID, proof of high school completion (diploma or GED), and if applying for WIOA, additional documentation may be required by your local workforce office.",
  },
  {
    question: "How long does the admissions process take?",
    answer: "The application review typically takes 2-3 business days. If you're applying for WIOA funding, that process may take 2-4 weeks depending on your local office.",
  },
  {
    question: "When do programs start?",
    answer: "We have rolling enrollment with new cohorts starting regularly. Contact admissions for the next available start date for your program of interest.",
  },
  {
    question: "Can I work while enrolled?",
    answer: "Yes! Our programs are designed with working adults in mind. With a mix of live sessions and self-paced content, you can balance work and studies.",
  },
]

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Admissions & Tuition
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              We believe everyone deserves access to quality education. That's why we offer multiple funding options and a straightforward admissions process.
            </p>
            <div className="mt-10">
              <Link href="/apply">
                <Button size="xl" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Admissions Process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition */}
      <section className="py-16 sm:py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Program Tuition</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tuition includes all course materials, laptop, student gear, exam vouchers, and career support.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg">AI & Machine Learning</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary">$14,250</div>
                <p className="text-muted-foreground mt-2">20 weeks</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg">HVAC Technician</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary">$12,500</div>
                <p className="text-muted-foreground mt-2">24 weeks</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg">CDL Driver</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-primary">$7,220</div>
                <p className="text-muted-foreground mt-2">12 weeks (Coming Soon)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funding Options */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Funding Options</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't let tuition costs hold you back. We have options to help make your education affordable.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {fundingOptions.map((option) => (
              <Card key={option.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <option.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-teal" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WIOA Section */}
      <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">About WIOA Funding</h2>
              <p className="mt-4 text-primary-foreground/80">
                The Workforce Innovation and Opportunity Act (WIOA) is a federal program that helps job seekers access education, training, and support services. Through partnerships with state workforce agencies, eligible students can receive funding that covers their entire tuition.
              </p>
              <h3 className="mt-8 font-semibold text-lg">You may be eligible if you are:</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Unemployed or underemployed",
                  "A veteran or military spouse",
                  "Justice-impacted (previously incarcerated)",
                  "Exiting a rehabilitation program",
                  "Below certain income thresholds",
                  "Seeking a career change",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">How to Apply for WIOA</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">1</span>
                  <p>Contact your local American Job Center or workforce development office</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">2</span>
                  <p>Complete their eligibility assessment</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">3</span>
                  <p>Request FTP Academy as your training provider</p>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground font-semibold">4</span>
                  <p>We'll coordinate directly with your WIOA counselor</p>
                </li>
              </ol>
              <p className="mt-6 text-sm text-primary-foreground/70">
                Need help finding your local WIOA office? Contact our admissions team and we'll assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border rounded-lg">
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
          <h2 className="text-3xl font-bold">Ready to Take the First Step?</h2>
          <p className="mt-4 text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Apply today or schedule a call with our admissions team to learn more about your funding options.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/apply">
              <Button size="xl" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="xl" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                Talk to Admissions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

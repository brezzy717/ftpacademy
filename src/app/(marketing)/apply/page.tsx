import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Apply Now",
  description: "Apply to FTP Academy's career certification programs. Start your journey to a new career in AI, HVAC, or CDL.",
}

const benefits = [
  "Brand new HP laptop with all software",
  "Student ID and branded school gear",
  "Exam voucher for certification",
  "$250 Visa gift card at start",
  "Job placement assistance",
  "AI-powered tutoring support",
]

export default function ApplyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Apply to FTP Academy
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80">
              Take the first step toward your new career. Complete the application below and our admissions team will be in touch within 2-3 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits Sidebar */}
            <div className="lg:order-2">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>What You&apos;ll Receive</CardTitle>
                  <CardDescription>Every student gets these benefits</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <Card className="lg:col-span-2 lg:order-1">
              <CardHeader>
                <CardTitle>Application Form</CardTitle>
                <CardDescription>All fields marked with * are required</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name *
                        </label>
                        <Input id="firstName" name="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name *
                        </label>
                        <Input id="lastName" name="lastName" required />
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input id="email" name="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone *
                        </label>
                        <Input id="phone" name="phone" type="tel" required />
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <label htmlFor="state" className="text-sm font-medium">
                        State of Residence *
                      </label>
                      <select
                        id="state"
                        name="state"
                        required
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="">Select your state</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                    </div>
                  </div>

                  {/* Program Interest */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Program Interest</h3>
                    <div className="space-y-2">
                      <label htmlFor="program" className="text-sm font-medium">
                        Which program are you interested in? *
                      </label>
                      <select
                        id="program"
                        name="program"
                        required
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="">Select a program</option>
                        <option value="ai-ml">Agentic AI Development & Machine Learning</option>
                        <option value="hvac">HVAC Technician</option>
                        <option value="cdl">CDL Professional Driver (Coming Soon)</option>
                      </select>
                    </div>
                  </div>

                  {/* Funding Interest */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Funding</h3>
                    <div className="space-y-2">
                      <label htmlFor="funding" className="text-sm font-medium">
                        How do you plan to pay for tuition? *
                      </label>
                      <select
                        id="funding"
                        name="funding"
                        required
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        <option value="">Select an option</option>
                        <option value="wioa">WIOA Grant (Need assistance applying)</option>
                        <option value="wioa-approved">WIOA (Already approved)</option>
                        <option value="payment-plan">Payment Plan</option>
                        <option value="self-pay">Self-Pay (Full tuition)</option>
                        <option value="employer">Employer Sponsored</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="hearAbout" className="text-sm font-medium">
                          How did you hear about us?
                        </label>
                        <select
                          id="hearAbout"
                          name="hearAbout"
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                          <option value="">Select an option</option>
                          <option value="search">Google/Search Engine</option>
                          <option value="social">Social Media</option>
                          <option value="referral">Friend/Family Referral</option>
                          <option value="wioa-office">WIOA/Workforce Office</option>
                          <option value="employer">Employer</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="notes" className="text-sm font-medium">
                          Anything else you&apos;d like us to know?
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows={4}
                          className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          placeholder="Tell us about your goals, background, or any questions you have..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="xl" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                      Submit Application
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <p className="mt-4 text-sm text-muted-foreground">
                      By submitting this application, you agree to be contacted by our admissions team via email and phone.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

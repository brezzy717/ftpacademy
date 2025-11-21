import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react"

const footerNavigation = {
  programs: [
    { name: "AI & Machine Learning", href: "/programs/agentic-ai-development" },
    { name: "HVAC Technician", href: "/programs/hvac-technician" },
    { name: "CDL Driver (Coming Soon)", href: "/programs/cdl-driver" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Admissions", href: "/admissions" },
    { name: "Employer Partners", href: "/employers" },
    { name: "Student Resources", href: "/resources" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Tech Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and Contact */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-lg font-bold">FTP Academy</span>
                <p className="text-xs text-primary-foreground/70">First Thought Project Academy</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Career-focused certification programs for the real world. Serving students across all 50 states through distance learning.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary-foreground/70" />
                <span>Arizona, USA</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary-foreground/70" />
                <a href="tel:+1234567890" className="hover:underline">(123) 456-7890</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary-foreground/70" />
                <a href="mailto:info@ftp.academy" className="hover:underline">info@ftp.academy</a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Programs</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">Company</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Support</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">Legal</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Accreditation Strip */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-primary-foreground/60">
            <span>Oversight: AZ Private Postsecondary Education</span>
            <span className="hidden sm:inline">•</span>
            <span>Distance Learning: SARA Authorized</span>
            <span className="hidden sm:inline">•</span>
            <span>WIOA Approved Provider</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} First Thought Project Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "FTP Academy | Career-Focused Certification Programs",
    template: "%s | FTP Academy",
  },
  description:
    "First Thought Project Academy offers career-focused certification programs in AI & Machine Learning, HVAC, and CDL. WIOA approved, serving all 50 states through distance learning.",
  keywords: [
    "certification programs",
    "WIOA",
    "distance learning",
    "AI training",
    "HVAC certification",
    "CDL training",
    "career training",
    "workforce development",
  ],
  authors: [{ name: "First Thought Project Academy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ftp.academy",
    siteName: "FTP Academy",
    title: "FTP Academy | Career-Focused Certification Programs",
    description:
      "Live and online certification programs in AI & automation, HVAC, and CDL with WIOA funding options and job placement support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FTP Academy | Career-Focused Certification Programs",
    description:
      "Live and online certification programs in AI & automation, HVAC, and CDL with WIOA funding options and job placement support.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

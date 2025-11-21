# First Thought Project Academy (FTP Academy)

> Career-focused certification programs for the real world.

**Live URL:** [https://www.ftp.academy](https://www.ftp.academy)

## Overview

FTP Academy is a private post-secondary certification school offering distance learning programs in high-demand fields. We serve WIOA-eligible students, justice-impacted individuals, veterans, under-employed adults, and career changers across all 50 U.S. states.

### Programs Offered

| Program | Duration | Tuition |
|---------|----------|---------|
| Agentic AI Development & Machine Learning | 20 weeks | $14,250 |
| HVAC Technician | 24 weeks | $12,500 |
| CDL Professional Driver | 12 weeks | $7,220 (Coming Soon) |

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** PostgreSQL (Supabase/Neon)
- **ORM:** Prisma
- **Authentication:** NextAuth.js / Clerk
- **AI Tutor:** OpenAI GPT-4 + RAG (Pinecone/Supabase Vector)
- **Voice:** Whisper (STT) + ElevenLabs/OpenAI TTS
- **File Storage:** Cloudflare R2 / Supabase Storage
- **Video:** Mux / Cloudflare Stream
- **Hosting:** Vercel
- **Payments:** Stripe

## Project Structure

```
ftpacademy/
├── docs/
│   ├── curriculum/          # Course curriculum documents
│   ├── specs/               # Original specifications
│   └── prd/                 # Product Requirements Document
├── prisma/
│   └── schema.prisma        # Database schema
├── public/
│   └── images/              # Static assets
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── (marketing)/     # Public marketing pages
│   │   ├── (auth)/          # Login/signup pages
│   │   ├── (student)/       # Student portal (protected)
│   │   ├── (staff)/         # Staff dashboard (protected)
│   │   ├── (admin)/         # Admin dashboard (protected)
│   │   └── api/             # API routes
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── marketing/       # Marketing page components
│   │   ├── dashboard/       # Dashboard components
│   │   └── course/          # Course/lesson components
│   ├── lib/                 # Utilities and helpers
│   │   ├── auth.ts          # Auth configuration
│   │   ├── db.ts            # Database client
│   │   ├── ai.ts            # AI tutor integration
│   │   └── utils.ts         # General utilities
│   └── types/               # TypeScript type definitions
├── .env.example             # Environment variables template
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database (or Supabase account)

### Installation

```bash
# Clone the repository
git clone https://github.com/brezzy717/ftpacademy.git
cd ftpacademy

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Set up the database
pnpm prisma generate
pnpm prisma db push

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Features

### Marketing Site
- Home page with program overview
- Individual program detail pages
- Admissions & tuition information
- About page with mission/vision
- Employer & partner information
- Contact and application forms

### Student Portal
- Personalized dashboard with progress tracking
- Course content (videos, PDFs, modules, lessons)
- Quiz and assessment system
- AI-powered course tutor (text + voice)
- Resource downloads
- Announcements and notifications

### Staff Dashboard
- View assigned courses and cohorts
- Student roster and progress
- Upcoming session calendar

### Admin Dashboard
- Full student management
- Course content management (CRUD)
- Announcements management
- Analytics and KPIs

## Accreditation & Oversight

- **Oversight:** Arizona State Board for Private Postsecondary Education
- **Distance Learning:** SARA (State Authorization Reciprocity Agreement)
- **Workforce:** Arizona Department of Economic Security / WIOA Programs

## Contributing

This is a private project for First Thought Project Academy.

## License

Proprietary - All Rights Reserved

---

Built with care for students seeking real career transformation.

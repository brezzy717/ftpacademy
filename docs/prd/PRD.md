# Product Requirements Document (PRD)
# First Thought Project Academy - E-Learning Platform

**Version:** 1.0
**Date:** November 21, 2024
**Author:** Development Team
**Status:** Ready for Development

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Product Overview](#2-product-overview)
3. [User Personas](#3-user-personas)
4. [Technical Architecture](#4-technical-architecture)
5. [Feature Specifications](#5-feature-specifications)
6. [Database Schema](#6-database-schema)
7. [API Endpoints](#7-api-endpoints)
8. [UI/UX Requirements](#8-uiux-requirements)
9. [Security Requirements](#9-security-requirements)
10. [Deployment & Infrastructure](#10-deployment--infrastructure)
11. [Development Phases](#11-development-phases)
12. [Success Metrics](#12-success-metrics)

---

## 1. Executive Summary

### 1.1 Purpose
Build a comprehensive e-learning platform for First Thought Project Academy (FTP Academy), a WIOA-approved private post-secondary certification school. The platform will consist of:
- A public marketing website
- An authenticated student portal with course delivery
- Administrative and staff dashboards
- An AI-powered course tutor

### 1.2 Business Goals
- Enable distance learning certification programs across all 50 U.S. states
- Serve WIOA-eligible students, veterans, justice-impacted individuals, and career changers
- Provide a modern, engaging learning experience competitive with top e-learning platforms
- Support WIOA grant compliance and reporting requirements
- Scale from initial launch to thousands of students

### 1.3 Key Success Factors
- Student completion rates > 80%
- Student satisfaction scores > 4.5/5
- Zero security incidents with student data
- 99.9% platform uptime
- Mobile-responsive experience across all devices

---

## 2. Product Overview

### 2.1 Domain & Branding
- **Domain:** https://www.ftp.academy
- **Name:** First Thought Project Academy (FTP Academy)
- **Location:** Arizona (serving all 50 states)
- **Brand Voice:** Professional, encouraging, career-focused, accessible

### 2.2 Programs Offered

| Program | Duration | Tuition | Format | Status |
|---------|----------|---------|--------|--------|
| Agentic AI Development & ML | 20 weeks | $14,250 | Distance (Live + Pre-recorded) | Active |
| HVAC Technician | 24 weeks | $12,500 | Distance + Hands-on Labs | Active |
| CDL Professional Driver | 12 weeks | $7,220 | Distance + In-person Driving | Coming Soon |

### 2.3 Student Benefits Package
Every enrolled student receives:
- HP Laptop with pre-loaded software (MS Office, Google Workspace, Adobe, ChatGPT access)
- Power cord, wireless headphones, protective sleeve
- Official Student ID
- Branded gear: sweatshirt, t-shirt, snapback, lanyard, water bottle, day planner
- Pens and notebooks
- Database/LLM credits (program-specific)
- Post-graduation exam voucher (HVAC/CDL)
- $250 Visa gift card at commencement

---

## 3. User Personas

### 3.1 Student
**Profile:** Adults (18-55) seeking career change or skill development
- WIOA-eligible individuals
- Veterans transitioning to civilian careers
- Justice-impacted individuals seeking fresh start
- Under-employed adults looking to upskill
- Career changers from various industries

**Needs:**
- Clear program information and funding options
- Easy-to-navigate learning platform
- Progress tracking and motivation
- Flexible learning schedule (async + live sessions)
- Support when stuck (AI tutor, instructor access)
- Job placement assistance post-graduation

**Tech Proficiency:** Varies from basic to intermediate

### 3.2 Staff/Instructor
**Profile:** Subject matter experts and instructors

**Needs:**
- View assigned courses and student rosters
- Track student progress and engagement
- Access to teaching materials
- Schedule management for live sessions
- Quick communication with students

### 3.3 Administrator
**Profile:** School administrators and management

**Needs:**
- Comprehensive student management
- Course and content management
- Enrollment and admissions tracking
- Analytics and reporting (for WIOA compliance)
- Announcement broadcasting
- User role management

---

## 4. Technical Architecture

### 4.1 Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| Frontend | Next.js 15 (App Router) | SSR for SEO, React Server Components for performance |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS + shadcn/ui | Rapid development, accessibility built-in |
| Database | PostgreSQL | Robust, relational data, full-text search |
| Database Host | Supabase or Neon | Managed Postgres, generous free tier |
| ORM | Prisma | Type-safe queries, migrations |
| Auth | NextAuth.js or Clerk | Multi-provider auth, role-based access |
| AI | OpenAI GPT-4 | Course tutor, intelligent assistance |
| RAG | Pinecone or Supabase Vector | Course-specific knowledge retrieval |
| Voice STT | OpenAI Whisper | Speech-to-text for voice input |
| Voice TTS | ElevenLabs or OpenAI | Text-to-speech for voice responses |
| File Storage | Cloudflare R2 or Supabase Storage | PDFs, course materials |
| Video | Mux or Cloudflare Stream | Optimized video delivery with progress tracking |
| Hosting | Vercel | Optimal for Next.js, edge functions, analytics |
| Payments | Stripe | Payment plans, subscriptions |
| Email | Resend or SendGrid | Transactional emails |
| Analytics | Vercel Analytics + PostHog | Usage tracking, funnels |

### 4.2 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        VERCEL                                │
│  ┌────────────────┐  ┌────────────────┐  ┌───────────────┐  │
│  │  Marketing     │  │  Student       │  │  Admin/Staff  │  │
│  │  Pages (SSR)   │  │  Portal (CSR)  │  │  Dashboard    │  │
│  └───────┬────────┘  └───────┬────────┘  └───────┬───────┘  │
│          │                   │                   │           │
│  ┌───────┴───────────────────┴───────────────────┴───────┐  │
│  │                    Next.js API Routes                  │  │
│  │              (Authentication, Business Logic)          │  │
│  └───────────────────────────┬───────────────────────────┘  │
└──────────────────────────────┼──────────────────────────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         │                     │                     │
         ▼                     ▼                     ▼
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│   PostgreSQL    │  │   Cloudflare    │  │    OpenAI       │
│   (Supabase)    │  │   R2 / Mux      │  │    + Pinecone   │
│                 │  │                 │  │                 │
│  - Users        │  │  - Videos       │  │  - AI Tutor     │
│  - Courses      │  │  - PDFs         │  │  - RAG Context  │
│  - Progress     │  │  - Materials    │  │  - Voice        │
│  - Quizzes      │  │                 │  │                 │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

---

## 5. Feature Specifications

### 5.1 Marketing Website (Public)

#### 5.1.1 Home Page
**Route:** `/`

**Sections:**
1. **Hero**
   - Headline: "Career-focused certification programs for the real world."
   - Subheadline with program highlights and funding options
   - Primary CTA: "Apply Now" → `/apply`
   - Secondary CTA: "Talk to Admissions" → `/contact`

2. **Programs at a Glance**
   - 3 program cards (AI/ML, HVAC, CDL)
   - Each shows: name, duration, tuition, short description
   - "View Program" links to detail pages

3. **How FTP Academy Works**
   - 4-step visual process:
     1. Apply
     2. Funding & Admissions
     3. Classes & Hands-On Training
     4. Graduate & Launch Your Career

4. **Who We Serve**
   - WIOA-eligible students
   - Justice-impacted individuals
   - Veterans
   - Under-employed adults
   - Career changers

5. **What's Included**
   - Visual grid of student benefits (laptop, gear, vouchers, gift card, etc.)

6. **Job Placement & Career Support**
   - Employer partnerships highlight
   - Fortune 500 connections
   - Entrepreneurship track mention

7. **Testimonials** (CMS-driven, placeholder for now)

8. **Accreditation Strip**
   - AZ Private Postsecondary Education
   - SARA
   - WIOA/DES logos

9. **Footer**
   - Navigation links
   - Social media
   - Contact info

#### 5.1.2 Programs Page
**Route:** `/programs`

- List of all programs with filtering
- Each card: name, duration, tuition, description, "Learn More" CTA

#### 5.1.3 Program Detail Pages
**Route:** `/programs/[slug]`

**Dynamic pages for:**
- `/programs/agentic-ai-development`
- `/programs/hvac-technician`
- `/programs/cdl-driver` (Coming Soon badge)

**Content:**
- Hero with program name, duration, tuition
- "Apply Now" and "Schedule Call" CTAs
- Who It's For section
- What You'll Learn (module breakdown)
- Format & Schedule
- Funding Options
- Career Outcomes
- Program-specific FAQs

#### 5.1.4 Admissions & Tuition Page
**Route:** `/admissions`

- Step-by-step admissions process
- Funding breakdown:
  - WIOA grants
  - Title V
  - Veterans benefits
  - Payment plans
  - Scholarships
- FAQ section
- Apply CTA

#### 5.1.5 About Page
**Route:** `/about`

- Mission & vision
- Why trades + tech focus
- Leadership/faculty bios (CMS)
- Accreditation details
- Transitional housing vision (2026-2027)

#### 5.1.6 Employer Partners Page
**Route:** `/employers`

- Partner benefits
- Hiring pipeline info
- Externship opportunities
- Partner inquiry form

#### 5.1.7 Student Resources Page
**Route:** `/resources`

- Tech support links
- Academic support
- Career services
- Student handbook (PDF)
- Policies

#### 5.1.8 Contact/Apply Page
**Route:** `/contact` and `/apply`

**Contact Form Fields:**
- Name, Email, Phone, Message

**Application Form Fields:**
- Name, Email, Phone
- State of residence
- Program of interest (dropdown)
- Funding interest (WIOA, self-pay, etc.)
- How did you hear about us?
- Optional notes

---

### 5.2 Authentication System

#### 5.2.1 User Roles
| Role | Access Level |
|------|--------------|
| Student | Student dashboard, enrolled courses only |
| Staff | Staff dashboard, assigned courses/cohorts |
| Admin | Full access to all dashboards and management |

#### 5.2.2 Auth Pages
- `/login` - Email/password login
- `/signup` - Registration (admin-created or via application approval)
- `/forgot-password` - Password reset flow
- `/verify-email` - Email verification

#### 5.2.3 Auth Features
- Email/password authentication
- Magic link option
- Role-based route protection
- Session management
- Password requirements: 8+ chars, mixed case, number, special char

---

### 5.3 Student Portal

#### 5.3.1 Student Dashboard
**Route:** `/dashboard`

**Components:**
1. **Welcome Banner**
   - "Welcome, [First Name]"
   - Current date

2. **Current Program Card**
   - Program name
   - Overall progress bar (% complete)
   - Next live session (date/time)
   - "Continue Learning" button

3. **Quick Stats**
   - Lessons completed
   - Quizzes passed
   - Current module

4. **Announcements Panel**
   - Latest 3 announcements from admin
   - "View All" link

5. **Upcoming Sessions**
   - Next 5 live sessions
   - Calendar view option

6. **Resources & Downloads**
   - Student handbook
   - Tech support
   - Career services link

7. **Benefits Status**
   - Laptop shipped: Yes/No/Pending
   - Exam voucher: Yes/No
   - Gift card issued: Yes/No

#### 5.3.2 My Courses
**Route:** `/dashboard/courses`

- List of enrolled courses
- Each shows: name, progress %, next lesson
- "Continue" CTA

#### 5.3.3 Course View
**Route:** `/dashboard/courses/[courseSlug]`

**Layout:**
- Sidebar: Module list with completion indicators
- Main area: Current content

**Tabs:**
- Overview (course description, instructor, schedule)
- Modules & Lessons
- Resources & Downloads
- Grades & Assessments

#### 5.3.4 Lesson View
**Route:** `/dashboard/courses/[courseSlug]/lessons/[lessonSlug]`

**Components:**
1. **Video Player**
   - Embedded video (Mux/Cloudflare)
   - Progress tracking (resume from last position)
   - Playback speed controls

2. **Lesson Content**
   - Title and description
   - Key takeaways
   - Downloadable PDFs

3. **Sidebar Navigation**
   - Lessons in current module
   - Status indicators (Not Started, In Progress, Complete)

4. **Actions**
   - "Mark as Complete" button
   - "Take Quiz" (if quiz attached)
   - Previous/Next lesson navigation

5. **AI Tutor Panel** (slide-out)
   - Chat interface
   - Voice input button
   - Quick prompts:
     - "Explain this simpler"
     - "Quiz me on this"
     - "Create a practice problem"
     - "Summarize this lesson"

#### 5.3.5 Quiz/Assessment View
**Route:** `/dashboard/courses/[courseSlug]/quizzes/[quizId]`

**Features:**
- Quiz title and instructions
- Question types:
  - Multiple choice
  - True/False
  - Short answer
- Progress indicator (Q 3 of 10)
- "Save Progress" (for longer quizzes)
- "Submit Quiz" button
- Results page with score and feedback
- Retake option (if allowed)

#### 5.3.6 AI Course Tutor
**Implementation:**

1. **Knowledge Base (RAG)**
   - Each course has its own vector index
   - Indexed content: lesson transcripts, PDFs, course materials
   - Uses Pinecone or Supabase Vector

2. **Chat Interface**
   - Persistent chat history per course
   - Markdown rendering for responses
   - Code syntax highlighting

3. **Voice Capability**
   - Push-to-talk or toggle
   - Whisper for speech-to-text
   - ElevenLabs/OpenAI for text-to-speech
   - Natural conversational flow

4. **Guardrails**
   - Only answers questions related to course content
   - Redirects off-topic to support channels
   - No exam answer leaking

---

### 5.4 Staff Dashboard

#### 5.4.1 Staff Home
**Route:** `/staff`

**Components:**
1. **Welcome + Today's Schedule**
2. **Assigned Courses**
   - Course cards with student count
3. **Upcoming Sessions**
   - This week's live sessions
4. **Student Alerts** (optional)
   - Students falling behind
   - Quiz failures

#### 5.4.2 Course Management (View Only)
**Route:** `/staff/courses/[courseSlug]`

- View modules and lessons
- Access materials for teaching

#### 5.4.3 Student Roster
**Route:** `/staff/students`

- Table: Name, Email, Program, Progress, Last Active
- Filter by course/cohort
- View-only (no edit capability)

---

### 5.5 Admin Dashboard

#### 5.5.1 Admin Home
**Route:** `/admin`

**KPI Cards:**
- Total active students
- Students per program
- Active cohorts
- Upcoming start dates
- Completion rate

**Quick Actions:**
- Add student
- Create announcement
- View reports

#### 5.5.2 Student Management
**Route:** `/admin/students`

**Features:**
- Searchable, sortable, filterable table
- Columns: Name, Email, Phone, Program, Cohort, Status, Enrolled Date
- Actions: View, Edit, Suspend, Delete
- Bulk actions: Export CSV, Send email

**Student Detail View:**
**Route:** `/admin/students/[id]`

- Profile information
- Program enrollment
- Progress tracking
- Benefits status (laptop, voucher, gift card)
- Notes/comments
- Activity log

#### 5.5.3 Course Management
**Route:** `/admin/courses`

**CRUD for:**
- Programs (courses)
- Modules
- Lessons
- Quizzes
- Resources

**Course Editor:**
- Title, slug, description
- Duration, tuition, format
- Status (Active, Coming Soon, Archived)
- Hero image upload

**Module Editor:**
- Name, description, order
- Estimated duration

**Lesson Editor:**
- Title, description
- Video URL/upload
- PDF attachments
- Quiz toggle
- Order within module

**Quiz Editor:**
- Title, instructions
- Questions (add/edit/reorder)
- Passing score
- Retake policy

#### 5.5.4 Announcements
**Route:** `/admin/announcements`

- Create/edit/delete announcements
- Target: All students, specific programs, specific cohorts
- Schedule publish date
- Pin to top option

#### 5.5.5 Cohort Management
**Route:** `/admin/cohorts`

- Create cohorts with start date
- Assign students to cohorts
- Set live session schedule

#### 5.5.6 Reports
**Route:** `/admin/reports`

- Enrollment by program
- Completion rates
- Quiz scores
- Student progress
- Export for WIOA compliance

---

## 6. Database Schema

### 6.1 Core Tables

```prisma
// User & Auth
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String?
  firstName     String
  lastName      String
  phone         String?
  state         String?
  role          Role      @default(STUDENT)
  status        UserStatus @default(PENDING)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  enrollments   Enrollment[]
  progress      LessonProgress[]
  quizAttempts  QuizAttempt[]
  chatHistory   ChatMessage[]
  benefits      StudentBenefits?
}

enum Role {
  STUDENT
  STAFF
  ADMIN
}

enum UserStatus {
  PENDING
  ACTIVE
  SUSPENDED
  GRADUATED
}

// Programs & Courses
model Program {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String   @db.Text
  duration    String   // "20 weeks"
  tuition     Int      // in cents
  format      String
  status      ProgramStatus @default(ACTIVE)
  heroImage   String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  modules     Module[]
  enrollments Enrollment[]
  resources   Resource[]
  cohorts     Cohort[]
}

enum ProgramStatus {
  ACTIVE
  COMING_SOON
  ARCHIVED
}

model Module {
  id          String   @id @default(cuid())
  programId   String
  name        String
  description String?  @db.Text
  order       Int
  duration    String?  // Estimated hours
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  program     Program  @relation(fields: [programId], references: [id])
  lessons     Lesson[]
}

model Lesson {
  id          String   @id @default(cuid())
  moduleId    String
  title       String
  description String?  @db.Text
  videoUrl    String?
  content     String?  @db.Text
  order       Int
  hasQuiz     Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  module      Module   @relation(fields: [moduleId], references: [id])
  resources   Resource[]
  quiz        Quiz?
  progress    LessonProgress[]
}

model Quiz {
  id           String   @id @default(cuid())
  lessonId     String   @unique
  title        String
  instructions String?  @db.Text
  passingScore Int      @default(70) // percentage
  allowRetake  Boolean  @default(true)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  lesson       Lesson   @relation(fields: [lessonId], references: [id])
  questions    Question[]
  attempts     QuizAttempt[]
}

model Question {
  id          String   @id @default(cuid())
  quizId      String
  type        QuestionType
  question    String   @db.Text
  options     Json?    // For multiple choice: ["A", "B", "C", "D"]
  answer      String   // Correct answer
  points      Int      @default(1)
  order       Int

  quiz        Quiz     @relation(fields: [quizId], references: [id])
}

enum QuestionType {
  MULTIPLE_CHOICE
  TRUE_FALSE
  SHORT_ANSWER
}

model Resource {
  id          String   @id @default(cuid())
  programId   String?
  lessonId    String?
  name        String
  type        ResourceType
  url         String
  createdAt   DateTime @default(now())

  program     Program? @relation(fields: [programId], references: [id])
  lesson      Lesson?  @relation(fields: [lessonId], references: [id])
}

enum ResourceType {
  PDF
  VIDEO
  LINK
  DOWNLOAD
}

// Enrollments & Progress
model Enrollment {
  id          String   @id @default(cuid())
  userId      String
  programId   String
  cohortId    String?
  status      EnrollmentStatus @default(ACTIVE)
  enrolledAt  DateTime @default(now())
  completedAt DateTime?

  user        User     @relation(fields: [userId], references: [id])
  program     Program  @relation(fields: [programId], references: [id])
  cohort      Cohort?  @relation(fields: [cohortId], references: [id])

  @@unique([userId, programId])
}

enum EnrollmentStatus {
  ACTIVE
  ON_HOLD
  COMPLETED
  WITHDRAWN
}

model LessonProgress {
  id           String   @id @default(cuid())
  userId       String
  lessonId     String
  status       ProgressStatus @default(NOT_STARTED)
  videoProgress Float   @default(0) // percentage watched
  completedAt  DateTime?

  user         User     @relation(fields: [userId], references: [id])
  lesson       Lesson   @relation(fields: [lessonId], references: [id])

  @@unique([userId, lessonId])
}

enum ProgressStatus {
  NOT_STARTED
  IN_PROGRESS
  COMPLETED
}

model QuizAttempt {
  id          String   @id @default(cuid())
  userId      String
  quizId      String
  score       Int
  passed      Boolean
  answers     Json     // Store submitted answers
  startedAt   DateTime @default(now())
  submittedAt DateTime?

  user        User     @relation(fields: [userId], references: [id])
  quiz        Quiz     @relation(fields: [quizId], references: [id])
}

// Cohorts
model Cohort {
  id          String   @id @default(cuid())
  programId   String
  name        String   // "AI/ML Cohort - Jan 2025"
  startDate   DateTime
  endDate     DateTime?

  program     Program  @relation(fields: [programId], references: [id])
  enrollments Enrollment[]
  sessions    Session[]
}

model Session {
  id          String   @id @default(cuid())
  cohortId    String
  title       String
  type        SessionType
  scheduledAt DateTime
  duration    Int      // minutes
  meetingUrl  String?

  cohort      Cohort   @relation(fields: [cohortId], references: [id])
}

enum SessionType {
  LIVE_LECTURE
  LAB
  QA_SESSION
  OFFICE_HOURS
}

// Student Benefits
model StudentBenefits {
  id              String   @id @default(cuid())
  userId          String   @unique
  laptopStatus    ShipmentStatus @default(PENDING)
  laptopShippedAt DateTime?
  gearStatus      ShipmentStatus @default(PENDING)
  gearShippedAt   DateTime?
  giftCardIssued  Boolean  @default(false)
  giftCardIssuedAt DateTime?
  voucherIssued   Boolean  @default(false)
  voucherIssuedAt DateTime?

  user            User     @relation(fields: [userId], references: [id])
}

enum ShipmentStatus {
  PENDING
  PROCESSING
  SHIPPED
  DELIVERED
}

// Announcements
model Announcement {
  id          String   @id @default(cuid())
  title       String
  content     String   @db.Text
  targetType  AnnouncementTarget @default(ALL)
  targetId    String?  // programId or cohortId if targeted
  pinned      Boolean  @default(false)
  publishAt   DateTime @default(now())
  createdAt   DateTime @default(now())
  createdBy   String
}

enum AnnouncementTarget {
  ALL
  PROGRAM
  COHORT
}

// AI Tutor Chat
model ChatMessage {
  id          String   @id @default(cuid())
  userId      String
  programId   String
  role        ChatRole
  content     String   @db.Text
  createdAt   DateTime @default(now())

  user        User     @relation(fields: [userId], references: [id])
}

enum ChatRole {
  USER
  ASSISTANT
}

// Applications
model Application {
  id              String   @id @default(cuid())
  firstName       String
  lastName        String
  email           String
  phone           String
  state           String
  programInterest String
  fundingInterest String
  hearAboutUs     String?
  notes           String?  @db.Text
  status          ApplicationStatus @default(NEW)
  createdAt       DateTime @default(now())
  reviewedAt      DateTime?
  reviewedBy      String?
}

enum ApplicationStatus {
  NEW
  IN_REVIEW
  APPROVED
  REJECTED
}
```

---

## 7. API Endpoints

### 7.1 Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create new user |
| POST | `/api/auth/login` | Login |
| POST | `/api/auth/logout` | Logout |
| POST | `/api/auth/forgot-password` | Request password reset |
| POST | `/api/auth/reset-password` | Reset password |

### 7.2 Programs (Public)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/programs` | List all programs |
| GET | `/api/programs/[slug]` | Get program details |

### 7.3 Student Portal
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/student/dashboard` | Get dashboard data |
| GET | `/api/student/courses` | Get enrolled courses |
| GET | `/api/student/courses/[id]` | Get course details |
| GET | `/api/student/courses/[id]/lessons` | Get lessons |
| GET | `/api/student/lessons/[id]` | Get lesson content |
| POST | `/api/student/lessons/[id]/progress` | Update lesson progress |
| POST | `/api/student/lessons/[id]/complete` | Mark lesson complete |
| GET | `/api/student/quizzes/[id]` | Get quiz |
| POST | `/api/student/quizzes/[id]/submit` | Submit quiz |
| GET | `/api/student/announcements` | Get announcements |

### 7.4 AI Tutor
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/tutor/chat` | Send message, get response |
| POST | `/api/tutor/voice` | Send audio, get response |
| GET | `/api/tutor/history/[programId]` | Get chat history |

### 7.5 Admin
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/students` | List students |
| POST | `/api/admin/students` | Create student |
| GET | `/api/admin/students/[id]` | Get student |
| PUT | `/api/admin/students/[id]` | Update student |
| DELETE | `/api/admin/students/[id]` | Delete student |
| GET | `/api/admin/programs` | List programs |
| POST | `/api/admin/programs` | Create program |
| PUT | `/api/admin/programs/[id]` | Update program |
| DELETE | `/api/admin/programs/[id]` | Delete program |
| ... | Similar CRUD for modules, lessons, quizzes, cohorts, announcements |

### 7.6 Applications
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/applications` | Submit application |
| GET | `/api/admin/applications` | List applications (admin) |
| PUT | `/api/admin/applications/[id]` | Update application status |

---

## 8. UI/UX Requirements

### 8.1 Design System

**Colors:**
- Primary: Navy Blue (#1a365d)
- Secondary: Electric Teal (#0d9488)
- Accent: Bright Orange (#f97316) - CTAs
- Background: Neutral Gray (#f8fafc)
- Text: Dark (#1e293b)
- Success: Green (#16a34a)
- Warning: Yellow (#eab308)
- Error: Red (#dc2626)

**Typography:**
- Headings: Inter (bold, semibold)
- Body: Inter (regular, medium)
- Code: JetBrains Mono

**Components (shadcn/ui):**
- Buttons (primary, secondary, outline, ghost)
- Cards
- Tables
- Forms (inputs, selects, checkboxes)
- Modals/Dialogs
- Navigation (navbar, sidebar)
- Progress bars
- Tabs
- Toast notifications
- Badges/Tags

### 8.2 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 8.3 Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Focus indicators
- Alt text for images

---

## 9. Security Requirements

### 9.1 Authentication
- Secure password hashing (bcrypt)
- JWT tokens with short expiry
- Refresh token rotation
- Rate limiting on auth endpoints
- Account lockout after failed attempts

### 9.2 Authorization
- Role-based access control (RBAC)
- Route protection middleware
- API endpoint authorization

### 9.3 Data Protection
- HTTPS everywhere
- Input validation and sanitization
- SQL injection prevention (Prisma)
- XSS prevention
- CSRF protection
- Secure headers (Helmet.js)

### 9.4 Privacy
- FERPA compliance (student data)
- Data encryption at rest
- Minimal data collection
- User consent for data processing
- Data retention policies

### 9.5 Infrastructure
- Environment variable management
- Secrets management (Vercel encrypted)
- Database connection encryption
- Regular security audits
- Dependency vulnerability scanning

---

## 10. Deployment & Infrastructure

### 10.1 Environments
| Environment | URL | Purpose |
|-------------|-----|---------|
| Development | localhost:3000 | Local development |
| Staging | staging.ftp.academy | Testing before production |
| Production | www.ftp.academy | Live site |

### 10.2 CI/CD Pipeline (GitHub Actions)
1. Push to main → Run tests
2. Tests pass → Build
3. Build succeeds → Deploy to staging
4. Manual approval → Deploy to production

### 10.3 Vercel Configuration
- Framework preset: Next.js
- Node.js version: 20.x
- Environment variables in Vercel dashboard
- Custom domain: ftp.academy
- SSL: Automatic (Let's Encrypt)

### 10.4 Database
- Supabase (or Neon) managed PostgreSQL
- Connection pooling enabled
- Automatic backups
- Point-in-time recovery

### 10.5 Monitoring
- Vercel Analytics (traffic, vitals)
- Error tracking (Sentry)
- Uptime monitoring
- Performance monitoring

---

## 11. Development Phases

### Phase 1: Foundation (Week 1-2)
**Goal:** Core infrastructure and marketing site

**Tasks:**
- [ ] Initialize Next.js 15 project
- [ ] Configure TypeScript, Tailwind, shadcn/ui
- [ ] Set up Prisma with database schema
- [ ] Implement authentication (NextAuth/Clerk)
- [ ] Build marketing pages:
  - [ ] Home
  - [ ] Programs overview
  - [ ] Program detail template
  - [ ] Admissions
  - [ ] About
  - [ ] Contact/Apply
- [ ] Deploy to Vercel (staging)

### Phase 2: Student Portal (Week 3-4)
**Goal:** Core e-learning functionality

**Tasks:**
- [ ] Student dashboard
- [ ] Course listing and detail view
- [ ] Module/lesson navigation
- [ ] Video player with progress tracking
- [ ] Lesson content display (PDFs, materials)
- [ ] Progress tracking system
- [ ] "Mark Complete" functionality
- [ ] Mobile responsive testing

### Phase 3: Quizzes & Assessments (Week 4-5)
**Goal:** Quiz system

**Tasks:**
- [ ] Quiz display page
- [ ] Question rendering (MC, T/F, short answer)
- [ ] Answer submission
- [ ] Scoring logic
- [ ] Results display
- [ ] Retake functionality
- [ ] Grade tracking

### Phase 4: Admin Dashboard (Week 5-6)
**Goal:** Content and student management

**Tasks:**
- [ ] Admin layout and navigation
- [ ] KPI dashboard
- [ ] Student management (CRUD)
- [ ] Program management (CRUD)
- [ ] Module/lesson editor
- [ ] Quiz builder
- [ ] Announcement system
- [ ] Basic reporting

### Phase 5: Staff Dashboard (Week 6)
**Goal:** Instructor tools

**Tasks:**
- [ ] Staff dashboard home
- [ ] Course/student view
- [ ] Session scheduling view

### Phase 6: AI Tutor (Week 7)
**Goal:** Intelligent course assistant

**Tasks:**
- [ ] Set up OpenAI integration
- [ ] Build RAG pipeline (embed course content)
- [ ] Chat interface component
- [ ] Voice input (Whisper)
- [ ] Voice output (ElevenLabs/OpenAI TTS)
- [ ] Course-specific context filtering
- [ ] Chat history storage

### Phase 7: Polish & Launch (Week 8)
**Goal:** Production-ready release

**Tasks:**
- [ ] End-to-end testing
- [ ] Performance optimization
- [ ] Security audit
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Documentation
- [ ] Domain configuration (ftp.academy)
- [ ] Production deployment
- [ ] Monitoring setup

---

## 12. Success Metrics

### 12.1 Technical Metrics
| Metric | Target |
|--------|--------|
| Page Load Time (LCP) | < 2.5s |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Uptime | 99.9% |
| API Response Time | < 200ms |
| Error Rate | < 0.1% |

### 12.2 Business Metrics
| Metric | Target |
|--------|--------|
| Application Conversion Rate | > 10% |
| Enrollment Completion Rate | > 80% |
| Student Satisfaction Score | > 4.5/5 |
| AI Tutor Usage | > 70% of students |
| Quiz Pass Rate (first attempt) | > 75% |

---

## Appendix A: External Integrations

| Service | Purpose | Cost Estimate |
|---------|---------|---------------|
| Vercel | Hosting | Free tier → $20/mo |
| Supabase | Database | Free tier → $25/mo |
| OpenAI | AI Tutor | ~$50-100/mo (varies) |
| Pinecone | Vector DB | Free tier → $70/mo |
| Mux | Video | $0.025/min viewed |
| Cloudflare R2 | Storage | $0.015/GB/mo |
| Resend | Email | 3000 free → $20/mo |
| Stripe | Payments | 2.9% + $0.30/tx |

---

## Appendix B: Content Requirements

### Marketing Copy Needed
- [ ] Homepage hero text (finalize)
- [ ] Program descriptions (expand)
- [ ] About page narrative
- [ ] FAQ content
- [ ] Testimonials (gather from students)
- [ ] Employer partner descriptions

### Course Content Needed
- [ ] Video recordings (per lesson)
- [ ] PDF workbooks (per module)
- [ ] Quiz questions (per lesson/module)
- [ ] AI tutor training data (transcripts, materials)

---

## Appendix C: Future Enhancements (Post-MVP)

1. **Live Session Integration** - Zoom/Meet integration for live classes
2. **Discussion Forums** - Student community boards
3. **Mobile App** - React Native companion app
4. **Advanced Analytics** - Learning analytics dashboard
5. **Gamification** - Badges, streaks, leaderboards
6. **Certificate Generation** - Automated PDF certificates
7. **Payment Processing** - Stripe integration for self-pay
8. **CRM Integration** - Salesforce/HubSpot for admissions
9. **LMS Interoperability** - LTI/SCORM compliance

---

*This PRD is a living document and will be updated as requirements evolve.*

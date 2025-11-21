export interface Program {
  slug: string
  name: string
  shortName: string
  description: string
  fullDescription: string
  duration: string
  tuition: number
  format: string
  status: "active" | "coming-soon"
  icon: string
  whoItsFor: string[]
  whatYoullLearn: string[]
  careerOutcomes: string[]
  modules: {
    title: string
    description: string
    duration: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const programs: Program[] = [
  {
    slug: "agentic-ai-development",
    name: "Agentic AI Development & Machine Learning",
    shortName: "AI & ML",
    description: "Master AI agents, machine learning, automation workflows, and LLM integration for real-world applications.",
    fullDescription: "This intensive program trains students in AI application development with a focus on agentic AI and generative AI. It covers machine learning fundamentals, building AI-driven applications, and integrating large language models (LLMs) into real-world solutions. Graduates will be prepared for roles as junior AI developers or prompt engineers.",
    duration: "20 weeks",
    tuition: 14250,
    format: "Distance Learning (Live + Pre-recorded)",
    status: "active",
    icon: "cpu",
    whoItsFor: [
      "Career changers interested in tech",
      "Those wanting to enter the AI/ML field",
      "Entrepreneurs looking to leverage AI",
      "Tech professionals wanting to upskill",
      "Anyone with basic tech aptitude seeking high-demand skills",
    ],
    whatYoullLearn: [
      "AI fundamentals and machine learning concepts",
      "Python programming for AI development",
      "Data management and big data basics",
      "Neural networks and deep learning with TensorFlow",
      "Large Language Models (LLMs) and prompt engineering",
      "Building AI agents with LangChain and MCPs",
      "Cloud integration (Azure, AWS AI services)",
      "Workflow automation with N8N",
      "AI-assisted development (vibe coding)",
      "Security, testing, and deployment",
    ],
    careerOutcomes: [
      "Junior AI Developer",
      "Prompt Engineer",
      "AI/ML Operations Specialist",
      "Automation Engineer",
      "AI Consultant",
      "Freelance AI Developer",
      "Start your own AI agency",
    ],
    modules: [
      { title: "Introduction to AI and Machine Learning", description: "AI history, industry trends, and foundational concepts", duration: "2 weeks" },
      { title: "Programming Foundations (Python)", description: "Core Python skills, data structures, and development workflows", duration: "2 weeks" },
      { title: "Data Management and Big Data", description: "Data collection, databases, ETL pipelines", duration: "2 weeks" },
      { title: "Machine Learning Fundamentals", description: "Supervised/unsupervised learning, model training", duration: "2 weeks" },
      { title: "Deep Learning & Neural Networks", description: "Neural networks with TensorFlow and Keras", duration: "2 weeks" },
      { title: "Generative AI and LLMs", description: "Large language models, prompt engineering, fine-tuning", duration: "2 weeks" },
      { title: "Agentic AI Development", description: "Building autonomous AI agents, MCPs, tool integration", duration: "2 weeks" },
      { title: "SDKs, APIs, and Cloud Integration", description: "Azure/AWS AI services, containerization", duration: "1 week" },
      { title: "Workflow Automation", description: "N8N automation, business process integration", duration: "1 week" },
      { title: "Vibe Coding & AI-Assisted Development", description: "Using AI copilots for rapid development", duration: "1 week" },
      { title: "Security, Testing & Deployment", description: "Application security, CI/CD, cloud deployment", duration: "1 week" },
      { title: "Capstone Project", description: "Build and present your AI application", duration: "2 weeks" },
    ],
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer: "No prior programming experience is required. We start with Python fundamentals and build up from there. Basic computer literacy and a willingness to learn are all you need.",
      },
      {
        question: "What equipment do I need?",
        answer: "Every enrolled student receives a brand new HP laptop preloaded with all required software. You just need a reliable internet connection.",
      },
      {
        question: "Are classes live or pre-recorded?",
        answer: "Both! We combine live interactive sessions with pre-recorded modules so you can learn at your own pace while still having access to instructors for questions and hands-on guidance.",
      },
      {
        question: "What certifications does this align with?",
        answer: "Our curriculum aligns with Google TensorFlow Developer, AWS Machine Learning Specialty, and covers content from CompTIA Data+ and Microsoft Azure AI certifications.",
      },
    ],
  },
  {
    slug: "hvac-technician",
    name: "HVAC Technician",
    shortName: "HVAC",
    description: "Learn heating, ventilation, and air conditioning systems with hands-on labs and certification prep.",
    fullDescription: "Our HVAC Technician program provides comprehensive training in heating, ventilation, and air conditioning systems. Students learn installation, maintenance, troubleshooting, and repair through a combination of online theory and hands-on labs. The program prepares you for industry certification exams and entry-level employment.",
    duration: "24 weeks",
    tuition: 12500,
    format: "Distance Learning + Hands-on Labs/Externships",
    status: "active",
    icon: "wrench",
    whoItsFor: [
      "Those seeking a hands-on trade career",
      "Veterans transitioning to civilian work",
      "Career changers looking for stable employment",
      "Anyone interested in essential infrastructure work",
      "Future small business owners in the trades",
    ],
    whatYoullLearn: [
      "HVAC system fundamentals and theory",
      "Heating systems (furnaces, heat pumps, boilers)",
      "Air conditioning and refrigeration",
      "Ventilation and indoor air quality",
      "Electrical fundamentals for HVAC",
      "System diagnostics and troubleshooting",
      "Installation and maintenance procedures",
      "Safety protocols and EPA regulations",
      "Customer service and communication",
      "Business fundamentals for independent contractors",
    ],
    careerOutcomes: [
      "HVAC Technician",
      "HVAC Installer",
      "Refrigeration Technician",
      "Maintenance Technician",
      "Service Technician",
      "HVAC Sales Representative",
      "Start your own HVAC business",
    ],
    modules: [
      { title: "HVAC Fundamentals", description: "Industry overview, safety, basic principles", duration: "3 weeks" },
      { title: "Heating Systems", description: "Furnaces, heat pumps, boilers, hydronic heating", duration: "4 weeks" },
      { title: "Air Conditioning & Refrigeration", description: "AC systems, refrigeration cycles, components", duration: "4 weeks" },
      { title: "Ventilation & Air Quality", description: "Ductwork, air distribution, IAQ", duration: "3 weeks" },
      { title: "Electrical for HVAC", description: "Electrical fundamentals, controls, wiring", duration: "3 weeks" },
      { title: "Diagnostics & Troubleshooting", description: "System analysis, problem-solving techniques", duration: "3 weeks" },
      { title: "Installation & Service", description: "Hands-on installation and maintenance", duration: "2 weeks" },
      { title: "Certification Prep & Externship", description: "EPA 608 prep, hands-on externship hours", duration: "2 weeks" },
    ],
    faqs: [
      {
        question: "Is there hands-on training?",
        answer: "Yes! While the theory portion is online, you'll complete required hands-on labs and an externship with local HVAC companies to get real-world experience.",
      },
      {
        question: "What certifications will I be prepared for?",
        answer: "You'll be prepared for the EPA Section 608 certification (required for handling refrigerants) and NATE certification exams.",
      },
      {
        question: "Do I need any tools?",
        answer: "Basic hand tools are helpful but not required to start. We'll guide you on building your toolkit as you progress, and your exam voucher covers certification fees.",
      },
      {
        question: "What's the job outlook for HVAC technicians?",
        answer: "HVAC is a high-demand field with strong job growth. The Bureau of Labor Statistics projects 6% growth through 2032, with median pay around $50,000+.",
      },
    ],
  },
  {
    slug: "cdl-driver",
    name: "CDL Professional Driver",
    shortName: "CDL",
    description: "Prepare for your Commercial Driver's License with theory and in-person driving hours.",
    fullDescription: "Our CDL Professional Driver program prepares you for a career in commercial driving. The program covers all the knowledge needed to pass your CDL exam, with theory delivered online and practical driving hours completed with our partner driving schools.",
    duration: "12 weeks",
    tuition: 7220,
    format: "Distance Learning + In-person Driving Hours",
    status: "coming-soon",
    icon: "truck",
    whoItsFor: [
      "Those seeking a career with travel opportunities",
      "Veterans with driving experience",
      "Anyone wanting a well-paying trade career",
      "Those who prefer independent work",
      "Career changers seeking quick entry to employment",
    ],
    whatYoullLearn: [
      "CDL regulations and compliance",
      "Vehicle inspection procedures",
      "Basic vehicle control",
      "Safe driving techniques",
      "Air brakes systems",
      "Combination vehicles",
      "Hazardous materials handling",
      "Trip planning and navigation",
      "Hours of service regulations",
      "Career development in trucking",
    ],
    careerOutcomes: [
      "Over-the-Road (OTR) Driver",
      "Regional Driver",
      "Local Delivery Driver",
      "Tanker Driver",
      "Flatbed Driver",
      "Owner-Operator",
      "Start your own trucking company",
    ],
    modules: [
      { title: "CDL Fundamentals", description: "Regulations, licensing requirements, industry overview", duration: "2 weeks" },
      { title: "Vehicle Systems & Inspection", description: "Pre-trip inspections, vehicle components", duration: "2 weeks" },
      { title: "Basic Control & Maneuvering", description: "Backing, turning, parking techniques", duration: "2 weeks" },
      { title: "Safe Driving & Road Skills", description: "Highway driving, adverse conditions, emergency procedures", duration: "2 weeks" },
      { title: "Air Brakes & Combination Vehicles", description: "Air brake systems, trailer coupling", duration: "2 weeks" },
      { title: "CDL Exam Prep & Driving Hours", description: "Test preparation, behind-the-wheel training", duration: "2 weeks" },
    ],
    faqs: [
      {
        question: "When will this program be available?",
        answer: "We're currently finalizing partnerships with driving schools. Sign up for updates to be notified when enrollment opens.",
      },
      {
        question: "How do the driving hours work?",
        answer: "Theory is completed online, then you'll complete required behind-the-wheel hours at a partner driving school near you.",
      },
      {
        question: "What CDL class will I be prepared for?",
        answer: "Our program prepares you for the Class A CDL, which allows you to drive the widest range of commercial vehicles.",
      },
      {
        question: "Are there age requirements?",
        answer: "You must be 18 to obtain a CDL for intrastate driving, or 21 for interstate commerce.",
      },
    ],
  },
]

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug)
}

export function formatTuition(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

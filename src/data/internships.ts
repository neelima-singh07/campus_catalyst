export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'paid' | 'unpaid' | 'stipend';
  duration: string;
  studentYear: number; // 1st year, 2nd year, 3rd year, 4th year
  deadline: string;
  requirements: string[];
  description: string;
  skills: string[];
  applicationLink: string;
  logo?: string;
  isRemote: boolean;
  stipendAmount?: string;
  category: 'software' | 'data' | 'design' | 'marketing' | 'research' | 'finance' | 'consulting';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const internshipsData: Internship[] = [
  // 1st Year Student Opportunities
  {
    id: "1",
    title: "Freshman Software Development Program",
    company: "Google",
    location: "Mountain View, CA",
    type: "paid",
    duration: "10 weeks",
    studentYear: 1,
    deadline: "2024-03-15",
    requirements: [
      "Currently in 1st year of Computer Science or related field",
      "Basic programming knowledge in any language",
      "Strong academic performance (GPA 3.0+)",
      "Passion for technology and learning"
    ],
    description: "A specially designed program for first-year students to get early exposure to software development at Google. Learn fundamental programming concepts while working on real projects.",
    skills: ["Programming Basics", "Git", "Problem Solving", "Teamwork"],
    applicationLink: "https://careers.google.com/jobs/results/",
    isRemote: false,
    stipendAmount: "$6,000/month",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "2",
    title: "First Year Tech Explorer",
    company: "Microsoft",
    location: "Seattle, WA",
    type: "paid",
    duration: "8 weeks",
    studentYear: 1,
    deadline: "2024-02-28",
    requirements: [
      "1st year student in any STEM field",
      "Interest in technology and innovation",
      "No prior experience required",
      "Strong communication skills"
    ],
    description: "Explore different areas of technology through rotations in software, data science, and product management. Perfect for first-year students discovering their passion.",
    skills: ["Technology Fundamentals", "Communication", "Critical Thinking", "Collaboration"],
    applicationLink: "https://careers.microsoft.com/",
    isRemote: true,
    stipendAmount: "$5,500/month",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "3",
    title: "Design Thinking Workshop Program",
    company: "Apple",
    location: "Cupertino, CA",
    type: "stipend",
    duration: "6 weeks",
    studentYear: 1,
    deadline: "2024-04-01",
    requirements: [
      "1st year student in Design, Engineering, or related field",
      "Creative mindset and design thinking interest",
      "Basic design software knowledge helpful but not required",
      "Portfolio of creative work (can include class projects)"
    ],
    description: "Learn design thinking principles and user experience design fundamentals while working on real Apple design challenges with mentorship from senior designers.",
    skills: ["Design Thinking", "Creativity", "User Research", "Basic Design Tools"],
    applicationLink: "https://jobs.apple.com/",
    isRemote: false,
    stipendAmount: "$4,000/month",
    category: "design",
    difficulty: "beginner"
  },

  // 2nd Year Student Opportunities
  {
    id: "4",
    title: "Sophomore Development Internship",
    company: "Meta",
    location: "Menlo Park, CA",
    type: "paid",
    duration: "12 weeks",
    studentYear: 2,
    deadline: "2025-01-15",
    requirements: [
      "2nd year Computer Science or related major",
      "Completed data structures course",
      "Experience with at least one programming language",
      "Understanding of basic algorithms"
    ],
    description: "Build features for Meta's family of apps while learning from experienced engineers. Work on projects that impact billions of users worldwide.",
    skills: ["JavaScript", "React", "Python", "Data Structures", "Algorithms"],
    applicationLink: "https://www.metacareers.com/",
    isRemote: false,
    stipendAmount: "$7,500/month",
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "5",
    title: "Data Analytics for Sophomores",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "paid",
    duration: "10 weeks",
    studentYear: 2,
    deadline: "2025-02-01",
    requirements: [
      "2nd year student in Data Science, Statistics, or related field",
      "Completed statistics and probability courses",
      "Basic Python or R programming skills",
      "Strong analytical mindset"
    ],
    description: "Analyze user behavior and content performance data to help Netflix improve recommendations and user experience.",
    skills: ["Python", "SQL", "Statistics", "Data Visualization", "Analytics"],
    applicationLink: "https://jobs.netflix.com/",
    isRemote: true,
    stipendAmount: "$6,800/month",
    category: "data",
    difficulty: "intermediate"
  },
  {
    id: "6",
    title: "Product Management Associate",
    company: "Amazon",
    location: "Seattle, WA",
    type: "paid",
    duration: "12 weeks",
    studentYear: 2,
    deadline: "2025-03-01",
    requirements: [
      "2nd year Business, Engineering, or related field",
      "Strong analytical and communication skills",
      "Interest in product development",
      "Customer-focused mindset"
    ],
    description: "Learn product management fundamentals while working on real Amazon products. Collaborate with engineering and design teams.",
    skills: ["Product Strategy", "Market Analysis", "Communication", "Project Management"],
    applicationLink: "https://amazon.jobs/",
    isRemote: false,
    stipendAmount: "$6,200/month",
    category: "marketing",
    difficulty: "intermediate"
  },

  // 3rd Year Student Opportunities
  {
    id: "7",
    title: "Advanced Software Engineering Intern",
    company: "Tesla",
    location: "Austin, TX",
    type: "paid",
    duration: "16 weeks",
    studentYear: 3,
    deadline: "2026-01-30",
    requirements: [
      "3rd year Computer Science, Software Engineering, or related field",
      "Strong programming skills in multiple languages",
      "Experience with software development lifecycle",
      "Knowledge of algorithms and system design"
    ],
    description: "Work on Tesla's autopilot software and vehicle control systems. Contribute to the future of autonomous driving technology.",
    skills: ["C++", "Python", "System Design", "Machine Learning", "Automotive Software"],
    applicationLink: "https://www.tesla.com/careers",
    isRemote: false,
    stipendAmount: "$8,500/month",
    category: "software",
    difficulty: "advanced"
  },
  {
    id: "8",
    title: "Fintech Development Specialist",
    company: "Stripe",
    location: "San Francisco, CA",
    type: "paid",
    duration: "14 weeks",
    studentYear: 3,
    deadline: "2026-02-15",
    requirements: [
      "3rd year Computer Science, Finance, or related field",
      "Strong backend development experience",
      "Understanding of financial systems and APIs",
      "Experience with distributed systems"
    ],
    description: "Build scalable financial infrastructure that processes billions in transactions. Work on payment systems, fraud detection, and financial APIs.",
    skills: ["Ruby", "Go", "API Development", "Financial Systems", "Distributed Systems"],
    applicationLink: "https://stripe.com/jobs",
    isRemote: true,
    stipendAmount: "$9,200/month",
    category: "finance",
    difficulty: "advanced"
  },
  {
    id: "9",
    title: "AI Research Assistant",
    company: "OpenAI",
    location: "San Francisco, CA",
    type: "paid",
    duration: "16 weeks",
    studentYear: 3,
    deadline: "2026-03-10",
    requirements: [
      "3rd year Computer Science, AI, or related field",
      "Strong background in machine learning",
      "Research experience or publications preferred",
      "Proficiency in deep learning frameworks"
    ],
    description: "Assist in cutting-edge AI research projects. Work alongside world-class researchers on the next generation of AI systems.",
    skills: ["PyTorch", "TensorFlow", "Research Methods", "Deep Learning", "NLP"],
    applicationLink: "https://openai.com/careers",
    isRemote: true,
    stipendAmount: "$9,500/month",
    category: "research",
    difficulty: "advanced"
  },

  // 4th Year Student Opportunities
  {
    id: "10",
    title: "Senior Software Engineer Intern",
    company: "NVIDIA",
    location: "Santa Clara, CA",
    type: "paid",
    duration: "20 weeks",
    studentYear: 4,
    deadline: "2026-04-05",
    requirements: [
      "4th year Computer Science, Electrical Engineering, or related field",
      "Extensive programming experience",
      "Experience with GPU programming or graphics",
      "Strong system design and architecture skills"
    ],
    description: "Lead major projects in GPU computing, AI acceleration, and graphics technology. Opportunity for full-time conversion upon graduation.",
    skills: ["CUDA", "C++", "Graphics Programming", "System Architecture", "Performance Optimization"],
    applicationLink: "https://nvidia.wd5.myworkdayjobs.com/",
    isRemote: false,
    stipendAmount: "$10,500/month",
    category: "software",
    difficulty: "advanced"
  },
  {
    id: "11",
    title: "Senior Product Strategy Intern",
    company: "Spotify",
    location: "New York, NY",
    type: "paid",
    duration: "16 weeks",
    studentYear: 4,
    deadline: "2026-03-20",
    requirements: [
      "4th year Business, Marketing, or related field",
      "Extensive analytics and strategy experience",
      "Leadership experience in projects or organizations",
      "Understanding of music industry and streaming platforms"
    ],
    description: "Lead strategic initiatives for Spotify's global expansion and new product development. Work directly with senior leadership team.",
    skills: ["Strategic Planning", "Data Analytics", "Leadership", "Market Research", "Business Development"],
    applicationLink: "https://www.lifeatspotify.com/jobs",
    isRemote: true,
    stipendAmount: "$8,800/month",
    category: "marketing",
    difficulty: "advanced"
  },
  {
    id: "12",
    title: "Cybersecurity Lead Intern",
    company: "Cisco",
    location: "San Jose, CA",
    type: "paid",
    duration: "18 weeks",
    studentYear: 4,
    deadline: "2026-02-28",
    requirements: [
      "4th year Cybersecurity, Computer Science, or related field",
      "Advanced knowledge of security frameworks",
      "Experience with penetration testing and security tools",
      "Security certifications preferred (CEH, CISSP, etc.)"
    ],
    description: "Lead cybersecurity initiatives and mentor junior team members. Work on enterprise-level security solutions and threat analysis.",
    skills: ["Advanced Security", "Penetration Testing", "Leadership", "Risk Assessment", "Incident Response"],
    applicationLink: "https://jobs.cisco.com/",
    isRemote: false,
    stipendAmount: "$9,800/month",
    category: "software",
    difficulty: "advanced"
  }
];

export const availableStudentYears = [1, 2, 3, 4];

export const studentYearLabels: Record<number, string> = {
  1: "1st Year (Freshman)",
  2: "2nd Year (Sophomore)", 
  3: "3rd Year (Junior)",
  4: "4th Year (Senior)"
};

export const categories = [
  { id: 'all', label: 'All Categories' },
  { id: 'software', label: 'Software Development' },
  { id: 'data', label: 'Data Science' },
  { id: 'design', label: 'Design' },
  { id: 'marketing', label: 'Marketing' },
  { id: 'research', label: 'Research' },
  { id: 'finance', label: 'Finance' },
  { id: 'consulting', label: 'Consulting' }
];
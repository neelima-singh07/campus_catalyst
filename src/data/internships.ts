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
    id: "google-girl-hackathon",
    title: "Google Girl Hackathon",
    company: "Google",
    location: "Various Cities",
    type: "unpaid",
    duration: "3 days",
    studentYear: 1,
    deadline: "2025-01-15",
    requirements: [
      "Female students in 1st-4th year",
      "Basic programming knowledge",
      "Passion for technology and innovation",
      "Team collaboration skills"
    ],
    description: "An exclusive hackathon for female students to showcase their coding skills, build innovative solutions, and network with industry professionals. Win exciting prizes and get mentorship opportunities.",
    skills: ["Programming", "Problem Solving", "Innovation", "Teamwork"],
    applicationLink: "https://buildyourfuture.withgoogle.com/events",
    isRemote: false,
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "amazon-future-engineer-scholarship",
    title: "Amazon Future Engineer (Scholarship+Laptop+Intern)",
    company: "Amazon",
    location: "Remote/Hyderabad",
    type: "paid",
    duration: "4 months",
    studentYear: 1,
    deadline: "2024-09-30",
    requirements: [
      "Female students in 1st year",
      "Computer Science or related field",
      "Strong academic performance",
      "Financial need consideration"
    ],
    description: "Comprehensive program offering scholarship, laptop, Data Structures & Algorithms training, and guaranteed internship opportunity for deserving female students.",
    skills: ["Programming", "Data Structures", "Algorithms", "Problem Solving"],
    applicationLink: "https://amazonfutureengineer.com/",
    isRemote: true,
    stipendAmount: "Scholarship + Laptop + Stipend",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "amazon-future-engineer-bootcamp",
    title: "Amazon Future Engineer Bootcamp (LAPTOP + Intern)",
    company: "Amazon",
    location: "Remote/Multiple Cities",
    type: "paid",
    duration: "3 months",
    studentYear: 1,
    deadline: "2024-11-30",
    requirements: [
      "Female students in 1st and 2nd year",
      "Basic programming knowledge",
      "Commitment to complete bootcamp",
      "Interest in software development"
    ],
    description: "Intensive bootcamp program providing laptop and internship opportunities. Focuses on practical software development skills and career preparation.",
    skills: ["Full Stack Development", "Programming", "Software Engineering", "Career Skills"],
    applicationLink: "https://amazonfutureengineer.com/bootcamp",
    isRemote: true,
    stipendAmount: "Laptop + Internship Stipend",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "flipkart-grid",
    title: "Flipkart Grid",
    company: "Flipkart",
    location: "Bangalore/Remote",
    type: "unpaid",
    duration: "2 months",
    studentYear: 1,
    deadline: "2024-06-30",
    requirements: [
      "Students in 1st-4th year",
      "Engineering/Computer Science background",
      "Problem-solving skills",
      "Programming knowledge in any language"
    ],
    description: "Annual tech challenge by Flipkart focusing on innovation and problem-solving. Participate in multiple rounds and compete for exciting prizes and internship opportunities.",
    skills: ["Programming", "Problem Solving", "Innovation", "Competitive Programming"],
    applicationLink: "https://flipkart-grid.com/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "tcs-codevita",
    title: "TCS Codevita",
    company: "TCS",
    location: "Pan India/Remote",
    type: "unpaid",
    duration: "3 months",
    studentYear: 1,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Any engineering discipline",
      "Programming skills in any language",
      "Logical thinking and problem-solving"
    ],
    description: "TCS's global programming contest that tests coding skills and algorithmic thinking. Participate in multiple rounds and get direct interview opportunities with TCS.",
    skills: ["Competitive Programming", "Algorithms", "Data Structures", "Logical Thinking"],
    applicationLink: "https://www.tcscodevita.com/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "adobe-india-hackathon",
    title: "Adobe India Hackathon",
    company: "Adobe",
    location: "Bangalore/Remote",
    type: "unpaid",
    duration: "2 days",
    studentYear: 1,
    deadline: "2024-06-30",
    requirements: [
      "Students in 1st-4th year",
      "Creative and technical skills",
      "Programming or design background",
      "Innovation mindset"
    ],
    description: "Adobe's premier hackathon focusing on creative technology solutions. Build innovative applications using Adobe's APIs and tools.",
    skills: ["Programming", "Design", "APIs", "Creative Technology"],
    applicationLink: "https://www.adobe.com/careers/university/hackathon.html",
    isRemote: true,
    category: "design",
    difficulty: "intermediate"
  },
  {
    id: "google-gsoc",
    title: "GSOC (Google Summer of Code)",
    company: "Google",
    location: "Remote",
    type: "paid",
    duration: "3 months",
    studentYear: 1,
    deadline: "2024-02-28",
    requirements: [
      "Students in 1st-4th year",
      "Open source contribution experience",
      "Programming skills",
      "Self-motivated and independent"
    ],
    description: "Google Summer of Code - work with open source organizations on meaningful projects. Get mentorship and stipend while contributing to real-world software.",
    skills: ["Open Source", "Programming", "Git", "Project Management"],
    applicationLink: "https://summerofcode.withgoogle.com/",
    isRemote: true,
    stipendAmount: "$1,500-$6,600",
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "drdo-winter-summer-intern",
    title: "DRDO Winter and Summer Intern",
    company: "DRDO",
    location: "Various DRDO Labs",
    type: "stipend",
    duration: "6-8 weeks",
    studentYear: 1,
    deadline: "2024-04-30",
    requirements: [
      "Students in 1st-4th year",
      "Engineering background",
      "Interest in defense technology",
      "Good academic record"
    ],
    description: "Internship opportunities at Defense Research and Development Organization labs across India. Work on cutting-edge defense technologies and research projects.",
    skills: ["Research", "Engineering", "Defense Technology", "Innovation"],
    applicationLink: "https://www.drdo.gov.in/",
    isRemote: false,
    stipendAmount: "₹15,000-₹25,000",
    category: "research",
    difficulty: "intermediate"
  },
  {
    id: "outreachy-open-source",
    title: "Outreachy Open Source",
    company: "Outreachy",
    location: "Remote",
    type: "paid",
    duration: "3 months",
    studentYear: 1,
    deadline: "2024-02-06",
    requirements: [
      "Female students in 1st-4th year",
      "Underrepresented groups in tech",
      "Basic programming or design skills",
      "Commitment to open source"
    ],
    description: "Outreachy provides internships for people from groups underrepresented in tech. Work remotely with experienced mentors on open source projects.",
    skills: ["Open Source", "Programming", "Design", "Documentation"],
    applicationLink: "https://www.outreachy.org/",
    isRemote: true,
    stipendAmount: "$7,000",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "infosys-scholarship-stem-star",
    title: "Scholarship Infosys STEM Star",
    company: "Infosys",
    location: "Pan India",
    type: "unpaid",
    duration: "1 year",
    studentYear: 1,
    deadline: "2024-08-31",
    requirements: [
      "1st year students",
      "STEM fields",
      "Academic excellence",
      "Financial need"
    ],
    description: "Scholarship program for meritorious students in STEM fields. Provides financial support and mentorship throughout the academic year.",
    skills: ["Academic Excellence", "STEM Knowledge", "Leadership"],
    applicationLink: "https://www.infosys.com/about/corporate-responsibility/education/stem-star.html",
    isRemote: false,
    stipendAmount: "₹2,00,000 per year",
    category: "research",
    difficulty: "beginner"
  },
  {
    id: "dxc-scholarship",
    title: "DXC Scholarship",
    company: "DXC",
    location: "Pan India",
    type: "unpaid",
    duration: "1 year",
    studentYear: 1,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Engineering/Computer Science",
      "Academic merit",
      "Financial need consideration"
    ],
    description: "DXC Technology scholarship program supporting talented students pursuing technology education. Includes mentorship and career guidance.",
    skills: ["Technology", "Academic Excellence", "Career Development"],
    applicationLink: "https://dxc.com/",
    isRemote: false,
    stipendAmount: "₹1,50,000 per year",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "hdfc-scholarship",
    title: "HDFC Scholarship",
    company: "HDFC",
    location: "Pan India",
    type: "unpaid",
    duration: "1 year",
    studentYear: 1,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Any discipline",
      "Academic merit",
      "Economic background consideration"
    ],
    description: "HDFC Bank's educational scholarship program for deserving students. Supports students from economically weaker sections in pursuing higher education.",
    skills: ["Academic Excellence", "Leadership", "Community Impact"],
    applicationLink: "https://www.hdfcbank.com/personal/ways-to-bank/digital-banking/parivartan-scholarship",
    isRemote: false,
    stipendAmount: "₹75,000 per year",
    category: "finance",
    difficulty: "beginner"
  },

  // 2nd Year Student Opportunities
  {
    id: "google-girl-hackathon-2nd",
    title: "Google Girl Hackathon",
    company: "Google",
    location: "Various Cities",
    type: "unpaid",
    duration: "3 days",
    studentYear: 2,
    deadline: "2025-01-15",
    requirements: [
      "Female students in 1st-4th year",
      "Basic programming knowledge",
      "Passion for technology and innovation",
      "Team collaboration skills"
    ],
    description: "An exclusive hackathon for female students to showcase their coding skills, build innovative solutions, and network with industry professionals. Win exciting prizes and get mentorship opportunities.",
    skills: ["Programming", "Problem Solving", "Innovation", "Teamwork"],
    applicationLink: "https://buildyourfuture.withgoogle.com/events",
    isRemote: false,
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "amazon-future-engineer-bootcamp-2nd",
    title: "Amazon Future Engineer Bootcamp (LAPTOP + Intern)",
    company: "Amazon",
    location: "Remote/Multiple Cities",
    type: "paid",
    duration: "3 months",
    studentYear: 2,
    deadline: "2024-11-30",
    requirements: [
      "Female students in 1st and 2nd year",
      "Basic programming knowledge",
      "Commitment to complete bootcamp",
      "Interest in software development"
    ],
    description: "Intensive bootcamp program providing laptop and internship opportunities. Focuses on practical software development skills and career preparation.",
    skills: ["Full Stack Development", "Programming", "Software Engineering", "Career Skills"],
    applicationLink: "https://amazonfutureengineer.com/bootcamp",
    isRemote: true,
    stipendAmount: "Laptop + Internship Stipend",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "flipkart-grid-2nd",
    title: "Flipkart Grid",
    company: "Flipkart",
    location: "Bangalore/Remote",
    type: "unpaid",
    duration: "2 months",
    studentYear: 2,
    deadline: "2024-06-30",
    requirements: [
      "Students in 1st-4th year",
      "Engineering/Computer Science background",
      "Problem-solving skills",
      "Programming knowledge in any language"
    ],
    description: "Annual tech challenge by Flipkart focusing on innovation and problem-solving. Participate in multiple rounds and compete for exciting prizes and internship opportunities.",
    skills: ["Programming", "Problem Solving", "Innovation", "Competitive Programming"],
    applicationLink: "https://flipkart-grid.com/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "tcs-codevita-2nd",
    title: "TCS Codevita",
    company: "TCS",
    location: "Pan India/Remote",
    type: "unpaid",
    duration: "3 months",
    studentYear: 2,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Any engineering discipline",
      "Programming skills in any language",
      "Logical thinking and problem-solving"
    ],
    description: "TCS's global programming contest that tests coding skills and algorithmic thinking. Participate in multiple rounds and get direct interview opportunities with TCS.",
    skills: ["Competitive Programming", "Algorithms", "Data Structures", "Logical Thinking"],
    applicationLink: "https://www.tcscodevita.com/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "adobe-india-hackathon-2nd",
    title: "Adobe India Hackathon",
    company: "Adobe",
    location: "Bangalore/Remote",
    type: "unpaid",
    duration: "2 days",
    studentYear: 2,
    deadline: "2024-06-30",
    requirements: [
      "Students in 1st-4th year",
      "Creative and technical skills",
      "Programming or design background",
      "Innovation mindset"
    ],
    description: "Adobe's premier hackathon focusing on creative technology solutions. Build innovative applications using Adobe's APIs and tools.",
    skills: ["Programming", "Design", "APIs", "Creative Technology"],
    applicationLink: "https://www.adobe.com/careers/university/hackathon.html",
    isRemote: true,
    category: "design",
    difficulty: "intermediate"
  },
  {
    id: "google-gsoc-2nd",
    title: "GSOC (Google Summer of Code)",
    company: "Google",
    location: "Remote",
    type: "paid",
    duration: "3 months",
    studentYear: 2,
    deadline: "2024-02-28",
    requirements: [
      "Students in 1st-4th year",
      "Open source contribution experience",
      "Programming skills",
      "Self-motivated and independent"
    ],
    description: "Google Summer of Code - work with open source organizations on meaningful projects. Get mentorship and stipend while contributing to real-world software.",
    skills: ["Open Source", "Programming", "Git", "Project Management"],
    applicationLink: "https://summerofcode.withgoogle.com/",
    isRemote: true,
    stipendAmount: "$1,500-$6,600",
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "drdo-winter-summer-intern-2nd",
    title: "DRDO Winter and Summer Intern",
    company: "DRDO",
    location: "Various DRDO Labs",
    type: "stipend",
    duration: "6-8 weeks",
    studentYear: 2,
    deadline: "2024-04-30",
    requirements: [
      "Students in 1st-4th year",
      "Engineering background",
      "Interest in defense technology",
      "Good academic record"
    ],
    description: "Internship opportunities at Defense Research and Development Organization labs across India. Work on cutting-edge defense technologies and research projects.",
    skills: ["Research", "Engineering", "Defense Technology", "Innovation"],
    applicationLink: "https://www.drdo.gov.in/",
    isRemote: false,
    stipendAmount: "₹15,000-₹25,000",
    category: "research",
    difficulty: "intermediate"
  },
  {
    id: "outreachy-open-source-2nd",
    title: "Outreachy Open Source",
    company: "Outreachy",
    location: "Remote",
    type: "paid",
    duration: "3 months",
    studentYear: 2,
    deadline: "2024-02-06",
    requirements: [
      "Female students in 1st-4th year",
      "Underrepresented groups in tech",
      "Basic programming or design skills",
      "Commitment to open source"
    ],
    description: "Outreachy provides internships for people from groups underrepresented in tech. Work remotely with experienced mentors on open source projects.",
    skills: ["Open Source", "Programming", "Design", "Documentation"],
    applicationLink: "https://www.outreachy.org/",
    isRemote: true,
    stipendAmount: "$7,000",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "dxc-scholarship-2nd",
    title: "DXC Scholarship",
    company: "DXC",
    location: "Pan India",
    type: "unpaid",
    duration: "1 year",
    studentYear: 2,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Engineering/Computer Science",
      "Academic merit",
      "Financial need consideration"
    ],
    description: "DXC Technology scholarship program supporting talented students pursuing technology education. Includes mentorship and career guidance.",
    skills: ["Technology", "Academic Excellence", "Career Development"],
    applicationLink: "https://dxc.com/",
    isRemote: false,
    stipendAmount: "₹1,50,000 per year",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "hdfc-scholarship-2nd",
    title: "HDFC Scholarship",
    company: "HDFC",
    location: "Pan India",
    type: "unpaid",
    duration: "1 year",
    studentYear: 2,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Any discipline",
      "Academic merit",
      "Economic background consideration"
    ],
    description: "HDFC Bank's educational scholarship program for deserving students. Supports students from economically weaker sections in pursuing higher education.",
    skills: ["Academic Excellence", "Leadership", "Community Impact"],
    applicationLink: "https://www.hdfcbank.com/personal/ways-to-bank/digital-banking/parivartan-scholarship",
    isRemote: false,
    stipendAmount: "₹75,000 per year",
    category: "finance",
    difficulty: "beginner"
  },
  {
    id: "flipkart-runaway-2nd",
    title: "Flipkart Runaway",
    company: "Flipkart",
    location: "Bangalore/Remote",
    type: "unpaid",
    duration: "2 months",
    studentYear: 2,
    deadline: "2025-02-28",
    requirements: [
      "2nd year female students",
      "Engineering/Computer Science background",
      "Interest in e-commerce and technology",
      "Problem-solving skills"
    ],
    description: "Flipkart's exclusive program for female students focusing on technology and business challenges in e-commerce.",
    skills: ["Programming", "Business Analysis", "E-commerce", "Technology"],
    applicationLink: "https://flipkart-careers.com/runaway",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "google-step-2nd",
    title: "Google STEP",
    company: "Google",
    location: "Remote/Various",
    type: "paid",
    duration: "3 months",
    studentYear: 2,
    deadline: "2024-11-30",
    requirements: [
      "2nd year female students",
      "Computer Science or related field",
      "Strong academic performance",
      "Interest in software engineering"
    ],
    description: "Student Training in Engineering Program (STEP) designed to develop technical skills and provide exposure to Google's engineering culture.",
    skills: ["Software Engineering", "Programming", "Problem Solving", "Technical Skills"],
    applicationLink: "https://buildyourfuture.withgoogle.com/programs/step/",
    isRemote: true,
    stipendAmount: "$7,500/month",
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "linkedin-coaching-2nd",
    title: "LinkedIn Coachin",
    company: "LinkedIn",
    location: "Remote",
    type: "unpaid",
    duration: "Varies",
    studentYear: 2,
    deadline: "2024-12-31",
    requirements: [
      "2nd year female students",
      "Interest in professional development",
      "Communication skills",
      "Career growth mindset"
    ],
    description: "LinkedIn's coaching program providing career guidance, professional networking skills, and industry insights for female students.",
    skills: ["Professional Development", "Networking", "Communication", "Career Planning"],
    applicationLink: "https://careers.linkedin.com/students",
    isRemote: true,
    category: "consulting",
    difficulty: "beginner"
  },
  {
    id: "infosys-hack-with-infy-2nd",
    title: "Hack with Infy",
    company: "Infosys",
    location: "Pan India/Remote",
    type: "unpaid",
    duration: "3 days",
    studentYear: 2,
    deadline: "2025-02-28",
    requirements: [
      "2nd and 3rd year students",
      "Engineering background",
      "Programming skills",
      "Innovation and creativity"
    ],
    description: "Infosys hackathon focusing on innovative solutions using cutting-edge technologies. Compete for prizes and internship opportunities.",
    skills: ["Programming", "Innovation", "Problem Solving", "Technology"],
    applicationLink: "https://www.infosys.com/careers/hackwithinfy/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "nxp-wit-2nd",
    title: "NXP WIT",
    company: "NXP",
    location: "Bangalore",
    type: "stipend",
    duration: "2 months",
    studentYear: 2,
    deadline: "2024-08-31",
    requirements: [
      "2nd year female students",
      "Electronics/Computer Science background",
      "Interest in semiconductors",
      "Technical aptitude"
    ],
    description: "NXP Women in Technology program providing hands-on experience in semiconductor technology and embedded systems.",
    skills: ["Electronics", "Embedded Systems", "Semiconductors", "Hardware"],
    applicationLink: "https://www.nxp.com/careers/",
    isRemote: false,
    stipendAmount: "₹20,000/month",
    category: "research",
    difficulty: "intermediate"
  },
  {
    id: "american-express-hackathon-2nd",
    title: "AMX Hackathon",
    company: "American Express",
    location: "Remote/Mumbai",
    type: "unpaid",
    duration: "2 days",
    studentYear: 2,
    deadline: "2025-04-30",
    requirements: [
      "3rd and 4th year students",
      "Computer Science/Engineering background",
      "Fintech interest",
      "Problem-solving skills"
    ],
    description: "American Express hackathon focusing on financial technology innovations and digital payment solutions.",
    skills: ["Fintech", "Programming", "Innovation", "Digital Payments"],
    applicationLink: "https://www.americanexpress.com/careers/",
    isRemote: true,
    category: "finance",
    difficulty: "advanced"
  },

  // 3rd Year Student Opportunities
  {
    id: "google-girl-hackathon-3rd",
    title: "Google Girl Hackathon",
    company: "Google",
    location: "Various Cities",
    type: "unpaid",
    duration: "3 days",
    studentYear: 3,
    deadline: "2025-01-15",
    requirements: [
      "Female students in 1st-4th year",
      "Basic programming knowledge",
      "Passion for technology and innovation",
      "Team collaboration skills"
    ],
    description: "An exclusive hackathon for female students to showcase their coding skills, build innovative solutions, and network with industry professionals. Win exciting prizes and get mentorship opportunities.",
    skills: ["Programming", "Problem Solving", "Innovation", "Teamwork"],
    applicationLink: "https://buildyourfuture.withgoogle.com/events",
    isRemote: false,
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "flipkart-grid-3rd",
    title: "Flipkart Grid",
    company: "Flipkart",
    location: "Bangalore/Remote",
    type: "unpaid",
    duration: "2 months",
    studentYear: 3,
    deadline: "2024-06-30",
    requirements: [
      "Students in 1st-4th year",
      "Engineering/Computer Science background",
      "Problem-solving skills",
      "Programming knowledge in any language"
    ],
    description: "Annual tech challenge by Flipkart focusing on innovation and problem-solving. Participate in multiple rounds and compete for exciting prizes and internship opportunities.",
    skills: ["Programming", "Problem Solving", "Innovation", "Competitive Programming"],
    applicationLink: "https://flipkart-grid.com/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "tcs-codevita-3rd",
    title: "TCS Codevita",
    company: "TCS",
    location: "Pan India/Remote",
    type: "unpaid",
    duration: "3 months",
    studentYear: 3,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Any engineering discipline",
      "Programming skills in any language",
      "Logical thinking and problem-solving"
    ],
    description: "TCS's global programming contest that tests coding skills and algorithmic thinking. Participate in multiple rounds and get direct interview opportunities with TCS.",
    skills: ["Competitive Programming", "Algorithms", "Data Structures", "Logical Thinking"],
    applicationLink: "https://www.tcscodevita.com/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "adobe-india-hackathon-3rd",
    title: "Adobe India Hackathon",
    company: "Adobe",
    location: "Bangalore/Remote",
    type: "unpaid",
    duration: "2 days",
    studentYear: 3,
    deadline: "2024-06-30",
    requirements: [
      "Students in 1st-4th year",
      "Creative and technical skills",
      "Programming or design background",
      "Innovation mindset"
    ],
    description: "Adobe's premier hackathon focusing on creative technology solutions. Build innovative applications using Adobe's APIs and tools.",
    skills: ["Programming", "Design", "APIs", "Creative Technology"],
    applicationLink: "https://www.adobe.com/careers/university/hackathon.html",
    isRemote: true,
    category: "design",
    difficulty: "intermediate"
  },
  {
    id: "google-gsoc-3rd",
    title: "GSOC (Google Summer of Code)",
    company: "Google",
    location: "Remote",
    type: "paid",
    duration: "3 months",
    studentYear: 3,
    deadline: "2024-02-28",
    requirements: [
      "Students in 1st-4th year",
      "Open source contribution experience",
      "Programming skills",
      "Self-motivated and independent"
    ],
    description: "Google Summer of Code - work with open source organizations on meaningful projects. Get mentorship and stipend while contributing to real-world software.",
    skills: ["Open Source", "Programming", "Git", "Project Management"],
    applicationLink: "https://summerofcode.withgoogle.com/",
    isRemote: true,
    stipendAmount: "$1,500-$6,600",
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "drdo-winter-summer-intern-3rd",
    title: "DRDO Winter and Summer Intern",
    company: "DRDO",
    location: "Various DRDO Labs",
    type: "stipend",
    duration: "6-8 weeks",
    studentYear: 3,
    deadline: "2024-04-30",
    requirements: [
      "Students in 1st-4th year",
      "Engineering background",
      "Interest in defense technology",
      "Good academic record"
    ],
    description: "Internship opportunities at Defense Research and Development Organization labs across India. Work on cutting-edge defense technologies and research projects.",
    skills: ["Research", "Engineering", "Defense Technology", "Innovation"],
    applicationLink: "https://www.drdo.gov.in/",
    isRemote: false,
    stipendAmount: "₹15,000-₹25,000",
    category: "research",
    difficulty: "intermediate"
  },
  {
    id: "outreachy-open-source-3rd",
    title: "Outreachy Open Source",
    company: "Outreachy",
    location: "Remote",
    type: "paid",
    duration: "3 months",
    studentYear: 3,
    deadline: "2024-02-06",
    requirements: [
      "Female students in 1st-4th year",
      "Underrepresented groups in tech",
      "Basic programming or design skills",
      "Commitment to open source"
    ],
    description: "Outreachy provides internships for people from groups underrepresented in tech. Work remotely with experienced mentors on open source projects.",
    skills: ["Open Source", "Programming", "Design", "Documentation"],
    applicationLink: "https://www.outreachy.org/",
    isRemote: true,
    stipendAmount: "$7,000",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "dxc-scholarship-3rd",
    title: "DXC Scholarship",
    company: "DXC",
    location: "Pan India",
    type: "unpaid",
    duration: "1 year",
    studentYear: 3,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Engineering/Computer Science",
      "Academic merit",
      "Financial need consideration"
    ],
    description: "DXC Technology scholarship program supporting talented students pursuing technology education. Includes mentorship and career guidance.",
    skills: ["Technology", "Academic Excellence", "Career Development"],
    applicationLink: "https://dxc.com/",
    isRemote: false,
    stipendAmount: "₹1,50,000 per year",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "hdfc-scholarship-3rd",
    title: "HDFC Scholarship",
    company: "HDFC",
    location: "Pan India",
    type: "unpaid",
    duration: "1 year",
    studentYear: 3,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Any discipline",
      "Academic merit",
      "Economic background consideration"
    ],
    description: "HDFC Bank's educational scholarship program for deserving students. Supports students from economically weaker sections in pursuing higher education.",
    skills: ["Academic Excellence", "Leadership", "Community Impact"],
    applicationLink: "https://www.hdfcbank.com/personal/ways-to-bank/digital-banking/parivartan-scholarship",
    isRemote: false,
    stipendAmount: "₹75,000 per year",
    category: "finance",
    difficulty: "beginner"
  },
  {
    id: "infosys-hack-with-infy-3rd",
    title: "Hack with Infy",
    company: "Infosys",
    location: "Pan India/Remote",
    type: "unpaid",
    duration: "3 days",
    studentYear: 3,
    deadline: "2025-02-28",
    requirements: [
      "2nd and 3rd year students",
      "Engineering background",
      "Programming skills",
      "Innovation and creativity"
    ],
    description: "Infosys hackathon focusing on innovative solutions using cutting-edge technologies. Compete for prizes and internship opportunities.",
    skills: ["Programming", "Innovation", "Problem Solving", "Technology"],
    applicationLink: "https://www.infosys.com/careers/hackwithinfy/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "american-express-hackathon-3rd",
    title: "AMX Hackathon",
    company: "American Express",
    location: "Remote/Mumbai",
    type: "unpaid",
    duration: "2 days",
    studentYear: 3,
    deadline: "2025-04-30",
    requirements: [
      "3rd and 4th year students",
      "Computer Science/Engineering background",
      "Fintech interest",
      "Problem-solving skills"
    ],
    description: "American Express hackathon focusing on financial technology innovations and digital payment solutions.",
    skills: ["Fintech", "Programming", "Innovation", "Digital Payments"],
    applicationLink: "https://www.americanexpress.com/careers/",
    isRemote: true,
    category: "finance",
    difficulty: "advanced"
  },
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
    id: "google-girl-hackathon-4th",
    title: "Google Girl Hackathon",
    company: "Google",
    location: "Various Cities",
    type: "unpaid",
    duration: "3 days",
    studentYear: 4,
    deadline: "2025-01-15",
    requirements: [
      "Female students in 1st-4th year",
      "Basic programming knowledge",
      "Passion for technology and innovation",
      "Team collaboration skills"
    ],
    description: "An exclusive hackathon for female students to showcase their coding skills, build innovative solutions, and network with industry professionals. Win exciting prizes and get mentorship opportunities.",
    skills: ["Programming", "Problem Solving", "Innovation", "Teamwork"],
    applicationLink: "https://buildyourfuture.withgoogle.com/events",
    isRemote: false,
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "flipkart-grid-4th",
    title: "Flipkart Grid",
    company: "Flipkart",
    location: "Bangalore/Remote",
    type: "unpaid",
    duration: "2 months",
    studentYear: 4,
    deadline: "2024-06-30",
    requirements: [
      "Students in 1st-4th year",
      "Engineering/Computer Science background",
      "Problem-solving skills",
      "Programming knowledge in any language"
    ],
    description: "Annual tech challenge by Flipkart focusing on innovation and problem-solving. Participate in multiple rounds and compete for exciting prizes and internship opportunities.",
    skills: ["Programming", "Problem Solving", "Innovation", "Competitive Programming"],
    applicationLink: "https://flipkart-grid.com/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "tcs-codevita-4th",
    title: "TCS Codevita",
    company: "TCS",
    location: "Pan India/Remote",
    type: "unpaid",
    duration: "3 months",
    studentYear: 4,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Any engineering discipline",
      "Programming skills in any language",
      "Logical thinking and problem-solving"
    ],
    description: "TCS's global programming contest that tests coding skills and algorithmic thinking. Participate in multiple rounds and get direct interview opportunities with TCS.",
    skills: ["Competitive Programming", "Algorithms", "Data Structures", "Logical Thinking"],
    applicationLink: "https://www.tcscodevita.com/",
    isRemote: true,
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "adobe-india-hackathon-4th",
    title: "Adobe India Hackathon",
    company: "Adobe",
    location: "Bangalore/Remote",
    type: "unpaid",
    duration: "2 days",
    studentYear: 4,
    deadline: "2024-06-30",
    requirements: [
      "Students in 1st-4th year",
      "Creative and technical skills",
      "Programming or design background",
      "Innovation mindset"
    ],
    description: "Adobe's premier hackathon focusing on creative technology solutions. Build innovative applications using Adobe's APIs and tools.",
    skills: ["Programming", "Design", "APIs", "Creative Technology"],
    applicationLink: "https://www.adobe.com/careers/university/hackathon.html",
    isRemote: true,
    category: "design",
    difficulty: "intermediate"
  },
  {
    id: "google-gsoc-4th",
    title: "GSOC (Google Summer of Code)",
    company: "Google",
    location: "Remote",
    type: "paid",
    duration: "3 months",
    studentYear: 4,
    deadline: "2024-02-28",
    requirements: [
      "Students in 1st-4th year",
      "Open source contribution experience",
      "Programming skills",
      "Self-motivated and independent"
    ],
    description: "Google Summer of Code - work with open source organizations on meaningful projects. Get mentorship and stipend while contributing to real-world software.",
    skills: ["Open Source", "Programming", "Git", "Project Management"],
    applicationLink: "https://summerofcode.withgoogle.com/",
    isRemote: true,
    stipendAmount: "$1,500-$6,600",
    category: "software",
    difficulty: "intermediate"
  },
  {
    id: "drdo-winter-summer-intern-4th",
    title: "DRDO Winter and Summer Intern",
    company: "DRDO",
    location: "Various DRDO Labs",
    type: "stipend",
    duration: "6-8 weeks",
    studentYear: 4,
    deadline: "2024-04-30",
    requirements: [
      "Students in 1st-4th year",
      "Engineering background",
      "Interest in defense technology",
      "Good academic record"
    ],
    description: "Internship opportunities at Defense Research and Development Organization labs across India. Work on cutting-edge defense technologies and research projects.",
    skills: ["Research", "Engineering", "Defense Technology", "Innovation"],
    applicationLink: "https://www.drdo.gov.in/",
    isRemote: false,
    stipendAmount: "₹15,000-₹25,000",
    category: "research",
    difficulty: "intermediate"
  },
  {
    id: "outreachy-open-source-4th",
    title: "Outreachy Open Source",
    company: "Outreachy",
    location: "Remote",
    type: "paid",
    duration: "3 months",
    studentYear: 4,
    deadline: "2024-02-06",
    requirements: [
      "Female students in 1st-4th year",
      "Underrepresented groups in tech",
      "Basic programming or design skills",
      "Commitment to open source"
    ],
    description: "Outreachy provides internships for people from groups underrepresented in tech. Work remotely with experienced mentors on open source projects.",
    skills: ["Open Source", "Programming", "Design", "Documentation"],
    applicationLink: "https://www.outreachy.org/",
    isRemote: true,
    stipendAmount: "$7,000",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "dxc-scholarship-4th",
    title: "DXC Scholarship",
    company: "DXC",
    location: "Pan India",
    type: "unpaid",
    duration: "1 year",
    studentYear: 4,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Engineering/Computer Science",
      "Academic merit",
      "Financial need consideration"
    ],
    description: "DXC Technology scholarship program supporting talented students pursuing technology education. Includes mentorship and career guidance.",
    skills: ["Technology", "Academic Excellence", "Career Development"],
    applicationLink: "https://dxc.com/",
    isRemote: false,
    stipendAmount: "₹1,50,000 per year",
    category: "software",
    difficulty: "beginner"
  },
  {
    id: "hdfc-scholarship-4th",
    title: "HDFC Scholarship",
    company: "HDFC",
    location: "Pan India",
    type: "unpaid",
    duration: "1 year",
    studentYear: 4,
    deadline: "2024-08-31",
    requirements: [
      "Students in 1st-4th year",
      "Any discipline",
      "Academic merit",
      "Economic background consideration"
    ],
    description: "HDFC Bank's educational scholarship program for deserving students. Supports students from economically weaker sections in pursuing higher education.",
    skills: ["Academic Excellence", "Leadership", "Community Impact"],
    applicationLink: "https://www.hdfcbank.com/personal/ways-to-bank/digital-banking/parivartan-scholarship",
    isRemote: false,
    stipendAmount: "₹75,000 per year",
    category: "finance",
    difficulty: "beginner"
  },
  {
    id: "american-express-hackathon-4th",
    title: "AMX Hackathon",
    company: "American Express",
    location: "Remote/Mumbai",
    type: "unpaid",
    duration: "2 days",
    studentYear: 4,
    deadline: "2025-04-30",
    requirements: [
      "3rd and 4th year students",
      "Computer Science/Engineering background",
      "Fintech interest",
      "Problem-solving skills"
    ],
    description: "American Express hackathon focusing on financial technology innovations and digital payment solutions.",
    skills: ["Fintech", "Programming", "Innovation", "Digital Payments"],
    applicationLink: "https://www.americanexpress.com/careers/",
    isRemote: true,
    category: "finance",
    difficulty: "advanced"
  },
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
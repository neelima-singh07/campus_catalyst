import { RoadmapTemplate } from "@/components/roadmaps/RoadmapTemplate";
import { Server } from "lucide-react";

const backendSteps = [
  {
    id: 1,
    title: "Programming Language Fundamentals",
    description: "Choose and master a backend language: Node.js, Python, or Java.",
    duration: "4-6 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "Node.js Official Documentation",
      "Python.org Tutorial",
      "JavaScript for Backend",
      "Object-Oriented Programming"
    ],
    projects: [
      "Command Line Calculator",
      "File System Operations",
      "Basic Web Scraper"
    ]
  },
  {
    id: 2,
    title: "HTTP & Web Fundamentals",
    description: "Understand how the web works, HTTP protocols, and request-response cycles.",
    duration: "2-3 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "HTTP Protocol Guide",
      "REST API Principles",
      "Web Architecture Basics",
      "Status Codes Reference"
    ],
    projects: [
      "HTTP Client Implementation",
      "Simple API Consumer",
      "Web Protocol Analyzer"
    ]
  },
  {
    id: 3,
    title: "Server-Side Frameworks",
    description: "Learn Express.js, FastAPI, or Spring Boot to build robust web applications.",
    duration: "4-5 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Express.js Documentation",
      "FastAPI Tutorial",
      "Spring Boot Guide",
      "Middleware Concepts"
    ],
    projects: [
      "REST API Server",
      "User Authentication System",
      "Blog API Backend"
    ]
  },
  {
    id: 4,
    title: "Database Management",
    description: "Master SQL and NoSQL databases for data persistence and management.",
    duration: "5-6 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "PostgreSQL Documentation",
      "MongoDB Tutorial",
      "SQL Query Optimization",
      "Database Design Principles"
    ],
    projects: [
      "E-commerce Database Schema",
      "User Management System",
      "Analytics Dashboard Backend"
    ]
  },
  {
    id: 5,
    title: "API Design & Development",
    description: "Create scalable and well-documented APIs following best practices.",
    duration: "3-4 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "REST API Best Practices",
      "GraphQL Tutorial",
      "API Documentation with Swagger",
      "Rate Limiting & Security"
    ],
    projects: [
      "Social Media API",
      "Payment Processing API",
      "File Upload Service"
    ]
  },
  {
    id: 6,
    title: "Authentication & Security",
    description: "Implement secure authentication, authorization, and protect against common vulnerabilities.",
    duration: "3-4 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "JWT Implementation Guide",
      "OAuth 2.0 & OpenID Connect",
      "OWASP Security Guidelines",
      "Password Hashing Best Practices"
    ],
    projects: [
      "Secure User Authentication",
      "Role-Based Access Control",
      "Multi-Factor Authentication"
    ]
  },
  {
    id: 7,
    title: "DevOps & Deployment",
    description: "Learn containerization, cloud deployment, and CI/CD pipelines.",
    duration: "4-5 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "Docker Documentation",
      "AWS/GCP/Azure Guides",
      "CI/CD with GitHub Actions",
      "Infrastructure as Code"
    ],
    projects: [
      "Dockerized Application",
      "Cloud Deployment Pipeline",
      "Monitoring & Logging Setup"
    ]
  },
  {
    id: 8,
    title: "Performance & Scalability",
    description: "Optimize applications for high performance and scalability.",
    duration: "3-4 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "Caching Strategies",
      "Load Balancing Techniques",
      "Database Optimization",
      "Microservices Architecture"
    ],
    projects: [
      "High-Performance API",
      "Caching Implementation",
      "Microservices Architecture"
    ]
  }
];

const BackendRoadmap = () => {
  return (
    <RoadmapTemplate
      title="Backend Development"
      description="Build robust, scalable server-side applications and APIs"
      icon={Server}
      color="bg-green-500"
      duration="7-10 months"
      difficulty="Beginner to Advanced"
      students="12,000+"
      rating={4.7}
      steps={backendSteps}
      pdfUrl="/pdfs/backend-roadmap.pdf"
      prerequisites={["Programming fundamentals", "Basic understanding of web technologies"]}
      careerPaths={[
        "Backend Developer",
        "API Developer",
        "DevOps Engineer",
        "Full Stack Developer",
        "System Architect"
      ]}
    />
  );
};

export default BackendRoadmap;
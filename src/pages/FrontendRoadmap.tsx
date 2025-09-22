import { RoadmapTemplate } from "@/components/roadmaps/RoadmapTemplate";
import { Code2 } from "lucide-react";

const frontendSteps = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    description: "Master the building blocks of web development with semantic HTML and modern CSS.",
    duration: "3-4 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "MDN Web Docs - HTML & CSS",
      "FreeCodeCamp HTML/CSS Course",
      "CSS Grid and Flexbox Guide",
      "Responsive Design Principles"
    ],
    projects: [
      "Personal Portfolio Website",
      "Landing Page Clone",
      "Responsive Navigation Bar"
    ]
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description: "Learn core JavaScript concepts, ES6+ features, and DOM manipulation.",
    duration: "4-6 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "JavaScript.info Tutorial",
      "Eloquent JavaScript Book",
      "ES6 Features Guide",
      "DOM Manipulation Exercises"
    ],
    projects: [
      "Todo List Application",
      "Calculator App",
      "Interactive Quiz Game"
    ]
  },
  {
    id: 3,
    title: "Version Control with Git",
    description: "Master Git for version control and collaboration on GitHub.",
    duration: "1-2 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "Git Official Documentation",
      "Pro Git Book",
      "GitHub Learning Lab",
      "Git Branching Interactive Tutorial"
    ],
    projects: [
      "Create GitHub Portfolio",
      "Contribute to Open Source",
      "Git Workflow Practice"
    ]
  },
  {
    id: 4,
    title: "React.js Development",
    description: "Build dynamic user interfaces with React, hooks, and component-based architecture.",
    duration: "6-8 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "React Official Documentation",
      "React Hooks Guide",
      "React Router Tutorial",
      "State Management Patterns"
    ],
    projects: [
      "Weather App with API",
      "E-commerce Product Catalog",
      "Social Media Dashboard"
    ]
  },
  {
    id: 5,
    title: "TypeScript & Advanced React",
    description: "Add type safety to your React applications and learn advanced patterns.",
    duration: "4-5 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "TypeScript Handbook",
      "React with TypeScript Guide",
      "Advanced React Patterns",
      "Performance Optimization"
    ],
    projects: [
      "Type-safe Todo App",
      "Component Library",
      "Advanced Form Builder"
    ]
  },
  {
    id: 6,
    title: "Styling & UI Frameworks",
    description: "Master modern CSS frameworks and styling solutions for professional UIs.",
    duration: "3-4 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Tailwind CSS Documentation",
      "Styled Components Guide",
      "CSS-in-JS Solutions",
      "Design System Principles"
    ],
    projects: [
      "Responsive Dashboard",
      "Component Design System",
      "Mobile-First Website"
    ]
  },
  {
    id: 7,
    title: "Build Tools & Development Workflow",
    description: "Set up modern development environments with Vite, Webpack, and deployment pipelines.",
    duration: "2-3 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "Vite Documentation",
      "Webpack Guide",
      "ESLint & Prettier Setup",
      "CI/CD with GitHub Actions"
    ],
    projects: [
      "Automated Build Pipeline",
      "Multi-environment Setup",
      "Performance Optimized App"
    ]
  },
  {
    id: 8,
    title: "Testing & Quality Assurance",
    description: "Implement comprehensive testing strategies for reliable frontend applications.",
    duration: "3-4 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "Jest Testing Framework",
      "React Testing Library",
      "Cypress E2E Testing",
      "Testing Best Practices"
    ],
    projects: [
      "Fully Tested Todo App",
      "E2E Testing Suite",
      "Component Testing Library"
    ]
  }
];

const FrontendRoadmap = () => {
  return (
    <RoadmapTemplate
      title="Frontend Development"
      description="Master modern frontend technologies and build stunning user interfaces"
      icon={Code2}
      color="bg-blue-500"
      duration="6-9 months"
      difficulty="Beginner to Advanced"
      students="15,000+"
      rating={4.8}
      steps={frontendSteps}
      prerequisites={["Basic computer skills", "Interest in web development"]}
      careerPaths={[
        "Frontend Developer",
        "React Developer",
        "UI/UX Developer",
        "Full Stack Developer",
        "JavaScript Engineer"
      ]}
    />
  );
};

export default FrontendRoadmap;
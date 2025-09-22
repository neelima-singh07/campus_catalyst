import { RoadmapTemplate } from "@/components/roadmaps/RoadmapTemplate";
import { GitBranch } from "lucide-react";

const dsaSteps = [
  {
    id: 1,
    title: "Programming Language Mastery",
    description: "Choose and master a programming language (Python, Java, C++, or JavaScript) for DSA.",
    duration: "3-4 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "Language Fundamentals Course",
      "Basic Syntax & Semantics",
      "Input/Output Operations",
      "Control Structures"
    ],
    projects: [
      "Simple Calculator",
      "Pattern Printing Programs",
      "Basic Problem Solving"
    ]
  },
  {
    id: 2,
    title: "Time & Space Complexity Analysis",
    description: "Understand Big O notation, algorithmic complexity, and performance analysis.",
    duration: "2-3 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "Big O Notation Guide",
      "Complexity Analysis Tutorial",
      "Best/Average/Worst Cases",
      "Space-Time Tradeoffs"
    ],
    projects: [
      "Algorithm Complexity Calculator",
      "Performance Comparison Tool",
      "Complexity Visualization"
    ]
  },
  {
    id: 3,
    title: "Arrays & Strings",
    description: "Master array manipulation, string processing, and fundamental operations.",
    duration: "3-4 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "Array Operations Guide",
      "String Manipulation Techniques",
      "Two Pointer Approach",
      "Sliding Window Pattern"
    ],
    projects: [
      "Array Rotation Algorithm",
      "String Pattern Matcher",
      "Subarray Sum Problems"
    ]
  },
  {
    id: 4,
    title: "Linked Lists & Stacks/Queues",
    description: "Implement and manipulate linear data structures effectively.",
    duration: "4-5 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Linked List Implementation",
      "Stack & Queue Operations",
      "Circular & Doubly Linked Lists",
      "Advanced List Algorithms"
    ],
    projects: [
      "Custom Linked List Library",
      "Stack-based Calculator",
      "Queue Simulation System"
    ]
  },
  {
    id: 5,
    title: "Trees & Binary Search Trees",
    description: "Learn tree structures, traversals, and binary search tree operations.",
    duration: "5-6 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Tree Data Structure Guide",
      "Binary Tree Traversals",
      "BST Operations",
      "Balanced Trees (AVL, Red-Black)"
    ],
    projects: [
      "File System Tree",
      "Expression Tree Evaluator",
      "Auto-complete System"
    ]
  },
  {
    id: 6,
    title: "Graphs & Advanced Algorithms",
    description: "Master graph algorithms, shortest paths, and graph traversal techniques.",
    duration: "6-7 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "Graph Representation",
      "DFS & BFS Algorithms",
      "Dijkstra's Algorithm",
      "Minimum Spanning Trees"
    ],
    projects: [
      "Social Network Analyzer",
      "GPS Navigation System",
      "Network Topology Mapper"
    ]
  },
  {
    id: 7,
    title: "Dynamic Programming",
    description: "Solve complex optimization problems using dynamic programming techniques.",
    duration: "5-6 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "DP Fundamentals",
      "Memoization vs Tabulation",
      "Classic DP Problems",
      "Advanced DP Patterns"
    ],
    projects: [
      "Coin Change Calculator",
      "Longest Common Subsequence",
      "Stock Trading Optimizer"
    ]
  },
  {
    id: 8,
    title: "Advanced Topics & Interview Prep",
    description: "Cover advanced algorithms, system design basics, and interview strategies.",
    duration: "4-5 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "Advanced Algorithm Patterns",
      "System Design Basics",
      "Interview Problem Solving",
      "Coding Interview Practice"
    ],
    projects: [
      "Algorithm Visualizer",
      "Interview Problem Tracker",
      "Performance Benchmarking Tool"
    ]
  }
];

const DSARoadmap = () => {
  return (
    <RoadmapTemplate
      title="Data Structures & Algorithms"
      description="Master fundamental computer science concepts for technical interviews and problem-solving"
      icon={GitBranch}
      color="bg-orange-500"
      duration="6-8 months"
      difficulty="Beginner to Advanced"
      students="25,000+"
      rating={4.8}
      steps={dsaSteps}
      pdfUrl="/pdfs/dsa-roadmap-cpp.pdf"
      additionalPdfs={[
        { name: "DSA Roadmap - C++", url: "/pdfs/dsa-roadmap-cpp.pdf" },
        { name: "DSA Roadmap - Java", url: "/pdfs/dsa-roadmap-java.pdf" }
      ]}
      prerequisites={["Basic programming knowledge", "Mathematical reasoning", "Problem-solving aptitude"]}
      careerPaths={[
        "Software Engineer",
        "Algorithm Engineer",
        "Competitive Programmer",
        "Technical Interview Success",
        "Computer Science Researcher"
      ]}
    />
  );
};

export default DSARoadmap;
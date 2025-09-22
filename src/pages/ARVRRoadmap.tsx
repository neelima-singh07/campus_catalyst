import { RoadmapTemplate } from "@/components/roadmaps/RoadmapTemplate";
import { Glasses } from "lucide-react";

const arvrSteps = [
  {
    id: 1,
    title: "3D Graphics Fundamentals",
    description: "Learn 3D mathematics, coordinate systems, and graphics programming basics.",
    duration: "4-5 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "3D Math Primer",
      "Computer Graphics Principles",
      "Vector & Matrix Operations",
      "3D Rendering Pipeline"
    ],
    projects: [
      "3D Cube Renderer",
      "Basic 3D Scene",
      "Camera Movement System"
    ]
  },
  {
    id: 2,
    title: "Unity Game Engine",
    description: "Master Unity for AR/VR development, scripting with C#, and scene management.",
    duration: "6-8 weeks",
    difficulty: "Beginner" as const,
    resources: [
      "Unity Learn Platform",
      "C# for Unity Tutorial",
      "Unity XR Toolkit",
      "Unity Asset Store Guide"
    ],
    projects: [
      "3D Platformer Game",
      "VR Interaction System",
      "AR Object Placement"
    ]
  },
  {
    id: 3,
    title: "Virtual Reality Development",
    description: "Build immersive VR experiences for Oculus, HTC Vive, and other VR platforms.",
    duration: "5-6 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Oculus SDK Documentation",
      "SteamVR Unity Plugin",
      "VR Interaction Design",
      "Performance Optimization for VR"
    ],
    projects: [
      "VR Room Exploration",
      "VR Training Simulator",
      "Multiplayer VR Game"
    ]
  },
  {
    id: 4,
    title: "Augmented Reality Development",
    description: "Create AR applications using ARCore, ARKit, and AR Foundation.",
    duration: "5-6 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "AR Foundation Documentation",
      "ARCore Development Guide",
      "ARKit Tutorial",
      "Computer Vision for AR"
    ],
    projects: [
      "AR Furniture Placement",
      "Location-based AR App",
      "AR Business Card Scanner"
    ]
  },
  {
    id: 5,
    title: "Mixed Reality & Spatial Computing",
    description: "Develop for HoloLens, Magic Leap, and spatial computing platforms.",
    duration: "4-5 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "HoloLens Development",
      "Magic Leap SDK",
      "Spatial Mapping",
      "Hand Tracking Implementation"
    ],
    projects: [
      "Holographic UI Interface",
      "Spatial Collaboration Tool",
      "MR Data Visualization"
    ]
  },
  {
    id: 6,
    title: "3D Modeling & Asset Creation",
    description: "Learn Blender, Maya, or 3ds Max for creating optimized 3D assets.",
    duration: "6-8 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "Blender Tutorial Series",
      "3D Modeling Best Practices",
      "Texture Creation Guide",
      "Animation Principles"
    ],
    projects: [
      "Character Model & Rigging",
      "Environment Asset Pack",
      "Animated 3D Scene"
    ]
  },
  {
    id: 7,
    title: "Advanced XR Technologies",
    description: "Explore WebXR, haptic feedback, eye tracking, and emerging XR technologies.",
    duration: "4-5 weeks",
    difficulty: "Advanced" as const,
    resources: [
      "WebXR API Documentation",
      "Haptic Feedback Systems",
      "Eye Tracking Integration",
      "XR Performance Optimization"
    ],
    projects: [
      "WebXR Portfolio Site",
      "Haptic VR Experience",
      "Eye-Controlled Interface"
    ]
  },
  {
    id: 8,
    title: "XR UX/UI Design",
    description: "Design intuitive user experiences for immersive environments.",
    duration: "3-4 weeks",
    difficulty: "Intermediate" as const,
    resources: [
      "XR Design Principles",
      "Spatial UI Guidelines",
      "User Testing in XR",
      "Accessibility in XR"
    ],
    projects: [
      "VR Menu System",
      "AR User Interface",
      "XR Accessibility Features"
    ]
  }
];

const ARVRRoadmap = () => {
  return (
    <RoadmapTemplate
      title="AR/VR"
      description="Create immersive experiences with augmented and virtual reality technologies"
      icon={Glasses}
      color="bg-pink-500"
      duration="8-10 months"
      difficulty="Intermediate to Advanced"
      students="3,200+"
      rating={4.6}
      steps={arvrSteps}
      prerequisites={["Basic programming", "3D graphics concepts", "Unity basics"]}
      careerPaths={[
        "AR/VR Developer",
        "XR Engineer",
        "3D Graphics Programmer",
        "Immersive Experience Designer",
        "Spatial Computing Engineer"
      ]}
    />
  );
};

export default ARVRRoadmap;
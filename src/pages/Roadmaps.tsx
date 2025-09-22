import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code2, 
  Server, 
  Brain, 
  Glasses, 
  GitBranch, 
  Blocks,
  ArrowRight,
  Download
} from "lucide-react";

const roadmaps = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Master modern frontend technologies including React, Vue, Angular, and responsive design principles.",
    icon: Code2,
    color: "bg-blue-500",
    path: "/roadmaps/frontend",
    skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Learn server-side development with Node.js, Python, databases, and API design.",
    icon: Server,
    color: "bg-green-500",
    path: "/roadmaps/backend",
    skills: ["Node.js", "Python", "Databases", "REST APIs", "Docker"]
  },
  {
    id: "aiml",
    title: "AI/ML",
    description: "Dive into artificial intelligence and machine learning with Python, TensorFlow, and data science.",
    icon: Brain,
    color: "bg-purple-500",
    path: "/roadmaps/aiml",
    skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Deep Learning"]
  },
  {
    id: "arvr",
    title: "AR/VR",
    description: "Explore augmented and virtual reality development with Unity, Unreal Engine, and WebXR.",
    icon: Glasses,
    color: "bg-pink-500",
    path: "/roadmaps/arvr",
    skills: ["Unity", "Unreal Engine", "C#", "WebXR", "3D Modeling"]
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    description: "Master fundamental computer science concepts essential for technical interviews and problem-solving.",
    icon: GitBranch,
    color: "bg-orange-500",
    path: "/roadmaps/dsa",
    skills: ["Arrays", "Trees", "Graphs", "Dynamic Programming", "Sorting"]
  },
  {
    id: "blockchain",
    title: "Blockchain",
    description: "Learn blockchain technology, smart contracts, and decentralized application development.",
    icon: Blocks,
    color: "bg-indigo-500",
    path: "/roadmaps/blockchain",
    skills: ["Solidity", "Web3", "Smart Contracts", "DApps", "Ethereum"]
  }
];

const Roadmaps = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background particles - BEHIND content */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-20 left-1/3 w-2 h-2 bg-green-400/40 rounded-full animate-bounce"></div>
        <div className="absolute top-40 left-2/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-40 right-2/3 w-2 h-2 bg-teal-400/50 rounded-full animate-ping"></div>
        <div className="absolute top-60 right-1/2 w-1 h-1 bg-violet-400 rounded-full animate-bounce opacity-70"></div>
        
        {/* Larger floating orbs */}
        <div className="absolute top-16 right-1/4 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 left-1/5 w-6 h-6 bg-gradient-to-r from-purple-400/25 to-pink-400/25 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-3/4 w-4 h-4 bg-gradient-to-r from-cyan-400/15 to-blue-400/15 rounded-full animate-pulse"></div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.4) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Content layer - ABOVE background */}
      <div className="relative z-10">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tech Learning 
            <span className="text-blue-600"> Roadmaps</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Structured learning paths to guide your journey in technology. 
            Choose your field and follow our comprehensive roadmaps to master the skills that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-5 h-5 mr-2" />
              Download All PDFs
            </Button>
            <Button size="lg" variant="outline">
              View Learning Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each roadmap is carefully curated with step-by-step guidance, resources, and projects to help you succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap) => {
              const IconComponent = roadmap.icon;
              return (
                <Card key={roadmap.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className={`w-12 h-12 ${roadmap.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {roadmap.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {roadmap.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {roadmap.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to={roadmap.path}>
                      <Button className="w-full group-hover:bg-gray-900 transition-colors duration-300">
                        View Roadmap
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Animated background elements - BEHIND content */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
          
          {/* Floating particles/glitter */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute top-40 left-2/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 right-2/3 w-2 h-2 bg-teal-400 rounded-full animate-ping"></div>
          
          {/* Larger glowing orbs */}
          <div className="absolute top-16 right-1/4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-16 left-1/5 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute top-1/3 left-3/4 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-25 animate-pulse"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Content - ABOVE background */}
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 drop-shadow-md">
            Join thousands of learners who have successfully followed our roadmaps to land their dream tech jobs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Button>
            <Button size="lg" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Join Community
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Roadmaps;
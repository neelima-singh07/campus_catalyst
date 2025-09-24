import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Download, 
  Clock, 
  Users, 
  Star, 
  CheckCircle,
  ArrowLeft,
  ExternalLink,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  resources: string[];
  projects?: string[];
}

interface RoadmapTemplateProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  duration: string;
  difficulty: string;
  students?: string;
  rating?: number;
  steps: RoadmapStep[];
  pdfUrl?: string;
  additionalPdfs?: { name: string; url: string; }[];
  prerequisites?: string[];
  careerPaths?: string[];
}

export const RoadmapTemplate = ({
  title,
  description,
  icon: IconComponent,
  color,
  duration,
  difficulty,
  students,
  rating,
  steps,
  pdfUrl,
  additionalPdfs = [],
  prerequisites = [],
  careerPaths = []
}: RoadmapTemplateProps) => {
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
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link to="/roadmaps">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Roadmaps
              </Button>
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    {title}
                  </h1>
                  <p className="text-xl text-gray-600 mt-2">
                    {description}
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{duration}</span>
                </div>
                <Badge variant="secondary">{difficulty}</Badge>
              </div>

              {/* Prerequisites */}
              {prerequisites.length > 0 && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="text-lg">Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {prerequisites.map((prereq, index) => (
                        <Badge key={index} variant="outline">
                          {prereq}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Get Started</CardTitle>
                  <CardDescription>
                    Download the complete roadmap and start your journey
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {additionalPdfs.length > 0 ? (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Download Roadmaps:</h4>
                      {additionalPdfs.map((pdf, index) => (
                        <a key={index} href={pdf.url} download target="_blank" rel="noopener noreferrer">
                          <Button className="w-full" size="lg" variant={index === 0 ? "default" : "outline"}>
                            <Download className="w-5 h-5 mr-2" />
                            {pdf.name}
                          </Button>
                        </a>
                      ))}
                    </div>
                  ) : pdfUrl && (
                    <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
                      <Button className="w-full" size="lg">
                        <Download className="w-5 h-5 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  )}
                  <Button variant="outline" className="w-full">
                    <BookOpen className="w-5 h-5 mr-2" />
                    View Resources
                  </Button>
                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Join Community
                  </Button>
                </CardContent>
              </Card>

              {/* Career Paths */}
              {careerPaths.length > 0 && (
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Career Paths</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {careerPaths.map((path, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{path}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Steps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Learning Path
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow this structured path to master {title.toLowerCase()}. Each step builds upon the previous one.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={step.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                        {step.id}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">
                          {step.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {step.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={
                        step.difficulty === "Beginner" ? "secondary" :
                        step.difficulty === "Intermediate" ? "default" : "destructive"
                      }>
                        {step.difficulty}
                      </Badge>
                      <span className="text-sm text-gray-500">{step.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Resources:</h4>
                      <ul className="space-y-1">
                        {step.resources.map((resource, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-sm text-gray-700">{resource}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {step.projects && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Projects:</h4>
                        <ul className="space-y-1">
                          {step.projects.map((project, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <span className="text-sm text-gray-700">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Enhanced animated background elements - BEHIND content */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Multi-layer gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/25 via-purple-600/25 to-pink-600/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          
          {/* Dynamic floating particles/glitter */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping shadow-lg shadow-purple-400/50"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-400/50"></div>
          <div className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
          <div className="absolute bottom-32 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping shadow-lg shadow-yellow-400/50"></div>
          <div className="absolute top-20 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-bounce shadow-lg shadow-green-400/50"></div>
          <div className="absolute top-40 left-2/3 w-1 h-1 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50"></div>
          <div className="absolute bottom-40 right-2/3 w-2 h-2 bg-teal-400 rounded-full animate-ping shadow-lg shadow-teal-400/50"></div>
          <div className="absolute top-60 right-1/2 w-1 h-1 bg-violet-400 rounded-full animate-bounce shadow-lg shadow-violet-400/50"></div>
          
          {/* Larger glowing orbs with enhanced effects */}
          <div className="absolute top-16 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-pulse blur-sm"></div>
          <div className="absolute bottom-16 left-1/5 w-8 h-8 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full animate-bounce blur-sm"></div>
          <div className="absolute top-1/3 left-3/4 w-6 h-6 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full animate-pulse blur-sm"></div>
          
          {/* Enhanced grid pattern */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
          
          {/* Animated wave effect */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
          </div>
        </div>
        
        {/* Content - ABOVE background */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Master {title}?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your journey today and join the community of successful developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {additionalPdfs.length > 0 ? (
              <div className="flex flex-col sm:flex-row gap-2">
                {additionalPdfs.map((pdf, index) => (
                  <a key={index} href={pdf.url} download target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className={index === 0 ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"}>
                      <Download className="w-5 h-5 mr-2" />
                      {pdf.name}
                    </Button>
                  </a>
                ))}
              </div>
            ) : pdfUrl ? (
              <a href={pdfUrl} download target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-5 h-5 mr-2" />
                  Download Roadmap
                </Button>
              </a>
            ) : (
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="w-5 h-5 mr-2" />
                Download Roadmap
              </Button>
            )}
            <Button size="lg" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Join Discord Community
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
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
  students: string;
  rating: number;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{students} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700">{rating}/5</span>
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
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
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
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Join Discord Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
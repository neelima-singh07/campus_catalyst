import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, UserCheck, MonitorSpeaker, Bookmark, File, ExternalLink, BookOpen, Calendar, HelpCircle, Building, Archive, FileSpreadsheet, Search } from "lucide-react";

const Resources = () => {
  const resumeTemplates = [
    {
      title: "FAANG Path Simple Template",
      desc: "Clean and professional resume template optimized for tech interviews and FAANG companies.",
      url: "https://www.overleaf.com/latex/templates/faangpath-simple-template/npsfpdqnxmbc",
    },
    {
      title: "Jake's Resume Template",
      desc: "Popular LaTeX resume template with clean design and professional layout.",
      url: "https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs",
    },
    {
      title: "Jake's Resume (Anonymous)",
      desc: "Anonymous version of Jake's resume template - perfect for customization without personal details.",
      url: "https://www.overleaf.com/latex/templates/jakes-resume-anonymous/cstpnrbkhndn",
    },
    {
      title: "SWE Resume Template",
      desc: "Software Engineering focused resume template designed for technical roles and internships.",
      url: "https://www.overleaf.com/latex/templates/swe-resume-template/bznbzdprjfyy",
    },
  ];

  const gsocResources = [
    {
      title: "GSoC Home",
      desc: "Official Google Summer of Code website with program information and application details.",
      url: "https://summerofcode.withgoogle.com/",
    },
    {
      title: "GSoC Student Guide",
      desc: "Comprehensive guide for students participating in Google Summer of Code program.",
      url: "https://google.github.io/gsocguides/student/",
    },
    {
      title: "GSoC FAQ",
      desc: "Frequently asked questions about Google Summer of Code program and applications.",
      url: "https://developers.google.com/open-source/gsoc/faq",
    },
    {
      title: "GSoC Organizations Database",
      desc: "Browse and search through all organizations that participate in Google Summer of Code.",
      url: "https://www.gsocorganizations.dev/",
    },
    {
      title: "GSoC Archive",
      desc: "Historical archive of all Google Summer of Code programs and projects from previous years.",
      url: "https://summerofcode.withgoogle.com/archive",
    },
    {
      title: "GSoC Organization List (Summary)",
      desc: "Comprehensive summary of organizations that have appeared in GSoC over previous years.",
      url: "https://drive.google.com/file/d/15dXTegrhOqb7tTUwdXHRV2dMrb60z1c/view?usp=drivesdk",
    },
  ];

  const resources = [
    {
      title: "Top Google DSA Interview Questions",
      desc: "Essential Data Structures and Algorithms questions frequently asked in Google technical interviews.",
      to: "/DOC-20241217-WA0043.pdf",
      icon: File,
    },
    {
      title: "Aptitude Test Interview Questions",
      desc: "Comprehensive collection of aptitude test questions and practice problems for technical interviews.",
      to: "https://www.naukri.com/code360/library/aptitude-test-interview-questions",
      icon: BookOpen,
    },
    {
      title: "Overleaf LaTeX CV Templates",
      desc: "Browse and use free LaTeX CV/resume templates on Overleaf.",
      to: "https://www.overleaf.com/latex/templates/tagged/cv",
      icon: FileText,
    },
    {
      title: "Codolio Profile Guide",
      desc: "How to build a standout Codolio profile with real examples and tips.",
      to: "https://codolio.com/blog/how-to-create-codolio-profile",
      icon: UserCheck,
    },
    {
      title: "GitHub Profile Readme Inspiration",
      desc: "Awesome GitHub profile README templates and showcase projects.",
      to: "https://github.com/abhisheknaiidu/awesome-github-profile-readme",
      icon: UserCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <Navigation />

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold">Resources</h1>
          <p className="text-gray-600 mt-2">
            Curated resources to help you build your resume, portfolio, and technical profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Resume Templates Card */}
          <Card className="p-6 col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-md">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Professional Resume Templates</h3>
                <p className="text-gray-600 mb-4">
                  Carefully curated LaTeX resume templates optimized for tech interviews, internships, and professional opportunities.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resumeTemplates.map((template) => (
                <div key={template.title} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{template.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">{template.desc}</p>
                    </div>
                  </div>
                  <a href={template.url} target="_blank" rel="noreferrer">
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Open Template
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* GSoC Resources Card */}
          <Card className="p-6 col-span-1 md:col-span-2 lg:col-span-3">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-md">
                <div className="w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Google Summer of Code Resources</h3>
                <p className="text-gray-600 mb-4">
                  Essential resources and guides for students interested in participating in Google Summer of Code program.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {gsocResources.map((resource) => (
                <div key={resource.title} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 hover:shadow-md transition-all duration-200">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{resource.title}</h4>
                      <p className="text-sm text-gray-600 line-clamp-2">{resource.desc}</p>
                    </div>
                  </div>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Open Resource
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* Other Resources */}
          {resources.map((r) => {
            const Icon = r.icon;
            const isExternal = r.to.startsWith("http") || r.to.endsWith(".pdf");

            return (
              <Card key={r.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-md">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 mb-4">{r.desc}</p>
                    {isExternal ? (
                      <a href={r.to} target="_blank" rel="noreferrer">
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white">Open</Button>
                      </a>
                    ) : (
                      <Link to={r.to}>
                        <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white">View</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resources;

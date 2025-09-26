import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, UserCheck, MonitorSpeaker, Bookmark, File, ExternalLink, BookOpen, Calendar, HelpCircle, Building, Archive, FileSpreadsheet, Search, Sparkles, Star, Trophy, Zap } from "lucide-react";

const Resources = () => {
  const resumeTemplates = [
    {
      title: "Resume Building Guide",
      desc: "Comprehensive guide on how to build an effective resume with tips, strategies, and best practices.",
      url: "https://docs.google.com/document/d/1a4zGF0FWcCRFYzld1JRuQcoxdi6VCYPssIDkXyJ1hSE/edit?usp=sharing",
    },
    {
      title: "Overleaf LaTeX CV Templates",
      desc: "Browse and use free LaTeX CV/resume templates on Overleaf for professional resume creation.",
      url: "https://www.overleaf.com/latex/templates/tagged/cv",
    },
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

  const dsaResources = [
    {
      title: "A2Z Striver DSA Sheet",
      desc: "Complete A2Z DSA course sheet by Striver covering all essential data structures and algorithms concepts systematically.",
      url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
      buttonText: "Open Resource"
    },
    {
      title: "CodeCafe DSA Resources",
      desc: "Comprehensive DSA resources and technical interview tips from CodeCafe for mastering algorithms and data structures.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeWhTqj5rbXSogj5--VERLAji411rJ4pPBOMsy81xmROxFt8Q/viewform?usp=header",
      buttonText: "Request Access"
    },
    {
      title: "Top Google DSA Interview Questions",
      desc: "Essential Data Structures and Algorithms questions frequently asked in Google technical interviews.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeWhTqj5rbXSogj5--VERLAji411rJ4pPBOMsy81xmROxFt8Q/viewform?usp=header",
      buttonText: "Request Access"
    },
    {
      title: "Top 100 LeetCode Questions",
      desc: "Master the most important LeetCode problems for technical interviews with detailed solutions and explanations.",
      url: "https://instabyte.io/p/interview-master-100",
      buttonText: "Open Resource"
    },
  ];

  const aptitudeResources = [
    {
      title: "Goldman Sachs Aptitude Questions",
      desc: "Goldman Sachs aptitude questions and answers with detailed explanations for comprehensive interview preparation.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSeWhTqj5rbXSogj5--VERLAji411rJ4pPBOMsy81xmROxFt8Q/viewform?usp=header",
      buttonText: "Request Access"
    },
    {
      title: "Aptitude Test Interview Questions",
      desc: "Comprehensive collection of aptitude test questions and practice problems for technical interviews.",
      url: "https://www.naukri.com/code360/library/aptitude-test-interview-questions",
      buttonText: "Open Resource"
    },
  ];

  const resources = [
    {
      title: "Kaggle Contributor Guide",
      desc: "Complete guide to becoming a successful Kaggle contributor with tips for competitions, datasets, and community engagement.",
      to: "/Kaggle-Contributor-Guide.pdf",
      icon: File,
    },
    {
      title: "HR Interview Questions",
      desc: "Essential HR interview questions and answers to help you prepare for behavioral and situational interviews.",
      to: "/pdfs/HR_interview ques.pdf",
      icon: File,
    },
    {
      title: "Get your resume reviewed",
      desc: "Increase your ATS Score from 0 to 90 by Tech With Upasana",
      to: "https://sites.google.com/view/techwithupasana",
      icon: FileText,
    },
    {
      title: "Codolio Profile Guide",
      desc: "How to build a standout Codolio profile with real examples and tips.",
      to: "https://codolio.com/",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 bg-gradient-to-r from-emerald-500/15 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '4s' }}></div>
        
        {/* Floating Stars - responsive */}
        {[...Array(window.innerWidth < 768 ? 6 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Star className="w-1 h-1 sm:w-2 sm:h-2" />
          </div>
        ))}
      </div>

      <Navigation />

      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-purple-500/30">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 animate-pulse" />
            <span className="text-purple-300 font-semibold text-sm sm:text-base">Curated Learning Resources</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Premium Resources
            </span>
            <br />
            <span className="text-gray-300 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              For Your Success
            </span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Unlock your potential with our handpicked collection of resources designed to accelerate your career in tech.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
          {/* Resume Templates Card */}
          <Card className="group relative p-4 sm:p-6 lg:p-8 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 hover:border-purple-500/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating decoration */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-bounce" style={{ animationDuration: '3s' }} />
            </div>

            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform duration-500">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white group-hover:text-purple-200 transition-colors duration-500">
                  Professional Resume Templates
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  Carefully curated LaTeX resume templates optimized for tech interviews, internships, and professional opportunities.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
              {resumeTemplates.map((template, idx) => (
                <div key={template.title} className="group/item border border-gray-600/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 bg-gray-800/40 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base mb-1 group-hover/item:text-purple-200 transition-colors duration-300">{template.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 group-hover/item:text-white transition-colors duration-300">{template.desc}</p>
                    </div>
                  </div>
                  <a href={template.url} target="_blank" rel="noreferrer">
                    <Button size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0 hover:scale-105 transition-all duration-300 text-xs sm:text-sm">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Open Template
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* GSoC Resources Card */}
          <Card className="group relative p-4 sm:p-6 lg:p-8 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 hover:border-orange-500/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating decoration */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 animate-spin" style={{ animationDuration: '6s' }} />
            </div>

            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                <div className="w-5 h-5 sm:w-6 sm:h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white group-hover:text-orange-200 transition-colors duration-500">
                  Google Summer of Code Resources
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  Essential resources and guides for students interested in participating in Google Summer of Code program.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
              {gsocResources.map((resource, idx) => (
                <div key={resource.title} className="group/item border border-gray-600/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-orange-400/60 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 hover:scale-105 bg-gray-800/40 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
                    <div>
                      <h4 className="font-semibold text-white text-sm sm:text-base mb-1 group-hover/item:text-orange-200 transition-colors duration-300">{resource.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 group-hover/item:text-white transition-colors duration-300">{resource.desc}</p>
                    </div>
                  </div>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    <Button size="sm" className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white border-0 hover:scale-105 transition-all duration-300 text-xs sm:text-sm">
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Open Resource
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* DSA Resources Card */}
          <Card className="group relative p-4 sm:p-6 lg:p-8 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 hover:border-green-500/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20 cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating decoration */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 animate-pulse" />
            </div>

            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-green-500/30 group-hover:scale-110 transition-transform duration-500">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white group-hover:text-green-200 transition-colors duration-500">
                  Data Structures & Algorithms Resources
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  Essential DSA resources, interview questions, and coding practice materials to master technical interviews.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 relative z-10">
              {dsaResources.map((resource, idx) => (
                <div key={resource.title} className={`group/item rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                  resource.buttonText === 'Request Access' 
                    ? 'border-2 border-dashed border-amber-500/70 hover:border-amber-400/90 hover:shadow-lg hover:shadow-amber-500/30 bg-gradient-to-br from-amber-900/20 via-gray-800/40 to-orange-900/20' 
                    : 'border border-gray-600/50 hover:border-green-400/60 hover:shadow-lg hover:shadow-green-500/20 bg-gray-800/40'
                }`}>
                  <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                          resource.buttonText === 'Request Access'
                            ? 'text-amber-200 group-hover/item:text-amber-100'
                            : 'text-white group-hover/item:text-green-200'
                        }`}>{resource.title}</h4>
                        {resource.buttonText === 'Request Access' && (
                          <div className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full text-xs border border-amber-500/40">
                            🔒 Restricted
                          </div>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 group-hover/item:text-white transition-colors duration-300">{resource.desc}</p>
                    </div>
                  </div>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    <Button size="sm" className={`w-full ${resource.buttonText === 'Request Access' 
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500' 
                      : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500'
                    } text-white border-0 hover:scale-105 transition-all duration-300 text-xs sm:text-sm`}>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {resource.buttonText}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* Aptitude Test Prep Card */}
          <Card className="group relative p-4 sm:p-6 lg:p-8 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 hover:border-yellow-500/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20 cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Floating decoration */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-bounce" style={{ animationDuration: '2s' }} />
            </div>

            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-yellow-500/30 group-hover:scale-110 transition-transform duration-500">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white group-hover:text-yellow-200 transition-colors duration-500">
                  Aptitude Test Preparation
                </h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                  Essential aptitude test resources and practice questions to excel in quantitative and logical reasoning interviews.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 relative z-10">
              {aptitudeResources.map((resource, idx) => (
                <div key={resource.title} className={`group/item rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                  resource.buttonText === 'Request Access' 
                    ? 'border-2 border-dashed border-amber-500/70 hover:border-amber-400/90 hover:shadow-lg hover:shadow-amber-500/30 bg-gradient-to-br from-amber-900/20 via-gray-800/40 to-orange-900/20' 
                    : 'border border-gray-600/50 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-500/20 bg-gray-800/40'
                }`}>
                  <div className="flex items-start justify-between gap-2 sm:gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                          resource.buttonText === 'Request Access'
                            ? 'text-amber-200 group-hover/item:text-amber-100'
                            : 'text-white group-hover/item:text-yellow-200'
                        }`}>{resource.title}</h4>
                        {resource.buttonText === 'Request Access' && (
                          <div className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full text-xs border border-amber-500/40">
                            🔒 Restricted
                          </div>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 group-hover/item:text-white transition-colors duration-300">{resource.desc}</p>
                    </div>
                  </div>
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    <Button size="sm" className={`w-full ${resource.buttonText === 'Request Access' 
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500' 
                      : 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500'
                    } text-white border-0 hover:scale-105 transition-all duration-300 text-xs sm:text-sm`}>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {resource.buttonText}
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </Card>

          {/* Other Resources Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {resources.map((r, idx) => {
              const Icon = r.icon;
              const isExternal = r.to.startsWith("http") || r.to.endsWith(".pdf");

              return (
                <Card key={r.title} className="group relative p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 hover:border-cyan-500/50 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Floating decoration */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 animate-pulse" />
                  </div>

                  <div className="flex flex-col items-center text-center relative z-10">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-cyan-500/30 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-cyan-200 transition-colors duration-500">{r.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 line-clamp-3 group-hover:text-white transition-colors duration-300 leading-relaxed">{r.desc}</p>
                    {isExternal ? (
                      <a href={r.to} target="_blank" rel="noreferrer" className="w-full">
                        <Button size="sm" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 hover:scale-105 transition-all duration-300 text-xs sm:text-sm">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Open
                        </Button>
                      </a>
                    ) : (
                      <Link to={r.to} className="w-full">
                        <Button size="sm" className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-0 hover:scale-105 transition-all duration-300 text-xs sm:text-sm">
                          <File className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          View
                        </Button>
                      </Link>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Enhanced footer message */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base bg-gray-900/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 animate-pulse" />
            <span className="font-semibold">Empowering Your Tech Journey</span>
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

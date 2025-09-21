import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 lg:py-32 bg-gray-950 overflow-hidden">
      {/* Background decorations - Minimized and centralized */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-900/10 opacity-70" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-72 bg-cyan-500/10 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Content Block - Centered and spacious */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-purple-700/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-purple-200 text-sm font-medium border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            Your Gateway to Tech Opportunities
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8">
            Unlock Your 
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tech Potential
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            Discover life-changing opportunities. We connect you with the best internships, scholarships, and resources to help you build your future with confidence.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link to="/internships">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all"
              >
                Explore Internships <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg text-200 border border-gray-700 hover:bg-blue-200 transition-colors"
            >
              View All Opportunities
            </Button>
          </div>
          
          {/* Social Proof Stats */}
          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-12 mt-16 text-gray-500">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">10K+</div>
              <div className="text-sm">Students Placed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
              <div className="text-sm">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
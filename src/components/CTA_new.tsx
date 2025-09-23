import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Bell, Rocket, Star, Zap, Trophy, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-32 bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Dynamic gradient overlays */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/15 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '4s' }} />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 text-purple-400/30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          <Rocket className="w-8 h-8" />
        </div>
        <div className="absolute top-32 right-32 text-cyan-400/30 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
          <Trophy className="w-10 h-10" />
        </div>
        <div className="absolute bottom-32 left-32 text-pink-400/30 animate-bounce" style={{ animationDuration: '6s', animationDelay: '3s' }}>
          <Target className="w-7 h-7" />
        </div>
        
        {/* Sparkle particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-yellow-400/40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            <Star className="w-2 h-2" />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Enhanced Tagline */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-xl rounded-full px-8 py-3 text-purple-200 text-sm font-semibold border border-purple-400/40 mb-8 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 animate-fade-in-up">
          <Users className="w-5 h-5 text-cyan-300 animate-pulse" />
          Join 15,000+ Elite Engineering Students
          <Bell className="w-5 h-5 text-yellow-300 animate-pulse" />
        </div>
        
        {/* Main Heading with enhanced animations */}
        <h2 className="text-5xl lg:text-8xl font-extrabold text-white leading-tight mb-8 animate-fade-in-up">
          Ready to 
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Transform Your Future?
            </span>
          </span>
        </h2>
        
        {/* Enhanced Sub-heading */}
        <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Don't just dream about your tech career – 
          <span className="text-cyan-400 font-bold"> make it happen</span>. 
          Join thousands of students who've already 
          <span className="text-purple-400 font-bold"> accelerated their success</span> with our platform.
        </p>

        {/* Success Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center group hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">98%</div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Placement Success</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">₹25L+</div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Average Package</div>
          </div>
          <div className="text-center group hover:scale-110 transition-transform duration-300 cursor-pointer">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">750+</div>
            <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Top Companies</div>
          </div>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link 
            to="/internships" 
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white font-bold shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-500 border-0 relative overflow-hidden group rounded-2xl"
            >
              <span className="relative z-10 flex items-center">
                <Rocket className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                Launch My Career
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="text-xl px-12 py-6 bg-transparent border-2 border-gray-600/50 text-gray-300 hover:border-cyan-400/80 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-xl hover:shadow-cyan-400/30 hover:scale-110 transition-all duration-500 backdrop-blur-sm rounded-2xl group"
          >
            <span className="flex items-center">
              <Trophy className="mr-3 w-6 h-6 group-hover:animate-pulse" />
              View Success Stories
              <Zap className="ml-3 w-6 h-6 group-hover:animate-pulse" />
            </span>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-500 text-sm mb-4">Trusted by students from</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <span className="text-gray-400 font-semibold">IIT • NIT • IIIT • DTU • NSUT • IGDTUW</span>
          </div>
        </div>
      </div>
    </section>
  );
};
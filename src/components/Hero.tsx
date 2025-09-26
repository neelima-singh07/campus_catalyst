import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Zap, Target, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-purple-900/20" />
        
        {/* Floating animated orbs - responsive sizes */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Floating particles - fewer on mobile */}
        {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Floating icons around the content - hidden on mobile */}
        <div className="hidden sm:block absolute top-8 sm:top-10 left-8 sm:left-10 text-purple-400/40 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
          <Star className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="hidden sm:block absolute top-16 sm:top-20 right-12 sm:right-16 text-cyan-400/40 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
          <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="hidden sm:block absolute bottom-24 sm:bottom-32 left-16 sm:left-20 text-pink-400/40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
          <Target className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>

        {/* Content Block - Enhanced and animated */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Enhanced Tagline with glow effect */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-cyan-900/30 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 text-purple-200 text-xs sm:text-sm font-medium border border-purple-400/50 mb-6 sm:mb-8 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 animate-pulse" />
            Your Gateway to Tech Excellence
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur opacity-75"></div>
          </div>
          
          {/* Enhanced Main Heading with text animations - responsive sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight tracking-tight mb-6 sm:mb-8 hover:scale-105 transition-transform duration-300">
            <span className="inline-block hover:animate-pulse">Unlock Your</span>
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient hover:animate-none">
              Tech Future
            </span>
          </h1>
          
          {/* Enhanced Description - responsive text */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 hover:text-gray-200 transition-colors duration-300 px-4 sm:px-0">
            Discover life-changing opportunities that shape tomorrow's tech leaders. 
            <span className="text-cyan-400 font-semibold"> Connect with premium internships</span>, 
            <span className="text-purple-400 font-semibold"> exclusive scholarships</span>, and 
            <span className="text-pink-400 font-semibold"> cutting-edge resources</span> to accelerate your career journey.
          </p>
          
          {/* Enhanced Call-to-Action Buttons - responsive layout */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 mb-12 sm:mb-16 px-4 sm:px-0">
            <Link to="/internships" className="group w-full sm:w-auto">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white font-semibold shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 border-0 relative overflow-hidden group py-3 sm:py-4 px-6 sm:px-8"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Explore Programs <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
          
          {/* Inspirational Quote - responsive text and spacing */}
          <div className="text-center mt-12 sm:mt-16 max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-0">
            <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light italic leading-relaxed mb-4 sm:mb-6">
              "The future belongs to those who believe in the beauty of their dreams."
            </blockquote>
            <cite className="text-base sm:text-lg text-purple-400 font-semibold">
              — Eleanor Roosevelt
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};
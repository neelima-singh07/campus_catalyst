import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/80 to-purple-900/20" />
        
        {/* Floating animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
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
        {/* Floating icons around the content */}
        <div className="absolute top-10 left-10 text-purple-400/40 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute top-20 right-16 text-cyan-400/40 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
          <Zap className="w-8 h-8" />
        </div>
        <div className="absolute bottom-32 left-20 text-pink-400/40 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
          <Target className="w-7 h-7" />
        </div>

        {/* Content Block - Enhanced and animated */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Enhanced Tagline with glow effect */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/50 to-cyan-900/30 backdrop-blur-md rounded-full px-6 py-2 text-purple-200 text-sm font-medium border border-purple-400/50 mb-8 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            Your Gateway to Tech Excellence
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur opacity-75"></div>
          </div>
          
          {/* Enhanced Main Heading with text animations */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white leading-tight tracking-tight mb-8 hover:scale-105 transition-transform duration-300">
            <span className="inline-block hover:animate-pulse">Unlock Your</span>
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient hover:animate-none">
              Tech Future
            </span>
          </h1>
          
          {/* Enhanced Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 hover:text-gray-200 transition-colors duration-300">
            Discover life-changing opportunities that shape tomorrow's tech leaders. 
            <span className="text-cyan-400 font-semibold"> Connect with premium internships</span>, 
            <span className="text-purple-400 font-semibold"> exclusive scholarships</span>, and 
            <span className="text-pink-400 font-semibold"> cutting-edge resources</span> to accelerate your career journey.
          </p>
          
          {/* Enhanced Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 mb-16">
            <Link to="/internships" className="group">
              <Button 
                variant="default" 
                size="lg" 
                className="w-full sm:w-auto text-lg bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-white font-semibold shadow-2xl shadow-purple-500/50 hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 border-0 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Explore Programs <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </Link>
          </div>
          
          {/* Inspirational Quote */}
          <div className="text-center mt-16 max-w-4xl mx-auto">
            <blockquote className="text-2xl lg:text-3xl text-gray-300 font-light italic leading-relaxed mb-6">
              "The future belongs to those who believe in the beauty of their dreams."
            </blockquote>
            <cite className="text-lg text-purple-400 font-semibold">
              — Eleanor Roosevelt
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};
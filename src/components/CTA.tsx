import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const CTA = () => {
  return (
    <section className="py-10 bg-[#0a001a] relative overflow-hidden text-center">
      {/* Background decorations matching the professional theme */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Top Tagline */}
        <div className="inline-flex items-center gap-2 bg-purple-700/20 backdrop-blur-sm rounded-full px-4 py-1.5 text-purple-200 text-sm font-medium border border-purple-500/30 mb-2 animate-fade-in-up">
          <Bell className="w-4 h-4" />
          Join 10,000+ Engineering Students
        </div>
        
        {/* Main Heading */}
        <h2 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up">
        Ready to Launch Your  <br />
        <span className="inline text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
        Tech Career?
        </span>
        </h2>
        
        {/* Sub-heading */}
        <p className="text-lg text-gray-400 mb-2 max-w-3xl mx-auto animate-fade-in-up">
          Don't miss out on exclusive opportunities. Join our platform today and take the first step 
          towards your dream tech career.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Link to="/internships">
            <Button size="lg" className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105">
              Get Started <ArrowRight className="ml-2 mr-1 w-5 h-5" />
            </Button>
          </Link>
          
          <Button variant="outline" size="lg" className="bg-transparent border border-gray-700 text-gray-400 hover:bg-white transition-all duration-300 transform hover:scale-105">
            Browse Internships
          </Button>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Bell } from "lucide-react";
import { useState } from "react";

export const CTA = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <Card className="relative p-12 lg:p-16 gradient-hero overflow-hidden shadow-glow animate-fade-up">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white/90 text-sm">
              <Bell className="w-4 h-4" />
              Join 10,000+ Engineering Students
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ready to Launch Your
              <span className="block gradient-hero bg-clip-text text-transparent bg-white">
                Tech Career?
              </span>
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Don't miss out on exclusive opportunities. Join our platform today and take the first step 
              towards your dream tech career.
            </p>
            
            {/* Email signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your college email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
                />
              </div>
              <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <p className="text-white/60 text-sm">
              Free to join • No spam • Unsubscribe anytime
            </p>
            
            {/* Additional CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Browse Opportunities
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
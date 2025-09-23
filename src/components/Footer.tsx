import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Heart, 
  Code, 
  ExternalLink,
  Send,
  MapPin,
  Phone
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-b from-gray-950 to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Campus Career Bloom
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students with opportunities to grow, learn, and succeed in the tech industry. 
              Your gateway to a brighter future starts here.
            </p>
            <div className="flex items-center gap-2 text-purple-400">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="text-sm">Built with passion for students</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/internships" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center">
                  Programs
                </a>
              </li>
              <li>
                <a href="/roadmaps" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  Roadmaps
                </a>
              </li>
              <li>
                <a href="/resources" className="text-gray-400 hover:text-pink-400 transition-colors duration-300">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Contact us via email</p>
                  <a 
                    href="mailto:singhneelima8262@gmail.com" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm font-medium"
                  >
                    singhneelima8262@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <MapPin className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-gray-500 mb-1">Based in</p>
                  <span className="text-purple-400 text-sm font-medium">New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Code className="w-4 h-4" />
              <span>© 2025 Campus Career Bloom. Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>by passionate developers</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/neelima-singh07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/neelima-singh-481294318/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
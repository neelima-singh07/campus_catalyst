import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Home, Briefcase, Map, ChevronDown } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  const isRoadmapPath = location.pathname.startsWith("/roadmaps");

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
      <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 shadow-2xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 hover:scale-[1.02]">
        <div className="flex items-center gap-8">
          <Link to="/" className="group">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"} 
              size="sm"
              className={`rounded-xl transition-all duration-300 hover:scale-105 ${
                location.pathname === "/" 
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30" 
                  : "hover:bg-gray-100/80 hover:shadow-md"
              }`}
            >
              <Home className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Home
            </Button>
          </Link>
          <Link to="/internships" className="group">
            <Button 
              variant={location.pathname === "/internships" ? "default" : "ghost"} 
              size="sm"
              className={`rounded-xl transition-all duration-300 hover:scale-105 ${
                location.pathname === "/internships" 
                  ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/30" 
                  : "hover:bg-gray-100/80 hover:shadow-md"
              }`}
            >
              <Briefcase className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Programs
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant={isRoadmapPath ? "default" : "ghost"} 
                size="sm"
                className={`rounded-xl transition-all duration-300 hover:scale-105 group ${
                  isRoadmapPath 
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/30" 
                    : "hover:bg-gray-100/80 hover:shadow-md"
                }`}
              >
                <Map className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Roadmaps
                <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform duration-300" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl shadow-black/10">
              <DropdownMenuItem asChild>
                <Link to="/roadmaps" className="w-full hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 rounded-lg transition-all duration-200">
                  All Roadmaps
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/frontend" className="w-full hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 rounded-lg transition-all duration-200">
                  Frontend Development
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/backend" className="w-full hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 rounded-lg transition-all duration-200">
                  Backend Development
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/aiml" className="w-full hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 rounded-lg transition-all duration-200">
                  AI/ML
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/arvr" className="w-full hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 rounded-lg transition-all duration-200">
                  AR/VR
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/dsa" className="w-full hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 rounded-lg transition-all duration-200">
                  Data Structures & Algorithms
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/blockchain" className="w-full hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 rounded-lg transition-all duration-200">
                  Blockchain
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/resources" className="group">
            <Button 
              variant={location.pathname === "/resources" ? "default" : "ghost"} 
              size="sm"
              className={`rounded-xl transition-all duration-300 hover:scale-105 ${
                location.pathname === "/resources" 
                  ? "bg-gradient-to-r from-green-600 to-cyan-600 text-white shadow-lg shadow-green-500/30" 
                  : "hover:bg-gray-100/80 hover:shadow-md"
              }`}
            >
              <BookOpen className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Resources
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
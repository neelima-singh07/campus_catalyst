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

  const activeGradient = "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30";
  const inactiveStyle = "hover:bg-gray-100/80 hover:shadow-md";

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 animate-fade-in-down">
      <div className="flex justify-center">
        <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 shadow-2xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 hover:scale-[1.02]">
          <div className="flex items-center gap-6 whitespace-nowrap">
            <Link to="/" className="group flex-shrink-0">
              <Button 
                variant={location.pathname === "/" ? "default" : "ghost"} 
                size="sm"
                className={`rounded-xl transition-all duration-300 hover:scale-105 ${
                  location.pathname === "/" 
                    ? activeGradient
                    : inactiveStyle
                }`}
              >
                <Home className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Home
              </Button>
            </Link>
            <Link to="/internships" className="group flex-shrink-0">
              <Button 
                variant={location.pathname === "/internships" ? "default" : "ghost"} 
                size="sm"
                className={`rounded-xl transition-all duration-300 hover:scale-105 ${
                  location.pathname === "/internships" 
                    ? activeGradient
                    : inactiveStyle
                }`}
              >
                <Briefcase className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Programs
              </Button>
            </Link>
            <div className="relative flex-shrink-0">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant={isRoadmapPath ? "default" : "ghost"} 
                    size="sm"
                    className={`rounded-xl transition-all duration-300 hover:scale-105 group ${
                      isRoadmapPath 
                        ? activeGradient
                        : inactiveStyle
                    }`}
                  >
                    <Map className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                    Roadmaps
                    <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  </Button>
                </DropdownMenuTrigger>
              <DropdownMenuContent 
                className="w-56 mt-2 bg-white/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl shadow-black/10"
                align="center"
                sideOffset={8}
              >
                <DropdownMenuItem asChild>
                  <Link to="/roadmaps" className="w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-cyan-100 hover:text-purple-700 transition-all duration-200 font-medium">
                    All Roadmaps
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/roadmaps/frontend" className="w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-cyan-100 hover:text-purple-700 transition-all duration-200 font-medium">
                    Frontend Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/roadmaps/backend" className="w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-cyan-100 hover:text-purple-700 transition-all duration-200 font-medium">
                    Backend Development
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/roadmaps/aiml" className="w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-cyan-100 hover:text-purple-700 transition-all duration-200 font-medium">
                    AI/ML
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/roadmaps/arvr" className="w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-cyan-100 hover:text-purple-700 transition-all duration-200 font-medium">
                    AR/VR
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/roadmaps/dsa" className="w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-cyan-100 hover:text-purple-700 transition-all duration-200 font-medium">
                    Data Structures & Algorithms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/roadmaps/blockchain" className="w-full px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-purple-100 hover:to-cyan-100 hover:text-purple-700 transition-all duration-200 font-medium">
                    Blockchain
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link to="/resources" className="group flex-shrink-0">
            <Button 
              variant={location.pathname === "/resources" ? "default" : "ghost"} 
              size="sm"
              className={`rounded-xl transition-all duration-300 hover:scale-105 ${
                location.pathname === "/resources" 
                  ? activeGradient
                  : inactiveStyle
              }`}
            >
              <BookOpen className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Resources
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
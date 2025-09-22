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
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button 
              variant={location.pathname === "/" ? "default" : "ghost"} 
              size="sm"
              className="rounded-full"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
          </Link>
          <Link to="/internships">
            <Button 
              variant={location.pathname === "/internships" ? "default" : "ghost"} 
              size="sm"
              className="rounded-full"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Programs
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant={isRoadmapPath ? "default" : "ghost"} 
                size="sm"
                className="rounded-full"
              >
                <Map className="w-4 h-4 mr-2" />
                Roadmaps
                <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 mt-2">
              <DropdownMenuItem asChild>
                <Link to="/roadmaps" className="w-full">
                  All Roadmaps
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/frontend" className="w-full">
                  Frontend Development
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/backend" className="w-full">
                  Backend Development
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/aiml" className="w-full">
                  AI/ML
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/arvr" className="w-full">
                  AR/VR
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/dsa" className="w-full">
                  Data Structures & Algorithms
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/roadmaps/blockchain" className="w-full">
                  Blockchain
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/resources">
            <Button 
              variant={location.pathname === "/resources" ? "default" : "ghost"} 
              size="sm"
              className="rounded-full"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Resources
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
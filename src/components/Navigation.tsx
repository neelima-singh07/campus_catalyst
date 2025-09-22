import { Button } from "@/components/ui/button";
import { Home, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();

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
        </div>
      </div>
    </nav>
  );
};
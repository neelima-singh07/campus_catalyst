import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Home, Briefcase, Map, ChevronDown, Menu, X } from "lucide-react";
import { BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navigation = () => {
  const location = useLocation();
  const isRoadmapPath = location.pathname.startsWith("/roadmaps");
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const activeGradient = "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/30";
  const inactiveStyle = "hover:bg-gray-100/80 hover:shadow-md";

  const MobileNavLink = ({ to, children, icon: Icon, onClick }: { to: string; children: React.ReactNode; icon: any; onClick?: () => void }) => (
    <Link to={to} onClick={onClick} className="block">
      <Button 
        variant={location.pathname === to ? "default" : "ghost"} 
        size="lg"
        className={`w-full justify-start text-left rounded-xl transition-all duration-300 ${
          location.pathname === to 
            ? activeGradient
            : inactiveStyle
        }`}
      >
        <Icon className="w-5 h-5 mr-3" />
        {children}
      </Button>
    </Link>
  );

  const DesktopNavLink = ({ to, children, icon: Icon }: { to: string; children: React.ReactNode; icon: any }) => (
    <Link to={to} className="group flex-shrink-0">
      <Button 
        variant={location.pathname === to ? "default" : "ghost"} 
        size="sm"
        className={`rounded-xl transition-all duration-300 hover:scale-105 ${
          location.pathname === to 
            ? activeGradient
            : inactiveStyle
        }`}
      >
        <Icon className="w-4 h-4 mr-2 group-hover:animate-pulse" />
        {children}
      </Button>
    </Link>
  );

  return (
    <nav className="fixed top-4 sm:top-6 left-0 right-0 z-50 animate-fade-in-down">
      <div className="flex justify-center px-4">
        {/* Desktop Navigation */}
        {!isMobile ? (
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl px-6 lg:px-8 py-4 shadow-2xl shadow-black/10 hover:shadow-black/20 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-4 lg:gap-6 whitespace-nowrap">
              <DesktopNavLink to="/" icon={Home}>
                Home
              </DesktopNavLink>
              <DesktopNavLink to="/internships" icon={Briefcase}>
                Programs
              </DesktopNavLink>
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
              <DesktopNavLink to="/resources" icon={BookOpen}>
                Resources
              </DesktopNavLink>
            </div>
          </div>
        ) : (
          /* Mobile Navigation */
          <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-2xl shadow-black/10 w-full max-w-sm">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CC</span>
                </div>
                <span className="font-bold text-gray-900">CampusCatalyst</span>
              </Link>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72 bg-white/95 backdrop-blur-xl border-l border-white/20">
                  <div className="flex flex-col gap-4 pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                      <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                    <MobileNavLink to="/" icon={Home} onClick={() => setIsOpen(false)}>
                      Home
                    </MobileNavLink>
                    <MobileNavLink to="/internships" icon={Briefcase} onClick={() => setIsOpen(false)}>
                      Programs
                    </MobileNavLink>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600">
                        <Map className="w-4 h-4" />
                        Roadmaps
                      </div>
                      <div className="pl-4 space-y-1">
                        <Link to="/roadmaps" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                          All Roadmaps
                        </Link>
                        <Link to="/roadmaps/frontend" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                          Frontend Development
                        </Link>
                        <Link to="/roadmaps/backend" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                          Backend Development
                        </Link>
                        <Link to="/roadmaps/aiml" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                          AI/ML
                        </Link>
                        <Link to="/roadmaps/arvr" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                          AR/VR
                        </Link>
                        <Link to="/roadmaps/dsa" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                          Data Structures & Algorithms
                        </Link>
                        <Link to="/roadmaps/blockchain" onClick={() => setIsOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                          Blockchain
                        </Link>
                      </div>
                    </div>
                    <MobileNavLink to="/resources" icon={BookOpen} onClick={() => setIsOpen(false)}>
                      Resources
                    </MobileNavLink>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
import { useState, useMemo } from "react";
import { InternshipCard } from "@/components/InternshipCard";
import { InternshipFilters } from "@/components/InternshipFilters";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { internshipsData, availableStudentYears, studentYearLabels } from "@/data/internships";
import { 
  Briefcase, 
  Clock, 
  ArrowLeft,
  Building2,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";

interface FilterState {
  studentYear: number | null;
  category: string;
  search: string;
  location: string;
  type: string;
  isRemote: boolean | null;
  difficulty: string;
}

const Internships = () => {
  const [filters, setFilters] = useState<FilterState>({
    studentYear: null,
    category: 'all',
    search: '',
    location: '',
    type: 'all',
    isRemote: null,
    difficulty: 'all'
  });

  const filteredInternships = useMemo(() => {
    return internshipsData.filter((internship) => {
      const matchesYear = filters.studentYear === null || internship.studentYear === filters.studentYear;
      const matchesCategory = filters.category === 'all' || internship.category === filters.category;
      const matchesSearch = filters.search === '' || 
        internship.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        internship.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        internship.description.toLowerCase().includes(filters.search.toLowerCase());
      const matchesType = filters.type === 'all' || internship.type === filters.type;
      const matchesRemote = filters.isRemote === null || internship.isRemote === filters.isRemote;
      const matchesDifficulty = filters.difficulty === 'all' || internship.difficulty === filters.difficulty;

      return matchesYear && matchesCategory && matchesSearch && matchesType && matchesRemote && matchesDifficulty;
    });
  }, [filters]);

  const stats = useMemo(() => {
    const total = internshipsData.length;
    const byYear = availableStudentYears.reduce((acc, year) => {
      acc[year] = internshipsData.filter(i => i.studentYear === year).length;
      return acc;
    }, {} as Record<number, number>);

    return { total, byYear };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 6}s`
              }}
            >
              <div className="w-2 h-2 bg-white/30 rounded-full backdrop-blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      <Navigation />
      
      {/* Enhanced Header with Glassmorphism */}
      <div className="relative bg-gradient-to-r from-white/80 via-white/60 to-white/80 backdrop-blur-lg border-b border-white/20 shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-indigo-600/10"></div>
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex items-center gap-4 mb-8 animate-slideInUp">
            <Link to="/">
              <Button variant="outline" size="sm" className="backdrop-blur-sm bg-white/80 border-white/30 hover:bg-white/90 transition-all duration-300 shadow-lg">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6 animate-fadeInScale">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full backdrop-blur-sm shadow-2xl">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent animate-gradient">
                Tech Programs & Opportunities
              </h1>
            </div>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed animate-slideInUp animation-delay-200">
              Discover amazing program opportunities at top tech companies. 
              <br className="hidden md:block" />
              Filter by year, category, and preferences to find your perfect match.
            </p>

            {/* Enhanced Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto animate-slideInUp animation-delay-400">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-2xl backdrop-blur-sm shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold">Total</span>
                  </div>
                  <div className="text-4xl font-bold mb-1 animate-countUp">{stats.total}</div>
                  <div className="text-sm opacity-90 font-medium">Opportunities</div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl backdrop-blur-sm shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold">Years</span>
                  </div>
                  <div className="text-4xl font-bold mb-1 animate-countUp">{availableStudentYears.length}</div>
                  <div className="text-sm opacity-90 font-medium">Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Enhanced Year Overview */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              Browse by Student Year
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find opportunities tailored to your academic level and experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableStudentYears.map((year, index) => (
              <div 
                key={year}
                className="group relative cursor-pointer animate-slideInUp"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setFilters(prev => ({ ...prev, studentYear: year }))}
              >
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-white/70 rounded-2xl backdrop-blur-lg border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
                  {/* Year Number Background */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <span className="text-6xl font-black text-purple-600">{year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getYearGradient(year)} shadow-lg`}>
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-900 transition-colors duration-300">
                            {getYearLabel(year)}
                          </h3>
                          <div className="text-sm text-gray-500">Academic Level</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge 
                          variant="outline" 
                          className={`bg-gradient-to-r ${getYearGradient(year)} text-white border-none shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                        >
                          {stats.byYear[year]} positions
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {getYearDescription(year)}
                    </p>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-xl shadow-md hover:shadow-lg transform group-hover:scale-105 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFilters(prev => ({ ...prev, studentYear: year }));
                      }}
                    >
                      Explore {getYearLabel(year)} Opportunities
                    </Button>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Filters */}
        <div className="mb-10">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl p-6">
            <InternshipFilters 
              filters={filters}
              onFiltersChange={setFilters}
              resultsCount={filteredInternships.length}
            />
          </div>
        </div>

        {/* Enhanced Results */}
        <div className="space-y-8">{filteredInternships.length === 0 ? (
            <div className="text-center py-16">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-2xl opacity-20 w-32 h-32 mx-auto"></div>
                <div className="relative p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full w-32 h-32 mx-auto flex items-center justify-center backdrop-blur-sm">
                  <Briefcase className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No programs found</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto leading-relaxed">
                We couldn't find any programs matching your criteria. Try adjusting your filters to discover more opportunities.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none hover:from-purple-700 hover:to-blue-700 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setFilters({
                  studentYear: null,
                  category: 'all',
                  search: '',
                  location: '',
                  type: 'all',
                  isRemote: null,
                  difficulty: 'all'
                })}
              >
                Clear all filters
              </Button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                  {filters.studentYear ? `${getYearLabel(filters.studentYear)} ` : ''}Programs
                  <span className="text-xl font-normal text-gray-600 ml-3">
                    ({filteredInternships.length} {filteredInternships.length === 1 ? 'result' : 'results'})
                  </span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredInternships.map((internship, index) => (
                  <div 
                    key={internship.id}
                    className="animate-slideInUp"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <InternshipCard internship={internship} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Helper functions for year cards
const getYearGradient = (year: number) => {
  switch (year) {
    case 1:
      return 'from-emerald-500 to-green-600';
    case 2:
      return 'from-blue-500 to-cyan-600';
    case 3:
      return 'from-purple-500 to-indigo-600';
    case 4:
      return 'from-orange-500 to-red-500';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const getYearLabel = (year: number) => {
  const labels: Record<number, string> = {
    1: "1st Year",
    2: "2nd Year", 
    3: "3rd Year",
    4: "4th Year"
  };
  return labels[year] || `Year ${year}`;
};

const getYearDescription = (year: number) => {
  switch (year) {
    case 1:
      return "Perfect for beginners! Start your tech journey with foundational programs and mentorship opportunities.";
    case 2:
      return "Build your skills with intermediate roles that focus on practical experience and technical growth.";
    case 3:
      return "Advanced internships and specialized programs to deepen your expertise in chosen fields.";
    case 4:
      return "Senior-level positions with leadership opportunities and pathways to full-time careers.";
    default:
      return "Explore opportunities tailored to your academic level.";
  }
};

export default Internships;
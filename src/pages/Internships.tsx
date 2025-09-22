import { useState, useMemo } from "react";
import { InternshipCard } from "@/components/InternshipCard";
import { InternshipFilters } from "@/components/InternshipFilters";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { internshipsData, availableStudentYears, studentYearLabels } from "@/data/internships";
import { 
  Briefcase, 
  TrendingUp, 
  Clock, 
  Users,
  ArrowLeft,
  Calendar,
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
    const paidCount = internshipsData.filter(i => i.type === 'paid').length;
    const remoteCount = internshipsData.filter(i => i.isRemote).length;

    return { total, byYear, paidCount, remoteCount };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-full">
                <Briefcase className="w-8 h-8 text-purple-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Tech Programs & Opportunities
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Discover amazing program opportunities at top tech companies. 
              Filter by year, category, and preferences to find your perfect match.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Building2 className="w-5 h-5" />
                  <span className="text-sm font-medium">Total</span>
                </div>
                <div className="text-2xl font-bold">{stats.total}</div>
                <div className="text-xs opacity-90">Opportunities</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-medium">Paid</span>
                </div>
                <div className="text-2xl font-bold">{stats.paidCount}</div>
                <div className="text-xs opacity-90">Positions</div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">Remote</span>
                </div>
                <div className="text-2xl font-bold">{stats.remoteCount}</div>
                <div className="text-xs opacity-90">Available</div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <span className="text-sm font-medium">Years</span>
                </div>
                <div className="text-2xl font-bold">{availableStudentYears.length}</div>
                <div className="text-xs opacity-90">Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Year Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-purple-600" />
            Browse by Student Year
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {availableStudentYears.map((year) => (
              <div 
                key={year}
                className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setFilters(prev => ({ ...prev, studentYear: year }))}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{studentYearLabels[year]}</h3>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700">
                    {stats.byYear[year]} positions
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {year === 1 ? "Beginner-friendly opportunities to start your tech journey" :
                   year === 2 ? "Intermediate roles to build your foundational skills" :
                   year === 3 ? "Advanced internships for specialized experience" :
                   "Senior-level positions with leadership opportunities"}
                </p>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full hover:bg-purple-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFilters(prev => ({ ...prev, studentYear: year }));
                  }}
                >
                  View {studentYearLabels[year]} Opportunities
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <InternshipFilters 
            filters={filters}
            onFiltersChange={setFilters}
            resultsCount={filteredInternships.length}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredInternships.length === 0 ? (
            <div className="text-center py-12">
              <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No internships found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters to see more opportunities.
              </p>
              <Button 
                variant="outline" 
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
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filters.studentYear ? `${studentYearLabels[filters.studentYear]} ` : ''}Programs
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    ({filteredInternships.length} {filteredInternships.length === 1 ? 'result' : 'results'})
                  </span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredInternships.map((internship) => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Internships;
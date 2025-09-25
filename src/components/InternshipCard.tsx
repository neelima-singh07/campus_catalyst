import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Internship } from "@/data/internships";
import { Building2, Clock } from "lucide-react";

interface InternshipCardProps {
  internship: Internship;
}

export const InternshipCard = ({ internship }: InternshipCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'software':
        return 'bg-purple-100 text-purple-800';
      case 'hackathon':
        return 'bg-red-100 text-red-800';
      case 'scholarship':
        return 'bg-green-100 text-green-800';
      case 'data':
        return 'bg-indigo-100 text-indigo-800';
      case 'design':
        return 'bg-pink-100 text-pink-800';
      case 'marketing':
        return 'bg-orange-100 text-orange-800';
      case 'research':
        return 'bg-emerald-100 text-emerald-800';
      case 'finance':
        return 'bg-yellow-100 text-yellow-800';
      case 'consulting':
        return 'bg-cyan-100 text-cyan-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Extract eligible years from requirements
  const getEligibleYears = () => {
    const requirements = internship.requirements.join(' ').toLowerCase();
    
    // Check for all years pattern
    if (requirements.includes('1st-4th year') || requirements.includes('students in 1st-4th year')) {
      return ['1st Year', '2nd Year', '3rd Year', '4th Year'];
    }
    
    // Check for multiple year patterns
    if (requirements.includes('1st and 2nd year') || requirements.includes('female students in 1st and 2nd year')) {
      return ['1st Year', '2nd Year'];
    }
    if (requirements.includes('2nd and 3rd year') || requirements.includes('students in 2nd and 3rd year')) {
      return ['2nd Year', '3rd Year'];
    }
    if (requirements.includes('2nd year and 3rd year')) {
      return ['2nd Year', '3rd Year'];
    }
    if (requirements.includes('3rd and 4th year') || requirements.includes('students in 3rd and 4th year')) {
      return ['3rd Year', '4th Year'];
    }
    
    // Check for individual year patterns
    if (requirements.includes('1st year')) {
      return ['1st Year'];
    }
    if (requirements.includes('2nd year')) {
      return ['2nd Year'];
    }
    if (requirements.includes('3rd year')) {
      return ['3rd Year'];
    }
    if (requirements.includes('4th year')) {
      return ['4th Year'];
    }
    
    // Fallback to the original studentYear
    const labels: Record<number, string> = {
      1: "1st Year",
      2: "2nd Year", 
      3: "3rd Year",
      4: "4th Year"
    };
    return [labels[internship.studentYear] || `Year ${internship.studentYear}`];
  };

  return (
    <div className="group relative h-full">
      {/* Glassmorphism Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/60 rounded-2xl backdrop-blur-lg border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
      
      <Card className="relative h-full bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden group">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Color Strip */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryGradient(internship.category)} group-hover:h-2 transition-all duration-300`}></div>
        
        <CardHeader className="pb-3 relative z-10">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg group-hover:from-purple-100 group-hover:to-blue-100 transition-all duration-300">
                  <Building2 className="w-4 h-4 text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                </div>
                <div>
                  <span className="font-bold text-gray-900 text-base group-hover:text-purple-900 transition-colors duration-300">
                    {internship.company}
                  </span>
                  {internship.isRemote && (
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-600 border-green-200 px-1 py-0">
                        Remote
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
              <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-purple-900 line-clamp-2 transition-colors duration-300">
                {internship.title}
              </CardTitle>
            </div>
            <div className="flex flex-col gap-1">
              <Badge className={`${getCategoryColor(internship.category)} shadow-sm text-xs`}>
                {internship.category.charAt(0).toUpperCase() + internship.category.slice(1)}
              </Badge>
            </div>
          </div>

          {/* Compact Description */}
          <p className="text-xs text-gray-600 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
            {internship.description}
          </p>
        </CardHeader>

        <CardContent className="pt-0 relative z-10">
          <div className="space-y-3">
            {/* Compact Key Details */}
            <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md group-hover:bg-green-50 transition-colors duration-300">
              <Clock className="w-3 h-3 text-gray-500 group-hover:text-green-500 transition-colors duration-300" />
              <div>
                <div className="text-xs text-gray-500">Period</div>
                <div className="text-xs font-medium text-gray-900">
                  {internship.period ? formatPeriod(internship.period) : 'TBD'}
                </div>
              </div>
            </div>

            {/* Compact Eligible Years */}
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Eligible Years</div>
              <div className="flex flex-wrap gap-1">
                {getEligibleYears().map((year) => (
                  <Badge key={year} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors duration-200 px-2 py-0">
                    {year}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        {/* Floating Animation Elements */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        </div>
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping animation-delay-200"></div>
        </div>
      </Card>
    </div>
  );
};

// Helper function to format period display
const formatPeriod = (period: string) => {
  if (!period) return 'TBD';
  
  // Common period mappings
  const periodMap: Record<string, string> = {
    'feb': 'Feb',
    'march': 'Mar',
    'april': 'Apr',
    'may': 'May',
    'june': 'Jun',
    'july': 'Jul',
    'aug': 'Aug',
    'sept': 'Sep',
    'oct': 'Oct',
    'nov': 'Nov',
    'dec': 'Dec',
    'jan': 'Jan',
    'july-aug': 'Jul-Aug',
    'sept-oct': 'Sep-Oct',
    'oct-dec': 'Oct-Dec',
    'nov-dec': 'Nov-Dec',
    'dec-feb': 'Dec-Feb',
    'jan-april': 'Jan-Apr',
    'april-may': 'Apr-May',
    'aug-sept': 'Aug-Sep',
    'summer': 'Summer',
    'winter': 'Winter',
    'all year': 'Year-round',
    'varies': 'Varies',
    'twice a year': '2x/Year'
  };
  
  return periodMap[period.toLowerCase()] || period.charAt(0).toUpperCase() + period.slice(1);
};

// Helper function to get category gradient
const getCategoryGradient = (category: string) => {
  switch (category) {
    case 'software':
      return 'from-purple-500 to-purple-600';
    case 'data':
      return 'from-indigo-500 to-indigo-600';
    case 'design':
      return 'from-pink-500 to-pink-600';
    case 'marketing':
      return 'from-orange-500 to-orange-600';
    case 'research':
      return 'from-emerald-500 to-emerald-600';
    case 'finance':
      return 'from-yellow-500 to-yellow-600';
    case 'consulting':
      return 'from-cyan-500 to-cyan-600';
    case 'hackathon':
      return 'from-red-500 to-red-600';
    case 'scholarship':
      return 'from-green-500 to-green-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};
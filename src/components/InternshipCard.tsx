import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Internship } from "@/data/internships";
import { Building2 } from "lucide-react";

interface InternshipCardProps {
  internship: Internship;
}

export const InternshipCard = ({ internship }: InternshipCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'software':
        return 'bg-purple-100 text-purple-800';
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
    const requirements = internship.requirements.join(' ');
    
    if (requirements.includes('1st-4th year')) {
      return ['1st Year', '2nd Year', '3rd Year', '4th Year'];
    }
    if (requirements.includes('1st and 2nd year')) {
      return ['1st Year', '2nd Year'];
    }
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

  // Extract tentative period from duration or deadline
  const getTentativePeriod = () => {
    const deadline = new Date(internship.deadline);
    const month = deadline.toLocaleDateString('en-US', { month: 'short' });
    return `${month} - ${internship.duration}`;
  };

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-4 h-4 text-gray-500 flex-shrink-0" />
              <span className="font-semibold text-gray-900 truncate">{internship.company}</span>
            </div>
            <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
              {internship.title}
            </CardTitle>
          </div>
          <Badge className={getCategoryColor(internship.category)}>
            {internship.category.charAt(0).toUpperCase() + internship.category.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          {/* Eligible Years Tags */}
          <div>
            <div className="text-xs font-medium text-gray-500 mb-1">Eligible Years</div>
            <div className="flex flex-wrap gap-1">
              {getEligibleYears().map((year) => (
                <Badge key={year} variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                  {year}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tentative Period */}
          <div>
            <div className="text-xs font-medium text-gray-500 mb-1">Period</div>
            <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
              {getTentativePeriod()}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
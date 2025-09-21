import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Internship } from "@/data/internships";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar, 
  ExternalLink, 
  Building2,
  Wifi,
  WifiOff,
  GraduationCap,
  Star
} from "lucide-react";

interface InternshipCardProps {
  internship: Internship;
}

export const InternshipCard = ({ internship }: InternshipCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'paid':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'unpaid':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      case 'stipend':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
    }
  };

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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStudentYearLabel = (year: number) => {
    const labels: Record<number, string> = {
      1: "1st Year",
      2: "2nd Year", 
      3: "3rd Year",
      4: "4th Year"
    };
    return labels[year] || `Year ${year}`;
  };

  const formatDeadline = (deadline: string) => {
    return new Date(deadline).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isDeadlineSoon = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const daysUntilDeadline = Math.ceil((deadlineDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return daysUntilDeadline <= 14 && daysUntilDeadline > 0;
  };

  const isDeadlinePassed = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    return deadlineDate < today;
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">
              {internship.title}
            </CardTitle>
            <CardDescription className="flex items-center gap-2 mt-2 text-lg font-medium text-gray-700">
              <Building2 className="w-4 h-4" />
              {internship.company}
            </CardDescription>
          </div>
          <Badge className={getCategoryColor(internship.category)}>
            {internship.category.charAt(0).toUpperCase() + internship.category.slice(1)}
          </Badge>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3">
          <Badge variant="outline" className={getTypeColor(internship.type)}>
            {internship.type.charAt(0).toUpperCase() + internship.type.slice(1)}
          </Badge>
          {internship.stipendAmount && (
            <Badge variant="outline" className="bg-green-50 text-green-700">
              <DollarSign className="w-3 h-3 mr-1" />
              {internship.stipendAmount}
            </Badge>
          )}
          <Badge variant="outline" className="bg-blue-50 text-blue-700">
            <GraduationCap className="w-3 h-3 mr-1" />
            {getStudentYearLabel(internship.studentYear)}
          </Badge>
          <Badge variant="outline" className={getDifficultyColor(internship.difficulty)}>
            <Star className="w-3 h-3 mr-1" />
            {internship.difficulty.charAt(0).toUpperCase() + internship.difficulty.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="text-gray-600 text-sm line-clamp-3">{internship.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{internship.location}</span>
            {internship.isRemote ? (
              <Wifi className="w-4 h-4 text-green-500" title="Remote friendly" />
            ) : (
              <WifiOff className="w-4 h-4 text-gray-400" title="On-site only" />
            )}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{internship.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 md:col-span-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className={`${isDeadlineSoon(internship.deadline) ? 'text-orange-600 font-medium' : ''} ${isDeadlinePassed(internship.deadline) ? 'text-red-600 font-medium' : ''}`}>
              Deadline: {formatDeadline(internship.deadline)}
              {isDeadlineSoon(internship.deadline) && (
                <Badge variant="destructive" className="ml-2 text-xs">Soon</Badge>
              )}
              {isDeadlinePassed(internship.deadline) && (
                <Badge variant="destructive" className="ml-2 text-xs">Expired</Badge>
              )}
            </span>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Key Skills</h4>
          <div className="flex flex-wrap gap-1">
            {internship.skills.slice(0, 5).map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {internship.skills.length > 5 && (
              <Badge variant="secondary" className="text-xs">
                +{internship.skills.length - 5} more
              </Badge>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            {internship.requirements.slice(0, 3).map((req, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="line-clamp-2">{req}</span>
              </li>
            ))}
            {internship.requirements.length > 3 && (
              <li className="text-xs text-gray-500 ml-3.5">
                +{internship.requirements.length - 3} more requirements
              </li>
            )}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button 
          className="w-full" 
          onClick={() => window.open(internship.applicationLink, '_blank')}
          disabled={isDeadlinePassed(internship.deadline)}
        >
          {isDeadlinePassed(internship.deadline) ? (
            "Application Closed"
          ) : (
            <>
              Apply Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
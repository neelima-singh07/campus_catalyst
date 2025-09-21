import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  Code, 
  Trophy, 
  GraduationCap, 
  ArrowRight,
  Users,
  Rocket,
  Target
} from "lucide-react";

const opportunities = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Internships",
    description: "Premium internship opportunities at top tech companies and startups",
    features: ["Remote & On-site", "Paid positions", "Mentorship included"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Projects",
    description: "Real-world projects to build your portfolio and gain experience",
    features: ["Open source", "Industry projects", "Team collaboration"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Hackathons",
    description: "Compete in exciting hackathons and win amazing prizes",
    features: ["Cash prizes", "Networking", "Skill development"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Courses",
    description: "Upskill with industry-relevant courses and certifications",
    features: ["Expert instructors", "Certificates", "Career guidance"],
    color: "from-green-500 to-teal-500"
  }
];

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Peer Network",
    description: "Connect with fellow engineering students across India"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Career Boost",
    description: "Fast-track your tech career with exclusive opportunities"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Personalized",
    description: "Opportunities matched to your skills and interests"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Opportunities That Transform Career
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a first-year exploring possibilities or a final-year student ready to 
            launch your career, we have the perfect opportunities for you.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="relative p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 gradient-card border-0 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${opportunity.color} flex items-center justify-center text-white mb-4`}>
                {opportunity.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{opportunity.title}</h3>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>
              
              <ul className="space-y-2 mb-6">
                {opportunity.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost" className="w-full group">
                Explore {opportunity.title}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center animate-fade-up" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
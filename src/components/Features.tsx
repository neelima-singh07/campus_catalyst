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
    icon: <Briefcase className="w-6 h-6" />,
    title: "Internships",
    description: "Premium internship opportunities at top tech companies and startups",
    features: ["Remote & On-site", "Paid positions", "Mentorship included"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Projects",
    description: "Real-world projects to build your portfolio and gain experience",
    features: ["Open source", "Industry projects", "Team collaboration"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Hackathons",
    description: "Compete in exciting hackathons and win amazing prizes",
    features: ["Cash prizes", "Networking", "Skill development"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
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
    <section className="py-24 bg-gray-950 text-gray-400">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Opportunities That Transform Careers
          </h2>
          <p className="text-lg text-white/70">
            Whether you're a first-year exploring possibilities or a final-year student ready to launch your career, we have the perfect opportunities for you.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="grid lg:grid-cols-4 gap-6 mb-20">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:bg-gray-800 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${opportunity.color} flex items-center justify-center text-white`}>
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{opportunity.title}</h3>
              </div>
              
              <p className="text-white/80 mb-6">{opportunity.description}</p>
              
              <ul className="space-y-3 mb-6">
                {opportunity.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-white/70">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost" className="w-full text-gray-400 hover:text-white hover:bg-white/5 group justify-start px-4">
                Explore <span className="sr-only"> {opportunity.title}</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
        
        {/* New Benefits Section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-4">
            Why Choose Us?
          </h3>
          <p className="text-lg text-white/70">
            We are more than just a platform. We are your partner in building a successful career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 bg-gray-900 border border-gray-800 rounded-2xl text-center hover:bg-gray-800 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
              <div className="w-16 h-16 bg-purple-700/20 rounded-full flex items-center justify-center text-purple-400 mx-auto mb-4">
                {benefit.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
              <p className="text-white/70">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
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
  Target,
  Sparkles,
  Star,
  Zap,
  Award,
  GitBranch
} from "lucide-react";

const opportunities = [
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Programs",
    description: "Exclusive internship and career development programs at top-tier tech companies",
    features: ["Remote & Hybrid", "Competitive stipends", "1-on-1 Mentoring", "Industry Projects"],
    color: "from-blue-500 via-cyan-500 to-teal-500",
    hoverColor: "hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600",
    bgPattern: "bg-gradient-to-br from-blue-50/5 to-cyan-50/5"
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    title: "Hackathons",
    description: "Compete in prestigious hackathons with industry leaders as judges",
    features: ["₹50L+ Prizes", "Global Network", "Startup Funding", "Media Coverage"],
    color: "from-orange-500 via-amber-500 to-yellow-500",
    hoverColor: "hover:from-orange-600 hover:via-amber-600 hover:to-yellow-600",
    bgPattern: "bg-gradient-to-br from-orange-50/5 to-amber-50/5"
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Scholarships",
    description: "Merit-based scholarships and financial aid for deserving students",
    features: ["Full Funding", "Merit Based", "Global Opportunities", "Academic Support"],
    color: "from-purple-500 via-pink-500 to-rose-500",
    hoverColor: "hover:from-purple-600 hover:via-pink-600 hover:to-rose-600",
    bgPattern: "bg-gradient-to-br from-purple-50/5 to-pink-50/5"
  },
  {
    icon: <GitBranch className="w-7 h-7" />,
    title: "Open Source",
    description: "Contribute to meaningful open source projects and build your portfolio",
    features: ["Real Impact", "Community Support", "Skill Building", "Global Recognition"],
    color: "from-green-500 via-emerald-500 to-teal-500",
    hoverColor: "hover:from-green-600 hover:via-emerald-600 hover:to-teal-600",
    bgPattern: "bg-gradient-to-br from-green-50/5 to-emerald-50/5"
  }
];

const benefits = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Elite Community",
    description: "Join 15,000+ top engineering students from premier institutions across India",
    accent: "text-blue-400",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Fast-Track Success",
    description: "3x faster career growth with our proven placement and mentorship programs",
    accent: "text-purple-400",
    bgGradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "AI-Powered Matching",
    description: "Smart recommendations based on your skills, interests, and career goals",
    accent: "text-green-400",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  }
];

export const Features = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-sm rounded-full px-6 py-2 text-purple-200 text-sm font-medium border border-purple-400/30 mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
            Transform Your Tech Journey
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            Opportunities That
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Change Everything
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            From first-year exploration to final-year career launches, we provide 
            <span className="text-cyan-400 font-semibold"> premium opportunities</span> that set you apart in the competitive tech landscape.
          </p>
        </div>

        {/* Enhanced Opportunity Cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index} 
              className={`group p-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl hover:bg-gray-800/60 hover:border-gray-600/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer relative overflow-hidden ${opportunity.bgPattern}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${opportunity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Floating decoration */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${opportunity.color} ${opportunity.hoverColor} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    {opportunity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{opportunity.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{opportunity.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {opportunity.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 hover:from-gray-700 hover:to-gray-600 hover:text-white border border-gray-600 group-hover:border-cyan-500/50 rounded-xl py-6 text-lg font-semibold group/btn"
                >
                  <span className="flex items-center justify-center">
                    Explore Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Enhanced Benefits Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Top Students Choose 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Campus Career Bloom</span>
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're not just a platform – we're your strategic partner in building an exceptional tech career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl text-center hover:bg-gray-800/50 hover:border-gray-600/50 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                  <div className={benefit.accent}>
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">{benefit.title}</h4>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{benefit.description}</p>
              </div>
              
              {/* Hover effect decoration */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                <Zap className="w-5 h-5 text-yellow-400" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
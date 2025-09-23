import { Card } from "@/components/ui/card";
import { Github, Linkedin, Code, Users, Heart, Sparkles, Star, Trophy } from "lucide-react";

const developers = [
  {
    name: "Harleen Kaur",
    role: "B.Tech ECE, IGDTUW '28", 
    description: "Electronics & Communication wizard turning circuits into digital magic ⚡",
    specialties: ["Web Development", "UI/UX Design", "Problem Solving"],
    github: "https://github.com/Harilynn",
    linkedin: "https://www.linkedin.com/in/harleen-kaur-b68aa1332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "HK",
    gradientColors: "from-rose-500 via-pink-500 to-purple-500",
    hoverGlow: "hover:shadow-pink-500/30"
  },
  {
    name: "Neelima Singh",
    role: "B.Tech CSE-AI, IGDTUW '28",
    achievements: [
      "🌟 Amazon Future Engineer Mentee",
      "🎓 Shraman Foundation Scholar", 
      "🚀 AI/ML & Web Development Explorer"
    ],
    specialties: ["AI/ML", "Full Stack Dev", "Open Source"],
    github: "https://github.com/neelima-singh07",
    linkedin: "https://www.linkedin.com/in/neelima-singh-481294318/",
    avatar: "NS",
    gradientColors: "from-cyan-500 via-blue-500 to-purple-500",
    hoverGlow: "hover:shadow-cyan-500/30"
  },
  {
    name: "Diya Kotru",
    role: "B.Tech CSE, IGDTUW '28",
    description: "Computer Science innovator crafting the future with code & creativity 💻",
    specialties: ["Software Development", "Problem Solving", "Tech Innovation"],
    github: "https://github.com/diyakotru",
    linkedin: "https://www.linkedin.com/in/diya-kotru-9059a2322/",
    avatar: "DK",
    gradientColors: "from-emerald-500 via-teal-500 to-cyan-500",
    hoverGlow: "hover:shadow-emerald-500/30"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '4s' }}></div>
        
        {/* Floating stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Star className="w-3 h-3" />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 backdrop-blur-md rounded-full px-6 py-3 mb-8 text-purple-200 text-sm font-medium border border-purple-400/40 shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            <Users className="w-4 h-4 animate-pulse" />
            Meet the Dream Team
            <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
            The Visionaries
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient bg-300%">
              Behind Your Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A passionate trio of innovators dedicated to revolutionizing how students discover opportunities. 
            <span className="text-cyan-400 font-semibold"> Built with cutting-edge tech</span> and 
            <span className="text-purple-400 font-semibold"> unlimited passion</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {developers.map((developer, index) => (
            <Card 
              key={index} 
              className={`group relative p-10 bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/70 hover:border-gray-600/60 transition-all duration-700 hover:scale-110 hover:shadow-2xl ${developer.hoverGlow} cursor-pointer overflow-hidden rounded-3xl`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              
              {/* Animated gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${developer.gradientColors} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`} />
              
              {/* Floating decoration */}
              <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                <Trophy className="w-6 h-6 text-yellow-400 animate-bounce" style={{ animationDuration: '3s' }} />
              </div>
              
              {/* Enhanced Avatar */}
              <div className={`relative w-24 h-24 bg-gradient-to-r ${developer.gradientColors} rounded-2xl flex items-center justify-center text-white font-bold text-3xl mb-8 mx-auto shadow-2xl group-hover:shadow-3xl group-hover:scale-125 transition-all duration-500 group-hover:rotate-3`}>
                {developer.avatar}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${developer.gradientColors} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500`} />
              </div>
              
              <div className="text-center relative z-10">
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-500">{developer.name}</h3>
                <p className="text-purple-300 text-lg font-semibold mb-6 group-hover:text-purple-200 transition-colors duration-300">{developer.role}</p>
                
                {/* Specialties Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {developer.specialties.map((specialty, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 text-sm rounded-full border border-gray-600 group-hover:from-gray-700 group-hover:to-gray-600 group-hover:text-white transition-all duration-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                {/* Render achievements or description */}
                {developer.achievements ? (
                  <div className="text-gray-300 text-base mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 space-y-3">
                    {developer.achievements.map((achievement, idx) => (
                      <div key={idx} className="font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300">{achievement}</div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-medium">{developer.description}</p>
                )}
                
                {/* Enhanced Social Links */}
                <div className="flex justify-center gap-6">
                  <a 
                    href={developer.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl flex items-center justify-center text-gray-400 hover:from-gray-700 hover:to-gray-600 hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-cyan-500/40 hover:rotate-12"
                  >
                    <Github className="w-6 h-6 group-hover/link:animate-pulse" />
                  </a>
                  <a 
                    href={developer.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/link w-14 h-14 bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-125 hover:shadow-xl hover:shadow-blue-500/40 hover:-rotate-12"
                  >
                    <Linkedin className="w-6 h-6 group-hover/link:animate-pulse" />
                  </a>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <Code className="w-5 h-5 text-cyan-400" />
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced footer message */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 text-gray-300 text-lg bg-gray-900/50 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105">
            <Code className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="font-semibold">Crafted with</span>
            <Heart className="w-6 h-6 text-red-400 animate-pulse" />
            <span className="font-semibold">Passion & Innovation</span>
            <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
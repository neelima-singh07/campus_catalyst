import { Card } from "@/components/ui/card";
import { Github, Linkedin, Code, Users } from "lucide-react";

const developers = [
  {
    name: "Harleen Kaur",
    role: "B.Tech ECE, IGDTUW '28", 
    description: "Electronics and Communication engineering student with expertise in web development",
    github: "https://github.com/Harilynn",
    linkedin: "https://www.linkedin.com/in/harleen-kaur-b68aa1332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "HK"
  },
  {
    name: "Neelima Singh",
    role: "B.Tech CSE-AI, IGDTUW '28",
    achievements: [
      "Mentee @ Amazon Future Engineer 🌟",
      "Shraman Foundation Scholar 🎓", 
      "Exploring AI/ML & Web Development 🚀"
    ],
    github: "https://github.com/neelima-singh07",
    linkedin: "https://www.linkedin.com/in/neelima-singh-481294318/",
    avatar: "NS"
  },
  
  {
    name: "Diya Kotru",
    role: "B.Tech CSE, IGDTUW '28",
    description: "Computer Science Engineering student passionate about technology and innovation",
    github: "https://github.com/diyakotru",
    linkedin: "https://www.linkedin.com/in/diya-kotru-9059a2322/",
    avatar: "DK"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white/90 text-sm">
            <Users className="w-4 h-4" />
            Meet Our Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The Developers Behind This Platform
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A passionate team of developers dedicated to connecting students with amazing opportunities.
            Built with love and cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {developers.map((developer, index) => (
            <Card key={index} className="relative p-8 bg-gray-900 border border-gray-800 hover:bg-gray-800 hover:border-gray-700 transition-all duration-500 animate-fade-up group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20" style={{ animationDelay: `${index * 0.1}s` }}>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Avatar */}
              <div className="relative w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300 group-hover:scale-110">
                {developer.avatar}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-light text-white mb-3 group-hover:text-white transition-colors duration-300">{developer.name}</h3>
                <p className="text-white/90 text-base font-normal mb-4 group-hover:text-white transition-colors duration-300">{developer.role}</p>
                
                {/* Render achievements or description */}
                {developer.achievements ? (
                  <div className="text-white/80 text-base mb-8 leading-relaxed group-hover:text-white transition-colors duration-300 space-y-2">
                    {developer.achievements.map((achievement, idx) => (
                      <div key={idx} className="font-light">{achievement}</div>
                    ))}
                  </div>
                ) : (
                  <p className="text-white/80 text-base mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">{developer.description}</p>
                )}
                
                {/* Social Links */}
                <div className="flex justify-center gap-6">
                  <a 
                    href={developer.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30 group/link"
                  >
                    <Github className="w-5 h-5 group-hover/link:animate-pulse" />
                  </a>
                  <a 
                    href={developer.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group/link"
                  >
                    <Linkedin className="w-5 h-5 group-hover/link:animate-pulse" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-white/80">
            <Code className="w-5 h-5" />
            <span>Built with Passion & Dedication!</span>
            <Code className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
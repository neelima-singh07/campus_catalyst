import { Card } from "@/components/ui/card";
import { Github, Linkedin, Code, Heart } from "lucide-react";

const developers = [
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
    name: "Harleen Kaur",
    role: "B.Tech ECE, IGDTUW '28", 
    description: "Electronics and Communication engineering student with expertise in web development",
    github: "https://github.com/Harilynn",
    linkedin: "https://www.linkedin.com/in/harleen-kaur-b68aa1332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "HK"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white/90 text-sm">
            <Heart className="w-4 h-4" />
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {developers.map((developer, index) => (
            <Card key={index} className="relative p-8 bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/25 hover:border-white/40 transition-all duration-500 animate-fade-up group hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20" style={{ animationDelay: `${index * 0.1}s` }}>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Avatar */}
              <div className="relative w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 mx-auto shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300 group-hover:scale-110">
                {developer.avatar}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <div className="text-center relative z-10">
                <h3 className="text-2xl font-light text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">{developer.name}</h3>
                <p className="text-gray-700 text-base font-normal mb-4 group-hover:text-gray-800 transition-colors duration-300">{developer.role}</p>
                
                {/* Render achievements or description */}
                {developer.achievements ? (
                  <div className="text-gray-600 text-base mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 space-y-2">
                    {developer.achievements.map((achievement, idx) => (
                      <div key={idx} className="font-light">{achievement}</div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-base mb-8 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">{developer.description}</p>
                )}
                
                {/* Social Links */}
                <div className="flex justify-center gap-6">
                  <a 
                    href={developer.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center text-white hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 group/link"
                  >
                    <Github className="w-5 h-5 group-hover/link:animate-pulse" />
                  </a>
                  <a 
                    href={developer.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center text-white hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group/link"
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
            <span>Built with Lots of Love!</span>
            <Heart className="w-5 h-5 text-red-400 fill-red-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
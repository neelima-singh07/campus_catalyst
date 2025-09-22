import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, UserCheck, MonitorSpeaker, Bookmark, File } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Overleaf LaTeX CV Templates",
      desc: "Browse and use free LaTeX CV/resume templates on Overleaf.",
      to: "https://www.overleaf.com/latex/templates/tagged/cv",
      icon: FileText,
    },
    {
      title: "Codolio Profile Guide",
      desc: "How to build a standout Codolio profile with real examples and tips.",
      to: "https://codolio.com/blog/how-to-create-codolio-profile",
      icon: UserCheck,
    },
    {
      title: "GitHub Profile Readme Inspiration",
      desc: "Awesome GitHub profile README templates and showcase projects.",
      to: "https://github.com/abhisheknaiidu/awesome-github-profile-readme",
      icon: UserCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <Navigation />

      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold">Resources</h1>
          <p className="text-gray-600 mt-2">
            Curated resources to help you build your resume, portfolio, and technical profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r) => {
            const Icon = r.icon;
            const isExternal = r.to.startsWith("http") || r.to.endsWith(".pdf");

            return (
              <Card key={r.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-md">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 mb-4">{r.desc}</p>
                    {isExternal ? (
                      <a href={r.to} target="_blank" rel="noreferrer">
                        <Button size="sm">Open</Button>
                      </a>
                    ) : (
                      <Link to={r.to}>
                        <Button size="sm">View</Button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resources;

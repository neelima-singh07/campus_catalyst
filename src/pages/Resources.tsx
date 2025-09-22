import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, UserCheck, MonitorSpeaker, Bookmark, File } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      title: "Resume Templates",
      desc: "Download clean, ATS-friendly resume templates for different experience levels.",
      to: "/pdfs/dsa-roadmap-cpp.pdf",
      icon: FileText,
    },
    {
      title: "Codolio / GitHub Profile Tips",
      desc: "Guides to craft a strong Codolio/GitHub profile and showcase projects effectively.",
      to: "https://github.com/",
      icon: UserCheck,
    },
    {
      title: "Portfolio & Personal Site",
      desc: "Quick checklist and templates to build a portfolio that converts.",
      to: "https://example.com/portfolio-guide",
      icon: MonitorSpeaker,
    },
    {
      title: "Interview Prep",
      desc: "Curated list of practice problems, mock interview tips and systems design primers.",
      to: "https://example.com/interview-prep",
      icon: Bookmark,
    },
    {
      title: "Offer Negotiation",
      desc: "Salary negotiation tips and a checklist for evaluating offers.",
      to: "https://example.com/negotiation",
      icon: File,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <Navigation />

      <div className="container mx-auto px-6 py-12">
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

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Hash, Network, Activity, Info, Database, GitBranch, Share2 } from "lucide-react";
import { useEffect } from "react";

export const ProteinForm = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const getIconForField = (field: string) => {
    const icons = {
      Subgraph: <Network className="h-4 w-4" />,
      Degree: <Hash className="h-4 w-4" />,
      Eigenvector: <Activity className="h-4 w-4" />,
      Information: <Info className="h-4 w-4" />,
      LAC: <Database className="h-4 w-4" />,
      Betweenness: <GitBranch className="h-4 w-4" />,
      Closeness: <Share2 className="h-4 w-4" />,
    };
    return icons[field as keyof typeof icons];
  };

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 animate-gradient-flow"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 scroll-animate">Enter Protein Data</h2>
        <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 scroll-animate">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Subgraph",
              "Degree",
              "Eigenvector",
              "Information",
              "LAC",
              "Betweenness",
              "Closeness",
            ].map((field) => (
              <div key={field} className="space-y-2 scroll-animate">
                <Label htmlFor={field.toLowerCase()} className="flex items-center gap-2">
                  {getIconForField(field)}
                  {field}
                </Label>
                <Input
                  id={field.toLowerCase()}
                  placeholder={`Enter ${field}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
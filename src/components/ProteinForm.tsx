import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
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

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 scroll-animate">Enter Protein Data</h2>
        <Card className="p-6 scroll-animate">
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
                <Label htmlFor={field.toLowerCase()}>{field}</Label>
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
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

export const InfoSection = () => {
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 scroll-animate">Understanding Protein Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow scroll-animate">
            <h3 className="text-xl font-semibold mb-4">What are Protein Interactions?</h3>
            <p className="text-gray-600">
              Protein interactions play a crucial role in COVID-19 infection. The SARS-CoV-2 virus
              uses its spike protein to bind to human cell receptors, initiating the infection
              process.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow scroll-animate">
            <h3 className="text-xl font-semibold mb-4">Why Predict Protein Status?</h3>
            <p className="text-gray-600">
              Predicting protein status helps researchers understand viral mechanisms, develop
              treatments, and identify potential drug targets for COVID-19 therapy.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow scroll-animate">
            <h3 className="text-xl font-semibold mb-4">Network Analysis</h3>
            <p className="text-gray-600">
              Network analysis metrics like betweenness and closeness help identify key proteins
              in the COVID-19 infection pathway and potential therapeutic targets.
            </p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow scroll-animate">
            <h3 className="text-xl font-semibold mb-4">Research Impact</h3>
            <p className="text-gray-600">
              Understanding protein interactions has led to the development of targeted therapies
              and vaccines against COVID-19, demonstrating the importance of protein analysis.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
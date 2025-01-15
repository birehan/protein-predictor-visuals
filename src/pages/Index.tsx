import { HeroSection } from "@/components/HeroSection";
import { ProteinForm } from "@/components/ProteinForm";
import { CovidStats } from "@/components/CovidStats";
import { InfoSection } from "@/components/InfoSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Analysis Tools Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16 scroll-animate">
              <span className="text-blue-600 font-semibold mb-2 block animate-fade-in">ANALYSIS TOOLS</span>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Protein Analysis Platform
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Advanced tools for COVID-19 protein interaction analysis and prediction
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Form Section */}
              <div className="scroll-animate bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-6 text-blue-600">Prediction Tool</h3>
                <ProteinForm />
              </div>

              {/* Stats Section */}
              <div className="scroll-animate bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-6 text-purple-600">Statistics Dashboard</h3>
                <CovidStats />
              </div>
            </div>
          </div>

          {/* Animated Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-150"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float delay-300"></div>
        </section>

        {/* Research Insights Section */}
        <section className="relative py-20 bg-gradient-to-b from-white/50 to-blue-50/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <span className="text-purple-600 font-semibold mb-2 block animate-fade-in">RESEARCH INSIGHTS</span>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Understanding COVID-19 Research
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore the latest findings in protein interaction research
              </p>
            </div>
            <InfoSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
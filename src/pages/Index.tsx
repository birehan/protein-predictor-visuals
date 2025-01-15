import { HeroSection } from "@/components/HeroSection";
import { ProteinForm } from "@/components/ProteinForm";
import { CovidStats } from "@/components/CovidStats";
import { InfoSection } from "@/components/InfoSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Main Content Section */}
        <section className="relative py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12 animate-fade-in">
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
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 animate-fade-in">
                <ProteinForm />
              </div>

              {/* Stats Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 animate-fade-in delay-150">
                <CovidStats />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float delay-150"></div>
        </section>

        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
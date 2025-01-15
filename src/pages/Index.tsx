import { HeroSection } from "@/components/HeroSection";
import { ProteinForm } from "@/components/ProteinForm";
import { CovidStats } from "@/components/CovidStats";
import { InfoSection } from "@/components/InfoSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProteinForm />
      <CovidStats />
      <InfoSection />
    </div>
  );
};

export default Index;
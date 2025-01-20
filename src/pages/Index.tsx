// import { HeroSection } from "@/components/HeroSection";
// import { ProteinForm } from "@/components/ProteinForm";
// import { CovidStats } from "@/components/CovidStats";
// import { InfoSection } from "@/components/InfoSection";
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";

// const Index = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow pt-16">
//         <HeroSection />
//         <ProteinForm />
//         <CovidStats />
//         <InfoSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;

import { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProteinForm } from "@/components/ProteinForm";
import { CovidStats } from "@/components/CovidStats";
import { InfoSection } from "@/components/InfoSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedProtein, setSelectedProtein] = useState<any>(null); // State to hold selected protein
  const [selectedModel, setSelectedModel] = useState<string>('KNeighborsClassifier'); // Default model

  const handleProteinSelect = (protein: any) => {
    setSelectedProtein(protein); // Set the selected protein
  };

  
  const handleModelSelect = (model: string) => {
    setSelectedModel(model);
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
      <HeroSection />
        
        {/* Conditionally render ProteinForm based on selectedProtein */}
        {selectedProtein ? (
          <ProteinForm  />

        ) : (
          <ProteinForm /> // Pass empty object if no protein is selected
        )}
        
        <CovidStats />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

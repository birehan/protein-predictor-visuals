import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        <div 
          className="absolute inset-0 transition-transform duration-700"
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584118624012-df056829fbd0')] bg-cover bg-center">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent"
              style={{
                transform: `translateY(${scrollPosition * 0.2}px)`,
                opacity: Math.max(0, 1 - scrollPosition / 500)
              }}
            ></div>
          </div>
        </div>
        <div 
          className="relative z-10 text-center space-y-8 max-w-4xl mx-auto transition-all duration-700"
          style={{
            transform: `translateY(${scrollPosition * 0.3}px)`,
            opacity: Math.max(0, 1 - scrollPosition / 700)
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
            Protein Status Predictor for COVID-19
          </h1>
          <p className="text-lg md:text-xl text-white/80 animate-slide-in">
            Advanced protein analysis tool for COVID-19 research
          </p>
        </div>
      </section>

      <section className="relative py-16 scroll-reveal opacity-0 transition-all duration-1000 translate-y-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-flow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-center mb-8">Predict Protein Status</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-[280px]">
                  <Search className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="SELECT UNIPROT ID" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="p1">Protein 1</SelectItem>
                  <SelectItem value="p2">Protein 2</SelectItem>
                  <SelectItem value="p3">Protein 3</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white button-hover">
                Predict
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
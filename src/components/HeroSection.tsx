import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-400 to-blue-800">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
          Protein Status Predictor for COVID-19
        </h1>
        <p className="text-lg md:text-xl text-white/80">
          Advanced protein analysis tool for COVID-19 research
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          <Select>
            <SelectTrigger className="w-full sm:w-[280px] bg-white/90">
              <SelectValue placeholder="SELECT UNIPROT ID" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="p1">Protein 1</SelectItem>
              <SelectItem value="p2">Protein 2</SelectItem>
              <SelectItem value="p3">Protein 3</SelectItem>
            </SelectContent>
          </Select>
          <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white">
            Predict
          </Button>
        </div>
      </div>
    </section>
  );
};
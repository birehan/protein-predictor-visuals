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
    <>
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
            Protein Status Predictor for COVID-19
          </h1>
          <p className="text-lg md:text-xl text-white/80">
            Advanced protein analysis tool for COVID-19 research
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-center mb-8">Predict Protein Status</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Select>
                <SelectTrigger className="w-full sm:w-[280px]">
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
        </div>
      </section>
    </>
  );
};
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card } from "@/components/ui/card";
// import { Hash, Network, Activity, Info, Database, GitBranch, Share2 } from "lucide-react";
// import { useEffect } from "react";

// export const ProteinForm = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         }
//       });
//     });

//     document.querySelectorAll(".scroll-animate").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const getIconForField = (field: string) => {
//     const icons = {
//       Subgraph: <Network className="h-4 w-4" />,
//       Degree: <Hash className="h-4 w-4" />,
//       Eigenvector: <Activity className="h-4 w-4" />,
//       Information: <Info className="h-4 w-4" />,
//       LAC: <Database className="h-4 w-4" />,
//       Betweenness: <GitBranch className="h-4 w-4" />,
//       Closeness: <Share2 className="h-4 w-4" />,
//     };
//     return icons[field as keyof typeof icons];
//   };

//   return (
//     <section className="relative py-16">
//       <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 animate-gradient-flow"></div>
//       <div className="max-w-4xl mx-auto px-4 relative z-10">
//         <h2 className="text-3xl font-bold text-center mb-8 scroll-animate">Enter Protein Data</h2>
//         <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300 scroll-animate">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {[
//               "Subgraph",
//               "Degree",
//               "Eigenvector",
//               "Information",
//               "LAC",
//               "Betweenness",
//               "Closeness",
//             ].map((field) => (
//               <div key={field} className="space-y-2 scroll-animate">
//                 <Label htmlFor={field.toLowerCase()} className="flex items-center gap-2">
//                   {getIconForField(field)}
//                   {field}
//                 </Label>
//                 <Input
//                   id={field.toLowerCase()}
//                   placeholder={`Enter ${field}`}
//                   className="w-full"
//                 />
//               </div>
//             ))}
//           </div>
//         </Card>
//       </div>
//     </section>
//   );
// };



import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Assume Button component is available
import { useEffect } from "react";

export const ProteinForm = () => {

    // Default form values
    const defaultValues = {
      AAC_A: 0.1,
      AAC_C: 0.2,
      AAC_D: 0.3,
      AAC_E: 0.4,
      AAC_F: 0.5,
      AAC_G: 0.6,
      AAC_H: 0.7,
      AAC_I: 0.8,
      AAC_K: 0.9,
      AAC_L: 0.1,
      AAC_M: 0.11,
      AAC_N: 0.12,
      AAC_P: 0.13,
      AAC_Q: 0.14,
      AAC_R: 0.15,
      AAC_S: 0.16,
      AAC_T: 0.17,
      AAC_V: 0.18,
      AAC_W: 0.19,
      AAC_Y: 0.2,
      PCP_PC: 0.1,
      PCP_NC: 0.2,
      PCP_NE: 0.3,
      PCP_PO: 0.4,
      PCP_NP: 0.5,
      PCP_AL: 0.6,
      PCP_CY: 0.7,
      PCP_AR: 0.8,
      PCP_AC: 0.9,
      PCP_BS: 0.1,
      PCP_NE_pH: 0.11,
      PCP_HB: 0.12,
      PCP_HL: 0.13,
      PCP_NT: 0.14,
      PCP_HX: 0.15,
      PCP_SC: 0.16,
      PCP_SS_HE: 0.17,
      PCP_SS_ST: 0.18,
      PCP_SS_CO: 0.19,
      PCP_SA_BU: 0.2,
      PCP_SA_EX: 0.21,
      PCP_SA_IN: 0.22,
      PCP_TN: 0.23,
      PCP_SM: 0.24,
      PCP_LR: 0.25,
      PCP_Z1: 0.26,
      PCP_Z2: 0.27,
      PCP_Z3: 0.28,
      PCP_Z4: 0.29,
      PCP_Z5: 0.3,
      SEP: 0.31,
      SER_A: 0.32,
      SER_C: 0.33,
      SER_D: 0.34,
      SER_E: 0.35,
      SER_F: 0.36,
      SER_G: 0.37,
      SER_H: 0.38,
      SER_I: 0.39,
      SER_K: 0.4,
      SER_L: 0.41,
      SER_M: 0.42,
      SER_N: 0.43,
      SER_P: 0.44,
      SER_Q: 0.45,
      SER_R: 0.46,
      SER_S: 0.47,
      SER_T: 0.48,
      SER_V: 0.49,
      SER_W: 0.5,
      SER_Y: 0.51,
    };

  // const [formData, setFormData] = useState<any>({
  //   AAC_A: "",
  //   AAC_C: "",
  //   AAC_D: "",
  //   AAC_E: "",
  //   AAC_F: "",
  //   AAC_G: "",
  //   AAC_H: "",
  //   AAC_I: "",
  //   AAC_K: "",
  //   AAC_L: "",
  //   AAC_M: "",
  //   AAC_N: "",
  //   AAC_P: "",
  //   AAC_Q: "",
  //   AAC_R: "",
  //   AAC_S: "",
  //   AAC_T: "",
  //   AAC_V: "",
  //   AAC_W: "",
  //   AAC_Y: "",
  //   PCP_PC: "",
  //   PCP_NC: "",
  //   PCP_NE: "",
  //   PCP_PO: "",
  //   PCP_NP: "",
  //   PCP_AL: "",
  //   PCP_CY: "",
  //   PCP_AR: "",
  //   PCP_AC: "",
  //   PCP_BS: "",
  //   PCP_NE_pH: "",
  //   PCP_HB: "",
  //   PCP_HL: "",
  //   PCP_NT: "",
  //   PCP_HX: "",
  //   PCP_SC: "",
  //   PCP_SS_HE: "",
  //   PCP_SS_ST: "",
  //   PCP_SS_CO: "",
  //   PCP_SA_BU: "",
  //   PCP_SA_EX: "",
  //   PCP_SA_IN: "",
  //   PCP_TN: "",
  //   PCP_SM: "",
  //   PCP_LR: "",
  //   PCP_Z1: "",
  //   PCP_Z2: "",
  //   PCP_Z3: "",
  //   PCP_Z4: "",
  //   PCP_Z5: "",
  //   SEP: "",
  //   SER_A: "",
  //   SER_C: "",
  //   SER_D: "",
  //   SER_E: "",
  //   SER_F: "",
  //   SER_G: "",
  //   SER_H: "",
  //   SER_I: "",
  //   SER_K: "",
  //   SER_L: "",
  //   SER_M: "",
  //   SER_N: "",
  //   SER_P: "",
  //   SER_Q: "",
  //   SER_R: "",
  //   SER_S: "",
  //   SER_T: "",
  //   SER_V: "",
  //   SER_W: "",
  //   SER_Y: "",
  // });

  const [formData, setFormData] = useState(defaultValues);


  const [prediction, setPrediction] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/predict/KNeighborsClassifier", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setPrediction(data); // Assuming the backend returns prediction as an object with 'prediction' and 'prediction_label'
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

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

  const labels = {
    AAC_A: "Amino Acid Alanine",
    AAC_C: "Amino Acid Cysteine",
    AAC_D: "Amino Acid Aspartic Acid",
    AAC_E: "Amino Acid Glutamic Acid",
    AAC_F: "Amino Acid Phenylalanine",
    AAC_G: "Amino Acid Glycine",
    AAC_H: "Amino Acid Histidine",
    AAC_I: "Amino Acid Isoleucine",
    AAC_K: "Amino Acid Lysine",
    AAC_L: "Amino Acid Leucine",
    AAC_M: "Amino Acid Methionine",
    AAC_N: "Amino Acid Asparagine",
    AAC_P: "Amino Acid Proline",
    AAC_Q: "Amino Acid Glutamine",
    AAC_R: "Amino Acid Arginine",
    AAC_S: "Amino Acid Serine",
    AAC_T: "Amino Acid Threonine",
    AAC_V: "Amino Acid Valine",
    AAC_W: "Amino Acid Tryptophan",
    AAC_Y: "Amino Acid Tyrosine",
    PCP_PC: "Protein Content",
    PCP_NC: "Non-Coding Protein",
    PCP_NE: "Non-Enzymatic Protein",
    PCP_PO: "Post-translational Modifications",
    PCP_NP: "Non-Protein Coding Sequences",
    PCP_AL: "Alanine-Related Proteins",
    PCP_CY: "Cytoskeletal Proteins",
    PCP_AR: "Arginine-Rich Proteins",
    PCP_AC: "Acidic Proteins",
    PCP_BS: "Base Sequence Proteins",
    PCP_NE_pH: "Non-Enzymatic Protein pH",
    PCP_HB: "Hemoglobin-Related Proteins",
    PCP_HL: "Helical Proteins",
    PCP_NT: "N-Terminal Proteins",
    PCP_HX: "Hydrophobic Proteins",
    PCP_SC: "Secondary Structure of Proteins",
    PCP_SS_HE: "Secondary Structure Helical",
    PCP_SS_ST: "Secondary Structure Stranded",
    PCP_SS_CO: "Secondary Structure Coil",
    PCP_SA_BU: "Structural Analysis Built",
    PCP_SA_EX: "Experimental Structural Analysis",
    PCP_SA_IN: "Inferred Structural Analysis",
    PCP_TN: "Terminal Nucleotide Proteins",
    PCP_SM: "Small Molecule Interactions",
    PCP_LR: "Long-Range Interactions",
    PCP_Z1: "Protein Category Z1",
    PCP_Z2: "Protein Category Z2",
    PCP_Z3: "Protein Category Z3",
    PCP_Z4: "Protein Category Z4",
    PCP_Z5: "Protein Category Z5",
    SEP: "Separator",
    SER_A: "Serine Protein A",
    SER_C: "Serine Protein C",
    SER_D: "Serine Protein D",
    SER_E: "Serine Protein E",
    SER_F: "Serine Protein F",
    SER_G: "Serine Protein G",
    SER_H: "Serine Protein H",
    SER_I: "Serine Protein I",
    SER_K: "Serine Protein K",
    SER_L: "Serine Protein L",
    SER_M: "Serine Protein M",
    SER_N: "Serine Protein N",
    SER_P: "Serine Protein P",
    SER_Q: "Serine Protein Q",
    SER_R: "Serine Protein R",
    SER_S: "Serine Protein S",
    SER_T: "Serine Protein T",
    SER_V: "Serine Protein V",
    SER_W: "Serine Protein W",
    SER_Y: "Serine Protein Y",
  };
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 animate-gradient-flow"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8">Enter Protein Data</h2>
        <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-96 overflow-y-auto p-2">
              {Object.keys(formData).map((field) => (
                <div key={field} className="space-y-2">
                  <Label htmlFor={field} className="flex items-center gap-2">
                    {labels[field] || field.replace("_", " ")}
                  </Label>
                  <Input
                    id={field}
                    name={field}
                    placeholder={`Enter value for ${labels[field] || field.replace("_", " ")}`}
                    value={formData[field]}
                    onChange={handleInputChange}
                    className="w-full"
                    type="number"
                    step="any" // To handle floating point numbers
                  />
                </div>
              ))}
            </div>
            <Button type="submit" className="mt-4 w-full">
              Submit
            </Button>
          </form>
        </Card>

        {prediction && (
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold">Prediction Result</h3>
            <p>{`Prediction: ${prediction.prediction_label}`}</p>
          </div>
        )}
      </div>
    </section>
  );
};
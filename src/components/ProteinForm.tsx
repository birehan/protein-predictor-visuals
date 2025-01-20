import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Papa from "papaparse"; // Import PapaParse to parse the CSV file
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export const ProteinForm = () => {
  const [proteinEntries, setProteinEntries] = useState<any[]>([]); // State to hold parsed proteins data
  const [loading, setLoading] = useState<boolean>(true);
  const [submitLoading, setSubmitLoading] = useState<boolean>(true);

  const [selectedProtein, setSelectedProtein] = useState<any>(null); // Selected protein data
  const [selectedModel, setSelectedModel] = useState<string>(''); // Selected model
  const [prediction, setPrediction] = useState<any>(null); // Store prediction result
  const [errorMessages, setErrorMessages] = useState<string[]>([]); // Store error messages

  const [formData, setFormData] = useState<any>({
    AAC_A: selectedProtein?.AAC_A || "",
    AAC_C: selectedProtein?.AAC_C || "",
    AAC_D: selectedProtein?.AAC_D || "",
    AAC_E: selectedProtein?.AAC_E || "",
    AAC_F: selectedProtein?.AAC_F || "",
    AAC_G: selectedProtein?.AAC_G || "",
    AAC_H: selectedProtein?.AAC_H || "",
    AAC_I: selectedProtein?.AAC_I || "",
    AAC_K: selectedProtein?.AAC_K || "",
    AAC_L: selectedProtein?.AAC_L || "",
    AAC_M: selectedProtein?.AAC_M || "",
    AAC_N: selectedProtein?.AAC_N || "",
    AAC_P: selectedProtein?.AAC_P || "",
    AAC_Q: selectedProtein?.AAC_Q || "",
    AAC_R: selectedProtein?.AAC_R || "",
    AAC_S: selectedProtein?.AAC_S || "",
    AAC_T: selectedProtein?.AAC_T || "",
    AAC_V: selectedProtein?.AAC_V || "",
    AAC_W: selectedProtein?.AAC_W || "",
    AAC_Y: selectedProtein?.AAC_Y || "",
    PCP_PC: selectedProtein?.PCP_PC || "",
    PCP_NC: selectedProtein?.PCP_NC || "",
    PCP_NE: selectedProtein?.PCP_NE || "",
    PCP_PO: selectedProtein?.PCP_PO || "",
    PCP_NP: selectedProtein?.PCP_NP || "",
    PCP_AL: selectedProtein?.PCP_AL || "",
    PCP_CY: selectedProtein?.PCP_CY || "",
    PCP_AR: selectedProtein?.PCP_AR || "",
    PCP_AC: selectedProtein?.PCP_AC || "",
    PCP_BS: selectedProtein?.PCP_BS || "",
    PCP_NE_pH: selectedProtein?.PCP_NE_pH || "",
    PCP_HB: selectedProtein?.PCP_HB || "",
    PCP_HL: selectedProtein?.PCP_HL || "",
    PCP_NT: selectedProtein?.PCP_NT || "",
    PCP_HX: selectedProtein?.PCP_HX || "",
    PCP_SC: selectedProtein?.PCP_SC || "",
    PCP_SS_HE: selectedProtein?.PCP_SS_HE || "",
    PCP_SS_ST: selectedProtein?.PCP_SS_ST || "",
    PCP_SS_CO: selectedProtein?.PCP_SS_CO || "",
    PCP_SA_BU: selectedProtein?.PCP_SA_BU || "",
    PCP_SA_EX: selectedProtein?.PCP_SA_EX || "",
    PCP_SA_IN: selectedProtein?.PCP_SA_IN || "",
    PCP_TN: selectedProtein?.PCP_TN || "",
    PCP_SM: selectedProtein?.PCP_SM || "",
    PCP_LR: selectedProtein?.PCP_LR || "",
    PCP_Z1: selectedProtein?.PCP_Z1 || "",
    PCP_Z2: selectedProtein?.PCP_Z2 || "",
    PCP_Z3: selectedProtein?.PCP_Z3 || "",
    PCP_Z4: selectedProtein?.PCP_Z4 || "",
    PCP_Z5: selectedProtein?.PCP_Z5 || "",
    SEP: selectedProtein?.SEP || "",
    SER_A: selectedProtein?.SER_A || "",
    SER_C: selectedProtein?.SER_C || "",
    SER_D: selectedProtein?.SER_D || "",
    SER_E: selectedProtein?.SER_E || "",
    SER_F: selectedProtein?.SER_F || "",
    SER_G: selectedProtein?.SER_G || "",
    SER_H: selectedProtein?.SER_H || "",
    SER_I: selectedProtein?.SER_I || "",
    SER_K: selectedProtein?.SER_K || "",
    SER_L: selectedProtein?.SER_L || "",
    SER_M: selectedProtein?.SER_M || "",
    SER_N: selectedProtein?.SER_N || "",
    SER_P: selectedProtein?.SER_P || "",
    SER_Q: selectedProtein?.SER_Q || "",
    SER_R: selectedProtein?.SER_R || "",
    SER_S: selectedProtein?.SER_S || "",
    SER_T: selectedProtein?.SER_T || "",
    SER_V: selectedProtein?.SER_V || "",
    SER_W: selectedProtein?.SER_W || "",
    SER_Y: selectedProtein?.SER_Y || "",
  });

  // Labels for form fields
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
    SEP: "Serine Protein",
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

  // Fetch protein entries when the component is mounted
  useEffect(() => {
    Papa.parse("/data.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setProteinEntries(result.data);
        setLoading(false);
      },
      error: (error) => {
        console.error("Error parsing CSV file:", error);
        setLoading(false);
      },
    });
  }, []);

  // Update form data when protein is selected
  useEffect(() => {
    if (selectedProtein) {
      setFormData((prevData) => ({
        ...prevData,
        ...Object.keys(selectedProtein)
          .filter((key) => key !== "Entry" && key !== "Label")  // Exclude "Entry" and "Label" from form data
          .reduce((acc, key) => {
            acc[key] = selectedProtein[key];
            return acc;
          }, {}),
      }));
    }
  }, [selectedProtein]);

  // Handle protein selection
  const handleSelectProtein = (proteinId: string) => {
    const selected = proteinEntries.find((entry) => entry.Entry === proteinId);
    if (selected) {
      setSelectedProtein(selected);
    }
  };

  // Handle model selection
  const handleSelectModel = (model: string) => {
    setSelectedModel(model);
  };

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  // Validation function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let errorMessage = ""; // Initialize error message

    // Validate form data
    Object.keys(formData).some((key) => {
      if (!formData[key] && formData[key] != '0') {
        errorMessage = `Please select data entry or fill in the values!`;
        return true; // Exit loop on the first missing field
      }
      return false;
    });

    if (errorMessage) {
      setPrediction({ error: errorMessage });
      return; // Stop further processing
    }

    if (!selectedModel) {
      errorMessage = "Please select a model.";
    }

    if (errorMessage) {
      setPrediction({ error: errorMessage });
      return; // Stop further processing
    }


    setSubmitLoading(true); // Start loading animation

    try {
      const response = await fetch(`http://127.0.0.1:5000/api/predict/${selectedModel}`, {
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
    setSubmitLoading(false);
  };


  console.log(selectedProtein)


  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-indigo-50 to-purple-50 animate-gradient-flow"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8">Protein Status Predictor</h2>
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Select Protein and Model</h2>
          {loading ? (
            <div className="flex items-center justify-center ">
              <div className="animate-pulse h-10 w-10 border-4 border-dashed border-blue-500 rounded-full"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Protein Select */}
              <div className="w-full sm:w-[280px]">
                <Select onValueChange={handleSelectProtein}>
                  <SelectTrigger className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select Data Entry" />
                  </SelectTrigger>
                  <SelectContent>
                    {proteinEntries.map((entry) => (
                      <SelectItem key={entry.Entry} value={entry.Entry}>
                        {entry.Entry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Model Select */}
              <div className="w-full sm:w-[280px]">
                <Select value={selectedModel} onValueChange={handleSelectModel}>
                  <SelectTrigger className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="RandomForestClassifier">Random Forest</SelectItem>
                    <SelectItem value="GradientBoostingClassifier">Gradient Boosting</SelectItem>
                    <SelectItem value="XGBClassifier">XGBoost</SelectItem>
                    <SelectItem value="LogisticRegression">Logistic Regression</SelectItem>
                    <SelectItem value="DecisionTreeClassifier">Decision Tree</SelectItem>
                    <SelectItem value="KNeighborsClassifier">K-Nearest Neighbors</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* <Button type="submit" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white button-hover">
                Predict
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
              <Button
                type="submit"
                className={`w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white button-hover flex items-center justify-center ${loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Predict
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

            </form>
          )}

          {/* Error Messages */}
          {errorMessages.length > 0 && (
            <div className="mt-4 text-red-500">
              <ul>
                {errorMessages.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Protein Form Fields */}
          <Card className="mt-8 p-6 bg-white/80 backdrop-blur-sm">
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
                      step="any"
                    />
                  </div>
                ))}
              </div>
            </form>
          </Card>

          {/* Show Prediction Result */}
          {/* Show Validation Error */}
          {prediction?.error && (
            <div className="mt-4 text-center text-red-600 font-medium">
              {prediction.error}
            </div>
          )}


          {prediction && prediction.prediction_label && (
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold">Prediction Result</h3>
              <p>{`Prediction: ${prediction.prediction_label}`}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

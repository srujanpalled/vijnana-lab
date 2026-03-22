const fs = require('fs');

const FILE_PATH = 'c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts';
let content = fs.readFileSync(FILE_PATH, 'utf8');

const newPhysicsLabs = `,
      {
          id: 'p18',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Physical Balance', 
          description: 'Measure the gravitational mass of an object.', 
          difficulty: 'Medium', 
          duration: '30 min', 
          category: 'Mechanics',
          content: { 
            aim: "To find the mass of a given body using a physical balance.", 
            requirements: ["Physical Balance", "Weight Box", "Body of unknown mass"], 
            theory: "A physical balance works on the principle of moments. At equilibrium, the anticlockwise moment is equal to the clockwise moment.", 
            procedure: [
              "Adjust the balance so that the plumb line is precisely aligned with the needle.",
              "Ensure the pointer swings equally on both sides of the zero mark on the scale when the beam is raised.",
              "Place the object of unknown mass on the left pan.",
              "Place standard weights from the weight box on the right pan.",
              "Adjust the weights until the pointer oscillates equally on both sides of the zero mark.",
              "Record the weights to determine the exact mass."
            ], 
            objectives: ["Accuracy in mass measurement.", "Understanding the principle of moments."] 
          }
      },
      {
          id: 'p19',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Traveling Microscope', 
          description: 'Find refractive index of a glass slab.', 
          difficulty: 'Medium', 
          duration: '40 min', 
          category: 'Optics',
          content: { 
            aim: "To find the refractive index of a glass slab using a traveling microscope.", 
            requirements: ["Traveling Microscope", "Glass Slab", "Lycopodium Powder", "Paper with a cross mark"], 
            theory: "Refractive index = Real thickness / Apparent thickness.", 
            procedure: [
              "Place a piece of paper with an ink cross on the base of the microscope.",
              "Focus the microscope on the cross and take the reading (R1).",
              "Place the glass slab over the cross. The cross appears raised due to refraction.",
              "Raise the microscope to focus on the image of the cross and take the reading (R2).",
              "Sprinkle some lycopodium powder on the top surface of the glass slab.",
              "Focus the microscope on the powder particles and take the third reading (R3).",
              "Calculate the real thickness = R3 - R1.",
              "Calculate the apparent thickness = R3 - R2.",
              "Determine the refractive index = (R3 - R1) / (R3 - R2)."
            ], 
            objectives: ["Measure real and apparent depth.", "Calculate refractive index."] 
          }
      },
      {
          id: 'p20',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Surface Tension', 
          description: 'Determine surface tension of water using capillary rise method.', 
          difficulty: 'Hard', 
          duration: '45 min', 
          category: 'Fluids',
          content: { 
            aim: "To determine the surface tension of water by capillary rise method.", 
            requirements: ["Capillary tubes", "Traveling Microscope", "Beaker with water", "Stand"], 
            theory: "Surface tension T = (r * h * rho * g) / 2, where r is the radius of the capillary, h is the height of water column, rho is density, and g is gravity.", 
            procedure: [
              "Clean the capillary tube and fix it vertically in a beaker containing water.",
              "Focus the traveling microscope on the meniscus of the water in the capillary tube.",
              "Record the reading of the vertical scale.",
              "Carefully focus the microscope on the tip of a pin adjusted to just touch the water surface in the beaker to find the liquid level in the beaker.",
              "Calculate the capillary rise (h).",
              "Cut the capillary tube at the water mark and focus the microscope to measure its inner diameter.",
              "Calculate the radius (r) of the capillary tube.",
              "Compute the surface tension."
            ], 
            objectives: ["Understand cohesive forces.", "Measure capillary action."] 
          }
      },
      {
          id: 'p21',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Newton\\'s Law of Cooling', 
          description: 'Study the cooling of hot water with time.', 
          difficulty: 'Easy', 
          duration: '35 min', 
          category: 'Thermodynamics',
          content: { 
            aim: "To study the relationship between the temperature of a hot body and time by plotting a cooling curve.", 
            requirements: ["Copper calorimeter", "Thermometer", "Hot water", "Stopwatch", "Stirrer"], 
            theory: "The rate of loss of heat of a body is directly proportional to the difference in temperature between the body and its surroundings.", 
            procedure: [
              "Fill the calorimeter up to two-thirds with hot water (around 80°C).",
              "Insert a thermometer and wait until the temperature stabilizes to record the initial temperature.",
              "Start the stopwatch and record the temperature every minute while stirring the water gently.",
              "Continue taking readings until the temperature of the water approaches the room temperature.",
              "Record the room temperature as the surroundings' temperature.",
              "Plot a graph of temperature against time (cooling curve) and log(T - Ts) against time."
            ], 
            objectives: ["Plot a cooling curve.", "Verify exponential temperature decay."] 
          }
      },
      {
          id: 'p22',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Internal Resistance using Potentiometer', 
          description: 'Determine internal resistance of a primary cell.', 
          difficulty: 'Hard', 
          duration: '40 min', 
          category: 'Electricity',
          content: { 
            aim: "To determine the internal resistance of a primary cell (Leclanché/Daniel cell) using a potentiometer.", 
            requirements: ["Potentiometer", "Primary Cell", "Resistance Box", "Galvanometer", "Jockey", "Battery Eliminator"], 
            theory: "Internal resistance r = R * (L1 - L2) / L2, where L1 is the balancing length without shunt, L2 is the balancing length with shunt R.", 
            procedure: [
              "Set up the primary circuit with a driving battery, key, and rheostat across the potentiometer wire.",
              "Connect the primary cell in the secondary circuit through a galvanometer and a jockey.",
              "Find the balancing length L1 with the cell in open circuit.",
              "Connect a known resistance (R) in parallel with the primary cell (closed circuit).",
              "Find the new balancing length L2.",
              "Calculate the internal resistance using the formula.",
              "Repeat for different values of shunt resistance R."
            ], 
            objectives: ["Measure internal resistance.", "Understand potential drop."] 
          }
      },
      {
          id: 'p23',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Galvanometer to Ammeter conversion', 
          description: 'Convert galvanometer to ammeter.', 
          difficulty: 'Hard', 
          duration: '40 min', 
          category: 'Electricity',
          content: { 
            aim: "To convert a given galvanometer into an ammeter of desired range and to verify the same.", 
            requirements: ["Galvanometer", "Resistance Box", "Shunt wire", "Ammeter", "Battery"], 
            theory: "A galvanometer is converted into an ammeter by connecting a suitable low resistance (shunt) across it. Shunt S = (Ig * G) / (I - Ig).", 
            procedure: [
              "Determine the internal resistance (G) and figure of merit of the galvanometer.",
              "Calculate the required shunt resistance (S) for the desired ammeter range (I).",
              "Cut the precise length of the specific wire required to create the exact shunt resistance.",
              "Connect the calculated shunt resistance in parallel to the galvanometer.",
              "Connect the newly modified galvanometer (now an ammeter) in series with a standard ammeter, rheostat, and battery.",
              "Vary the current and note the readings on both the standard ammeter and converted ammeter to verify accuracy."
            ], 
            objectives: ["Measure and compute shunt resistance.", "Calibrate ammeters."] 
          }
      },
      {
          id: 'p24',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Galvanometer to Voltmeter conversion', 
          description: 'Convert galvanometer to voltmeter.', 
          difficulty: 'Medium', 
          duration: '35 min', 
          category: 'Electricity',
          content: { 
            aim: "To convert a given galvanometer into a voltmeter of desired range and verify.", 
            requirements: ["Galvanometer", "High Resistance Box", "Voltmeter", "Battery"], 
            theory: "A galvanometer is converted into a voltmeter by connecting a high resistance in series with it. Resistance R = (V / Ig) - G.", 
            procedure: [
              "Determine the internal resistance (G) and the figure of merit of the galvanometer.",
              "Calculate the required high series resistance (R) for the given potential difference range.",
              "Take out the calculated resistance (R) from a high resistance box connected in series with the galvanometer.",
              "Connect the converted galvanometer in parallel across a component, along with a standard voltmeter.",
              "Vary the potential difference using a rheostat and compare readings to verify the conversion."
            ], 
            objectives: ["Calculate series resistance requirement.", "Understand voltmeter characteristics."] 
          }
      },
      {
          id: 'p25',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Refractive Index of Water', 
          description: 'Find refractive index of water using concave mirror or lens.', 
          difficulty: 'Medium', 
          duration: '30 min', 
          category: 'Optics',
          content: { 
            aim: "To determine the refractive index of water using a transparent liquid and a convex lens with a plane mirror.", 
            requirements: ["Convex Lens", "Plane Mirror", "Water", "Retort Stand", "Optical Needle"], 
            theory: "The refractive index of a liquid can be determined by finding the focal lengths of the combination of a convex glass lens and a plano-concave liquid lens. n = 2 - (F / f), where F is combined focal length and f is the glass lens focal length.", 
            procedure: [
              "Place the plane mirror on a horizontal surface and rest the convex lens on it.",
              "Clamp the optical needle horizontally on a retort stand directly above the lens.",
              "Move the needle upward or downward until its tip coincides with the tip of its inverted image without parallax.",
              "Measure the distance from the tip of the needle to the top of the lens to find the focal length (f) of the convex lens without liquid.",
              "Place a few drops of water on the plane mirror, press the convex lens onto the drops safely to form a thin liquid lens.",
              "Find the balance position again with the needle to find the new combined focal length (F) representing the glass-water combination.",
              "Calculate the refractive index of the water using the derived formula."
            ], 
            objectives: ["Measure combined lens focal length.", "Demonstrate liquid refractive properties."] 
          }
      },
      {
          id: 'p26',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Frequency of AC Mains', 
          description: 'Use a sonometer to find the AC mains frequency.', 
          difficulty: 'Hard', 
          duration: '35 min', 
          category: 'Electromagnetism',
          content: { 
            aim: "To determine the frequency of alternating current (AC) mains using a sonometer and electromagnet.", 
            requirements: ["Sonometer", "Electromagnet", "Step-down Transformer", "Weights"], 
            theory: "When a sonometer wire under tension is placed in the magnetic field of an electromagnet driven by an AC current, it vibrates with a frequency equal to twice the frequency of AC mains. Natural frequency f = (1/2L) * sqrt(T/m) = 2 * AC_frequency.", 
            procedure: [
              "Pass the sonometer wire over the pulleys and hang suitable weights to create a known tension.",
              "Place the electromagnet connected to a step-down transformer near the middle of the wire without touching it.",
              "Switch on the AC supply for the electromagnet.",
              "Place a small paper rider exactly midway between the bridges.",
              "Slide the bridges precisely until resonance is achieved and the paper rider vibrates violently and is thrown off.",
              "Measure the resonant length of the wire between the bridges.",
              "Observe variations with different tensions and calculate the AC frequency using the formula."
            ], 
            objectives: ["Determine electromagnetic resonance.", "Evaluate standing waves in a string."] 
          }
      }`;

const newChemistryLabs = `,
      {
          id: 'c5',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Permanganate Titration - Oxalic Acid', 
          description: 'Determine the strength of KMnO4 using oxalic acid.', 
          difficulty: 'Medium', 
          duration: '45 min', 
          category: 'Physical Chem',
          content: { 
            aim: "To determine the molarity/strength of given KMnO4 solution against a standard solution of Oxalic Acid.", 
            requirements: ["Burette", "Pipette", "KMnO4", "Oxalic Acid", "Dil H2SO4", "Conical flask", "Burner"], 
            theory: "This is a redox titration in acidic medium where KMnO4 acts as an oxidizing agent and oxalic acid as a reducing agent. The reaction requires heating (60-70°C). KMnO4 acts as a self-indicator.", 
            procedure: [
              "Prepare a standard solution of Oxalic Acid (e.g., M/20) and measure out exactly 20 mL into a conical flask using a pipette.",
              "Add one test tube full of dilute sulphuric acid (approx. 20 mL) to the conical flask.",
              "Heat the contents of the flask moderately to 60-70°C (steam just starting to rise).",
              "Fill the burette with the unknown KMnO4 solution and clamp it securely.",
              "Titrate the hot oxalic acid with KMnO4, swirling constantly, until a permanent pale pink color is attained.",
              "Note the final reading and repeat until concordant values are achieved.",
              "Calculate the molarity of KMnO4 using the molarity equation."
            ], 
            objectives: ["Perform heat-activated redox titration.", "Determine unknown molarity."] 
          }
      },
      {
          id: 'c6',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Permanganate Titration - Mohr\\'s Salt', 
          description: 'Determine the strength of KMnO4 using FAS.', 
          difficulty: 'Easy', 
          duration: '40 min', 
          category: 'Physical Chem',
          content: { 
            aim: "To determine the molarity/strength of given KMnO4 solution against a standard Ferrous Ammonium Sulphate (FAS/Mohr's Salt) solution.", 
            requirements: ["Burette", "Pipette", "KMnO4", "FAS", "Dil H2SO4", "Conical flask"], 
            theory: "This is a redox titration where Fe2+ (from FAS) is oxidized to Fe3+ by MnO4- in an acidic medium. Unlike oxalic acid, this reaction does not require heating.", 
            procedure: [
              "Prepare a standard solution of FAS.",
              "Pipette out 20 mL of the FAS standard solution into a clean conical flask.",
              "Add one test tube full (approx 20 mL) of dilute sulphuric acid directly to the solution.",
              "Fill the burette with KMnO4 solution.",
              "Titrate the FAS solution with KMnO4 continuously without heating.",
              "Stop at the first permanent appearance of a very pale pink color.",
              "Calculate the concentration using M1V1/n1 = M2V2/n2."
            ], 
            objectives: ["Redox titration without catalyst/heat.", "Use self-indicators."] 
          }
      },
      {
          id: 'c7',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Functional Group Test', 
          description: 'Identify functional groups in organic compounds.', 
          difficulty: 'Hard', 
          duration: '60 min', 
          category: 'Organic Chem',
          content: { 
            aim: "To identify the functional group present in the given unknown organic compound.", 
            requirements: ["Test tubes", "Organic samples", "Chemical reagents (2,4-DNP, Tollens, Fehling, Litmus, NaHCO3, FeCl3)"], 
            theory: "Different functional groups show characteristic chemical reactions. Examples: Carboxylic acids give effervescence with NaHCO3. Phenols give violet color with neutral FeCl3. Aldehydes give silver mirror with Tollen's reagent.", 
            procedure: [
              "Test for Unsaturation: Add Bromine water. If decolorized, the compound is unsaturated (alkene/alkyne).",
              "Test for Carboxyl (-COOH): Add NaHCO3 solution. Brisk effervescence signifies carboxylic acid.",
              "Test for Phenolic (-OH): Add neutral FeCl3. A violet or green coloration indicates phenol.",
              "Test for Carbonyl (>C=O): Add 2,4-DNP. A yellow/orange precipitate indicates aldehydes or ketones.",
              "Test for Aldehyde (-CHO): Perform Tollen's Test. A silver mirror formation on the test tube wall indicates an aldehyde.",
              "Test for Amino (-NH2): Perform carbylamine test or azo-dye test for aromatic amines."
            ], 
            objectives: ["Systematic organic qualitative analysis.", "Identify functional groups chemically."] 
          }
      },
      {
          id: 'c8',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Food Tests (Carbs, Proteins, Fats)', 
          description: 'Detect nutrients in food samples.', 
          difficulty: 'Easy', 
          duration: '35 min', 
          category: 'Biochemistry',
          content: { 
            aim: "To detect the presence of carbohydrates, proteins, and fats in the given food sample.", 
            requirements: ["Food extract", "Iodine solution", "Benedict's reagent", "Biuret reagents (CuSO4 and NaOH)", "Filter paper"], 
            theory: "Iodine tests for starch. Benedict's reagent tests for reducing sugars. Biuret test identifies peptide bonds (proteins). Translucent spot on paper indicates fats.", 
            procedure: [
              "Test for Starch: Add a few drops of iodine solution to the food extract. A blue-black color indicates starch.",
              "Test for Reducing Sugars: Boil the sample with Benedict's reagent. A brick-red precipitate denotes reducing sugars.",
              "Test for Proteins (Biuret Test): Add 2 mL of NaOH solution and a few drops of 1% CuSO4 to the protein solution. A violet/purple color indicates proteins.",
              "Test for Fats: Rub the solid food sample or place a drop of the liquid extract on a piece of filter paper. A translucent spot indicates fats."
            ], 
            objectives: ["Detect major macromolecules.", "Understand nutritional analysis."] 
          }
      },
      {
          id: 'c9',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Chemical Kinetics', 
          description: 'Effect of concentration on the rate of reaction between Sodium Thiosulphate and HCl.', 
          difficulty: 'Medium', 
          duration: '45 min', 
          category: 'Physical Chem',
          content: { 
            aim: "To study the effect of concentration on the rate of reaction between sodium thiosulphate and hydrochloric acid.", 
            requirements: ["Sodium Thiosulphate solution (0.1M)", "HCl (1M)", "Beakers", "Stopwatch", "Paper with a cross"], 
            theory: "The reaction between sodium thiosulphate and HCl produces a colloidal precipitation of sulphur which makes the solution opaque. The rate of the reaction is inversely proportional to the time taken for the cross mark beneath the beaker to disappear.", 
            procedure: [
              "Mark a bold black cross on a piece of clean white paper.",
              "Take 50 mL of 0.1M sodium thiosulphate solution in a beaker and place it on the cross.",
              "Add 5 mL of 1M HCl to the beaker and immediately start the stopwatch.",
              "Look through the solution carefully. Stop the watch exactly when the cross mark becomes completely invisible.",
              "Repeat the experiment by decreasing the concentration of sodium thiosulphate (e.g. 40mL solution + 10mL water, then 30mL + 20mL water) while keeping HCl constant.",
              "Plot a graph of concentration of sodium thiosulphate versus 1/time (Rate)."
            ], 
            objectives: ["Determine how reaction velocity changes with reactant molarity."] 
          }
      },
      {
          id: 'c10',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'pH Determination', 
          description: 'Measure pH of fruit juices and chemical solutions using pH paper / indicator.', 
          difficulty: 'Easy', 
          duration: '30 min', 
          category: 'Physical Chem',
          content: { 
            aim: "To determine the pH of various given solutions (acids, bases, salts, fruit juices) using pH paper or universal indicator solution.", 
            requirements: ["pH paper strips", "Universal Indicator", "Test tubes", "Various solutions (HCl, NaOH, Lemon juice, etc)"], 
            theory: "pH is a measure of the hydrogen ion concentration. The universal indicator exhibits varying colors across the pH range from 1 to 14, indicating whether a substance is highly acidic, neutral, or highly basic.", 
            procedure: [
              "Place a small drop of the given solution on a clean strip of pH indicator paper using a glass rod.",
              "Wait a few seconds for the color to develop fully.",
              "Compare the final color with the standard pH reference chart provided with the pH paper.",
              "Alternatively, add 2 drops of universal indicator to 5 mL of the solution in a test tube and compare the resulting color with the standard chart.",
              "Observe and record the pH values for all the provided solutions."
            ], 
            objectives: ["Accurately estimate pH.", "Distinguish between strong and weak acids/bases."] 
          }
      },
      {
          id: 'c11',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Preparation of Double Salts', 
          description: 'Crystallization of Potash Alum or Mohr\\'s salt.', 
          difficulty: 'Medium', 
          duration: '60 min', 
          category: 'Inorganic Chem',
          content: { 
            aim: "To prepare a pure sample of the double salt, Potash Alum (K2SO4.Al2(SO4)3.24H2O) or Mohr's Salt.", 
            requirements: ["Potassium sulphate", "Aluminium sulphate", "Beaker", "Glass rod", "Bunsen burner", "Funnel", "Filter paper"], 
            theory: "A double salt is an addition compound that contains two different salts crystallized together in equimolar proportions and exists only in the solid state.", 
            procedure: [
              "For Potash Alum: Weigh exact stoichiometric quantities of potassium sulphate and aluminium sulphate.",
              "Dissolve them in a minimum quantity of hot distilled water to get a saturated solution.",
              "Add a few drops of dilute sulphuric acid to prevent hydrolysis of aluminium sulphate.",
              "Filter the hot solution to remove insoluble impurities.",
              "Transfer the clear filtrate to an evaporating dish and concentrate by heating to the crystallization point (check with a glass rod).",
              "Allow the solution to cool slowly and undisturbed. Crystals of potash alum separate out.",
              "Filter, dry the crystals between folds of filter paper, and calculate the yield."
            ], 
            objectives: ["Understand crystallization techniques.", "Prepare inorganic addition compounds."] 
          }
      }`;

let updated = content;

// Replace for Physics
const physicsRegex = /(id:\s*'physics'[\s\S]*?labs:\s*\[[\s\S]*?)(\s*\]\s*\},)/;
if (physicsRegex.test(updated)) {
  updated = updated.replace(physicsRegex, `$1${newPhysicsLabs}$2`);
} else {
  console.log("Failed to find Physics insertion point");
}

// Replace for Chemistry
const chemistryRegex = /(id:\s*'chemistry'[\s\S]*?labs:\s*\[[\s\S]*?)(\s*\]\s*\},)/;
if (chemistryRegex.test(updated)) {
  updated = updated.replace(chemistryRegex, `$1${newChemistryLabs}$2`);
} else {
  console.log("Failed to find Chemistry insertion point");
}

fs.writeFileSync(FILE_PATH, updated, 'utf8');
console.log('Successfully injected Physics and Chemistry missing experiments!');

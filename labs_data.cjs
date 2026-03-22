const physics = [
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
          title: "Newton's Law of Cooling", 
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
      }
];

const chemistry = [
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
          title: "Permanganate Titration - Mohr's Salt", 
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
          title: "Preparation of Double Salts", 
          description: "Crystallization of Potash Alum or Mohr's salt.", 
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
      }
];

const bio = [
      {
          id: 'b13',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Compound Microscope', 
          description: 'Parts and working of a compound microscope.', 
          difficulty: 'Easy', 
          duration: '30 min', 
          category: 'Microscopy',
          content: { 
            aim: "To study the parts and working of a compound microscope.", 
            requirements: ["Compound Microscope", "Prepared slide", "Lens cleaning tissue"], 
            theory: "A compound microscope uses a system of multiple lenses (objective and eyepiece) to achieve high magnification of minute transparent objects.", 
            procedure: [
              "Identify the mechanical parts: base, pillar, inclination joint, arm, stage, body tube, coarse and fine adjustment knobs.",
              "Identify the optical parts: mirror, condenser, objective lenses (low and high power), and eyepiece.",
              "Place the microscope where there is sufficient indirect light.",
              "Adjust the mirror (concave side) while looking through the eyepiece to illuminate the field of view brightly.",
              "Place a prepared slide on the stage and secure it with the clips.",
              "Use the coarse adjustment knob to focus the object under low power.",
              "Carefully switch to high power and use only the fine adjustment knob to bring the image into sharp focus."
            ], 
            objectives: ["Proper handling of microscopes.", "Understand simple optics."] 
          }
      },
      {
          id: 'b14',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11', '2nd PUC / Class 12'], 
          title: 'Specimen Identification', 
          description: 'Identify common plant and animal specimens/slides.', 
          difficulty: 'Medium', 
          duration: '60 min', 
          category: 'Taxonomy',
          content: { 
            aim: "To identify and study various given specimens and prepared slides for spotting.", 
            requirements: ["Preserved specimens (e.g. Earthworm, Frog, Starfish)", "Prepared slides (e.g. Amoeba, T.S. of Dicot Stem)", "Microscope"], 
            theory: "Spotting involves careful observation of identifying morphological or anatomical features to classify an organism into its correct phylum and class.", 
            procedure: [
              "Observe each specimen/slide one by one for exactly 2 to 3 minutes.",
              "Note the macroscopic or microscopic distinct characteristics.",
              "Draw a neat, well-labeled diagram of the observed specimen.",
              "Identify the specimen and write its systematic position (classification).",
              "List at least two key characteristic features that justify the identification."
            ], 
            objectives: ["Improve observation skills.", "Learn animal/plant taxonomy."] 
          }
      },
      {
          id: 'b15',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: "Ganong's Potometer", 
          description: 'Measure the rate of transpiration.', 
          difficulty: 'Hard', 
          duration: '45 min', 
          category: 'Plant Physiology',
          content: { 
            aim: "To study the rate of transpiration in a leafy shoot using Ganong's potometer.", 
            requirements: ["Ganong's potometer", "Freshly cut leafy shoot", "Water", "Vaseline", "Stopwatch", "Beaker"], 
            theory: "Transpiration is the loss of water in the form of vapor from the aerial parts of a plant. A potometer effectively measures the rate of water uptake, which is almost equal to the rate of transpiration.", 
            procedure: [
              "Fill the potometer completely with water, ensuring no air bubbles are trapped.",
              "Cut a fresh leafy shoot under water to prevent air locking in the xylem.",
              "Fit the shoot into the rubber cork hole of the potometer tightly.",
              "Seal all joints with vaseline to make the apparatus completely airtight.",
              "Introduce a single air bubble into the capillary tube by lifting its bent end out of the water colored with eosin dye.",
              "Record the initial position of the air bubble on the graduated scale.",
              "Note the position of the bubble at regular intervals (e.g., every 5 minutes) as it moves along the scale.",
              "Calculate the rate of transpiration per unit time."
            ], 
            objectives: ["Understand water pull mechanism.", "Measure physiological rates."] 
          }
      },
      {
          id: 'b16',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Respiration in Seeds', 
          description: 'Demonstrate anaerobic or aerobic respiration in germinating seeds.', 
          difficulty: 'Medium', 
          duration: '40 min', 
          category: 'Plant Physiology',
          content: { 
            aim: "To demonstrate that CO2 is released during aerobic respiration by germinating seeds.", 
            requirements: ["Conical flask", "Germinating gram seeds", "Small test tube", "KOH solution", "Delivery tube", "Beaker containing water", "Rubber corks"], 
            theory: "Respiration is the metabolic process where organic substances are broken down to release energy. Germinating seeds respire actively, consuming O2 and releasing CO2. KOH absorbs the released CO2, creating a partial vacuum.", 
            procedure: [
              "Place about 20-30 germinating gram seeds in a conical flask.",
              "Suspend a small test tube containing 20% concentrated KOH solution inside the flask using a thread.",
              "Close the flask tightly with a one-holed rubber cork fitted with a bent glass delivery tube.",
              "Submerge the free end of the delivery tube into a beaker containing colored water.",
              "Ensure all joints are airtight using vaseline.",
              "Leave the setup undisturbed for an hour.",
              "Observe the rise of the colored water level in the delivery tube. The rise indicates that CO2 evolved was absorbed by KOH, reducing the pressure inside the flask."
            ], 
            objectives: ["Confirm byproducts of respiration.", "Demonstrate gas exchange."] 
          }
      },
      {
          id: 'b17',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Salivary Amylase Action', 
          description: 'Study the effect of temperature and pH on salivary amylase.', 
          difficulty: 'Medium', 
          duration: '45 min', 
          category: 'Biochemistry',
          content: { 
            aim: "To study the action of salivary amylase on starch and the effect of temperature on it.", 
            requirements: ["Test tubes", "Starch solution (1%)", "Saliva collection beaker", "Iodine solution", "Water bath", "Thermometer", "Spotting plate"], 
            theory: "Salivary amylase (ptyalin) is an enzyme that digests starch into maltose. Its activity is maximum at the optimum human body temperature (37°C) and optimum pH (6.8). High temperatures denature it.", 
            procedure: [
              "Rinse your mouth and collect about 2-3 mL of saliva in a beaker. Dilute it with 20 mL of distilled water to make a saliva solution.",
              "Take three identical test tubes and label them A, B, and C.",
              "Add 5 mL of 1% starch solution to each test tube.",
              "Place test tube A in ice (5°C), B in a water bath at 37°C, and C in boiling water (100°C) for 10 minutes.",
              "Add 1 mL of the diluted saliva solution to each test tube simultaneously and start the stopwatch.",
              "Every minute, take a drop from each test tube and mix it with a drop of iodine solution on a spotting plate.",
              "Continue taking drops until the mixture no longer gives a blue-black color with iodine (achromic point).",
              "Record the time taken for complete digestion of starch in each temperature condition."
            ], 
            objectives: ["Understand enzyme kinetics.", "Observe protein denaturation."] 
          }
      }
];

const math = [
      {
          id: 'm11',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Sets and Relations', 
          description: 'Visualize intersections, unions, and types of relations.', 
          difficulty: 'Easy', 
          duration: '30 min', 
          category: 'Algebra',
          content: { 
            aim: "To visualize concepts of sets, subsets, intersections, and unions using Venn diagrams, and construct equivalence relations.", 
            requirements: ["Graph paper", "Colored pencils", "Ruler", "Compass"], 
            theory: "Sets represented as circles (Venn diagrams) show logical relationships between collections. A relation R on A is an equivalence relation if it is reflexive (aRa), symmetric (aRb -> bRa), and transitive (aRb & bRc -> aRc).", 
            procedure: [
              "Draw a large rectangle to represent the Universal Set (U).",
              "Draw two intersecting circles, A and B, inside the rectangle.",
              "Color the region common to both circles to highlight A ∩ B.",
              "Draw a separate diagram tracing the entirety of both circles to highlight A ∪ B.",
              "Construct a set A = {1, 2, 3}. Define a relation R = {(1,1), (2,2), (3,3), (1,2), (2,1)}.",
              "Verify on paper that R is reflexive and symmetric, but check if it's transitive to deduce equivalence."
            ], 
            objectives: ["Build core set theory logic.", "Graphically process relations."] 
          }
      },
      {
          id: 'm12',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Complex Numbers Representation', 
          description: 'Plot complex numbers on an Argand plane.', 
          difficulty: 'Medium', 
          duration: '40 min', 
          category: 'Algebra',
          content: { 
            aim: "To plot complex numbers on an Argand plane and understand modulus and argument geometrically.", 
            requirements: ["Graph paper", "Protractor", "Ruler"], 
            theory: "A complex number z = x + iy is plotted as the point (x, y) on a Cartesian plane where the x-axis is real and the y-axis is imaginary. The distance from the origin is its modulus ||z||, and the angle it makes with the positive x-axis is its argument.", 
            procedure: [
              "Mark perpendicular X and Y axes on the graph paper. Label X as Real and Y as Imaginary.",
              "Take a complex number z1 = 3 + 4i. Plot the point P(3,4).",
              "Join the origin O(0,0) to P with a straight line.",
              "Measure the length of OP to find the modulus (should be 5).",
              "Use a protractor to measure the angle OP makes with the positive real axis (argument).",
              "Plot the conjugate z2 = 3 - 4i at Q(3,-4) and note its reflection over the Real axis.",
              "Geometrically add two complex numbers using the parallelogram law."
            ], 
            objectives: ["Geometric intuition for imaginary numbers.", "Visual arithmetic."] 
          }
      },
      {
          id: 'm13',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11', '2nd PUC / Class 12'], 
          title: 'Limits & Derivatives', 
          description: 'Visualize limits and tangents to curves.', 
          difficulty: 'Hard', 
          duration: '45 min', 
          category: 'Calculus',
          content: { 
            aim: "To demonstrate the concept of a limit converging to a point, and drawing tangents to show geometric derivation of a derivative at a point.", 
            requirements: ["Graph paper", "Ruler", "Curve stencils or string"], 
            theory: "The derivative of a function at a point geometrically represents the slope of the tangent line to the curve at that point. Limits approach an exact value as the independent variable approaches a target.", 
            procedure: [
              "Plot the graph of the function f(x) = x^2 on a graph paper.",
              "Choose a target point P(2,4) on the curve.",
              "Pick a point Q1(3,9) on the curve and draw a secant line joining P and Q1. Calculate its slope.",
              "Pick another point Q2(2.5, 6.25) closer to P and draw another secant line. Calculate its slope.",
              "Observe how the slope of the secant line approaches a limiting value as Q moves closer and closer to P.",
              "Draw the tangent exactly at P and measure its slope (the derivative, which is 4)."
            ], 
            objectives: ["Bridge algebra with geometry.", "Grasp first principles of calculus."] 
          }
      },
      {
          id: 'm14',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Linear Programming', 
          description: 'Solve an optimization LPP graphically.', 
          difficulty: 'Medium', 
          duration: '40 min', 
          category: 'Applied Math',
          content: { 
            aim: "To find the optimal (maximum or minimum) value of a linear objective function graphically subject to a set of linear inequalities.", 
            requirements: ["Graph paper", "Ruler"], 
            theory: "In linear programming, constraints form a convex polygon called the feasible region. By the Corner Point Theorem, the optimal solution for the objective function always lies at one of the vertices of this feasible region.", 
            procedure: [
              "Convert given inequality constraints into equations of lines (e.g., 2x + y = 104).",
              "Find the x and y intercepts for each line by setting y=0 and x=0 respectively.",
              "Plot the lines accurately on a graph paper.",
              "Determine the feasible region by checking which side of the line satisfies the inequality (using a test point like the origin).",
              "Shade the common region satisfied by all constraints.",
              "Identify all the corner points (vertices) of the shaded feasible polygon.",
              "Substitute the (x,y) coordinates of each corner point into the objective function Z = ax + by to find the max/min value."
            ], 
            objectives: ["Solve real-world optimization problems.", "Intersect lines graphically."] 
          }
      },
      {
          id: 'm15',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Differential Equations', 
          description: 'Explore slope fields and geometric solutions.', 
          difficulty: 'Hard', 
          duration: '35 min', 
          category: 'Calculus',
          content: { 
            aim: "To sketch a slope field (direction field) to visually represent the general solution to a first-order differential equation.", 
            requirements: ["Graph paper", "Ruler", "Pencil"], 
            theory: "A differential equation dy/dx = f(x,y) assigns a slope to every point (x,y) in the plane. A small line segment with that slope drawn at each point forms an array called a slope field, which reveals the general shape of solution curves.", 
            procedure: [
              "Consider a simple differential equation, like dy/dx = x - y.",
              "Set up a grid of points with integer coordinates from -3 to 3 on both axes.",
              "Select a point (e.g., (1,0)). Calculate the slope there: 1 - 0 = 1.",
              "At coordinate (1,0), draw a very short line segment with a slope of 1.",
              "Repeat this calculation and drawing for every point in the grid.",
              "Pick an initial condition, say y(0) = 1. Start at (0,1) and follow the direction of the surrounding little slopes to trace a continuous curve through the field.",
              "Observe the exponential relaxation behavior of the curve."
            ], 
            objectives: ["Visualize differential equations.", "Trace specific solutions."] 
          }
      }
];

const cs = [
      {
          id: 'cs11',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11', '2nd PUC / Class 12'], 
          title: 'Basic Array Operations', 
          description: 'Insert, Delete, and find frequency of elements.', 
          difficulty: 'Easy', 
          duration: '35 min', 
          category: 'Data Structures',
          content: { 
            aim: "To write a program to perform insertion, deletion, and frequency counting on a linear array.", 
            requirements: ["Computer", "C++ / Python / Java IDE"], 
            theory: "An array stores elements in contiguous memory. Inserting shifts following elements right. Deleting shifts succeeding elements left. Frequency counts occurrences of a specific target value by traversing.", 
            procedure: [
              "Declare an array of specific size and input 'n' initial elements into it.",
              "For Insertion: Take input for the element to insert and the position. Shift elements from 'n-1' down to the position one place right. Insert the element and increment 'n'.",
              "For Deletion: Take input for the position to delete. Shift elements from 'position+1' up to 'n-1' one place left. Decrement 'n'.",
              "For Frequency: Take input for the search element. Iterate from 0 to n-1. Each time the array element matches the search element, increment a counter.",
              "Output the modified array or the final count."
            ], 
            objectives: ["Understand memory shifts.", "Traverse basic collections."] 
          }
      },
      {
          id: 'cs12',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'HTML Forms & Timetables', 
          description: 'Create a semantic web page using HTML tables and inputs.', 
          difficulty: 'Medium', 
          duration: '45 min', 
          category: 'Web Development',
          content: { 
            aim: "To design a web page creating a study timetable using HTML tables and an admission form using form elements.", 
            requirements: ["Computer", "Text Editor (VS Code / Notepad)", "Web Browser"], 
            theory: "HTML structures standard web design. <table>, <tr>, <th>, <td> build grids. <form>, <input>, <select> gather user data. Attributes like rowspan and colspan merge table cells.", 
            procedure: [
              "Open an editor and write the basic HTML skeleton (<html>, <head>, <body>).",
              "To create the Timetable: Use the <table> tag. Add a border. Construct header rows for Days/Periods.",
              "Use <tr> for each day of the week, and <td> for the subjects. Use colspan='x' in a <td> to denote recess/break bridging multiple periods.",
              "To create the Form: Under a new heading, use the <form> tag.",
              "Add <input type='text'> for Name, <input type='radio'> for Gender, <input type='date'> for DOB, and <select> dropdowns for subjects/courses.",
              "Add a <input type='submit'> button to finalize the form interface.",
              "Save as .html and view in a browser to debug layout issues."
            ], 
            objectives: ["Build core web layout.", "Implement data ingestion UI."] 
          }
      },
      {
          id: 'cs13',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Object-Oriented Programming', 
          description: 'Implement Classes, Objects, and Inheritance.', 
          difficulty: 'Hard', 
          duration: '60 min', 
          category: 'Programming',
          content: { 
            aim: "To write an object-oriented program to demonstrate classes, objects, data encapsulation, and inheritance (single/multiple).", 
            requirements: ["Computer", "C++ / Python / Java IDE"], 
            theory: "OOP relies on 'objects' containing data and methods. Classes act as blueprints. Encapsulation hides data via private access specifiers. Inheritance allows a derived class to acquire properties of a base class.", 
            procedure: [
              "Define a base class 'Employee' with private data members for basic salary and name.",
              "Include public methods to set data, calculate gross salary (adding DA and HRA allowances), and display details.",
              "Create a derived class 'Manager' that inherits publicly from 'Employee'.",
              "Add additional data members in 'Manager' for bonus and team size.",
              "Override the display/calculate methods to include the bonus in the gross salary.",
              "In the main function, instantiate objects for the 'Manager' class and the generic 'Employee' class.",
              "Call the methods using the objects and observe how the derived object correctly utilizes base class properties."
            ], 
            objectives: ["Map real-world concepts to software.", "Architect scalable applications."] 
          }
      }
];

module.exports = { physics, chemistry, bio, math, cs };

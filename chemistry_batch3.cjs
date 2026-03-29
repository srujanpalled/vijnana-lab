const { injectData } = require('./inject_enhancements.cjs');
const batch = {
  "c9": {
    quizQuestions: [
      { id: 1, question: "The rate of a chemical reaction is defined as:", options: ["Change in color per unit time", "Change in concentration of reactant or product per unit time", "Change in temperature per unit time", "Change in mass per unit time"], correctIndex: 1 },
      { id: 2, question: "Which factor does NOT affect the rate of reaction?", options: ["Temperature", "Concentration", "Catalyst", "Molecular formula of product"], correctIndex: 3 },
      { id: 3, question: "Increasing temperature generally increases rate because:", options: ["It lowers activation energy", "It increases the fraction of molecules exceeding activation energy", "It changes the products", "It removes the catalyst"], correctIndex: 1 },
      { id: 4, question: "A catalyst increases the rate of reaction by:", options: ["Increasing concentration", "Providing an alternative pathway with lower activation energy", "Increasing temperature", "Increasing pressure"], correctIndex: 1 },
      { id: 5, question: "The unit of rate of reaction for a first-order reaction is:", options: ["mol L⁻¹", "s⁻¹", "mol L⁻¹ s⁻¹", "L mol⁻¹ s⁻¹"], correctIndex: 2 },
      { id: 6, question: "For the reaction 2A → B, if rate of disappearance of A is 0.1 mol/L/s, rate of appearance of B is:", options: ["0.1 mol/L/s", "0.2 mol/L/s", "0.05 mol/L/s", "0.01 mol/L/s"], correctIndex: 2 },
      { id: 7, question: "The reaction Na₂S₂O₃ + HCl produces a yellow turbidity due to:", options: ["Formation of NaCl", "Liberation of sulfur", "Formation of SO₂", "Release of H₂"], correctIndex: 1 },
      { id: 8, question: "Collision theory states reaction occurs when molecules collide with:", options: ["Any energy", "Sufficient energy and proper orientation", "Low speed", "No energy"], correctIndex: 1 },
      { id: 9, question: "Doubling the concentration of a reactant in a first-order reaction:", options: ["Doubles the rate", "Quadruples the rate", "Halves the rate", "No effect"], correctIndex: 0 },
      { id: 10, question: "The Arrhenius equation relates rate constant to:", options: ["Pressure", "Volume", "Temperature and activation energy", "Moles of product"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What is chemical kinetics?", answer: "The branch of chemistry that studies the rates and mechanisms of chemical reactions and the factors affecting them." },
      { question: "Differentiate between average rate and instantaneous rate.", answer: "Average rate is measured over a finite time interval, while instantaneous rate is measured at a specific moment using the slope of the tangent to the concentration-time curve." },
      { question: "What is activation energy?", answer: "The minimum energy that reacting molecules must possess for effective collisions to occur and form products." },
      { question: "How does surface area affect rate?", answer: "Increasing surface area (e.g., powdering a solid) exposes more reactant particles, increasing collision frequency and thus the rate." },
      { question: "What is the role of Na₂S₂O₃ in the rate experiment?", answer: "Sodium thiosulfate reacts with HCl to produce colloidal sulfur, whose appearance time is inversely proportional to the rate." },
      { question: "Why does the reaction appear faster at higher temperatures?", answer: "Higher temperatures increase molecular kinetic energy, so more molecules cross the activation energy barrier per unit time." },
      { question: "What is a rate law?", answer: "A mathematical expression showing how the rate depends on the concentration of reactants, each raised to an experimentally determined power (order)." },
      { question: "What is the order of a reaction?", answer: "The sum of the powers to which the concentration terms are raised in the rate law. It must be determined experimentally." },
      { question: "Can a catalyst change the equilibrium position?", answer: "No. A catalyst speeds up both forward and reverse reactions equally, reaching equilibrium faster without shifting it." },
      { question: "What is the half-life of a reaction?", answer: "The time required for the concentration of a reactant to decrease to exactly half its initial value." }
    ],
    realWorldApplications: [
      "Food Preservation: Refrigeration slows biochemical decay reactions in food by reducing molecular kinetic energy.",
      "Automobile Catalytic Converters: Platinum/palladium catalysts accelerate the conversion of toxic CO and NOx exhaust into harmless CO₂ and N₂.",
      "Pharmaceutical Shelf Life: Drug companies use rate studies to determine expiration dates by predicting decomposition rates at room temperature.",
      "Industrial Ammonia Synthesis (Haber Process): Optimizing temperature, pressure, and iron catalysts to maximize the rate of nitrogen fixation.",
      "Enzyme Kinetics in Biology: Understanding Michaelis-Menten kinetics helps design drugs that inhibit specific enzyme-catalyzed reactions.",
      "Combustion Engine Design: Engineers optimize fuel-air mixtures and compression ratios based on combustion reaction rate data."
    ]
  },
  "c10": {
    quizQuestions: [
      { id: 1, question: "Enthalpy of neutralization is defined for the formation of:", options: ["1 mole of salt", "1 mole of water from H⁺ and OH⁻", "1 mole of acid", "1 mole of base"], correctIndex: 1 },
      { id: 2, question: "The standard enthalpy of neutralization for a strong acid-strong base reaction is approximately:", options: ["-57.1 kJ/mol", "-100 kJ/mol", "+57.1 kJ/mol", "-13.7 kJ/mol"], correctIndex: 0 },
      { id: 3, question: "Neutralization is always:", options: ["Endothermic", "Exothermic", "Isothermal", "Adiabatic"], correctIndex: 1 },
      { id: 4, question: "Why is the enthalpy of neutralization of weak acid-strong base less than -57.1 kJ?", options: ["Weak acids are stronger", "Part of the heat is used to ionize the weak acid", "Temperature drops", "No water is formed"], correctIndex: 1 },
      { id: 5, question: "In the calorimetry setup, the polystyrene cup acts as:", options: ["A reactant", "An insulator to minimize heat loss", "A catalyst", "An indicator"], correctIndex: 1 },
      { id: 6, question: "The formula to calculate heat released is:", options: ["Q = mcΔT", "Q = PV", "Q = nRT", "Q = mv²/2"], correctIndex: 0 },
      { id: 7, question: "What is 'c' in the equation Q = mcΔT?", options: ["Concentration", "Specific heat capacity", "Molar mass", "Temperature"], correctIndex: 1 },
      { id: 8, question: "If 50 mL of 1M HCl is mixed with 50 mL of 1M NaOH and temperature rises by 6.8°C, the heat evolved is approximately (c=4.18 J/g/°C):", options: ["1.42 kJ", "2.84 kJ", "5.68 kJ", "0.28 kJ"], correctIndex: 1 },
      { id: 9, question: "The specific heat capacity of dilute aqueous solutions is assumed to be:", options: ["1.0 J/g/°C", "4.18 J/g/°C (same as water)", "2.0 J/g/°C", "10 J/g/°C"], correctIndex: 1 },
      { id: 10, question: "Hess's Law states that enthalpy change of a reaction is:", options: ["Dependent on the path taken", "Independent of the path, depending only on initial and final states", "Always zero", "Equal to activation energy"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is enthalpy?", answer: "A thermodynamic quantity representing the total heat content of a system at constant pressure (H = U + PV)." },
      { question: "Why do we use dilute solutions in this experiment?", answer: "So that the volume of water is large enough to assume the density and specific heat capacity are essentially those of pure water." },
      { question: "What assumptions are made in simple calorimetry?", answer: "No heat is lost to the surroundings, the specific heat capacity and density of solutions equal water, and mixing is instantaneous." },
      { question: "Why is the heat of neutralization of HF + NaOH different from HCl + NaOH?", answer: "HF is a weak acid; some energy is consumed in completely ionizing HF into H⁺ and F⁻, reducing the net heat evolved." },
      { question: "Define Hess's Law.", answer: "The total enthalpy change of a reaction is the same regardless of whether it occurs in one step or multiple steps, as enthalpy is a state function." },
      { question: "What is a calorimeter?", answer: "A device used to measure the heat released or absorbed during a chemical or physical process." },
      { question: "Why should you stir the solution continuously?", answer: "To ensure uniform mixing and homogeneous temperature distribution throughout the liquid for an accurate ΔT measurement." },
      { question: "What would happen if you used concentrated solutions?", answer: "The heat of dilution would add a significant extra exothermic contribution, distorting the true neutralization enthalpy value." },
      { question: "Can enthalpy of neutralization be positive?", answer: "No. Neutralization (H⁺ + OH⁻ → H₂O) is inherently exothermic, so ΔH is always negative." },
      { question: "What is the difference between enthalpy and internal energy?", answer: "Enthalpy includes the PV work term (H = U + PV), making it the relevant quantity for reactions at constant pressure." }
    ],
    realWorldApplications: [
      "Antacid Tablet Design: Pharmaceutical companies measure neutralization heat to ensure antacids safely neutralize excess stomach acid without thermal damage.",
      "Industrial Waste Neutralization: Chemical plants must carefully control heat release when neutralizing large volumes of acidic/basic wastewater.",
      "Battery Electrolyte Management: Understanding neutralization thermodynamics helps manage thermal runaway risks in lead-acid batteries.",
      "Agricultural Lime Application: Calculating exact amounts of lime needed to neutralize acidic soils without overheating the root zone.",
      "Chemical Reactor Design: Engineers use enthalpy data to design cooling systems preventing dangerous temperature spikes during large-scale neutralizations.",
      "Thermal Energy Storage: Some heating systems exploit the exothermic nature of neutralization to store and release thermal energy on demand."
    ]
  },
  "c11": {
    quizQuestions: [
      { id: 1, question: "Potash Alum has the chemical formula:", options: ["KAl(SO₄)₂·12H₂O", "NaAl(SO₄)₂·12H₂O", "K₂SO₄·Al₂O₃", "AlCl₃·6H₂O"], correctIndex: 0 },
      { id: 2, question: "Alum is classified as a:", options: ["Simple salt", "Double salt", "Complex salt", "Acid salt"], correctIndex: 1 },
      { id: 3, question: "The process of obtaining pure crystals from a hot saturated solution is called:", options: ["Distillation", "Crystallization", "Sublimation", "Evaporation"], correctIndex: 1 },
      { id: 4, question: "Why is the solution heated during preparation?", options: ["To decompose the salt", "To increase solubility and dissolve maximum solute", "To change pH", "To remove the solvent completely"], correctIndex: 1 },
      { id: 5, question: "The solution is filtered hot because:", options: ["Cold filtration takes too long", "Hot filtration removes insoluble impurities before crystallization", "Crystals dissolve in hot filter paper", "It prevents the filter from breaking"], correctIndex: 1 },
      { id: 6, question: "Slow cooling produces crystals that are:", options: ["Small and powdery", "Large and well-formed", "Amorphous", "Invisible"], correctIndex: 1 },
      { id: 7, question: "The 12H₂O in potash alum represents:", options: ["Free water", "Water of crystallization", "Heavy water", "Steam"], correctIndex: 1 },
      { id: 8, question: "Potash alum is commonly used in:", options: ["Nuclear reactors", "Water purification as a flocculating agent", "Rocket fuel", "Semiconductor manufacturing"], correctIndex: 1 },
      { id: 9, question: "The shape of potash alum crystals is:", options: ["Cubic", "Octahedral", "Hexagonal", "Needle-like"], correctIndex: 1 },
      { id: 10, question: "If the solution is cooled too rapidly, the crystals will be:", options: ["Large and shiny", "Small and impure", "Perfectly formed", "Nonexistent"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a double salt?", answer: "A salt formed by combining two simple salts that crystallize together in a fixed stoichiometric ratio but dissociate completely into individual ions in solution." },
      { question: "How does a double salt differ from a complex salt?", answer: "A double salt fully dissociates into all its constituent ions in solution, while a complex salt retains its complex ion structure in solution." },
      { question: "What is water of crystallization?", answer: "A fixed number of water molecules that are incorporated into the crystal lattice structure during crystallization, essential for maintaining the crystal shape." },
      { question: "Why do we add dilute H₂SO₄ during the preparation?", answer: "To prevent hydrolysis of aluminum sulfate and to maintain an acidic medium that promotes proper crystal formation." },
      { question: "What will happen if the alum is heated strongly?", answer: "It will lose its water of crystallization (become anhydrous/dehydrated), swell up (intumesce), and eventually decompose." },
      { question: "Why should the crystals be dried using filter paper and not by heating?", answer: "Heating would drive off the water of crystallization, destroying the crystal structure and changing the compound." },
      { question: "What is the role of K₂SO₄ in alum formation?", answer: "Potassium sulfate provides the K⁺ ions essential for forming the double salt crystal lattice with aluminum sulfate." },
      { question: "How do you test if the prepared salt is indeed potash alum?", answer: "Dissolve in water and test separately for K⁺ (flame test: lilac), Al³⁺ (lake test with litmus), and SO₄²⁻ (BaCl₂ white precipitate)." },
      { question: "What is a saturated solution?", answer: "A solution that contains the maximum amount of solute that can dissolve at a given temperature, with undissolved solute in equilibrium." },
      { question: "Why is crystallization preferred over simple evaporation for purification?", answer: "Crystallization yields pure, well-formed crystals because impurities remain dissolved in the mother liquor, while evaporation concentrates impurities alongside the product." }
    ],
    realWorldApplications: [
      "Municipal Water Purification: Alum is widely used as a coagulant to clump suspended particles together for easy removal by sedimentation.",
      "Dyeing and Textile Industry: Alum acts as a mordant, helping dyes bond permanently to fabric fibers for colorfast textiles.",
      "Paper Manufacturing: Used in paper sizing to control ink absorption and improve paper quality.",
      "Medicinal Styptic Pencils: Alum blocks are applied to minor cuts and shaving nicks to stop bleeding by constricting blood vessels.",
      "Leather Tanning: Alum helps preserve animal hides by cross-linking collagen fibers during the tanning process.",
      "Baking Powder Component: Certain baking powders contain alum as an acid component that reacts with baking soda to produce CO₂ for leavening."
    ]
  },
  "c12": {
    quizQuestions: [
      { id: 1, question: "A solution with pH 1 compared to pH 3 is:", options: ["100 times more acidic", "10 times more acidic", "2 times more acidic", "Equally acidic"], correctIndex: 0 },
      { id: 2, question: "The pH of pure water at 25°C is:", options: ["0", "7", "14", "1"], correctIndex: 1 },
      { id: 3, question: "Which solution has the highest [OH⁻]?", options: ["pH 2", "pH 7", "pH 10", "pH 13"], correctIndex: 3 },
      { id: 4, question: "A pH meter works by measuring:", options: ["Color change", "Electrical potential difference across a glass electrode", "Temperature", "Turbidity"], correctIndex: 1 },
      { id: 5, question: "Black coffee typically has a pH around:", options: ["2", "5", "7", "9"], correctIndex: 1 },
      { id: 6, question: "Household bleach has a pH of approximately:", options: ["1", "7", "10", "12-13"], correctIndex: 3 },
      { id: 7, question: "Adding a few drops of lemon juice to water will:", options: ["Increase pH", "Decrease pH", "Not change pH", "Make it neutral"], correctIndex: 1 },
      { id: 8, question: "Which indicator is suitable for measuring pH in the range 3.1-4.4?", options: ["Phenolphthalein", "Methyl orange", "Litmus", "Bromothymol blue"], correctIndex: 1 },
      { id: 9, question: "The pOH of a solution with pH 4 at 25°C is:", options: ["4", "7", "10", "14"], correctIndex: 2 },
      { id: 10, question: "Buffer solutions resist changes in pH upon addition of small amounts of:", options: ["Water only", "Acid or base", "Salt", "Indicator"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "Why is pH measured on a logarithmic scale?", answer: "Because H⁺ concentrations in solutions span many orders of magnitude (10⁰ to 10⁻¹⁴ M), and a logarithmic scale compresses this into a manageable 0-14 range." },
      { question: "What happens to the pH of water if CO₂ dissolves in it?", answer: "CO₂ reacts with water to form carbonic acid (H₂CO₃), releasing H⁺ ions and lowering the pH below 7." },
      { question: "What is the relationship between pH and pOH?", answer: "At 25°C, pH + pOH = 14 (derived from Kw = [H⁺][OH⁻] = 10⁻¹⁴)." },
      { question: "Why must a pH meter be calibrated before use?", answer: "To ensure accurate readings by adjusting the meter's response using standard buffer solutions of known pH values." },
      { question: "Can pH be negative or greater than 14?", answer: "Yes, for extremely concentrated strong acids (pH < 0) or bases (pH > 14), though the scale is conventionally 0-14 for dilute solutions." },
      { question: "What is an amphoteric substance?", answer: "A substance that can act as both an acid and a base (e.g., water, amino acids, aluminum hydroxide)." },
      { question: "How does temperature affect pH of pure water?", answer: "At higher temperatures, Kw increases, so [H⁺] increases slightly, making the neutral pH less than 7." },
      { question: "Give an example of a natural buffer system.", answer: "The bicarbonate buffer in blood (H₂CO₃/HCO₃⁻) maintains blood pH between 7.35 and 7.45." },
      { question: "What is the pH of 0.001 M HCl?", answer: "pH = -log(10⁻³) = 3, since HCl is a strong acid and fully dissociates." },
      { question: "Why do we not taste or touch chemicals to determine their pH?", answer: "Many acids and bases are corrosive and toxic; proper instruments or indicators must be used for safe and accurate measurement." }
    ],
    realWorldApplications: [
      "Blood Gas Analysis: Hospitals continuously monitor arterial blood pH to detect life-threatening acidosis or alkalosis conditions.",
      "Aquaculture Management: Fish farms maintain precise water pH to ensure optimal growth and prevent mass die-offs.",
      "Winemaking: Vintners control must pH to influence fermentation rates and final wine flavor profiles.",
      "Concrete Durability: Engineers test the pH of rain and groundwater to predict acid attack on concrete structures.",
      "Cosmetic Formulation: Skincare products are formulated at skin-compatible pH (~5.5) to maintain the acid mantle.",
      "Wastewater Treatment: Municipal plants adjust effluent pH to meet regulatory discharge standards before release into waterways."
    ]
  },
  "c13": {
    quizQuestions: [
      { id: 1, question: "The iodine test is used to detect the presence of:", options: ["Proteins", "Fats", "Starch", "Vitamins"], correctIndex: 2 },
      { id: 2, question: "Starch turns iodine solution:", options: ["Red", "Yellow", "Blue-Black", "Green"], correctIndex: 2 },
      { id: 3, question: "The Biuret test detects:", options: ["Sugars", "Proteins", "Lipids", "Nucleic acids"], correctIndex: 1 },
      { id: 4, question: "A positive Biuret test gives what color?", options: ["Blue", "Violet/Purple", "Yellow", "Red"], correctIndex: 1 },
      { id: 5, question: "Benedict's test is used to detect:", options: ["Starch", "Reducing sugars", "Proteins", "Fats"], correctIndex: 1 },
      { id: 6, question: "A positive Benedict's test shows a color change from blue to:", options: ["Green to Yellow to Orange-Red", "Purple", "Black", "Colorless"], correctIndex: 0 },
      { id: 7, question: "The emulsion test detects the presence of:", options: ["Starch", "Proteins", "Lipids/Fats", "Minerals"], correctIndex: 2 },
      { id: 8, question: "Vitamin C (ascorbic acid) can be tested using:", options: ["Iodine solution", "DCPIP (dichlorophenolindophenol) solution", "Benedict's solution", "Biuret reagent"], correctIndex: 1 },
      { id: 9, question: "DCPIP turns from blue to colorless in the presence of:", options: ["Starch", "Vitamin C", "Protein", "Fat"], correctIndex: 1 },
      { id: 10, question: "Adulteration in milk can be detected by testing for:", options: ["Excess water (lactometer), starch, detergent", "Only color", "Temperature", "Viscosity alone"], correctIndex: 0 }
    ],
    vivaQuestions: [
      { question: "Why is food analysis important?", answer: "To ensure food quality, detect adulterants, verify nutritional content, and ensure consumer safety." },
      { question: "How does the iodine-starch reaction work?", answer: "Iodine molecules slip into the helical structure of amylose in starch, forming a charge-transfer complex that absorbs all light except blue-black wavelengths." },
      { question: "What is adulteration?", answer: "The deliberate addition of inferior, harmful, or unauthorized substances to food products to increase volume or reduce cost." },
      { question: "What does a negative Benedict's test indicate?", answer: "The solution remains blue, indicating no reducing sugars (like glucose or fructose) are present." },
      { question: "How do you test for the presence of fats?", answer: "The emulsion test: dissolve the sample in ethanol, pour into water. A cloudy white emulsion indicates lipids." },
      { question: "Why is the Biuret test performed in alkaline conditions?", answer: "The peptide bonds in proteins must react with Cu²⁺ ions in an alkaline medium (NaOH) to form the characteristic violet-colored complex." },
      { question: "What common adulterant is added to turmeric powder?", answer: "Metanil yellow (a toxic synthetic dye) is commonly added to enhance the yellow color of turmeric." },
      { question: "How can you detect added water in milk?", answer: "Using a lactometer — adulterated milk has lower density and the lactometer reading drops below normal range." },
      { question: "Name the macronutrients detected in food analysis.", answer: "Carbohydrates (starch, sugars), proteins, and lipids (fats and oils)." },
      { question: "What is DCPIP and how does it work?", answer: "Dichlorophenolindophenol is a blue dye that acts as an oxidizing agent. Vitamin C (a reducing agent) reduces it, turning it colorless." }
    ],
    realWorldApplications: [
      "FDA and FSSAI Food Safety Labs: Government agencies routinely test commercial food samples for adulterants and nutritional claims verification.",
      "Hospital Dietetics: Clinical labs analyze patient meals to ensure therapeutic diets meet exact macronutrient requirements.",
      "Dairy Industry Quality Control: Every batch of milk is tested for fat content, added water, starch, and detergent before packaging.",
      "Sports Nutrition: Supplement companies verify protein content in powders using Kjeldahl/Biuret methods to match label claims.",
      "Forensic Toxicology: Analysts test food samples in poisoning cases to identify contaminants or toxins.",
      "School Nutrition Programs: Cafeteria food is periodically tested to verify it meets mandated nutritional standards for students."
    ]
  },
  "c14": {
    quizQuestions: [
      { id: 1, question: "Acetanilide is prepared by the acetylation of:", options: ["Acetic acid", "Aniline", "Phenol", "Ethanol"], correctIndex: 1 },
      { id: 2, question: "The acetylating agent commonly used is:", options: ["Glacial acetic acid", "Acetic anhydride", "Acetone", "Ethanol"], correctIndex: 1 },
      { id: 3, question: "Acetylation is a type of:", options: ["Addition reaction", "Substitution (acylation) reaction", "Elimination reaction", "Rearrangement reaction"], correctIndex: 1 },
      { id: 4, question: "The melting point of pure acetanilide is approximately:", options: ["50°C", "114°C", "180°C", "250°C"], correctIndex: 1 },
      { id: 5, question: "Why is zinc dust sometimes added during preparation?", options: ["As a catalyst", "To prevent oxidation of aniline", "To increase yield", "To change color"], correctIndex: 1 },
      { id: 6, question: "Acetanilide is also known as:", options: ["N-phenylacetamide", "N-methylaniline", "Benzamide", "Acetaldehyde"], correctIndex: 0 },
      { id: 7, question: "The product is purified by:", options: ["Distillation", "Recrystallization from hot water", "Sublimation", "Chromatography"], correctIndex: 1 },
      { id: 8, question: "The functional group present in acetanilide is:", options: ["-OH", "-NH₂", "-NHCOCH₃ (amide)", "-COOH"], correctIndex: 2 },
      { id: 9, question: "During the reaction, the immediate byproduct evolved is:", options: ["Water or Acetic acid", "CO₂", "H₂", "NH₃"], correctIndex: 0 },
      { id: 10, question: "Acetanilide was historically used as a:", options: ["Fertilizer", "Fever reducer (antipyretic)", "Fuel additive", "Bleaching agent"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is acetylation?", answer: "The process of introducing an acetyl group (CH₃CO-) into a molecule, typically replacing an active hydrogen atom." },
      { question: "Why is aniline acetylated in organic chemistry labs?", answer: "To protect the highly reactive -NH₂ group during further reactions, and to demonstrate nucleophilic substitution on amines." },
      { question: "What is recrystallization?", answer: "A purification technique where a solid is dissolved in a hot solvent, filtered, then slowly cooled to form pure crystals while impurities remain dissolved." },
      { question: "Why is glacial acetic acid sometimes used instead of acetic anhydride?", answer: "It can serve as both the acetylating agent and solvent, though the reaction is slower and requires refluxing." },
      { question: "How do you confirm the purity of the prepared acetanilide?", answer: "By measuring its melting point — pure acetanilide melts sharply at 114°C. A broad melting range indicates impurities." },
      { question: "What is the role of the reflux condenser during preparation?", answer: "To prevent the loss of volatile reactants by condensing vapors and returning them to the reaction flask." },
      { question: "Why was acetanilide replaced by paracetamol in medicine?", answer: "Acetanilide caused methemoglobinemia (toxic side effect reducing oxygen transport in blood), while paracetamol (its metabolite) is safer." },
      { question: "What type of bond is formed between aniline and the acetyl group?", answer: "An amide bond (C-N bond with C=O), making acetanilide a secondary amide." },
      { question: "Why is the crude product washed with cold water?", answer: "To remove water-soluble impurities like excess acetic acid and unreacted aniline hydrochloride." },
      { question: "What is the significance of the melting point in organic chemistry?", answer: "It serves as a key identity and purity criterion — pure compounds have sharp, characteristic melting points." }
    ],
    realWorldApplications: [
      "Pharmaceutical Intermediate: Acetanilide serves as a precursor for synthesizing paracetamol (acetaminophen) and other analgesic drugs.",
      "Rubber Vulcanization: Used as an accelerator and stabilizer in the industrial processing of rubber products.",
      "Dye Manufacturing: Acts as an intermediate in the production of various azo dyes and pigments.",
      "Photography: Historically used as an inhibitor in hydrogen peroxide solutions used in photographic development.",
      "Organic Synthesis Teaching: Serves as one of the fundamental preparatory experiments teaching acetylation, reflux, and recrystallization techniques.",
      "Industrial Cellulose Processing: Used in the manufacture of cellulose lacquers and varnishes as a plasticizer component."
    ]
  },
  "c15": {
    quizQuestions: [
      { id: 1, question: "Mohr's salt has the chemical formula:", options: ["FeSO₄·(NH₄)₂SO₄·6H₂O", "FeSO₄·7H₂O", "Fe₂(SO₄)₃", "NH₄Cl·FeCl₃"], correctIndex: 0 },
      { id: 2, question: "Mohr's salt is classified as a:", options: ["Complex salt", "Double salt", "Normal salt", "Acid salt"], correctIndex: 1 },
      { id: 3, question: "The crystals of Mohr's salt are:", options: ["White cubic", "Light green monoclinic", "Blue triclinic", "Yellow hexagonal"], correctIndex: 1 },
      { id: 4, question: "Why is dilute H₂SO₄ added during dissolution?", options: ["To speed up crystallization", "To prevent hydrolysis and oxidation of Fe²⁺", "To act as indicator", "To reduce temperature"], correctIndex: 1 },
      { id: 5, question: "The solution must be concentrated by:", options: ["Rapid boiling", "Slow evaporation on a water bath", "Freezing", "Adding more solute"], correctIndex: 1 },
      { id: 6, question: "The number of water molecules of crystallization in Mohr's salt is:", options: ["4", "6", "7", "12"], correctIndex: 1 },
      { id: 7, question: "Mohr's salt is preferred as a primary standard because:", options: ["It is expensive", "It is resistant to aerial oxidation unlike FeSO₄", "It is a strong oxidizer", "It has no water of crystallization"], correctIndex: 1 },
      { id: 8, question: "The cation present that gives Mohr's salt its green color is:", options: ["NH₄⁺", "Fe²⁺", "Fe³⁺", "SO₄²⁻"], correctIndex: 1 },
      { id: 9, question: "Crystallization should ideally be done by:", options: ["Rapid cooling in ice", "Slow, undisturbed cooling at room temperature", "Heating to dryness", "Adding ethanol"], correctIndex: 1 },
      { id: 10, question: "Mohr's salt is named after:", options: ["Karl Friedrich Mohr, a German chemist", "Max Planck", "Dmitri Mendeleev", "Antoine Lavoisier"], correctIndex: 0 }
    ],
    vivaQuestions: [
      { question: "Why is Mohr's salt more stable than plain ferrous sulfate?", answer: "The presence of ammonium sulfate in the crystal lattice stabilizes Fe²⁺ ions against oxidation to Fe³⁺ by atmospheric oxygen." },
      { question: "What is the difference between a double salt and a mixed salt?", answer: "A double salt dissociates completely into its constituent ions in solution, while a mixed salt contains two different cations or anions within the same crystal." },
      { question: "How do you determine the yield percentage?", answer: "Yield % = (Actual mass of crystals obtained / Theoretical maximum mass) × 100." },
      { question: "Why should the crystals not be dried in a hot oven?", answer: "High temperature will drive off the 6 molecules of water of crystallization, converting it to an anhydrous powder and changing its composition." },
      { question: "What happens if excess acid is added?", answer: "Excess acid increases solubility and prevents proper crystallization, reducing yield." },
      { question: "How do you test for the presence of Fe²⁺ in the prepared salt?", answer: "Add potassium ferricyanide solution — a deep blue (Turnbull's blue) precipitate confirms Fe²⁺." },
      { question: "What is the mother liquor?", answer: "The residual solution left after crystals have separated during crystallization, containing dissolved impurities." },
      { question: "Why must equal molar quantities of FeSO₄ and (NH₄)₂SO₄ be used?", answer: "Because Mohr's salt has a 1:1 stoichiometric ratio of these two salts, and deviation reduces purity." },
      { question: "Can Mohr's salt be used to standardize KMnO₄?", answer: "Yes, it is one of the most common primary standards used to accurately determine the concentration of KMnO₄ solutions." },
      { question: "What is efflorescence? Does Mohr's salt show it?", answer: "Efflorescence is the spontaneous loss of water of crystallization on exposure to dry air. Mohr's salt is slightly efflorescent." }
    ],
    realWorldApplications: [
      "Analytical Chemistry Standard: Used globally as a reliable primary standard for standardizing potassium permanganate and dichromate solutions.",
      "Water Treatment Analysis: Employed in determining dissolved oxygen levels and chemical oxygen demand in water quality testing.",
      "Photography: Historically used in photographic developers and iron-based printing processes like cyanotype.",
      "Fertilizer Quality Testing: Used as a reference standard when analyzing the iron content of agricultural fertilizers.",
      "Electroplating Industry: Acts as a source of ferrous ions in iron electroplating baths for coating metal surfaces.",
      "Teaching Laboratory Essential: One of the fundamental preparatory experiments in every senior secondary and undergraduate chemistry curriculum worldwide."
    ]
  }
};
injectData('chemistry', batch);

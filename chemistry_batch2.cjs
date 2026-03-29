const { injectData } = require('./inject_enhancements.cjs');

const chemistryBatch2 = {
  // --- c6: KMnO4 Titration (Redox) ---
  "c6": {
    quizQuestions: [
      { id: 1, question: "In a KMnO4 titration against Mohr's salt, KMnO4 acts as a:", options: ["Reducing agent", "Self-indicator and Oxidizing agent", "Catalyst", "Standard base"], correctIndex: 1 },
      { id: 2, question: "The oxidation state of Manganese (Mn) in KMnO4 is:", options: ["+2", "+5", "+7", "+4"], correctIndex: 2 },
      { id: 3, question: "Why is dilute H2SO4 added to the flask before titration?", options: ["To prevent hydration of the salt", "To provide the acidic medium required for full reduction of MnO4- to Mn2+", "To act as an indicator", "To neutralize the solution"], correctIndex: 1 },
      { id: 4, question: "What acts as the auto-indicator in this reaction?", options: ["Phenolphthalein", "Mohr's salt", "KMnO4 itself", "Dilute acid"], correctIndex: 2 },
      { id: 5, question: "The endpoint color change is specifically:", options: ["Pink to Colorless", "Colorless to Permanent Pale Pink", "Blue to Red", "Yellow to Green"], correctIndex: 1 },
      { id: 6, question: "Why do we avoid using HCl instead of H2SO4 to acidify the solution?", options: ["HCl is too weak", "HCl reacts with KMnO4 to evolve poisonous chlorine gas, wasting the titrant", "HCl forms a precipitate", "HCl changes the endpoint color"], correctIndex: 1 },
      { id: 7, question: "What is the equivalent weight of KMnO4 in an acidic medium? (Molecular weight = M)", options: ["M / 1", "M / 3", "M / 5", "M / 7"], correctIndex: 2 },
      { id: 8, question: "Mohr's salt is a double salt consisting of:", options: ["Ferrous sulfate and Ammonium sulfate", "Copper sulfate and Iron sulfate", "Sodium chloride and Potassium chloride", "Zinc sulfate and Ammonium nitrate"], correctIndex: 0 },
      { id: 9, question: "The active reducing ion in Mohr's salt is:", options: ["Fe3+", "NH4+", "SO42-", "Fe2+"], correctIndex: 3 },
      { id: 10, question: "When heating oxalic acid before titration with KMnO4, the required temperature is approximately:", options: ["0°C", "25°C", "60-70°C", "100°C (Boiling)"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What distinguishes a redox titration from an acid-base titration?", answer: "A redox titration involves the explicit transfer of electrons (simultaneous oxidation and reduction) rather than the transfer of protons (H+)." },
      { question: "What is a 'self-indicator'?", answer: "A titrant, like deeply purple KMnO4, whose own reduction/oxidation naturally generates a distinct, highly visible color change at the exact equivalence point without needing any external chemical dye." },
      { question: "Why is Mohr's salt preferred over pure Ferrous Sulfate as a primary standard?", answer: "Ferrous sulfate crystals readily oxidize in air to Ferric sulfate. Mohr's salt strongly resists air oxidation, acting as a stable, highly reliable primary standard weighing solid." },
      { question: "Why do we add Concentrated Sulfuric Acid while initially preparing the Mohr's salt solution?", answer: "To completely prevent the spontaneous hydrolysis of the delicate ferrous ions (Fe2+) into dense brown, insoluble Ferric Hydroxide (Fe(OH)3)." },
      { question: "In the presence of KMnO4, what exactly gets oxidized in Mohr's salt?", answer: "The Iron(II) cation (Fe2+) loses an electron to forcibly become the Iron(III) cation (Fe3+)." },
      { question: "If the pale pink color disappears after 30 seconds at the endpoint, is the titration complete?", answer: "No. The incredibly slow atmospheric reduction of the remaining unreacted MnO4- eventually consumes the pink color. The true endpoint is reached when the pale pink tint stubbornly persists for at least one full minute." },
      { question: "Why must Oxalic Acid be aggressively heated before titrating, unlike Mohr's salt?", answer: "The reaction between oxalic acid and KMnO4 is exceptionally sluggish at room temperature. Heating it provides the kinetic activation energy necessary to speed up the process to measurable levels." },
      { question: "What acts as the 'auto-catalyst' in the Oxalic-KMnO4 reaction?", answer: "The produced Mn2+ ions actively catalyze and accelerate their own continuous reaction." },
      { question: "Why can't Nitric Acid (HNO3) be used to provide the acidic medium?", answer: "Nitric acid is a brutally strong oxidizing agent itself. It will unfairly compete with the KMnO4 and oxidize the reducing agent, completely ruining the stoichiometric calculations." },
      { question: "If 5 moles of electrons are transferred per mole of KMnO4 in acid, what is its normality compared to its molarity?", answer: "Its Normality is precisely 5 times its Molarity (N = 5M)." }
    ],
    realWorldApplications: [
      "Water Purification Plants: Directly measuring and eliminating highly toxic, dissolved organic matter and iron/manganese impurities in commercial drinking water via powerful oxidation.",
      "Metallurgical Ore Analysis: Ascertaining the exact percentage of reactive iron mathematically present within crushed hematite and magnetite rock samples.",
      "Food Expiration Testing: Determining the precise remaining concentration of active Vitamin C (ascorbic acid) inside aging fruit juices via potent redox titrations.",
      "Wastewater Management (COD): Calculating the Chemical Oxygen Demand of raw sewage by chemically oxidizing the massive sludge payloads using strong oxidizers before discharging it.",
      "Bleaching Agent Manufacturing: Quantifying the absolute reactive strength of active chlorine compounds synthesized for use in industrial paper bleaching.",
      "Clinical Diagnostics (Historic): Formerly used to analyze exact sugar or calcium concentrations in human blood and urine before the invention of digital spectrometers."
    ]
  },

  // --- c7: Qualitative Analysis — Cations ---
  "c7": {
    quizQuestions: [
      { id: 1, question: "The Group Reagent for Group II cations (Pb2+, Cu2+, As3+) is:", options: ["Dilute HCl", "H2S gas in the presence of dilute HCl", "NH4OH and NH4Cl", "Ammonium carbonate"], correctIndex: 1 },
      { id: 2, question: "Adding purely NH4OH along with NH4Cl precipitates which specific Group III cations?", options: ["Ba2+, Sr2+, Ca2+", "Co2+, Ni2+, Mn2+, Zn2+", "Fe3+, Al3+, Cr3+", "Na+, K+"], correctIndex: 2 },
      { id: 3, question: "When performing a flame test, a brilliant 'Apple Green' flame confirms:", options: ["Calcium", "Strontium", "Barium", "Potassium"], correctIndex: 2 },
      { id: 4, question: "A pure 'Crimson Red' flame test definitively indicates:", options: ["Sodium", "Strontium", "Copper", "Lithium"], correctIndex: 1 },
      { id: 5, question: "To uniquely detect the Ammonium ion (NH4+), the salt is directly heated with Strong NaOH to release:", options: ["Chlorine gas", "Ammonia gas", "Carbon Dioxide", "Hydrogen Sulfide"], correctIndex: 1 },
      { id: 6, question: "During the exact confirmation of Lead (Pb2+), adding Potassium Chromate (K2CrO4) instantly yields what color precipitate?", options: ["Black", "White", "Bright Yellow", "Red"], correctIndex: 2 },
      { id: 7, question: "The 'Prussian Blue' complex mathematically formed when testing Iron (Fe3+) requires adding:", options: ["Potassium Ferrocyanide", "Dimethylglyoxime", "Barium chloride", "Silver nitrate"], correctIndex: 0 },
      { id: 8, question: "Adding Dimethylglyoxime (DMG) to Nickel (Ni2+) universally produces a stunning:", "options": ["Yellow solution", "Rosy Red / Cherry Red precipitate", "Dark Blue precipitate", "White gelatinous precipitate"], correctIndex: 1 },
      { id: 9, question: "For Aluminum (Al3+), a white gelatinous precipitate forms which is bizarrely soluble in an excess of:", "options": ["Water", "NaOH", "HCl", "H2S"], correctIndex: 1 },
      { id: 10, question: "Group IV cations are strongly precipitated by pumping H2S gas into:", "options": ["A strongly acidic medium", "A neutral water medium", "A strongly ammoniacal (basic) medium", "A pure alcohol solution"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What fundamentally dictates the exact grouping of cations in Qualitative Salt Analysis?", answer: "The concept of Solubility Product (Ksp). Cations with extremely low Ksp values precipitate easily first (Group I), while those with higher Ksp require much higher concentrations of the precipitating agent (Group IV)." },
      { question: "Why must Group II be rigorously precipitated in an explicitly acidic medium (dilute HCl)?", answer: "The H+ ions from HCl strongly suppress the ionization of the weak acid H2S via the Common Ion Effect. This allows only extremely low concentrations of S2- ions, ensuring that only the highly insoluble Group II sulfides (like CuS) precipitate without accidentally dropping Group IV sulfides." },
      { question: "Why do we completely boil off the toxic H2S gas after finishing Group II and before starting Group III?", answer: "If left inside, the remaining H2S will instantly react with the alkaline NH4OH added in Group III, drastically precipitating Group IV cations prematurely, completely ruining the sequential analysis." },
      { question: "What is the critical chemical role of Nitric Acid (Concentrated HNO3) before attempting Group III?", answer: "During the earlier H2S bubbling, any Iron(III) was brutally reduced to Iron(II). The HNO3 forcibly oxidizes all the Fe2+ back into Fe3+ so it can properly precipitate as a distinct red-brown Hydroxide in Group III." },
      { question: "How do you systematically distinguish between a Calcium and Barium salt?", answer: "By adding Potassium Chromate to the exactly neutralized solution. Barium yields an immediate heavy yellow precipitate, whereas Calcium remains completely soluble." },
      { question: "If the Ammonium (Zero Group) test with NaOH yields a pungent 'urinal' gas, how do you chemically confirm it is Ammonia?", answer: "By holding a glass rod dipped deeply in Concentrated Hydrochloric Acid (HCl) directly near the mouth of the test tube. Thick, dense white fumes of Ammonium Chloride (NH4Cl) will instantly erupt." },
      { question: "Why is Sodium (Na+) notoriously never precipitated in any of the massive groups?", answer: "Sodium (along with Potassium) compounds are almost perfectly soluble in all typical aqueous laboratory reagents. Thus, it can only be detected via its intense Golden-Yellow flame test." },
      { question: "What precisely is Nessler's Reagent and exactly what does it detect?", answer: "It is an alkaline solution of Potassium Tetraiodomercurate(II). It is exquisitely sensitive, turning a bold brown/yellow selectively indicating even trace amounts of the Ammonium (NH4+) cation." },
      { question: "Explain the Lake Test definitively used for Aluminum.", answer: "The aluminum hydroxide precipitate physically absorbs the blue 'litmus' dye compound, separating perfectly from the colorless liquid below, looking exactly like a distinct 'blue lake' floating inside the test tube." },
      { question: "Why do we fiercely rub the platinum wire against the concentrated HCl before every single flame test?", answer: "To vaporize and obliterate any trace metallic impurities from previous users. The wire must impart absolutely 'no color' initially to ensure the reading is genuinely from your specific salt." }
    ],
    realWorldApplications: [
      "Clinical Blood Analysis: Hospitals meticulously quantifying exact Sodium, Potassium, and Calcium cation balances to diagnose severe patient dehydration or organ failure.",
      "Environmental Heavy Metal Detection: Rapidly uncovering lethal Lead (Pb2+) or Cadmium traces secretly poisoning municipal municipal pipelines and community drinking reservoirs.",
      "Industrial Electroplating Solutions: Technicians confirming the exact Copper (Cu2+) or Nickel (Ni2+) concentrations inside massive chemical baths preventing defective metallic coatings.",
      "Agriculture and Soil Management: Systematically measuring absolutely vital Zinc, Iron, and Magnesium nutrient cations present within commercial fertilizers.",
      "Criminal Forensic Science: Toxicologists searching for undetectable Arsenic (As3+) exactly within exhumed skeletal tissues during historical murder investigations.",
      "Pharmaceutical Purity Control: FDA inspectors forcing drug batches through grueling qualitative tests looking for heavy metal contaminants like Barium or Lead."
    ]
  },

  // --- c8: Qualitative Analysis — Anions ---
  "c8": {
    quizQuestions: [
      { id: 1, question: "When treating an unknown salt with Dilute Sulfuric Acid, vigorous effervescence of a colorless, odorless gas points solidly to:", options: ["Chloride", "Carbonate (CO3 2-)", "Nitrate", "Sulfate"], correctIndex: 1 },
      { id: 2, question: "A gas possessing a distinct 'Rotten Egg' smell strongly indicates the presence of the radical:", options: ["Sulfite", "Acetate", "Sulfide (S 2-)", "Nitrite"], correctIndex: 2 },
      { id: 3, question: "Adding Concentrated Sulfuric Acid heavily evolves a pungent Reddish-Brown gas. This proves the radical is:", options: ["Nitrate or Bromide", "Chloride initially", "Carbonate", "Sulfate"], correctIndex: 0 },
      { id: 4, question: "What explicitly confirms the presence of an Acetate (CH3COO-) ion?", options: ["The Apple-Green flame", "The distinct smell of commercial vinegar upon aggressive rubbing or gentle acid heating", "A deep blue precipitate", "Effervescence of Ammonia"], correctIndex: 1 },
      { id: 5, question: "The specific 'Chromyl Chloride' test definitively identifies which critical anion?", options: ["Bromide", "Phosphate", "Chloride (Cl-)", "Iodide"], correctIndex: 2 },
      { id: 6, question: "If the Brown Ring test produces a highly stable complex [Fe(H2O)5(NO)]2+, the unknown salt is certainly a:", options: ["Nitrite", "Carbonate", "Sulfate", "Nitrate (NO3-)"], correctIndex: 3 },
      { id: 7, question: "Adding Barium Chloride universally triggers a thick white precipitate permanently insoluble in any acid if the anion is:", options: ["Chloride", "Sulfate (SO4 2-)", "Phosphate", "Nitrate"], correctIndex: 1 },
      { id: 8, question: "When checking an unknown Iodide (I-) visually with Silver Nitrate (AgNO3), it instantly yields:", options: ["A bright yellow precipitate perfectly completely insoluble in NH4OH", "A white precipitate that dissolves easily", "A completely clear reaction", "A violent explosion"], correctIndex: 0 },
      { id: 9, question: "A completely 'Vinegar' scented salt fiercely mixed with neutral FeCl3 yields what diagnostic color?", options: ["Deep Blood Red coloration", "Bright Neon Green", "Solid Black", "Pure White"], correctIndex: 0 },
      { id: 10, question: "If Silver Nitrate heavily creates a curdy white precipitate completely soluble in Ammonium Hydroxide, the anion is undeniably:", options: ["A Bromide", "An Iodide", "A loose Chloride", "A fixed Sulfate"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What radically distinguishes the Dilute Acid group from the Concentrated Acid group of anions?", answer: "Dilute acids exclusively decompose the wildly unstable conjugate bases of incredibly weak acids (like Carbonates and Sulfides). Concentrated acids brutally attack and decompose the much stronger salts (like pure Chlorides, Bromides, and tough Nitrates) yielding identifiable corrosive gases." },
      { question: "During the initial Carbonate analysis, why do we pass the evolved 'colorless' gas precisely through Limewater?", answer: "The evolved Carbon Dioxide powerfully reacts purely with the Calcium Hydroxide (limewater) to mathematically yield incredibly insoluble chalky Calcium Carbonate, visually turning the entire transparent liquid completely 'milky'." },
      { question: "What causes the milky Limewater to suddenly miraculously turn clear again if you relentlessly bubble CO2 through it continuously?", answer: "The extreme excess of CO2 aggressively converts the insoluble Calcium Carbonate strictly into highly soluble Calcium Bicarbonate, dissolving the chalk effortlessly back into a clear state." },
      { question: "Describe the underlying chemistry driving the universally critical Chromyl Chloride test.", answer: "Heating a solid suspected Chloride salt violently with Solid Potassium Dichromate (K2Cr2O7) and pure concentrated Sulfuric Acid chemically creates vaporous Chromyl Chloride (CrO2Cl2). This intensely red gas, when forcibly captured inside NaOH, turns purely yellow—a reaction uniquely impossible for Bromides or Iodides." },
      { question: "Why is the critical 'Brown Ring' test never performed immediately inside an aggressively hot test tube?", answer: "The delicate iron-nitroso coordination complex forming the actual 'brown ring' is exceptionally unstable thermally. Any intense heat violently shatters the complex, releasing the NO gas prematurely and completely destroying the test's visual evidence." },
      { question: "How does the intensely pungent NO2 brown gas from Nitrates drastically differ from the identical NO2 brown gas produced by Nitrites?", answer: "Nitrites are incredibly unstable and will immediately release the brutal brown gas using weak Dilute acids even when cold. Nitrates are vastly more stable and demand boiling Concentrated Sulfuric acid plus physical copper turnings to finally break down into NO2." },
      { question: "What does the extreme 'Lead Acetate Paper' test definitively prove?", answer: "Exposing chemically moist Lead Acetate paper heavily to a foul Rotten-Egg gas (H2S) immediately generates black Lead Sulfide (PbS), physically turning the entire pure white paper visibly black, confirming the 'Sulfide' radical." },
      { question: "What explicitly differentiates an ordinary Bromide from a heavy Iodide regarding pure Concentrated Sulfuric Acid?", answer: "While a Bromide purely yields exclusively Reddish-Brown Bromine vapors, the massive Iodide atom oxidizes powerfully releasing deep, haunting Violet/Purple fumes of elemental Iodine that dramatically stain starch paper distinctly blue/black." },
      { question: "Why must you rigorously eliminate all traces of the initial interfering Sulfides before mathematically starting the exact Sulfate precipitation?", answer: "Because leaving random dissolved sulfides inside will recklessly precipitate purely black Barium Sulfide, completely masking the exact bright-white Barium Sulfate results entirely making identification completely impossible." },
      { question: "Explain precisely what the exact 'Phosphomolybdate' test proves.", answer: "Boiling the exact acid solution of a rare Phosphate intensely with Ammonium Molybdate violently creates an exceedingly heavy, bright Canary-Yellow crystalline precipitate, perfectly confirming the crucial Phosphate." }
    ],
    realWorldApplications: [
      "Water Supply Disinfection: Systematically running exact Chloride anion mass tests heavily to measure exactly how much active bleach and lethal chlorine definitively remains inside massive public drinking pipelines.",
      "Gunpowder and Explosives Identification: Forensic departments isolating and measuring extreme exact Nitrate or localized Chlorate anion residues deeply embedded inside burned clothing threads after violent explosive detonations.",
      "Environmental Acid Rain Analysis: Scientists precisely checking exact Sulfate (SO4 2-) and toxic Nitrate (NO3-) atmospheric wash-down concentrations secretly destroying vulnerable mountain lakes.",
      "Global Nutritional Supplements: Validating the exact active presence of pure essential Iodide (I-) anions chemically added into global retail table-salt explicitly avoiding global thyroid failures.",
      "Marine Biology Maintenance: Relentlessly checking the exceedingly dangerous invisible Nitrite (NO2-) and lethal Ammonia exact levels actively killing fish within massively expensive recirculating aquaculture commercial fish-farms.",
      "Baking and Commercial Cooking: Verifying the incredibly exact active concentrations of strong Carbonates specifically required inside dense pastry baking powders guaranteeing the explicit necessary physical rising lift."
    ]
  }
};

injectData('chemistry', chemistryBatch2);

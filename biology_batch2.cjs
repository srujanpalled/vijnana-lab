const { injectData } = require('./inject_enhancements.cjs');
const batch = {
  "b4": {
    quizQuestions: [
      { id: 1, question: "Benedict's solution is used to test for:", options: ["Proteins", "Reducing sugars", "Lipids", "Starch"], correctIndex: 1 },
      { id: 2, question: "A positive Benedict's test shows color change from blue to:", options: ["Green/Yellow/Orange-Red", "Purple", "Black", "Clear"], correctIndex: 0 },
      { id: 3, question: "Glucose in urine may indicate:", options: ["Dehydration", "Diabetes mellitus", "Kidney stones", "Anemia"], correctIndex: 1 },
      { id: 4, question: "Normal urine does NOT contain:", options: ["Water", "Urea", "Glucose", "Sodium chloride"], correctIndex: 2 },
      { id: 5, question: "The kidneys regulate blood sugar by:", options: ["Producing insulin", "Reabsorbing glucose in nephrons (up to a threshold)", "Destroying glucose", "Storing glucose"], correctIndex: 1 },
      { id: 6, question: "The renal threshold for glucose is approximately:", options: ["80 mg/dL", "180 mg/dL", "300 mg/dL", "50 mg/dL"], correctIndex: 1 },
      { id: 7, question: "Which reducing sugar is primarily found in diabetic urine?", options: ["Sucrose", "Glucose", "Fructose", "Lactose"], correctIndex: 1 },
      { id: 8, question: "The copper in Benedict's reagent is reduced from:", options: ["Cu⁺ to Cu²⁺", "Cu²⁺ to Cu⁺ (forming Cu₂O precipitate)", "Cu to Cu²⁺", "Cu²⁺ to Cu⁰"], correctIndex: 1 },
      { id: 9, question: "Non-reducing sugars like sucrose must first be:", options: ["Heated to 500°C", "Hydrolyzed by acid to yield reducing sugars before testing", "Dissolved in oil", "Mixed with proteins"], correctIndex: 1 },
      { id: 10, question: "A green/yellow result in Benedict's test indicates:", options: ["High sugar", "Low/trace sugar", "No sugar", "Protein presence"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a reducing sugar?", answer: "A sugar with a free aldehyde or ketone group that can reduce oxidizing agents like Cu²⁺ in Benedict's reagent." },
      { question: "Why does glucose appear in urine during diabetes?", answer: "Blood glucose exceeds the renal threshold (~180 mg/dL), overwhelming the kidney's reabsorption capacity." },
      { question: "What is the chemical basis of Benedict's test?", answer: "Reducing sugars reduce Cu²⁺ (blue) to Cu₂O (copper(I) oxide, brick-red/orange precipitate) in alkaline conditions." },
      { question: "Name the components of Benedict's reagent.", answer: "Copper sulfate, sodium citrate, and sodium carbonate dissolved in water." },
      { question: "Why is heating required in Benedict's test?", answer: "Heat provides activation energy for the reduction reaction between the sugar and copper ions." },
      { question: "What is glycosuria?", answer: "The presence of glucose in urine, typically indicating diabetes mellitus or renal tubular dysfunction." },
      { question: "Can Benedict's test distinguish between different sugars?", answer: "No, it only confirms the presence of any reducing sugar; specific identification requires other tests like chromatography." },
      { question: "What is the normal pH of urine?", answer: "Around 4.5 to 8.0, with an average of about 6.0 (slightly acidic)." },
      { question: "Why is early morning urine preferred for testing?", answer: "It is more concentrated, increasing the likelihood of detecting abnormal substances present in small amounts." },
      { question: "What other conditions besides diabetes can cause glycosuria?", answer: "Pregnancy, stress, renal tubular defects, Cushing's syndrome, and certain medications." }
    ],
    realWorldApplications: [
      "Clinical Diabetes Screening: Urine glucose testing strips are widely used as an initial, non-invasive screen for diabetes in clinics.",
      "Gestational Diabetes Monitoring: Pregnant women routinely have urine tested for glucose to detect gestational diabetes early.",
      "Sports Medicine: Athletes monitor urine composition to assess hydration status and metabolic health during training.",
      "Veterinary Diagnostics: Urine sugar tests are used to diagnose diabetes in pets and livestock animals.",
      "Public Health Surveys: Mass urine screening programs in developing countries identify undiagnosed diabetes in populations.",
      "Pharmaceutical Drug Trials: Urine glucose monitoring helps assess the efficacy of new anti-diabetic medications."
    ]
  },
  "b5": {
    quizQuestions: [
      { id: 1, question: "Paper chromatography separates substances based on:", options: ["Size only", "Charge only", "Differential adsorption and partition between stationary and mobile phases", "Color only"], correctIndex: 2 },
      { id: 2, question: "The stationary phase in paper chromatography is:", options: ["The solvent", "Water trapped in filter paper fibers", "The glass plate", "Air"], correctIndex: 1 },
      { id: 3, question: "Rf value is defined as:", options: ["Distance moved by solute / Distance moved by solvent front", "Distance of solvent / Distance of spot", "Mass of solute / Volume of solvent", "Color intensity / Time"], correctIndex: 0 },
      { id: 4, question: "An Rf value is always between:", options: ["0 and 100", "0 and 1", "-1 and 1", "1 and 10"], correctIndex: 1 },
      { id: 5, question: "The solvent used in plant pigment chromatography is typically:", options: ["Pure water", "A mixture of petroleum ether and acetone", "Hydrochloric acid", "Mercury"], correctIndex: 1 },
      { id: 6, question: "The green pigment in leaves is:", options: ["Carotene", "Xanthophyll", "Chlorophyll", "Anthocyanin"], correctIndex: 2 },
      { id: 7, question: "In ascending chromatography, the solvent moves:", options: ["Downward", "Upward by capillary action", "Horizontally", "In a spiral"], correctIndex: 1 },
      { id: 8, question: "The origin line on chromatography paper is drawn with:", options: ["Ink pen", "Pencil (graphite doesn't dissolve)", "Marker", "Crayon"], correctIndex: 1 },
      { id: 9, question: "The pigment that travels farthest (highest Rf) in plant extract is:", options: ["Chlorophyll b", "Chlorophyll a", "Xanthophyll", "Carotene"], correctIndex: 3 },
      { id: 10, question: "Paper chromatography was first developed by:", options: ["Watson and Crick", "Martin and Synge", "Mendel", "Darwin"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is the principle of chromatography?", answer: "Separation of components based on their differential partitioning between a mobile phase and a stationary phase." },
      { question: "Why should the origin line not be submerged in solvent?", answer: "If the sample spots are submerged, the substances will dissolve directly into the solvent pool rather than being carried up by capillary action." },
      { question: "What determines the Rf value of a substance?", answer: "Its relative affinity for the stationary phase versus the mobile phase — more soluble substances in the mobile phase travel farther." },
      { question: "Can two different substances have the same Rf value?", answer: "Yes, in a given solvent system. This is why different solvent systems or 2D chromatography may be needed for definitive identification." },
      { question: "Name the four main plant pigments separated by chromatography.", answer: "Carotene (yellow-orange), xanthophyll (yellow), chlorophyll a (blue-green), and chlorophyll b (yellow-green)." },
      { question: "Why is carotene the fastest-moving pigment?", answer: "Carotene is the most non-polar pigment, so it has the highest affinity for the non-polar organic mobile phase and least for the polar stationary phase." },
      { question: "What is the role of the chromatography chamber/jar?", answer: "To create a closed environment saturated with solvent vapor, ensuring uniform solvent movement and preventing edge effects." },
      { question: "How is chromatography used in forensics?", answer: "To analyze ink compositions on questioned documents, identify drugs and poisons, and separate dyes from fibers." },
      { question: "What is two-dimensional chromatography?", answer: "Running the chromatogram in one direction, rotating 90°, and running it again in a different solvent to achieve better separation of complex mixtures." },
      { question: "How do you make spots visible if they are colorless?", answer: "Using UV light, iodine vapor exposure, or spraying with specific chemical reagents like ninhydrin for amino acids." }
    ],
    realWorldApplications: [
      "Forensic Document Analysis: Identifying forged documents by comparing Rf values of different ink formulations.",
      "Drug Testing in Sports: Separating and identifying banned substances from athlete urine samples using advanced chromatographic methods.",
      "Food Industry Quality Control: Detecting artificial dyes, additives, and contaminants in processed food products.",
      "Environmental Monitoring: Analyzing pesticide residues in water and soil samples to assess pollution levels.",
      "Pharmaceutical Quality Assurance: Verifying purity and identity of drug compounds during manufacturing.",
      "Botanical Research: Studying the pigment composition of different plant species to understand photosynthetic adaptations."
    ]
  },
  "b6": {
    quizQuestions: [
      { id: 1, question: "Pollen germination occurs on the:", options: ["Anther", "Stigma", "Filament", "Sepal"], correctIndex: 1 },
      { id: 2, question: "The tube that grows from the pollen grain is called:", options: ["Root hair", "Pollen tube", "Style", "Ovule"], correctIndex: 1 },
      { id: 3, question: "Pollen germination in vitro requires:", options: ["Soil and water", "Sucrose solution and boric acid", "Hydrochloric acid", "Ethanol"], correctIndex: 1 },
      { id: 4, question: "The role of sucrose in the germination medium is to:", options: ["Kill bacteria", "Provide osmotic balance and energy", "Stain the pollen", "Dissolve the pollen wall"], correctIndex: 1 },
      { id: 5, question: "Boric acid in the medium helps:", options: ["Color the pollen", "Promote pollen tube growth by aiding sugar translocation", "Kill fungi", "Reduce pH"], correctIndex: 1 },
      { id: 6, question: "The male gametes in a pollen grain are called:", options: ["Eggs", "Sperm cells (generative nuclei)", "Guard cells", "Companion cells"], correctIndex: 1 },
      { id: 7, question: "The pollen tube enters the ovule through the:", options: ["Chalaza", "Micropyle", "Funicle", "Integument"], correctIndex: 1 },
      { id: 8, question: "The optimal concentration of sucrose for pollen germination is:", options: ["1%", "5-10%", "50%", "0.1%"], correctIndex: 1 },
      { id: 9, question: "The outermost tough layer of a pollen grain is called:", options: ["Intine", "Exine", "Tapetum", "Endothecium"], correctIndex: 1 },
      { id: 10, question: "Germination percentage is calculated as:", options: ["(Germinated pollen / Total pollen) × 100", "Total pollen / Germinated pollen", "Tube length × Width", "Time taken × Pollen count"], correctIndex: 0 }
    ],
    vivaQuestions: [
      { question: "What is pollen germination?", answer: "The process by which a pollen grain produces a pollen tube after landing on a compatible stigma or in a suitable artificial medium." },
      { question: "Why is boric acid added to the medium?", answer: "Boron plays a crucial role in pollen tube elongation by facilitating pectin synthesis and sugar transport across cell membranes." },
      { question: "What is double fertilization?", answer: "A unique angiosperm process where one sperm fuses with the egg (forming the zygote) and the other fuses with polar nuclei (forming the triploid endosperm)." },
      { question: "Why do we use a hanging drop method?", answer: "It allows observation of pollen tube growth over time while preventing the slide from drying out." },
      { question: "What factors affect pollen germination rate?", answer: "Temperature, humidity, sucrose concentration, pH, boron availability, and pollen viability." },
      { question: "What is the function of the pollen tube?", answer: "To deliver the two male gametes from the pollen grain to the embryo sac inside the ovule for fertilization." },
      { question: "Why is the exine layer resistant?", answer: "It is composed of sporopollenin, one of the most chemically resistant biopolymers known, protecting the genetic material." },
      { question: "What is self-incompatibility?", answer: "A genetic mechanism preventing self-fertilization where the stigma rejects pollen from the same plant." },
      { question: "Which plant flowers are commonly used for this experiment?", answer: "Impatiens, Vinca (periwinkle), maize, or lily flowers because they produce abundant, viable pollen." },
      { question: "What happens if sucrose concentration is too high?", answer: "Exosmosis occurs, dehydrating the pollen grain and inhibiting or preventing tube emergence." }
    ],
    realWorldApplications: [
      "Plant Breeding Programs: Assessing pollen viability and germination rates is essential for successful cross-pollination in crop improvement.",
      "Fruit Production: Commercial orchards test pollen germination to ensure adequate pollination for maximum fruit set.",
      "Allergy Research: Understanding pollen biology helps develop treatments and forecasting models for seasonal allergies.",
      "Forensic Palynology: Pollen analysis helps forensic scientists link suspects to crime scenes based on pollen traces.",
      "Conservation Biology: Testing pollen viability of endangered plant species is crucial for seed bank preservation efforts.",
      "Agricultural Biotechnology: Genetic modification of pollen characteristics aims to improve crop yields and disease resistance."
    ]
  },
  "b7": {
    quizQuestions: [
      { id: 1, question: "DNA is extracted from cells using:", options: ["Only water", "A lysis buffer containing detergent, salt, and enzymes", "Acid alone", "UV light"], correctIndex: 1 },
      { id: 2, question: "The detergent in DNA extraction disrupts:", options: ["DNA backbone", "Cell and nuclear membranes (lipid bilayers)", "Sugar-phosphate bonds", "Hydrogen bonds in DNA"], correctIndex: 1 },
      { id: 3, question: "DNA precipitates out of solution when cold:", options: ["Water is added", "Ethanol or isopropanol is layered on top", "Salt is removed", "HCl is added"], correctIndex: 1 },
      { id: 4, question: "The white, stringy material visible during DNA extraction is:", options: ["Protein", "Cellulose", "Precipitated DNA fibers", "Starch"], correctIndex: 2 },
      { id: 5, question: "Salt (NaCl) is added to the lysis buffer to:", options: ["Flavor the solution", "Neutralize charges on DNA and remove histone proteins", "Dissolve DNA", "Kill bacteria"], correctIndex: 1 },
      { id: 6, question: "Meat tenderizer or protease is added to:", options: ["Break down DNA", "Degrade proteins bound to DNA", "Add color", "Increase DNA yield"], correctIndex: 1 },
      { id: 7, question: "Which fruits are commonly used for DNA extraction?", options: ["Citrus only", "Strawberries, bananas, onions, peas", "Coconuts", "Peppers"], correctIndex: 1 },
      { id: 8, question: "Strawberries are ideal because they are:", options: ["Red in color", "Octoploid (8 copies of each chromosome = lots of DNA)", "Seedless", "Acidic"], correctIndex: 1 },
      { id: 9, question: "DNA is insoluble in:", options: ["Water", "Saline solution", "Cold alcohol/ethanol", "Buffer solution"], correctIndex: 2 },
      { id: 10, question: "The structure of DNA was discovered by:", options: ["Mendel", "Watson and Crick", "Darwin", "Pasteur"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is the chemical composition of DNA?", answer: "DNA is a polymer of nucleotides, each consisting of a deoxyribose sugar, a phosphate group, and one of four nitrogenous bases (A, T, G, C)." },
      { question: "Why must the alcohol be ice-cold?", answer: "Cold temperature reduces the solubility of DNA in the alcohol layer, promoting faster and more complete precipitation." },
      { question: "What is the role of the lysis buffer?", answer: "It disrupts cell membranes (detergent breaks lipid bilayers), denatures proteins (salt), and releases cellular contents including DNA." },
      { question: "Why do we gently swirl rather than shake vigorously?", answer: "Vigorous shaking fragments the long, delicate DNA strands into small pieces that are difficult to collect." },
      { question: "How can you confirm the extracted material is DNA?", answer: "By the Dische diphenylamine test (blue color), UV absorbance at 260 nm, or gel electrophoresis." },
      { question: "What is the difference between DNA and RNA?", answer: "DNA is double-stranded with deoxyribose sugar and thymine; RNA is single-stranded with ribose sugar and uracil." },
      { question: "Why use a cheesecloth or filter?", answer: "To remove large cellular debris (cell wall fragments, organelle remnants) while allowing the dissolved DNA to pass through." },
      { question: "What are histones?", answer: "Proteins around which DNA is tightly wound in eukaryotic chromosomes; salt and protease help remove them during extraction." },
      { question: "Can DNA be extracted from cooked food?", answer: "Only partially — cooking denatures and fragments DNA, making extraction very difficult." },
      { question: "What is gel electrophoresis?", answer: "A technique using an electric field to separate DNA fragments by size through an agarose gel matrix." }
    ],
    realWorldApplications: [
      "Criminal Forensics: DNA extraction from crime scene evidence (blood, hair, saliva) enables suspect identification through DNA fingerprinting.",
      "Paternity Testing: DNA extraction and analysis conclusively establish biological relationships between individuals.",
      "Medical Diagnostics: Extracting patient DNA enables genetic testing for hereditary diseases like cystic fibrosis and sickle cell anemia.",
      "Agriculture (GMO Testing): DNA extraction from food products verifies whether they contain genetically modified organisms.",
      "Ancient DNA Research: Paleogenomics extracts DNA from fossils to study extinct species like mammoths and Neanderthals.",
      "Personalized Medicine: Patient DNA analysis guides doctors in prescribing the most effective medications based on genetic profiles."
    ]
  },
  "b8": {
    quizQuestions: [
      { id: 1, question: "Mendel's Law of Segregation states that:", options: ["Traits blend together", "Alleles separate during gamete formation", "All traits are linked", "Mutation is random"], correctIndex: 1 },
      { id: 2, question: "A monohybrid cross ratio in F2 generation is:", options: ["1:1", "3:1", "9:3:3:1", "1:2:1"], correctIndex: 1 },
      { id: 3, question: "A dihybrid cross ratio in F2 generation is:", options: ["3:1", "1:1", "9:3:3:1", "1:2:1"], correctIndex: 2 },
      { id: 4, question: "An organism with two identical alleles is:", options: ["Heterozygous", "Homozygous", "Hemizygous", "Polyploid"], correctIndex: 1 },
      { id: 5, question: "A test cross involves crossing with a:", options: ["Heterozygous dominant", "Homozygous dominant", "Homozygous recessive", "F1 hybrid"], correctIndex: 2 },
      { id: 6, question: "The physical appearance of an organism is its:", options: ["Genotype", "Phenotype", "Karyotype", "Genome"], correctIndex: 1 },
      { id: 7, question: "Mendel chose pea plants because they:", options: ["Were expensive", "Had long generation time", "Had clear contrasting characters and allowed controlled pollination", "Were poisonous"], correctIndex: 2 },
      { id: 8, question: "The Law of Independent Assortment applies to genes on:", options: ["The same chromosome", "Different chromosomes", "Mitochondrial DNA", "Linked genes"], correctIndex: 1 },
      { id: 9, question: "In incomplete dominance, the F1 phenotype is:", options: ["Same as dominant parent", "Same as recessive parent", "Intermediate between both parents", "Lethal"], correctIndex: 2 },
      { id: 10, question: "Mendel is known as the:", options: ["Father of Evolution", "Father of Genetics", "Father of Taxonomy", "Father of Biochemistry"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What are alleles?", answer: "Alternative forms of a gene occupying the same locus on homologous chromosomes, coding for different versions of a trait." },
      { question: "Explain dominance with an example.", answer: "In pea plants, the allele for tallness (T) is dominant over dwarf (t). In Tt, only the tall phenotype is expressed." },
      { question: "What is a Punnett Square?", answer: "A grid diagram used to predict the genotypic and phenotypic ratios of offspring from a genetic cross." },
      { question: "What are the seven traits Mendel studied?", answer: "Seed shape, seed color, pod shape, pod color, flower color, flower position, and plant height." },
      { question: "What is co-dominance?", answer: "When both alleles express fully in the heterozygote, like AB blood group where both A and B antigens are present." },
      { question: "Distinguish between genotype and phenotype.", answer: "Genotype is the genetic makeup (e.g., Tt), while phenotype is the observable characteristic (e.g., tall)." },
      { question: "Why was Mendel's work not recognized initially?", answer: "His mathematical approach was ahead of its time, chromosomes were unknown, and his paper was published in a relatively obscure journal." },
      { question: "What is a back cross?", answer: "Crossing an F1 offspring with either parent. When crossed with the homozygous recessive parent, it becomes a test cross." },
      { question: "Explain pleiotropy.", answer: "When a single gene affects multiple phenotypic traits, like the sickle cell gene affecting blood cells, spleen function, and resistance to malaria." },
      { question: "What is the chromosomal basis of Mendel's laws?", answer: "Alleles are located on chromosomes; segregation occurs during meiosis I (anaphase I), and independent assortment occurs due to random orientation of bivalents." }
    ],
    realWorldApplications: [
      "Genetic Counseling: Predicting inheritance patterns of genetic disorders like cystic fibrosis or sickle cell disease for prospective parents.",
      "Selective Crop Breeding: Applying Mendelian principles to develop high-yield, disease-resistant crop varieties.",
      "Animal Husbandry: Breeding livestock for desired traits like milk production, wool quality, or disease resistance.",
      "Forensic Genetics: Understanding inheritance patterns helps in DNA profiling and paternity determination.",
      "Pharmacogenomics: Predicting drug responses based on genetic inheritance patterns for personalized medicine.",
      "Conservation Genetics: Managing breeding programs for endangered species to maintain genetic diversity."
    ]
  },
  "b9": {
    quizQuestions: [
      { id: 1, question: "A pedigree chart uses circles to represent:", options: ["Males", "Females", "Carriers", "Deceased individuals"], correctIndex: 1 },
      { id: 2, question: "Squares in a pedigree chart represent:", options: ["Females", "Males", "Unknown sex", "Twins"], correctIndex: 1 },
      { id: 3, question: "A horizontal line connecting a circle and square indicates:", options: ["Siblings", "Mating/Marriage", "Parent-child", "Cousins"], correctIndex: 1 },
      { id: 4, question: "An autosomal recessive trait typically skips:", options: ["No generations", "One or more generations", "Only males", "Only females"], correctIndex: 1 },
      { id: 5, question: "Color blindness is an example of:", options: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Y-linked"], correctIndex: 2 },
      { id: 6, question: "A filled/shaded symbol in a pedigree indicates:", options: ["Carrier", "Affected individual", "Dead individual", "Healthy individual"], correctIndex: 1 },
      { id: 7, question: "If a trait appears in every generation, it is likely:", options: ["Recessive", "Dominant", "Lethal", "Sex-linked"], correctIndex: 1 },
      { id: 8, question: "A carrier is an individual who:", options: ["Shows the disease", "Is heterozygous and phenotypically normal", "Is homozygous dominant", "Has no alleles for the trait"], correctIndex: 1 },
      { id: 9, question: "Hemophilia is more common in males because:", options: ["Males are weaker", "The gene is on the X chromosome and males have only one X", "Males have two Y chromosomes", "Females are immune"], correctIndex: 1 },
      { id: 10, question: "A consanguineous marriage (between relatives) increases risk of:", options: ["Dominant diseases", "Autosomal recessive disorders", "X-linked diseases only", "No health effects"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a pedigree chart?", answer: "A family tree diagram showing the inheritance pattern of a specific trait or disease across multiple generations." },
      { question: "How do you identify autosomal dominant inheritance?", answer: "The trait appears in every generation, affected individuals have at least one affected parent, and it affects both sexes equally." },
      { question: "How do you identify autosomal recessive inheritance?", answer: "The trait often skips generations, unaffected parents can have affected children, and both sexes are equally affected." },
      { question: "What is a proband?", answer: "The individual through whom the family comes to medical attention, typically the first affected person identified in the pedigree." },
      { question: "Why are X-linked recessive traits more common in males?", answer: "Males have only one X chromosome (XY), so a single recessive allele on the X will be expressed. Females need two copies." },
      { question: "Give an example of autosomal dominant disorder.", answer: "Huntington's disease, Marfan syndrome, or achondroplasia (dwarfism)." },
      { question: "What does a half-shaded symbol represent?", answer: "A carrier — an individual who carries one copy of a recessive allele but does not express the disease phenotypically." },
      { question: "Can pedigree analysis predict the exact genotype?", answer: "Not always definitively, but it can determine the most probable genotypes and calculate risk probabilities." },
      { question: "What is genetic anticipation?", answer: "A phenomenon where a genetic disorder becomes more severe or appears at an earlier age in successive generations." },
      { question: "How are twins represented in a pedigree?", answer: "By lines from a single point — identical twins share a horizontal bar connecting them, fraternal twins do not." }
    ],
    realWorldApplications: [
      "Genetic Counseling Clinics: Geneticists construct pedigrees to advise families about risks of inherited conditions like Huntington's disease.",
      "Royal Family Studies: Historical pedigrees traced hemophilia through European royal families descended from Queen Victoria.",
      "Rare Disease Diagnosis: Pedigree analysis helps identify inheritance patterns of ultra-rare genetic disorders.",
      "Livestock Breeding Records: Pedigree charts track desirable genetic traits in thoroughbred horses and purebred dogs.",
      "Prenatal Screening: Families with known genetic conditions use pedigree data to make informed reproductive decisions.",
      "Population Genetics Research: Large-scale pedigrees help researchers study the spread of genetic variants through communities."
    ]
  },
  "b10": {
    quizQuestions: [
      { id: 1, question: "The quadrat method is commonly used to estimate:", options: ["Animal speed", "Plant population density", "Water pH", "Soil temperature"], correctIndex: 1 },
      { id: 2, question: "Population density is expressed as:", options: ["Number of individuals per unit area", "Total mass of organisms", "Height of organisms", "Color distribution"], correctIndex: 0 },
      { id: 3, question: "A quadrat is typically:", options: ["A glass beaker", "A square frame of known area (e.g., 1m²)", "A microscope slide", "A test tube"], correctIndex: 1 },
      { id: 4, question: "Random sampling is important because:", options: ["It saves time", "It eliminates bias in data collection", "It only counts large organisms", "It is cheaper"], correctIndex: 1 },
      { id: 5, question: "Frequency in ecological studies refers to:", options: ["Sound waves", "How often a species occurs across sample units", "Speed of growth", "Color intensity"], correctIndex: 1 },
      { id: 6, question: "The formula for density is:", options: ["Total number of individuals / Total area sampled", "Mass / Volume", "Number × Area", "Height / Width"], correctIndex: 0 },
      { id: 7, question: "Which sampling method is best for mobile animals?", options: ["Quadrat", "Capture-recapture (Lincoln-Petersen method)", "Line transect only", "Point count only"], correctIndex: 1 },
      { id: 8, question: "Species richness refers to:", options: ["Total number of individuals", "Number of different species in an area", "Biomass of one species", "Genetic diversity"], correctIndex: 1 },
      { id: 9, question: "A transect line is used to study:", options: ["Changes in species distribution along an environmental gradient", "Only aquatic organisms", "Chemical reactions", "Temperature changes"], correctIndex: 0 },
      { id: 10, question: "The minimum number of quadrats needed for reliable data depends on:", options: ["Student preference", "Species-area curve reaching a plateau", "Weather", "Time of day"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is population density?", answer: "The number of individuals of a species per unit area or volume." },
      { question: "Why is random placement of quadrats important?", answer: "To avoid sampling bias and ensure the data is representative of the entire study area." },
      { question: "What is the difference between density and abundance?", answer: "Density is the number per unit area, while abundance is the total number of individuals in the entire population." },
      { question: "Explain the capture-recapture method.", answer: "Animals are captured, marked, and released. After mixing, a second sample is taken. The ratio of marked to unmarked animals estimates total population." },
      { question: "What are the assumptions of the capture-recapture method?", answer: "No births, deaths, immigration, or emigration between samples; marks don't affect survival; marked animals mix uniformly." },
      { question: "What is a belt transect?", answer: "A strip of habitat studied by placing contiguous quadrats along a transect line to record species composition changes." },
      { question: "How does habitat fragmentation affect population density?", answer: "It can increase local density within fragments while decreasing overall species diversity and genetic exchange." },
      { question: "What is the Simpson's Diversity Index?", answer: "A quantitative measure that accounts for both species richness and evenness in a community." },
      { question: "Why are multiple quadrats necessary?", answer: "To account for spatial variation in species distribution and obtain statistically reliable mean density values." },
      { question: "What ecological information can be derived from density studies?", answer: "Species distribution patterns, habitat preferences, competition effects, and conservation status assessment." }
    ],
    realWorldApplications: [
      "Wildlife Conservation: Census methods are used to monitor endangered species populations and assess conservation effectiveness.",
      "Forest Management: Forestry departments use quadrat sampling to estimate timber resources and plan sustainable harvesting.",
      "Agricultural Pest Control: Monitoring pest population density helps farmers time pesticide applications optimally.",
      "Urban Planning: Ecological surveys assess biodiversity before construction to comply with environmental regulations.",
      "Marine Biology: Quadrat methods adapted for underwater use assess coral reef health and biodiversity.",
      "Epidemiology: Population density studies help model disease transmission rates in human and animal communities."
    ]
  }
};
injectData('biology', batch);

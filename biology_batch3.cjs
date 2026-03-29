const { injectData } = require('./inject_enhancements.cjs');
const batch = {
  "b11": {
    quizQuestions: [
      { id: 1, question: "Plasmolysis is defined as:", options: ["Cell swelling", "Shrinkage of protoplast away from cell wall in hypertonic solution", "Cell division", "Cell death"], correctIndex: 1 },
      { id: 2, question: "Plasmolysis occurs when a plant cell is placed in:", options: ["Distilled water", "Isotonic solution", "Hypertonic solution", "Vacuum"], correctIndex: 2 },
      { id: 3, question: "The space between the cell wall and shrunken protoplast fills with:", options: ["Air", "The external hypertonic solution", "DNA", "Starch"], correctIndex: 1 },
      { id: 4, question: "Incipient plasmolysis is when:", options: ["Cell wall breaks", "Protoplast just begins to pull away from the cell wall", "Cell is fully plasmolyzed", "Cell bursts"], correctIndex: 1 },
      { id: 5, question: "Deplasmolysis occurs when a plasmolyzed cell is placed in:", options: ["More concentrated solution", "Hypotonic solution or water", "Oil", "Acid"], correctIndex: 1 },
      { id: 6, question: "Which cells are commonly used for plasmolysis experiments?", options: ["White blood cells", "Rhoeo/Tradescantia epidermal cells", "Muscle cells", "Nerve cells"], correctIndex: 1 },
      { id: 7, question: "The colored sap in Rhoeo cells makes observation easier because:", options: ["It glows", "The purple vacuolar sap visibly shrinks, showing clear plasmolysis", "It changes color during plasmolysis", "It fluoresces"], correctIndex: 1 },
      { id: 8, question: "NaCl or sucrose solutions used for plasmolysis are typically:", options: ["0.001 M", "0.5 M or higher", "Pure water", "Highly acidic"], correctIndex: 1 },
      { id: 9, question: "Plasmolysis proves that the cell membrane is:", options: ["Absent in plants", "Rigid", "Selectively permeable", "Impermeable"], correctIndex: 2 },
      { id: 10, question: "Animal cells in hypertonic solution undergo:", options: ["Plasmolysis", "Crenation (shrinking)", "Lysis", "No change"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "Define plasmolysis.", answer: "The process in which the protoplast of a plant cell shrinks away from the rigid cell wall when placed in a hypertonic solution due to exosmosis." },
      { question: "Why can't animal cells undergo plasmolysis?", answer: "Animal cells lack a rigid cell wall. In hypertonic solutions, they shrink (crenate) rather than having a protoplast pull away from a wall." },
      { question: "What is the significance of plasmolysis?", answer: "It demonstrates that the cell membrane is selectively permeable and that osmosis is a real physical process in living cells." },
      { question: "Is plasmolysis reversible?", answer: "Yes, if a plasmolyzed cell is promptly placed in a hypotonic solution, water re-enters by endosmosis (deplasmolysis) and the protoplast re-expands." },
      { question: "What determines the degree of plasmolysis?", answer: "The concentration difference between the external solution and the cell sap — greater hypertonic concentration causes more severe plasmolysis." },
      { question: "What is wall pressure?", answer: "The inward pressure exerted by the elastic cell wall on the cell contents, equal and opposite to turgor pressure at equilibrium." },
      { question: "Differentiate between flaccid and turgid cells.", answer: "Turgid cells are fully swollen with water (endosmosis), while flaccid cells have lost water and the protoplast is relaxed against the wall." },
      { question: "What is cytorrhysis?", answer: "Irreversible collapse of the entire cell wall inward in extreme plasmolysis conditions, not just the protoplast." },
      { question: "Why is Rhoeo/Tradescantia preferred for this experiment?", answer: "Its epidermal cells contain dark purple anthocyanin pigment in the vacuole, making the shrinking of the protoplast easily visible." },
      { question: "At what concentration does incipient plasmolysis occur?", answer: "When the external solution's osmotic pressure exactly equals the cell sap's osmotic pressure, so turgor pressure becomes zero." }
    ],
    realWorldApplications: [
      "Food Preservation: Salting and sugaring foods exploits plasmolysis to dehydrate and kill bacteria and mold cells.",
      "Agriculture: Understanding plasmolysis helps farmers avoid over-fertilizing, which creates hypertonic soil solutions that kill plant roots.",
      "Pickle Making: Vegetables placed in concentrated brine undergo plasmolysis, allowing the brine to penetrate and preserve them.",
      "Desalination Research: Understanding osmotic behavior of cell membranes aids in developing efficient water purification membranes.",
      "Drug Delivery: Pharmaceutical scientists study membrane permeability principles derived from osmosis studies for transdermal drug patches.",
      "Weed Control: Some herbicides work by disrupting water balance in weed cells, effectively causing lethal plasmolysis."
    ]
  },
  "b12": {
    quizQuestions: [
      { id: 1, question: "Normal urine is typically:", options: ["Red", "Pale yellow to amber due to urochrome", "Green", "Blue"], correctIndex: 1 },
      { id: 2, question: "The primary nitrogenous waste in human urine is:", options: ["Uric acid", "Ammonia", "Urea", "Creatinine"], correctIndex: 2 },
      { id: 3, question: "Protein in urine (proteinuria) may indicate:", options: ["Diabetes", "Kidney disease/damage", "Liver disease", "Anemia"], correctIndex: 1 },
      { id: 4, question: "The sulfosalicylic acid test detects:", options: ["Glucose", "Proteins (white precipitate)", "Bile salts", "Blood"], correctIndex: 1 },
      { id: 5, question: "Normal specific gravity of urine ranges from:", options: ["1.000-1.005", "1.003-1.030", "0.5-0.8", "2.0-3.0"], correctIndex: 1 },
      { id: 6, question: "Ketone bodies in urine (ketonuria) may indicate:", options: ["Overhydration", "Starvation or uncontrolled diabetes", "Kidney stones", "Normal metabolism"], correctIndex: 1 },
      { id: 7, question: "The presence of blood in urine is called:", options: ["Glycosuria", "Proteinuria", "Hematuria", "Ketonuria"], correctIndex: 2 },
      { id: 8, question: "Urine is formed in the:", options: ["Bladder", "Nephrons of the kidney", "Liver", "Pancreas"], correctIndex: 1 },
      { id: 9, question: "Which test detects bile pigments in urine?", options: ["Benedict's test", "Fouchet's test", "Biuret test", "Iodine test"], correctIndex: 1 },
      { id: 10, question: "The average daily urine output for an adult is:", options: ["100 mL", "500 mL", "1-2 liters", "5 liters"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What are the normal constituents of urine?", answer: "Water (95%), urea, creatinine, uric acid, sodium, potassium, chloride, and other ions in varying amounts." },
      { question: "What abnormal constituents may appear in pathological conditions?", answer: "Glucose (diabetes), proteins (kidney disease), blood (infection/injury), ketones (starvation/diabetes), and bile pigments (liver disease)." },
      { question: "Why is a 24-hour urine sample sometimes preferred?", answer: "It accounts for variations in concentration throughout the day, giving a more accurate measurement of total excretion." },
      { question: "What does the color of urine indicate?", answer: "Dark yellow suggests dehydration, colorless suggests overhydration. Red/brown may indicate blood or certain medications." },
      { question: "What is the role of the nephron?", answer: "The functional unit of the kidney that filters blood, reabsorbs useful substances, and secretes waste to form urine." },
      { question: "Why does diabetes cause glucose in urine?", answer: "Excess blood glucose overwhelms the kidney's reabsorption capacity (renal threshold ~180 mg/dL)." },
      { question: "What is specific gravity of urine and what does it signify?", answer: "The ratio of urine density to water density. It indicates the kidney's concentrating ability and hydration status." },
      { question: "What causes ketone bodies to appear in urine?", answer: "When the body metabolizes fat instead of glucose for energy (during fasting, starvation, or uncontrolled diabetes), producing acetoacetic acid, β-hydroxybutyric acid, and acetone." },
      { question: "Name the three processes of urine formation.", answer: "Glomerular filtration, tubular reabsorption, and tubular secretion." },
      { question: "Why is fresh urine preferred for analysis?", answer: "Standing urine becomes alkaline due to bacterial conversion of urea to ammonia, which can alter test results." }
    ],
    realWorldApplications: [
      "Clinical Diagnostics: Urinalysis is one of the most common and affordable screening tests performed in hospitals worldwide.",
      "Sports Anti-Doping: Urine analysis detects banned performance-enhancing drugs in competitive athletes.",
      "Pregnancy Testing: Urine-based tests detect human chorionic gonadotropin (hCG) hormone for early pregnancy confirmation.",
      "Workplace Drug Screening: Employers use urine tests to screen for illicit substance use among employees.",
      "Neonatal Screening: Newborn urine tests detect metabolic disorders like phenylketonuria (PKU) and maple syrup urine disease.",
      "Kidney Transplant Monitoring: Post-transplant patients have regular urinalysis to detect early signs of organ rejection."
    ]
  },
  "b13": {
    quizQuestions: [
      { id: 1, question: "Spermatogenesis occurs in the:", options: ["Epididymis", "Seminiferous tubules of the testis", "Vas deferens", "Prostate gland"], correctIndex: 1 },
      { id: 2, question: "Oogenesis occurs in the:", options: ["Fallopian tube", "Uterus", "Ovary", "Cervix"], correctIndex: 2 },
      { id: 3, question: "The cells that nourish developing sperm are called:", options: ["Leydig cells", "Sertoli cells", "Oocytes", "Follicle cells"], correctIndex: 1 },
      { id: 4, question: "Leydig cells (interstitial cells) produce:", options: ["Estrogen", "Testosterone", "Progesterone", "FSH"], correctIndex: 1 },
      { id: 5, question: "A Graafian follicle is found in the:", options: ["Testis", "Ovary", "Uterus", "Prostate"], correctIndex: 1 },
      { id: 6, question: "The corpus luteum forms after:", options: ["Menstruation", "Ovulation (from the ruptured follicle)", "Fertilization only", "Puberty"], correctIndex: 1 },
      { id: 7, question: "Spermatogenesis produces:", options: ["1 functional sperm from each spermatogonium", "2 sperms", "4 functional spermatozoa from each primary spermatocyte", "8 sperms"], correctIndex: 2 },
      { id: 8, question: "Oogenesis produces:", options: ["4 ova", "1 ovum and 3 polar bodies", "2 ova and 2 polar bodies", "1 ovum only"], correctIndex: 1 },
      { id: 9, question: "The T.S. of testis shows:", options: ["Ovarian follicles", "Seminiferous tubules with different stages of sperm development", "Corpus luteum", "Endometrium"], correctIndex: 1 },
      { id: 10, question: "Estrogen is primarily produced by:", options: ["Leydig cells", "Sertoli cells", "Ovarian follicular cells", "Adrenal glands only"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What is spermatogenesis?", answer: "The process of formation of mature spermatozoa from spermatogonia through mitosis and meiosis in the seminiferous tubules." },
      { question: "What is oogenesis?", answer: "The process of formation of a mature ovum from oogonia through mitotic and meiotic divisions in the ovary." },
      { question: "Why does oogenesis produce only one functional ovum?", answer: "Unequal cytoplasmic division ensures one large cell retains most nutrients needed for embryo development; polar bodies degenerate." },
      { question: "What is the role of the Sertoli cells?", answer: "They provide nutrition, support, and protection to developing spermatids and form the blood-testis barrier." },
      { question: "What hormones regulate spermatogenesis?", answer: "FSH (stimulates Sertoli cells), LH/ICSH (stimulates Leydig cells to produce testosterone), and testosterone itself." },
      { question: "Describe the structure of a Graafian follicle.", answer: "A mature ovarian follicle containing the secondary oocyte surrounded by follicular fluid, granulosa cells, and theca layers." },
      { question: "What happens to the corpus luteum if fertilization does not occur?", answer: "It degenerates into the corpus albicans, progesterone levels drop, and menstruation begins." },
      { question: "At what stage is the oocyte released during ovulation?", answer: "As a secondary oocyte arrested in metaphase II of meiosis; meiosis II completes only upon fertilization." },
      { question: "What is the acrosome?", answer: "A cap-like structure on the sperm head containing enzymes (hyaluronidase) that help penetrate the egg's protective layers." },
      { question: "Differentiate between primary and secondary spermatocytes.", answer: "Primary spermatocytes are diploid (2n) and undergo meiosis I. Secondary spermatocytes are haploid (n) and undergo meiosis II." }
    ],
    realWorldApplications: [
      "IVF (In Vitro Fertilization): Understanding oogenesis and follicular development is crucial for successful egg retrieval in fertility clinics.",
      "Male Contraceptive Development: Research on spermatogenesis regulation helps develop hormonal and non-hormonal male contraceptives.",
      "Cancer Diagnostics: Testicular and ovarian histological examination helps pathologists diagnose germ cell tumors.",
      "Livestock Breeding: AI (Artificial Insemination) programs rely on sperm quality assessment based on spermatogenesis knowledge.",
      "Fertility Assessment: Testicular biopsies examining seminiferous tubules help diagnose male infertility causes.",
      "Hormone Therapy: Understanding gonadal endocrinology guides hormone replacement therapy for menopausal and hypogonadal patients."
    ]
  },
  "b14": {
    quizQuestions: [
      { id: 1, question: "Meiosis produces:", options: ["2 diploid cells", "4 haploid cells", "4 diploid cells", "2 haploid cells"], correctIndex: 1 },
      { id: 2, question: "Crossing over occurs during:", options: ["Prophase I (pachytene stage)", "Metaphase II", "Anaphase I", "Telophase II"], correctIndex: 0 },
      { id: 3, question: "The significance of meiosis is:", options: ["Growth", "Repair", "Genetic variation and reduction of chromosome number", "Protein synthesis"], correctIndex: 2 },
      { id: 4, question: "Homologous chromosomes pair up during:", options: ["Prophase II", "Prophase I (zygotene/synapsis)", "Metaphase I", "Anaphase II"], correctIndex: 1 },
      { id: 5, question: "A bivalent consists of:", options: ["Two sister chromatids", "Four chromatids (tetrad) from two homologous chromosomes", "One chromosome", "Eight chromatids"], correctIndex: 1 },
      { id: 6, question: "Meiosis I is called reductional because:", options: ["Cell size reduces", "Chromosome number is halved", "DNA content doubles", "Proteins are reduced"], correctIndex: 1 },
      { id: 7, question: "Chiasmata are visible evidence of:", options: ["Mutation", "Crossing over between non-sister chromatids", "DNA replication", "Cell death"], correctIndex: 1 },
      { id: 8, question: "Sister chromatids separate during:", options: ["Anaphase I", "Anaphase II", "Prophase I", "Telophase I"], correctIndex: 1 },
      { id: 9, question: "The material commonly used to study meiosis is:", options: ["Root tip", "Onion flower bud (young anthers)", "Leaf", "Stem"], correctIndex: 1 },
      { id: 10, question: "If a parent cell has 2n=20 chromosomes, each meiotic product has:", options: ["20", "40", "10", "5"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What is meiosis?", answer: "A specialized cell division that reduces the chromosome number by half, producing four genetically unique haploid cells from one diploid cell." },
      { question: "Where does meiosis occur?", answer: "In the gonads — testes (spermatogenesis) and ovaries (oogenesis) of animals, and in the sporangia of plants." },
      { question: "What is synapsis?", answer: "The precise pairing of homologous chromosomes along their entire length during the zygotene stage of prophase I." },
      { question: "What is crossing over and why is it important?", answer: "The exchange of genetic material between non-sister chromatids of homologous chromosomes, creating new allele combinations and increasing genetic diversity." },
      { question: "How does meiosis differ from mitosis?", answer: "Meiosis involves two divisions, produces 4 haploid cells, includes crossing over and independent assortment, and occurs only in reproductive cells." },
      { question: "What are the stages of prophase I?", answer: "Leptotene, zygotene, pachytene, diplotene, and diakinesis." },
      { question: "Why are young flower buds used for studying meiosis?", answer: "The anthers in young buds contain pollen mother cells actively undergoing meiosis to form pollen grains." },
      { question: "What is independent assortment during meiosis?", answer: "Each pair of homologous chromosomes aligns randomly at metaphase I, so maternal and paternal chromosomes are distributed independently." },
      { question: "What would happen without meiosis?", answer: "Chromosome number would double every generation, making normal development impossible." },
      { question: "What is non-disjunction?", answer: "Failure of chromosomes to separate properly during meiosis, leading to gametes with abnormal chromosome numbers (aneuploidy)." }
    ],
    realWorldApplications: [
      "Down Syndrome Research: Non-disjunction during meiosis causes trisomy 21, spurring research into prevention and early diagnosis.",
      "Plant Breeding: Exploiting meiotic recombination creates novel trait combinations in crops for better yield and disease resistance.",
      "Genetic Diversity Studies: Understanding meiotic crossing over explains the vast phenotypic variation within species.",
      "Fertility Treatment: Knowledge of meiotic stages helps diagnose causes of infertility related to gamete formation defects.",
      "Cancer Research: Errors in meiosis-related genes can contribute to cancer when they malfunction in somatic cells.",
      "Evolutionary Biology: Meiosis and sexual reproduction are fundamental to understanding how species adapt and evolve over time."
    ]
  },
  "b15": {
    quizQuestions: [
      { id: 1, question: "Pollination is the transfer of pollen from:", options: ["Root to shoot", "Anther to stigma", "Stigma to ovary", "Leaf to flower"], correctIndex: 1 },
      { id: 2, question: "Wind-pollinated flowers typically have:", options: ["Large colorful petals and nectar", "Light feathery pollen, large stigma, no scent", "Sweet fragrance", "Bright red color"], correctIndex: 1 },
      { id: 3, question: "Insect-pollinated flowers usually possess:", options: ["Reduced petals", "Bright colors, nectar, fragrance, and sticky pollen", "Feathery stigma", "No nectar guide"], correctIndex: 1 },
      { id: 4, question: "Self-pollination occurs when pollen transfers within:", options: ["Different species", "The same flower or same plant", "Different plants of same species", "Animal vectors"], correctIndex: 1 },
      { id: 5, question: "An advantage of cross-pollination is:", options: ["Guaranteed reproduction", "Increased genetic variation", "Reduced seed production", "Faster germination"], correctIndex: 1 },
      { id: 6, question: "Plants that rely on water for pollination are called:", options: ["Anemophilous", "Hydrophilous", "Entomophilous", "Ornithophilous"], correctIndex: 1 },
      { id: 7, question: "Ornithophily refers to pollination by:", options: ["Insects", "Wind", "Birds", "Bats"], correctIndex: 2 },
      { id: 8, question: "Contrivances to prevent self-pollination include:", options: ["Self-incompatibility, dichogamy, heterostyly", "Large petals", "Absence of stigma", "Waterproof pollen"], correctIndex: 0 },
      { id: 9, question: "Dichogamy is when:", options: ["Male and female parts mature at different times", "Flowers have no petals", "Seeds develop without fertilization", "Pollen is sticky"], correctIndex: 0 },
      { id: 10, question: "Bee-pollinated flowers are characterized by being:", options: ["Red and odorless", "Blue/yellow with nectar guides and landing platforms", "Green with feathery stigma", "Tiny and wind-dispersed"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is pollination?", answer: "The process of transfer of pollen grains from the anther to the stigma of a flower." },
      { question: "Differentiate between self and cross pollination.", answer: "Self-pollination occurs within the same flower or plant; cross-pollination involves transfer between different plants of the same species." },
      { question: "What adaptations do wind-pollinated flowers show?", answer: "Light/dry pollen production in large quantities, large feathery stigma to catch pollen, reduced or absent petals, no nectar/scent." },
      { question: "What is a nectar guide?", answer: "UV-visible patterns on petals that direct pollinators toward the nectaries, visible to bees but often invisible to humans." },
      { question: "Why is cross-pollination genetically advantageous?", answer: "It promotes genetic recombination, producing offspring with greater variation and potentially better adaptability." },
      { question: "What is self-incompatibility?", answer: "A genetic mechanism where the stigma recognizes and rejects pollen from the same plant, preventing self-fertilization." },
      { question: "Give an example of chiropterophily.", answer: "Pollination by bats — seen in plants like Kigelia (sausage tree) and some cacti that bloom at night with dull colors and strong fermented scents." },
      { question: "What is heterostyly?", answer: "The presence of different style lengths in flowers of the same species (e.g., pin and thrum flowers in primrose), promoting cross-pollination." },
      { question: "How does co-evolution relate to pollination?", answer: "Flowers and their pollinators evolve together — flower shape, color, and reward systems match pollinator morphology and behavior." },
      { question: "What would happen if all pollinators disappeared?", answer: "About 75% of flowering plants would fail to reproduce, causing massive ecosystem collapse and food shortage." }
    ],
    realWorldApplications: [
      "Commercial Agriculture: Beekeepers rent managed hives to pollinate almond orchards, apple farms, and berry plantations.",
      "Conservation Ecology: Protecting pollinator habitats is critical; pollinator decline threatens global food security.",
      "Vanilla Production: Vanilla orchids require hand-pollination in most commercial growing regions due to absence of natural pollinators.",
      "Allergy Medicine: Understanding wind pollination patterns helps predict pollen seasons and develop antihistamine treatments.",
      "Genetic Engineering: Knowledge of pollination mechanisms prevents unintended gene flow from GMO crops to wild relatives.",
      "Urban Gardening: City planners incorporate pollinator-friendly plants to support urban bee populations and local food production."
    ]
  }
};
injectData('biology', batch);

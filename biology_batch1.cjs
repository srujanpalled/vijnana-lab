const { injectData } = require('./inject_enhancements.cjs');
const batch = {
  "b1": {
    quizQuestions: [
      { id: 1, question: "Mitosis results in:", options: ["4 haploid cells", "2 diploid cells identical to parent", "1 cell with double DNA", "4 diploid cells"], correctIndex: 1 },
      { id: 2, question: "The correct sequence of mitosis phases is:", options: ["Prophase, Metaphase, Anaphase, Telophase", "Metaphase, Prophase, Telophase, Anaphase", "Anaphase, Prophase, Metaphase, Telophase", "Telophase, Anaphase, Metaphase, Prophase"], correctIndex: 0 },
      { id: 3, question: "During metaphase, chromosomes align at the:", options: ["Cell poles", "Cell membrane", "Metaphase plate (equator)", "Nuclear envelope"], correctIndex: 2 },
      { id: 4, question: "The stain used to observe chromosomes in onion root tip is:", options: ["Methylene blue", "Acetocarmine or Aceto-orcein", "Iodine", "Safranin"], correctIndex: 1 },
      { id: 5, question: "Cytokinesis in plant cells occurs by:", options: ["Cleavage furrow", "Cell plate formation", "Budding", "Binary fission"], correctIndex: 1 },
      { id: 6, question: "The part of the onion used for studying mitosis is:", options: ["Leaf", "Root tip", "Stem", "Flower"], correctIndex: 1 },
      { id: 7, question: "Spindle fibers are made of:", options: ["Cellulose", "Actin", "Tubulin (microtubules)", "Keratin"], correctIndex: 2 },
      { id: 8, question: "Chromosomes are visible because they:", options: ["Glow naturally", "Condense and become compact during prophase", "Are stained after telophase", "Float in cytoplasm"], correctIndex: 1 },
      { id: 9, question: "HCl is used during the squash preparation to:", options: ["Stain chromosomes", "Soften tissue and separate cells (maceration)", "Kill bacteria", "Add color"], correctIndex: 1 },
      { id: 10, question: "In which phase do sister chromatids separate?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "Why are root tips ideal for studying mitosis?", answer: "Root tips contain the meristematic zone where cells are actively dividing, providing many cells in various stages of mitosis." },
      { question: "What is the significance of mitosis?", answer: "Mitosis ensures growth, repair, and regeneration of tissues while maintaining the chromosome number constant across generations of cells." },
      { question: "Why is acetocarmine used as a stain?", answer: "It has high affinity for DNA/chromatin and stains chromosomes dark red, making them clearly visible under the microscope." },
      { question: "What role does HCl play in root tip squash?", answer: "Dilute HCl softens the middle lamella between cells (maceration), allowing individual cells to spread out for clear observation." },
      { question: "Distinguish between mitosis and meiosis.", answer: "Mitosis produces 2 identical diploid cells for growth/repair. Meiosis produces 4 genetically different haploid cells for sexual reproduction." },
      { question: "What is the mitotic index?", answer: "The ratio of cells undergoing mitosis to the total number of cells observed, indicating the rate of cell division." },
      { question: "What happens during prophase?", answer: "Chromatin condenses into visible chromosomes, the nuclear membrane begins to break down, and the spindle apparatus starts forming." },
      { question: "Why is the slide gently tapped or squashed?", answer: "To spread the cells into a single layer so individual cells and their chromosomes can be observed without overlap." },
      { question: "What is a cell cycle?", answer: "The complete sequence of events from one cell division to the next, including Interphase (G1, S, G2) and M-phase (mitosis + cytokinesis)." },
      { question: "Can mitosis occur in mature nerve cells?", answer: "No, mature neurons are typically in a permanent G0 phase and do not undergo mitosis, which is why nerve damage is often irreversible." }
    ],
    realWorldApplications: [
      "Cancer Research: Uncontrolled mitosis is the hallmark of cancer; studying mitotic regulation helps develop chemotherapy drugs that target dividing cells.",
      "Agriculture: Understanding mitosis in root meristems helps develop faster-growing crop varieties through selective breeding.",
      "Wound Healing Medicine: Mitosis drives tissue repair; understanding its regulation aids in developing treatments for chronic wounds and burns.",
      "Stem Cell Therapy: Controlled mitotic division of stem cells enables regenerative medicine for organ and tissue replacement.",
      "Forensic Biology: Mitotic index analysis helps forensic pathologists estimate time of death based on cell division rates in tissues.",
      "Plant Tissue Culture: Exploiting mitotic capacity of plant cells enables mass propagation of disease-free plants for commercial agriculture."
    ]
  },
  "b2": {
    quizQuestions: [
      { id: 1, question: "Stomata are primarily found on the:", options: ["Upper epidermis of dorsiventral leaves", "Lower epidermis of dorsiventral leaves", "Mesophyll layer", "Vascular bundles"], correctIndex: 1 },
      { id: 2, question: "Each stoma is bordered by two:", options: ["Epidermal cells", "Guard cells", "Mesophyll cells", "Companion cells"], correctIndex: 1 },
      { id: 3, question: "The primary function of stomata is:", options: ["Photosynthesis only", "Gas exchange and transpiration", "Water absorption", "Mineral transport"], correctIndex: 1 },
      { id: 4, question: "Guard cells are unique among epidermal cells because they contain:", options: ["No nucleus", "Chloroplasts", "Vacuoles only", "No cell wall"], correctIndex: 1 },
      { id: 5, question: "Stomata open when guard cells become:", options: ["Flaccid", "Turgid", "Dehydrated", "Dead"], correctIndex: 1 },
      { id: 6, question: "The temporary mount for observing stomata is prepared using:", options: ["Iodine solution", "Safranin", "Nail polish peel method", "Methylene blue"], correctIndex: 2 },
      { id: 7, question: "In monocot leaves, stomata distribution is typically:", options: ["Only on upper surface", "Only on lower surface", "Equal on both surfaces (amphistomatic)", "Absent entirely"], correctIndex: 2 },
      { id: 8, question: "The stomatal index is calculated as:", options: ["(Stomata / Total cells) × 100", "(Stomata / (Stomata + Epidermal cells)) × 100", "Stomata × Epidermal cells", "Epidermal cells / Stomata"], correctIndex: 1 },
      { id: 9, question: "Which ion's movement into guard cells causes stomatal opening?", options: ["Ca²⁺", "Na⁺", "K⁺ (Potassium)", "Cl⁻"], correctIndex: 2 },
      { id: 10, question: "Xerophytic plants typically have:", options: ["No stomata", "Sunken stomata to reduce water loss", "Very large stomata", "Stomata only on upper surface"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What are stomata?", answer: "Microscopic pores on the epidermis of leaves and stems, each bordered by two guard cells, that regulate gas exchange and transpiration." },
      { question: "Why are there more stomata on the lower epidermis?", answer: "The lower surface receives less direct sunlight, reducing water loss through transpiration while still allowing gas exchange." },
      { question: "How does the nail polish peel method work?", answer: "A thin layer of clear nail polish is applied to the leaf surface, allowed to dry, peeled off, and observed under a microscope—it captures an impression of stomata." },
      { question: "What factors affect stomatal opening?", answer: "Light intensity, CO₂ concentration, temperature, humidity, and the plant hormone abscisic acid (ABA)." },
      { question: "What is transpiration?", answer: "The loss of water vapor from the aerial parts of the plant, primarily through stomata, creating a transpiration pull that aids water transport." },
      { question: "How do guard cells control stomatal opening?", answer: "K⁺ ions are pumped into guard cells, water follows by osmosis, making them turgid and bowing apart to open the pore." },
      { question: "What is a subsidiary cell?", answer: "Specialized epidermal cells surrounding guard cells that provide structural support and may contribute ions for stomatal movement." },
      { question: "Why do CAM plants open stomata at night?", answer: "To minimize water loss in hot, dry environments by fixing CO₂ at night when temperatures are cooler and humidity is higher." },
      { question: "Name the different types of stomatal arrangements.", answer: "Anomocytic (no subsidiary cells), paracytic (parallel subsidiary cells), diacytic (perpendicular), and anisocytic (three unequal subsidiary cells)." },
      { question: "How does ABA cause stomatal closure?", answer: "Abscisic acid triggers the efflux of K⁺ ions from guard cells, causing water to leave by osmosis, making them flaccid and closing the pore." }
    ],
    realWorldApplications: [
      "Crop Water Management: Understanding stomatal behavior helps farmers optimize irrigation schedules for water-efficient agriculture.",
      "Climate Change Research: Scientists study stomatal density in fossil leaves to reconstruct ancient atmospheric CO₂ levels.",
      "Anti-transpirant Development: Chemical sprays that partially close stomata help protect crops during drought conditions.",
      "Urban Air Quality: Plants are strategically placed in cities based on their stomatal gas exchange capacity to absorb pollutants.",
      "Greenhouse Technology: Humidity and CO₂ levels are controlled to manipulate stomatal behavior for maximum crop growth.",
      "Paleobotany: Fossil stomatal indices help scientists understand how plants adapted to different atmospheric conditions over millions of years."
    ]
  },
  "b3": {
    quizQuestions: [
      { id: 1, question: "Osmosis is the movement of:", options: ["Solute from low to high concentration", "Solvent from high to low water potential through a semipermeable membrane", "Both solute and solvent equally", "Gases across membranes"], correctIndex: 1 },
      { id: 2, question: "A cell placed in a hypertonic solution will:", options: ["Swell and burst", "Shrink (plasmolyze)", "Remain unchanged", "Divide"], correctIndex: 1 },
      { id: 3, question: "In the potato osmosis experiment, potato pieces in concentrated sugar solution:", options: ["Gain mass", "Lose mass", "Stay the same", "Dissolve completely"], correctIndex: 1 },
      { id: 4, question: "The semipermeable membrane in plant cells is the:", options: ["Cell wall", "Tonoplast and cell membrane", "Nuclear membrane", "Chloroplast membrane"], correctIndex: 1 },
      { id: 5, question: "Osmotic pressure is defined as:", options: ["Pressure needed to prevent osmosis", "Pressure needed to burst the cell", "Pressure exerted by cell wall", "Atmospheric pressure on cells"], correctIndex: 0 },
      { id: 6, question: "A solution with equal solute concentration to the cell is called:", options: ["Hypertonic", "Hypotonic", "Isotonic", "Supersaturated"], correctIndex: 2 },
      { id: 7, question: "Turgor pressure in plant cells is caused by:", options: ["Loss of water", "Water entering by osmosis pressing against the rigid cell wall", "Cell division", "Photosynthesis"], correctIndex: 1 },
      { id: 8, question: "If a potato piece gains mass in a solution, the solution was:", options: ["Hypertonic", "Isotonic", "Hypotonic", "Saturated"], correctIndex: 2 },
      { id: 9, question: "Plasmolysis occurs when a plant cell is placed in a:", options: ["Hypertonic solution", "Hypotonic solution", "Distilled water", "Isotonic solution"], correctIndex: 0 },
      { id: 10, question: "The process of water absorption by plant roots primarily involves:", options: ["Active transport only", "Osmosis", "Diffusion of gases", "Phagocytosis"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "Define osmosis.", answer: "The net movement of water molecules from a region of higher water potential to a region of lower water potential through a selectively permeable membrane." },
      { question: "How does osmosis differ from diffusion?", answer: "Osmosis specifically refers to solvent movement through a semipermeable membrane, while diffusion is the movement of any substance from high to low concentration without a membrane." },
      { question: "What is water potential?", answer: "A measure of the free energy of water in a system; pure water has the highest water potential (0 MPa at standard conditions)." },
      { question: "Why do potato chips in concentrated salt water become flaccid?", answer: "Water moves out of potato cells by osmosis into the hypertonic salt solution, causing the cells to lose turgor and become flaccid." },
      { question: "What is the significance of turgor pressure?", answer: "Turgor pressure provides structural support to non-woody plants, keeps leaves erect, and drives cell expansion during growth." },
      { question: "Explain endosmosis and exosmosis.", answer: "Endosmosis: water enters the cell (in hypotonic solutions). Exosmosis: water leaves the cell (in hypertonic solutions)." },
      { question: "Why don't animal cells plasmolyze?", answer: "Animal cells lack a rigid cell wall, so in hypertonic solutions they shrink (crenate) rather than pull away from a wall." },
      { question: "What is a thistle funnel experiment?", answer: "A classic demonstration where sugar solution in a thistle funnel rises in its tube when the funnel's mouth is covered with a semipermeable membrane and placed in water." },
      { question: "How does temperature affect osmosis?", answer: "Higher temperature increases kinetic energy of water molecules, accelerating the rate of osmosis." },
      { question: "What is the role of osmosis in kidney function?", answer: "Kidneys use osmosis in nephrons to reabsorb water from filtrate back into blood, concentrating urine." }
    ],
    realWorldApplications: [
      "Medical IV Drips: Saline solutions must be isotonic (0.9% NaCl) to prevent red blood cells from bursting or shrinking when administered intravenously.",
      "Food Preservation: Salting meat and making jam use hypertonic solutions to draw water from microorganisms by osmosis, preventing spoilage.",
      "Kidney Dialysis: Artificial dialysis machines use osmotic principles to remove waste products from blood when kidneys fail.",
      "Reverse Osmosis Water Purification: Applying pressure greater than osmotic pressure forces contaminated water through membranes, producing pure drinking water.",
      "Agriculture: Farmers must manage soil salinity because excess salt creates hypertonic soil conditions that kill crops through osmotic water loss.",
      "Contact Lens Design: Lens solutions are carefully formulated to be isotonic with tear fluid to prevent eye irritation from osmotic imbalance."
    ]
  }
};
injectData('biology', batch);

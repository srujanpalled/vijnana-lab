const fs = require('fs');

const FILE_PATH = 'c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts';
let content = fs.readFileSync(FILE_PATH, 'utf8');

const replacements = {
  'b1': [
    "Place an onion bulb in a beaker of water so that only its base touches the water. Let roots grow for 3-4 days.",
    "Cut 2-3 cm of the newly grown white root tips and transfer them to a watch glass containing Carnoy\\'s fluid (fixative) for 24 hours.",
    "Transfer the root tips to a watch glass containing 1N HCl and warm gently over a spirit lamp for 2-3 minutes to soften the tissue.",
    "Wash the tips thoroughly with water to remove the acid.",
    "Place a root tip on a clean glass slide and add a drop of Acetocarmine stain. Wait for 2-3 minutes.",
    "Gently squash the root tip using a needle or the back of a pencil, then cover with a coverslip.",
    "Tap the coverslip gently to spread the cells evenly in a single layer.",
    "Observe the slide under the low power and then the high power of a compound microscope to identify different stages of mitosis."
  ],
  'b2': [
    "Take a fresh leaf of a dicot plant (e.g., Tradescantia or Petunia).",
    "Fold the leaf and gently tear it to peel off a thin, transparent layer of the lower epidermis.",
    "Place the epidermal peel in a watch glass containing water.",
    "Transfer the peel onto a clean glass slide using a brush.",
    "Add a drop of Safranin stain to the peel and let it sit for a minute.",
    "Wash off the excess stain with a drop of water and add a drop of glycerine.",
    "Carefully cover it with a coverslip, avoiding air bubbles.",
    "Observe under a microscope, count the number of stomata in the field of view, and repeat the process for the upper epidermis to compare distribution."
  ],
  'b3': [
    "Take a large, fresh potato tuber and peel off its outer skin.",
    "Cut one end flat so it can stand upright, and scoop out a deep cavity from the other end to make a potato osmoscope.",
    "Fill the cavity half-full with a 20% concentrated sugar solution.",
    "Mark the initial level of the sugar solution inside the cavity by inserting a common pin.",
    "Place the potato osmoscope in a beaker containing pure water, ensuring the water level outside is lower than the pin mark inside.",
    "Leave the setup undisturbed for 2 hours.",
    "Observe the level of the sugar solution inside the cavity after the designated time.",
    "The rise in the liquid level inside the potato cavity indicates endosmosis."
  ],
  'b4': [
    "Take 2 mL of Benedict\\'s reagent in a clean test tube.",
    "Heat the reagent gently over a spirit lamp to ensure it does not change color (remains blue).",
    "Add 8-10 drops of the given urine sample to the warm Benedict\\'s reagent.",
    "Boil the mixture carefully for 2 minutes.",
    "Allow the test tube to cool gradually.",
    "Observe the color change: Blue indicates absence of sugar, green/yellow indicates traces/moderate sugar, and brick-red precipitate indicates high sugar content (glycosuria)."
  ],
  'b5': [
    "Take a rectangular strip of Whatman filter paper (about 20 cm x 5 cm).",
    "Draw a horizontal pencil line about 2 cm from one end of the strip.",
    "Crush spinach or grass leaves in a mortar with a little acetone to extract the plant pigments.",
    "Using a capillary tube, place a small drop of the pigment extract at the center of the pencil line. Let it dry and repeat to concentrate the spot.",
    "Suspend the paper strip in a chromatography jar containing the solvent mixture (e.g., petroleum ether and acetone in 9:1 ratio).",
    "Ensure the origin line is just above the solvent level. Cover the jar tightly.",
    "Allow the solvent to rise up the paper via capillary action until it reaches near the top.",
    "Remove the paper, mark the solvent front, and observe the separated pigment bands (Carotene, Xanthophyll, Chlorophyll a, Chlorophyll b)."
  ],
  'b6': [
    "Prepare a nutrient solution by dissolving 10g sucrose, 10mg boric acid, 30mg calcium nitrate, 20mg magnesium sulphate, and 10mg potassium nitrate in 100 mL of distilled water.",
    "Take a clean glass slide with a central depression (cavity slide) or a normal slide.",
    "Place 2-3 drops of the prepared nutrient solution on the slide.",
    "Dust some pollen grains from a mature anther (e.g., Hibiscus or Vinca) over the drops.",
    "Keep the slide in a moist chamber (a petri dish covered with a wet filter paper) to prevent drying.",
    "Observe the slide under the low power of a microscope after 15 to 30 minutes.",
    "Look for pollen tubes emerging from the pollen grains, indicating successful germination in vitro."
  ],
  'b7': [
    "Take about 50g of plant material (e.g., ripe banana or papaya) and mash it thoroughly in a mortar and pestle.",
    "Add a mixture of 10 mL liquid dish soap (to break down lipid membranes) and 1g salt (to shield DNA phosphate groups) to the mashed paste.",
    "Stir gently to mix, then let it sit for 10-15 minutes.",
    "Filter the mixture through a muslin cloth or strainer into a clean beaker to obtain a clear filtrate.",
    "Add 1-2 drops of enzyme (e.g., meat tenderizer or pineapple juice) to degrade proteins associated with DNA.",
    "Slowly pour chilled ethanol (or isopropyl alcohol) down the side of the beaker so it forms a distinct layer on top of the filtrate.",
    "Do not shake. Wait for a few minutes and observe fine, white, thread-like structures indicating DNA precipitating at the interface.",
    "Spool the DNA out using a glass rod by twirling it gently."
  ],
  'b8': [
    "Collect a sample of given seeds (e.g., pea seeds or plastic beads representing them) showing two contrast traits (e.g., Yellow/Green or Round/Wrinkled).",
    "Count the total number of seeds available in the provided sample.",
    "Separate the seeds based on the selected dominant and recessive traits.",
    "Count the exact number of seeds for each specific phenotype.",
    "Calculate the ratio of dominant to recessive phenotypes observed in the sample.",
    "Compare the observed ratio with standard Mendelian expected ratios (e.g., 3:1 for monohybrid cross, 9:3:3:1 for dihybrid cross).",
    "Note down any deviations and discuss statistical significance."
  ],
  'b9': [
    "Carefully observe the provided pedigree chart for a specific genetic trait in a family.",
    "Note the symbols: squares represent males, circles represent females, shaded symbols show affected individuals.",
    "Determine if the trait is passed directly from parent to offspring in every generation (suggests dominant trait).",
    "Check if unaffected parents have affected offspring (suggests recessive trait).",
    "Analyze the ratio of affected males to affected females. Higher prevalence in males suggests X-linked recessive inheritance.",
    "Trace the inheritance pattern specifically from fathers to daughters and mothers to sons to confirm X-linked traits.",
    "Conclude the likely mode of inheritance (Autosomal dominant/recessive, X-linked dominant/recessive) based on the observations."
  ],
  'b10': [
    "Select a designated study area measuring a specific dimension (e.g., a lawn or field).",
    "Prepare a quadrat (a square frame of known area, e.g., 1m x 1m) made of wood or PVC pipes.",
    "Randomly throw or place the quadrat in different locations within the study area.",
    "Identify a specific plant species to study (e.g., a weed like Parthenium or grasses).",
    "Count the number of individuals of the chosen plant species inside each quadrat placement.",
    "Record the data for at least 10 different random quadrat tosses.",
    "Calculate the total number of individuals counted across all quadrats.",
    "Calculate the Population Density = (Total number of individuals) / (Total number of quadrats studied)."
  ],
  'b11': [
    "Take a fresh leaf of Rhoeo or Tradescantia and cleanly peel off the lower epidermis.",
    "Cut the peel into two small pieces and place them in two separate watch glasses.",
    "Add pure water to the first watch glass (control) and a 10% concentrated sugar or salt solution to the second watch glass.",
    "Leave both peels undisturbed for about 10-15 minutes.",
    "Mount the peel from the water on a glass slide, cover with a coverslip, and observe under the microscope. The cells will appear turgid.",
    "Mount the peel from the sugar/salt solution on another slide and observe.",
    "Notice that the cell membrane has shrunk and pulled away from the cell wall in the second slide.",
    "This shrinkage of the protoplast due to exosmosis is called plasmolysis."
  ],
  'b12': [
    "Procure normal urine sample and abnormal urine samples for testing.",
    "Test for Albumin: Fill a test tube 1/3 with urine and boil the upper portion. A white cloudiness that doesn\\'t disappear on adding acetic acid indicates albumin.",
    "Test for Urea: Add 2 mL of urine to sodium hypobromite solution. Vigorous effervescence of nitrogen gas indicates urea.",
    "Test for Bile Salts: Sprinkle finely powdered sulphur on the surface of 5 mL urine in a test tube. If the sulphur sinks, bile salts are present.",
    "Test for Sugar: Perform Benedict\\'s Test as described in Ex b4.",
    "Record the presence or absence of these organic compounds to analyze the metabolic health state."
  ]
};

let replacedCount = 0;
for (const [id, procArray] of Object.entries(replacements)) {
  const procedureStr = '[\n              ' + procArray.map(s => '"' + s + '"').join(',\n              ') + '\n            ]';
  const regex = new RegExp(`(id:\\s*'${id}'(?:(?!id:\\s*')[\\s\\S])*?procedure:\\s*)\\[[\\s\\S]*?\\]`, 'g');
  
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, `$1${procedureStr}`);
    replacedCount += matches.length;
    console.log(`Successfully updated ${id} (${matches.length} occurrences).`);
  } else {
    console.error(`Regex for ${id} matched nothing.`);
  }
}

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log(`Successfully applied ${replacedCount} biology procedures substitutions in total.`);

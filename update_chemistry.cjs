const fs = require('fs');

const FILE_PATH = 'c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts';
let content = fs.readFileSync(FILE_PATH, 'utf8');

const replacements = {
  'c1': [
    "Wash, rinse and fill the burette with the given titrant (e.g., standard NaOH solution) up to the zero mark.",
    "Pipette out exactly 20 mL of the given analyte (e.g., given HCl solution) into a clean conical flask.",
    "Add 1-2 drops of a suitable indicator (e.g., phenolphthalein) to the conical flask. The solution will remain colorless.",
    "Place the flask under the burette on a white tile and titrate slowly while swirling the flask gently.",
    "Stop adding titrant when a permanent pale pink color appears. This is the end-point.",
    "Note the final burette reading.",
    "Repeat the titration until concordant readings are obtained."
  ],
  'c2': [
    "Perform preliminary tests on the given salt: note its color, smell, and solubility in water.",
    "Perform the dry heating test and flame test to get hints of the cation.",
    "Treat a pinch of the salt with dilute H2SO4 and observe the evolved gas to test for dilute acid group anions (Carbonate, Sulphide, Sulphite).",
    "Treat the salt with concentrated H2SO4 to test for concentrated acid group anions (Chloride, Bromide, Nitrate).",
    "Perform specific confirmatory tests for the identified anion using the salt extract.",
    "Prepare the original solution (OS) of the salt in water or dilute HCl.",
    "Systematically add group reagents (dil. HCl, H2S gas, NH4OH, etc.) to the OS to precipitate and identify the cation group.",
    "Perform the specific confirmatory test for the identified cation."
  ],
  'c3': [
    "Take 10 mL of the given unknown solution in a clean test tube or beaker.",
    "Dip a clean piece of Universal Indicator paper or pH paper into the solution using a glass rod.",
    "Observe the color change on the pH paper.",
    "Compare the color developed on the pH paper with the standard color chart provided on the pH paper booklet.",
    "Note the pH value corresponding to the matching color.",
    "Alternatively, use a calibrated digital pH meter to record the exact pH value."
  ],
  'c4': [
    "Take a small quantity of the given organic compound in a clean test tube.",
    "For Carboxylic group: Add a pinch of sodium bicarbonate. Brisk effervescence (CO2) indicates presence of -COOH.",
    "For Alcoholic group: Add a small piece of dry sodium metal. Evolution of hydrogen gas indicates an alcohol group, or perform the ceric ammonium nitrate test.",
    "For Phenolic group: Add a few drops of neutral FeCl3 solution. A violet, green, or blue coloration indicates a phenol.",
    "For Carbonyl group (Aldehyde/Ketone): Add 2,4-DNP reagent. A yellow/orange precipitate indicates a carbonyl group. Use Tollens\\\' or Fehling\\'s test to distinguish aldehyde from ketone.",
    "For Amino group: Perform the carbylamine test (foul smell) or nitrous acid test."
  ],
  'c5': [
    "Measure exactly 50 mL of dilute Hydrochloric Acid (HCl) into a clean, dry polystyrene calorimeter or insulated beaker.",
    "Measure the initial temperature of the acid using a thermometer and record it after it stabilizes.",
    "Quickly add exactly 50 mL of dilute Sodium Hydroxide (NaOH) of the same molarity to the calorimeter.",
    "Immediately cover the calorimeter with a lid.",
    "Stir the mixture gently but continuously using a stirrer.",
    "Observe the temperature rise on the thermometer and record the highest steady temperature reached.",
    "Calculate the change in temperature (Delta T).",
    "Verify that the reaction is exothermic as the temperature of the system increased."
  ],
  'c6': [
    "Rinse and fill the burette with the given KMnO4 solution.",
    "Pipette out 20 mL of standard Mohr\\'s salt (or oxalic acid) solution into a conical flask.",
    "Add 1 test tube (~20 mL) of dilute H2SO4 to the conical flask. (If using oxalic acid, heat the flask to 60 degrees C).",
    "Titrate the solution against KMnO4 from the burette while constantly swirling the flask.",
    "KMnO4 acts as a self-indicator. The end-point is marked by the appearance of a permanent pale pink color.",
    "Note the final burette reading.",
    "Repeat the titration until concordant readings are obtained."
  ],
  'c7': [
    "Prepare the Original Solution (OS) of the given mixture.",
    "Group I: Add dilute HCl to the OS. A white precipitate indicates Group I (e.g., Pb2+). If no ppt, proceed to Group II.",
    "Group II: Pass H2S gas through the HCl-acidified OS. A black/yellow ppt indicates Group II (e.g., Cu2+, As3+). Boil off H2S if absent.",
    "Group III: Add solid NH4Cl and excess NH4OH. A reddish-brown or gelatinous white ppt indicates Group III (e.g., Fe3+, Al3+).",
    "Group IV: Pass H2S gas through the ammoniacal solution from Group III. A white/black ppt indicates Group IV (e.g., Zn2+, Mn2+).",
    "Continue this systematic elimination up to Group VI (Mg2+) and perform confirmatory tests for the precipitated group."
  ],
  'c8': [
    "Take a small amount of the salt in a dry test tube and add a few drops of dilute H2SO4.",
    "Observe for effervescence (CO3 2-) or rotten egg smell (S 2-). Perform confirmatory tests if positive.",
    "If no reaction, take another pinch of salt and add concentrated H2SO4.",
    "Heat gently. Pungent fumes (Cl-), reddish-brown fumes (Br-, NO3-), or violet vapors (I-) indicate concentrated acid group anions.",
    "Perform specific confirmatory test: e.g., Chromyl chloride test for chloride, or Brown ring test for nitrate.",
    "If both groups are absent, test for independent anions (Sulphate, Phosphate) using Barium chloride or Ammonium molybdate tests respectively."
  ],
  'c9': [
    "Prepare standard solutions of Sodium Thiosulphate (Na2S2O3) and Hydrochloric Acid (HCl).",
    "Measure a fixed volume (e.g., 50 mL) of 0.1M Na2S2O3 into a conical flask placed on a piece of paper marked with a cross (X).",
    "Add a fixed volume (e.g., 10 mL) of 1M HCl to the flask and immediately start the stopwatch.",
    "Swirl the flask once and observe the cross through the solution from the top.",
    "The solution will gradually turn milky yellow due to precipitating sulfur.",
    "Stop the stopwatch exactly when the cross (X) becomes completely invisible.",
    "Record the time taken.",
    "Repeat the experiment by changing the concentration of Na2S2O3 or changing the temperature to study the effect on the rate of reaction."
  ],
  'c10': [
    "Take 100 mL of 0.1 M strong acid (e.g., HCl) in an insulated calorimeter and note its initial constant temperature (T1).",
    "Take 100 mL of 0.1 M strong base (e.g., NaOH) in a separate beaker and note its initial temperature (T2). Ensure T1 and T2 are nearly equal.",
    "Calculate the average initial temperature T_initial = (T1+T2)/2.",
    "Quickly pour the base into the acid in the calorimeter and stir well.",
    "Note the maximum highest temperature reached by the mixture (T_final).",
    "Calculate the temperature rise: Delta T = T_final - T_initial.",
    "Use the formula Q = m * c * Delta T to calculate the heat evolved.",
    "Calculate the Enthalpy of Neutralization per mole of water formed."
  ],
  'c11': [
    "Weigh approximately 2.5g of Potassium Sulphate (K2SO4) and dissolve it in minimum boiling water in a beaker.",
    "Weigh approximately 10g of Aluminum Sulphate (Al2(SO4)3.18H2O) and dissolve it in minimum boiling water in another beaker. Add 1-2 mL of dilute H2SO4 to prevent hydrolysis.",
    "Filter both the hot solutions to remove insoluble impurities.",
    "Mix the two clear hot solutions in a china dish.",
    "Heat the mixture on a wire gauze to concentrate it up to the crystallization point (check by blowing on a glass rod dipped in the solution).",
    "Allow the concentrated solution to cool undisturbed at room temperature for several hours.",
    "Colorless, octahedral crystals of Potash Alum will separate out.",
    "Filter the crystals, wash them with a small amount of ice-cold distilled water, and dry them between folds of filter paper."
  ],
  'c12': [
    "Procure different samples of solutions (e.g., fruit juices, standard acid/base dilutions, tap water, soapy water).",
    "Take 5 mL of each solution in separate, clean, labeled test tubes.",
    "Add 2 drops of Universal Indicator to each test tube.",
    "Shake the test tubes gently to mix the indicator.",
    "Observe the color change in each solution.",
    "Compare the colors with the pH color chart to determine the approximate pH value of each solution.",
    "Classify each solution as strongly acidic, weakly acidic, neutral, weakly basic, or strongly basic."
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
console.log(`Successfully applied ${replacedCount} chemistry procedures substitutions in total.`);

const fs = require('fs');

let content = fs.readFileSync('constants.ts', 'utf8');

// === CORRECTED MAPPINGS FROM OFFICIAL 2024-25 CBSE/ICSE/PUC SYLLABI ===

const class11 = [
    // Physics Class 11 (Measurement, Mechanics, Waves)
    'p1','p2','p3','p11','p12','p13','p14','p15',
    // Chemistry Class 11 (pH, Volumetric, Qualitative basics)
    'c1','c3','c5','c7','c8','c12',
    // Biology Class 11 (Cell Biology, Physiology, Plant Pigments)
    'b1','b2','b3','b4','b5','b11','b12','b15',
    // Math Class 11 (Functions, Trig, Conic Sections)
    'm1','m3','m4',
    // CS Class 11 (Logic Gates, Sorting, Number Systems)
    'cs1','cs2','cs3','cs5'
];

const class12 = [
    // Physics Class 12 (Electricity, Optics, Electronics)
    'p4','p5','p6','p7','p8','p9','p10','p16','p17',
    // Chemistry Class 12 (Salt Analysis, Kinetics, Thermochem, Organic)
    'c2','c4','c6','c9','c10','c11','c13','c14','c15',
    // Biology Class 12 (Reproduction, Genetics, Ecology)
    'b6','b7','b8','b9','b10','b13','b14',
    // Math Class 12 (Calculus, Vectors, Probability, Differential Eq)
    'm2','m5','m6','m7','m8','m9','m10',
    // CS Class 12 (Stacks, Queues, Search, File Handling, OOP)
    'cs4','cs6','cs7','cs8','cs9','cs10'
];

// All boards get all experiments
const allBoards = "['CBSE', 'Karnataka PUC', 'ICSE']";
const allBoardsJSON = '["CBSE", "Karnataka PUC", "ICSE"]';

function getStandardStr(id) {
    const is11 = class11.includes(id);
    const is12 = class12.includes(id);
    if (is11 && is12) return "['1st PUC / Class 11', '2nd PUC / Class 12']";
    if (is11) return "['1st PUC / Class 11']";
    if (is12) return "['2nd PUC / Class 12']";
    return "['1st PUC / Class 11', '2nd PUC / Class 12']"; // fallback: both
}

function getStandardStrJSON(id) {
    const is11 = class11.includes(id);
    const is12 = class12.includes(id);
    if (is11 && is12) return '["1st PUC / Class 11", "2nd PUC / Class 12"]';
    if (is11) return '["1st PUC / Class 11"]';
    if (is12) return '["2nd PUC / Class 12"]';
    return '["1st PUC / Class 11", "2nd PUC / Class 12"]';
}

const allIds = [...new Set([...class11, ...class12])];
let fixCount = 0;

allIds.forEach(id => {
    // Handle single-quote format: boards: ['CBSE', ...]
    // Find ALL occurrences of this id (some labs appear twice like p6-p12)
    let searchFrom = 0;
    while (true) {
        const idPattern1 = "id: '" + id + "'";
        const idPattern2 = '"id": "' + id + '"';
        
        let idx = content.indexOf(idPattern1, searchFrom);
        let isJSON = false;
        if (idx === -1) {
            idx = content.indexOf(idPattern2, searchFrom);
            isJSON = true;
        }
        if (idx === -1) break;

        // Find the next id or end of section to limit our search
        const nextIdSingle = content.indexOf("id: '", idx + 10);
        const nextIdJSON = content.indexOf('"id": "', idx + 10);
        let endBound;
        if (nextIdSingle === -1 && nextIdJSON === -1) endBound = content.length;
        else if (nextIdSingle === -1) endBound = nextIdJSON;
        else if (nextIdJSON === -1) endBound = nextIdSingle;
        else endBound = Math.min(nextIdSingle, nextIdJSON);

        let block = content.substring(idx, endBound);
        let changed = false;

        if (isJSON) {
            // JSON format: "boards": [...], "standards": [...]
            const newBlock = block
                .replace(/"boards"\s*:\s*\[.*?\]/g, '"boards": ' + allBoardsJSON)
                .replace(/"standards"\s*:\s*\[.*?\]/g, '"standards": ' + getStandardStrJSON(id));
            if (newBlock !== block) { block = newBlock; changed = true; }
        } else {
            // Single-quote format: boards: [...], standards: [...]
            const newBlock = block
                .replace(/boards:\s*\[.*?\]/g, 'boards: ' + allBoards)
                .replace(/standards:\s*\[.*?\]/g, 'standards: ' + getStandardStr(id));
            if (newBlock !== block) { block = newBlock; changed = true; }
        }

        if (changed) {
            content = content.substring(0, idx) + block + content.substring(endBound);
            fixCount++;
        }
        
        searchFrom = idx + block.length;
    }
});

fs.writeFileSync('constants.ts', content, 'utf8');
console.log(`Done! Applied fixes to ${fixCount} lab entries.`);
console.log('Class 11 IDs:', class11.join(', '));
console.log('Class 12 IDs:', class12.join(', '));

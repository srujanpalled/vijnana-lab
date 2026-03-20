const fs = require('fs');
const path = require('path');

const constantsPath = path.join(__dirname, 'constants.ts');
let content = fs.readFileSync(constantsPath, 'utf-8');

const class11Ids = new Set([
  // Physics
  'p1', 'p2', 'p4', 'p11', 'p12', 'p13', 'p14', 'p15',
  'p1_hi', 'p2_hi', 'p4_hi', 'p1_kn', 'p2_kn', 'p4_kn',
  // Chemistry
  'c1', 'c3', 'c5', 'c8', 'c9', 'c15',
  // Biology
  'b1', 'b2', 'b3', 'b4', 'b5', 'b11', 'b12', 'b15',
  // Math
  'm1', 'm2', 'm3', 'm4', 'm5',
  // CS
  'cs1', 'cs2', 'cs3', 'cs4', 'cs5', 'cs6'
]);

// 1. Remove ANY existing boards: or standards: lines to avoid duplicates.
// Matches anything like `  boards: ['CBSE', ...],` or `standards: [...]` on a single line.
let modified = content.replace(/^\s*(boards|standards):\s*\[.*?\],?\r?\n/gm, '');

// 2. Inject fresh tags under id: 'abc',
modified = modified.replace(/(^\s*id:\s*['"])([a-zA-Z0-9_]+)(['"],)(\s*)/gm, (match, prefix, idStr, suffix, spacing) => {
    let std = class11Ids.has(idStr) ? "'1st PUC / Class 11'" : "'2nd PUC / Class 12'";
    
    // Don't inject into Subject definitions
    if (['physics', 'chemistry', 'biology', 'math', 'cs'].includes(idStr)) {
        return match; 
    }

    return `${prefix}${idStr}${suffix}
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: [${std}],${spacing}`;
});

fs.writeFileSync(constantsPath, modified);
console.log('Successfully tagged all lab experiments in constants.ts without duplicates.');

import fs from 'fs';

const txt = fs.readFileSync('constants.js', 'utf8');

// The compiled JS defines export const SUBJECTS = [...]
// We can use a simple eval context
let mod = {};
eval(txt.replace('export const NAV_ITEMS', 'mod.NAV_ITEMS')
        .replace('export const SUBJECTS', 'mod.SUBJECTS')
        .replace(/import .*?;/g, '') // remove imports
        .replace(/export /g, '')); // remove exports

let output = '';
mod.SUBJECTS.forEach(s => {
    output += `\n=== ${s.name} ===\n`;
    s.labs.forEach(l => {
        output += `${l.id}: ${l.title} (Std: ${l.standards ? l.standards.join(',') : 'none'}) (Board: ${l.boards ? l.boards.join(',') : 'none'})\n`;
    });
});

fs.writeFileSync('lab_list.txt', output, 'utf8');
console.log('Done mapping.');

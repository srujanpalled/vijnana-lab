const fs = require('fs');
const txt = fs.readFileSync('constants.ts', 'utf8');
const subjectsMatch = [...txt.matchAll(/id:\s*'([a-z0-9_]+)',[\s\S]*?labs:\s*\[([\s\S]*?)(\n\s*\]|\n\s\}\s*\];)/g)];

let output = '';
subjectsMatch.forEach(s => {
    const subId = s[1];
    const section = s[2];
    const labsMatch = [...section.matchAll(/id:\s*'([a-z0-9_]+)'[\s\S]*?title:\s*(['\"].*?['\"])/g)];
    output += subId.toUpperCase() + ':\n';
    labsMatch.forEach(l => {
        output += `  ${l[1]}: ${l[2]}\n`;
    });
});

fs.writeFileSync('lab_list.txt', output, 'utf8');
console.log('Done!');

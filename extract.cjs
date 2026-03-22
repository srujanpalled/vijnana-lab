const fs = require('fs');
const lines = fs.readFileSync('constants.ts', 'utf8').split('\n');

let out = [];
let currentSubject = '';
let currentLab = '';

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("id: 'physics'")) currentSubject = "PHYSICS";
    if (line.startsWith("id: 'chemistry'")) currentSubject = "CHEMISTRY";
    if (line.startsWith("id: 'biology'")) currentSubject = "BIOLOGY";
    if (line.startsWith("id: 'math'")) currentSubject = "MATH";
    if (line.startsWith("id: 'cs'")) currentSubject = "COMPUTER SCIENCE";

    if (line.startsWith("id: 'p") || line.startsWith("id: 'c") || line.startsWith("id: 'b") || line.startsWith("id: 'm") || line.startsWith("id: 'cs")) {
        // Exclude subject IDs
        if (!['physics','chemistry','biology','math','cs'].includes(line.replace("id: '", "").replace("',", ""))) {
           currentLab = line.replace("id: '", "").replace("',", "").replace(/\"/g, "");
           out.push(`\n[${currentSubject}] ${currentLab}`);
        }
    }
    
    if (line.startsWith("title:")) {
       out.push("  " + line);
    }
}

fs.writeFileSync('labs_sync.txt', out.join('\n'));
console.log('Extraction complete');

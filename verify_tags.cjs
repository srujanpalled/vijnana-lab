const fs = require('fs');
const lines = fs.readFileSync('constants.ts', 'utf8').split('\n');

let currentSubject = '';
let currentLabId = '';
let currentTitle = '';
let currentBoards = '';
let currentStandards = '';
let labs = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith("id: 'physics'")) currentSubject = 'PHYSICS';
    else if (line.startsWith("id: 'chemistry'")) currentSubject = 'CHEMISTRY';
    else if (line.startsWith("id: 'biology'")) currentSubject = 'BIOLOGY';
    else if (line.startsWith("id: 'math'")) currentSubject = 'MATH';
    else if (line.startsWith("id: 'cs'")) currentSubject = 'CS';
    
    // Lab IDs (not subject IDs)
    const labMatch = line.match(/^id:\s*['"]([pcbm]\d+|cs\d+)['"]/);
    if (labMatch) {
        if (currentLabId) {
            labs.push({ subject: currentSubject, id: currentLabId, title: currentTitle, boards: currentBoards, standards: currentStandards });
        }
        currentLabId = labMatch[1];
        currentTitle = '';
        currentBoards = 'NONE';
        currentStandards = 'NONE';
    }
    
    if (line.startsWith("title:") || line.startsWith('"title":')) {
        currentTitle = line.replace(/^"?title"?\s*:\s*/, '').replace(/[,']/g, '').trim();
    }
    if (line.startsWith("boards:") || line.startsWith('"boards":')) {
        currentBoards = line;
    }
    if (line.startsWith("standards:") || line.startsWith('"standards":')) {
        currentStandards = line;
    }
}
// Push last lab
if (currentLabId) {
    labs.push({ subject: currentSubject, id: currentLabId, title: currentTitle, boards: currentBoards, standards: currentStandards });
}

let output = '';
let prevSubject = '';
for (const lab of labs) {
    if (lab.subject !== prevSubject) {
        output += `\n=== ${lab.subject} ===\n`;
        prevSubject = lab.subject;
    }
    output += `${lab.id}: ${lab.title}\n   Boards: ${lab.boards}\n   Standards: ${lab.standards}\n`;
}

fs.writeFileSync('classification_report.txt', output, 'utf8');
console.log(`Total labs classified: ${labs.length}`);
console.log('Report written to classification_report.txt');

require('ts-node').register({ transpileOnly: true });
const { SUBJECTS } = require('./constants.ts');
const fs = require('fs');

let output = '';
SUBJECTS.forEach(subject => {
    output += `\n=== ${subject.name.toUpperCase()} ===\n`;
    subject.labs.forEach(lab => {
        output += `${lab.id}: ${lab.title} (Std: ${lab.standards ? lab.standards.join(', ') : 'None'}) (Board: ${lab.boards ? lab.boards.join(', ') : 'None'})\n`;
    });
});

fs.writeFileSync('lab_list.txt', output, 'utf8');
console.log('List generated successfully.');

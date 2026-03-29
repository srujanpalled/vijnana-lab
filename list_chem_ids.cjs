const fs = require('fs');

const data = fs.readFileSync('data/chemistry_data.ts', 'utf8');

const regex = /id:\s*'([pcbmcs]+\d+)'/g;
const ids = [];
let match;
while ((match = regex.exec(data)) !== null) {
    if (match[1].startsWith('c')) {
        ids.push(match[1]);
    }
}

console.log("Chemistry IDs:");
console.log(JSON.stringify(ids));

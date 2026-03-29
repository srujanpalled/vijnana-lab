const fs = require('fs');

const data = fs.readFileSync('data/physics_data.ts', 'utf8');

const regex = /id:\s*'([pcbmcs]+\d+)'/g;
const ids = [];
let match;
while ((match = regex.exec(data)) !== null) {
    if (match[1].startsWith('p')) {
        ids.push(match[1]);
    }
}

console.log(JSON.stringify(ids));

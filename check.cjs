const fs = require('fs');
const txt = fs.readFileSync('constants.ts', 'utf8');
const idx = txt.indexOf("id: 'math'");
console.log(txt.substring(idx - 200, idx + 200));

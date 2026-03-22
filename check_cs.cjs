const fs = require('fs');
const c = fs.readFileSync('constants.ts', 'utf8');
const idCS = c.indexOf("id: 'computer_science'") !== -1 ? c.indexOf("id: 'computer_science'") : c.indexOf("Computer Science");
console.log(c.slice(idCS - 200, idCS + 200));

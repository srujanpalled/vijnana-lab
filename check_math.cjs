const fs = require('fs');
const c = fs.readFileSync('constants.ts', 'utf8');
const idMath = c.indexOf("id: 'math'");
fs.writeFileSync('math_context.txt', c.slice(idMath - 400, idMath + 400));

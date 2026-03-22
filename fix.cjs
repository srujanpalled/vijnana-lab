const fs = require('fs');
let c = fs.readFileSync('constants.ts', 'utf8');

c = c.replace('theory: "OOP relies on "objects" containing data and methods.', 'theory: "OOP relies on \\"objects\\" containing data and methods.');
c = c.replace('Use colspan="x" in a <td>', 'Use colspan=\\"x\\" in a <td>');
c = c.replace('Add <input type="text">', 'Add <input type=\\"text\\">');
c = c.replace('<input type="radio">', '<input type=\\"radio\\">');
c = c.replace('<input type="date">', '<input type=\\"date\\">');
c = c.replace('and <select> dropdowns', 'and <select> dropdowns'); // No quotes here

// Also fix any other possible unescaped inner double quotes
// e.g., if there are any others.
fs.writeFileSync('constants.ts', c, 'utf8');

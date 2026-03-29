const { Project, SyntaxKind } = require("ts-morph");
const path = require("path");
const fs = require("fs");

const project = new Project();
const files = [
    { file: 'data/physics_data.ts', prefix: 'p', subject: 'Physics' },
    { file: 'data/chemistry_data.ts', prefix: 'c', subject: 'Chemistry' },
    { file: 'data/biology_data.ts', prefix: 'b', subject: 'Biology' },
    { file: 'data/math_data.ts', prefix: 'm', subject: 'Math' },
    { file: 'data/cs_data.ts', prefix: 'cs', subject: 'CS' }
];

let total = 0, ok = 0;
let deficient = [];

for (const { file, subject } of files) {
    const sf = project.addSourceFileAtPath(path.join(__dirname, file));
    const vd = sf.getVariableDeclarations();
    for (const v of vd) {
        const obj = v.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (!obj) continue;
        const lp = obj.getProperty("labs");
        if (!lp) continue;
        const la = lp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (!la) continue;
        for (const el of la.getElements()) {
            if (el.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;
            total++;
            const idP = el.getProperty("id");
            let id = "?";
            if (idP) { const s = idP.getInitializerIfKind(SyntaxKind.StringLiteral); if (s) id = s.getLiteralValue(); }
            const cp = el.getProperty("content");
            if (!cp) { deficient.push({ id, subject, quiz: 0, viva: 0, app: 0 }); continue; }
            const co = cp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (!co) { deficient.push({ id, subject, quiz: 0, viva: 0, app: 0 }); continue; }
            const qp = co.getProperty("quizQuestions");
            const vp = co.getProperty("vivaQuestions");
            const ap = co.getProperty("realWorldApplications");
            const qc = qp ? (qp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression)?.getElements().length || 0) : 0;
            const vc = vp ? (vp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression)?.getElements().length || 0) : 0;
            const ac = ap ? (ap.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression)?.getElements().length || 0) : 0;
            if (qc < 10 || vc < 10 || ac < 6) {
                deficient.push({ id, subject, quiz: qc, viva: vc, app: ac });
            } else {
                ok++;
            }
        }
    }
}

let out = `Total: ${total}, Fully OK: ${ok}, Deficient: ${deficient.length}\n\n`;
for (const d of deficient) {
    out += `${d.subject} | ${d.id} | Quiz:${d.quiz} Viva:${d.viva} App:${d.app}\n`;
}
fs.writeFileSync('deficient_list.txt', out, 'utf8');
console.log("Done. See deficient_list.txt");

const { Project, SyntaxKind } = require("ts-morph");
const path = require("path");

const project = new Project();
const files = [
    'data/physics_data.ts',
    'data/chemistry_data.ts',
    'data/biology_data.ts',
    'data/math_data.ts',
    'data/cs_data.ts'
];

let totalLabs = 0;
let deficientViva = 0;
let deficientQuiz = 0;
let deficientApp = 0;

for (const file of files) {
    const sourceFile = project.addSourceFileAtPath(path.join(__dirname, file));
    
    // Find the exported variable
    const varDecls = sourceFile.getVariableDeclarations();
    for (const varDecl of varDecls) {
        const objLiteral = varDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (!objLiteral) continue;

        const labsProp = objLiteral.getProperty("labs");
        if (!labsProp) continue;

        const labsArray = labsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (!labsArray) continue;

        const elements = labsArray.getElements();
        totalLabs += elements.length;

        for (const element of elements) {
            if (element.getKind() !== SyntaxKind.ObjectLiteralExpression) continue;

            const idProp = element.getProperty("id");
            let expId = "Unknown";
            if (idProp) {
                const idValue = idProp.getInitializerIfKind(SyntaxKind.StringLiteral);
                if (idValue) expId = idValue.getLiteralValue();
            }

            const contentProp = element.getProperty("content");
            if (!contentProp) {
                deficientViva++;
                deficientQuiz++;
                deficientApp++;
                continue;
            }

            const contentObj = contentProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (!contentObj) {
                deficientViva++;
                deficientQuiz++;
                deficientApp++;
                continue;
            }

            // Check Viva
            const vivaProp = contentObj.getProperty("vivaQuestions");
            if (!vivaProp) {
                deficientViva++;
            } else {
                const arr = vivaProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
                if (!arr || arr.getElements().length < 10) deficientViva++;
            }

            // Check Quiz
            const quizProp = contentObj.getProperty("quizQuestions");
            if (!quizProp) {
                deficientQuiz++;
            } else {
                const arr = quizProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
                if (!arr || arr.getElements().length < 10) deficientQuiz++;
            }

            // Check Apps
            const appProp = contentObj.getProperty("realWorldApplications");
            if (!appProp) {
                deficientApp++;
            } else {
                const arr = appProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
                if (!arr || arr.getElements().length < 6) deficientApp++;
            }
        }
    }
}

// Calculate percentages
const calcPct = (count, total) => ((count / total) * 100).toFixed(2);

const fs = require('fs');
let out = "=== Vijnana Lab Coverage Analysis ===\n";
out += `Total Experiments Found: ${totalLabs}\n`;
out += `Experiments with < 10 Viva Questions: ${deficientViva} out of ${totalLabs} (${calcPct(deficientViva, totalLabs)}%)\n`;
out += `Experiments with < 10 Quiz Questions: ${deficientQuiz} out of ${totalLabs} (${calcPct(deficientQuiz, totalLabs)}%)\n`;
out += `Experiments with < 6 Applications: ${deficientApp} out of ${totalLabs} (${calcPct(deficientApp, totalLabs)}%)\n`;

fs.writeFileSync('analysis_report.txt', out, 'utf8');
console.log("Written to analysis_report.txt");

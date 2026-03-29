const { Project, SyntaxKind } = require("ts-morph");
const fs = require("fs");
const path = require("path");

const subjectMap = {
    'physics': 'data/physics_data.ts',
    'chemistry': 'data/chemistry_data.ts',
    'biology': 'data/biology_data.ts',
    'math': 'data/math_data.ts',
    'cs': 'data/cs_data.ts'
};

async function injectData(subjectName, dataObj) {
    const filePath = path.join(__dirname, subjectMap[subjectName]);
    if (!fs.existsSync(filePath)) {
        console.error("File not found:", filePath);
        return;
    }

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(filePath);
    
    // Find the exported variable
    const varDecl = sourceFile.getVariableDeclaration(`${subjectName}Data`);
    if (!varDecl) {
        console.error("Variable not found");
        return;
    }

    const objLiteral = varDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
    if (!objLiteral) {
        console.error("Not an object literal");
        return;
    }

    const labsProp = objLiteral.getProperty("labs");
    if (!labsProp) return;

    const labsArray = labsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (!labsArray) return;

    const modifiedIds = [];

    labsArray.getElements().forEach(element => {
        if (element.getKind() !== SyntaxKind.ObjectLiteralExpression) return;
        
        const idProp = element.getProperty("id");
        if (!idProp) return;
        
        const idValueProp = idProp.getInitializerIfKind(SyntaxKind.StringLiteral);
        if (!idValueProp) return;
        
        const idValue = idValueProp.getLiteralValue();
        
        // If we have enhancements for this ID
        if (dataObj[idValue]) {
            let contentProp = element.getProperty("content");
            if (!contentProp) {
                element.addPropertyAssignment({ name: "content", initializer: "{}" });
                contentProp = element.getProperty("content");
            }

            const contentObj = contentProp.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
            if (!contentObj) return;

            // Remove existing if any to overwrite
            ['quizQuestions', 'vivaQuestions', 'realWorldApplications'].forEach(propName => {
                const existing = contentObj.getProperty(propName);
                if (existing) existing.remove();
            });

            // Add new properties
            if (dataObj[idValue].quizQuestions) {
                contentObj.addPropertyAssignment({
                    name: "quizQuestions",
                    initializer: JSON.stringify(dataObj[idValue].quizQuestions, null, 2)
                });
            }
            if (dataObj[idValue].vivaQuestions) {
                contentObj.addPropertyAssignment({
                    name: "vivaQuestions",
                    initializer: JSON.stringify(dataObj[idValue].vivaQuestions, null, 2)
                });
            }
            if (dataObj[idValue].realWorldApplications) {
                contentObj.addPropertyAssignment({
                    name: "realWorldApplications",
                    initializer: JSON.stringify(dataObj[idValue].realWorldApplications, null, 2)
                });
            }
            modifiedIds.push(idValue);
        }
    });

    sourceFile.saveSync();
    console.log(`Successfully injected data into ${modifiedIds.length} experiments in ${subjectName}: ${modifiedIds.join(', ')}`);
}

module.exports = { injectData };

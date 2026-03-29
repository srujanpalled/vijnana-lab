const { Project, SyntaxKind } = require("ts-morph");
const fs = require("fs");
const path = require("path");

function run() {
    const project = new Project();
    
    const constantsFilePath = path.join(__dirname, "constants.ts");
    const dataDir = path.join(__dirname, "data");

    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }

    const sourceFile = project.addSourceFileAtPath(constantsFilePath);

    // Find the export const SUBJECTS statement
    const subjectsDecl = sourceFile.getVariableDeclaration("SUBJECTS");
    
    if (!subjectsDecl) {
        console.error("Could not find const SUBJECTS declarative");
        return;
    }

    const arrayLiteral = subjectsDecl.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
    if (!arrayLiteral) {
        console.error("SUBJECTS is not initialized with an array literal");
        return;
    }

    const elements = arrayLiteral.getElements();
    console.log(`Found ${elements.length} subject entries.`);

    const extractedIdentifiers = [];

    // Assuming order: Physics, Chemistry, Biology, Math, CS
    const subjectNames = [
        { key: "physics", filename: "physics_data.ts", varName: "physicsData" },
        { key: "chemistry", filename: "chemistry_data.ts", varName: "chemistryData" },
        { key: "biology", filename: "biology_data.ts", varName: "biologyData" },
        { key: "math", filename: "math_data.ts", varName: "mathData" },
        { key: "cs", filename: "cs_data.ts", varName: "csData" }
    ];

    elements.forEach((element) => {
        // Must be an object literal
        if (element.getKind() !== SyntaxKind.ObjectLiteralExpression) return;
        
        const idProp = element.getProperty("id");
        if (!idProp) return;
        
        // Find which subject it is based on id value
        const idValueProp = idProp.getInitializerIfKind(SyntaxKind.StringLiteral);
        if (!idValueProp) return;
        
        const idValue = idValueProp.getLiteralValue();
        
        const matchingSubject = subjectNames.find(s => s.key === idValue);
        if (matchingSubject) {
            console.log(`Extracting ${idValue}...`);
            const objectText = element.getText();
            
            // Create the new file in /data
            const imports = `import { SubjectType } from '../types';\nimport { SubjectData } from '../types';\n\n`;
            // Some icons might be needed (e.g. from lucide-react), let's just copy them to the main export later if needed
            // Wait, SubjectData uses LucideIcon. Icons are imported in constants.ts
            // Actually, wait, constants imports Atom, FlaskConical, Dna, Calculator, MonitorPlay.
            // Let's just output the `export const ${varName}: SubjectData = ${objectText};`
            
            let fileContent = `import { SubjectData } from '../types';\n`;
            fileContent += `import { SubjectType } from '../types';\n`;
            fileContent += `import { Atom, FlaskConical, Dna, Calculator, MonitorPlay } from 'lucide-react';\n\n`;
            fileContent += `export const ${matchingSubject.varName}: SubjectData = ${objectText};\n`;
            
            fs.writeFileSync(path.join(dataDir, matchingSubject.filename), fileContent, "utf8");
            
            extractedIdentifiers.push(matchingSubject);
            
            // Re-write the element in the original AST to be just the variable name
            // (e.g., `physicsData`)
            element.replaceWithText(matchingSubject.varName);
        }
    });

    // Add imports at the top of constants.ts for the newly extracted variables
    extractedIdentifiers.forEach((mod) => {
        sourceFile.addImportDeclaration({
            namedImports: [{ name: mod.varName }],
            moduleSpecifier: `./data/${mod.filename.replace('.ts', '')}`
        });
    });

    sourceFile.saveSync();
    console.log("Extraction complete!");
}

run();

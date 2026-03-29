const { Project, SyntaxKind } = require("ts-morph");
const path = require("path");

const project = new Project();
const files = ['physics_data.ts', 'chemistry_data.ts', 'biology_data.ts', 'math_data.ts', 'cs_data.ts'];

for (const file of files) {
    const sourceFile = project.addSourceFileAtPath(path.join(__dirname, 'data', file));
    const varDecls = sourceFile.getVariableDeclarations();
    
    for (const varDecl of varDecls) {
        const obj = varDecl.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression);
        if (!obj) continue;
        
        const labsProp = obj.getProperty("labs");
        if (!labsProp) continue;
        
        const labsArray = labsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (!labsArray) continue;
        
        const elements = labsArray.getElements();
        const toRemove = [];
        
        for (let i = elements.length - 1; i >= 0; i--) {
            const el = elements[i];
            if (el.getKind() !== SyntaxKind.ObjectLiteralExpression) {
                toRemove.push(i);
                continue;
            }
            
            const idProp = el.getProperty("id");
            if (!idProp) {
                toRemove.push(i);
                continue;
            }
            
            const strLit = idProp.getInitializerIfKind(SyntaxKind.StringLiteral);
            if (!strLit) {
                toRemove.push(i);
                continue;
            }
        }
        
        console.log(`${file}: Removing ${toRemove.length} phantom entries out of ${elements.length}`);
        
        // Remove from end to start to preserve indices
        for (const idx of toRemove) {
            labsArray.removeElement(idx);
        }
    }
    
    sourceFile.saveSync();
}

console.log("Cleanup complete!");

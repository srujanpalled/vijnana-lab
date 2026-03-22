const fs = require('fs');
const FILE_PATH = 'c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts';
let content = fs.readFileSync(FILE_PATH, 'utf8');

const { physics, chemistry, bio, math, cs } = require('./labs_data.cjs');

function injectLabs(subjectId, endStr, labsArray) {
    let startIdx = content.indexOf(subjectId);
    if (startIdx === -1) {
        console.error("Subject ID not found:", subjectId);
        return;
    }
    
    // Find the very end of the Subject object's labs array using exact indentation matching
    // Windows might have \r\n, so we normalize to ignore \r
    let endIdx = content.indexOf(endStr, startIdx);
    
    if (endIdx === -1) {
        // Try looking for versions with \r
        const rEndStr = endStr.replace(/\n/g, '\r\n');
        endIdx = content.indexOf(rEndStr, startIdx);
        if (endIdx === -1) {
            console.error("End pattern not found for", subjectId);
            return;
        }
        endStr = rEndStr;
    }

    let labsStr = JSON.stringify(labsArray, null, 8);
    labsStr = labsStr.substring(1, labsStr.length - 1);
    
    if (labsStr.trim() === '') return;
    
    // Inject right before the closing bracket of the labs array
    content = content.substring(0, endIdx) + ',' + labsStr + '\n' + content.substring(endIdx);
}

injectLabs("id: 'physics'", "\n    ]\n  },", physics);
injectLabs("id: 'chemistry'", "\n    ]\n  },", chemistry);
injectLabs("id: 'biology'", "\n    ]\n  },", bio);
injectLabs("id: 'math'", "\n    ]\n  },", math);
injectLabs("id: 'cs'", "\n    ]\n  }\n];", cs);

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log("Successfully perfectly injected all subjects!");

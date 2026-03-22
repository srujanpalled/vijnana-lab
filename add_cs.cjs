const fs = require('fs');

const FILE_PATH = 'c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts';
let content = fs.readFileSync(FILE_PATH, 'utf8');

const newCSLabs = `,
      {
          id: 'cs11',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11', '2nd PUC / Class 12'], 
          title: 'Basic Array Operations', 
          description: 'Insert, Delete, and find frequency of elements.', 
          difficulty: 'Easy', 
          duration: '35 min', 
          category: 'Data Structures',
          content: { 
            aim: "To write a program to perform insertion, deletion, and frequency counting on a linear array.", 
            requirements: ["Computer", "C++ / Python / Java IDE"], 
            theory: "An array stores elements in contiguous memory. Inserting shifts following elements right. Deleting shifts succeeding elements left. Frequency counts occurrences of a specific target value by traversing.", 
            procedure: [
              "Declare an array of specific size and input 'n' initial elements into it.",
              "For Insertion: Take input for the element to insert and the position. Shift elements from 'n-1' down to the position one place right. Insert the element and increment 'n'.",
              "For Deletion: Take input for the position to delete. Shift elements from 'position+1' up to 'n-1' one place left. Decrement 'n'.",
              "For Frequency: Take input for the search element. Iterate from 0 to n-1. Each time the array element matches the search element, increment a counter.",
              "Output the modified array or the final count."
            ], 
            objectives: ["Understand memory shifts.", "Traverse basic collections."] 
          }
      },
      {
          id: 'cs12',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'HTML Forms & Timetables', 
          description: 'Create a semantic web page using HTML tables and inputs.', 
          difficulty: 'Medium', 
          duration: '45 min', 
          category: 'Web Development',
          content: { 
            aim: "To design a web page creating a study timetable using HTML tables and an admission form using form elements.", 
            requirements: ["Computer", "Text Editor (VS Code / Notepad)", "Web Browser"], 
            theory: "HTML structures standard web design. <table>, <tr>, <th>, <td> build grids. <form>, <input>, <select> gather user data. Attributes like rowspan and colspan merge table cells.", 
            procedure: [
              "Open an editor and write the basic HTML skeleton (<html>, <head>, <body>).",
              "To create the Timetable: Use the <table> tag. Add a border. Construct header rows for Days/Periods.",
              "Use <tr> for each day of the week, and <td> for the subjects. Use colspan=\"x\" in a <td> to denote recess/break bridging multiple periods.",
              "To create the Form: Under a new heading, use the <form> tag.",
              "Add <input type=\"text\"> for Name, <input type=\"radio\"> for Gender, <input type=\"date\"> for DOB, and <select> dropdowns for subjects/courses.",
              "Add a <input type=\"submit\"> button to finalize the form interface.",
              "Save as .html and view in a browser to debug layout issues."
            ], 
            objectives: ["Build core web layout.", "Implement data ingestion UI."] 
          }
      },
      {
          id: 'cs13',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Object-Oriented Programming', 
          description: 'Implement Classes, Objects, and Inheritance.', 
          difficulty: 'Hard', 
          duration: '60 min', 
          category: 'Programming',
          content: { 
            aim: "To write an object-oriented program to demonstrate classes, objects, data encapsulation, and inheritance (single/multiple).", 
            requirements: ["Computer", "C++ / Python / Java IDE"], 
            theory: "OOP relies on \"objects\" containing data and methods. Classes act as blueprints. Encapsulation hides data via private access specifiers. Inheritance allows a derived class to acquire properties of a base class.", 
            procedure: [
              "Define a base class 'Employee' with private data members for basic salary and name.",
              "Include public methods to set data, calculate gross salary (adding DA and HRA allowances), and display details.",
              "Create a derived class 'Manager' that inherits publicly from 'Employee'.",
              "Add additional data members in 'Manager' for bonus and team size.",
              "Override the display/calculate methods to include the bonus in the gross salary.",
              "In the main function, instantiate objects for the 'Manager' class and the generic 'Employee' class.",
              "Call the methods using the objects and observe how the derived object correctly utilizes base class properties."
            ], 
            objectives: ["Map real-world concepts to software.", "Architect scalable applications."] 
          }
      }`;

let updated = content.replace(/\s*\]\s*\}\s*\];\s*$/, newCSLabs + '\n    ]\n  }\n];\n');
if (updated !== content) {
    fs.writeFileSync(FILE_PATH, updated, 'utf8');
    console.log("Successfully injected CS labs at the end of the file.");
} else {
    console.log("Regex did not match EOF block.");
}

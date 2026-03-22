const fs = require('fs');

const FILE_PATH = 'c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts';
let content = fs.readFileSync(FILE_PATH, 'utf8');

const newBiologyLabs = `,
      {
          id: 'b13',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Compound Microscope', 
          description: 'Parts and working of a compound microscope.', 
          difficulty: 'Easy', 
          duration: '30 min', 
          category: 'Microscopy',
          content: { 
            aim: "To study the parts and working of a compound microscope.", 
            requirements: ["Compound Microscope", "Prepared slide", "Lens cleaning tissue"], 
            theory: "A compound microscope uses a system of multiple lenses (objective and eyepiece) to achieve high magnification of minute transparent objects.", 
            procedure: [
              "Identify the mechanical parts: base, pillar, inclination joint, arm, stage, body tube, coarse and fine adjustment knobs.",
              "Identify the optical parts: mirror, condenser, objective lenses (low and high power), and eyepiece.",
              "Place the microscope where there is sufficient indirect light.",
              "Adjust the mirror (concave side) while looking through the eyepiece to illuminate the field of view brightly.",
              "Place a prepared slide on the stage and secure it with the clips.",
              "Use the coarse adjustment knob to focus the object under low power.",
              "Carefully switch to high power and use only the fine adjustment knob to bring the image into sharp focus."
            ], 
            objectives: ["Proper handling of microscopes.", "Understand simple optics."] 
          }
      },
      {
          id: 'b14',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11', '2nd PUC / Class 12'], 
          title: 'Specimen Identification', 
          description: 'Identify common plant and animal specimens/slides.', 
          difficulty: 'Medium', 
          duration: '60 min', 
          category: 'Taxonomy',
          content: { 
            aim: "To identify and study various given specimens and prepared slides for spotting.", 
            requirements: ["Preserved specimens (e.g. Earthworm, Frog, Starfish)", "Prepared slides (e.g. Amoeba, T.S. of Dicot Stem)", "Microscope"], 
            theory: "Spotting involves careful observation of identifying morphological or anatomical features to classify an organism into its correct phylum and class.", 
            procedure: [
              "Observe each specimen/slide one by one for exactly 2 to 3 minutes.",
              "Note the macroscopic or microscopic distinct characteristics.",
              "Draw a neat, well-labeled diagram of the observed specimen.",
              "Identify the specimen and write its systematic position (classification).",
              "List at least two key characteristic features that justify the identification."
            ], 
            objectives: ["Improve observation skills.", "Learn animal/plant taxonomy."] 
          }
      },
      {
          id: 'b15',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Ganong\\'s Potometer', 
          description: 'Measure the rate of transpiration.', 
          difficulty: 'Hard', 
          duration: '45 min', 
          category: 'Plant Physiology',
          content: { 
            aim: "To study the rate of transpiration in a leafy shoot using Ganong's potometer.", 
            requirements: ["Ganong's potometer", "Freshly cut leafy shoot", "Water", "Vaseline", "Stopwatch", "Beaker"], 
            theory: "Transpiration is the loss of water in the form of vapor from the aerial parts of a plant. A potometer effectively measures the rate of water uptake, which is almost equal to the rate of transpiration.", 
            procedure: [
              "Fill the potometer completely with water, ensuring no air bubbles are trapped.",
              "Cut a fresh leafy shoot under water to prevent air locking in the xylem.",
              "Fit the shoot into the rubber cork hole of the potometer tightly.",
              "Seal all joints with vaseline to make the apparatus completely airtight.",
              "Introduce a single air bubble into the capillary tube by lifting its bent end out of the water colored with eosin dye.",
              "Record the initial position of the air bubble on the graduated scale.",
              "Note the position of the bubble at regular intervals (e.g., every 5 minutes) as it moves along the scale.",
              "Calculate the rate of transpiration per unit time."
            ], 
            objectives: ["Understand water pull mechanism.", "Measure physiological rates."] 
          }
      },
      {
          id: 'b16',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Respiration in Seeds', 
          description: 'Demonstrate anaerobic or aerobic respiration in germinating seeds.', 
          difficulty: 'Medium', 
          duration: '40 min', 
          category: 'Plant Physiology',
          content: { 
            aim: "To demonstrate that CO2 is released during aerobic respiration by germinating seeds.", 
            requirements: ["Conical flask", "Germinating gram seeds", "Small test tube", "KOH solution", "Delivery tube", "Beaker containing water", "Rubber corks"], 
            theory: "Respiration is the metabolic process where organic substances are broken down to release energy. Germinating seeds respire actively, consuming O2 and releasing CO2. KOH absorbs the released CO2, creating a partial vacuum.", 
            procedure: [
              "Place about 20-30 germinating gram seeds in a conical flask.",
              "Suspend a small test tube containing 20% concentrated KOH solution inside the flask using a thread.",
              "Close the flask tightly with a one-holed rubber cork fitted with a bent glass delivery tube.",
              "Submerge the free end of the delivery tube into a beaker containing colored water.",
              "Ensure all joints are airtight using vaseline.",
              "Leave the setup undisturbed for an hour.",
              "Observe the rise of the colored water level in the delivery tube. The rise indicates that CO2 evolved was absorbed by KOH, reducing the pressure inside the flask."
            ], 
            objectives: ["Confirm byproducts of respiration.", "Demonstrate gas exchange."] 
          }
      },
      {
          id: 'b17',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Salivary Amylase Action', 
          description: 'Study the effect of temperature and pH on salivary amylase.', 
          difficulty: 'Medium', 
          duration: '45 min', 
          category: 'Biochemistry',
          content: { 
            aim: "To study the action of salivary amylase on starch and the effect of temperature on it.", 
            requirements: ["Test tubes", "Starch solution (1%)", "Saliva collection beaker", "Iodine solution", "Water bath", "Thermometer", "Spotting plate"], 
            theory: "Salivary amylase (ptyalin) is an enzyme that digests starch into maltose. Its activity is maximum at the optimum human body temperature (37°C) and optimum pH (6.8). High temperatures denature it.", 
            procedure: [
              "Rinse your mouth and collect about 2-3 mL of saliva in a beaker. Dilute it with 20 mL of distilled water to make a saliva solution.",
              "Take three identical test tubes and label them A, B, and C.",
              "Add 5 mL of 1% starch solution to each test tube.",
              "Place test tube A in ice (5°C), B in a water bath at 37°C, and C in boiling water (100°C) for 10 minutes.",
              "Add 1 mL of the diluted saliva solution to each test tube simultaneously and start the stopwatch.",
              "Every minute, take a drop from each test tube and mix it with a drop of iodine solution on a spotting plate.",
              "Continue taking drops until the mixture no longer gives a blue-black color with iodine (achromic point).",
              "Record the time taken for complete digestion of starch in each temperature condition."
            ], 
            objectives: ["Understand enzyme kinetics.", "Observe protein denaturation."] 
          }
      }`;

const newMathLabs = `,
      {
          id: 'm11',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Sets and Relations', 
          description: 'Visualize intersections, unions, and types of relations.', 
          difficulty: 'Easy', 
          duration: '30 min', 
          category: 'Algebra',
          content: { 
            aim: "To visualize concepts of sets, subsets, intersections, and unions using Venn diagrams, and construct equivalence relations.", 
            requirements: ["Graph paper", "Colored pencils", "Ruler", "Compass"], 
            theory: "Sets represented as circles (Venn diagrams) show logical relationships between collections. A relation R on A is an equivalence relation if it is reflexive (aRa), symmetric (aRb -> bRa), and transitive (aRb & bRc -> aRc).", 
            procedure: [
              "Draw a large rectangle to represent the Universal Set (U).",
              "Draw two intersecting circles, A and B, inside the rectangle.",
              "Color the region common to both circles to highlight A ∩ B.",
              "Draw a separate diagram tracing the entirety of both circles to highlight A ∪ B.",
              "Construct a set A = {1, 2, 3}. Define a relation R = {(1,1), (2,2), (3,3), (1,2), (2,1)}.",
              "Verify on paper that R is reflexive and symmetric, but check if it's transitive to deduce equivalence."
            ], 
            objectives: ["Build core set theory logic.", "Graphically process relations."] 
          }
      },
      {
          id: 'm12',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11'], 
          title: 'Complex Numbers Representation', 
          description: 'Plot complex numbers on an Argand plane.', 
          difficulty: 'Medium', 
          duration: '40 min', 
          category: 'Algebra',
          content: { 
            aim: "To plot complex numbers on an Argand plane and understand modulus and argument geometrically.", 
            requirements: ["Graph paper", "Protractor", "Ruler"], 
            theory: "A complex number z = x + iy is plotted as the point (x, y) on a Cartesian plane where the x-axis is real and the y-axis is imaginary. The distance from the origin is its modulus ||z||, and the angle it makes with the positive x-axis is its argument.", 
            procedure: [
              "Mark perpendicular X and Y axes on the graph paper. Label X as Real and Y as Imaginary.",
              "Take a complex number z1 = 3 + 4i. Plot the point P(3,4).",
              "Join the origin O(0,0) to P with a straight line.",
              "Measure the length of OP to find the modulus (should be 5).",
              "Use a protractor to measure the angle OP makes with the positive real axis (argument).",
              "Plot the conjugate z2 = 3 - 4i at Q(3,-4) and note its reflection over the Real axis.",
              "Geometrically add two complex numbers using the parallelogram law."
            ], 
            objectives: ["Geometric intuition for imaginary numbers.", "Visual arithmetic."] 
          }
      },
      {
          id: 'm13',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['1st PUC / Class 11', '2nd PUC / Class 12'], 
          title: 'Limits & Derivatives', 
          description: 'Visualize limits and tangents to curves.', 
          difficulty: 'Hard', 
          duration: '45 min', 
          category: 'Calculus',
          content: { 
            aim: "To demonstrate the concept of a limit converging to a point, and drawing tangents to show geometric derivation of a derivative at a point.", 
            requirements: ["Graph paper", "Ruler", "Curve stencils or string"], 
            theory: "The derivative of a function at a point geometrically represents the slope of the tangent line to the curve at that point. Limits approach an exact value as the independent variable approaches a target.", 
            procedure: [
              "Plot the graph of the function f(x) = x^2 on a graph paper.",
              "Choose a target point P(2,4) on the curve.",
              "Pick a point Q1(3,9) on the curve and draw a secant line joining P and Q1. Calculate its slope.",
              "Pick another point Q2(2.5, 6.25) closer to P and draw another secant line. Calculate its slope.",
              "Observe how the slope of the secant line approaches a limiting value as Q moves closer and closer to P.",
              "Draw the tangent exactly at P and measure its slope (the derivative, which is 4)."
            ], 
            objectives: ["Bridge algebra with geometry.", "Grasp first principles of calculus."] 
          }
      },
      {
          id: 'm14',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Linear Programming', 
          description: 'Solve an optimization LPP graphically.', 
          difficulty: 'Medium', 
          duration: '40 min', 
          category: 'Applied Math',
          content: { 
            aim: "To find the optimal (maximum or minimum) value of a linear objective function graphically subject to a set of linear inequalities.", 
            requirements: ["Graph paper", "Ruler"], 
            theory: "In linear programming, constraints form a convex polygon called the feasible region. By the Corner Point Theorem, the optimal solution for the objective function always lies at one of the vertices of this feasible region.", 
            procedure: [
              "Convert given inequality constraints into equations of lines (e.g., 2x + y = 104).",
              "Find the x and y intercepts for each line by setting y=0 and x=0 respectively.",
              "Plot the lines accurately on a graph paper.",
              "Determine the feasible region by checking which side of the line satisfies the inequality (using a test point like the origin).",
              "Shade the common region satisfied by all constraints.",
              "Identify all the corner points (vertices) of the shaded feasible polygon.",
              "Substitute the (x,y) coordinates of each corner point into the objective function Z = ax + by to find the max/min value."
            ], 
            objectives: ["Solve real-world optimization problems.", "Intersect lines graphically."] 
          }
      },
      {
          id: 'm15',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
          standards: ['2nd PUC / Class 12'], 
          title: 'Differential Equations', 
          description: 'Explore slope fields and geometric solutions.', 
          difficulty: 'Hard', 
          duration: '35 min', 
          category: 'Calculus',
          content: { 
            aim: "To sketch a slope field (direction field) to visually represent the general solution to a first-order differential equation.", 
            requirements: ["Graph paper", "Ruler", "Pencil"], 
            theory: "A differential equation dy/dx = f(x,y) assigns a slope to every point (x,y) in the plane. A small line segment with that slope drawn at each point forms an array called a slope field, which reveals the general shape of solution curves.", 
            procedure: [
              "Consider a simple differential equation, like dy/dx = x - y.",
              "Set up a grid of points with integer coordinates from -3 to 3 on both axes.",
              "Select a point (e.g., (1,0)). Calculate the slope there: 1 - 0 = 1.",
              "At coordinate (1,0), draw a very short line segment with a slope of 1.",
              "Repeat this calculation and drawing for every point in the grid.",
              "Pick an initial condition, say y(0) = 1. Start at (0,1) and follow the direction of the surrounding little slopes to trace a continuous curve through the field.",
              "Observe the exponential relaxation behavior of the curve."
            ], 
            objectives: ["Visualize differential equations.", "Trace specific solutions."] 
          }
      }`;

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

let updated = content;

// Replace for Biology
const biologyRegex = /(id:\s*'biology'[\s\S]*?labs:\s*\[[\s\S]*?)(\s*\]\s*\},)/;
if (biologyRegex.test(updated)) {
  updated = updated.replace(biologyRegex, `$1${newBiologyLabs}$2`);
} else {
  console.log("Failed to find Biology insertion point");
}

// Replace for Math
const mathRegex = /(id:\s*'math'[\s\S]*?labs:\s*\[[\s\S]*?)(\s*\]\s*\},)/;
if (mathRegex.test(updated)) {
  updated = updated.replace(mathRegex, `$1${newMathLabs}$2`);
} else {
  console.log("Failed to find Math insertion point");
}

// Replace for CS
// cs is the last item so the regex ends before the end of the file or the end of the array
const csRegex = /(id:\s*'computer_science'[\s\S]*?labs:\s*\[[\s\S]*?)(\n\s*\]\s*\}\s*\];)/;
if (csRegex.test(updated)) {
  updated = updated.replace(csRegex, `$1${newCSLabs}$2`);
} else {
  console.log("Failed to find Computer Science insertion point");
}

fs.writeFileSync(FILE_PATH, updated, 'utf8');
console.log('Successfully injected Biology, Math, and CS missing experiments!');

const fs = require('fs');

const FILE_PATH = 'c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts';
let content = fs.readFileSync(FILE_PATH, 'utf8');

const replacements = {
  'm1': [
    "Open the graphing simulation interface.",
    "Select the type of mathematical function (e.g., linear, quadratic, trigonometric) from the dropdown menu.",
    "Input the variables and coefficients for the chosen function in the input fields provided.",
    "Adjust the X and Y axis scale range using the zoom or scale controls to ensure the curve is fully visible.",
    "Click the \\\"Plot\\\" or \\\"Generate Graph\\\" button to render the curve.",
    "Analyze turning points, intercepts, and asymptotic behavior of the generated graph by hovering over the curve."
  ],
  'm2': [
    "Enter the mathematical function for which the area under the curve is to be determined.",
    "Set the lower integration limit (a) and the upper integration limit (b) in the designated input fields.",
    "Choose the method of numerical approximation (e.g., Riemann Sums, Trapezoidal rule).",
    "Specify the number of intervals (n) to set the precision of the numerical approximation.",
    "Click \\\"Calculate\\\" to compute the definite integral and visually shade the area under the curve.",
    "Observe how increasing \\\'n\\\' makes the approximated shaded area closer to the exact integral value."
  ],
  'm3': [
    "Open the interactive Unit Circle simulator.",
    "Drag the point along the circumference of the circle having a radius of 1 unit.",
    "Observe the formation of the right-angled triangle with the radius acting as the hypotenuse.",
    "Note the changing X coordinate (Cosine) and Y coordinate (Sine) automatically on the screen.",
    "Note the angle formed (in degrees and radians) corresponding to the point\\'s position.",
    "Verify the Pythagoras theorem x^2 + y^2 = 1 for different angles to understand trigonometric identities."
  ],
  'm4': [
    "Select the specific conic section to explore: Circle, Ellipse, Parabola, or Hyperbola.",
    "Adjust the sliders for the standard equation parameters (e.g., a, b, h, k).",
    "Observe how the cutting plane intersects the 3D double cone to form the 2D curve.",
    "Analyze how changing the parameters shifts the center (h, k) or stretches the curve.",
    "Locate the foci, directrix, and vertices displayed on the generated 2D graph.",
    "Correlate the geometric visualization with the algebraic equation."
  ],
  'm5': [
    "Set up the 2D or 3D coordinate plane in the vector simulation.",
    "Input the components (x, y, z) for Vector A and Vector B to define their magnitude and direction.",
    "Select a vector operation: Addition, Subtraction, Dot Product, or Cross Product.",
    "For Vector Addition, visualize the Head-to-Tail or Parallelogram method dynamically drawing the resultant vector.",
    "For Dot/Cross products, observe the numerical output and the orthogonal vector generated (if applicable).",
    "Adjust the magnitude or angle of the initial vectors to see real-time updates in the resultant."
  ],
  'm6': [
    "Select the base trigonometric function (e.g., sine).",
    "Restrict the domain of the base function (e.g., -pi/2 to pi/2 for sine) to make it one-to-one.",
    "Click \\\"Invert\\\" to reflect the restricted graph across the line y = x.",
    "Observe the newly plotted inverse function (e.g., arcsine).",
    "Identify the specialized domain and ranges of the resulting inverse function.",
    "Input a specific value x to compute and verify the principal value of the inverse function."
  ],
  'm7': [
    "Input a polynomial or continuous function into the function field.",
    "The simulation will plot the given function\\'s curve.",
    "The system computes the first derivative f\\'(x) and sets it to zero to find the critical points (stationary points).",
    "The system computes the second derivative f\\'\\'(x) to apply the second-derivative test.",
    "Observe the highlighted points on the graph: Local Maxima (where curve changes from increasing to decreasing) and Local Minima (decreasing to increasing).",
    "Verify the points against the calculated derivative conditions."
  ],
  'm8': [
    "Enter the function equation representing the upper boundary curve.",
    "If finding the area between two curves, enter the second function equation.",
    "Set the definitive integration limits (x = a to x = b).",
    "The system generates points highlighting the bounded region on the Cartesian plane.",
    "Review the highlighted area correctly matching the analytically calculated definite integration.",
    "Modify the boundary functions or limits to dynamically update the shaded area."
  ],
  'm9': [
    "Select the type of distribution (e.g., Binomial, Normal, or Poisson distribution).",
    "Input the required parameters: for Binomial (n: number of trials, p: probability of success), for Normal (Mean mu, Standard Deviation sigma).",
    "View the generated probability mass or density function curve.",
    "Set an interval range to compute cumulative probability or area beneath the curve.",
    "Analyze the effect of varying standard deviation on the bell curve\\'s spread in Normal Distribution.",
    "Relate the theoretical visualization to practical statistical significance."
  ],
  'm10': [
    "Input the dimensions (rows and columns) for Matrix A and Matrix B.",
    "Fill the matrix cells with real numbers to define the matrices.",
    "Choose the mathematical matrix operation: Addition, Subtraction, Multiplication, Inverse, or Determinant.",
    "If multiplication is selected, ensure that the column count of A matches the row count of B.",
    "View the step-by-step arithmetic simulation of the selected operation (e.g., row-by-column multiplication steps).",
    "Finalize and review the resulting matrix values."
  ],
  'cs1': [
    "Open the digital circuit simulator canvas.",
    "Drag and drop basic input pins (switches representing 0 or 1).",
    "Select and place the desired logic gate component (AND, OR, NOT, NAND, NOR, XOR, XNOR) onto the canvas.",
    "Wire the input pins to the gate inputs by connecting their nodes.",
    "Connect an output indicator (like an LED or a probe) to the gate\\'s output node.",
    "Toggle the input switches to generate all possible input combinations (00, 01, 10, 11).",
    "Observe the output LED state for each combination and construct the Truth Table accurately."
  ],
  'cs2': [
    "Define an unsorted array of numbers in the visual array input.",
    "Start the simulation. The algorithm points to the first two adjacent elements (index 0 and 1).",
    "It compares them. If the first element is larger than the second (for ascending sort), they are swapped.",
    "The pointers move to the next pair (index 1 and 2), repeating the comparison and swapping if necessary.",
    "This process continues to the end of the array, successfully bubbling the largest element to the last position.",
    "The process repeats for the remaining unsorted portion of the array.",
    "Observe the visual iteration until no more swaps are needed, marking the array as fully sorted."
  ],
  'cs3': [
    "Initialize an unsorted numerical array in the simulator.",
    "The outer loop begins at the second element (index 1), assuming the first element (index 0) is already a sorted sub-array.",
    "The algorithm stores the current element in a temporary key variable.",
    "It compares the key with elements in the sorted sub-array to its left, moving from right to left.",
    "If a compared element is greater than the key, it shifts that element one position to the right.",
    "It formally inserts the key into its correctly ordered position within the sorted sub-array.",
    "The process iteratively expands the sorted sub-array one element at a time until the entire array is sorted."
  ],
  'cs4': [
    "Initialize a Stack data structure and define its capacity maximum limit.",
    "To perform a PUSH operation, input a value and click Push.",
    "Observe the standard stack pointer (TOP) incrementing and the item placed at the top of the stack visually.",
    "To perform a POP operation, click Pop.",
    "Observe the item being removed strictly from the TOP, complying with the LIFO (Last In, First Out) principle, and the TOP pointer decrementing.",
    "Identify the boundary conditions by attempting to Push when full (causing Stack Overflow) or Pop when empty (causing Stack Underflow)."
  ],
  'cs5': [
    "Input a numerical value into the primary base field (e.g., Base 10 / Decimal).",
    "Select the target conversion base (e.g., Base 2 / Binary, Base 8 / Octal, Base 16 / Hexadecimal).",
    "Observe the step-by-step division process by the target base, noting the quotients and remainders at each explicit step.",
    "Read the string of remainders strictly from bottom to top (or last to first) to construct the converted value.",
    "Reverse the process by multiplying each digit of the converted string by the progressive powers of the base to verify the initial Base 10 value.",
    "Validate the conversion conceptually."
  ],
  'cs6': [
    "Open the dynamic memory allocation visualization module.",
    "To INSERT, create a newly allocated node with a data value.",
    "Connect the new node\\'s Next pointer to an existing target node or Null, and adjust the Head or previous node to point to the new node.",
    "To DELETE, locate the specific tracking pointer pointing to the target node.",
    "Update the preceding node\\'s Next pointer to bypass the target node, linking it directly to the subsequent node.",
    "Dynamically deallocate the bypassed node.",
    "To TRAVERSE, start at the Head node and iteratively follow the Next pointers, processing node data, until reaching the Null pointer."
  ],
  'cs7': [
    "Create a Queue array with a specific maximum size to hold elements. Initialize Front and Rear pointers to -1 or 0 appropriately.",
    "To ENQUEUE, input a data item.",
    "Observe the Rear pointer incrementing and placing the item at the sequence\\'s end.",
    "To DEQUEUE, request a removal.",
    "Observe the item strictly being removed from the Front pointer location, adhering to the FIFO (First In, First Out) principle, and the Front pointer incrementing.",
    "Observe circular behavior (if demonstrating a Circular Queue) where pointers wrap around using modulo arithmetic.",
    "Verify overflow (Rear meets Front logic) and underflow conditions."
  ],
  'cs8': [
    "Initialize a strictly SORTED numerical array in the interface. Define the target search value (Target).",
    "The algorithm initializes Low (Start) and High (End) pointers at the array\\'s boundaries.",
    "The system calculates the Mid index using Mid = (Low + High) / 2 and checks the middle element.",
    "If Target equals Mid element, search is successful, and iteration halts.",
    "If Target is less than Mid element, intuitively discard the right half by setting High = Mid - 1.",
    "If Target is greater than Mid element, discard the left half by setting Low = Mid + 1.",
    "Loop steps 3-6 until the exact target is found or Low exceeds High (signifying target is not present)."
  ]
};

let replacedCount = 0;
for (const [id, procArray] of Object.entries(replacements)) {
  const procedureStr = '[\n              ' + procArray.map(s => '"' + s + '"').join(',\n              ') + '\n            ]';
  const regex = new RegExp(`(id:\\s*'${id}'(?:(?!id:\\s*')[\\s\\S])*?procedure:\\s*)\\[[\\s\\S]*?\\]`, 'g');
  
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, `$1${procedureStr}`);
    replacedCount += matches.length;
    console.log(`Successfully updated ${id} (${matches.length} occurrences).`);
  } else {
    console.error(`Regex for ${id} matched nothing.`);
  }
}

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log(`Successfully applied ${replacedCount} math/cs procedures substitutions in total.`);

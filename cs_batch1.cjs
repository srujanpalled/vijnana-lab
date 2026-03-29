const { injectData } = require('./inject_enhancements.cjs');
const batch = {
  "cs1": {
    quizQuestions: [
      { id: 1, question: "The AND gate outputs 1 only when:", options: ["Any input is 1", "All inputs are 1", "All inputs are 0", "Inputs are different"], correctIndex: 1 },
      { id: 2, question: "The OR gate outputs 0 only when:", options: ["Any input is 1", "All inputs are 1", "All inputs are 0", "Inputs alternate"], correctIndex: 2 },
      { id: 3, question: "The NOT gate has:", options: ["2 inputs", "3 inputs", "1 input", "No inputs"], correctIndex: 2 },
      { id: 4, question: "NAND gate is a combination of:", options: ["NOT + OR", "NOT + AND", "AND + OR", "XOR + NOT"], correctIndex: 1 },
      { id: 5, question: "NAND and NOR gates are called universal because:", options: ["They are fastest", "Any logic function can be built using only NAND or only NOR", "They use least power", "They are cheapest"], correctIndex: 1 },
      { id: 6, question: "XOR gate outputs 1 when inputs are:", options: ["Same", "Different", "Both 1", "Both 0"], correctIndex: 1 },
      { id: 7, question: "De Morgan's theorem states NOT(A AND B) equals:", options: ["NOT A AND NOT B", "NOT A OR NOT B", "A AND B", "A OR B"], correctIndex: 1 },
      { id: 8, question: "A truth table for 2 inputs has how many rows?", options: ["2", "3", "4", "8"], correctIndex: 2 },
      { id: 9, question: "The Boolean expression for OR gate is:", options: ["A · B", "A + B", "A'", "A ⊕ B"], correctIndex: 1 },
      { id: 10, question: "In binary, 1 + 1 equals:", options: ["2", "11", "10", "01"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What is a logic gate?", answer: "A fundamental digital circuit element that performs a basic logical operation on one or more binary inputs to produce a single binary output." },
      { question: "Why are NAND gates considered universal?", answer: "Because any Boolean function (AND, OR, NOT, XOR, etc.) can be implemented using only NAND gates." },
      { question: "What is a truth table?", answer: "A table showing all possible input combinations and their corresponding outputs for a logic circuit." },
      { question: "State De Morgan's First Theorem.", answer: "The complement of a sum (OR) equals the product (AND) of the complements: (A+B)' = A'·B'." },
      { question: "What is the difference between combinational and sequential circuits?", answer: "Combinational circuits' output depends only on current inputs; sequential circuits also depend on previous states (memory)." },
      { question: "What is a half adder?", answer: "A circuit that adds two single bits, producing a Sum (XOR) and a Carry (AND)." },
      { question: "What is Boolean Algebra?", answer: "A mathematical framework for analyzing and simplifying logic circuits using variables that have only two values: 0 and 1." },
      { question: "How is the XOR gate used in error detection?", answer: "XOR is used in parity bit generation and checking — it outputs 1 when an odd number of inputs are 1." },
      { question: "What are minterms and maxterms?", answer: "Minterms are product terms where the function equals 1; maxterms are sum terms where the function equals 0." },
      { question: "What is a Karnaugh Map?", answer: "A graphical method for simplifying Boolean expressions by grouping adjacent 1s to minimize the number of logic gates." }
    ],
    realWorldApplications: [
      "Computer Processors: Billions of logic gates form the CPU, performing all arithmetic and logical operations.",
      "Digital Communication: Error detection and correction codes use XOR gates extensively.",
      "Automotive Electronics: Logic circuits control airbag deployment, ABS braking, and engine management systems.",
      "Home Automation: Smart home devices use logic gates in controllers for lights, thermostats, and security systems.",
      "Medical Devices: Pacemakers and diagnostic equipment rely on logic circuits for precise signal processing.",
      "Space Technology: Radiation-hardened logic gates are used in satellite and spacecraft control systems."
    ]
  },
  "cs2": {
    quizQuestions: [
      { id: 1, question: "Bubble sort repeatedly:", options: ["Divides the array", "Swaps adjacent elements if they are in wrong order", "Selects the minimum", "Uses recursion"], correctIndex: 1 },
      { id: 2, question: "The worst-case time complexity of bubble sort is:", options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"], correctIndex: 2 },
      { id: 3, question: "After the first pass of bubble sort, the largest element is at:", options: ["Beginning", "End of the array", "Middle", "Random position"], correctIndex: 1 },
      { id: 4, question: "Bubble sort is a:", options: ["Divide and conquer algorithm", "Comparison-based sorting algorithm", "Greedy algorithm", "Graph algorithm"], correctIndex: 1 },
      { id: 5, question: "The best-case time complexity (already sorted) is:", options: ["O(n²)", "O(n) with optimization", "O(n log n)", "O(1)"], correctIndex: 1 },
      { id: 6, question: "Bubble sort is:", options: ["Not stable", "Stable (equal elements maintain order)", "Unstable sometimes", "Random"], correctIndex: 1 },
      { id: 7, question: "The space complexity of bubble sort is:", options: ["O(n)", "O(n²)", "O(1) (in-place)", "O(log n)"], correctIndex: 2 },
      { id: 8, question: "How many passes are needed for n elements in worst case?", options: ["n", "n-1", "n/2", "log n"], correctIndex: 1 },
      { id: 9, question: "An optimized bubble sort stops early when:", options: ["Array is empty", "No swaps occur in a pass", "First element is sorted", "Last element is found"], correctIndex: 1 },
      { id: 10, question: "For array [5,3,1], after first pass:", options: ["[1,3,5]", "[3,1,5]", "[3,5,1]", "[5,1,3]"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "Explain the bubble sort algorithm step by step.", answer: "Compare adjacent elements, swap if in wrong order, repeat for all elements. After each pass, the next largest element 'bubbles' to its correct position." },
      { question: "Why is it called 'bubble' sort?", answer: "Because larger elements gradually 'bubble up' to the end of the array, like air bubbles rising in water." },
      { question: "Is bubble sort efficient for large datasets?", answer: "No, O(n²) complexity makes it impractical for large datasets; algorithms like merge sort O(n log n) are preferred." },
      { question: "What does 'stable sort' mean?", answer: "Equal elements maintain their original relative order in the sorted output." },
      { question: "How can bubble sort be optimized?", answer: "By adding a flag that tracks if any swap occurred during a pass; if no swap occurs, the array is sorted and we can stop early." },
      { question: "Compare bubble sort with selection sort.", answer: "Both are O(n²). Bubble sort swaps adjacent elements; selection sort finds the minimum and places it at the correct position." },
      { question: "What is in-place sorting?", answer: "Sorting that uses only a constant amount of extra memory (O(1) space), modifying the array directly." },
      { question: "When might bubble sort be acceptable?", answer: "For very small arrays, nearly sorted data, or educational purposes to understand sorting fundamentals." },
      { question: "How many comparisons does bubble sort make in worst case?", answer: "n(n-1)/2 comparisons for an array of n elements." },
      { question: "Can bubble sort be applied to linked lists?", answer: "Yes, but it's even less efficient due to the lack of random access; insertion sort is generally preferred for linked lists." }
    ],
    realWorldApplications: [
      "Education: The most commonly taught sorting algorithm to introduce algorithmic thinking and Big-O analysis.",
      "Small Embedded Systems: Used in microcontrollers with tiny datasets where code simplicity matters more than speed.",
      "Data Validation: Checking if a small dataset is nearly sorted (optimized bubble sort detects this in O(n)).",
      "Network Packet Ordering: Simple sorting of small buffer queues in low-power IoT devices.",
      "Database Index Maintenance: Understanding bubble sort helps appreciate why databases use B-trees and more efficient algorithms.",
      "Competitive Programming: Serves as a baseline to compare and understand more advanced sorting algorithms."
    ]
  },
  "cs3": {
    quizQuestions: [
      { id: 1, question: "Insertion sort works by:", options: ["Dividing the array in half", "Inserting each element into its correct position in the sorted portion", "Finding the minimum repeatedly", "Swapping random elements"], correctIndex: 1 },
      { id: 2, question: "Best-case time complexity of insertion sort is:", options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], correctIndex: 2 },
      { id: 3, question: "Insertion sort is most efficient when data is:", options: ["Reverse sorted", "Nearly sorted", "Random", "Very large"], correctIndex: 1 },
      { id: 4, question: "Insertion sort is:", options: ["Unstable", "Stable", "Non-deterministic", "Recursive"], correctIndex: 1 },
      { id: 5, question: "The worst-case complexity of insertion sort is:", options: ["O(n)", "O(n log n)", "O(n²)", "O(2ⁿ)"], correctIndex: 2 },
      { id: 6, question: "Insertion sort uses how much extra space?", options: ["O(n)", "O(n²)", "O(1)", "O(log n)"], correctIndex: 2 },
      { id: 7, question: "Insertion sort is analogous to:", options: ["Binary search", "Sorting playing cards in hand", "Quick sort", "Merge sort"], correctIndex: 1 },
      { id: 8, question: "For nearly sorted data, insertion sort outperforms:", options: ["Only bubble sort", "Merge sort and quick sort", "No algorithm", "Only selection sort"], correctIndex: 1 },
      { id: 9, question: "In insertion sort, the 'key' element is compared with:", options: ["All elements ahead", "Elements in the sorted portion to its left", "The last element only", "Random elements"], correctIndex: 1 },
      { id: 10, question: "Shell sort is an optimization of:", options: ["Bubble sort", "Quick sort", "Insertion sort", "Merge sort"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "Describe insertion sort in your own words.", answer: "Pick one element at a time, compare it with the already sorted portion, and insert it at the correct position by shifting larger elements right." },
      { question: "Why is insertion sort preferred for small datasets?", answer: "Its low overhead and simplicity make it faster than O(n log n) algorithms for small n, which have higher constant factors." },
      { question: "Compare insertion sort with merge sort.", answer: "Insertion sort is O(n²) but in-place and stable. Merge sort is O(n log n) but requires O(n) extra space." },
      { question: "What is the adaptive property of insertion sort?", answer: "It performs fewer comparisons when data is partially sorted, making its performance adapt to the input's pre-sorted level." },
      { question: "What is binary insertion sort?", answer: "A variant that uses binary search to find the correct insertion position, reducing comparisons to O(n log n) but shifts remain O(n²)." },
      { question: "Is insertion sort a good choice for online sorting?", answer: "Yes, because it can sort elements as they arrive one by one without needing the complete dataset upfront." },
      { question: "What is Shell sort?", answer: "A generalization of insertion sort that allows exchange of far-apart elements, then progressively reduces the gap between compared elements." },
      { question: "When would you choose insertion sort over quick sort?", answer: "For small arrays, nearly sorted data, or when stability is required and extra space is limited." },
      { question: "How many swaps does insertion sort make in the worst case?", answer: "O(n²) shifts/swaps when the array is in reverse order." },
      { question: "Why is insertion sort used as a subroutine in Timsort?", answer: "Timsort (used in Python/Java) uses insertion sort for small segments because it's fast for small/partially sorted data." }
    ],
    realWorldApplications: [
      "Python's Timsort: Python's built-in sort uses insertion sort for small partitions within its hybrid Timsort algorithm.",
      "Real-time Systems: Insertion sort is used in systems where data arrives incrementally and must be kept sorted.",
      "Card Game Algorithms: Digital card games sort hands using insertion sort, mirroring how humans naturally sort cards.",
      "Database Small Batch Sorting: Used for sorting small result sets in database query optimization.",
      "Embedded Systems: Preferred in memory-constrained environments due to its O(1) space requirement.",
      "Streaming Data: Maintaining a sorted window of recent data points in IoT sensor networks."
    ]
  },
  "cs4": {
    quizQuestions: [
      { id: 1, question: "A stack follows which principle?", options: ["FIFO", "LIFO", "Random access", "Priority-based"], correctIndex: 1 },
      { id: 2, question: "The push operation:", options: ["Removes from top", "Adds to top", "Searches the stack", "Sorts the stack"], correctIndex: 1 },
      { id: 3, question: "The pop operation:", options: ["Adds to bottom", "Removes from top", "Views without removing", "Clears the stack"], correctIndex: 1 },
      { id: 4, question: "Peek/Top operation:", options: ["Removes the top element", "Returns the top element without removing it", "Pushes a new element", "Empties the stack"], correctIndex: 1 },
      { id: 5, question: "Stack overflow occurs when:", options: ["Stack is empty", "A pop is attempted on empty stack", "Push is attempted on a full stack", "Elements are sorted"], correctIndex: 2 },
      { id: 6, question: "Stack underflow occurs when:", options: ["Stack is full", "Pop is attempted on empty stack", "Too many pushes", "Stack overflows"], correctIndex: 1 },
      { id: 7, question: "Which data structure is used for function call management?", options: ["Queue", "Stack (call stack)", "Array", "Linked list"], correctIndex: 1 },
      { id: 8, question: "Infix expression A+B in postfix is:", options: ["AB+", "+AB", "A+B", "BA+"], correctIndex: 0 },
      { id: 9, question: "Stacks can be implemented using:", options: ["Arrays only", "Linked lists only", "Both arrays and linked lists", "Neither"], correctIndex: 2 },
      { id: 10, question: "The time complexity of push and pop is:", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What is a stack?", answer: "A linear data structure following LIFO (Last In, First Out) principle where insertion and deletion happen at only one end (top)." },
      { question: "Give real-world analogies of a stack.", answer: "A stack of plates, a pile of books, or the browser's back button history." },
      { question: "How is a stack used in recursion?", answer: "Each recursive call is pushed onto the call stack with its local variables; when the base case is reached, calls are popped and resolved." },
      { question: "What is the difference between stack and queue?", answer: "Stack is LIFO (last in, first out); Queue is FIFO (first in, first out)." },
      { question: "How are function calls managed using stacks?", answer: "The system maintains a call stack where each function call's return address and local variables are pushed, and popped upon return." },
      { question: "What are applications of stacks in compilers?", answer: "Expression evaluation, syntax parsing, postfix/prefix conversion, and managing nested function scopes." },
      { question: "What is expression conversion using stacks?", answer: "Converting infix (A+B) to postfix (AB+) or prefix (+AB) using an operator stack with precedence rules." },
      { question: "Can you implement a stack using two queues?", answer: "Yes, by using one queue for storage and the other for dequeue-and-enqueue operations to simulate LIFO." },
      { question: "What is a balanced parentheses problem?", answer: "Using a stack to check if every opening bracket has a matching closing bracket in the correct order." },
      { question: "What is the call stack in debugging?", answer: "A stack trace showing the sequence of function calls leading to an error, helping developers trace bugs." }
    ],
    realWorldApplications: [
      "Web Browsers: The back button uses a stack to track visited pages (each new page is pushed, back pops the top).",
      "Undo/Redo in Editors: Text editors maintain stacks of actions for undo (pop last action) and redo functionality.",
      "Compiler Design: Parsing expressions, evaluating postfix notation, and managing nested scopes use stacks extensively.",
      "Operating Systems: Process scheduling and interrupt handling use stacks to save and restore processor states.",
      "Mobile App Navigation: Android's activity back stack manages screen navigation using LIFO ordering.",
      "Depth-First Search: Graph traversal algorithms use stacks (explicitly or via recursion) to explore paths deeply before backtracking."
    ]
  },
  "cs5": {
    quizQuestions: [
      { id: 1, question: "The decimal number 10 in binary is:", options: ["1010", "1100", "1001", "0110"], correctIndex: 0 },
      { id: 2, question: "Binary is base:", options: ["8", "10", "16", "2"], correctIndex: 3 },
      { id: 3, question: "Hexadecimal is base:", options: ["2", "8", "10", "16"], correctIndex: 3 },
      { id: 4, question: "The hexadecimal equivalent of decimal 255 is:", options: ["EE", "FF", "FE", "11"], correctIndex: 1 },
      { id: 5, question: "Octal number system has digits:", options: ["0-9", "0-7", "0-F", "0-1"], correctIndex: 1 },
      { id: 6, question: "1 byte equals:", options: ["4 bits", "8 bits", "16 bits", "32 bits"], correctIndex: 1 },
      { id: 7, question: "Binary 1111 equals decimal:", options: ["8", "16", "15", "14"], correctIndex: 2 },
      { id: 8, question: "To convert decimal to binary, we repeatedly:", options: ["Add 2", "Divide by 2 and note remainders", "Multiply by 10", "Subtract 1"], correctIndex: 1 },
      { id: 9, question: "In 2's complement, -1 in 8-bit is:", options: ["00000001", "10000001", "11111111", "11111110"], correctIndex: 2 },
      { id: 10, question: "BCD (Binary Coded Decimal) represents each decimal digit as:", options: ["8 bits", "4 bits", "2 bits", "16 bits"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "Why do computers use binary?", answer: "Because electronic circuits have two reliable states (on/off, high/low voltage), perfectly mapping to 0 and 1." },
      { question: "Convert 42 to binary.", answer: "42 = 32+8+2 = 101010 in binary." },
      { question: "What is 2's complement and why is it used?", answer: "A method for representing negative numbers in binary. It allows addition and subtraction to use the same circuit." },
      { question: "How do you convert binary to hexadecimal?", answer: "Group binary digits in sets of 4 from right to left, then convert each group to its hex equivalent." },
      { question: "What is the difference between signed and unsigned integers?", answer: "Unsigned can only represent non-negative values (0 to 2ⁿ-1). Signed uses one bit for sign, representing negative values too." },
      { question: "What is overflow in binary arithmetic?", answer: "When the result exceeds the maximum representable value for the given number of bits." },
      { question: "Why is hexadecimal commonly used in programming?", answer: "It provides a compact, human-readable representation of binary data — each hex digit represents exactly 4 bits." },
      { question: "What is ASCII?", answer: "American Standard Code for Information Interchange — a 7-bit encoding assigning numbers (0-127) to characters." },
      { question: "Explain floating-point representation.", answer: "Numbers stored as sign bit, exponent, and mantissa (IEEE 754 standard), enabling representation of very large/small decimals." },
      { question: "What is a nibble?", answer: "A group of 4 bits, representing one hexadecimal digit or values 0-15." }
    ],
    realWorldApplications: [
      "Computer Memory Addressing: All RAM addresses are in binary/hexadecimal for efficient hardware addressing.",
      "Web Development: Colors in CSS/HTML are specified in hexadecimal (e.g., #FF5733).",
      "Networking: IP addresses (IPv4: 32-bit, IPv6: 128-bit) are fundamentally binary with decimal/hex notation.",
      "Embedded Systems: Microcontroller programming requires direct binary and hex manipulation of registers.",
      "Digital Forensics: Examining raw binary data in hex editors to recover deleted files or analyze malware.",
      "Cryptography: Encryption algorithms operate on binary data, with keys often expressed in hexadecimal."
    ]
  }
};
injectData('cs', batch);

const { injectData } = require('./inject_enhancements.cjs');
const batch = {
  "cs6": {
    quizQuestions: [
      { id: 1, question: "A linked list node contains:", options: ["Only data", "Data and a pointer to the next node", "Only pointers", "Index and data"], correctIndex: 1 },
      { id: 2, question: "The head of a linked list points to:", options: ["The last node", "The first node", "The middle node", "NULL"], correctIndex: 1 },
      { id: 3, question: "Insertion at the beginning of a singly linked list is:", options: ["O(n)", "O(n²)", "O(1)", "O(log n)"], correctIndex: 2 },
      { id: 4, question: "Accessing the nth element in a linked list takes:", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], correctIndex: 2 },
      { id: 5, question: "A doubly linked list node has:", options: ["One pointer", "Two pointers (prev and next)", "Three pointers", "No pointers"], correctIndex: 1 },
      { id: 6, question: "The last node of a singly linked list points to:", options: ["Head", "Itself", "NULL", "Random node"], correctIndex: 2 },
      { id: 7, question: "Advantage of linked list over array:", options: ["Faster random access", "Dynamic size and efficient insertion/deletion", "Less memory usage", "Simpler implementation"], correctIndex: 1 },
      { id: 8, question: "A circular linked list's last node points to:", options: ["NULL", "The head (first node)", "Itself", "Random"], correctIndex: 1 },
      { id: 9, question: "Deletion of a node (given pointer) in a linked list is:", options: ["O(n) always", "O(1) if pointer to previous is available", "O(n²)", "Impossible"], correctIndex: 1 },
      { id: 10, question: "Linked lists are used to implement:", options: ["Stacks, queues, and graphs", "Only arrays", "Only trees", "Only hash tables"], correctIndex: 0 }
    ],
    vivaQuestions: [
      { question: "What is a linked list?", answer: "A linear data structure where elements (nodes) are stored non-contiguously in memory, each containing data and a reference (pointer) to the next node." },
      { question: "Compare arrays and linked lists.", answer: "Arrays have O(1) random access but fixed size; linked lists have dynamic size and O(1) insertion/deletion but O(n) access." },
      { question: "What is a sentinel/dummy node?", answer: "An extra node at the start or end that simplifies boundary conditions, avoiding special cases for empty lists or head operations." },
      { question: "How do you detect a cycle in a linked list?", answer: "Using Floyd's Cycle Detection (tortoise and hare): two pointers moving at different speeds will meet if a cycle exists." },
      { question: "What is a doubly linked list's advantage?", answer: "It allows traversal in both directions and O(1) deletion when a node reference is given (no need to find previous node)." },
      { question: "How do you reverse a linked list?", answer: "Iteratively: maintain three pointers (prev, current, next) and reverse the direction of each link." },
      { question: "What is memory overhead of linked lists?", answer: "Each node requires extra memory for pointer(s), which is significant for small data elements." },
      { question: "Where is the NULL pointer in a singly linked list?", answer: "The last node's next pointer is NULL, indicating the end of the list." },
      { question: "What is a self-referential structure?", answer: "A structure that contains a pointer to another instance of the same structure type, like a linked list node." },
      { question: "Can linked lists store heterogeneous data?", answer: "In languages with void pointers or generics, yes, but typically nodes store data of the same type." }
    ],
    realWorldApplications: [
      "Operating Systems: Process scheduling and memory management use linked lists to maintain dynamic lists of processes and free blocks.",
      "Music Players: Playlist implementations (next/previous song) use doubly linked lists.",
      "Web Browsers: Forward/backward navigation history can be implemented with doubly linked lists.",
      "Blockchain: Each block contains a reference (hash) to the previous block, forming a conceptual linked list.",
      "Image Viewers: Circular linked lists enable seamless looping through photo galleries.",
      "Memory Allocation: Free memory blocks in heap management are tracked using linked lists (free lists)."
    ]
  },
  "cs7": {
    quizQuestions: [
      { id: 1, question: "A queue follows:", options: ["LIFO", "FIFO", "Random", "Priority"], correctIndex: 1 },
      { id: 2, question: "Enqueue adds an element to the:", options: ["Front", "Rear", "Middle", "Top"], correctIndex: 1 },
      { id: 3, question: "Dequeue removes an element from the:", options: ["Rear", "Front", "Middle", "Bottom"], correctIndex: 1 },
      { id: 4, question: "A circular queue solves which problem of linear queue?", options: ["Sorting", "Memory wastage from unused front positions", "Priority ordering", "Random access"], correctIndex: 1 },
      { id: 5, question: "The time complexity of enqueue and dequeue is:", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correctIndex: 2 },
      { id: 6, question: "In a priority queue, elements are dequeued based on:", options: ["Arrival order", "Priority value", "Random selection", "Size"], correctIndex: 1 },
      { id: 7, question: "A deque (double-ended queue) allows:", options: ["Insertion at both ends", "Insertion and deletion at both ends", "Only at front", "Only at rear"], correctIndex: 1 },
      { id: 8, question: "Queue can be implemented using:", options: ["Arrays only", "Linked lists only", "Both arrays and linked lists", "Stacks only"], correctIndex: 2 },
      { id: 9, question: "BFS (Breadth-First Search) uses:", options: ["Stack", "Queue", "Binary tree", "Hash table"], correctIndex: 1 },
      { id: 10, question: "A queue is empty when:", options: ["Front > Rear", "Front = Rear = -1 (or front equals rear in circular)", "Rear > Front", "Always"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a queue?", answer: "A linear data structure following FIFO (First In, First Out) principle — elements are added at the rear and removed from the front." },
      { question: "Give real-world examples of queues.", answer: "People standing in line at a ticket counter, printer job queue, CPU task scheduling." },
      { question: "What is the problem with a simple linear queue?", answer: "After multiple dequeue operations, front positions become wasted space that cannot be reused without shifting all elements." },
      { question: "How does a circular queue work?", answer: "The rear wraps around to the front using modular arithmetic: (rear + 1) % size, reusing vacated positions." },
      { question: "What is the difference between a queue and a priority queue?", answer: "A regular queue serves in FIFO order; a priority queue serves the highest (or lowest) priority element first regardless of arrival." },
      { question: "How is a queue used in BFS?", answer: "BFS visits nodes level by level, enqueuing neighbors of the current node and dequeuing the next node to visit." },
      { question: "Can a queue be implemented using two stacks?", answer: "Yes — use one stack for enqueue and another for dequeue, transferring elements between them when needed." },
      { question: "What is a blocking queue?", answer: "A thread-safe queue where enqueue blocks when full and dequeue blocks when empty, used in producer-consumer patterns." },
      { question: "What is buffer management?", answer: "Queues buffer data between asynchronous producer and consumer processes (e.g., I/O buffers, streaming buffers)." },
      { question: "Explain the difference between queue and deque.", answer: "A queue allows insertion at rear and deletion at front only. A deque allows both operations at both ends." }
    ],
    realWorldApplications: [
      "Operating System CPU Scheduling: Ready queues hold processes waiting for CPU time in round-robin and FCFS scheduling.",
      "Print Spooling: Multiple print jobs are queued and processed in the order they were submitted.",
      "Call Center Management: Customer calls are placed in a queue and answered in order of arrival.",
      "Network Routers: Data packets are buffered in queues before forwarding to prevent congestion.",
      "Simulation Systems: Event-driven simulations use priority queues to process events in chronological order.",
      "Streaming Services: Video/audio data is buffered in queues to ensure smooth playback despite network fluctuations."
    ]
  },
  "cs8": {
    quizQuestions: [
      { id: 1, question: "Binary search requires the array to be:", options: ["Unsorted", "Sorted", "Empty", "Circular"], correctIndex: 1 },
      { id: 2, question: "The time complexity of binary search is:", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correctIndex: 2 },
      { id: 3, question: "Binary search divides the search space by:", options: ["3", "4", "2 (half each time)", "n"], correctIndex: 2 },
      { id: 4, question: "If the middle element equals the target:", options: ["Search continues", "Search returns the middle index", "Search restarts", "Array is resorted"], correctIndex: 1 },
      { id: 5, question: "If target < middle element, search continues in:", options: ["Right half", "Left half", "Both halves", "Full array"], correctIndex: 1 },
      { id: 6, question: "Binary search on 1024 elements takes at most:", options: ["1024 comparisons", "512 comparisons", "10 comparisons", "100 comparisons"], correctIndex: 2 },
      { id: 7, question: "Linear search time complexity is:", options: ["O(log n)", "O(n)", "O(1)", "O(n²)"], correctIndex: 1 },
      { id: 8, question: "Binary search can be implemented:", options: ["Only iteratively", "Only recursively", "Both iteratively and recursively", "Neither"], correctIndex: 2 },
      { id: 9, question: "The space complexity of iterative binary search is:", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], correctIndex: 2 },
      { id: 10, question: "Binary search is an example of:", options: ["Brute force", "Divide and conquer", "Greedy", "Dynamic programming"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "Explain binary search step by step.", answer: "Compare target with middle element. If equal, found. If target is less, search the left half. If greater, search the right half. Repeat until found or search space is empty." },
      { question: "Why must the array be sorted for binary search?", answer: "The algorithm relies on comparing the target with the middle element to eliminate half the remaining elements — this only works if elements are ordered." },
      { question: "Compare linear search and binary search.", answer: "Linear: O(n), works on unsorted data. Binary: O(log n), requires sorted data. Binary is vastly faster for large datasets." },
      { question: "What is the recurrence relation for binary search?", answer: "T(n) = T(n/2) + O(1), which solves to T(n) = O(log n)." },
      { question: "Can binary search find the first/last occurrence?", answer: "Yes, with modifications — continue searching in the appropriate half even after finding a match to locate the boundary." },
      { question: "What happens if the array has duplicate elements?", answer: "Standard binary search finds one occurrence; modified versions can find the first or last occurrence." },
      { question: "How is binary search used in the real world?", answer: "Dictionary lookup, debugging with git bisect, finding data in sorted databases, and decision boundary search." },
      { question: "What is interpolation search?", answer: "A variant that estimates the position based on the target value distribution, achieving O(log log n) for uniformly distributed data." },
      { question: "Can binary search be applied to linked lists efficiently?", answer: "No, because linked lists lack O(1) random access to the middle element, making binary search O(n) overall." },
      { question: "What is ternary search?", answer: "A variant that divides the search space into three parts; it has O(log₃ n) comparisons but isn't faster than binary search in practice." }
    ],
    realWorldApplications: [
      "Database Indexing: B-trees use binary search principles to efficiently locate records in massive databases.",
      "Git Bisect: Developers use binary search to find the exact commit that introduced a bug.",
      "Dictionary/Phone Book Search: Real-world alphabetical searching mirrors the binary search strategy.",
      "Game AI: Binary search on sorted score arrays enables efficient leaderboard ranking and matchmaking.",
      "Machine Learning: Hyperparameter tuning uses binary-search-like optimization to find optimal values.",
      "Library Systems: Dewey Decimal and ISBN lookup systems conceptually apply binary search for book retrieval."
    ]
  },
  "cs9": {
    quizQuestions: [
      { id: 1, question: "To open a file in Python for reading, we use:", options: ["open('file.txt', 'w')", "open('file.txt', 'r')", "open('file.txt', 'a')", "read('file.txt')"], correctIndex: 1 },
      { id: 2, question: "The 'w' mode in file handling:", options: ["Reads the file", "Writes to file (creates new or overwrites)", "Appends to file", "Executes the file"], correctIndex: 1 },
      { id: 3, question: "To add content without erasing existing data, use mode:", options: ["'r'", "'w'", "'a' (append)", "'x'"], correctIndex: 2 },
      { id: 4, question: "The with statement in Python is used for:", options: ["Creating loops", "Automatic resource management (auto-closes file)", "Defining functions", "Error suppression"], correctIndex: 1 },
      { id: 5, question: "f.readlines() returns:", options: ["A single string", "A list of all lines in the file", "The first line only", "A dictionary"], correctIndex: 1 },
      { id: 6, question: "f.readline() reads:", options: ["All lines", "One line at a time", "The entire file", "A character"], correctIndex: 1 },
      { id: 7, question: "CSV stands for:", options: ["Comma Separated Values", "Common Standard Values", "Computer System Variables", "Coded Sequential Values"], correctIndex: 0 },
      { id: 8, question: "Binary files in Python are opened with mode:", options: ["'r'", "'rb' or 'wb'", "'t'", "'csv'"], correctIndex: 1 },
      { id: 9, question: "To write a dictionary to a file, we commonly use:", options: ["print()", "json.dump()", "csv.write()", "os.write()"], correctIndex: 1 },
      { id: 10, question: "The tell() method returns:", options: ["File size", "Current position of file pointer", "Number of lines", "File name"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is file handling?", answer: "The process of creating, reading, writing, and manipulating files stored on disk using programming operations." },
      { question: "Why do we need to close files after use?", answer: "To release system resources, flush buffered data to disk, and prevent data corruption or memory leaks." },
      { question: "Explain the advantage of the 'with' statement.", answer: "It automatically closes the file when the block ends, even if an exception occurs, ensuring proper cleanup." },
      { question: "What is the difference between text and binary mode?", answer: "Text mode handles encoding/decoding and newline conversion. Binary mode reads/writes raw bytes without any translation." },
      { question: "How do you handle file not found errors?", answer: "Using try-except blocks to catch FileNotFoundError and handle it gracefully." },
      { question: "What is the seek() method?", answer: "It moves the file pointer to a specific position in the file, allowing random access reading/writing." },
      { question: "What is pickling in Python?", answer: "Serializing Python objects into a byte stream for storage using the pickle module, and deserializing them back." },
      { question: "How do you read a CSV file in Python?", answer: "Using the csv module: csv.reader() creates an iterable that parses each row into a list of values." },
      { question: "What is the difference between write() and writelines()?", answer: "write() writes a single string; writelines() writes a list of strings without adding newline characters automatically." },
      { question: "What are the potential security risks of file handling?", answer: "Path traversal attacks, reading sensitive files, writing malicious content, and resource exhaustion from unclosed files." }
    ],
    realWorldApplications: [
      "Log Management: Applications write diagnostic and error information to log files for debugging and auditing.",
      "Data Science: Reading datasets from CSV, JSON, and XML files is fundamental to data analysis workflows.",
      "Configuration Management: Applications store and read settings from config files (INI, YAML, JSON).",
      "Report Generation: Business applications generate PDF, Excel, and text reports from processed data.",
      "Backup Systems: File handling operations copy, compress, and archive critical data for disaster recovery.",
      "Web Scraping: Scraped data is persisted to files for offline analysis and machine learning training."
    ]
  },
  "cs10": {
    quizQuestions: [
      { id: 1, question: "SQL stands for:", options: ["Simple Query Language", "Structured Query Language", "Standard Question Language", "Sequential Query Logic"], correctIndex: 1 },
      { id: 2, question: "Which command creates a new table?", options: ["INSERT", "CREATE TABLE", "ALTER", "UPDATE"], correctIndex: 1 },
      { id: 3, question: "SELECT * FROM students returns:", options: ["Nothing", "All rows and columns from students table", "Only column names", "Table structure only"], correctIndex: 1 },
      { id: 4, question: "The WHERE clause is used to:", options: ["Sort results", "Filter rows based on a condition", "Group data", "Join tables"], correctIndex: 1 },
      { id: 5, question: "INSERT INTO adds:", options: ["New columns", "New rows of data", "New tables", "New databases"], correctIndex: 1 },
      { id: 6, question: "UPDATE modifies:", options: ["Table structure", "Existing data in rows", "Column names", "Database name"], correctIndex: 1 },
      { id: 7, question: "DELETE FROM removes:", options: ["Columns", "The entire table", "Specific rows matching a condition", "The database"], correctIndex: 2 },
      { id: 8, question: "ORDER BY sorts results in:", options: ["Random order", "Ascending (default) or Descending order", "Insert order only", "Reverse alphabetical only"], correctIndex: 1 },
      { id: 9, question: "A PRIMARY KEY ensures:", options: ["Null values allowed", "Duplicate values allowed", "Unique and non-null identification of each row", "Automatic sorting"], correctIndex: 2 },
      { id: 10, question: "GROUP BY is used with:", options: ["INSERT statements", "Aggregate functions (COUNT, SUM, AVG)", "DELETE only", "ALTER TABLE"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a database?", answer: "An organized collection of structured data stored and managed electronically, typically controlled by a DBMS." },
      { question: "What is RDBMS?", answer: "Relational Database Management System — stores data in tables (relations) with rows and columns, using SQL for management." },
      { question: "Explain the difference between DDL and DML.", answer: "DDL (Data Definition Language) defines structure (CREATE, ALTER, DROP). DML (Data Manipulation Language) manages data (SELECT, INSERT, UPDATE, DELETE)." },
      { question: "What is a foreign key?", answer: "A column that creates a link between two tables by referencing the primary key of another table, enforcing referential integrity." },
      { question: "What is normalization?", answer: "The process of organizing database tables to reduce redundancy and dependency, typically into 1NF, 2NF, 3NF." },
      { question: "What are aggregate functions?", answer: "Functions that operate on sets of rows: COUNT, SUM, AVG, MAX, MIN." },
      { question: "What is a JOIN?", answer: "An operation combining rows from two or more tables based on a related column (foreign key relationship)." },
      { question: "Explain INNER JOIN vs LEFT JOIN.", answer: "INNER JOIN returns only matching rows. LEFT JOIN returns all rows from the left table, with NULLs for non-matching right rows." },
      { question: "What is an index in a database?", answer: "A data structure that speeds up data retrieval operations at the cost of additional storage and slower writes." },
      { question: "What is ACID in databases?", answer: "Atomicity, Consistency, Isolation, Durability — properties ensuring reliable database transactions." }
    ],
    realWorldApplications: [
      "E-Commerce Platforms: Managing product catalogs, customer orders, and payment records using relational databases.",
      "Healthcare Systems: Storing and querying patient records, prescriptions, and medical histories securely.",
      "Banking and Finance: Transaction processing, account management, and regulatory reporting rely on SQL databases.",
      "Social Media: User profiles, posts, friendships, and interactions are managed in massive distributed databases.",
      "Education Management: Student information systems track grades, attendance, and enrollment using SQL queries.",
      "Government Census: National population databases use SQL to store, query, and analyze demographic data at scale."
    ]
  }
};
injectData('cs', batch);

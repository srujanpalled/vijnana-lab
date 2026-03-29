const { injectData } = require('./inject_enhancements.cjs');

const physicsBatch4 = {
  // --- AC Frequency ---
  "p17": {
    quizQuestions: [
      { id: 1, question: "The frequency of the alternating current (AC) in domestic power supply in India is:", options: ["110 Hz", "50 Hz", "60 Hz", "220 Hz"], correctIndex: 1 },
      { id: 2, question: "A sonometer wire carrying AC is placed between the poles of a strong permanent magnet. The wire vibrates due to:", options: ["Electrostatic force", "Lorentz magnetic force (F = B*I*L)", "Gravity", "Newton's third law"], correctIndex: 1 },
      { id: 3, question: "In the AC frequency experiment, the wire naturally vibrates with exactly:", options: ["Half the frequency of AC", "The exact frequency of AC", "Double the frequency of AC", "Ten times the AC frequency"], correctIndex: 1 },
      { id: 4, question: "If the frequency of AC is 50 Hz, how many times does the current reverse its direction in one second?", options: ["50", "100", "25", "200"], correctIndex: 1 },
      { id: 5, question: "For finding the AC frequency (n) using resonance, the fundamental frequency formula used is:", options: ["n = (1/2l)√(T/m)", "n = (1/l)√(T/m)", "n = 2l√(T/m)", "n = (l/2)√(m/T)"], correctIndex: 0 },
      { id: 6, question: "Why is an electromagnet sometimes used instead of a permanent magnet in this experiment?", options: ["To heat the wire", "Because it reverses polarity along with the AC, doubling the vibrational frequency of the wire", "To cancel gravity", "To save electricity"], correctIndex: 1 },
      { id: 7, question: "If the tension in the wire is increased drastically, what must happen to the resonant length (l) to maintain resonance at 50 Hz?", options: ["It must decrease", "It must remain same", "It must increase", "It cannot resonate"], correctIndex: 2 },
      { id: 8, question: "To locate the exact point of resonance, we use a small object called a:", options: ["Jockey", "Paper rider", "Spherometer", "Lens"], correctIndex: 1 },
      { id: 9, question: "If the magnetic field is placed exactly at the center between the bridges during fundamental mode, the wire experiences maximum:", options: ["Tension", "Nodes", "Amplitude (Antinode)", "Resistance"], correctIndex: 2 },
      { id: 10, question: "What acts as the step-down transformer in the circuit?", options: ["To increase voltage to dangerous levels", "To reduce the 220V AC mains to a safe 6V or 12V AC for the experiment", "To convert AC to DC", "To measure frequency"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is Alternating Current (AC)?", answer: "An electric current which periodically reverses its direction and continuously changes its magnitude with time." },
      { question: "What is the standard frequency of AC mains in your country?", answer: "In India and the UK, it is 50 Hz. In the US, it is 60 Hz." },
      { question: "Explain the underlying principle of this experiment.", answer: "When AC flows through a horizontal wire placed perpendicular to a strong magnetic field, the wire experiences an alternating Lorentz force (F=BIL). This causes the wire to vibrate at the frequency of the AC current." },
      { question: "Why do we use a step-down transformer?", answer: "To step down the dangerous 220V mains supply to a safe, low voltage (like 6V) to prevent electric shock and avoid burning out the sonometer wire." },
      { question: "What happens if a permanent horseshoe magnet is replaced by an electromagnet connected to the same AC?", answer: "The magnetic polarity will flip in sync with the current. Since both reverse simultaneously, the force will always push in the same direction 100 times a second, making the wire vibrate at 100 Hz (double the AC frequency)." },
      { question: "What is 'm' in the frequency formula?", answer: "The linear mass density of the wire (mass per unit length)." },
      { question: "Why is the paper rider placed precisely in the middle of the vibrating segment?", answer: "Because in the fundamental mode of vibration (the loudest resonance), an antinode forms at the exact center, providing maximum upward thrust to throw off the rider." },
      { question: "What is Fleming's Left-Hand Rule and how does it apply here?", answer: "It determines the direction of the magnetic force. If the thumb, forefinger, and middle finger of the left hand are perpendicular, the forefinger points to the B-field, middle to Current, and thumb points to Force direction perfectly describing the wire's up-down push." },
      { question: "Why does the wire vibrate up and down continuously?", answer: "Because the AC current sine wave goes positive and negative, constantly reversing the direction of the magnetic Lorentz force via Fleming's Left-Hand Rule." },
      { question: "Could this experiment be performed using Direct Current (DC)?", answer: "No. With steady DC, the wire would only bend consistently in one direction (either up or down) and stay there, never vibrating." }
    ],
    realWorldApplications: [
      "Loudspeakers and Headphones: Operating on the exact same Lorentz force principle, where an AC audio signal creates vibrating coils mapped to sound frequencies.",
      "Vibration Analysis Equipment: Constructing electrodynamic shakers used in labs to violently vibrate aerospace parts and test their durability.",
      "Electric Motors: Utilizing alternating magnetic forces on current-carrying conductors to generate continuous torque and rotation.",
      "Grid Frequency Monitoring: Measuring small fluctuations around the 50Hz baseline which can indicate an overload on national power grids.",
      "AC Galvanometers: Instruments specifically designed to measure AC currents utilizing resonant vibrations inside distinct magnetic fields.",
      "Musical Instrument Pickups: Electric guitars use magnetic fields disturbed by vibrating steel strings to induce AC signals analogous to the sonometer."
    ]
  }
};

injectData('physics', physicsBatch4);

import { Zap, FlaskConical, Dna, Calculator, Monitor } from 'lucide-react';
import { SubjectData, SubjectType, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/home' },
  { label: 'Subjects', path: '/subjects' },
  { label: 'AI Tutor', path: '/tutor' },
  { label: 'Brainstorm', path: '/brainstorm' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SUBJECTS: SubjectData[] = [
  {
    id: 'physics',
    name: SubjectType.PHYSICS,
    icon: Zap,
    color: 'blue',
    hex: '#3b82f6',
    description: 'Explore the laws of motion, optics, and electromagnetism through immersive simulations.',
    labs: [
      { 
        id: 'p1',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], 
        title: 'Vernier Calipers', 
        description: 'Measure precise dimensions of small objects.', 
        difficulty: 'Easy', 
        duration: '20 min', 
        category: 'Measurement',        content: {
          videoId: "t9Q_rX0r51E",
          aim: "To measure the diameter of a small spherical body using Vernier Calipers.",
          requirements: ["Vernier Calipers", "Spherical Body (Bob)", "Magnifying Glass"],
          theory: "The Vernier Caliper is a high-precision measuring instrument invented by Pierre Vernier in 1631. It uses a differential scale arrangement to measure dimensions with greater accuracy than a standard meter scale.\n\n**Working Principle (Vernier Acuity):**\nThe device relies on the ability of the human eye to detect the alignment of lines (Vernier Acuity) much more precisely than it can estimate position between lines. It consists of two scales:\n1. **Main Scale:** Fixed, graduated in millimeters.\n2. **Vernier Scale:** Sliding, usually having 10 divisions that span 9mm of the main scale.\n\n**Least Count (L.C.):**\nThe Least Count is the smallest difference between a Main Scale Division (MSD) and a Vernier Scale Division (VSD).\nL.C. = 1 MSD - 1 VSD\nIf N vernier divisions coincide with (N-1) main scale divisions:\n1 VSD = ((N-1)/N) MSD\nTherefore, L.C. = 1 MSD - ((N-1)/N) MSD = (1/N) MSD.\nFor a standard caliper: 1 MSD = 1mm, N = 10. Thus, L.C. = 0.1mm or 0.01cm.\n\n**Measurement Formula:**\nTotal Reading = Main Scale Reading (MSR) + (Vernier Coincidence (VC) × L.C.)\n- **MSR:** The main scale mark immediately to the left of the vernier zero.\n- **VC:** The division on the vernier scale that aligns perfectly with any main scale mark.\n\n**Zero Error Correction:**\nIdeally, when jaws are closed, the zeros of both scales coincide. If not, there is a Zero Error:\n- **Positive Error:** Vernier zero is to the right. Correction is negative.\n- **Negative Error:** Vernier zero is to the left. Correction is positive.",
          procedure: [
              "Find the least count and zero error of the vernier caliper.",
              "Open the jaws of the caliper.",
              "Place the spherical body between the two lower jaws and grip it firmly but gently.",
              "Note the main scale reading (MSR) just to the left of the vernier zero.",
              "Note the vernier scale division (VSD) that best coincides with a main scale division.",
              "Calculate the total reading by using Total Reading = MSR + (VSD * Least Count) - Zero Error.",
              "Repeat the above steps for two more positions of the body to obtain three readings.",
              "Find the mean diameter and halve it to find the radius."
            ],
          objectives: [
            "To learn the principle of Vernier scale.",
            "To measure the diameter of a spherical body.",
            "To calculate volume with significant figures."
          ],
          realWorldApplications: [
            "Manufacturing: Ensuring machine parts fit together precisely.",
            "Aerospace: Measuring components where microscopic tolerance is critical.",
            "Jewelry: Measuring the diameter of gemstones and ring sizes.",
            "Medical: Measuring bone dimensions or surgical implants."
          ],
          observationTable: {
            columns: ["MSR (a) cm", "VSD (n)", "VSR (b=n*LC) cm", "Total (a+b) cm"]
          },
          assignments: [
            { id: 1, question: "Calculate the volume of a sphere if the main scale reading is 2.4cm, vernier coincidence is 6, and least count is 0.01cm. Show your working.", marks: 5 },
            { id: 2, question: "Draw a neat labeled diagram of a Vernier Caliper showing a positive zero error of 0.05cm.", marks: 5 },
            { id: 3, question: "Explain why Vernier Calipers are more precise than a standard meter scale. Give two real-world examples where this precision is necessary.", marks: 5 },
            { id: 4, question: "A student measured the length of a rod as 3.52 cm. If the instrument has a negative zero error of 0.02 cm, what is the correct length?", marks: 3 },
            { id: 5, question: "Derive the formula for Least Count if N Vernier divisions match with (N-1) Main Scale divisions.", marks: 4 }
          ],
          vivaQuestions: [
            { question: "What is the Least Count of a standard Vernier Caliper?", answer: "Usually 0.01 cm or 0.1 mm." },
            { question: "What is Zero Error?", answer: "The error when the zero marks of the main scale and vernier scale do not coincide when jaws are closed." },
            { question: "How do you calculate the volume of a sphere?", answer: "V = (4/3)πr³." },
            { question: "What is the principle of a Vernier Caliper?", answer: "N Vernier Scale Divisions = (N-1) Main Scale Divisions." },
            { question: "What are the upper jaws used for?", answer: "To measure internal diameters of cylinders or hollow pipes." },
            { question: "What is the metallic strip at the back used for?", answer: "To measure depth of beakers or holes." },
            { question: "What is 'Vernier Constant'?", answer: "It is another name for Least Count." },
            { question: "Which material is Vernier Caliper made of?", answer: "Stainless steel or hardened steel to prevent rust and wear." },
            { question: "How is positive zero error corrected?", answer: "By subtracting the error value from the final reading." },
            { question: "Why is it called 'Vernier'?", answer: "Named after Pierre Vernier, who invented the scale in 1631." }
          ],
          quizQuestions: [
            { id: 1, question: "What is the main scale reading if the zero of the vernier scale lies between 2.3 cm and 2.4 cm?", options: ["2.3 cm", "2.4 cm", "2.35 cm", "2.0 cm"], correctIndex: 0 },
            { id: 2, question: "If the 5th vernier division coincides with a main scale division, and L.C. is 0.01 cm, what is the vernier reading?", options: ["0.5 cm", "0.05 cm", "5 cm", "0.005 cm"], correctIndex: 1 },
            { id: 3, question: "Which part of the Vernier Caliper is used to measure internal diameter?", options: ["Lower Jaws", "Upper Jaws", "Depth Gauge", "Main Scale"], correctIndex: 1 },
            { id: 4, question: "If N V.S.D = (N-1) M.S.D, what is the formula for Least Count?", options: ["1 MSD / N", "1 MSD * N", "1 VSD / N", "1 MSD - 1 VSD"], correctIndex: 0 },
            { id: 5, question: "A Vernier Caliper has 20 divisions on the vernier scale matching 19 on the main scale (1mm). What is the LC?", options: ["0.1 mm", "0.05 mm", "0.02 mm", "0.01 mm"], correctIndex: 1 },
            { id: 6, question: "Zero error is checked when:", options: ["Jaws are open", "Jaws are closed", "Object is held", "Screw is loose"], correctIndex: 1 },
            { id: 7, question: "The main scale usually measures in:", options: ["Meters", "Millimeters/Centimeters", "Micrometers", "Nanometers"], correctIndex: 1 },
            { id: 8, question: "Which error arises due to wear and tear of the jaws?", options: ["Parallax Error", "Zero Error", "Random Error", "Backlash Error"], correctIndex: 1 },
            { id: 9, question: "Least Count is also known as:", options: ["Vernier Constant", "Pitch", "Screw Constant", "Error limit"], correctIndex: 0 },
            { id: 10, question: "To measure the thickness of a pencil, we use:", options: ["Depth Gauge", "Upper Jaws", "Lower Jaws", "Main Scale only"], correctIndex: 2 }
          ]
        }
      },
      { 
        id: 'p2',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], 
        title: 'Simple Pendulum', 
        description: 'Determine acceleration due to gravity (g).', 
        difficulty: 'Easy', 
        duration: '30 min', 
        category: 'Mechanics',
        content: {
          videoId: "02w9lSii_Hs",
          aim: "To determine the acceleration due to gravity (g) using a simple pendulum.",
          requirements: ["Metallic Bob", "Thread", "Clamp Stand", "Stopwatch", "Meter Scale"],
          theory: "A simple pendulum is an idealized system consisting of a heavy point mass (bob) suspended by a weightless, inextensible, and perfectly flexible string from a rigid support.\n\n**Physics of Oscillation (SHM):**\nWhen the bob is displaced by a small angle (θ < 10°) and released, it executes Simple Harmonic Motion (SHM). The restoring force is the tangential component of gravity:\nF_restoring = -mg sinθ\nFor small angles, sinθ ≈ θ (radians). Since θ = x/L (arc/radius):\nF = -mg(x/L) = -(mg/L)x\nThis form F = -kx confirms SHM with force constant k = mg/L.\n\n**Time Period Derivation:**\nThe time period T for SHM is given by T = 2π√(m/k).\nSubstituting k = mg/L:\nT = 2π√(m / (mg/L)) = 2π√(L/g)\n\n**Key Factors:**\n- **Length (L):** Distance from the point of suspension to the center of gravity of the bob.\n- **Acceleration due to Gravity (g):** Varies with altitude and latitude. Standard value is 9.8 m/s².\n- **Isochronism:** The period is independent of amplitude for small swings.\n\n**Graph Analysis:**\nA plot of L vs T² yields a straight line passing through the origin. The slope of this line is g/4π², allowing for the experimental calculation of g.",
          procedure: [
              "Measure the radius of the pendulum bob using a vernier caliper.",
              "Tie the string to the bob and suspend it through a split cork firmly clamped to a retort stand.",
              "Adjust the effective length (L) of the pendulum (e.g., 50 cm).",
              "Displace the bob by a small angle (less than 10 degrees) and release it gently so it oscillates in a vertical plane.",
              "Start the stopwatch when the bob crosses the mean position and count 20 complete oscillations.",
              "Stop the stopwatch after exactly 20 oscillations and record the time taken (t).",
              "Calculate the time period T = t/20 and its square T^2.",
              "Repeat the experiment for 4 to 5 different lengths (e.g., 60cm, 70cm, 80cm) and plot a graph between L and T^2."
            ],
          objectives: ["Calculate 'g' at your location.", "Plot L-T² graph."],
          realWorldApplications: [
            "Clocks: Grandfather clocks use pendulums to keep precise time.",
            "Seismometers: Early earthquake detectors used pendulum principles.",
            "Metronomes: Mechanical metronomes use an inverted pendulum to help musicians keep time.",
            "Demolition: Wrecking balls act as large pendulums.",
            "Geological Surveys: Gravimeters (sophisticated pendulums) measure local gravity to find mineral deposits."
          ],
          observationTable: {
            columns: ["Length L (cm)", "Time 20 Osc (t) s", "Period T = t/20 s", "T² (s²)", "L/T² (cm/s²)"]
          },
          assignments: [
            { id: 1, question: "Plot a graph of L vs T². What does the slope of the graph represent? Calculate g from the slope.", marks: 5 },
            { id: 2, question: "Calculate the length of a Second's Pendulum at a place where g = 9.8 m/s².", marks: 3 },
            { id: 3, question: "How does the time period of a simple pendulum change if it is taken to the moon (g_moon = g_earth/6)?", marks: 3 },
            { id: 4, question: "Why is the amplitude of oscillation kept small in this experiment? Explain with the condition used in derivation.", marks: 4 },
            { id: 5, question: "A simple pendulum of length 100 cm has a time period of 2s. What is the acceleration due to gravity?", marks: 5 }
          ],
          vivaQuestions: [
            { question: "Does the time period depend on the mass of the bob?", answer: "No, it is independent of mass." },
            { question: "What is the effective length?", answer: "Distance from the point of suspension to the center of gravity of the bob." },
            { question: "What is a seconds pendulum?", answer: "A pendulum with a time period of exactly 2 seconds." },
            { question: "What is the relationship between T and L?", answer: "T is directly proportional to the square root of L." },
            { question: "Why do we take 20 oscillations?", answer: "To reduce random error in timing." },
            { question: "Does amplitude affect time period?", answer: "Not for small amplitudes (isochronism)." },
            { question: "What happens to 'g' if you go to the moon?", answer: "It becomes approximately 1/6th of Earth's gravity." },
            { question: "Shape of L vs T graph?", answer: "Parabola." },
            { question: "Shape of L vs T² graph?", answer: "Straight line passing through origin." },
            { question: "What provides the restoring force?", answer: "The component of gravity (mg sinθ)." }
          ],
          quizQuestions: [
            { id: 1, question: "The graph of L vs T² is a:", options: ["Parabola", "Straight Line", "Circle", "Hyperbola"], correctIndex: 1 },
            { id: 2, question: "If length is quadrupled, the time period becomes:", options: ["Double", "Half", "Four times", "Same"], correctIndex: 0 },
            { id: 3, question: "Acceleration due to gravity (g) is maximum at:", options: ["Equator", "Poles", "Center of Earth", "Space"], correctIndex: 1 },
            { id: 4, question: "The time period of a seconds pendulum is:", options: ["1 sec", "2 sec", "4 sec", "0.5 sec"], correctIndex: 1 },
            { id: 5, question: "Restoring force at mean position is:", options: ["Maximum", "Minimum (Zero)", "Infinite", "Constant"], correctIndex: 1 },
            { id: 6, question: "Kinetic energy is maximum at:", options: ["Extreme position", "Mean position", "Midway", "Nowhere"], correctIndex: 1 },
            { id: 7, question: "Potential energy is maximum at:", options: ["Extreme position", "Mean position", "Midway", "Nowhere"], correctIndex: 0 },
            { id: 8, question: "Effective length includes:", options: ["Thread length only", "Thread + Radius of bob", "Thread + Diameter", "Radius only"], correctIndex: 1 },
            { id: 9, question: "For small oscillations, sin θ is approx:", options: ["θ (in radians)", "1", "0", "cos θ"], correctIndex: 0 },
            { id: 10, question: "Value of g is approximately:", options: ["9.8 m/s", "9.8 m/s²", "10 cm/s²", "980 m/s²"], correctIndex: 1 }
          ]
        }
      },
      { 
        id: 'p3',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], 
        title: 'Screw Gauge', 
        description: 'Measure the diameter of a thin wire.', 
        difficulty: 'Medium', 
        duration: '25 min', 
        category: 'Measurement',
        content: {
            videoId: "H7zX7dJ3_1Q",
            aim: "To measure the diameter of a given wire using a screw gauge.",
            requirements: ["Screw Gauge", "Wire", "Half-meter scale"],
            theory: "The Screw Gauge (or Micrometer) works on the principle of converting small linear displacements of a screw into large rotational displacements on the circular scale.\n\n**Construction:** It consists of a U-shaped frame, a fixed anvil, a movable spindle connected to a thimble, and a ratchet mechanism. The main scale (pitch scale) on the sleeve reads in millimeters, while the circular scale on the thimble has 50 or 100 divisions.\n\n**Pitch:** The distance moved by the spindle per complete rotation of the thimble. Usually 0.5 mm or 1 mm.\n\n**Least Count:** LC = Pitch / Number of circular scale divisions. For a pitch of 0.5 mm and 50 divisions: LC = 0.01 mm.\n\n**Zero Error:** When the anvil and spindle are in contact, if the zero of the circular scale does not coincide with the datum line, a zero error exists. It can be positive (zero below datum) or negative (zero above datum).\n\n**Reading:** Total reading = MSR + (CSR × LC) ± zero error correction.\n\n**Applications:** Measuring diameter of thin wires, thickness of metal sheets, diameter of small spheres.",
            procedure: [
              "Find the value of one main scale division and the total number of divisions on the circular scale to calculate the least count.",
              "Bring the flat faces of the screw and the stud in contact using the ratchet, and determine the zero error.",
              "Grip the given wire gently between the flat faces using the ratchet.",
              "Note the main scale reading (MSR).",
              "Note the circular scale division (CSR) that perfectly coincides with the reference line.",
              "Repeat the observation at three different places along the length of the wire to check for uniformity.",
              "Calculate the total reading and mean diameter of the wire."
            ],
            objectives: ["Measure thickness of thin objects.", "Understand zero correction."],
            realWorldApplications: ["Electrical Engineering", "Paper Industry", "Automotive", "Micro-machining"],
            observationTable: { columns: ["MSR (a) mm", "CSR (n)", "CSR val (b=n*LC)", "Total (a+b) mm"] },
            assignments: [
                { id: 1, question: "Determine the Least Count of a screw gauge which has a pitch of 1 mm and 100 divisions on the circular scale.", marks: 3 },
                { id: 2, question: "Describe how to determine the pitch of a screw gauge. Why is a ratchet provided?", marks: 4 },
                { id: 3, question: "Calculate the area of cross-section of a wire if its diameter is measured to be 1.25 mm.", marks: 4 },
                { id: 4, question: "Explain Backlash Error. How can it be avoided while taking readings?", marks: 4 },
                { id: 5, question: "If the zero of the circular scale is below the reference line by 4 divisions, what is the type of zero error? If LC is 0.01mm, calculate the correction.", marks: 5 }
            ],
            vivaQuestions: [
                { question: "What is Pitch?", answer: "Linear distance moved by the screw in one complete rotation." },
                { question: "What is Backlash Error?", answer: "Error caused by wear and tear of threads, avoided by rotating in one direction." },
                { question: "Why is a micrometer used?", answer: "Because it can often measure up to 10^-6 meters (microns)." },
                { question: "Formula for Least Count?", answer: "Pitch / Total no. of circular divisions." },
                { question: "What is the ratchet used for?", answer: "To apply uniform pressure on the object." },
                { question: "How to find the thickness of a paper sheet?", answer: "Measure thickness of a stack of papers and divide by count." },
                { question: "What is a negative zero error?", answer: "When the zero of the circular scale is above the reference line." },
                { question: "What is the typical LC of a screw gauge?", answer: "0.01 mm or 0.001 cm." },
                { question: "Is screw gauge more precise than vernier?", answer: "Yes, generally by a factor of 10." },
                { question: "What is the reference line?", answer: "The horizontal line on the sleeve/main scale." }
            ],
            quizQuestions: [
                { id: 1, question: "If Pitch = 1mm and Circular Divisions = 100, what is Least Count?", options: ["0.1 mm", "0.01 mm", "0.001 mm", "1 mm"], correctIndex: 1 },
                { id: 2, question: "The ratchet in a screw gauge helps to:", options: ["Lock the screw", "Apply uniform pressure", "Measure depth", "Hold the object"], correctIndex: 1 },
                { id: 3, question: "Positive zero error is:", options: ["Added", "Subtracted", "Multiplied", "Ignored"], correctIndex: 1 },
                { id: 4, question: "A micrometer screw gauge typically has a least count of:", options: ["10^-3 m", "10^-4 m", "10^-5 m", "10^-6 m"], correctIndex: 2 },
                { id: 5, question: "Linear scale readings are in:", options: ["Millimeters", "Centimeters", "Micrometers", "Inches"], correctIndex: 0 },
                { id: 6, question: "Circular scale usually has how many divisions?", options: ["10", "50 or 100", "20", "5"], correctIndex: 1 },
                { id: 7, question: "Backlash error is minimized by:", options: ["Turning screw in one direction", "Oiling the screw", "Heating the screw", "Cleaning studs"], correctIndex: 0 },
                { id: 8, question: "Total Reading equals:", options: ["MSR + CSR", "MSR + (CSR x LC)", "MSR - CSR", "MSR / CSR"], correctIndex: 1 },
                { id: 9, question: "Zero error is -0.02mm. Observed reading is 1.45mm. True reading is:", options: ["1.43 mm", "1.47 mm", "1.45 mm", "1.40 mm"], correctIndex: 1 },
                { id: 10, question: "The fixed part of the screw gauge is:", options: ["Thimble", "Spindle", "Anvil", "Ratchet"], correctIndex: 2 }
            ]
        }
      },
      {
          id: 'p4',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'],
          title: 'Ohm\'s Law',
          description: 'Verify the relationship between Voltage and Current.',
          difficulty: 'Easy',
          duration: '30 min',
          category: 'Electricity',
          content: {
              videoId: "TsPLr_fKq28",
              aim: "To verify Ohm's Law and determine the resistance of a given wire.",
              requirements: ["Battery", "Voltmeter", "Ammeter", "Rheostat", "Resistor"],
              theory: "Ohm's Law, formulated by Georg Simon Ohm in 1827, states that the current (I) flowing through a conductor is directly proportional to the potential difference (V) applied across its ends, provided the temperature and other physical conditions remain constant.\n\n**Mathematical Statement:**\nV = IR or I = V/R\nwhere R is the resistance of the conductor measured in Ohms (Ω).\n\n**Resistance and Resistivity:**\nResistance depends on the material, length (l), and cross-sectional area (A) of the conductor:\nR = ρl/A\nwhere ρ (rho) is the resistivity of the material.\n\n**V-I Characteristics:**\nFor an Ohmic conductor (metals at constant temperature), the graph of V vs I is a straight line passing through the origin. The slope of this line gives the resistance R. Conductors that do not obey Ohm's Law (e.g., diodes, electrolytes) are called Non-Ohmic conductors.\n\n**Factors Affecting Resistance:**\n1. Length: R ∝ l\n2. Cross-sectional area: R ∝ 1/A\n3. Material: Different materials have different resistivities.\n4. Temperature: For metals, resistance increases with temperature.",
              procedure: [
              "Draw the circuit diagram and connect the apparatus as per the diagram.",
              "Keep the key open and the rheostat at its maximum resistance position to draw minimum current.",
              "Check the zero error of the ammeter and voltmeter.",
              "Close the key and note the lowest current and its corresponding voltage.",
              "Gradually shift the rheostat contact to increase the current in small, distinct steps.",
              "For each step, note down the ammeter and voltmeter readings.",
              "Take at least 5 to 6 sets of readings.",
              "Plot a graph between current (I) on the x-axis and potential difference (V) on the y-axis, and calculate resistance from the slope."
            ],
              objectives: ["Verify linearity of V-I graph.", "Calculate Resistance per unit length."],
              realWorldApplications: ["Electronics", "Household Wiring", "Fuses", "Heaters"],
              observationTable: { columns: ["Voltage (V)", "Current (I)", "V/I (R)", "Mean R"] },
              assignments: [
                  { id: 1, question: "Plot a V-I graph from your observations. Calculate the resistance from the slope.", marks: 5 },
                  { id: 2, question: "Calculate the resistivity of the wire if its length is 50cm, diameter is 0.5mm, and resistance is 2 Ohms.", marks: 5 },
                  { id: 3, question: "Why is the Voltmeter connected in parallel and Ammeter in series? Explain with circuit diagram.", marks: 4 },
                  { id: 4, question: "What are Non-Ohmic conductors? Give two examples and sketch their V-I characteristics.", marks: 3 },
                  { id: 5, question: "Explain the effect of temperature on the resistance of a metallic conductor. Why do we pass current only for a short time?", marks: 3 }
              ],
              vivaQuestions: [
                  { question: "What is the shape of the V-I graph for a metallic conductor?", answer: "A straight line passing through the origin." },
                  { question: "What is an Ohmic conductor?", answer: "A conductor that obeys Ohm's Law (e.g., metals at constant temp)." },
                  { question: "How are Voltmeter and Ammeter connected?", answer: "Voltmeter in parallel, Ammeter in series." },
                  { question: "What is the slope of V-I graph?", answer: "Resistance (R)." },
                  { question: "Does Ohm's law hold for semiconductors?", answer: "No, they are non-ohmic." },
                  { question: "Why is a rheostat used?", answer: "To vary the current in the circuit without changing the voltage source." },
                  { question: "What is the unit of resistivity?", answer: "Ohm-meter (Ωm)." },
                  { question: "Factors affecting resistance?", answer: "Length, Area, Material, Temperature." },
                  { question: "Why should current be passed for a short time?", answer: "To prevent heating, which changes resistance." },
                  { question: "What is the function of the battery?", answer: "To maintain potential difference." }
              ],
              quizQuestions: [
                  { id: 1, question: "The slope of the V-I graph represents:", options: ["Current", "Voltage", "Resistance", "Power"], correctIndex: 2 },
                  { id: 2, question: "Unit of Resistance is:", options: ["Ampere", "Volt", "Ohm", "Watt"], correctIndex: 2 },
                  { id: 3, question: "If V is doubled and R is constant, I will:", options: ["Double", "Halve", "Stay same", "Become zero"], correctIndex: 0 },
                  { id: 4, question: "Ammeter should have:", options: ["High resistance", "Low resistance", "Infinite resistance", "Zero conductance"], correctIndex: 1 },
                  { id: 5, question: "Voltmeter is connected in:", options: ["Series", "Parallel", "Mixed", "Any"], correctIndex: 1 },
                  { id: 6, question: "Resistance is inversely proportional to:", options: ["Length", "Temperature", "Area of Cross-section", "Density"], correctIndex: 2 },
                  { id: 7, question: "Ohm's Law fails for:", options: ["Copper", "Aluminum", "Diode", "Iron"], correctIndex: 2 },
                  { id: 8, question: "1 Volt / 1 Ampere equals:", options: ["1 Watt", "1 Joule", "1 Ohm", "1 Coulomb"], correctIndex: 2 },
                  { id: 9, question: "Heating effect depends on:", options: ["I²Rt", "IR", "V/R", "None"], correctIndex: 0 },
                  { id: 10, question: "Ideal voltmeter resistance is:", options: ["Zero", "Infinite", "100 Ohm", "Low"], correctIndex: 1 }
              ]
          }
      },
      {
          id: 'p5',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'],
          title: 'Concave Mirror',
          description: 'Find focal length using u-v method.',
          difficulty: 'Medium',
          duration: '40 min',
          category: 'Optics',
          content: {
              videoId: "lK6-2gYy2_c",
              aim: "To find the focal length of a concave mirror by determining image distance (v) for various object distances (u).",
              requirements: ["Concave Mirror", "Optical Bench", "Needles/Candle"],
              theory: "A concave mirror is a spherical mirror whose reflecting surface is curved inward (toward the center of the sphere). It converges parallel rays of light to a point called the principal focus.\n\n**Key Terms:**\n- **Pole (P):** The geometric center of the mirror surface.\n- **Center of Curvature (C):** The center of the sphere of which the mirror is a part.\n- **Radius of Curvature (R):** The radius of this sphere.\n- **Principal Focus (F):** The point where paraxial rays parallel to the principal axis converge after reflection. f = R/2.\n\n**Mirror Formula:**\n1/v + 1/u = 1/f\nwhere u = object distance, v = image distance, f = focal length. All distances are measured from the pole using the New Cartesian Sign Convention.\n\n**Sign Convention (New Cartesian):**\n- All distances are measured from the pole.\n- Distances in the direction of incident light are positive; against it are negative.\n- Heights above the principal axis are positive; below are negative.\n\n**Image Formation:**\nDepending on the object position relative to F, C, and P, the image can be real/virtual, inverted/erect, and magnified/diminished/same size.\n\n**u-v Method:**\nBy measuring u and v for various object positions and applying the mirror formula, f can be determined experimentally.",
              procedure: [
              "Find the rough focal length of the concave mirror by focusing a distant object on a screen or wall.",
              "Mount the concave mirror on a specified mirror holder and place it on the optical bench.",
              "Mount an object pin vertically on a stand and place it in front of the mirror between its center of curvature (C) and principal focus (F).",
              "Move the screen or a second image pin to locate the inverted, real, magnified image of the object pin.",
              "Adjust the height and distance of the image pin to remove parallax between it and the mirror image.",
              "Carefully measure the object distance (u) and the exact image distance (v) from the pole of the mirror.",
              "Repeat the procedure for at least five different object distances.",
              "Calculate focal length f = (uv)/(u+v) or plot a 1/u vs 1/v graph to find the focal length."
            ],
              objectives: ["Understand real vs virtual images.", "Verify mirror formula."],
              realWorldApplications: ["Dentistry", "Solar Power", "Automotive", "Telescopes", "Shaving Mirrors"],
              observationTable: { columns: ["Object u", "Image v", "1/u", "1/v", "f"] },
              assignments: [
                  { id: 1, question: "Using the Mirror Formula, calculate the focal length if object distance u = -20cm and image distance v = -30cm.", marks: 3 },
                  { id: 2, question: "Draw ray diagrams showing image formation when the object is placed: (a) At C, (b) Between F and P.", marks: 5 },
                  { id: 3, question: "Plot a graph of 1/u vs 1/v. What do the intercepts on the axes represent?", marks: 4 },
                  { id: 4, question: "Define magnification. If the image is real and inverted, what is the sign of magnification?", marks: 3 },
                  { id: 5, question: "Differentiate between Real and Virtual images with respect to a concave mirror. How do you distinguish them experimentally?", marks: 5 }
              ],
              vivaQuestions: [
                  { question: "Where is the image formed when the object is at C?", answer: "At C, real, inverted, and same size." },
                  { question: "What is parallax?", answer: "Apparent shift in position of an object when viewed from different angles." },
                  { question: "Can a concave mirror form a virtual image?", answer: "Yes, when the object is placed between F and P." },
                  { question: "What is the relationship between f and R?", answer: "f = R / 2." },
                  { question: "What type of mirror is used by dentists?", answer: "Concave mirror." },
                  { question: "Why do we remove parallax?", answer: "To ensure the image and image needle are at the same location." },
                  { question: "Sign of focal length for concave mirror?", answer: "Negative." },
                  { question: "Image at infinity is formed when object is at?", answer: "Focus (F)." },
                  { question: "Nature of image on a screen?", answer: "Real and Inverted." },
                  { question: "What is the pole of the mirror?", answer: "The geometric center of the mirror surface." }
              ],
              quizQuestions: [
                  { id: 1, question: "The relation between f and R is:", options: ["f = R", "f = R/2", "f = 2R", "f = R/4"], correctIndex: 1 },
                  { id: 2, question: "For a real image, magnification (m) is:", options: ["Positive", "Negative", "Zero", "Undefined"], correctIndex: 1 },
                  { id: 3, question: "In the u-v method graph, the intercept on axes is:", options: ["f", "2f", "1/f", "R"], correctIndex: 2 },
                  { id: 4, question: "Image formed by convex mirror is always:", options: ["Real & Inverted", "Virtual & Erect", "Real & Erect", "Virtual & Inverted"], correctIndex: 1 },
                  { id: 5, question: "Mirror formula is:", options: ["1/v - 1/u = 1/f", "1/v + 1/u = 1/f", "v + u = f", "1/f = v/u"], correctIndex: 1 },
                  { id: 6, question: "Unit of Power of lens/mirror is:", options: ["Watt", "Diopter", "Meter", "Second"], correctIndex: 1 },
                  { id: 7, question: "Concave mirror is used in:", options: ["Rear view mirror", "Shaving mirror", "Street light reflector", "ATM security"], correctIndex: 1 },
                  { id: 8, question: "When u = 2f, v = ?", options: ["f", "2f", "infinity", "0"], correctIndex: 1 },
                  { id: 9, question: "Real images can be:", options: ["Seen only", "Caught on screen", "Always erect", "Always magnified"], correctIndex: 1 },
                  { id: 10, question: "The graph of 1/v vs 1/u is:", options: ["Parabola", "Straight Line", "Hyperbola", "Circle"], correctIndex: 1 }
              ]
          }
      }
,
      {
          id: 'p6',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Metre Bridge — Resistance', description: 'Determine resistance per unit length using Metre Bridge.', difficulty: 'Medium', duration: '35 min', category: 'Electricity',          content: { aim: "To determine resistance using a Metre Bridge.", requirements: ["Metre Bridge", "Resistance Box", "Galvanometer", "Jockey"], theory: "The Metre Bridge (also called a slide wire bridge) is a practical form of the Wheatstone Bridge used to measure an unknown resistance.\n\n**Wheatstone Bridge Principle:**\nA Wheatstone Bridge consists of four resistances P, Q, R, and S arranged in a diamond shape. A galvanometer is connected between the junctions of P-Q and R-S. At balance (null point), no current flows through the galvanometer, and:\nP/Q = R/S\n\n**Metre Bridge Working:**\nIn a metre bridge, a 1-meter long uniform resistance wire replaces two of the four resistances. An unknown resistance S is placed in one gap and a known resistance R from a resistance box in the other gap. A jockey is slid along the wire to find the null point at distance l from one end.\n\nAt balance: R/S = l/(100 - l)\nTherefore: S = R(100 - l)/l\n\n**Key Points:**\n- The wire must be uniform in cross-section.\n- The balancing length should be near the middle (between 30cm and 70cm) for accurate results.\n- End corrections may need to be applied for the resistance of thick copper strips at the ends.", procedure: [
              "Draw a circuit diagram and connect the apparatus strictly as shown.",
              "Connect the unknown resistance wire in the right gap and the resistance box in the left gap of the metre bridge.",
              "Introduce a known resistance (R) from the resistance box.",
              "Touch the jockey gently at the left end and right end of the bridge wire to verify opposite deflections in the galvanometer.",
              "Slide the jockey gently along the wire to find the null point where the galvanometer shows zero deflection.",
              "Note the balancing length (l) from the zero end.",
              "Calculate unknown resistance S = R(100 - l)/l.",
              "Repeat for 4 to 5 different values of R."
            ], objectives: ["Verify Kirchhoff's laws."] }
      },
      {
          id: 'p7',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Galvanometer — Figure of Merit', description: 'Determine figure of merit of a galvanometer.', difficulty: 'Hard', duration: '40 min', category: 'Electricity',          content: { aim: "To determine the figure of merit of a galvanometer.", requirements: ["Galvanometer", "Battery", "Resistance Box"], theory: "The figure of merit of a galvanometer is defined as the current required to produce a unit deflection in the galvanometer. It is a measure of the sensitivity of the instrument.\n\n**Formula:**\nk = E / [(R + G) × θ]\nwhere k = figure of merit (A/div), E = EMF of the battery, R = resistance from the resistance box, G = galvanometer resistance, θ = deflection in divisions.\n\n**Galvanometer Resistance (G):**\nG is determined by the half-deflection method. First, a deflection θ is obtained with resistance R alone. Then a shunt S is connected across the galvanometer and adjusted to get deflection θ/2. At this point, G ≈ S.\n\n**Sensitivity:**\nA galvanometer with a smaller figure of merit is more sensitive, meaning it produces a larger deflection per unit current. Current sensitivity = 1/k = θ/Ig.\n\n**Applications:**\nThe figure of merit is essential for converting a galvanometer into an ammeter (by adding a shunt) or a voltmeter (by adding a high series resistance).", procedure: [
              "Connect the battery, a high resistance box (R), and the galvanometer in series with a one-way key.",
              "Connect a low resistance box (S) in parallel with the galvanometer to act as a shunt, along with another key.",
              "Close the main key and introduce a high resistance to obtain a full-scale deflection (theta) in the galvanometer.",
              "Record the value of resistance R and the deflection theta.",
              "Close the shunt key and adjust the shunt resistance S until the deflection is reduced exactly to half (theta/2).",
              "Record the value of S. The galvanometer resistance G is roughly equal to S.",
              "Calculate the figure of merit k = E / ((R + G) * theta).",
              "Repeat for different starting deflections."
            ], objectives: ["Understand sensitivity."] }
      },
      {
          id: 'p8',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Glass Prism — Refractive Index', description: 'Find refractive index using minimum deviation.', difficulty: 'Medium', duration: '30 min', category: 'Optics',          content: { aim: "To find refractive index of glass prism.", requirements: ["Glass Prism", "Drawing Board", "Pins"], theory: "When a ray of light passes through a glass prism, it undergoes refraction at both surfaces. The angle between the incident ray and the emergent ray is called the angle of deviation (δ).\n\n**Prism Geometry:**\nA prism has two refracting surfaces inclined at an angle A (the angle of the prism). At the first surface, the ray bends toward the normal; at the second, it bends away from the normal.\n\n**Minimum Deviation (Dm):**\nAs the angle of incidence increases, the angle of deviation first decreases, reaches a minimum value (Dm), and then increases. At minimum deviation, the refracted ray inside the prism is parallel to the base, and the angle of incidence equals the angle of emergence (i = e).\n\n**Refractive Index Formula:**\nAt minimum deviation:\nμ = sin[(A + Dm)/2] / sin(A/2)\nwhere μ is the refractive index of the prism material.\n\n**i-δ Graph:**\nA plot of i vs δ gives a U-shaped curve with the minimum at Dm. This graph is used experimentally to find Dm and hence μ.\n\n**Snell's Law:** At each refracting surface: n₁ sin i = n₂ sin r.", procedure: [
              "Fix a white sheet of paper on a drawing board using drawing pins.",
              "Place the glass prism on the paper and trace its triangular outline.",
              "Remove the prism and draw a normal to one refracting face. Draw an incident ray making an angle of incidence (e.g., 30 degrees).",
              "Fix two pins P and Q vertically on the incident ray.",
              "Place the prism back exactly on its outline.",
              "Look through the other refracting face and fix two more pins R and S such that they perfectly align with the images of P and Q.",
              "Remove the prism and pins, draw the emergent ray joining R and S, and measure the angle of deviation.",
              "Repeat the experiment for angles of incidence from 35 degrees to 60 degrees in steps of 5 degrees.",
              "Plot a graph between angle of incidence (i) and angle of deviation, and determine the angle of minimum deviation to calculate the refractive index."
            ], objectives: ["Snell's Law."] }
      },
      {
          id: 'p9',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Convex Lens — Focal Length', description: 'Determine focal length using u-v method.', difficulty: 'Easy', duration: '25 min', category: 'Optics',          content: { aim: "To determine focal length of convex lens.", requirements: ["Convex Lens", "Optical Bench", "Screen"], theory: "A convex lens is a transparent optical element that converges parallel rays of light to a point called the principal focus. It is thicker at the center than at the edges.\n\n**Lens Formula:**\n1/v - 1/u = 1/f\nwhere u = object distance, v = image distance, f = focal length. The New Cartesian sign convention is used.\n\n**Sign Convention:**\n- All distances are measured from the optical center of the lens.\n- Distances measured in the direction of incident light are positive.\n- The focal length of a convex lens is positive.\n\n**Image Formation:**\nDepending on the object position, a convex lens forms real/virtual, inverted/erect, and magnified/diminished images. When the object is beyond 2F, the image is between F and 2F (diminished); at 2F, same size; between F and 2F, magnified; at F, image at infinity.\n\n**u-v Method:**\nBy measuring u and v for different object positions and using the lens formula, the focal length can be calculated. A graph of 1/v vs 1/u gives a straight line with intercepts equal to 1/f.\n\n**Power of a Lens:** P = 1/f (in meters), measured in Diopters (D).", procedure: [
              "Find the rough focal length of the convex lens by catching the image of a distant tree or window on a screen.",
              "Mount the convex lens in a lens holder equipped on the optical bench.",
              "Place the object pin (O) in front of the lens at a distance slightly greater than the rough focal length.",
              "Place the image pin (I) on the other side of the lens and move it to locate the real and inverted image.",
              "Adjust the image pin to accurately remove parallax between the tip of the image and the tip of the image pin.",
              "Note the object distance (u) and image distance (v).",
              "Repeat the process for 5 or 6 different object distances.",
              "Calculate focal length f = (uv)/(u+v) and verify it by plotting a u-v graph."
            ], objectives: ["Verify lens formula."] }
      },
      {
          id: 'p10',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Semiconductor Diode', description: 'Study I-V characteristics of p-n junction diode.', difficulty: 'Medium', duration: '30 min', category: 'Electronics',          content: { aim: "To study I-V characteristics of a p-n junction diode.", requirements: ["Diode", "Voltmeter", "Ammeter", "Battery"], theory: "Forward bias: current after 0.7V. Reverse bias: leakage current.", procedure: [
              "For Forward Bias, connect the p-side of the diode to the positive terminal of the battery and the n-side to the negative terminal via a rheostat.",
              "Connect a voltmeter (0-3V) in parallel and a milliammeter (0-50mA) in series with the diode.",
              "Gradually increase the voltage in steps of 0.1V and record the corresponding forward current.",
              "Observe the knee voltage where current starts rising sharply.",
              "For Reverse Bias, connect the p-side to the negative terminal and n-side to the positive terminal of a higher voltage source.",
              "Connect a voltmeter (0-50V) in parallel and a microammeter (0-100uA) in series.",
              "Increase the voltage in steps of 2V and record the steady reverse leakage current.",
              "Plot the Forward and Reverse I-V characteristics on a graph."
            ], objectives: ["Semiconductor behavior."] }
      },
      {
          id: 'p11',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Sonometer — String Frequency', description: 'Verify laws of vibrating strings.', difficulty: 'Medium', duration: '35 min', category: 'Waves',          content: { aim: "To verify laws of vibrating strings.", requirements: ["Sonometer", "Tuning Forks", "Weights"], theory: "A sonometer consists of a hollow wooden box with a stretched metallic wire fixed at one end and passing over movable bridges. Weights can be attached to provide tension.\n\n**Principle:**\nWhen a string vibrates in its fundamental mode, the frequency of vibration is given by:\nf = (1/2L) × √(T/μ)\nwhere L = vibrating length, T = tension in the wire, μ = linear mass density (mass per unit length) of the wire.\n\n**Laws of Vibrating Strings:**\n1. **Law of Length:** f ∝ 1/L (for constant T and μ). So f × L = constant.\n2. **Law of Tension:** f ∝ √T (for constant L and μ).\n3. **Law of Mass:** f ∝ 1/√μ (for constant L and T).\n\n**Resonance:**\nWhen the natural frequency of the wire matches the frequency of an external source (tuning fork), the wire vibrates with maximum amplitude — this is resonance. A paper rider placed on the wire is thrown off at resonance.\n\n**Experimental Verification:**\nBy keeping tension constant and varying the vibrating length to achieve resonance with tuning forks of known frequencies, the law of length (f × L = constant) can be verified.", procedure: [
              "Place the sonometer on the table and stretch the wire over the two movable bridges, passing it over the pulley.",
              "Suspend a known mass (e.g., 1kg or 2kg) from the free end to provide tension (T).",
              "Strike a tuning fork of known frequency and place its stem gently on the sonometer box.",
              "Place a small V-shaped paper rider exactly in the middle of the wire between the bridges.",
              "Adjust the distance between the two bridges until the wire resonates with the tuning fork, causing the paper rider to flutter and fall off.",
              "Measure the resonant length (l) between the two bridges.",
              "Repeat the procedure with tuning forks of 4 to 5 different frequencies while keeping tension constant.",
              "Verify the law of length by checking if frequency * length is a constant."
            ], objectives: ["Standing waves."] }
      },
      {
          id: 'p12',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Resonance Tube — Speed of Sound', description: 'Determine speed of sound in air.', difficulty: 'Medium', duration: '30 min', category: 'Waves',          content: { aim: "To determine speed of sound using resonance tube.", requirements: ["Resonance Tube", "Tuning Forks", "Water"], theory: "A resonance tube is a closed pipe apparatus used to determine the speed of sound in air by utilizing the principle of resonance with a tuning fork of known frequency.\n\n**Principle:**\nWhen a vibrating tuning fork is held near the open end of a tube closed at the other end (by water), standing waves are formed. Resonance occurs when the length of the air column is such that an antinode forms at the open end and a node at the closed end.\n\n**Resonance Conditions:**\n- First resonance: L₁ ≈ λ/4\n- Second resonance: L₂ ≈ 3λ/4\n\n**Speed of Sound Calculation:**\nL₂ - L₁ = λ/2, therefore λ = 2(L₂ - L₁)\nSpeed of sound: v = fλ = 2f(L₂ - L₁)\n\n**End Correction:**\nThe antinode forms slightly outside the open end. e = 0.3d (where d is the internal diameter).\ne = (L₂ - 3L₁)/2\n\n**Factors Affecting Speed of Sound:**\nSpeed increases with temperature: v ∝ √T (absolute temperature). At 0°C, the speed of sound in air is approximately 332 m/s.", procedure: [
              "Set up the resonance tube apparatus and adjust it so it stands vertically.",
              "Fill the tube completely with water using the attached reservoir.",
              "Strike a tuning fork of known frequency (e.g., 512 Hz) against a rubber pad and hold it horizontally just above the open end of the tube.",
              "Gradually lower the water level by lowering the reservoir until a loud resonant sound is heard.",
              "Measure the length of the air column from the water surface to the top of the tube. This is the first resonating length (l1).",
              "Lower the water level further to approximately three times l1 and fine-tune to find the second resonant position.",
              "Measure the second resonating length (l2).",
              "Calculate the speed of sound using v = 2 * frequency * (l2 - l1)."
            ], objectives: ["Understand resonance."] }
      }
,
      {
          id: 'p6',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Metre Bridge — Resistance', description: 'Determine resistance per unit length using Metre Bridge.', difficulty: 'Medium', duration: '35 min', category: 'Electricity',          content: { aim: "To determine resistance using a Metre Bridge.", requirements: ["Metre Bridge", "Resistance Box", "Galvanometer", "Jockey"], theory: "The Metre Bridge (also called a slide wire bridge) is a practical form of the Wheatstone Bridge used to measure an unknown resistance.\n\n**Wheatstone Bridge Principle:**\nA Wheatstone Bridge consists of four resistances P, Q, R, and S arranged in a diamond shape. A galvanometer is connected between the junctions of P-Q and R-S. At balance (null point), no current flows through the galvanometer, and:\nP/Q = R/S\n\n**Metre Bridge Working:**\nIn a metre bridge, a 1-meter long uniform resistance wire replaces two of the four resistances. An unknown resistance S is placed in one gap and a known resistance R from a resistance box in the other gap. A jockey is slid along the wire to find the null point at distance l from one end.\n\nAt balance: R/S = l/(100 - l)\nTherefore: S = R(100 - l)/l\n\n**Key Points:**\n- The wire must be uniform in cross-section.\n- The balancing length should be near the middle (between 30cm and 70cm) for accurate results.\n- End corrections may need to be applied for the resistance of thick copper strips at the ends.", procedure: [
              "Draw a circuit diagram and connect the apparatus strictly as shown.",
              "Connect the unknown resistance wire in the right gap and the resistance box in the left gap of the metre bridge.",
              "Introduce a known resistance (R) from the resistance box.",
              "Touch the jockey gently at the left end and right end of the bridge wire to verify opposite deflections in the galvanometer.",
              "Slide the jockey gently along the wire to find the null point where the galvanometer shows zero deflection.",
              "Note the balancing length (l) from the zero end.",
              "Calculate unknown resistance S = R(100 - l)/l.",
              "Repeat for 4 to 5 different values of R."
            ], objectives: ["Verify Kirchhoff's laws."] }
      },
      {
          id: 'p7',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Galvanometer — Figure of Merit', description: 'Determine figure of merit of a galvanometer.', difficulty: 'Hard', duration: '40 min', category: 'Electricity',          content: { aim: "To determine the figure of merit of a galvanometer.", requirements: ["Galvanometer", "Battery", "Resistance Box"], theory: "The figure of merit of a galvanometer is defined as the current required to produce a unit deflection in the galvanometer. It is a measure of the sensitivity of the instrument.\n\n**Formula:**\nk = E / [(R + G) × θ]\nwhere k = figure of merit (A/div), E = EMF of the battery, R = resistance from the resistance box, G = galvanometer resistance, θ = deflection in divisions.\n\n**Galvanometer Resistance (G):**\nG is determined by the half-deflection method. First, a deflection θ is obtained with resistance R alone. Then a shunt S is connected across the galvanometer and adjusted to get deflection θ/2. At this point, G ≈ S.\n\n**Sensitivity:**\nA galvanometer with a smaller figure of merit is more sensitive, meaning it produces a larger deflection per unit current. Current sensitivity = 1/k = θ/Ig.\n\n**Applications:**\nThe figure of merit is essential for converting a galvanometer into an ammeter (by adding a shunt) or a voltmeter (by adding a high series resistance).", procedure: [
              "Connect the battery, a high resistance box (R), and the galvanometer in series with a one-way key.",
              "Connect a low resistance box (S) in parallel with the galvanometer to act as a shunt, along with another key.",
              "Close the main key and introduce a high resistance to obtain a full-scale deflection (theta) in the galvanometer.",
              "Record the value of resistance R and the deflection theta.",
              "Close the shunt key and adjust the shunt resistance S until the deflection is reduced exactly to half (theta/2).",
              "Record the value of S. The galvanometer resistance G is roughly equal to S.",
              "Calculate the figure of merit k = E / ((R + G) * theta).",
              "Repeat for different starting deflections."
            ], objectives: ["Understand sensitivity."] }
      },
      {
          id: 'p8',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Glass Prism — Refractive Index', description: 'Find refractive index using minimum deviation.', difficulty: 'Medium', duration: '30 min', category: 'Optics',          content: { aim: "To find refractive index of glass prism.", requirements: ["Glass Prism", "Drawing Board", "Pins"], theory: "When a ray of light passes through a glass prism, it undergoes refraction at both surfaces. The angle between the incident ray and the emergent ray is called the angle of deviation (δ).\n\n**Prism Geometry:**\nA prism has two refracting surfaces inclined at an angle A (the angle of the prism). At the first surface, the ray bends toward the normal; at the second, it bends away from the normal.\n\n**Minimum Deviation (Dm):**\nAs the angle of incidence increases, the angle of deviation first decreases, reaches a minimum value (Dm), and then increases. At minimum deviation, the refracted ray inside the prism is parallel to the base, and the angle of incidence equals the angle of emergence (i = e).\n\n**Refractive Index Formula:**\nAt minimum deviation:\nμ = sin[(A + Dm)/2] / sin(A/2)\nwhere μ is the refractive index of the prism material.\n\n**i-δ Graph:**\nA plot of i vs δ gives a U-shaped curve with the minimum at Dm. This graph is used experimentally to find Dm and hence μ.\n\n**Snell's Law:** At each refracting surface: n₁ sin i = n₂ sin r.", procedure: [
              "Fix a white sheet of paper on a drawing board using drawing pins.",
              "Place the glass prism on the paper and trace its triangular outline.",
              "Remove the prism and draw a normal to one refracting face. Draw an incident ray making an angle of incidence (e.g., 30 degrees).",
              "Fix two pins P and Q vertically on the incident ray.",
              "Place the prism back exactly on its outline.",
              "Look through the other refracting face and fix two more pins R and S such that they perfectly align with the images of P and Q.",
              "Remove the prism and pins, draw the emergent ray joining R and S, and measure the angle of deviation.",
              "Repeat the experiment for angles of incidence from 35 degrees to 60 degrees in steps of 5 degrees.",
              "Plot a graph between angle of incidence (i) and angle of deviation, and determine the angle of minimum deviation to calculate the refractive index."
            ], objectives: ["Snell's Law."] }
      },
      {
          id: 'p9',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Convex Lens — Focal Length', description: 'Determine focal length using u-v method.', difficulty: 'Easy', duration: '25 min', category: 'Optics',          content: { aim: "To determine focal length of convex lens.", requirements: ["Convex Lens", "Optical Bench", "Screen"], theory: "A convex lens is a transparent optical element that converges parallel rays of light to a point called the principal focus. It is thicker at the center than at the edges.\n\n**Lens Formula:**\n1/v - 1/u = 1/f\nwhere u = object distance, v = image distance, f = focal length. The New Cartesian sign convention is used.\n\n**Sign Convention:**\n- All distances are measured from the optical center of the lens.\n- Distances measured in the direction of incident light are positive.\n- The focal length of a convex lens is positive.\n\n**Image Formation:**\nDepending on the object position, a convex lens forms real/virtual, inverted/erect, and magnified/diminished images. When the object is beyond 2F, the image is between F and 2F (diminished); at 2F, same size; between F and 2F, magnified; at F, image at infinity.\n\n**u-v Method:**\nBy measuring u and v for different object positions and using the lens formula, the focal length can be calculated. A graph of 1/v vs 1/u gives a straight line with intercepts equal to 1/f.\n\n**Power of a Lens:** P = 1/f (in meters), measured in Diopters (D).", procedure: [
              "Find the rough focal length of the convex lens by catching the image of a distant tree or window on a screen.",
              "Mount the convex lens in a lens holder equipped on the optical bench.",
              "Place the object pin (O) in front of the lens at a distance slightly greater than the rough focal length.",
              "Place the image pin (I) on the other side of the lens and move it to locate the real and inverted image.",
              "Adjust the image pin to accurately remove parallax between the tip of the image and the tip of the image pin.",
              "Note the object distance (u) and image distance (v).",
              "Repeat the process for 5 or 6 different object distances.",
              "Calculate focal length f = (uv)/(u+v) and verify it by plotting a u-v graph."
            ], objectives: ["Verify lens formula."] }
      },
      {
          id: 'p10',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Semiconductor Diode', description: 'Study I-V characteristics of p-n junction diode.', difficulty: 'Medium', duration: '30 min', category: 'Electronics',          content: { aim: "To study I-V characteristics of a p-n junction diode.", requirements: ["Diode", "Voltmeter", "Ammeter", "Battery"], theory: "Forward bias: current after 0.7V. Reverse bias: leakage current.", procedure: [
              "For Forward Bias, connect the p-side of the diode to the positive terminal of the battery and the n-side to the negative terminal via a rheostat.",
              "Connect a voltmeter (0-3V) in parallel and a milliammeter (0-50mA) in series with the diode.",
              "Gradually increase the voltage in steps of 0.1V and record the corresponding forward current.",
              "Observe the knee voltage where current starts rising sharply.",
              "For Reverse Bias, connect the p-side to the negative terminal and n-side to the positive terminal of a higher voltage source.",
              "Connect a voltmeter (0-50V) in parallel and a microammeter (0-100uA) in series.",
              "Increase the voltage in steps of 2V and record the steady reverse leakage current.",
              "Plot the Forward and Reverse I-V characteristics on a graph."
            ], objectives: ["Semiconductor behavior."] }
      },
      {
          id: 'p11',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Sonometer — String Frequency', description: 'Verify laws of vibrating strings.', difficulty: 'Medium', duration: '35 min', category: 'Waves',          content: { aim: "To verify laws of vibrating strings.", requirements: ["Sonometer", "Tuning Forks", "Weights"], theory: "A sonometer consists of a hollow wooden box with a stretched metallic wire fixed at one end and passing over movable bridges. Weights can be attached to provide tension.\n\n**Principle:**\nWhen a string vibrates in its fundamental mode, the frequency of vibration is given by:\nf = (1/2L) × √(T/μ)\nwhere L = vibrating length, T = tension in the wire, μ = linear mass density (mass per unit length) of the wire.\n\n**Laws of Vibrating Strings:**\n1. **Law of Length:** f ∝ 1/L (for constant T and μ). So f × L = constant.\n2. **Law of Tension:** f ∝ √T (for constant L and μ).\n3. **Law of Mass:** f ∝ 1/√μ (for constant L and T).\n\n**Resonance:**\nWhen the natural frequency of the wire matches the frequency of an external source (tuning fork), the wire vibrates with maximum amplitude — this is resonance. A paper rider placed on the wire is thrown off at resonance.\n\n**Experimental Verification:**\nBy keeping tension constant and varying the vibrating length to achieve resonance with tuning forks of known frequencies, the law of length (f × L = constant) can be verified.", procedure: [
              "Place the sonometer on the table and stretch the wire over the two movable bridges, passing it over the pulley.",
              "Suspend a known mass (e.g., 1kg or 2kg) from the free end to provide tension (T).",
              "Strike a tuning fork of known frequency and place its stem gently on the sonometer box.",
              "Place a small V-shaped paper rider exactly in the middle of the wire between the bridges.",
              "Adjust the distance between the two bridges until the wire resonates with the tuning fork, causing the paper rider to flutter and fall off.",
              "Measure the resonant length (l) between the two bridges.",
              "Repeat the procedure with tuning forks of 4 to 5 different frequencies while keeping tension constant.",
              "Verify the law of length by checking if frequency * length is a constant."
            ], objectives: ["Standing waves."] }
      },
      {
          id: 'p12',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Resonance Tube — Speed of Sound', description: 'Determine speed of sound in air.', difficulty: 'Medium', duration: '30 min', category: 'Waves',          content: { aim: "To determine speed of sound using resonance tube.", requirements: ["Resonance Tube", "Tuning Forks", "Water"], theory: "A resonance tube is a closed pipe apparatus used to determine the speed of sound in air by utilizing the principle of resonance with a tuning fork of known frequency.\n\n**Principle:**\nWhen a vibrating tuning fork is held near the open end of a tube closed at the other end (by water), standing waves are formed. Resonance occurs when the length of the air column is such that an antinode forms at the open end and a node at the closed end.\n\n**Resonance Conditions:**\n- First resonance: L₁ ≈ λ/4\n- Second resonance: L₂ ≈ 3λ/4\n\n**Speed of Sound Calculation:**\nL₂ - L₁ = λ/2, therefore λ = 2(L₂ - L₁)\nSpeed of sound: v = fλ = 2f(L₂ - L₁)\n\n**End Correction:**\nThe antinode forms slightly outside the open end. e = 0.3d (where d is the internal diameter).\ne = (L₂ - 3L₁)/2\n\n**Factors Affecting Speed of Sound:**\nSpeed increases with temperature: v ∝ √T (absolute temperature). At 0°C, the speed of sound in air is approximately 332 m/s.", procedure: [
              "Set up the resonance tube apparatus and adjust it so it stands vertically.",
              "Fill the tube completely with water using the attached reservoir.",
              "Strike a tuning fork of known frequency (e.g., 512 Hz) against a rubber pad and hold it horizontally just above the open end of the tube.",
              "Gradually lower the water level by lowering the reservoir until a loud resonant sound is heard.",
              "Measure the length of the air column from the water surface to the top of the tube. This is the first resonating length (l1).",
              "Lower the water level further to approximately three times l1 and fine-tune to find the second resonant position.",
              "Measure the second resonating length (l2).",
              "Calculate the speed of sound using v = 2 * frequency * (l2 - l1)."
            ], objectives: ["Understand resonance."] }
      },
      {
          id: 'p13',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Spherometer', description: 'Measure the radius of curvature of a spherical surface.', difficulty: 'Medium', duration: '30 min', category: 'Measurement',          content: { aim: "To determine the radius of curvature of a given spherical surface by a spherometer.", requirements: ["Spherometer", "Spherical surface (watch glass)", "Flat glass plate", "Meter scale"], theory: "A spherometer works on the principle of the micrometer screw. The radius of curvature R of a spherical surface is given by R = (l^2 / 6h) + (h / 2), where l is the mean distance between the two legs of the spherometer and h is the sagittal height.", procedure: [
              "Determine the pitch and least count of the spherometer.",
              "Place the spherometer on the flat glass plate and turn the central screw until its tip just touches the glass surface. Note the initial reading (zero error).",
              "Place the spherometer on the spherical surface (watch glass).",
              "Turn the central screw until its tip lightly touches the spherical surface.",
              "Note the main scale reading and the circular scale division coinciding with the vertical scale.",
              "Calculate the total reading to find the sagittal height (h).",
              "Measure the distance between any two legs of the spherometer (l) by pressing them on paper and measuring the distance between points.",
              "Calculate the radius of curvature R using the formula."
            ], objectives: ["Learn precision measurement techniques.", "Calculate radius of curvature."],
            realWorldApplications: ["Optometry: Determining curvature of lenses.", "Manufacturing: Quality control for curved surfaces."],
            observationTable: { columns: ["Initial Reading (a)", "Final Reading (b)", "Height h = |a-b|"] },
            assignments: [
                { id: 1, question: "Calculate the least count of a spherometer having a pitch of 1mm and 100 circular divisions.", marks: 3 },
                { id: 2, question: "Derive the formula R = (l^2/6h) + (h/2).", marks: 5 }
            ], vivaQuestions: [
                { question: "What is the pitch of a spherometer?", answer: "The linear distance moved by the screw in one complete rotation." },
                { question: "How do you find the least count?", answer: "Pitch / total circular divisions." }
            ], quizQuestions: [
                { id: 1, question: "Which formula calculates the radius of curvature?", options: ["R = l²/2h + h/6", "R = l²/6h + h/2", "R = 6l/h", "R = h²/6l"], correctIndex: 1 }
            ]
          }
      },
      {
          id: 'p14',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Parallelogram Law of Forces', description: 'Verify the law using Gravesand’s apparatus.', difficulty: 'Medium', duration: '30 min', category: 'Mechanics',          content: { aim: "To verify the parallelogram law of vector addition using Gravesand’s apparatus.", requirements: ["Gravesand's apparatus", "Thread", "Weights", "Pulleys", "Mirror strip"], theory: "If two vectors acting at a point are represented in magnitude and direction by the two adjacent sides of a parallelogram, their resultant is represented by the diagonal passing through that point. R = sqrt(P^2 + Q^2 + 2PQ cos theta).", procedure: [
              "Set up the Gravesand's apparatus vertically on a table.",
              "Pass a thread with three strings tied at a knot over the two pulleys.",
              "Suspend known weights P and Q from the two ends over the pulleys, and an unknown weight S from the central string.",
              "Allow the system to come to equilibrium.",
              "Place a white sheet of paper behind the threads and mark their positions using reflections in a mirror strip to avoid parallax.",
              "Draw lines connecting the marked points to represent the directions of the forces.",
              "Select a suitable scale (e.g., 1 cm = 50 g weight) and cut off lengths OA and OB representing forces P and Q respectively.",
              "Complete the parallelogram OACB and measure the diagonal OC.",
              "Verify that the diagonal OC represents the balancing force S in magnitude and opposite direction."
            ], objectives: ["Verify vector addition rules."],
            realWorldApplications: ["Engineering mechanics.", "Bridge construction.", "Architecture."],
            observationTable: { columns: ["Force P", "Force Q", "Force S", "Angle", "Resultant R"] },
            assignments: [
                { id: 1, question: "State the Parallelogram Law of Vector Addition.", marks: 3 }
            ], vivaQuestions: [
                { question: "What is the condition for equilibrium of three concurrent forces?", answer: "Their vector sum must be zero." }
            ], quizQuestions: [
                { id: 1, question: "If P=3N and Q=4N are perpendicular, their resultant is:", options: ["7N", "1N", "5N", "12N"], correctIndex: 2 }
            ]
          }
      },
      {
          id: 'p15',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Hooke\'s Law', description: 'Determine the force constant of a spring.', difficulty: 'Easy', duration: '25 min', category: 'Mechanics',          content: { aim: "To determine the force constant of a helical spring by plotting a load-extension graph.", requirements: ["Helical spring", "Slotted weights", "Scale", "Pointer"], theory: "According to Hooke's Law, within the elastic limit, the extension (x) produced in a body is directly proportional to the applied load (F). F = -kx, where k is the force constant of the spring.", procedure: [
              "Suspend the helical spring vertically from a rigid support.",
              "Attach a pointer to the lower end to read the vertical scale.",
              "Place the hanger (zero load) and note the initial scale reading.",
              "Add slotted weights (e.g., 50g at a time) and wait for the spring to reach equilibrium.",
              "Note the corresponding scale reading for each load during loading.",
              "Remove the weights incrementally and note the readings during unloading.",
              "Calculate the mean extension for each load.",
              "Plot a graph of Load (F) vs Extension (x) to find the force constant k."
            ], objectives: ["Calculate spring constant."],
            realWorldApplications: ["Vehicle suspensions.", "Spring balances.", "Mechanical watches."],
            observationTable: { columns: ["Load (N)", "Loading Ext", "Unloading Ext", "Mean Ext (x)"] },
            assignments: [
                { id: 1, question: "Define elastic limit and Hooke's Law.", marks: 4 }
            ], vivaQuestions: [
                { question: "What is a perfectly elastic body?", answer: "A body that regains its exact original shape and size after removal of deforming forces." }
            ], quizQuestions: [
                { id: 1, question: "The SI unit of spring constant is:", options: ["N/m", "Nm", "kg/m", "m/s"], correctIndex: 0 }
            ]
          }
      },
      {
          id: 'p16',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Potentiometer', description: 'Compare EMF of two primary cells.', difficulty: 'Hard', duration: '40 min', category: 'Electricity',          content: { aim: "To compare the EMF of two given primary cells (Leclanche and Daniel primary cells) using a potentiometer.", requirements: ["Potentiometer", "Battery eliminator", "Leclanche cell", "Daniel cell", "Galvanometer", "Jockey", "Rheostat"], theory: "The principle of a potentiometer states that the potential drop across any length of a uniform wire is directly proportional to its length for a steady current. E1/E2 = L1/L2, where L1 and L2 are balancing lengths for cells E1 and E2 respectively.", procedure: [
              "Connect the primary circuit: positive terminal of the driving battery to the zero end of the potentiometer, negative terminal via key and rheostat to the other end.",
              "Connect the secondary circuit: positive terminals of both primary cells (E1 and E2) to the zero end of the potentiometer.",
              "Connect the negative terminals of both cells to the two terminals of a two-way key.",
              "Connect the common terminal of the two-way key to the galvanometer, and the other end of the galvanometer to the jockey.",
              "Insert the plug for cell E1 and slide the jockey to find the null point (zero deflection in galvanometer). Note balancing length L1.",
              "Insert the plug for cell E2 and find its balancing length L2.",
              "Calculate the ratio E1/E2 = L1/L2.",
              "Repeat the observations by changing the current via the rheostat."
            ], objectives: ["Compare electromotive forces."],
            realWorldApplications: ["Calibration of voltmeters."],
            observationTable: { columns: ["Current value", "Length L1", "Length L2", "Ratio E1/E2"] },
            assignments: [
                { id: 1, question: "Why is a potentiometer preferred over a voltmeter?", marks: 4 }
            ], vivaQuestions: [
                { question: "What is potential gradient?", answer: "Potential drop per unit length of the potentiometer wire." }
            ], quizQuestions: [
                { id: 1, question: "Potentiometer measures accurate EMF because:", options: ["It draws heavy current", "It draws no current at null point", "It has a long wire", "None"], correctIndex: 1 }
            ]
          }
      },
      {
          id: 'p17',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Zener Diode Characteristics', description: 'Study Zener diode in reverse bias.', difficulty: 'Medium', duration: '35 min', category: 'Electronics',          content: { aim: "To draw the I-V characteristic curve of a Zener diode in reverse bias and determine its reverse breakdown voltage.", requirements: ["Zener diode", "DC power supply", "Voltmeter", "Ammeter", "Resistor"], theory: "A Zener diode operates in the reverse breakdown region. Once the reverse voltage reaches the Zener voltage (Vz), current increases sharply while the voltage remains almost constant. It's used as a voltage regulator.", procedure: [
              "Draw the circuit diagram connecting the Zener diode in reverse bias: n-side to the positive terminal and p-side to the negative terminal via a series resistor.",
              "Connect a voltmeter across the Zener diode to measure the reverse voltage.",
              "Connect a microammeter in series with the diode to measure the reverse current.",
              "Gradually increase the reverse voltage from zero in small steps.",
              "Note the corresponding values of reverse voltage and reverse current.",
              "Observe the point where a small voltage increase causes a large current increase (Zener breakdown).",
              "Record the Zener voltage (Vz).",
              "Plot a graph of reverse voltage vs reverse current."
            ], objectives: ["Understand voltage regulation."],
            realWorldApplications: ["Voltage regulators in power supplies."],
            observationTable: { columns: ["Reverse Voltage (V)", "Reverse Current (uA)"] },
            assignments: [
                { id: 1, question: "Explain the mechanism of Zener breakdown.", marks: 5 }
            ], vivaQuestions: [
                { question: "What is a Zener diode?", answer: "A specially designed, heavily doped p-n junction diode." }
            ], quizQuestions: [
                { id: 1, question: "A Zener diode is always used in:", options: ["Forward bias", "Reverse bias", "Zero bias", "AC current only"], correctIndex: 1 }
            ]
          }
      },
        {
                "id": "p18",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Physical Balance",
                "description": "Measure the gravitational mass of an object.",
                "difficulty": "Medium",
                "duration": "30 min",
                "category": "Mechanics",
                "content": {
                        "aim": "To find the mass of a given body using a physical balance.",
                        "requirements": [
                                "Physical Balance",
                                "Weight Box",
                                "Body of unknown mass"
                        ],
                        "theory": "A physical balance works on the principle of moments. At equilibrium, the anticlockwise moment is equal to the clockwise moment.",
                        "procedure": [
                                "Adjust the balance so that the plumb line is precisely aligned with the needle.",
                                "Ensure the pointer swings equally on both sides of the zero mark on the scale when the beam is raised.",
                                "Place the object of unknown mass on the left pan.",
                                "Place standard weights from the weight box on the right pan.",
                                "Adjust the weights until the pointer oscillates equally on both sides of the zero mark.",
                                "Record the weights to determine the exact mass."
                        ],
                        "objectives": [
                                "Accuracy in mass measurement.",
                                "Understanding the principle of moments."
                        ]
                }
        },
        {
                "id": "p19",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Traveling Microscope",
                "description": "Find refractive index of a glass slab.",
                "difficulty": "Medium",
                "duration": "40 min",
                "category": "Optics",
                "content": {
                        "aim": "To find the refractive index of a glass slab using a traveling microscope.",
                        "requirements": [
                                "Traveling Microscope",
                                "Glass Slab",
                                "Lycopodium Powder",
                                "Paper with a cross mark"
                        ],
                        "theory": "Refractive index = Real thickness / Apparent thickness.",
                        "procedure": [
                                "Place a piece of paper with an ink cross on the base of the microscope.",
                                "Focus the microscope on the cross and take the reading (R1).",
                                "Place the glass slab over the cross. The cross appears raised due to refraction.",
                                "Raise the microscope to focus on the image of the cross and take the reading (R2).",
                                "Sprinkle some lycopodium powder on the top surface of the glass slab.",
                                "Focus the microscope on the powder particles and take the third reading (R3).",
                                "Calculate the real thickness = R3 - R1.",
                                "Calculate the apparent thickness = R3 - R2.",
                                "Determine the refractive index = (R3 - R1) / (R3 - R2)."
                        ],
                        "objectives": [
                                "Measure real and apparent depth.",
                                "Calculate refractive index."
                        ]
                }
        },
        {
                "id": "p20",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Surface Tension",
                "description": "Determine surface tension of water using capillary rise method.",
                "difficulty": "Hard",
                "duration": "45 min",
                "category": "Fluids",
                "content": {
                        "aim": "To determine the surface tension of water by capillary rise method.",
                        "requirements": [
                                "Capillary tubes",
                                "Traveling Microscope",
                                "Beaker with water",
                                "Stand"
                        ],
                        "theory": "Surface tension T = (r * h * rho * g) / 2, where r is the radius of the capillary, h is the height of water column, rho is density, and g is gravity.",
                        "procedure": [
                                "Clean the capillary tube and fix it vertically in a beaker containing water.",
                                "Focus the traveling microscope on the meniscus of the water in the capillary tube.",
                                "Record the reading of the vertical scale.",
                                "Carefully focus the microscope on the tip of a pin adjusted to just touch the water surface in the beaker to find the liquid level in the beaker.",
                                "Calculate the capillary rise (h).",
                                "Cut the capillary tube at the water mark and focus the microscope to measure its inner diameter.",
                                "Calculate the radius (r) of the capillary tube.",
                                "Compute the surface tension."
                        ],
                        "objectives": [
                                "Understand cohesive forces.",
                                "Measure capillary action."
                        ]
                }
        },
        {
                "id": "p21",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Newton's Law of Cooling",
                "description": "Study the cooling of hot water with time.",
                "difficulty": "Easy",
                "duration": "35 min",
                "category": "Thermodynamics",
                "content": {
                        "aim": "To study the relationship between the temperature of a hot body and time by plotting a cooling curve.",
                        "requirements": [
                                "Copper calorimeter",
                                "Thermometer",
                                "Hot water",
                                "Stopwatch",
                                "Stirrer"
                        ],
                        "theory": "The rate of loss of heat of a body is directly proportional to the difference in temperature between the body and its surroundings.",
                        "procedure": [
                                "Fill the calorimeter up to two-thirds with hot water (around 80°C).",
                                "Insert a thermometer and wait until the temperature stabilizes to record the initial temperature.",
                                "Start the stopwatch and record the temperature every minute while stirring the water gently.",
                                "Continue taking readings until the temperature of the water approaches the room temperature.",
                                "Record the room temperature as the surroundings' temperature.",
                                "Plot a graph of temperature against time (cooling curve) and log(T - Ts) against time."
                        ],
                        "objectives": [
                                "Plot a cooling curve.",
                                "Verify exponential temperature decay."
                        ]
                }
        },
        {
                "id": "p22",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Internal Resistance using Potentiometer",
                "description": "Determine internal resistance of a primary cell.",
                "difficulty": "Hard",
                "duration": "40 min",
                "category": "Electricity",
                "content": {
                        "aim": "To determine the internal resistance of a primary cell (Leclanché/Daniel cell) using a potentiometer.",
                        "requirements": [
                                "Potentiometer",
                                "Primary Cell",
                                "Resistance Box",
                                "Galvanometer",
                                "Jockey",
                                "Battery Eliminator"
                        ],
                        "theory": "Internal resistance r = R * (L1 - L2) / L2, where L1 is the balancing length without shunt, L2 is the balancing length with shunt R.",
                        "procedure": [
                                "Set up the primary circuit with a driving battery, key, and rheostat across the potentiometer wire.",
                                "Connect the primary cell in the secondary circuit through a galvanometer and a jockey.",
                                "Find the balancing length L1 with the cell in open circuit.",
                                "Connect a known resistance (R) in parallel with the primary cell (closed circuit).",
                                "Find the new balancing length L2.",
                                "Calculate the internal resistance using the formula.",
                                "Repeat for different values of shunt resistance R."
                        ],
                        "objectives": [
                                "Measure internal resistance.",
                                "Understand potential drop."
                        ]
                }
        },
        {
                "id": "p23",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Galvanometer to Ammeter conversion",
                "description": "Convert galvanometer to ammeter.",
                "difficulty": "Hard",
                "duration": "40 min",
                "category": "Electricity",
                "content": {
                        "aim": "To convert a given galvanometer into an ammeter of desired range and to verify the same.",
                        "requirements": [
                                "Galvanometer",
                                "Resistance Box",
                                "Shunt wire",
                                "Ammeter",
                                "Battery"
                        ],
                        "theory": "A galvanometer is converted into an ammeter by connecting a suitable low resistance (shunt) across it. Shunt S = (Ig * G) / (I - Ig).",
                        "procedure": [
                                "Determine the internal resistance (G) and figure of merit of the galvanometer.",
                                "Calculate the required shunt resistance (S) for the desired ammeter range (I).",
                                "Cut the precise length of the specific wire required to create the exact shunt resistance.",
                                "Connect the calculated shunt resistance in parallel to the galvanometer.",
                                "Connect the newly modified galvanometer (now an ammeter) in series with a standard ammeter, rheostat, and battery.",
                                "Vary the current and note the readings on both the standard ammeter and converted ammeter to verify accuracy."
                        ],
                        "objectives": [
                                "Measure and compute shunt resistance.",
                                "Calibrate ammeters."
                        ]
                }
        },
        {
                "id": "p24",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Galvanometer to Voltmeter conversion",
                "description": "Convert galvanometer to voltmeter.",
                "difficulty": "Medium",
                "duration": "35 min",
                "category": "Electricity",
                "content": {
                        "aim": "To convert a given galvanometer into a voltmeter of desired range and verify.",
                        "requirements": [
                                "Galvanometer",
                                "High Resistance Box",
                                "Voltmeter",
                                "Battery"
                        ],
                        "theory": "A galvanometer is converted into a voltmeter by connecting a high resistance in series with it. Resistance R = (V / Ig) - G.",
                        "procedure": [
                                "Determine the internal resistance (G) and the figure of merit of the galvanometer.",
                                "Calculate the required high series resistance (R) for the given potential difference range.",
                                "Take out the calculated resistance (R) from a high resistance box connected in series with the galvanometer.",
                                "Connect the converted galvanometer in parallel across a component, along with a standard voltmeter.",
                                "Vary the potential difference using a rheostat and compare readings to verify the conversion."
                        ],
                        "objectives": [
                                "Calculate series resistance requirement.",
                                "Understand voltmeter characteristics."
                        ]
                }
        },
        {
                "id": "p25",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Refractive Index of Water",
                "description": "Find refractive index of water using concave mirror or lens.",
                "difficulty": "Medium",
                "duration": "30 min",
                "category": "Optics",
                "content": {
                        "aim": "To determine the refractive index of water using a transparent liquid and a convex lens with a plane mirror.",
                        "requirements": [
                                "Convex Lens",
                                "Plane Mirror",
                                "Water",
                                "Retort Stand",
                                "Optical Needle"
                        ],
                        "theory": "The refractive index of a liquid can be determined by finding the focal lengths of the combination of a convex glass lens and a plano-concave liquid lens. n = 2 - (F / f), where F is combined focal length and f is the glass lens focal length.",
                        "procedure": [
                                "Place the plane mirror on a horizontal surface and rest the convex lens on it.",
                                "Clamp the optical needle horizontally on a retort stand directly above the lens.",
                                "Move the needle upward or downward until its tip coincides with the tip of its inverted image without parallax.",
                                "Measure the distance from the tip of the needle to the top of the lens to find the focal length (f) of the convex lens without liquid.",
                                "Place a few drops of water on the plane mirror, press the convex lens onto the drops safely to form a thin liquid lens.",
                                "Find the balance position again with the needle to find the new combined focal length (F) representing the glass-water combination.",
                                "Calculate the refractive index of the water using the derived formula."
                        ],
                        "objectives": [
                                "Measure combined lens focal length.",
                                "Demonstrate liquid refractive properties."
                        ]
                }
        },
        {
                "id": "p26",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Frequency of AC Mains",
                "description": "Use a sonometer to find the AC mains frequency.",
                "difficulty": "Hard",
                "duration": "35 min",
                "category": "Electromagnetism",
                "content": {
                        "aim": "To determine the frequency of alternating current (AC) mains using a sonometer and electromagnet.",
                        "requirements": [
                                "Sonometer",
                                "Electromagnet",
                                "Step-down Transformer",
                                "Weights"
                        ],
                        "theory": "When a sonometer wire under tension is placed in the magnetic field of an electromagnet driven by an AC current, it vibrates with a frequency equal to twice the frequency of AC mains. Natural frequency f = (1/2L) * sqrt(T/m) = 2 * AC_frequency.",
                        "procedure": [
                                "Pass the sonometer wire over the pulleys and hang suitable weights to create a known tension.",
                                "Place the electromagnet connected to a step-down transformer near the middle of the wire without touching it.",
                                "Switch on the AC supply for the electromagnet.",
                                "Place a small paper rider exactly midway between the bridges.",
                                "Slide the bridges precisely until resonance is achieved and the paper rider vibrates violently and is thrown off.",
                                "Measure the resonant length of the wire between the bridges.",
                                "Observe variations with different tensions and calculate the AC frequency using the formula."
                        ],
                        "objectives": [
                                "Determine electromagnetic resonance.",
                                "Evaluate standing waves in a string."
                        ]
                }
        }

,
        {
                "id": "p18",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Physical Balance",
                "description": "Measure the gravitational mass of an object.",
                "difficulty": "Medium",
                "duration": "30 min",
                "category": "Mechanics",
                "content": {
                        "aim": "To find the mass of a given body using a physical balance.",
                        "requirements": [
                                "Physical Balance",
                                "Weight Box",
                                "Body of unknown mass"
                        ],
                        "theory": "A physical balance works on the principle of moments. At equilibrium, the anticlockwise moment is equal to the clockwise moment.",
                        "procedure": [
                                "Adjust the balance so that the plumb line is precisely aligned with the needle.",
                                "Ensure the pointer swings equally on both sides of the zero mark on the scale when the beam is raised.",
                                "Place the object of unknown mass on the left pan.",
                                "Place standard weights from the weight box on the right pan.",
                                "Adjust the weights until the pointer oscillates equally on both sides of the zero mark.",
                                "Record the weights to determine the exact mass."
                        ],
                        "objectives": [
                                "Accuracy in mass measurement.",
                                "Understanding the principle of moments."
                        ]
                }
        },
        {
                "id": "p19",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Traveling Microscope",
                "description": "Find refractive index of a glass slab.",
                "difficulty": "Medium",
                "duration": "40 min",
                "category": "Optics",
                "content": {
                        "aim": "To find the refractive index of a glass slab using a traveling microscope.",
                        "requirements": [
                                "Traveling Microscope",
                                "Glass Slab",
                                "Lycopodium Powder",
                                "Paper with a cross mark"
                        ],
                        "theory": "Refractive index = Real thickness / Apparent thickness.",
                        "procedure": [
                                "Place a piece of paper with an ink cross on the base of the microscope.",
                                "Focus the microscope on the cross and take the reading (R1).",
                                "Place the glass slab over the cross. The cross appears raised due to refraction.",
                                "Raise the microscope to focus on the image of the cross and take the reading (R2).",
                                "Sprinkle some lycopodium powder on the top surface of the glass slab.",
                                "Focus the microscope on the powder particles and take the third reading (R3).",
                                "Calculate the real thickness = R3 - R1.",
                                "Calculate the apparent thickness = R3 - R2.",
                                "Determine the refractive index = (R3 - R1) / (R3 - R2)."
                        ],
                        "objectives": [
                                "Measure real and apparent depth.",
                                "Calculate refractive index."
                        ]
                }
        },
        {
                "id": "p20",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Surface Tension",
                "description": "Determine surface tension of water using capillary rise method.",
                "difficulty": "Hard",
                "duration": "45 min",
                "category": "Fluids",
                "content": {
                        "aim": "To determine the surface tension of water by capillary rise method.",
                        "requirements": [
                                "Capillary tubes",
                                "Traveling Microscope",
                                "Beaker with water",
                                "Stand"
                        ],
                        "theory": "Surface tension T = (r * h * rho * g) / 2, where r is the radius of the capillary, h is the height of water column, rho is density, and g is gravity.",
                        "procedure": [
                                "Clean the capillary tube and fix it vertically in a beaker containing water.",
                                "Focus the traveling microscope on the meniscus of the water in the capillary tube.",
                                "Record the reading of the vertical scale.",
                                "Carefully focus the microscope on the tip of a pin adjusted to just touch the water surface in the beaker to find the liquid level in the beaker.",
                                "Calculate the capillary rise (h).",
                                "Cut the capillary tube at the water mark and focus the microscope to measure its inner diameter.",
                                "Calculate the radius (r) of the capillary tube.",
                                "Compute the surface tension."
                        ],
                        "objectives": [
                                "Understand cohesive forces.",
                                "Measure capillary action."
                        ]
                }
        },
        {
                "id": "p21",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Newton's Law of Cooling",
                "description": "Study the cooling of hot water with time.",
                "difficulty": "Easy",
                "duration": "35 min",
                "category": "Thermodynamics",
                "content": {
                        "aim": "To study the relationship between the temperature of a hot body and time by plotting a cooling curve.",
                        "requirements": [
                                "Copper calorimeter",
                                "Thermometer",
                                "Hot water",
                                "Stopwatch",
                                "Stirrer"
                        ],
                        "theory": "The rate of loss of heat of a body is directly proportional to the difference in temperature between the body and its surroundings.",
                        "procedure": [
                                "Fill the calorimeter up to two-thirds with hot water (around 80°C).",
                                "Insert a thermometer and wait until the temperature stabilizes to record the initial temperature.",
                                "Start the stopwatch and record the temperature every minute while stirring the water gently.",
                                "Continue taking readings until the temperature of the water approaches the room temperature.",
                                "Record the room temperature as the surroundings' temperature.",
                                "Plot a graph of temperature against time (cooling curve) and log(T - Ts) against time."
                        ],
                        "objectives": [
                                "Plot a cooling curve.",
                                "Verify exponential temperature decay."
                        ]
                }
        },
        {
                "id": "p22",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Internal Resistance using Potentiometer",
                "description": "Determine internal resistance of a primary cell.",
                "difficulty": "Hard",
                "duration": "40 min",
                "category": "Electricity",
                "content": {
                        "aim": "To determine the internal resistance of a primary cell (Leclanché/Daniel cell) using a potentiometer.",
                        "requirements": [
                                "Potentiometer",
                                "Primary Cell",
                                "Resistance Box",
                                "Galvanometer",
                                "Jockey",
                                "Battery Eliminator"
                        ],
                        "theory": "Internal resistance r = R * (L1 - L2) / L2, where L1 is the balancing length without shunt, L2 is the balancing length with shunt R.",
                        "procedure": [
                                "Set up the primary circuit with a driving battery, key, and rheostat across the potentiometer wire.",
                                "Connect the primary cell in the secondary circuit through a galvanometer and a jockey.",
                                "Find the balancing length L1 with the cell in open circuit.",
                                "Connect a known resistance (R) in parallel with the primary cell (closed circuit).",
                                "Find the new balancing length L2.",
                                "Calculate the internal resistance using the formula.",
                                "Repeat for different values of shunt resistance R."
                        ],
                        "objectives": [
                                "Measure internal resistance.",
                                "Understand potential drop."
                        ]
                }
        },
        {
                "id": "p23",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Galvanometer to Ammeter conversion",
                "description": "Convert galvanometer to ammeter.",
                "difficulty": "Hard",
                "duration": "40 min",
                "category": "Electricity",
                "content": {
                        "aim": "To convert a given galvanometer into an ammeter of desired range and to verify the same.",
                        "requirements": [
                                "Galvanometer",
                                "Resistance Box",
                                "Shunt wire",
                                "Ammeter",
                                "Battery"
                        ],
                        "theory": "A galvanometer is converted into an ammeter by connecting a suitable low resistance (shunt) across it. Shunt S = (Ig * G) / (I - Ig).",
                        "procedure": [
                                "Determine the internal resistance (G) and figure of merit of the galvanometer.",
                                "Calculate the required shunt resistance (S) for the desired ammeter range (I).",
                                "Cut the precise length of the specific wire required to create the exact shunt resistance.",
                                "Connect the calculated shunt resistance in parallel to the galvanometer.",
                                "Connect the newly modified galvanometer (now an ammeter) in series with a standard ammeter, rheostat, and battery.",
                                "Vary the current and note the readings on both the standard ammeter and converted ammeter to verify accuracy."
                        ],
                        "objectives": [
                                "Measure and compute shunt resistance.",
                                "Calibrate ammeters."
                        ]
                }
        },
        {
                "id": "p24",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Galvanometer to Voltmeter conversion",
                "description": "Convert galvanometer to voltmeter.",
                "difficulty": "Medium",
                "duration": "35 min",
                "category": "Electricity",
                "content": {
                        "aim": "To convert a given galvanometer into a voltmeter of desired range and verify.",
                        "requirements": [
                                "Galvanometer",
                                "High Resistance Box",
                                "Voltmeter",
                                "Battery"
                        ],
                        "theory": "A galvanometer is converted into a voltmeter by connecting a high resistance in series with it. Resistance R = (V / Ig) - G.",
                        "procedure": [
                                "Determine the internal resistance (G) and the figure of merit of the galvanometer.",
                                "Calculate the required high series resistance (R) for the given potential difference range.",
                                "Take out the calculated resistance (R) from a high resistance box connected in series with the galvanometer.",
                                "Connect the converted galvanometer in parallel across a component, along with a standard voltmeter.",
                                "Vary the potential difference using a rheostat and compare readings to verify the conversion."
                        ],
                        "objectives": [
                                "Calculate series resistance requirement.",
                                "Understand voltmeter characteristics."
                        ]
                }
        },
        {
                "id": "p25",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Refractive Index of Water",
                "description": "Find refractive index of water using concave mirror or lens.",
                "difficulty": "Medium",
                "duration": "30 min",
                "category": "Optics",
                "content": {
                        "aim": "To determine the refractive index of water using a transparent liquid and a convex lens with a plane mirror.",
                        "requirements": [
                                "Convex Lens",
                                "Plane Mirror",
                                "Water",
                                "Retort Stand",
                                "Optical Needle"
                        ],
                        "theory": "The refractive index of a liquid can be determined by finding the focal lengths of the combination of a convex glass lens and a plano-concave liquid lens. n = 2 - (F / f), where F is combined focal length and f is the glass lens focal length.",
                        "procedure": [
                                "Place the plane mirror on a horizontal surface and rest the convex lens on it.",
                                "Clamp the optical needle horizontally on a retort stand directly above the lens.",
                                "Move the needle upward or downward until its tip coincides with the tip of its inverted image without parallax.",
                                "Measure the distance from the tip of the needle to the top of the lens to find the focal length (f) of the convex lens without liquid.",
                                "Place a few drops of water on the plane mirror, press the convex lens onto the drops safely to form a thin liquid lens.",
                                "Find the balance position again with the needle to find the new combined focal length (F) representing the glass-water combination.",
                                "Calculate the refractive index of the water using the derived formula."
                        ],
                        "objectives": [
                                "Measure combined lens focal length.",
                                "Demonstrate liquid refractive properties."
                        ]
                }
        },
        {
                "id": "p26",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Frequency of AC Mains",
                "description": "Use a sonometer to find the AC mains frequency.",
                "difficulty": "Hard",
                "duration": "35 min",
                "category": "Electromagnetism",
                "content": {
                        "aim": "To determine the frequency of alternating current (AC) mains using a sonometer and electromagnet.",
                        "requirements": [
                                "Sonometer",
                                "Electromagnet",
                                "Step-down Transformer",
                                "Weights"
                        ],
                        "theory": "When a sonometer wire under tension is placed in the magnetic field of an electromagnet driven by an AC current, it vibrates with a frequency equal to twice the frequency of AC mains. Natural frequency f = (1/2L) * sqrt(T/m) = 2 * AC_frequency.",
                        "procedure": [
                                "Pass the sonometer wire over the pulleys and hang suitable weights to create a known tension.",
                                "Place the electromagnet connected to a step-down transformer near the middle of the wire without touching it.",
                                "Switch on the AC supply for the electromagnet.",
                                "Place a small paper rider exactly midway between the bridges.",
                                "Slide the bridges precisely until resonance is achieved and the paper rider vibrates violently and is thrown off.",
                                "Measure the resonant length of the wire between the bridges.",
                                "Observe variations with different tensions and calculate the AC frequency using the formula."
                        ],
                        "objectives": [
                                "Determine electromagnetic resonance.",
                                "Evaluate standing waves in a string."
                        ]
                }
        }


    ]
  },
  {
    id: 'chemistry',
    name: SubjectType.CHEMISTRY,
    icon: FlaskConical,
    color: 'emerald',
    hex: '#10b981',
    description: 'Mix chemicals safely, visualize molecular structures, and perform titrations.',
    labs: [
      { 
        id: 'c1',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], 
        title: 'Acid-Base Titration', 
        description: 'Determine concentration of HCl using NaOH.', 
        difficulty: 'Medium', 
        duration: '45 min', 
        category: 'Physical Chem',
        content: {
          videoId: "sFpFcpRHu0k",
          aim: "To determine molarity of HCl using standard NaOH solution.",
          requirements: ["Burette", "Pipette", "Conical Flask", "Phenolphthalein"],
          theory: "Titration (volumetric analysis) is a quantitative chemical analysis method. In an acid-base titration, a solution of known concentration (titrant, typically in burette) is added to a solution of unknown concentration (analyte, in flask) until the reaction is complete.\n\n**Reaction Principle:**\nThe reaction between a strong acid (HCl) and a strong base (NaOH) is a neutralization reaction:\nHCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)\nIonic Eq: H⁺(aq) + OH⁻(aq) → H₂O(l)\n\n**Equivalence Point vs Endpoint:**\n- **Equivalence Point:** The theoretical point where moles of H⁺ equals moles of OH⁻.\n- **Endpoint:** The experimental point where the indicator changes color, approximating the equivalence point.\n\n**Indicators:**\nPhenolphthalein is used for Strong Acid vs Strong Base titrations. It functions in the pH range 8.2–10.0.\n- In Acid (HCl): Colorless\n- In Base (Excess NaOH): Pink\n\n**Molarity Equation:**\nUsing the law of equivalence: M₁V₁/n₁ = M₂V₂/n₂\nFor HCl and NaOH, stoichiometry is 1:1, so:\nM(acid) × V(acid) = M(base) × V(base)",
          procedure: [
              "Wash, rinse and fill the burette with the given titrant (e.g., standard NaOH solution) up to the zero mark.",
              "Pipette out exactly 20 mL of the given analyte (e.g., given HCl solution) into a clean conical flask.",
              "Add 1-2 drops of a suitable indicator (e.g., phenolphthalein) to the conical flask. The solution will remain colorless.",
              "Place the flask under the burette on a white tile and titrate slowly while swirling the flask gently.",
              "Stop adding titrant when a permanent pale pink color appears. This is the end-point.",
              "Note the final burette reading.",
              "Repeat the titration until concordant readings are obtained."
            ],
          objectives: ["Understanding neutralization."],
          realWorldApplications: [
              "Pharmaceuticals: Determining the purity of aspirin and other drugs.",
              "Food Industry: Measuring the acidity of cheese, wine, or fruit juices to ensure quality.",
              "Water Treatment: Testing water pH and hardness.",
              "Medical: Blood analysis labs use titration principles for various metabolic tests."
          ],
          observationTable: {
              columns: ["Initial Reading (mL)", "Final Reading (mL)", "Vol Used (mL)", "Concordant"]
          },
          assignments: [
            { id: 1, question: "Write the balanced chemical equation for the reaction between Oxalic Acid and KMnO4. Why is this a redox titration?", marks: 5 },
            { id: 2, question: "Calculate the molarity of NaOH if 20ml of 0.1M HCl is required to neutralize 25ml of NaOH.", marks: 5 },
            { id: 3, question: "Why is heating required for Oxalic Acid titration but not for Mohr's Salt?", marks: 4 },
            { id: 4, question: "Explain the selection of indicators for Strong Acid vs Weak Base titration. Why is Methyl Orange preferred over Phenolphthalein?", marks: 4 },
            { id: 5, question: "Define 'Primary Standard'. Give two examples of primary standard substances.", marks: 2 }
          ],
          vivaQuestions: [
              { question: "What is the endpoint?", answer: "The point where the indicator changes color." },
              { question: "Why is phenolphthalein used?", answer: "It is suitable for strong acid-strong base titrations (pH range 8-10)." },
              { question: "How do you read the meniscus?", answer: "Read the lower meniscus for colorless liquids." },
              { question: "What is a standard solution?", answer: "A solution whose concentration is accurately known." },
              { question: "What is the indicator color in acid?", answer: "Colorless." },
              { question: "What is the indicator color in base?", answer: "Pink." },
              { question: "Why rinse the burette with NaOH?", answer: "To prevent dilution of the solution by residual water." },
              { question: "What is Molarity?", answer: "Moles of solute per liter of solution." },
              { question: "Formula for dilution?", answer: "M1V1 = M2V2." },
              { question: "What is a discordance reading?", answer: "Readings that do not agree closely; we take concordant readings." }
          ],
          quizQuestions: [
              { id: 1, question: "Color of Phenolphthalein in acid is:", options: ["Pink", "Colorless", "Red", "Yellow"], correctIndex: 1 },
              { id: 2, question: "Burette is washed with:", options: ["Water only", "Acid", "Solution to be filled", "Alcohol"], correctIndex: 2 },
              { id: 3, question: "Reaction between Acid and Base is called:", options: ["Oxidation", "Reduction", "Neutralization", "Precipitation"], correctIndex: 2 },
              { id: 4, question: "pH at endpoint of strong acid-strong base titration is approx:", options: ["3", "7", "11", "14"], correctIndex: 1 },
              { id: 5, question: "Methyl Orange is red in:", options: ["Acid", "Base", "Neutral", "None"], correctIndex: 0 },
              { id: 6, question: "The apparatus used to deliver a fixed volume of liquid is:", options: ["Beaker", "Pipette", "Flask", "Cylinder"], correctIndex: 1 },
              { id: 7, question: "Molarity is temperature:", options: ["Dependent", "Independent", "Constant", "Unrelated"], correctIndex: 0 },
              { id: 8, question: "Concordant readings differ by not more than:", options: ["1 ml", "0.1 ml", "0.5 ml", "2 ml"], correctIndex: 1 },
              { id: 9, question: "Oxalic acid is a:", options: ["Primary standard", "Secondary standard", "Strong acid", "Indicator"], correctIndex: 0 },
              { id: 10, question: "NaOH is:", options: ["Hygroscopic", "Deliquescent", "Efflorescent", "Inert"], correctIndex: 1 }
          ]
        }
      },
      { 
          id: 'c2',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], 
          title: 'Salt Analysis', 
          description: 'Identify the cation in a given salt.', 
          difficulty: 'Hard', 
          duration: '60 min', 
          category: 'Inorganic Chem',
          content: {
              videoId: "7z9_kK0a6E0",
              aim: "To identify the basic radical (cation) in the given salt.",
              requirements: ["Test tubes", "Reagents (NaOH, NH4OH, etc)", "Salt sample"],
              theory: "Systematic Qualitative Analysis is a methodical approach to identify the cation (basic radical) and anion (acid radical) present in a given inorganic salt sample.\n\n**Preliminary Tests:**\n- **Color:** Copper salts are blue/green, iron(III) salts are yellow/brown, cobalt salts are pink.\n- **Smell:** Ammonium salts release NH₃; acetates release vinegar smell on heating with H₂SO₄.\n- **Flame Test:** Na⁺ = golden yellow, K⁺ = violet, Ca²⁺ = brick red, Ba²⁺ = apple green, Cu²⁺ = green/blue.\n\n**Anion Analysis:**\n- Group 1 (Dilute H₂SO₄): CO₃²⁻, S²⁻, SO₃²⁻, NO₂⁻ — identified by evolved gases.\n- Group 2 (Conc. H₂SO₄): Cl⁻, Br⁻, I⁻, NO₃⁻, C₂O₄²⁻\n- Group 3 (Special reagents): SO₄²⁻, PO₄³⁻\n\n**Cation Analysis (Group Separation):**\n- Group 0: NH₄⁺\n- Group 1 (dil. HCl): Pb²⁺, Ag⁺\n- Group 2 (H₂S in acidic medium): Cu²⁺, Pb²⁺\n- Group 3 (NH₄OH + NH₄Cl): Fe³⁺, Al³⁺, Cr³⁺\n- Group 4 (H₂S in alkaline medium): Zn²⁺, Mn²⁺, Ni²⁺, Co²⁺\n- Group 5 ((NH₄)₂CO₃): Ca²⁺, Ba²⁺, Sr²⁺\n- Group 6: Mg²⁺, Na⁺, K⁺",
              procedure: [
              "Perform preliminary tests on the given salt: note its color, smell, and solubility in water.",
              "Perform the dry heating test and flame test to get hints of the cation.",
              "Treat a pinch of the salt with dilute H2SO4 and observe the evolved gas to test for dilute acid group anions (Carbonate, Sulphide, Sulphite).",
              "Treat the salt with concentrated H2SO4 to test for concentrated acid group anions (Chloride, Bromide, Nitrate).",
              "Perform specific confirmatory tests for the identified anion using the salt extract.",
              "Prepare the original solution (OS) of the salt in water or dilute HCl.",
              "Systematically add group reagents (dil. HCl, H2S gas, NH4OH, etc.) to the OS to precipitate and identify the cation group.",
              "Perform the specific confirmatory test for the identified cation."
            ],
              objectives: ["Systematic qualitative analysis."],
              realWorldApplications: ["Forensics", "Environmental Science", "Geology", "Quality Control"],
              observationTable: { columns: ["Experiment", "Observation", "Inference"] },
              assignments: [
                  { id: 1, question: "Provide the group separation table for cations from Group 0 to Group 6 with their group reagents.", marks: 5 },
                  { id: 2, question: "Write the chemistry of the 'Brown Ring Test' for nitrate ions with relevant chemical equations.", marks: 5 },
                  { id: 3, question: "Explain the Common Ion Effect. How is it utilized in the precipitation of Group 2 and Group 4 cations?", marks: 4 },
                  { id: 4, question: "Why is Conc. HNO3 added before precipitation of Group 3 cations?", marks: 3 },
                  { id: 5, question: "Describe the flame test colors for Calcium, Barium, and Strontium.", marks: 3 }
              ],
              vivaQuestions: [
                  { question: "What is the Group 1 reagent?", answer: "Dilute HCl." },
                  { question: "What is the smell of Ammonia gas?", answer: "Pungent smell." },
                  { question: "Why is HCl added before H2S in Group 2?", answer: "To suppress ionization of H2S (Common Ion Effect)." },
                  { question: "Color of Copper sulphate?", answer: "Blue." },
                  { question: "Confirmatory test for Lead?", answer: "Golden yellow ppt with Potassium Iodide." },
                  { question: "Group 3 reagent?", answer: "NH4OH in presence of NH4Cl." },
                  { question: "What is the brown ring test used for?", answer: "Nitrate ion (NO3-)." },
                  { question: "What is Aqua Regia?", answer: "3:1 mixture of Conc HCl and Conc HNO3." },
                  { question: "Flame color of Barium?", answer: "Apple Green." },
                  { question: "Group 5 reagent?", answer: "(NH4)2CO3 in presence of NH4OH." }
              ],
              quizQuestions: [
                  { id: 1, question: "Lead (Pb++) belongs to which group?", options: ["Group 1", "Group 2", "Both 1 & 2", "Group 3"], correctIndex: 2 },
                  { id: 2, question: "Brown ring test is for:", options: ["Chloride", "Nitrate", "Sulphate", "Carbonate"], correctIndex: 1 },
                  { id: 3, question: "Flame color of Calcium is:", options: ["Golden Yellow", "Brick Red", "Apple Green", "Crimson"], correctIndex: 1 },
                  { id: 4, question: "Group 0 cation is:", options: ["Pb++", "Cu++", "NH4+", "Mg++"], correctIndex: 2 },
                  { id: 5, question: "Nessler's reagent detects:", options: ["Ammonium", "Sodium", "Potassium", "Iron"], correctIndex: 0 },
                  { id: 6, question: "Blue vitriol is:", options: ["FeSO4", "CuSO4.5H2O", "ZnSO4", "MgSO4"], correctIndex: 1 },
                  { id: 7, question: "H2S gas has smell of:", options: ["Rotten eggs", "Burning sulphur", "Fruity", "Pungent"], correctIndex: 0 },
                  { id: 8, question: "Iron (Fe3+) gives what color ppt with NH4OH?", options: ["White", "Reddish Brown", "Green", "Blue"], correctIndex: 1 },
                  { id: 9, question: "Common ion effect is used in:", options: ["Group 2 & 3", "Group 0", "Group 1", "None"], correctIndex: 0 },
                  { id: 10, question: "Group 6 cation is:", options: ["Mg++", "Ca++", "Ba++", "Sr++"], correctIndex: 0 }
              ]
          } 
      },
      {
          id: 'c3',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'],
          title: 'pH Determination',
          description: 'Find pH of various fruit juices.',
          difficulty: 'Easy',
          duration: '20 min',
          category: 'Physical Chem',
          content: {
              videoId: "ckPHbHlG9MQ",
              aim: "To determine the pH of vegetable/fruit juices using pH paper.",
              requirements: ["pH Paper", "Standard pH scale", "Juice samples"],
              theory: "The pH scale is a logarithmic scale used to express the hydrogen ion concentration [H⁺] of a solution.\n\npH = -log₁₀[H⁺] (introduced by Sørensen in 1909).\n\n**pH Scale Range:**\n- pH 0 to 7: Acidic\n- pH 7: Neutral (pure water at 25°C, [H⁺] = 10⁻⁷ M)\n- pH 7 to 14: Basic/Alkaline\n\n**Ionic Product of Water:** Kw = [H⁺][OH⁻] = 10⁻¹⁴ at 25°C. Therefore pH + pOH = 14.\n\n**Measurement Methods:**\n1. pH Paper/Universal Indicator: color comparison with standard chart.\n2. Digital pH Meter: precise values using a glass electrode.\n\n**Indicators:**\n- Litmus: Red in acid, blue in base.\n- Phenolphthalein: Colorless in acid, pink in base (pH 8.2-10).\n- Methyl Orange: Red in acid, yellow in base (pH 3.1-4.4).\n\n**Buffer Solutions:** Solutions that resist changes in pH on addition of small amounts of acid or base. E.g., CH₃COOH/CH₃COONa (acidic buffer).",
              procedure: [
              "Take 10 mL of the given unknown solution in a clean test tube or beaker.",
              "Dip a clean piece of Universal Indicator paper or pH paper into the solution using a glass rod.",
              "Observe the color change on the pH paper.",
              "Compare the color developed on the pH paper with the standard color chart provided on the pH paper booklet.",
              "Note the pH value corresponding to the matching color.",
              "Alternatively, use a calibrated digital pH meter to record the exact pH value."
            ],
              objectives: ["Classify substances."],
              realWorldApplications: ["Agriculture", "Healthcare", "Swimming Pools", "Cosmetics"],
              observationTable: { columns: ["Sample", "Color", "Approx pH", "Nature"] },
              assignments: [
                  { id: 1, question: "Define pH. Calculate the pH of a 0.001 M HCl solution.", marks: 3 },
                  { id: 2, question: "What are Buffer solutions? Explain the mechanism of an acidic buffer with an example.", marks: 5 },
                  { id: 3, question: "Why does pure water have a pH of 7 at 25°C? What happens to the pH if temperature increases?", marks: 4 },
                  { id: 4, question: "Determine the approximate pH values of: (a) Lemon Juice, (b) Blood, (c) Milk of Magnesia, (d) Gastric Juice.", marks: 4 },
                  { id: 5, question: "Explain the range and color change of Universal Indicator.", marks: 4 }
              ],
              vivaQuestions: [
                  { question: "What is the pH of pure water?", answer: "7 (Neutral)." },
                  { question: "What indicates a strong acid?", answer: "pH close to 0 or 1 (Red color)." },
                  { question: "What is the full form of pH?", answer: "Potenz of Hydrogen." },
                  { question: "Color of Universal Indicator in strong alkali?", answer: "Violet." },
                  { question: "Approximate pH of lemon juice?", answer: "2.0 - 3.0." },
                  { question: "Approximate pH of blood?", answer: "7.35 - 7.45." },
                  { question: "What is a buffer solution?", answer: "A solution that resists change in pH." },
                  { question: "Is pH temperature dependent?", answer: "Yes, pH decreases as temperature increases." },
                  { question: "Who devised the pH scale?", answer: "Soren Peder Lauritz Sorensen." },
                  { question: "What is the ionic product of water (Kw)?", answer: "10^-14 at 25°C." }
              ],
              quizQuestions: [
                  { id: 1, question: "Which juice is likely to be most acidic?", options: ["Carrot", "Lemon", "Cucumber", "Water"], correctIndex: 1 },
                  { id: 2, question: "pH > 7 implies:", options: ["Acidic", "Basic", "Neutral", "None"], correctIndex: 1 },
                  { id: 3, question: "Universal Indicator gives which color in strong alkali?", options: ["Red", "Green", "Violet", "Orange"], correctIndex: 2 },
                  { id: 4, question: "pH + pOH equals:", options: ["7", "0", "14", "10"], correctIndex: 2 },
                  { id: 5, question: "Gastric juice contains:", options: ["HCl", "H2SO4", "HNO3", "Acetic Acid"], correctIndex: 0 },
                  { id: 6, question: "Milk of Magnesia is:", options: ["Acidic", "Basic", "Neutral", "Salt"], correctIndex: 1 },
                  { id: 7, question: "Standard pH scale ranges from:", options: ["1-14", "0-14", "0-10", "1-100"], correctIndex: 1 },
                  { id: 8, question: "Concentration of H+ in pure water is:", options: ["10^-7 M", "1 M", "0 M", "10^-14 M"], correctIndex: 0 },
                  { id: 9, question: "Acid rain has pH less than:", options: ["7", "5.6", "2", "10"], correctIndex: 1 },
                  { id: 10, question: "Tooth decay starts when mouth pH is lower than:", options: ["5.5", "7.0", "8.0", "10.0"], correctIndex: 0 }
              ]
          }
      },
      {
          id: 'c4',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'],
          title: 'Functional Groups',
          description: 'Detect presence of Aldehydes/Ketones.',
          difficulty: 'Medium',
          duration: '40 min',
          category: 'Organic Chem',
          content: {
              videoId: "5Jb2u9ihC44",
              aim: "To identify the functional group (Aldehyde) in the given organic compound.",
              requirements: ["Schiff's Reagent", "Fehling's Solution", "Test tubes"],
              theory: "Functional groups are specific groups of atoms within molecules that determine the characteristics and chemical reactivity of those molecules.\n\n**Common Functional Groups and Their Tests:**\n1. **Carboxylic Group (-COOH):** Brisk effervescence with NaHCO₃ (CO₂ evolved).\n2. **Alcoholic Group (-OH):** Reacts with sodium metal to evolve H₂. Ceric Ammonium Nitrate test gives red color.\n3. **Phenolic Group (-OH aromatic):** Violet/green/blue color with neutral FeCl₃.\n4. **Aldehyde Group (-CHO):** Tollen's Test (silver mirror), Fehling's Test (red Cu₂O precipitate), Schiff's Test (pink color), 2,4-DNP Test (yellow/orange precipitate).\n5. **Ketone Group (>C=O):** Does NOT give Tollen's or Fehling's test. Gives 2,4-DNP test and Sodium Nitroprusside test.\n6. **Amino Group (-NH₂):** Carbylamine test gives foul-smelling isocyanide. Azo dye test gives orange/red dye.",
              procedure: [
              "Take a small quantity of the given organic compound in a clean test tube.",
              "For Carboxylic group: Add a pinch of sodium bicarbonate. Brisk effervescence (CO2) indicates presence of -COOH.",
              "For Alcoholic group: Add a small piece of dry sodium metal. Evolution of hydrogen gas indicates an alcohol group, or perform the ceric ammonium nitrate test.",
              "For Phenolic group: Add a few drops of neutral FeCl3 solution. A violet, green, or blue coloration indicates a phenol.",
              "For Carbonyl group (Aldehyde/Ketone): Add 2,4-DNP reagent. A yellow/orange precipitate indicates a carbonyl group. Use Tollens\' or Fehling\'s test to distinguish aldehyde from ketone.",
              "For Amino group: Perform the carbylamine test (foul smell) or nitrous acid test."
            ],
              objectives: ["Distinguish aldehydes from ketones."],
              realWorldApplications: ["Perfumes", "Food Preservation", "Pharmaceuticals", "Flavoring"],
              observationTable: { columns: ["Experiment", "Observation", "Inference"] },
              assignments: [
                  { id: 1, question: "Write the reaction involved in Tollen's Test. Why is it called the Silver Mirror test?", marks: 5 },
                  { id: 2, question: "Distinguish between Aldehydes and Ketones based on oxidation reactions.", marks: 4 },
                  { id: 3, question: "Draw the structure of 2,4-Dinitrophenylhydrazine. What is its observation with carbonyl compounds?", marks: 4 },
                  { id: 4, question: "Why do aromatic aldehydes not respond to Fehling's test?", marks: 3 },
                  { id: 5, question: "What is Schiff's Reagent chemically? Describe the color change observed.", marks: 4 }
              ],
              vivaQuestions: [
                  { question: "What is Tollen's Reagent?", answer: "Ammoniacal Silver Nitrate." },
                  { question: "Do ketones reduce Fehling's solution?", answer: "No, generally they do not." },
                  { question: "What is the visible result of Tollen's test?", answer: "Silver Mirror." },
                  { question: "What is Formalin?", answer: "40% aqueous solution of Formaldehyde." },
                  { question: "Structure of Carbonyl group?", answer: "C=O." },
                  { question: "Test to distinguish Alcohol?", answer: "Sodium metal test (H2 gas) or Esterification." },
                  { question: "What is the smell of ester?", answer: "Fruity smell." },
                  { question: "Which acid is present in vinegar?", answer: "Acetic acid." },
                  { question: "2,4-DNP test is for?", answer: "Carbonyl compounds (Aldehydes & Ketones)." },
                  { question: "Color of Fehling's solution?", answer: "Deep Blue." }
              ],
              quizQuestions: [
                  { id: 1, question: "Fehling's solution B contains:", options: ["Copper Sulphate", "Rochelle Salt", "Sodium Hydroxide", "Silver Nitrate"], correctIndex: 1 },
                  { id: 2, question: "Functional group of Aldehyde is:", options: ["-CHO", "-COOH", "-OH", "-CO-"], correctIndex: 0 },
                  { id: 3, question: "Schiff's reagent gives what color with Aldehydes?", options: ["Blue", "Pink/Magenta", "Yellow", "Black"], correctIndex: 1 },
                  { id: 4, question: "Carbolic acid is:", options: ["Phenol", "Acetic Acid", "Benzoic Acid", "Picric Acid"], correctIndex: 0 },
                  { id: 5, question: "Ketones have functional group:", options: ["-CO-", "-CHO", "-OH", "-COOH"], correctIndex: 0 },
                  { id: 6, question: "Tollen's test gives precipitate of:", options: ["Cu2O", "Ag", "CuO", "AgBr"], correctIndex: 1 },
                  { id: 7, question: "Which gives Iodoform test?", options: ["Ethanol", "Methanol", "Formaldehyde", "Phenol"], correctIndex: 0 },
                  { id: 8, question: "Fehling solution A is:", options: ["Aq CuSO4", "Alk NaOH", "Rochelle Salt", "AgNO3"], correctIndex: 0 },
                  { id: 9, question: "Reaction of carboxylic acid with NaHCO3 gives:", options: ["H2", "CO2", "O2", "NH3"], correctIndex: 1 },
                  { id: 10, question: "Bayer's reagent is:", options: ["Alk KMnO4", "Acidic KMnO4", "Aq Bromine", "Conc H2SO4"], correctIndex: 0 }
              ]
          }
      },
      {
          id: 'c5',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'],
          title: 'Exothermic Reaction',
          description: 'Study enthalpy change of neutralization.',
          difficulty: 'Medium',
          duration: '30 min',
          category: 'Thermodynamics',
          content: {
              videoId: "rdkUe_O20Ts",
              aim: "To determine the enthalpy of neutralization of strong acid and strong base.",
              requirements: ["Calorimeter", "Thermometer", "HCl", "NaOH"],
              theory: "Enthalpy (H) is the total heat content of a system at constant pressure. The change in enthalpy (ΔH) during a chemical reaction determines whether it is exothermic or endothermic.\n\n**Exothermic Reactions (ΔH < 0):** Release heat. Products have lower energy than reactants. Examples: dissolution of NaOH in water, neutralization of strong acid and strong base (ΔH = -57.1 kJ/mol).\n\n**Endothermic Reactions (ΔH > 0):** Absorb heat. Products have higher energy. Examples: dissolution of NH₄Cl or KNO₃ in water.\n\n**Calorimetry:** q = m × c × ΔT, where m = mass, c = specific heat capacity, ΔT = change in temperature.\n\n**Hess's Law:** The total enthalpy change of a reaction is independent of the pathway taken, provided initial and final states are the same.",
              procedure: [
              "Measure exactly 50 mL of dilute Hydrochloric Acid (HCl) into a clean, dry polystyrene calorimeter or insulated beaker.",
              "Measure the initial temperature of the acid using a thermometer and record it after it stabilizes.",
              "Quickly add exactly 50 mL of dilute Sodium Hydroxide (NaOH) of the same molarity to the calorimeter.",
              "Immediately cover the calorimeter with a lid.",
              "Stir the mixture gently but continuously using a stirrer.",
              "Observe the temperature rise on the thermometer and record the highest steady temperature reached.",
              "Calculate the change in temperature (Delta T).",
              "Verify that the reaction is exothermic as the temperature of the system increased."
            ],
              objectives: ["Calculate heat of reaction."],
              realWorldApplications: ["Hand Warmers", "Self-Heating Cans", "Industrial Processes", "Explosives"],
              observationTable: { columns: ["Init Temp Acid", "Init Temp Base", "Mix Temp", "Rise"] },
              assignments: [
                  { id: 1, question: "Define Enthalpy of Neutralization. Why is its value constant for any strong acid and strong base pair?", marks: 4 },
                  { id: 2, question: "Calculate the heat evolved when 100ml of 1M HCl is mixed with 100ml of 1M NaOH. (Assume standard value -57.1 kJ/mol)", marks: 4 },
                  { id: 3, question: "Why is the enthalpy of neutralization of Acetic Acid (weak acid) and NaOH less than -57.1 kJ/mol?", marks: 4 },
                  { id: 4, question: "State Hess's Law of Constant Heat Summation with an example.", marks: 4 },
                  { id: 5, question: "Explain the construction and working of a simple calorimeter.", marks: 4 }
              ],
              vivaQuestions: [
                  { question: "Is neutralization exo- or endothermic?", answer: "Exothermic (Heat is released)." },
                  { question: "What is the standard enthalpy of neutralization for Strong Acid/Base?", answer: "-57.1 kJ/mol or -13.7 kcal/mol." },
                  { question: "Why use a polystyrene cup?", answer: "It is a good insulator to prevent heat loss." },
                  { question: "What is specific heat capacity?", answer: "Heat required to raise temp of 1g substance by 1°C." },
                  { question: "Why is the value lower for weak acids?", answer: "Some energy is used for dissociation of the weak acid." },
                  { question: "Define Enthalpy.", answer: "Total heat content of a system." },
                  { question: "What is a standard state?", answer: "1 atm pressure, 298K temperature." },
                  { question: "Does stirring affect result?", answer: "Yes, ensures uniform temperature distribution." },
                  { question: "Units of Enthalpy?", answer: "Joule or Calorie." },
                  { question: "Is heat an extensive property?", answer: "Yes, depends on mass." }
              ],
              quizQuestions: [
                  { id: 1, question: "If ΔT is positive, the reaction is:", options: ["Exothermic", "Endothermic", "Isothermal", "Adiabatic"], correctIndex: 0 },
                  { id: 2, question: "Enthalpy is denoted by:", options: ["S", "G", "H", "E"], correctIndex: 2 },
                  { id: 3, question: "1 calorie is equal to:", options: ["4.18 J", "1 J", "10 J", "8.31 J"], correctIndex: 0 },
                  { id: 4, question: "Neutralization involves formation of:", options: ["Salt & Water", "Acid", "Base", "Gas"], correctIndex: 0 },
                  { id: 5, question: "Hess's Law is related to:", options: ["Heat summation", "Gas volumes", "Rates", "Equilibrium"], correctIndex: 0 },
                  { id: 6, question: "Heat capacity depends on:", options: ["Mass", "Nature of substance", "Both", "None"], correctIndex: 2 },
                  { id: 7, question: "Strong acid + Weak base enthalpy is:", options: ["< -57.1 kJ", "> -57.1 kJ (less negative)", "= -57.1 kJ", "Zero"], correctIndex: 1 },
                  { id: 8, question: "Coffee cup calorimeter measures heat at:", options: ["Constant P", "Constant V", "Constant T", "Constant n"], correctIndex: 0 },
                  { id: 9, question: "Bomb calorimeter measures heat at:", options: ["Constant P", "Constant V", "Constant T", "Constant n"], correctIndex: 1 },
                  { id: 10, question: "Thermochemistry is a branch of:", options: ["Thermodynamics", "Kinetics", "Electrochemistry", "Nuclear chem"], correctIndex: 0 }
              ]
          }
      }
,
      {
          id: 'c6',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'KMnO4 Titration (Redox)', description: 'Standardize KMnO4 against ferrous ammonium sulphate.', difficulty: 'Hard', duration: '40 min', category: 'Volumetric Analysis',          content: { aim: "To determine concentration of KMnO4 by titrating against FAS.", requirements: ["Burette", "Pipette", "KMnO4", "FAS", "H2SO4"], theory: "KMnO4 acts as self-indicator. Endpoint: persistent pink.", procedure: [
              "Rinse and fill the burette with the given KMnO4 solution.",
              "Pipette out 20 mL of standard Mohr\'s salt (or oxalic acid) solution into a conical flask.",
              "Add 1 test tube (~20 mL) of dilute H2SO4 to the conical flask. (If using oxalic acid, heat the flask to 60 degrees C).",
              "Titrate the solution against KMnO4 from the burette while constantly swirling the flask.",
              "KMnO4 acts as a self-indicator. The end-point is marked by the appearance of a permanent pale pink color.",
              "Note the final burette reading.",
              "Repeat the titration until concordant readings are obtained."
            ], objectives: ["Understand redox titration."] }
      },
      {
          id: 'c7',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Qualitative Analysis — Cations', description: 'Identify cations using systematic group analysis.', difficulty: 'Hard', duration: '45 min', category: 'Qualitative Analysis',          content: { aim: "To identify the cation present in a given salt.", requirements: ["Test Tubes", "Reagents", "Bunsen Burner"], theory: "Cations identified by dissolving salt and adding group reagents systematically.", procedure: [
              "Prepare the Original Solution (OS) of the given mixture.",
              "Group I: Add dilute HCl to the OS. A white precipitate indicates Group I (e.g., Pb2+). If no ppt, proceed to Group II.",
              "Group II: Pass H2S gas through the HCl-acidified OS. A black/yellow ppt indicates Group II (e.g., Cu2+, As3+). Boil off H2S if absent.",
              "Group III: Add solid NH4Cl and excess NH4OH. A reddish-brown or gelatinous white ppt indicates Group III (e.g., Fe3+, Al3+).",
              "Group IV: Pass H2S gas through the ammoniacal solution from Group III. A white/black ppt indicates Group IV (e.g., Zn2+, Mn2+).",
              "Continue this systematic elimination up to Group VI (Mg2+) and perform confirmatory tests for the precipitated group."
            ], objectives: ["Master wet chemistry."] }
      },
      {
          id: 'c8',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Qualitative Analysis — Anions', description: 'Detect anions using dry and wet tests.', difficulty: 'Medium', duration: '35 min', category: 'Qualitative Analysis',          content: { aim: "To identify the anion present in a given salt.", requirements: ["Test Tubes", "Dilute H2SO4", "BaCl2", "AgNO3"], theory: "CO3 gives CO2 effervescence, SO4 gives white ppt with BaCl2, Cl gives white curdy ppt with AgNO3.", procedure: [
              "Take a small amount of the salt in a dry test tube and add a few drops of dilute H2SO4.",
              "Observe for effervescence (CO3 2-) or rotten egg smell (S 2-). Perform confirmatory tests if positive.",
              "If no reaction, take another pinch of salt and add concentrated H2SO4.",
              "Heat gently. Pungent fumes (Cl-), reddish-brown fumes (Br-, NO3-), or violet vapors (I-) indicate concentrated acid group anions.",
              "Perform specific confirmatory test: e.g., Chromyl chloride test for chloride, or Brown ring test for nitrate.",
              "If both groups are absent, test for independent anions (Sulphate, Phosphate) using Barium chloride or Ammonium molybdate tests respectively."
            ], objectives: ["Identify common anions."] }
      },
      {
          id: 'c9',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Rate of Reaction', description: 'Study how temperature affects reaction rate.', difficulty: 'Medium', duration: '35 min', category: 'Kinetics',          content: { aim: "To study effect of temperature on rate of reaction.", requirements: ["Na2S2O3", "HCl", "Beakers", "Thermometer", "Stopwatch"], theory: "Rate doubles for every 10C rise. Arrhenius equation: k = Ae^(-Ea/RT).", procedure: [
              "Prepare standard solutions of Sodium Thiosulphate (Na2S2O3) and Hydrochloric Acid (HCl).",
              "Measure a fixed volume (e.g., 50 mL) of 0.1M Na2S2O3 into a conical flask placed on a piece of paper marked with a cross (X).",
              "Add a fixed volume (e.g., 10 mL) of 1M HCl to the flask and immediately start the stopwatch.",
              "Swirl the flask once and observe the cross through the solution from the top.",
              "The solution will gradually turn milky yellow due to precipitating sulfur.",
              "Stop the stopwatch exactly when the cross (X) becomes completely invisible.",
              "Record the time taken.",
              "Repeat the experiment by changing the concentration of Na2S2O3 or changing the temperature to study the effect on the rate of reaction."
            ], objectives: ["Understand activation energy."] }
      },
      {
          id: 'c10',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Enthalpy of Neutralization', description: 'Measure heat released in acid-base neutralization.', difficulty: 'Medium', duration: '30 min', category: 'Thermodynamics',          content: { aim: "To determine enthalpy of neutralization.", requirements: ["Calorimeter", "HCl", "NaOH", "Thermometer"], theory: "For strong acid + strong base: DeltaH = -57.1 kJ/mol. Q = m*c*DeltaT.", procedure: [
              "Take 100 mL of 0.1 M strong acid (e.g., HCl) in an insulated calorimeter and note its initial constant temperature (T1).",
              "Take 100 mL of 0.1 M strong base (e.g., NaOH) in a separate beaker and note its initial temperature (T2). Ensure T1 and T2 are nearly equal.",
              "Calculate the average initial temperature T_initial = (T1+T2)/2.",
              "Quickly pour the base into the acid in the calorimeter and stir well.",
              "Note the maximum highest temperature reached by the mixture (T_final).",
              "Calculate the temperature rise: Delta T = T_final - T_initial.",
              "Use the formula Q = m * c * Delta T to calculate the heat evolved.",
              "Calculate the Enthalpy of Neutralization per mole of water formed."
            ], objectives: ["Understand thermochemistry."] }
      },
      {
          id: 'c11',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Preparation of Potash Alum', description: 'Prepare potash alum crystals from aluminium.', difficulty: 'Medium', duration: '45 min', category: 'Preparations',          content: { aim: "To prepare potash alum from scrap aluminium.", requirements: ["Aluminium", "KOH", "H2SO4", "Beaker"], theory: "Al dissolves in KOH, then reacts with H2SO4 to form potash alum crystals.", procedure: [
              "Weigh approximately 2.5g of Potassium Sulphate (K2SO4) and dissolve it in minimum boiling water in a beaker.",
              "Weigh approximately 10g of Aluminum Sulphate (Al2(SO4)3.18H2O) and dissolve it in minimum boiling water in another beaker. Add 1-2 mL of dilute H2SO4 to prevent hydrolysis.",
              "Filter both the hot solutions to remove insoluble impurities.",
              "Mix the two clear hot solutions in a china dish.",
              "Heat the mixture on a wire gauze to concentrate it up to the crystallization point (check by blowing on a glass rod dipped in the solution).",
              "Allow the concentrated solution to cool undisturbed at room temperature for several hours.",
              "Colorless, octahedral crystals of Potash Alum will separate out.",
              "Filter the crystals, wash them with a small amount of ice-cold distilled water, and dry them between folds of filter paper."
            ], objectives: ["Understand crystallization."] }
      },
      {
          id: 'c12',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'pH of Various Solutions', description: 'Determine pH of household substances.', difficulty: 'Easy', duration: '20 min', category: 'Acids & Bases',          content: { aim: "To determine pH of various solutions using pH paper.", requirements: ["pH Paper", "Solutions", "Color Chart"], theory: "pH = -log[H+]. Acids: pH < 7, Neutral: pH = 7, Bases: pH > 7.", procedure: [
              "Procure different samples of solutions (e.g., fruit juices, standard acid/base dilutions, tap water, soapy water).",
              "Take 5 mL of each solution in separate, clean, labeled test tubes.",
              "Add 2 drops of Universal Indicator to each test tube.",
              "Shake the test tubes gently to mix the indicator.",
              "Observe the color change in each solution.",
              "Compare the colors with the pH color chart to determine the approximate pH value of each solution.",
              "Classify each solution as strongly acidic, weakly acidic, neutral, weakly basic, or strongly basic."
            ], objectives: ["Classify solutions."] }
      },
      {
          id: 'c13',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Food Analysis', description: 'Tests for Carbohydrates, Fats, and Proteins.', difficulty: 'Easy', duration: '40 min', category: 'Biochemistry',          content: { aim: "To detect the presence of carbohydrates, fats, and proteins in given food samples.", requirements: ["Food samples (e.g. egg white, potato, oil)", "Iodine solution", "Benedict's reagent", "Biuret reagent", "Test tubes", "Filter paper"], theory: "Specific chemical tests reveal nutritional components. Starch turns blue-black with Iodine. Reducing sugars form red-brick precipitate with Benedict's. Proteins turn violet with Biuret reagent. Fats leave a translucent spot on paper.", procedure: [
              "Test for Starch: Add 2 drops of Iodine solution to an aqueous extract of the sample. Blue-black colour indicates starch.",
              "Test for Reducing Sugar: Add 2mL Benedict's reagent to the sample extract and heat in a boiling water bath. Orange/red precipitate indicates reducing sugar.",
              "Test for Proteins (Biuret Test): Add 2mL of 10% NaOH and 2-3 drops of 1% CuSO4 to the sample. A violet colour indicates protein.",
              "Test for Proteins (Xanthoproteic Test): Add concentrated HNO3 to the sample and heat. Yellow colour (turning orange with ammonia) indicates protein with aromatic rings.",
              "Test for Fats: Rub a small quantity of the sample on a clean filter paper. A translucent spot that does not dry indicates fat."
            ], objectives: ["Understand basic food chemistry and nutrition testing."],
            realWorldApplications: ["Food quality control.", "Dietetics.", "Nutritional science."],
            observationTable: { columns: ["Sample", "Test Performed", "Observation", "Inference"] },
            assignments: [
                { id: 1, question: "Why does the Biuret test give a violet color with proteins?", marks: 3 }
            ], vivaQuestions: [
                { question: "Which chemical is used to test for starch?", answer: "Iodine solution." }
            ], quizQuestions: [
                { id: 1, question: "Biuret test detects the presence of:", options: ["Fats", "Proteins", "Starch", "Vitamins"], correctIndex: 1 }
            ]
          }
      },
      {
          id: 'c14',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Organic Preparation (Acetanilide)', description: 'Synthesize Acetanilide from Aniline.', difficulty: 'Hard', duration: '50 min', category: 'Preparations',          content: { aim: "To prepare a sample of Acetanilide from aniline and calculate its yield.", requirements: ["Aniline", "Glacial acetic acid", "Acetic anhydride", "Zinc dust", "Round bottom flask", "Water bath", "Ice bath"], theory: "Acetanilide is prepared by acetylation of aniline. Aniline reacts with acetic anhydride in the presence of glacial acetic acid to form acetanilide and acetic acid. Zinc dust is added to prevent oxidation of aniline during the reaction.", procedure: [
              "Measure 5 mL of aniline into a 100 mL round-bottom flask.",
              "Add 5 mL of glacial acetic acid and 5 mL of acetic anhydride to the flask.",
              "Add a pinch of zinc dust to prevent oxidation.",
              "Attach a reflux condenser and gently boil the mixture on a water bath for about 20-30 minutes.",
              "Remove the flask and slowly pour the hot reaction mixture into a beaker containing 100 mL of ice-cold water while stirring vigorously.",
              "White crystals of acetanilide will precipitate out.",
              "Filter the crystals using a suction filter or filter paper.",
              "Wash the crystals with cold water, dry them between filter paper folds, and weigh to find the yield.",
              "Determine the melting point for purity checking (expected ~114°C)."
            ], objectives: ["Learn organic synthesis techniques.", "Determine yield and purity."],
            realWorldApplications: ["Pharmaceutical synthesis (historical precursor to paracetamol).", "Dye manufacturing."],
            observationTable: { columns: ["Reactant Amount", "Theoretical Yield", "Actual Yield", "Melting Point"] },
            assignments: [
                { id: 1, question: "Why is zinc dust added during the preparation of acetanilide?", marks: 3 },
                { id: 2, question: "Write the balanced chemical equation for the acetylation of aniline.", marks: 4 }
            ], vivaQuestions: [
                { question: "What is the purpose of adding the reaction mixture to ice cold water?", answer: "To crystallize the acetanilide, which has low solubility in cold water." }
            ], quizQuestions: [
                { id: 1, question: "The process of forming acetanilide from aniline is an example of:", options: ["Nitration", "Halogenation", "Acetylation", "Alkylation"], correctIndex: 2 }
            ]
          }
      },
      {
          id: 'c15',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Crystallization of Mohr\'s Salt', description: 'Prepare double salt (Ferrous Ammonium Sulphate).', difficulty: 'Medium', duration: '40 min', category: 'Preparations',          content: { aim: "To prepare pure crystals of Ferrous Ammonium Sulphate (Mohr's Salt).", requirements: ["Ferrous sulphate", "Ammonium sulphate", "Dilute H2SO4", "Beakers", "Evaporating dish", "Burner"], theory: "Mohr's salt is a double salt containing two different cations (Fe2+ and NH4+). It is prepared by crystallizing a mixture containing equimolar proportions of ferrous sulphate and ammonium sulphate in water containing a little dilute sulfuric acid to prevent the hydrolysis of ferrous sulphate.", procedure: [
              "Weigh 7g of ferrous sulphate and 3.5g of ammonium sulphate into a clean beaker.",
              "Add approximately 2-3 mL of dilute H2SO4 to prevent hydrolysis of ferrous sulfate.",
              "Add 20 mL of distilled water and warm gently while stirring to dissolve the salts completely.",
              "Filter the warm solution into an evaporating dish (China dish) to remove insoluble impurities.",
              "Heat the solution gently on a sand bath or wire gauze to concentrate it up to the crystallization point.",
              "Check the crystallization point by dipping a glass rod into the solution and blowing on it (a thin solid film should form).",
              "Remove the dish from heat and allow it to cool slowly undisturbed.",
              "Light green monoclinic crystals of Mohr's salt will separate out.",
              "Filter, wash carefully with a few drops of alcohol, and dry the crystals."
            ], objectives: ["Understand crystallization techniques for inorganic salts."],
            realWorldApplications: ["Standardization in analytical chemistry.", "Photography.", "Iron supplements."],
            observationTable: { columns: ["Salts used", "Mass", "Crystal Color", "Crystal Shape"] },
            assignments: [
                { id: 1, question: "Explain why dilute sulfuric acid is added during the preparation of Mohr's salt.", marks: 3 }
            ], vivaQuestions: [
                { question: "What is the formula of Mohr's salt?", answer: "FeSO4.(NH4)2SO4.6H2O" },
                { question: "What is a double salt?", answer: "A salt containing two different cations or anions that exists only in solid state and dissociates entirely in water." }
            ], quizQuestions: [
                { id: 1, question: "Mohr's salt crystals are typically:", options: ["Colorless", "Light Green", "Deep Blue", "Orange"], correctIndex: 1 }
            ]
          }
      },
        {
                "id": "c5",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Permanganate Titration - Oxalic Acid",
                "description": "Determine the strength of KMnO4 using oxalic acid.",
                "difficulty": "Medium",
                "duration": "45 min",
                "category": "Physical Chem",
                "content": {
                        "aim": "To determine the molarity/strength of given KMnO4 solution against a standard solution of Oxalic Acid.",
                        "requirements": [
                                "Burette",
                                "Pipette",
                                "KMnO4",
                                "Oxalic Acid",
                                "Dil H2SO4",
                                "Conical flask",
                                "Burner"
                        ],
                        "theory": "This is a redox titration in acidic medium where KMnO4 acts as an oxidizing agent and oxalic acid as a reducing agent. The reaction requires heating (60-70°C). KMnO4 acts as a self-indicator.",
                        "procedure": [
                                "Prepare a standard solution of Oxalic Acid (e.g., M/20) and measure out exactly 20 mL into a conical flask using a pipette.",
                                "Add one test tube full of dilute sulphuric acid (approx. 20 mL) to the conical flask.",
                                "Heat the contents of the flask moderately to 60-70°C (steam just starting to rise).",
                                "Fill the burette with the unknown KMnO4 solution and clamp it securely.",
                                "Titrate the hot oxalic acid with KMnO4, swirling constantly, until a permanent pale pink color is attained.",
                                "Note the final reading and repeat until concordant values are achieved.",
                                "Calculate the molarity of KMnO4 using the molarity equation."
                        ],
                        "objectives": [
                                "Perform heat-activated redox titration.",
                                "Determine unknown molarity."
                        ]
                }
        },
        {
                "id": "c6",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Permanganate Titration - Mohr's Salt",
                "description": "Determine the strength of KMnO4 using FAS.",
                "difficulty": "Easy",
                "duration": "40 min",
                "category": "Physical Chem",
                "content": {
                        "aim": "To determine the molarity/strength of given KMnO4 solution against a standard Ferrous Ammonium Sulphate (FAS/Mohr's Salt) solution.",
                        "requirements": [
                                "Burette",
                                "Pipette",
                                "KMnO4",
                                "FAS",
                                "Dil H2SO4",
                                "Conical flask"
                        ],
                        "theory": "This is a redox titration where Fe2+ (from FAS) is oxidized to Fe3+ by MnO4- in an acidic medium. Unlike oxalic acid, this reaction does not require heating.",
                        "procedure": [
                                "Prepare a standard solution of FAS.",
                                "Pipette out 20 mL of the FAS standard solution into a clean conical flask.",
                                "Add one test tube full (approx 20 mL) of dilute sulphuric acid directly to the solution.",
                                "Fill the burette with KMnO4 solution.",
                                "Titrate the FAS solution with KMnO4 continuously without heating.",
                                "Stop at the first permanent appearance of a very pale pink color.",
                                "Calculate the concentration using M1V1/n1 = M2V2/n2."
                        ],
                        "objectives": [
                                "Redox titration without catalyst/heat.",
                                "Use self-indicators."
                        ]
                }
        },
        {
                "id": "c7",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Functional Group Test",
                "description": "Identify functional groups in organic compounds.",
                "difficulty": "Hard",
                "duration": "60 min",
                "category": "Organic Chem",
                "content": {
                        "aim": "To identify the functional group present in the given unknown organic compound.",
                        "requirements": [
                                "Test tubes",
                                "Organic samples",
                                "Chemical reagents (2,4-DNP, Tollens, Fehling, Litmus, NaHCO3, FeCl3)"
                        ],
                        "theory": "Different functional groups show characteristic chemical reactions. Examples: Carboxylic acids give effervescence with NaHCO3. Phenols give violet color with neutral FeCl3. Aldehydes give silver mirror with Tollen's reagent.",
                        "procedure": [
                                "Test for Unsaturation: Add Bromine water. If decolorized, the compound is unsaturated (alkene/alkyne).",
                                "Test for Carboxyl (-COOH): Add NaHCO3 solution. Brisk effervescence signifies carboxylic acid.",
                                "Test for Phenolic (-OH): Add neutral FeCl3. A violet or green coloration indicates phenol.",
                                "Test for Carbonyl (>C=O): Add 2,4-DNP. A yellow/orange precipitate indicates aldehydes or ketones.",
                                "Test for Aldehyde (-CHO): Perform Tollen's Test. A silver mirror formation on the test tube wall indicates an aldehyde.",
                                "Test for Amino (-NH2): Perform carbylamine test or azo-dye test for aromatic amines."
                        ],
                        "objectives": [
                                "Systematic organic qualitative analysis.",
                                "Identify functional groups chemically."
                        ]
                }
        },
        {
                "id": "c8",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Food Tests (Carbs, Proteins, Fats)",
                "description": "Detect nutrients in food samples.",
                "difficulty": "Easy",
                "duration": "35 min",
                "category": "Biochemistry",
                "content": {
                        "aim": "To detect the presence of carbohydrates, proteins, and fats in the given food sample.",
                        "requirements": [
                                "Food extract",
                                "Iodine solution",
                                "Benedict's reagent",
                                "Biuret reagents (CuSO4 and NaOH)",
                                "Filter paper"
                        ],
                        "theory": "Iodine tests for starch. Benedict's reagent tests for reducing sugars. Biuret test identifies peptide bonds (proteins). Translucent spot on paper indicates fats.",
                        "procedure": [
                                "Test for Starch: Add a few drops of iodine solution to the food extract. A blue-black color indicates starch.",
                                "Test for Reducing Sugars: Boil the sample with Benedict's reagent. A brick-red precipitate denotes reducing sugars.",
                                "Test for Proteins (Biuret Test): Add 2 mL of NaOH solution and a few drops of 1% CuSO4 to the protein solution. A violet/purple color indicates proteins.",
                                "Test for Fats: Rub the solid food sample or place a drop of the liquid extract on a piece of filter paper. A translucent spot indicates fats."
                        ],
                        "objectives": [
                                "Detect major macromolecules.",
                                "Understand nutritional analysis."
                        ]
                }
        },
        {
                "id": "c9",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Chemical Kinetics",
                "description": "Effect of concentration on the rate of reaction between Sodium Thiosulphate and HCl.",
                "difficulty": "Medium",
                "duration": "45 min",
                "category": "Physical Chem",
                "content": {
                        "aim": "To study the effect of concentration on the rate of reaction between sodium thiosulphate and hydrochloric acid.",
                        "requirements": [
                                "Sodium Thiosulphate solution (0.1M)",
                                "HCl (1M)",
                                "Beakers",
                                "Stopwatch",
                                "Paper with a cross"
                        ],
                        "theory": "The reaction between sodium thiosulphate and HCl produces a colloidal precipitation of sulphur which makes the solution opaque. The rate of the reaction is inversely proportional to the time taken for the cross mark beneath the beaker to disappear.",
                        "procedure": [
                                "Mark a bold black cross on a piece of clean white paper.",
                                "Take 50 mL of 0.1M sodium thiosulphate solution in a beaker and place it on the cross.",
                                "Add 5 mL of 1M HCl to the beaker and immediately start the stopwatch.",
                                "Look through the solution carefully. Stop the watch exactly when the cross mark becomes completely invisible.",
                                "Repeat the experiment by decreasing the concentration of sodium thiosulphate (e.g. 40mL solution + 10mL water, then 30mL + 20mL water) while keeping HCl constant.",
                                "Plot a graph of concentration of sodium thiosulphate versus 1/time (Rate)."
                        ],
                        "objectives": [
                                "Determine how reaction velocity changes with reactant molarity."
                        ]
                }
        },
        {
                "id": "c10",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "pH Determination",
                "description": "Measure pH of fruit juices and chemical solutions using pH paper / indicator.",
                "difficulty": "Easy",
                "duration": "30 min",
                "category": "Physical Chem",
                "content": {
                        "aim": "To determine the pH of various given solutions (acids, bases, salts, fruit juices) using pH paper or universal indicator solution.",
                        "requirements": [
                                "pH paper strips",
                                "Universal Indicator",
                                "Test tubes",
                                "Various solutions (HCl, NaOH, Lemon juice, etc)"
                        ],
                        "theory": "pH is a measure of the hydrogen ion concentration. The universal indicator exhibits varying colors across the pH range from 1 to 14, indicating whether a substance is highly acidic, neutral, or highly basic.",
                        "procedure": [
                                "Place a small drop of the given solution on a clean strip of pH indicator paper using a glass rod.",
                                "Wait a few seconds for the color to develop fully.",
                                "Compare the final color with the standard pH reference chart provided with the pH paper.",
                                "Alternatively, add 2 drops of universal indicator to 5 mL of the solution in a test tube and compare the resulting color with the standard chart.",
                                "Observe and record the pH values for all the provided solutions."
                        ],
                        "objectives": [
                                "Accurately estimate pH.",
                                "Distinguish between strong and weak acids/bases."
                        ]
                }
        },
        {
                "id": "c11",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Preparation of Double Salts",
                "description": "Crystallization of Potash Alum or Mohr's salt.",
                "difficulty": "Medium",
                "duration": "60 min",
                "category": "Inorganic Chem",
                "content": {
                        "aim": "To prepare a pure sample of the double salt, Potash Alum (K2SO4.Al2(SO4)3.24H2O) or Mohr's Salt.",
                        "requirements": [
                                "Potassium sulphate",
                                "Aluminium sulphate",
                                "Beaker",
                                "Glass rod",
                                "Bunsen burner",
                                "Funnel",
                                "Filter paper"
                        ],
                        "theory": "A double salt is an addition compound that contains two different salts crystallized together in equimolar proportions and exists only in the solid state.",
                        "procedure": [
                                "For Potash Alum: Weigh exact stoichiometric quantities of potassium sulphate and aluminium sulphate.",
                                "Dissolve them in a minimum quantity of hot distilled water to get a saturated solution.",
                                "Add a few drops of dilute sulphuric acid to prevent hydrolysis of aluminium sulphate.",
                                "Filter the hot solution to remove insoluble impurities.",
                                "Transfer the clear filtrate to an evaporating dish and concentrate by heating to the crystallization point (check with a glass rod).",
                                "Allow the solution to cool slowly and undisturbed. Crystals of potash alum separate out.",
                                "Filter, dry the crystals between folds of filter paper, and calculate the yield."
                        ],
                        "objectives": [
                                "Understand crystallization techniques.",
                                "Prepare inorganic addition compounds."
                        ]
                }
        }

,
        {
                "id": "c5",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Permanganate Titration - Oxalic Acid",
                "description": "Determine the strength of KMnO4 using oxalic acid.",
                "difficulty": "Medium",
                "duration": "45 min",
                "category": "Physical Chem",
                "content": {
                        "aim": "To determine the molarity/strength of given KMnO4 solution against a standard solution of Oxalic Acid.",
                        "requirements": [
                                "Burette",
                                "Pipette",
                                "KMnO4",
                                "Oxalic Acid",
                                "Dil H2SO4",
                                "Conical flask",
                                "Burner"
                        ],
                        "theory": "This is a redox titration in acidic medium where KMnO4 acts as an oxidizing agent and oxalic acid as a reducing agent. The reaction requires heating (60-70°C). KMnO4 acts as a self-indicator.",
                        "procedure": [
                                "Prepare a standard solution of Oxalic Acid (e.g., M/20) and measure out exactly 20 mL into a conical flask using a pipette.",
                                "Add one test tube full of dilute sulphuric acid (approx. 20 mL) to the conical flask.",
                                "Heat the contents of the flask moderately to 60-70°C (steam just starting to rise).",
                                "Fill the burette with the unknown KMnO4 solution and clamp it securely.",
                                "Titrate the hot oxalic acid with KMnO4, swirling constantly, until a permanent pale pink color is attained.",
                                "Note the final reading and repeat until concordant values are achieved.",
                                "Calculate the molarity of KMnO4 using the molarity equation."
                        ],
                        "objectives": [
                                "Perform heat-activated redox titration.",
                                "Determine unknown molarity."
                        ]
                }
        },
        {
                "id": "c6",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Permanganate Titration - Mohr's Salt",
                "description": "Determine the strength of KMnO4 using FAS.",
                "difficulty": "Easy",
                "duration": "40 min",
                "category": "Physical Chem",
                "content": {
                        "aim": "To determine the molarity/strength of given KMnO4 solution against a standard Ferrous Ammonium Sulphate (FAS/Mohr's Salt) solution.",
                        "requirements": [
                                "Burette",
                                "Pipette",
                                "KMnO4",
                                "FAS",
                                "Dil H2SO4",
                                "Conical flask"
                        ],
                        "theory": "This is a redox titration where Fe2+ (from FAS) is oxidized to Fe3+ by MnO4- in an acidic medium. Unlike oxalic acid, this reaction does not require heating.",
                        "procedure": [
                                "Prepare a standard solution of FAS.",
                                "Pipette out 20 mL of the FAS standard solution into a clean conical flask.",
                                "Add one test tube full (approx 20 mL) of dilute sulphuric acid directly to the solution.",
                                "Fill the burette with KMnO4 solution.",
                                "Titrate the FAS solution with KMnO4 continuously without heating.",
                                "Stop at the first permanent appearance of a very pale pink color.",
                                "Calculate the concentration using M1V1/n1 = M2V2/n2."
                        ],
                        "objectives": [
                                "Redox titration without catalyst/heat.",
                                "Use self-indicators."
                        ]
                }
        },
        {
                "id": "c7",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Functional Group Test",
                "description": "Identify functional groups in organic compounds.",
                "difficulty": "Hard",
                "duration": "60 min",
                "category": "Organic Chem",
                "content": {
                        "aim": "To identify the functional group present in the given unknown organic compound.",
                        "requirements": [
                                "Test tubes",
                                "Organic samples",
                                "Chemical reagents (2,4-DNP, Tollens, Fehling, Litmus, NaHCO3, FeCl3)"
                        ],
                        "theory": "Different functional groups show characteristic chemical reactions. Examples: Carboxylic acids give effervescence with NaHCO3. Phenols give violet color with neutral FeCl3. Aldehydes give silver mirror with Tollen's reagent.",
                        "procedure": [
                                "Test for Unsaturation: Add Bromine water. If decolorized, the compound is unsaturated (alkene/alkyne).",
                                "Test for Carboxyl (-COOH): Add NaHCO3 solution. Brisk effervescence signifies carboxylic acid.",
                                "Test for Phenolic (-OH): Add neutral FeCl3. A violet or green coloration indicates phenol.",
                                "Test for Carbonyl (>C=O): Add 2,4-DNP. A yellow/orange precipitate indicates aldehydes or ketones.",
                                "Test for Aldehyde (-CHO): Perform Tollen's Test. A silver mirror formation on the test tube wall indicates an aldehyde.",
                                "Test for Amino (-NH2): Perform carbylamine test or azo-dye test for aromatic amines."
                        ],
                        "objectives": [
                                "Systematic organic qualitative analysis.",
                                "Identify functional groups chemically."
                        ]
                }
        },
        {
                "id": "c8",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Food Tests (Carbs, Proteins, Fats)",
                "description": "Detect nutrients in food samples.",
                "difficulty": "Easy",
                "duration": "35 min",
                "category": "Biochemistry",
                "content": {
                        "aim": "To detect the presence of carbohydrates, proteins, and fats in the given food sample.",
                        "requirements": [
                                "Food extract",
                                "Iodine solution",
                                "Benedict's reagent",
                                "Biuret reagents (CuSO4 and NaOH)",
                                "Filter paper"
                        ],
                        "theory": "Iodine tests for starch. Benedict's reagent tests for reducing sugars. Biuret test identifies peptide bonds (proteins). Translucent spot on paper indicates fats.",
                        "procedure": [
                                "Test for Starch: Add a few drops of iodine solution to the food extract. A blue-black color indicates starch.",
                                "Test for Reducing Sugars: Boil the sample with Benedict's reagent. A brick-red precipitate denotes reducing sugars.",
                                "Test for Proteins (Biuret Test): Add 2 mL of NaOH solution and a few drops of 1% CuSO4 to the protein solution. A violet/purple color indicates proteins.",
                                "Test for Fats: Rub the solid food sample or place a drop of the liquid extract on a piece of filter paper. A translucent spot indicates fats."
                        ],
                        "objectives": [
                                "Detect major macromolecules.",
                                "Understand nutritional analysis."
                        ]
                }
        },
        {
                "id": "c9",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Chemical Kinetics",
                "description": "Effect of concentration on the rate of reaction between Sodium Thiosulphate and HCl.",
                "difficulty": "Medium",
                "duration": "45 min",
                "category": "Physical Chem",
                "content": {
                        "aim": "To study the effect of concentration on the rate of reaction between sodium thiosulphate and hydrochloric acid.",
                        "requirements": [
                                "Sodium Thiosulphate solution (0.1M)",
                                "HCl (1M)",
                                "Beakers",
                                "Stopwatch",
                                "Paper with a cross"
                        ],
                        "theory": "The reaction between sodium thiosulphate and HCl produces a colloidal precipitation of sulphur which makes the solution opaque. The rate of the reaction is inversely proportional to the time taken for the cross mark beneath the beaker to disappear.",
                        "procedure": [
                                "Mark a bold black cross on a piece of clean white paper.",
                                "Take 50 mL of 0.1M sodium thiosulphate solution in a beaker and place it on the cross.",
                                "Add 5 mL of 1M HCl to the beaker and immediately start the stopwatch.",
                                "Look through the solution carefully. Stop the watch exactly when the cross mark becomes completely invisible.",
                                "Repeat the experiment by decreasing the concentration of sodium thiosulphate (e.g. 40mL solution + 10mL water, then 30mL + 20mL water) while keeping HCl constant.",
                                "Plot a graph of concentration of sodium thiosulphate versus 1/time (Rate)."
                        ],
                        "objectives": [
                                "Determine how reaction velocity changes with reactant molarity."
                        ]
                }
        },
        {
                "id": "c10",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "pH Determination",
                "description": "Measure pH of fruit juices and chemical solutions using pH paper / indicator.",
                "difficulty": "Easy",
                "duration": "30 min",
                "category": "Physical Chem",
                "content": {
                        "aim": "To determine the pH of various given solutions (acids, bases, salts, fruit juices) using pH paper or universal indicator solution.",
                        "requirements": [
                                "pH paper strips",
                                "Universal Indicator",
                                "Test tubes",
                                "Various solutions (HCl, NaOH, Lemon juice, etc)"
                        ],
                        "theory": "pH is a measure of the hydrogen ion concentration. The universal indicator exhibits varying colors across the pH range from 1 to 14, indicating whether a substance is highly acidic, neutral, or highly basic.",
                        "procedure": [
                                "Place a small drop of the given solution on a clean strip of pH indicator paper using a glass rod.",
                                "Wait a few seconds for the color to develop fully.",
                                "Compare the final color with the standard pH reference chart provided with the pH paper.",
                                "Alternatively, add 2 drops of universal indicator to 5 mL of the solution in a test tube and compare the resulting color with the standard chart.",
                                "Observe and record the pH values for all the provided solutions."
                        ],
                        "objectives": [
                                "Accurately estimate pH.",
                                "Distinguish between strong and weak acids/bases."
                        ]
                }
        },
        {
                "id": "c11",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Preparation of Double Salts",
                "description": "Crystallization of Potash Alum or Mohr's salt.",
                "difficulty": "Medium",
                "duration": "60 min",
                "category": "Inorganic Chem",
                "content": {
                        "aim": "To prepare a pure sample of the double salt, Potash Alum (K2SO4.Al2(SO4)3.24H2O) or Mohr's Salt.",
                        "requirements": [
                                "Potassium sulphate",
                                "Aluminium sulphate",
                                "Beaker",
                                "Glass rod",
                                "Bunsen burner",
                                "Funnel",
                                "Filter paper"
                        ],
                        "theory": "A double salt is an addition compound that contains two different salts crystallized together in equimolar proportions and exists only in the solid state.",
                        "procedure": [
                                "For Potash Alum: Weigh exact stoichiometric quantities of potassium sulphate and aluminium sulphate.",
                                "Dissolve them in a minimum quantity of hot distilled water to get a saturated solution.",
                                "Add a few drops of dilute sulphuric acid to prevent hydrolysis of aluminium sulphate.",
                                "Filter the hot solution to remove insoluble impurities.",
                                "Transfer the clear filtrate to an evaporating dish and concentrate by heating to the crystallization point (check with a glass rod).",
                                "Allow the solution to cool slowly and undisturbed. Crystals of potash alum separate out.",
                                "Filter, dry the crystals between folds of filter paper, and calculate the yield."
                        ],
                        "objectives": [
                                "Understand crystallization techniques.",
                                "Prepare inorganic addition compounds."
                        ]
                }
        }


    ]
  },
  {
    id: 'biology',
    name: SubjectType.BIOLOGY,
    icon: Dna,
    color: 'lime',
    hex: '#65a30d',
    description: 'Dissect virtually, observe microscopic life, and understand physiological processes.',
    labs: [
      { 
        id: 'b1',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], 
        title: 'Mitosis in Onion Tip', 
        description: 'Observe stages of cell division.', 
        difficulty: 'Medium', 
        duration: '40 min', 
        category: 'Cell Biology',
        content: {
            videoId: "L0k-enzoeOM",
            aim: "To study mitosis in onion root tip cells.",
            requirements: ["Microscope", "Slide", "Onion root"],
            theory: "Mitosis is a type of cell division in which a single cell divides to produce two genetically identical daughter cells. It occurs in somatic cells and is essential for growth, repair, and asexual reproduction.\n\n**Stages:**\n1. **Prophase:** Chromatin condenses into chromosomes. Nuclear membrane begins to disintegrate. Spindle apparatus starts forming.\n2. **Metaphase:** Chromosomes align at the equatorial plate. Spindle fibers attach to centromeres.\n3. **Anaphase:** Centromeres split, sister chromatids pulled to opposite poles.\n4. **Telophase:** Chromosomes reach poles, uncoil, nuclear membranes reform, nucleoli reappear.\n\n**Cytokinesis:** In plant cells, a cell plate forms at the center. In animal cells, a cleavage furrow pinches the cell.\n\n**Why Onion Root Tip?** The meristematic zone has actively dividing cells, ideal for observing all stages.\n\n**Significance:** Maintains chromosome number, ensures genetic uniformity, responsible for growth and tissue repair.",
            procedure: [
              "Place an onion bulb in a beaker of water so that only its base touches the water. Let roots grow for 3-4 days.",
              "Cut 2-3 cm of the newly grown white root tips and transfer them to a watch glass containing Carnoy\'s fluid (fixative) for 24 hours.",
              "Transfer the root tips to a watch glass containing 1N HCl and warm gently over a spirit lamp for 2-3 minutes to soften the tissue.",
              "Wash the tips thoroughly with water to remove the acid.",
              "Place a root tip on a clean glass slide and add a drop of Acetocarmine stain. Wait for 2-3 minutes.",
              "Gently squash the root tip using a needle or the back of a pencil, then cover with a coverslip.",
              "Tap the coverslip gently to spread the cells evenly in a single layer.",
              "Observe the slide under the low power and then the high power of a compound microscope to identify different stages of mitosis."
            ],
            objectives: ["Identify stages of division."],
            realWorldApplications: ["Cancer Research", "Tissue Culture", "Regenerative Medicine", "Genetics"],
            observationTable: { columns: ["Field No.", "Prophase", "Metaphase", "Anaphase", "Telophase", "Total Cells"] },
            assignments: [
                { id: 1, question: "Draw neat labeled diagrams of all stages of Mitosis.", marks: 5 },
                { id: 2, question: "Why is the onion root tip used for studying mitosis? Why not the leaf?", marks: 3 },
                { id: 3, question: "Differentiate between Cytokinesis in plant and animal cells.", marks: 4 },
                { id: 4, question: "What is the significance of Mitosis in multicellular organisms?", marks: 4 },
                { id: 5, question: "Explain the events occurring during Prophase and Metaphase.", marks: 4 }
            ],
            vivaQuestions: [
                { question: "Why use onion root tip?", answer: "It has rapidly dividing meristematic tissue." },
                { question: "In which stage do chromosomes align at the equator?", answer: "Metaphase." },
                { question: "What is the purpose of Acetocarmine?", answer: "To stain the chromosomes." },
                { question: "Which is the longest phase?", answer: "Prophase." },
                { question: "Which is the shortest phase?", answer: "Anaphase." },
                { question: "What happens in Anaphase?", answer: "Sister chromatids separate and move to opposite poles." },
                { question: "What is Interphase?", answer: "Resting phase where DNA replicates." },
                { question: "What is cytokinesis?", answer: "Division of cytoplasm." },
                { question: "Difference between plant and animal mitosis?", answer: "Cell plate formation in plants vs cleavage furrow in animals." },
                { question: "What are spindle fibers made of?", answer: "Microtubules (Tubulin protein)." }
            ],
            quizQuestions: [
                { id: 1, question: "DNA replication occurs in:", options: ["Prophase", "Interphase", "Metaphase", "Anaphase"], correctIndex: 1 },
                { id: 2, question: "Chromatids move to opposite poles during:", options: ["Telophase", "Prophase", "Anaphase", "Metaphase"], correctIndex: 2 },
                { id: 3, question: "Longest phase of cell cycle is:", options: ["M Phase", "Interphase", "G1 Phase", "G2 Phase"], correctIndex: 1 },
                { id: 4, question: "Chromosomes are best visible in:", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], correctIndex: 1 },
                { id: 5, question: "Nuclear membrane disappears in:", options: ["Prophase", "Telophase", "Interphase", "Anaphase"], correctIndex: 0 },
                { id: 6, question: "Cell plate is formed in:", options: ["Animal cells", "Plant cells", "Bacteria", "Virus"], correctIndex: 1 },
                { id: 7, question: "Synthesis of RNA and proteins happens in:", options: ["G1 Phase", "S Phase", "G2 Phase", "M Phase"], correctIndex: 2 },
                { id: 8, question: "Crossing over occurs in:", options: ["Mitosis", "Meiosis", "Amitosis", "Fission"], correctIndex: 1 },
                { id: 9, question: "Number of chromosomes in daughter cells of mitosis:", options: ["Half", "Double", "Same", "Triple"], correctIndex: 2 },
                { id: 10, question: "Centromere splits in:", options: ["Metaphase", "Anaphase", "Prophase", "Telophase"], correctIndex: 1 }
            ]
        }
      },
      {
          id: 'b2',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'],
          title: 'Stomata Distribution',
          description: 'Compare stomata on leaf surfaces.',
          difficulty: 'Easy',
          duration: '30 min',
          category: 'Plant Physiology',
          content: {
              videoId: "IlmgFYmbAUg",
              aim: "To study the distribution of stomata on the upper and lower surfaces of a leaf.",
              requirements: ["Leaf", "Forceps", "Safranin", "Glycerin", "Microscope"],
              theory: "Stomata are tiny pores on the epidermis of leaves bordered by specialized guard cells that regulate their opening and closing.\n\n**Structure:** Each stoma consists of two kidney-shaped (dicots) or dumbbell-shaped (monocots) guard cells surrounding a pore. Guard cells have unevenly thickened inner walls.\n\n**Function:** Gas exchange (CO₂ in, O₂ out) and transpiration (water vapor exit).\n\n**Mechanism:** When guard cells absorb water (become turgid), the stoma opens. When they lose water (become flaccid), it closes. Regulated by K⁺ ion concentration and light.\n\n**Distribution:**\n- Dorsiventral leaves (dicots): More stomata on lower surface.\n- Isobilateral leaves (monocots): Equal on both surfaces.\n- Floating leaves: Stomata only on upper surface.",
              procedure: [
              "Take a fresh leaf of a dicot plant (e.g., Tradescantia or Petunia).",
              "Fold the leaf and gently tear it to peel off a thin, transparent layer of the lower epidermis.",
              "Place the epidermal peel in a watch glass containing water.",
              "Transfer the peel onto a clean glass slide using a brush.",
              "Add a drop of Safranin stain to the peel and let it sit for a minute.",
              "Wash off the excess stain with a drop of water and add a drop of glycerine.",
              "Carefully cover it with a coverslip, avoiding air bubbles.",
              "Observe under a microscope, count the number of stomata in the field of view, and repeat the process for the upper epidermis to compare distribution."
            ],
              objectives: ["Calculate stomatal index."],
              realWorldApplications: ["Agriculture", "Climate Change", "Pollution Monitoring"],
              observationTable: { columns: ["Surface", "No. of Stomata (Field 1)", "No. of Stomata (Field 2)", "Average"] },
              assignments: [
                  { id: 1, question: "Calculate the Stomatal Index if the number of stomata is 25 and number of epidermal cells is 100 in the field of view.", marks: 3 },
                  { id: 2, question: "Draw a labeled diagram of an open and closed stoma.", marks: 5 },
                  { id: 3, question: "Explain the mechanism of opening and closing of stomata (K+ ion theory).", marks: 5 },
                  { id: 4, question: "Differentiate between the leaves of Monocots and Dicots with respect to stomatal distribution.", marks: 4 },
                  { id: 5, question: "What factors affect the rate of transpiration?", marks: 3 }
              ],
              vivaQuestions: [
                  { question: "What is the function of stomata?", answer: "Gas exchange and transpiration." },
                  { question: "What are guard cells?", answer: "Kidney-shaped cells surrounding the stoma that control opening/closing." },
                  { question: "Why are stomata fewer on upper surface?", answer: "To prevent excessive water loss from direct sunlight." },
                  { question: "Shape of guard cells in monocots?", answer: "Dumb-bell shaped." },
                  { question: "Shape of guard cells in dicots?", answer: "Kidney/Bean shaped." },
                  { question: "What causes stomata to open?", answer: "Turgidity of guard cells." },
                  { question: "What is transpiration pull?", answer: "Suction force pulling water up the xylem." },
                  { question: "Which hormone closes stomata?", answer: "Abscisic Acid (ABA)." },
                  { question: "What is Stomatal Index?", answer: "(No. of Stomata / (No. of Stomata + No. of Epidermal cells)) x 100." },
                  { question: "Role of K+ ions?", answer: "Influx of K+ ions causes stomatal opening." }
              ],
              quizQuestions: [
                  { id: 1, question: "In dicots, guard cells are:", options: ["Dumbbell shaped", "Kidney shaped", "Rectangular", "Irregular"], correctIndex: 1 },
                  { id: 2, question: "Stomata open when guard cells are:", options: ["Flaccid", "Turgid", "Plasmolysed", "Dead"], correctIndex: 1 },
                  { id: 3, question: "Transpiration is:", options: ["Loss of water as vapor", "Loss of water as liquid", "Absorption of water", "Photosynthesis"], correctIndex: 0 },
                  { id: 4, question: "Maximum transpiration occurs through:", options: ["Cuticle", "Lenticels", "Stomata", "Bark"], correctIndex: 2 },
                  { id: 5, question: "Dorsiventral leaves are found in:", options: ["Monocots", "Dicots", "Gymnosperms", "Algae"], correctIndex: 1 },
                  { id: 6, question: "Isobilateral leaves have stomata:", options: ["More on upper", "More on lower", "Equal on both", "None"], correctIndex: 2 },
                  { id: 7, question: "Guttation occurs through:", options: ["Stomata", "Hydathodes", "Lenticels", "Cuticle"], correctIndex: 1 },
                  { id: 8, question: "Potometer measures:", options: ["Photosynthesis", "Respiration", "Transpiration", "Growth"], correctIndex: 2 },
                  { id: 9, question: "Sunken stomata are found in:", options: ["Hydrophytes", "Xerophytes", "Mesophytes", "Epiphytes"], correctIndex: 1 },
                  { id: 10, question: "Subsidiary cells surround:", options: ["Root hair", "Guard cells", "Xylem", "Phloem"], correctIndex: 1 }
              ]
          }
      },
      {
          id: 'b3',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'],
          title: 'Osmosis (Potato)',
          description: 'Demonstrate osmosis using potato osmometer.',
          difficulty: 'Easy',
          duration: '45 min',
          category: 'Cell Physiology',
          content: {
              videoId: "eZsUv-9qYEQ",
              aim: "To demonstrate osmosis using a potato osmometer.",
              requirements: ["Large Potato", "Sugar solution", "Pin", "Beaker", "Water"],
              theory: "Osmosis is the spontaneous movement of solvent molecules from a region of lower solute concentration to higher solute concentration through a semipermeable membrane.\n\n**Types of Solutions:**\n1. **Hypertonic:** Water moves out of cell → plasmolysis/crenation.\n2. **Hypotonic:** Water moves into cell → turgidity/lysis.\n3. **Isotonic:** No net water movement.\n\n**Osmotic Pressure:** π = iCRT (Van't Hoff equation).\n\n**Potato Osmometer:** A potato cavity filled with sugar solution, placed in water — water enters by osmosis, level rises.\n\n**Significance:** Water absorption by roots, cell-to-cell water movement, turgidity maintenance, stomatal regulation.",
              procedure: [
              "Take a large, fresh potato tuber and peel off its outer skin.",
              "Cut one end flat so it can stand upright, and scoop out a deep cavity from the other end to make a potato osmoscope.",
              "Fill the cavity half-full with a 20% concentrated sugar solution.",
              "Mark the initial level of the sugar solution inside the cavity by inserting a common pin.",
              "Place the potato osmoscope in a beaker containing pure water, ensuring the water level outside is lower than the pin mark inside.",
              "Leave the setup undisturbed for 2 hours.",
              "Observe the level of the sugar solution inside the cavity after the designated time.",
              "The rise in the liquid level inside the potato cavity indicates endosmosis."
            ],
              objectives: ["Understand hypotonic/hypertonic solutions."],
              realWorldApplications: ["Dialysis", "Food Preservation", "Water Purification", "Root Absorption"],
              observationTable: { columns: ["Time (min)", "Initial Level", "Final Level", "Change"] },
              assignments: [
                  { id: 1, question: "Define Osmosis. How is it different from Diffusion?", marks: 4 },
                  { id: 2, question: "What happens to the potato cells in this experiment? Explain using the concept of Hypertonic/Hypotonic solutions.", marks: 5 },
                  { id: 3, question: "What is Plasmolysis? Draw a diagram of a plasmolysed plant cell.", marks: 4 },
                  { id: 4, question: "Why is the initial level marked in the potato osmometer? What would happen if the potato was boiled?", marks: 3 },
                  { id: 5, question: "Explain the importance of osmosis in absorption of water by roots.", marks: 4 }
              ],
              vivaQuestions: [
                  { question: "What acts as the semi-permeable membrane?", answer: "The potato cell membranes." },
                  { question: "Why does the level rise?", answer: "Water moves from beaker (hypotonic) to cavity (hypertonic)." },
                  { question: "What if we boil the potato?", answer: "Osmosis stops because cells die and membrane loses semi-permeability." },
                  { question: "Define Osmosis.", answer: "Movement of solvent from low solute conc. to high solute conc. via SPM." },
                  { question: "What is a hypertonic solution?", answer: "Solution with higher solute concentration." },
                  { question: "What is a hypotonic solution?", answer: "Solution with lower solute concentration." },
                  { question: "What is Isotonic?", answer: "Solutions with equal concentration." },
                  { question: "What is turgor pressure?", answer: "Pressure exerted by cell contents against cell wall." },
                  { question: "Reverse osmosis is used for?", answer: "Water purification." },
                  { question: "Why peel the potato?", answer: "To expose the cells directly to the water." }
              ],
              quizQuestions: [
                  { id: 1, question: "Movement of water molecules is from:", options: ["High conc to Low conc", "Low conc to High conc", "No movement", "Random"], correctIndex: 0 },
                  { id: 2, question: "Solution with higher solute concentration is:", options: ["Hypotonic", "Isotonic", "Hypertonic", "Dilute"], correctIndex: 2 },
                  { id: 3, question: "Plant cell in hypertonic solution undergoes:", options: ["Turgidity", "Plasmolysis", "Deplasmolysis", "Swelling"], correctIndex: 1 },
                  { id: 4, question: "Semi-permeable membrane allows passage of:", options: ["Solute only", "Solvent only", "Both", "None"], correctIndex: 1 },
                  { id: 5, question: "Osmosis is a special type of:", options: ["Diffusion", "Active Transport", "Imbibition", "Transpiration"], correctIndex: 0 },
                  { id: 6, question: "Endosmosis causes cells to:", options: ["Shrink", "Swell", "Die", "Divide"], correctIndex: 1 },
                  { id: 7, question: "Plasmolysis occurs due to:", options: ["Exosmosis", "Endosmosis", "Imbibition", "Adsorption"], correctIndex: 0 },
                  { id: 8, question: "Water potential of pure water is:", options: ["Zero", "1", "-1", "100"], correctIndex: 0 },
                  { id: 9, question: "Solute potential is always:", options: ["Positive", "Negative", "Zero", "Variable"], correctIndex: 1 },
                  { id: 10, question: "Raisins swell in water due to:", options: ["Endosmosis", "Exosmosis", "Plasmolysis", "Diffusion"], correctIndex: 0 }
              ]
          }
      },
      {
          id: 'b4',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'],
          title: 'Test for Sugar in Urine',
          description: 'Detect glucose using Benedict\'s Reagent.',
          difficulty: 'Medium',
          duration: '30 min',
          category: 'Physiology',
          content: {
              videoId: "M_wZ9XQ7v_I",
              aim: "To detect the presence of sugar (glucose) in a given urine sample.",
              requirements: ["Urine sample", "Benedict's Reagent", "Test tube", "Bunsen Burner"],
              theory: "Diabetes mellitus is a metabolic disorder with chronic hyperglycemia due to defective insulin secretion or action.\n\n**Normal:** Insulin from β-cells of pancreas facilitates glucose uptake. Kidneys reabsorb glucose below the renal threshold (≈180 mg/dL).\n\n**In Diabetes:** Blood glucose exceeds renal threshold → glycosuria (glucose in urine).\n\n**Benedict's Test:** CuSO₄ in the reagent is reduced by glucose:\n- Blue (negative) → Green (trace, 0.1-0.5%) → Yellow/orange (moderate, 0.5-1.5%) → Brick-red (high, >2%).\n\n**Principle:** Glucose (a reducing sugar) reduces Cu²⁺ (blue) to Cu₂O (colored precipitate). Color and quantity indicate glucose concentration.\n\n**Modern diagnosis:** Fasting blood glucose (normal: 70-110 mg/dL) or HbA1c tests.",
              procedure: [
              "Take 2 mL of Benedict\'s reagent in a clean test tube.",
              "Heat the reagent gently over a spirit lamp to ensure it does not change color (remains blue).",
              "Add 8-10 drops of the given urine sample to the warm Benedict\'s reagent.",
              "Boil the mixture carefully for 2 minutes.",
              "Allow the test tube to cool gradually.",
              "Observe the color change: Blue indicates absence of sugar, green/yellow indicates traces/moderate sugar, and brick-red precipitate indicates high sugar content (glycosuria)."
            ],
              objectives: ["Clinical diagnosis basics."],
              realWorldApplications: ["Medical Diagnostics", "Sports Medicine", "Food Science", "Pregnancy"],
              observationTable: { columns: ["Sample", "Test Performed", "Observation", "Inference"] },
              assignments: [
                  { id: 1, question: "What is the principle behind Benedict's Test? Which functional group is responsible for the reaction?", marks: 4 },
                  { id: 2, question: "List the colors observed in Benedict's test corresponding to different sugar concentrations.", marks: 4 },
                  { id: 3, question: "What is Glucosuria? Name the condition associated with high levels of glucose in urine.", marks: 3 },
                  { id: 4, question: "Differentiate between Diabetes Mellitus and Diabetes Insipidus.", marks: 4 },
                  { id: 5, question: "Why is sucrose called a non-reducing sugar? Does it give a positive Benedict's test?", marks: 3 }
              ],
              vivaQuestions: [
                  { question: "What is Glucosuria?", answer: "Presence of glucose in urine." },
                  { question: "Color of Benedict's reagent?", answer: "Blue." },
                  { question: "What indicates high sugar?", answer: "Brick Red precipitate." },
                  { question: "Is sucrose a reducing sugar?", answer: "No." },
                  { question: "Normal blood glucose level?", answer: "70-100 mg/dL (Fasting)." }
              ],
              quizQuestions: [
                  { id: 1, question: "Benedict's test detects:", options: ["Protein", "Starch", "Reducing Sugar", "Fat"], correctIndex: 2 },
                  { id: 2, question: "Brick red precipitate is:", options: ["CuO", "Cu2O", "CuSO4", "Cu(OH)2"], correctIndex: 1 },
                  { id: 3, question: "Diabetes mellitus is caused by deficiency of:", options: ["Glucagon", "Insulin", "Thyroxin", "Adrenaline"], correctIndex: 1 },
                  { id: 4, question: "Green color indicates:", options: ["No sugar", "Trace sugar", "High sugar", "Protein"], correctIndex: 1 },
                  { id: 5, question: "Fehling's test also detects:", options: ["Starch", "Lipids", "Reducing Sugars", "Proteins"], correctIndex: 2 }
              ]
          }
      },
      {
          id: 'b5',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'],
          title: 'Paper Chromatography',
          description: 'Separate plant pigments.',
          difficulty: 'Hard',
          duration: '60 min',
          category: 'Biochemistry',
          content: {
              videoId: "SnbXpZ_k6c0",
              aim: "To separate plant pigments using paper chromatography.",
              requirements: ["Spinach leaves", "Acetone", "Chromatography paper", "Jar"],
              theory: "Paper chromatography separates mixture components based on their differential migration over filter paper.\n\n**Principle:** Stationary phase = water trapped in cellulose fibers. Mobile phase = solvent moving by capillary action. Components separate based on their partition coefficients.\n\n**Rf Value:** Rf = Distance traveled by solute / Distance traveled by solvent front. Characteristic for each substance under specific conditions.\n\n**Plant Pigment Separation:** Chlorophyll a (blue-green, ≈0.45), Chlorophyll b (yellow-green, ≈0.35), Xanthophyll (yellow, ≈0.28), Carotenoids (orange-yellow, ≈0.95).\n\n**Solvent System:** Petroleum ether and acetone (9:1).\n\n**Types:** Ascending, Descending, and Circular chromatography.",
              procedure: [
              "Take a rectangular strip of Whatman filter paper (about 20 cm x 5 cm).",
              "Draw a horizontal pencil line about 2 cm from one end of the strip.",
              "Crush spinach or grass leaves in a mortar with a little acetone to extract the plant pigments.",
              "Using a capillary tube, place a small drop of the pigment extract at the center of the pencil line. Let it dry and repeat to concentrate the spot.",
              "Suspend the paper strip in a chromatography jar containing the solvent mixture (e.g., petroleum ether and acetone in 9:1 ratio).",
              "Ensure the origin line is just above the solvent level. Cover the jar tightly.",
              "Allow the solvent to rise up the paper via capillary action until it reaches near the top.",
              "Remove the paper, mark the solvent front, and observe the separated pigment bands (Carotene, Xanthophyll, Chlorophyll a, Chlorophyll b)."
            ],
              objectives: ["Calculate Rf value."],
              realWorldApplications: ["Forensic Science", "Drug Testing", "Vaccine Manufacturing", "Environmental Safety"],
              observationTable: { columns: ["Pigment Color", "Dist Solute", "Dist Solvent", "Rf Value"] },
              assignments: [
                  { id: 1, question: "Define Rf value. Why is it always less than 1?", marks: 3 },
                  { id: 2, question: "Explain the principle of Paper Chromatography (Partition Chromatography).", marks: 5 },
                  { id: 3, question: "List the pigments usually separated from spinach leaves along with their colors.", marks: 4 },
                  { id: 4, question: "Why should the spotting line be drawn with a pencil and not a pen?", marks: 3 },
                  { id: 5, question: "Give three applications of chromatography in real life.", marks: 3 }
              ],
              vivaQuestions: [
                  { question: "What is Rf value?", answer: "Distance traveled by solute / Distance by solvent." },
                  { question: "Stationary phase here is?", answer: "Water molecules trapped in cellulose." },
                  { question: "Mobile phase is?", answer: "Solvent (Ether/Acetone)." },
                  { question: "Most soluble pigment?", answer: "Carotene (travels furthest)." },
                  { question: "Color of Chlorophyll a?", answer: "Blue-Green." }
              ],
              quizQuestions: [
                  { id: 1, question: "Rf value is always:", options: ["> 1", "< 1", "= 1", "Zero"], correctIndex: 1 },
                  { id: 2, question: "Chlorophyll b is:", options: ["Blue Green", "Yellow Green", "Orange", "Red"], correctIndex: 1 },
                  { id: 3, question: "Technique based on:", options: ["Adsorption/Partition", "Evaporation", "Filtration", "Sedimentation"], correctIndex: 0 },
                  { id: 4, question: "Carotenes appear:", options: ["Green", "Yellow-Orange", "Blue", "Red"], correctIndex: 1 },
                  { id: 5, question: "Solvent front is:", options: ["Starting line", "Max distance by solvent", "Max distance by solute", "Bottom edge"], correctIndex: 1 }
              ]
          }
      }
,
      {
          id: 'b6',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Pollen Germination', description: 'Study pollen tube growth on stigma.', difficulty: 'Medium', duration: '30 min', category: 'Reproduction',          content: { aim: "To study pollen germination on a slide.", requirements: ["Pollen grains", "Sugar solution", "Slides", "Microscope"], theory: "Pollen grains germinate on sugar solution. Tube carries male gametes to ovule.", procedure: [
              "Prepare a nutrient solution by dissolving 10g sucrose, 10mg boric acid, 30mg calcium nitrate, 20mg magnesium sulphate, and 10mg potassium nitrate in 100 mL of distilled water.",
              "Take a clean glass slide with a central depression (cavity slide) or a normal slide.",
              "Place 2-3 drops of the prepared nutrient solution on the slide.",
              "Dust some pollen grains from a mature anther (e.g., Hibiscus or Vinca) over the drops.",
              "Keep the slide in a moist chamber (a petri dish covered with a wet filter paper) to prevent drying.",
              "Observe the slide under the low power of a microscope after 15 to 30 minutes.",
              "Look for pollen tubes emerging from the pollen grains, indicating successful germination in vitro."
            ], objectives: ["Understand plant reproduction."] }
      },
      {
          id: 'b7',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'DNA Isolation', description: 'Extract DNA from plant material.', difficulty: 'Medium', duration: '40 min', category: 'Genetics',          content: { aim: "To isolate DNA from plant material.", requirements: ["Spinach/Peas", "Detergent", "Salt", "Ethanol"], theory: "Detergent lyses membranes, salt precipitates proteins, ethanol precipitates DNA.", procedure: [
              "Take about 50g of plant material (e.g., ripe banana or papaya) and mash it thoroughly in a mortar and pestle.",
              "Add a mixture of 10 mL liquid dish soap (to break down lipid membranes) and 1g salt (to shield DNA phosphate groups) to the mashed paste.",
              "Stir gently to mix, then let it sit for 10-15 minutes.",
              "Filter the mixture through a muslin cloth or strainer into a clean beaker to obtain a clear filtrate.",
              "Add 1-2 drops of enzyme (e.g., meat tenderizer or pineapple juice) to degrade proteins associated with DNA.",
              "Slowly pour chilled ethanol (or isopropyl alcohol) down the side of the beaker so it forms a distinct layer on top of the filtrate.",
              "Do not shake. Wait for a few minutes and observe fine, white, thread-like structures indicating DNA precipitating at the interface.",
              "Spool the DNA out using a glass rod by twirling it gently."
            ], objectives: ["Understand DNA extraction."] }
      },
      {
          id: 'b8',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Mendelian Inheritance', description: 'Simulate inheritance ratios using beads.', difficulty: 'Easy', duration: '25 min', category: 'Genetics',          content: { aim: "To study Mendelian inheritance using bead simulation.", requirements: ["Colored Beads", "Bags", "Data Sheet"], theory: "Mendel's laws: Dominance, Segregation, Independent Assortment. F2 ratio 3:1.", procedure: [
              "Collect a sample of given seeds (e.g., pea seeds or plastic beads representing them) showing two contrast traits (e.g., Yellow/Green or Round/Wrinkled).",
              "Count the total number of seeds available in the provided sample.",
              "Separate the seeds based on the selected dominant and recessive traits.",
              "Count the exact number of seeds for each specific phenotype.",
              "Calculate the ratio of dominant to recessive phenotypes observed in the sample.",
              "Compare the observed ratio with standard Mendelian expected ratios (e.g., 3:1 for monohybrid cross, 9:3:3:1 for dihybrid cross).",
              "Note down any deviations and discuss statistical significance."
            ], objectives: ["Verify Mendel's laws."] }
      },
      {
          id: 'b9',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Pedigree Chart Analysis', description: 'Analyze inheritance patterns.', difficulty: 'Medium', duration: '25 min', category: 'Genetics',          content: { aim: "To study and analyze pedigree charts.", requirements: ["Pedigree Charts", "Colored Pens"], theory: "Pedigree charts trace inheritance. Squares=male, circles=female, filled=affected.", procedure: [
              "Carefully observe the provided pedigree chart for a specific genetic trait in a family.",
              "Note the symbols: squares represent males, circles represent females, shaded symbols show affected individuals.",
              "Determine if the trait is passed directly from parent to offspring in every generation (suggests dominant trait).",
              "Check if unaffected parents have affected offspring (suggests recessive trait).",
              "Analyze the ratio of affected males to affected females. Higher prevalence in males suggests X-linked recessive inheritance.",
              "Trace the inheritance pattern specifically from fathers to daughters and mothers to sons to confirm X-linked traits.",
              "Conclude the likely mode of inheritance (Autosomal dominant/recessive, X-linked dominant/recessive) based on the observations."
            ], objectives: ["Interpret genetic inheritance."] }
      },
      {
          id: 'b10',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Plant Population Density', description: 'Study density using quadrat method.', difficulty: 'Easy', duration: '30 min', category: 'Ecology',          content: { aim: "To study plant population density by quadrat method.", requirements: ["Quadrat", "Measuring Tape", "Data Sheet"], theory: "Throw frame randomly, count individuals. Density = count / area.", procedure: [
              "Select a designated study area measuring a specific dimension (e.g., a lawn or field).",
              "Prepare a quadrat (a square frame of known area, e.g., 1m x 1m) made of wood or PVC pipes.",
              "Randomly throw or place the quadrat in different locations within the study area.",
              "Identify a specific plant species to study (e.g., a weed like Parthenium or grasses).",
              "Count the number of individuals of the chosen plant species inside each quadrat placement.",
              "Record the data for at least 10 different random quadrat tosses.",
              "Calculate the total number of individuals counted across all quadrats.",
              "Calculate the Population Density = (Total number of individuals) / (Total number of quadrats studied)."
            ], objectives: ["Understand ecological sampling."] }
      },
      {
          id: 'b11',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Plasmolysis', description: 'Observe plasmolysis in Rhoeo epidermal cells.', difficulty: 'Easy', duration: '20 min', category: 'Cell Biology',          content: { aim: "To study plasmolysis in epidermal peel.", requirements: ["Rhoeo leaves", "Sucrose solution", "Microscope"], theory: "In hypertonic solution, water leaves cell, membrane shrinks from wall = plasmolysis.", procedure: [
              "Take a fresh leaf of Rhoeo or Tradescantia and cleanly peel off the lower epidermis.",
              "Cut the peel into two small pieces and place them in two separate watch glasses.",
              "Add pure water to the first watch glass (control) and a 10% concentrated sugar or salt solution to the second watch glass.",
              "Leave both peels undisturbed for about 10-15 minutes.",
              "Mount the peel from the water on a glass slide, cover with a coverslip, and observe under the microscope. The cells will appear turgid.",
              "Mount the peel from the sugar/salt solution on another slide and observe.",
              "Notice that the cell membrane has shrunk and pulled away from the cell wall in the second slide.",
              "This shrinkage of the protoplast due to exosmosis is called plasmolysis."
            ], objectives: ["Understand osmotic behavior."] }
      },
      {
          id: 'b12',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Urine Analysis', description: 'Test for sugar and albumin in urine.', difficulty: 'Easy', duration: '20 min', category: 'Physiology',          content: { aim: "To test for sugar and albumin in urine.", requirements: ["Urine sample", "Benedicts reagent", "Nitric acid"], theory: "Sugar: Benedicts test (green/orange). Albumin: HNO3 (white ppt).", procedure: [
              "Procure normal urine sample and abnormal urine samples for testing.",
              "Test for Albumin: Fill a test tube 1/3 with urine and boil the upper portion. A white cloudiness that doesn\'t disappear on adding acetic acid indicates albumin.",
              "Test for Urea: Add 2 mL of urine to sodium hypobromite solution. Vigorous effervescence of nitrogen gas indicates urea.",
              "Test for Bile Salts: Sprinkle finely powdered sulphur on the surface of 5 mL urine in a test tube. If the sulphur sinks, bile salts are present.",
              "Test for Sugar: Perform Benedict\'s Test as described in Ex b4.",
              "Record the presence or absence of these organic compounds to analyze the metabolic health state."
            ], objectives: ["Clinical biochemistry."] }
      },
      {
          id: 'b13',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'T.S. of Testis and Ovary', description: 'Identify stages of gamete development.', difficulty: 'Medium', duration: '20 min', category: 'Reproduction',          content: { aim: "To study T.S. of testis and ovary through permanent slides to identify stages of gamete development.", requirements: ["Permanent slides of mammalian testis and ovary", "Compound microscope"], theory: "The testis is the male reproductive organ responsible for sperm production (spermatogenesis). The ovary is the female reproductive organ responsible for egg production (oogenesis). Cross sections reveal the sequential developmental stages from germ cells to mature gametes.", procedure: [
              "Obtain a permanent slide of the Transverse Section (T.S.) of a mammalian testis.",
              "Observe under low power first. Notice the circular/oval seminiferous tubules surrounded by interstitial connective tissue.",
              "Observe under high power to identify different stages of spermatogenesis from periphery to the lumen: spermatogonia, primary spermatocytes, secondary spermatocytes, spermatids, and spermatozoa.",
              "Identify the pyramidal-shaped Sertoli cells which provide nourishment.",
              "Identify the Leydig cells (interstitial cells) located between the tubules.",
              "Next, obtain a permanent slide of the T.S. of a mammalian ovary.",
              "Observe under low power to differentiate the outer cortex and inner medulla.",
              "In the cortex, identify different stages of ovarian follicles: primary follicle, secondary follicle, and mature Graafian follicle.",
              "Locate the oocyte within the Graafian follicle, and look for the corpus luteum (if present), the yellow glandular mass formed after ovulation."
            ], objectives: ["Understand gametogenesis in mammals.", "Identify microscopic mammalian structures."],
            realWorldApplications: ["Fertility analysis.", "Reproductive medicine and IVF.", "Endocrinology."],
            observationTable: { columns: ["Slide Observed", "Key Features Seen", "Inference"] },
            assignments: [
                { id: 1, question: "Differentiate between spermatogenesis and oogenesis based on your microscopic observations.", marks: 5 },
                { id: 2, question: "What is the role of Leydig cells and Sertoli cells in the testis?", marks: 4 }
            ], vivaQuestions: [
                { question: "Where are the sperms produced?", answer: "In the seminiferous tubules of the testis." },
                { question: "Which mature follicle releases the egg?", answer: "The Graafian follicle." }
            ], quizQuestions: [
                { id: 1, question: "Nourishment to developing sperm cells is provided by:", options: ["Leydig cells", "Sertoli cells", "Spermatogonia", "Spermatids"], correctIndex: 1 }
            ]
          }
      },
      {
          id: 'b14',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Meiosis in Onion Bud', description: 'Observe stages of meiosis in floral buds.', difficulty: 'Hard', duration: '40 min', category: 'Cell Biology',          content: { aim: "To study meiosis in onion bud cells or grasshopper testis through preparation of temporary mounts.", requirements: ["Onion floral buds", "Fixative (Carnoy's fluid)", "Acetocarmine stain", "Slide", "Coverslip", "Microscope", "Needle"], theory: "Meiosis is a reductional division occurring in germ cells to produce haploid gametes. It involves two sequential cycles of nuclear division (Meiosis I and Meiosis II). The most complex and prolonged phase is Prophase I, categorized into Leptotene, Zygotene, Pachytene, Diplotene, and Diakinesis.", procedure: [
              "Collect appropriately sized onion flower buds in the early morning.",
              "Fix the buds in Carnoy's fluid (acetic acid : ethanol = 1:3 ratio) for 24 hours, then store in 70% ethanol.",
              "Transfer a fixed bud to a watch glass and dissect it to isolate an anther.",
              "Place the anther on a clean glass slide and add a drop of Acetocarmine stain.",
              "Crush the anther gently using a glass rod or needle to release the pollen mother cells (PMCs).",
              "Remove any macroscopic debris with the needle.",
              "Place a coverslip over the drop and gently warm the slide over a spirit lamp for a few seconds (do not boil).",
              "Place the slide within a fold of filter paper and apply firm, even pressure over the coverslip with your thumb to squash the cells and spread the chromosomes.",
              "Observe under the microscope (low power, then high power) to identify the various meiotic stages such as homologous chromosome pairing (Zygotene), crossing over (Pachytene), or chiasmata formation (Diplotene)."
            ], objectives: ["Differentiate meiotic stages.", "Understand chromosomal crossing over."],
            realWorldApplications: ["Genetics research.", "Plant breeding.", "Understanding genetic disorders (nondisjunction)."],
            observationTable: { columns: ["Meiotic Phase", "Key Chromosomal Activity Observed"] },
            assignments: [
                { id: 1, question: "Explain the events of Prophase I in detail.", marks: 5 },
                { id: 2, question: "Why is meiosis called a reductional division?", marks: 3 }
            ], vivaQuestions: [
                { question: "In which stage of Prophase I does crossing over occur?", answer: "Pachytene." },
                { question: "What are the cells dividing meiotically in the anther called?", answer: "Pollen Mother Cells (PMCs) or Microspore Mother Cells." }
            ], quizQuestions: [
                { id: 1, question: "Crossing over results in:", options: ["Cell death", "Genetic recombination", "Polyploidy", "Mutation"], correctIndex: 1 }
            ]
          }
      },
      {
          id: 'b15',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Pollination Adaptations', description: 'Study flowers adapted to different pollination agencies.', difficulty: 'Easy', duration: '20 min', category: 'Ecology',          content: { aim: "To study flowers adapted to pollination by different agencies (wind, insects, birds).", requirements: ["Fresh flowers from different plant species (e.g. Maize, Salvia, Bougainvillea)", "Hand lens", "Forceps", "Microscope"], theory: "Pollination is the transfer of pollen grains from the anther to the stigma. Plants have evolved specific floral characteristics (syndromes) to attract vector agencies. Anemophily (wind pollination), Entomophily (insect pollination), and Ornithophily (bird pollination) are common.", procedure: [
              "Examine the provided fresh flowers one by one.",
              "Study an Insect-pollinated flower (e.g., Rose, Salvia, or Hibiscus). Observe the large, brightly colored petals. Note the presence of nectar and scent. Examine the pollen grains under a microscope to see if they are sticky or spiky. Note that stigmas are often sticky and inserted within the corolla tube.",
              "Observe the lever mechanism in Salvia if available.",
              "Study a Wind-pollinated flower (e.g., Maize, Wheat, or Grasses). Observe that flowers are small, inconspicuous, and lack bright colors or nectar. Note the large quantity of light, smooth, non-sticky pollen pollen grains. Observe the feathery, exposed stigmas designed to catch wind-borne pollen.",
              "Study a Bird-pollinated flower (e.g., Bignonia or Bougainvillea). Observe the tubular, brightly colored (often red/orange) flowers with abundant, watery nectar and lack of strong scent (as birds have a poor sense of smell).",
              "Record the morphological adaptations correlated with the pollination mode."
            ], objectives: ["Relate floral morphology to reproductive ecology.", "Identify pollination syndromes."],
            realWorldApplications: ["Agriculture and crop yield optimization.", "Conservation biology and understanding pollinator decline."],
            observationTable: { columns: ["Plant Name", "Adaptations Observed", "Pollinating Agency"] },
            assignments: [
                { id: 1, question: "List three characteristics of wind-pollinated flowers.", marks: 3 },
                { id: 2, question: "Explain the lever mechanism of pollination in Salvia.", marks: 4 }
            ], vivaQuestions: [
                { question: "What is entomophily?", answer: "Pollination by insects." },
                { question: "Why do wind-pollinated plants produce massive amounts of pollen?", answer: "To compensate for the large random loss of pollen during wind transport." }
            ], quizQuestions: [
                { id: 1, question: "Feathery stigmas are a characteristic of which type of pollination?", options: ["Insect", "Wind", "Water", "Bat"], correctIndex: 1 }
            ]
          }
      },
        {
                "id": "b13",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Compound Microscope",
                "description": "Parts and working of a compound microscope.",
                "difficulty": "Easy",
                "duration": "30 min",
                "category": "Microscopy",
                "content": {
                        "aim": "To study the parts and working of a compound microscope.",
                        "requirements": [
                                "Compound Microscope",
                                "Prepared slide",
                                "Lens cleaning tissue"
                        ],
                        "theory": "A compound microscope uses a system of multiple lenses (objective and eyepiece) to achieve high magnification of minute transparent objects.",
                        "procedure": [
                                "Identify the mechanical parts: base, pillar, inclination joint, arm, stage, body tube, coarse and fine adjustment knobs.",
                                "Identify the optical parts: mirror, condenser, objective lenses (low and high power), and eyepiece.",
                                "Place the microscope where there is sufficient indirect light.",
                                "Adjust the mirror (concave side) while looking through the eyepiece to illuminate the field of view brightly.",
                                "Place a prepared slide on the stage and secure it with the clips.",
                                "Use the coarse adjustment knob to focus the object under low power.",
                                "Carefully switch to high power and use only the fine adjustment knob to bring the image into sharp focus."
                        ],
                        "objectives": [
                                "Proper handling of microscopes.",
                                "Understand simple optics."
                        ]
                }
        },
        {
                "id": "b14",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11",
                        "2nd PUC / Class 12"
                ],
                "title": "Specimen Identification",
                "description": "Identify common plant and animal specimens/slides.",
                "difficulty": "Medium",
                "duration": "60 min",
                "category": "Taxonomy",
                "content": {
                        "aim": "To identify and study various given specimens and prepared slides for spotting.",
                        "requirements": [
                                "Preserved specimens (e.g. Earthworm, Frog, Starfish)",
                                "Prepared slides (e.g. Amoeba, T.S. of Dicot Stem)",
                                "Microscope"
                        ],
                        "theory": "Spotting involves careful observation of identifying morphological or anatomical features to classify an organism into its correct phylum and class.",
                        "procedure": [
                                "Observe each specimen/slide one by one for exactly 2 to 3 minutes.",
                                "Note the macroscopic or microscopic distinct characteristics.",
                                "Draw a neat, well-labeled diagram of the observed specimen.",
                                "Identify the specimen and write its systematic position (classification).",
                                "List at least two key characteristic features that justify the identification."
                        ],
                        "objectives": [
                                "Improve observation skills.",
                                "Learn animal/plant taxonomy."
                        ]
                }
        },
        {
                "id": "b15",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Ganong's Potometer",
                "description": "Measure the rate of transpiration.",
                "difficulty": "Hard",
                "duration": "45 min",
                "category": "Plant Physiology",
                "content": {
                        "aim": "To study the rate of transpiration in a leafy shoot using Ganong's potometer.",
                        "requirements": [
                                "Ganong's potometer",
                                "Freshly cut leafy shoot",
                                "Water",
                                "Vaseline",
                                "Stopwatch",
                                "Beaker"
                        ],
                        "theory": "Transpiration is the loss of water in the form of vapor from the aerial parts of a plant. A potometer effectively measures the rate of water uptake, which is almost equal to the rate of transpiration.",
                        "procedure": [
                                "Fill the potometer completely with water, ensuring no air bubbles are trapped.",
                                "Cut a fresh leafy shoot under water to prevent air locking in the xylem.",
                                "Fit the shoot into the rubber cork hole of the potometer tightly.",
                                "Seal all joints with vaseline to make the apparatus completely airtight.",
                                "Introduce a single air bubble into the capillary tube by lifting its bent end out of the water colored with eosin dye.",
                                "Record the initial position of the air bubble on the graduated scale.",
                                "Note the position of the bubble at regular intervals (e.g., every 5 minutes) as it moves along the scale.",
                                "Calculate the rate of transpiration per unit time."
                        ],
                        "objectives": [
                                "Understand water pull mechanism.",
                                "Measure physiological rates."
                        ]
                }
        },
        {
                "id": "b16",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Respiration in Seeds",
                "description": "Demonstrate anaerobic or aerobic respiration in germinating seeds.",
                "difficulty": "Medium",
                "duration": "40 min",
                "category": "Plant Physiology",
                "content": {
                        "aim": "To demonstrate that CO2 is released during aerobic respiration by germinating seeds.",
                        "requirements": [
                                "Conical flask",
                                "Germinating gram seeds",
                                "Small test tube",
                                "KOH solution",
                                "Delivery tube",
                                "Beaker containing water",
                                "Rubber corks"
                        ],
                        "theory": "Respiration is the metabolic process where organic substances are broken down to release energy. Germinating seeds respire actively, consuming O2 and releasing CO2. KOH absorbs the released CO2, creating a partial vacuum.",
                        "procedure": [
                                "Place about 20-30 germinating gram seeds in a conical flask.",
                                "Suspend a small test tube containing 20% concentrated KOH solution inside the flask using a thread.",
                                "Close the flask tightly with a one-holed rubber cork fitted with a bent glass delivery tube.",
                                "Submerge the free end of the delivery tube into a beaker containing colored water.",
                                "Ensure all joints are airtight using vaseline.",
                                "Leave the setup undisturbed for an hour.",
                                "Observe the rise of the colored water level in the delivery tube. The rise indicates that CO2 evolved was absorbed by KOH, reducing the pressure inside the flask."
                        ],
                        "objectives": [
                                "Confirm byproducts of respiration.",
                                "Demonstrate gas exchange."
                        ]
                }
        },
        {
                "id": "b17",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Salivary Amylase Action",
                "description": "Study the effect of temperature and pH on salivary amylase.",
                "difficulty": "Medium",
                "duration": "45 min",
                "category": "Biochemistry",
                "content": {
                        "aim": "To study the action of salivary amylase on starch and the effect of temperature on it.",
                        "requirements": [
                                "Test tubes",
                                "Starch solution (1%)",
                                "Saliva collection beaker",
                                "Iodine solution",
                                "Water bath",
                                "Thermometer",
                                "Spotting plate"
                        ],
                        "theory": "Salivary amylase (ptyalin) is an enzyme that digests starch into maltose. Its activity is maximum at the optimum human body temperature (37°C) and optimum pH (6.8). High temperatures denature it.",
                        "procedure": [
                                "Rinse your mouth and collect about 2-3 mL of saliva in a beaker. Dilute it with 20 mL of distilled water to make a saliva solution.",
                                "Take three identical test tubes and label them A, B, and C.",
                                "Add 5 mL of 1% starch solution to each test tube.",
                                "Place test tube A in ice (5°C), B in a water bath at 37°C, and C in boiling water (100°C) for 10 minutes.",
                                "Add 1 mL of the diluted saliva solution to each test tube simultaneously and start the stopwatch.",
                                "Every minute, take a drop from each test tube and mix it with a drop of iodine solution on a spotting plate.",
                                "Continue taking drops until the mixture no longer gives a blue-black color with iodine (achromic point).",
                                "Record the time taken for complete digestion of starch in each temperature condition."
                        ],
                        "objectives": [
                                "Understand enzyme kinetics.",
                                "Observe protein denaturation."
                        ]
                }
        }

,
        {
                "id": "b13",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Compound Microscope",
                "description": "Parts and working of a compound microscope.",
                "difficulty": "Easy",
                "duration": "30 min",
                "category": "Microscopy",
                "content": {
                        "aim": "To study the parts and working of a compound microscope.",
                        "requirements": [
                                "Compound Microscope",
                                "Prepared slide",
                                "Lens cleaning tissue"
                        ],
                        "theory": "A compound microscope uses a system of multiple lenses (objective and eyepiece) to achieve high magnification of minute transparent objects.",
                        "procedure": [
                                "Identify the mechanical parts: base, pillar, inclination joint, arm, stage, body tube, coarse and fine adjustment knobs.",
                                "Identify the optical parts: mirror, condenser, objective lenses (low and high power), and eyepiece.",
                                "Place the microscope where there is sufficient indirect light.",
                                "Adjust the mirror (concave side) while looking through the eyepiece to illuminate the field of view brightly.",
                                "Place a prepared slide on the stage and secure it with the clips.",
                                "Use the coarse adjustment knob to focus the object under low power.",
                                "Carefully switch to high power and use only the fine adjustment knob to bring the image into sharp focus."
                        ],
                        "objectives": [
                                "Proper handling of microscopes.",
                                "Understand simple optics."
                        ]
                }
        },
        {
                "id": "b14",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11",
                        "2nd PUC / Class 12"
                ],
                "title": "Specimen Identification",
                "description": "Identify common plant and animal specimens/slides.",
                "difficulty": "Medium",
                "duration": "60 min",
                "category": "Taxonomy",
                "content": {
                        "aim": "To identify and study various given specimens and prepared slides for spotting.",
                        "requirements": [
                                "Preserved specimens (e.g. Earthworm, Frog, Starfish)",
                                "Prepared slides (e.g. Amoeba, T.S. of Dicot Stem)",
                                "Microscope"
                        ],
                        "theory": "Spotting involves careful observation of identifying morphological or anatomical features to classify an organism into its correct phylum and class.",
                        "procedure": [
                                "Observe each specimen/slide one by one for exactly 2 to 3 minutes.",
                                "Note the macroscopic or microscopic distinct characteristics.",
                                "Draw a neat, well-labeled diagram of the observed specimen.",
                                "Identify the specimen and write its systematic position (classification).",
                                "List at least two key characteristic features that justify the identification."
                        ],
                        "objectives": [
                                "Improve observation skills.",
                                "Learn animal/plant taxonomy."
                        ]
                }
        },
        {
                "id": "b15",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Ganong's Potometer",
                "description": "Measure the rate of transpiration.",
                "difficulty": "Hard",
                "duration": "45 min",
                "category": "Plant Physiology",
                "content": {
                        "aim": "To study the rate of transpiration in a leafy shoot using Ganong's potometer.",
                        "requirements": [
                                "Ganong's potometer",
                                "Freshly cut leafy shoot",
                                "Water",
                                "Vaseline",
                                "Stopwatch",
                                "Beaker"
                        ],
                        "theory": "Transpiration is the loss of water in the form of vapor from the aerial parts of a plant. A potometer effectively measures the rate of water uptake, which is almost equal to the rate of transpiration.",
                        "procedure": [
                                "Fill the potometer completely with water, ensuring no air bubbles are trapped.",
                                "Cut a fresh leafy shoot under water to prevent air locking in the xylem.",
                                "Fit the shoot into the rubber cork hole of the potometer tightly.",
                                "Seal all joints with vaseline to make the apparatus completely airtight.",
                                "Introduce a single air bubble into the capillary tube by lifting its bent end out of the water colored with eosin dye.",
                                "Record the initial position of the air bubble on the graduated scale.",
                                "Note the position of the bubble at regular intervals (e.g., every 5 minutes) as it moves along the scale.",
                                "Calculate the rate of transpiration per unit time."
                        ],
                        "objectives": [
                                "Understand water pull mechanism.",
                                "Measure physiological rates."
                        ]
                }
        },
        {
                "id": "b16",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Respiration in Seeds",
                "description": "Demonstrate anaerobic or aerobic respiration in germinating seeds.",
                "difficulty": "Medium",
                "duration": "40 min",
                "category": "Plant Physiology",
                "content": {
                        "aim": "To demonstrate that CO2 is released during aerobic respiration by germinating seeds.",
                        "requirements": [
                                "Conical flask",
                                "Germinating gram seeds",
                                "Small test tube",
                                "KOH solution",
                                "Delivery tube",
                                "Beaker containing water",
                                "Rubber corks"
                        ],
                        "theory": "Respiration is the metabolic process where organic substances are broken down to release energy. Germinating seeds respire actively, consuming O2 and releasing CO2. KOH absorbs the released CO2, creating a partial vacuum.",
                        "procedure": [
                                "Place about 20-30 germinating gram seeds in a conical flask.",
                                "Suspend a small test tube containing 20% concentrated KOH solution inside the flask using a thread.",
                                "Close the flask tightly with a one-holed rubber cork fitted with a bent glass delivery tube.",
                                "Submerge the free end of the delivery tube into a beaker containing colored water.",
                                "Ensure all joints are airtight using vaseline.",
                                "Leave the setup undisturbed for an hour.",
                                "Observe the rise of the colored water level in the delivery tube. The rise indicates that CO2 evolved was absorbed by KOH, reducing the pressure inside the flask."
                        ],
                        "objectives": [
                                "Confirm byproducts of respiration.",
                                "Demonstrate gas exchange."
                        ]
                }
        },
        {
                "id": "b17",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Salivary Amylase Action",
                "description": "Study the effect of temperature and pH on salivary amylase.",
                "difficulty": "Medium",
                "duration": "45 min",
                "category": "Biochemistry",
                "content": {
                        "aim": "To study the action of salivary amylase on starch and the effect of temperature on it.",
                        "requirements": [
                                "Test tubes",
                                "Starch solution (1%)",
                                "Saliva collection beaker",
                                "Iodine solution",
                                "Water bath",
                                "Thermometer",
                                "Spotting plate"
                        ],
                        "theory": "Salivary amylase (ptyalin) is an enzyme that digests starch into maltose. Its activity is maximum at the optimum human body temperature (37°C) and optimum pH (6.8). High temperatures denature it.",
                        "procedure": [
                                "Rinse your mouth and collect about 2-3 mL of saliva in a beaker. Dilute it with 20 mL of distilled water to make a saliva solution.",
                                "Take three identical test tubes and label them A, B, and C.",
                                "Add 5 mL of 1% starch solution to each test tube.",
                                "Place test tube A in ice (5°C), B in a water bath at 37°C, and C in boiling water (100°C) for 10 minutes.",
                                "Add 1 mL of the diluted saliva solution to each test tube simultaneously and start the stopwatch.",
                                "Every minute, take a drop from each test tube and mix it with a drop of iodine solution on a spotting plate.",
                                "Continue taking drops until the mixture no longer gives a blue-black color with iodine (achromic point).",
                                "Record the time taken for complete digestion of starch in each temperature condition."
                        ],
                        "objectives": [
                                "Understand enzyme kinetics.",
                                "Observe protein denaturation."
                        ]
                }
        }


    ]
  },
  {
    id: 'math',
    name: SubjectType.MATH,
    icon: Calculator,
    color: 'violet',
    hex: '#8b5cf6',
    description: 'Visualize functions, calculus, and geometry interactively.',
    labs: [
        {
            id: 'm1',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Graphing Functions', description: 'Plot and analyze functions.', difficulty: 'Easy', duration: '20 min', category: 'Calculus',
            content: { 
                videoId: "S66-267_2Ck",
                aim: "To plot functions.", requirements: ["Graph paper"], theory: "A function is a relation between a set of inputs (domain) and a set of outputs (range) where each input maps to exactly one output.\n\n**Types of Functions:**\n1. Linear: f(x) = mx + c — straight line.\n2. Quadratic: f(x) = ax² + bx + c — parabola. Vertex at x = -b/2a.\n3. Modulus: f(x) = |x| — V-shaped.\n4. Signum: f(x) = 1 (x>0), 0 (x=0), -1 (x<0).\n5. Greatest Integer: f(x) = [x] — step function.\n\n**Transformations:**\n- Vertical shift: f(x) + k shifts up by k.\n- Horizontal shift: f(x-h) shifts right by h.\n- Reflection: -f(x) about x-axis; f(-x) about y-axis.\n- Scaling: af(x) vertically; f(bx) horizontally.\n\n**Key Features:** Domain, Range, Intercepts, Symmetry, Maxima/Minima, Asymptotes.", procedure: [
              "Open the graphing simulation interface.",
              "Select the type of mathematical function (e.g., linear, quadratic, trigonometric) from the dropdown menu.",
              "Input the variables and coefficients for the chosen function in the input fields provided.",
              "Adjust the X and Y axis scale range using the zoom or scale controls to ensure the curve is fully visible.",
              "Click the \"Plot\" or \"Generate Graph\" button to render the curve.",
              "Analyze turning points, intercepts, and asymptotic behavior of the generated graph by hovering over the curve."
            ], objectives: ["Visualize graphs"],
                realWorldApplications: ["Finance: Modeling stock market trends.", "Physics: Plotting motion trajectories.", "Engineering: Stress analysis."],
                observationTable: { columns: ["x", "f(x)"] },
                assignments: [
                    { id: 1, question: "Plot the graph of f(x) = x³ - x. Identify the local maxima and minima.", marks: 5 },
                    { id: 2, question: "Determine the domain and range of the function f(x) = √(16 - x²).", marks: 4 },
                    { id: 3, question: "How does the graph of y = f(x-a) + b differ from y = f(x)?", marks: 3 },
                    { id: 4, question: "Sketch the graph of y = |x-1| + |x+1|.", marks: 5 },
                    { id: 5, question: "Find the asymptotes of the function f(x) = (2x+1)/(x-3).", marks: 4 }
                ]
            }
        },
        {
            id: 'm2',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Definite Integral', description: 'Area under curve.', difficulty: 'Medium', duration: '30 min', category: 'Calculus',
            content: { 
                videoId: "rfG8ce4nNh0",
                aim: "Find area.", requirements: ["Graph"], theory: "The definite integral ∫ₐᵇ f(x)dx represents the net signed area between the curve y = f(x) and the x-axis from x = a to x = b.\n\n**Fundamental Theorem of Calculus:** If F(x) is the antiderivative of f(x), then ∫ₐᵇ f(x)dx = F(b) - F(a).\n\n**Properties:**\n1. ∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx\n2. ∫ₐᵃ f(x)dx = 0\n3. ∫ₐᵇ f(x)dx = ∫ₐᶜ f(x)dx + ∫ᶜᵇ f(x)dx\n4. ∫₀ₐ f(x)dx = ∫₀ₐ f(a-x)dx\n\n**Geometric Interpretation:** Area under curve above x-axis is positive, below is negative.\n\n**Applications:** Area between curves, volume of revolution, work done.", procedure: [
              "Enter the mathematical function for which the area under the curve is to be determined.",
              "Set the lower integration limit (a) and the upper integration limit (b) in the designated input fields.",
              "Choose the method of numerical approximation (e.g., Riemann Sums, Trapezoidal rule).",
              "Specify the number of intervals (n) to set the precision of the numerical approximation.",
              "Click \"Calculate\" to compute the definite integral and visually shade the area under the curve.",
              "Observe how increasing \'n\' makes the approximated shaded area closer to the exact integral value."
            ], objectives: ["Understand Riemann Sum"],
                realWorldApplications: ["Civil Engineering", "Medicine", "Physics"],
                assignments: [
                    { id: 1, question: "Evaluate ∫(0 to π/2) sin³x dx.", marks: 4 },
                    { id: 2, question: "Find the area bounded by the curve y = x² and the line y = 4.", marks: 5 },
                    { id: 3, question: "State the Fundamental Theorem of Calculus.", marks: 3 },
                    { id: 4, question: "Using integration, find the area of a circle of radius 'a'.", marks: 5 },
                    { id: 5, question: "Evaluate ∫(0 to 1) 1/(1+x²) dx and hence find the value of π.", marks: 4 }
                ]
            }
        },
        {
            id: 'm3',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Unit Circle', description: 'Trigonometric ratios.', difficulty: 'Easy', duration: '20 min', category: 'Trigonometry',
            content: { 
                videoId: "35-aVBDK5Yk",
                aim: "Study sin/cos.", requirements: ["Circle"], theory: "The unit circle is a circle of radius 1 centered at the origin. Any point P on it at angle θ has coordinates (cos θ, sin θ).\n\n**Equation:** x² + y² = 1.\n\n**Trig Functions:** cos θ = x-coordinate, sin θ = y-coordinate, tan θ = y/x.\n\n**Quadrant Signs (ASTC — All Students Take Coffee):**\nI: All positive, II: Only sin, III: Only tan, IV: Only cos.\n\n**Radian Measure:** 1 radian = angle subtended by arc = radius. π radians = 180°.\n\n**Key Values:**\n0°: sin=0, cos=1 | 30°: sin=1/2, cos=√3/2 | 45°: sin=1/√2, cos=1/√2 | 60°: sin=√3/2, cos=1/2 | 90°: sin=1, cos=0.\n\n**Pythagorean Identity:** sin²θ + cos²θ = 1 (from x² + y² = 1).", procedure: [
              "Open the interactive Unit Circle simulator.",
              "Drag the point along the circumference of the circle having a radius of 1 unit.",
              "Observe the formation of the right-angled triangle with the radius acting as the hypotenuse.",
              "Note the changing X coordinate (Cosine) and Y coordinate (Sine) automatically on the screen.",
              "Note the angle formed (in degrees and radians) corresponding to the point\'s position.",
              "Verify the Pythagoras theorem x^2 + y^2 = 1 for different angles to understand trigonometric identities."
            ], objectives: ["Link geometry to trig"],
                realWorldApplications: ["Game Development", "GPS", "Audio Processing"],
                assignments: [
                    { id: 1, question: "Using the unit circle, find the value of sin(210°) and cos(300°).", marks: 4 },
                    { id: 2, question: "Convert 135° into radians. Show the position on the unit circle.", marks: 3 },
                    { id: 3, question: "Prove that sin²θ + cos²θ = 1 using the coordinates on a unit circle.", marks: 4 },
                    { id: 4, question: "Graph the function y = sin(x) for x in [0, 4π].", marks: 5 },
                    { id: 5, question: "Explain why tan(90°) is undefined using the unit circle concept.", marks: 3 }
                ]
            }
        },
        {
            id: 'm4',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Conic Sections', description: 'Parabola, Ellipse, Hyperbola.', difficulty: 'Hard', duration: '40 min', category: 'Geometry',
            content: { 
                videoId: "HO2zAU3Eppo",
                aim: "Construct conics.", requirements: ["Focus", "Directrix"], theory: "Conic sections are curves obtained by intersecting a right circular cone with a plane at different angles.\n\n**Circle:** (x-h)² + (y-k)² = r². Standard: x² + y² = r².\n\n**Parabola:** y² = 4ax (opens right). Focus at (a,0), directrix x = -a. Eccentricity e = 1.\n\n**Ellipse:** x²/a² + y²/b² = 1 (a>b). Foci at (±c,0) where c² = a²-b². 0 < e < 1.\n\n**Hyperbola:** x²/a² - y²/b² = 1. Foci at (±c,0) where c² = a²+b². e > 1. Asymptotes: y = ±(b/a)x.\n\n**General equation:** ax² + 2hxy + by² + 2gx + 2fy + c = 0 represents different conics based on the discriminant.", procedure: [
              "Select the specific conic section to explore: Circle, Ellipse, Parabola, or Hyperbola.",
              "Adjust the sliders for the standard equation parameters (e.g., a, b, h, k).",
              "Observe how the cutting plane intersects the 3D double cone to form the 2D curve.",
              "Analyze how changing the parameters shifts the center (h, k) or stretches the curve.",
              "Locate the foci, directrix, and vertices displayed on the generated 2D graph.",
              "Correlate the geometric visualization with the algebraic equation."
            ], objectives: ["Eccentricity"],
                realWorldApplications: ["Satellite Dishes", "Astronomy", "Cooling Towers"],
                assignments: [
                    { id: 1, question: "Find the equation of the parabola with focus (2,0) and directrix x = -2.", marks: 4 },
                    { id: 2, question: "Find the eccentricity and length of latus rectum of the ellipse 4x² + 9y² = 36.", marks: 5 },
                    { id: 3, question: "Define a Hyperbola in terms of locus of a point.", marks: 3 },
                    { id: 4, question: "Sketch the circle x² + y² - 4x - 6y - 12 = 0. Find its center and radius.", marks: 5 },
                    { id: 5, question: "Identify the conic section represented by x² - 4y² + 2x + 8y - 7 = 0.", marks: 4 }
                ]
            }
        },
        {
            id: 'm5',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Vectors', description: 'Cross and Dot products.', difficulty: 'Medium', duration: '30 min', category: 'Algebra',
            content: { 
                videoId: "ml4NSzCQobk",
                aim: "Vector operations.", requirements: ["3D space"], theory: "A vector is a quantity with both magnitude and direction. Represented as ā = aₓî + aᵧĵ + a_zk̂.\n\n**Magnitude:** |ā| = √(aₓ² + aᵧ² + a_z²). Unit vector: â = ā/|ā|.\n\n**Dot Product:** ā·b̄ = |ā||b̄|cosθ = aₓbₓ + aᵧbᵧ + a_zb_z. If ā·b̄ = 0, vectors are perpendicular. Application: Work W = F̄·d̄.\n\n**Cross Product:** |ā×b̄| = |ā||b̄|sinθ. Gives area of parallelogram. Anti-commutative. Application: Torque τ̄ = r̄×F̄.\n\n**Direction Cosines:** cosα = aₓ/|ā|, cosβ = aᵧ/|ā|, cosγ = a_z/|ā|. cos²α + cos²β + cos²γ = 1.", procedure: [
              "Set up the 2D or 3D coordinate plane in the vector simulation.",
              "Input the components (x, y, z) for Vector A and Vector B to define their magnitude and direction.",
              "Select a vector operation: Addition, Subtraction, Dot Product, or Cross Product.",
              "For Vector Addition, visualize the Head-to-Tail or Parallelogram method dynamically drawing the resultant vector.",
              "For Dot/Cross products, observe the numerical output and the orthogonal vector generated (if applicable).",
              "Adjust the magnitude or angle of the initial vectors to see real-time updates in the resultant."
            ], objectives: ["Spatial understanding"],
                realWorldApplications: ["3D Graphics", "Air Traffic Control", "Physics engines"],
                assignments: [
                    { id: 1, question: "Find the angle between vectors A = i + j + k and B = i - j + k.", marks: 4 },
                    { id: 2, question: "Find the area of the parallelogram whose adjacent sides are given by A = 3i + j - 2k and B = i - 3j + 4k.", marks: 5 },
                    { id: 3, question: "Find a unit vector perpendicular to both A = 2i - j + k and B = 3i + 4j - k.", marks: 5 },
                    { id: 4, question: "Find the projection of vector A = 2i + 3j + 2k on vector B = i + 2j + k.", marks: 3 },
                    { id: 5, question: "Show that the points A(1, 2, 3), B(2, 3, 4) and C(7, 0, 1) are collinear using vectors.", marks: 4 }
                ]
            }
        },
        {
            id: 'm6',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Inverse Trig Functions', description: 'Explore domains and graphs of sin⁻¹, cos⁻¹, tan⁻¹.', difficulty: 'Medium', duration: '25 min', category: 'Trigonometry',            content: { aim: "To study inverse trigonometric functions and their principal values.", requirements: ["Graph paper", "Calculator"], theory: "sin⁻¹x has domain [-1,1] and range [-π/2, π/2]. cos⁻¹x: domain [-1,1], range [0, π]. tan⁻¹x: domain ℝ, range (-π/2, π/2).", procedure: [
              "Select the base trigonometric function (e.g., sine).",
              "Restrict the domain of the base function (e.g., -pi/2 to pi/2 for sine) to make it one-to-one.",
              "Click \"Invert\" to reflect the restricted graph across the line y = x.",
              "Observe the newly plotted inverse function (e.g., arcsine).",
              "Identify the specialized domain and ranges of the resulting inverse function.",
              "Input a specific value x to compute and verify the principal value of the inverse function."
            ], objectives: ["Understand inverse functions."] }
        },
        {
            id: 'm7',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Maxima & Minima', description: 'Find local maxima and minima of functions using derivatives.', difficulty: 'Medium', duration: '25 min', category: 'Calculus',            content: { aim: "To visualize maxima, minima and inflection points of functions.", requirements: ["Graph paper", "Calculator"], theory: "Critical points occur where f'(x) = 0. Second derivative test: f''(x) > 0 → minimum, f''(x) < 0 → maximum.", procedure: [
              "Input a polynomial or continuous function into the function field.",
              "The simulation will plot the given function\'s curve.",
              "The system computes the first derivative f\'(x) and sets it to zero to find the critical points (stationary points).",
              "The system computes the second derivative f\'\'(x) to apply the second-derivative test.",
              "Observe the highlighted points on the graph: Local Maxima (where curve changes from increasing to decreasing) and Local Minima (decreasing to increasing).",
              "Verify the points against the calculated derivative conditions."
            ], objectives: ["Apply differential calculus."] }
        },
        {
            id: 'm8',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Area Under Curve', description: 'Calculate area enclosed using definite integration.', difficulty: 'Hard', duration: '30 min', category: 'Calculus',            content: { aim: "To calculate the area under a curve using definite integration.", requirements: ["Graph paper", "Calculator"], theory: "Area = ∫[a to b] f(x)dx. For area between two curves: ∫[a to b] [f(x) - g(x)]dx.", procedure: [
              "Enter the function equation representing the upper boundary curve.",
              "If finding the area between two curves, enter the second function equation.",
              "Set the definitive integration limits (x = a to x = b).",
              "The system generates points highlighting the bounded region on the Cartesian plane.",
              "Review the highlighted area correctly matching the analytically calculated definite integration.",
              "Modify the boundary functions or limits to dynamically update the shaded area."
            ], objectives: ["Apply integral calculus."] }
        },
        {
            id: 'm9',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Probability Distribution', description: 'Simulate and visualize probability distributions.', difficulty: 'Easy', duration: '20 min', category: 'Statistics',            content: { aim: "To understand probability distributions through dice/coin experiments.", requirements: ["Dice", "Coins", "Tally Sheet"], theory: "Probability P(E) = favorable outcomes / total outcomes. For two dice: sample space = 36.", procedure: [
              "Select the type of distribution (e.g., Binomial, Normal, or Poisson distribution).",
              "Input the required parameters: for Binomial (n: number of trials, p: probability of success), for Normal (Mean mu, Standard Deviation sigma).",
              "View the generated probability mass or density function curve.",
              "Set an interval range to compute cumulative probability or area beneath the curve.",
              "Analyze the effect of varying standard deviation on the bell curve\'s spread in Normal Distribution.",
              "Relate the theoretical visualization to practical statistical significance."
            ], objectives: ["Understand random variables."] }
        },
        {
            id: 'm10',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Matrix Operations', description: 'Perform addition, multiplication, inverse, and determinant.', difficulty: 'Medium', duration: '25 min', category: 'Algebra',            content: { aim: "To perform matrix operations and understand their properties.", requirements: ["Calculator", "Paper"], theory: "Matrix multiplication: (AB)ij = Σ aik × bkj. Determinant: |A| = ad - bc (2×2). Inverse: A⁻¹ = adj(A)/|A|.", procedure: [
              "Input the dimensions (rows and columns) for Matrix A and Matrix B.",
              "Fill the matrix cells with real numbers to define the matrices.",
              "Choose the mathematical matrix operation: Addition, Subtraction, Multiplication, Inverse, or Determinant.",
              "If multiplication is selected, ensure that the column count of A matches the row count of B.",
              "View the step-by-step arithmetic simulation of the selected operation (e.g., row-by-column multiplication steps).",
              "Finalize and review the resulting matrix values."
            ], objectives: ["Apply linear algebra."] }
        },
        {
                "id": "m11",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Sets and Relations",
                "description": "Visualize intersections, unions, and types of relations.",
                "difficulty": "Easy",
                "duration": "30 min",
                "category": "Algebra",
                "content": {
                        "aim": "To visualize concepts of sets, subsets, intersections, and unions using Venn diagrams, and construct equivalence relations.",
                        "requirements": [
                                "Graph paper",
                                "Colored pencils",
                                "Ruler",
                                "Compass"
                        ],
                        "theory": "Sets represented as circles (Venn diagrams) show logical relationships between collections. A relation R on A is an equivalence relation if it is reflexive (aRa), symmetric (aRb -> bRa), and transitive (aRb & bRc -> aRc).",
                        "procedure": [
                                "Draw a large rectangle to represent the Universal Set (U).",
                                "Draw two intersecting circles, A and B, inside the rectangle.",
                                "Color the region common to both circles to highlight A ∩ B.",
                                "Draw a separate diagram tracing the entirety of both circles to highlight A ∪ B.",
                                "Construct a set A = {1, 2, 3}. Define a relation R = {(1,1), (2,2), (3,3), (1,2), (2,1)}.",
                                "Verify on paper that R is reflexive and symmetric, but check if it's transitive to deduce equivalence."
                        ],
                        "objectives": [
                                "Build core set theory logic.",
                                "Graphically process relations."
                        ]
                }
        },
        {
                "id": "m12",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Complex Numbers Representation",
                "description": "Plot complex numbers on an Argand plane.",
                "difficulty": "Medium",
                "duration": "40 min",
                "category": "Algebra",
                "content": {
                        "aim": "To plot complex numbers on an Argand plane and understand modulus and argument geometrically.",
                        "requirements": [
                                "Graph paper",
                                "Protractor",
                                "Ruler"
                        ],
                        "theory": "A complex number z = x + iy is plotted as the point (x, y) on a Cartesian plane where the x-axis is real and the y-axis is imaginary. The distance from the origin is its modulus ||z||, and the angle it makes with the positive x-axis is its argument.",
                        "procedure": [
                                "Mark perpendicular X and Y axes on the graph paper. Label X as Real and Y as Imaginary.",
                                "Take a complex number z1 = 3 + 4i. Plot the point P(3,4).",
                                "Join the origin O(0,0) to P with a straight line.",
                                "Measure the length of OP to find the modulus (should be 5).",
                                "Use a protractor to measure the angle OP makes with the positive real axis (argument).",
                                "Plot the conjugate z2 = 3 - 4i at Q(3,-4) and note its reflection over the Real axis.",
                                "Geometrically add two complex numbers using the parallelogram law."
                        ],
                        "objectives": [
                                "Geometric intuition for imaginary numbers.",
                                "Visual arithmetic."
                        ]
                }
        },
        {
                "id": "m13",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11",
                        "2nd PUC / Class 12"
                ],
                "title": "Limits & Derivatives",
                "description": "Visualize limits and tangents to curves.",
                "difficulty": "Hard",
                "duration": "45 min",
                "category": "Calculus",
                "content": {
                        "aim": "To demonstrate the concept of a limit converging to a point, and drawing tangents to show geometric derivation of a derivative at a point.",
                        "requirements": [
                                "Graph paper",
                                "Ruler",
                                "Curve stencils or string"
                        ],
                        "theory": "The derivative of a function at a point geometrically represents the slope of the tangent line to the curve at that point. Limits approach an exact value as the independent variable approaches a target.",
                        "procedure": [
                                "Plot the graph of the function f(x) = x^2 on a graph paper.",
                                "Choose a target point P(2,4) on the curve.",
                                "Pick a point Q1(3,9) on the curve and draw a secant line joining P and Q1. Calculate its slope.",
                                "Pick another point Q2(2.5, 6.25) closer to P and draw another secant line. Calculate its slope.",
                                "Observe how the slope of the secant line approaches a limiting value as Q moves closer and closer to P.",
                                "Draw the tangent exactly at P and measure its slope (the derivative, which is 4)."
                        ],
                        "objectives": [
                                "Bridge algebra with geometry.",
                                "Grasp first principles of calculus."
                        ]
                }
        },
        {
                "id": "m14",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Linear Programming",
                "description": "Solve an optimization LPP graphically.",
                "difficulty": "Medium",
                "duration": "40 min",
                "category": "Applied Math",
                "content": {
                        "aim": "To find the optimal (maximum or minimum) value of a linear objective function graphically subject to a set of linear inequalities.",
                        "requirements": [
                                "Graph paper",
                                "Ruler"
                        ],
                        "theory": "In linear programming, constraints form a convex polygon called the feasible region. By the Corner Point Theorem, the optimal solution for the objective function always lies at one of the vertices of this feasible region.",
                        "procedure": [
                                "Convert given inequality constraints into equations of lines (e.g., 2x + y = 104).",
                                "Find the x and y intercepts for each line by setting y=0 and x=0 respectively.",
                                "Plot the lines accurately on a graph paper.",
                                "Determine the feasible region by checking which side of the line satisfies the inequality (using a test point like the origin).",
                                "Shade the common region satisfied by all constraints.",
                                "Identify all the corner points (vertices) of the shaded feasible polygon.",
                                "Substitute the (x,y) coordinates of each corner point into the objective function Z = ax + by to find the max/min value."
                        ],
                        "objectives": [
                                "Solve real-world optimization problems.",
                                "Intersect lines graphically."
                        ]
                }
        },
        {
                "id": "m15",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Differential Equations",
                "description": "Explore slope fields and geometric solutions.",
                "difficulty": "Hard",
                "duration": "35 min",
                "category": "Calculus",
                "content": {
                        "aim": "To sketch a slope field (direction field) to visually represent the general solution to a first-order differential equation.",
                        "requirements": [
                                "Graph paper",
                                "Ruler",
                                "Pencil"
                        ],
                        "theory": "A differential equation dy/dx = f(x,y) assigns a slope to every point (x,y) in the plane. A small line segment with that slope drawn at each point forms an array called a slope field, which reveals the general shape of solution curves.",
                        "procedure": [
                                "Consider a simple differential equation, like dy/dx = x - y.",
                                "Set up a grid of points with integer coordinates from -3 to 3 on both axes.",
                                "Select a point (e.g., (1,0)). Calculate the slope there: 1 - 0 = 1.",
                                "At coordinate (1,0), draw a very short line segment with a slope of 1.",
                                "Repeat this calculation and drawing for every point in the grid.",
                                "Pick an initial condition, say y(0) = 1. Start at (0,1) and follow the direction of the surrounding little slopes to trace a continuous curve through the field.",
                                "Observe the exponential relaxation behavior of the curve."
                        ],
                        "objectives": [
                                "Visualize differential equations.",
                                "Trace specific solutions."
                        ]
                }
        }

,
        {
                "id": "m11",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Sets and Relations",
                "description": "Visualize intersections, unions, and types of relations.",
                "difficulty": "Easy",
                "duration": "30 min",
                "category": "Algebra",
                "content": {
                        "aim": "To visualize concepts of sets, subsets, intersections, and unions using Venn diagrams, and construct equivalence relations.",
                        "requirements": [
                                "Graph paper",
                                "Colored pencils",
                                "Ruler",
                                "Compass"
                        ],
                        "theory": "Sets represented as circles (Venn diagrams) show logical relationships between collections. A relation R on A is an equivalence relation if it is reflexive (aRa), symmetric (aRb -> bRa), and transitive (aRb & bRc -> aRc).",
                        "procedure": [
                                "Draw a large rectangle to represent the Universal Set (U).",
                                "Draw two intersecting circles, A and B, inside the rectangle.",
                                "Color the region common to both circles to highlight A ∩ B.",
                                "Draw a separate diagram tracing the entirety of both circles to highlight A ∪ B.",
                                "Construct a set A = {1, 2, 3}. Define a relation R = {(1,1), (2,2), (3,3), (1,2), (2,1)}.",
                                "Verify on paper that R is reflexive and symmetric, but check if it's transitive to deduce equivalence."
                        ],
                        "objectives": [
                                "Build core set theory logic.",
                                "Graphically process relations."
                        ]
                }
        },
        {
                "id": "m12",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11"
                ],
                "title": "Complex Numbers Representation",
                "description": "Plot complex numbers on an Argand plane.",
                "difficulty": "Medium",
                "duration": "40 min",
                "category": "Algebra",
                "content": {
                        "aim": "To plot complex numbers on an Argand plane and understand modulus and argument geometrically.",
                        "requirements": [
                                "Graph paper",
                                "Protractor",
                                "Ruler"
                        ],
                        "theory": "A complex number z = x + iy is plotted as the point (x, y) on a Cartesian plane where the x-axis is real and the y-axis is imaginary. The distance from the origin is its modulus ||z||, and the angle it makes with the positive x-axis is its argument.",
                        "procedure": [
                                "Mark perpendicular X and Y axes on the graph paper. Label X as Real and Y as Imaginary.",
                                "Take a complex number z1 = 3 + 4i. Plot the point P(3,4).",
                                "Join the origin O(0,0) to P with a straight line.",
                                "Measure the length of OP to find the modulus (should be 5).",
                                "Use a protractor to measure the angle OP makes with the positive real axis (argument).",
                                "Plot the conjugate z2 = 3 - 4i at Q(3,-4) and note its reflection over the Real axis.",
                                "Geometrically add two complex numbers using the parallelogram law."
                        ],
                        "objectives": [
                                "Geometric intuition for imaginary numbers.",
                                "Visual arithmetic."
                        ]
                }
        },
        {
                "id": "m13",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11",
                        "2nd PUC / Class 12"
                ],
                "title": "Limits & Derivatives",
                "description": "Visualize limits and tangents to curves.",
                "difficulty": "Hard",
                "duration": "45 min",
                "category": "Calculus",
                "content": {
                        "aim": "To demonstrate the concept of a limit converging to a point, and drawing tangents to show geometric derivation of a derivative at a point.",
                        "requirements": [
                                "Graph paper",
                                "Ruler",
                                "Curve stencils or string"
                        ],
                        "theory": "The derivative of a function at a point geometrically represents the slope of the tangent line to the curve at that point. Limits approach an exact value as the independent variable approaches a target.",
                        "procedure": [
                                "Plot the graph of the function f(x) = x^2 on a graph paper.",
                                "Choose a target point P(2,4) on the curve.",
                                "Pick a point Q1(3,9) on the curve and draw a secant line joining P and Q1. Calculate its slope.",
                                "Pick another point Q2(2.5, 6.25) closer to P and draw another secant line. Calculate its slope.",
                                "Observe how the slope of the secant line approaches a limiting value as Q moves closer and closer to P.",
                                "Draw the tangent exactly at P and measure its slope (the derivative, which is 4)."
                        ],
                        "objectives": [
                                "Bridge algebra with geometry.",
                                "Grasp first principles of calculus."
                        ]
                }
        },
        {
                "id": "m14",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Linear Programming",
                "description": "Solve an optimization LPP graphically.",
                "difficulty": "Medium",
                "duration": "40 min",
                "category": "Applied Math",
                "content": {
                        "aim": "To find the optimal (maximum or minimum) value of a linear objective function graphically subject to a set of linear inequalities.",
                        "requirements": [
                                "Graph paper",
                                "Ruler"
                        ],
                        "theory": "In linear programming, constraints form a convex polygon called the feasible region. By the Corner Point Theorem, the optimal solution for the objective function always lies at one of the vertices of this feasible region.",
                        "procedure": [
                                "Convert given inequality constraints into equations of lines (e.g., 2x + y = 104).",
                                "Find the x and y intercepts for each line by setting y=0 and x=0 respectively.",
                                "Plot the lines accurately on a graph paper.",
                                "Determine the feasible region by checking which side of the line satisfies the inequality (using a test point like the origin).",
                                "Shade the common region satisfied by all constraints.",
                                "Identify all the corner points (vertices) of the shaded feasible polygon.",
                                "Substitute the (x,y) coordinates of each corner point into the objective function Z = ax + by to find the max/min value."
                        ],
                        "objectives": [
                                "Solve real-world optimization problems.",
                                "Intersect lines graphically."
                        ]
                }
        },
        {
                "id": "m15",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Differential Equations",
                "description": "Explore slope fields and geometric solutions.",
                "difficulty": "Hard",
                "duration": "35 min",
                "category": "Calculus",
                "content": {
                        "aim": "To sketch a slope field (direction field) to visually represent the general solution to a first-order differential equation.",
                        "requirements": [
                                "Graph paper",
                                "Ruler",
                                "Pencil"
                        ],
                        "theory": "A differential equation dy/dx = f(x,y) assigns a slope to every point (x,y) in the plane. A small line segment with that slope drawn at each point forms an array called a slope field, which reveals the general shape of solution curves.",
                        "procedure": [
                                "Consider a simple differential equation, like dy/dx = x - y.",
                                "Set up a grid of points with integer coordinates from -3 to 3 on both axes.",
                                "Select a point (e.g., (1,0)). Calculate the slope there: 1 - 0 = 1.",
                                "At coordinate (1,0), draw a very short line segment with a slope of 1.",
                                "Repeat this calculation and drawing for every point in the grid.",
                                "Pick an initial condition, say y(0) = 1. Start at (0,1) and follow the direction of the surrounding little slopes to trace a continuous curve through the field.",
                                "Observe the exponential relaxation behavior of the curve."
                        ],
                        "objectives": [
                                "Visualize differential equations.",
                                "Trace specific solutions."
                        ]
                }
        }


    ]
  },
  {
    id: 'cs',
    name: SubjectType.CS,
    icon: Monitor,
    color: 'purple',
    hex: '#a855f7',
    description: 'Understand logic gates, algorithms, and number systems.',
    labs: [
        {
            id: 'cs1',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Logic Gates', description: 'AND, OR, NOT, XOR gates.', difficulty: 'Easy', duration: '20 min', category: 'Digital Logic',
            content: { 
                videoId: "gI-qXk7XojA",
                aim: "Verify truth tables.", requirements: ["Gates"], theory: "Boolean algebra deals with variables having two values: true (1) and false (0). It is the mathematical foundation for digital logic circuits.\n\n**Basic Gates:**\n1. AND: Y = A·B (output 1 only when all inputs are 1).\n2. OR: Y = A+B (output 1 when any input is 1).\n3. NOT: Y = A' (complement).\n4. NAND: Y = (A·B)' — Universal gate.\n5. NOR: Y = (A+B)' — Universal gate.\n6. XOR: Y = A⊕B (output 1 when inputs differ).\n7. XNOR: Y = (A⊕B)' (output 1 when inputs same).\n\n**Boolean Laws:** Commutative, Associative, Distributive.\n**De Morgan's Theorems:** (A+B)' = A'·B'; (A·B)' = A'+B'.\n\n**Universal Gates:** NAND and NOR can implement any Boolean function.", procedure: [
              "Open the digital circuit simulator canvas.",
              "Drag and drop basic input pins (switches representing 0 or 1).",
              "Select and place the desired logic gate component (AND, OR, NOT, NAND, NOR, XOR, XNOR) onto the canvas.",
              "Wire the input pins to the gate inputs by connecting their nodes.",
              "Connect an output indicator (like an LED or a probe) to the gate\'s output node.",
              "Toggle the input switches to generate all possible input combinations (00, 01, 10, 11).",
              "Observe the output LED state for each combination and construct the Truth Table accurately."
            ], objectives: ["Digital circuits"],
                realWorldApplications: ["Computer Processors", "Burglar Alarms", "Traffic Lights"],
                observationTable: { columns: ["Input A", "Input B", "Output Y"] },
                assignments: [
                    { id: 1, question: "Construct a truth table for the expression Y = (A AND B) OR (NOT C).", marks: 5 },
                    { id: 2, question: "Why are NAND and NOR gates called Universal Gates? Implement an OR gate using only NAND gates.", marks: 5 },
                    { id: 3, question: "Draw the logic circuit for the Half Adder and write its truth table.", marks: 5 },
                    { id: 4, question: "State and prove De Morgan's Laws using truth tables.", marks: 4 },
                    { id: 5, question: "Explain the working of an XOR gate. Where is it used?", marks: 3 }
                ]
            }
        },
        {
            id: 'cs2',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Bubble Sort', description: 'Sorting algorithm visualization.', difficulty: 'Medium', duration: '30 min', category: 'Algorithms',
            content: { 
                videoId: "nmhjrI-aW5o",
                aim: "Visualize sorting.", requirements: ["Array"], theory: "Bubble Sort is a comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if in wrong order.\n\n**Algorithm:** Compare adjacent pairs, swap if needed. Each pass moves the largest unsorted element to its correct position.\n\n**Time Complexity:** Best O(n), Average O(n²), Worst O(n²).\n**Space Complexity:** O(1) — in-place.\n\n**Properties:** Stable (equal elements maintain order), Adaptive (O(n) for nearly sorted with flag optimization), In-place.\n\n**Passes Required:** Max (n-1) passes for n elements. Pass i makes (n-i) comparisons.\n\n**Limitations:** Inefficient for large datasets compared to O(n log n) algorithms.", procedure: [
              "Define an unsorted array of numbers in the visual array input.",
              "Start the simulation. The algorithm points to the first two adjacent elements (index 0 and 1).",
              "It compares them. If the first element is larger than the second (for ascending sort), they are swapped.",
              "The pointers move to the next pair (index 1 and 2), repeating the comparison and swapping if necessary.",
              "This process continues to the end of the array, successfully bubbling the largest element to the last position.",
              "The process repeats for the remaining unsorted portion of the array.",
              "Observe the visual iteration until no more swaps are needed, marking the array as fully sorted."
            ], objectives: ["Algorithm analysis"],
                realWorldApplications: ["E-commerce", "Leaderboards", "Contact Lists"],
                assignments: [
                    { id: 1, question: "Trace the Bubble Sort algorithm for the array [5, 1, 4, 2, 8]. Show each pass.", marks: 5 },
                    { id: 2, question: "What is the time complexity of Bubble Sort in Best, Average, and Worst cases?", marks: 3 },
                    { id: 3, question: "How can Bubble Sort be optimized to stop early if the array is already sorted?", marks: 4 },
                    { id: 4, question: "Is Bubble Sort a stable sorting algorithm? Explain with an example.", marks: 3 },
                    { id: 5, question: "Write the pseudocode for the Bubble Sort algorithm.", marks: 5 }
                ]
            }
        },
        {
            id: 'cs3',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Insertion Sort', description: 'Sorting algorithm.', difficulty: 'Medium', duration: '30 min', category: 'Algorithms',
            content: { 
                videoId: "OGzPmgsI-pQ",
                aim: "Visualize insertion sort.", requirements: ["Array"], theory: "Insertion Sort is an adaptive, comparison-based sorting algorithm that builds the final sorted array one element at a time. It works like sorting playing cards in hand.\n\n**Algorithm:**\n1. Consider first element as sorted.\n2. Pick next element (key).\n3. Compare with sorted portion from right to left.\n4. Shift elements greater than key one position right.\n5. Insert key at correct position.\n6. Repeat for all elements.\n\n**Time Complexity:** Best O(n) (already sorted), Average O(n²), Worst O(n²) (reverse sorted).\n**Space Complexity:** O(1) — in-place.\n\n**Properties:** Stable, Adaptive (better on nearly sorted data), Online (can sort as it receives), In-place.\n\n**When to Use:** Best for small datasets or nearly sorted data. Used as base case in hybrid algorithms like Timsort.", procedure: [
              "Initialize an unsorted numerical array in the simulator.",
              "The outer loop begins at the second element (index 1), assuming the first element (index 0) is already a sorted sub-array.",
              "The algorithm stores the current element in a temporary key variable.",
              "It compares the key with elements in the sorted sub-array to its left, moving from right to left.",
              "If a compared element is greater than the key, it shifts that element one position to the right.",
              "It formally inserts the key into its correctly ordered position within the sorted sub-array.",
              "The process iteratively expands the sorted sub-array one element at a time until the entire array is sorted."
            ], objectives: ["Sorting"],
                realWorldApplications: ["Card Games", "Live Data", "Computer Graphics"],
                assignments: [
                    { id: 1, question: "Trace the Insertion Sort algorithm for the array [12, 11, 13, 5, 6].", marks: 5 },
                    { id: 2, question: "Compare Insertion Sort and Bubble Sort. Which one is better for nearly sorted arrays?", marks: 4 },
                    { id: 3, question: "Why is Insertion Sort preferred for small datasets?", marks: 3 },
                    { id: 4, question: "Calculate the number of comparisons required to sort [4, 3, 2, 1] using Insertion Sort.", marks: 3 },
                    { id: 5, question: "Explain the 'online' property of Insertion Sort.", marks: 4 }
                ]
            }
        },
        {
            id: 'cs4',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Stack Operations', description: 'Push and Pop visualization.', difficulty: 'Easy', duration: '20 min', category: 'Data Structures',
            content: { 
                videoId: "I5lq6sCuABE",
                aim: "LIFO principle.", requirements: ["Stack"], theory: "A Stack is a linear data structure following Last In, First Out (LIFO) principle.\n\n**Operations:**\n1. Push: Add to top. O(1).\n2. Pop: Remove from top. O(1).\n3. Peek/Top: View top element. O(1).\n4. isEmpty/isFull: Check status.\n\n**Overflow/Underflow:** Pushing onto full stack = overflow. Popping from empty = underflow.\n\n**Implementation:** Using arrays (fixed size) or linked lists (dynamic).\n\n**Applications:**\n- Expression evaluation: infix to postfix conversion.\n- Function call management (call stack).\n- Undo/Redo operations.\n- Backtracking: browser back button, maze solving, DFS.\n- Balanced parentheses checking.", procedure: [
              "Initialize a Stack data structure and define its capacity maximum limit.",
              "To perform a PUSH operation, input a value and click Push.",
              "Observe the standard stack pointer (TOP) incrementing and the item placed at the top of the stack visually.",
              "To perform a POP operation, click Pop.",
              "Observe the item being removed strictly from the TOP, complying with the LIFO (Last In, First Out) principle, and the TOP pointer decrementing.",
              "Identify the boundary conditions by attempting to Push when full (causing Stack Overflow) or Pop when empty (causing Stack Underflow)."
            ], objectives: ["Memory structure"],
                realWorldApplications: ["Undo/Redo", "Browser History", "Function Calls"],
                assignments: [
                    { id: 1, question: "Convert the infix expression (A+B)*(C-D) to postfix using a stack.", marks: 5 },
                    { id: 2, question: "Explain the terms 'Stack Overflow' and 'Stack Underflow'.", marks: 3 },
                    { id: 3, question: "Write an algorithm for PUSH and POP operations in a stack implemented using arrays.", marks: 5 },
                    { id: 4, question: "How is a stack used in function calls and recursion?", marks: 4 },
                    { id: 5, question: "Evaluate the postfix expression: 2 3 1 * + 9 -", marks: 3 }
                ]
            }
        },
        {
            id: 'cs5',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['1st PUC / Class 11'], title: 'Number Systems', description: 'Binary to Decimal conversion.', difficulty: 'Easy', duration: '15 min', category: 'Basics',
            content: { 
                videoId: "LpuPe81bc2w",
                aim: "Convert bases.", requirements: ["Number"], theory: "Number systems are mathematical notations for representing numbers using digits or symbols.\n\n**Types:**\n1. Binary (Base 2): digits 0,1. Fundamental to computers.\n2. Octal (Base 8): digits 0-7. Each octal digit = 3 binary digits.\n3. Decimal (Base 10): digits 0-9. Standard system.\n4. Hexadecimal (Base 16): digits 0-9, A-F. Each hex digit = 4 binary digits.\n\n**Conversions:**\n- Decimal to Binary: Repeated division by 2.\n- Binary to Decimal: Positional multiplication and summation.\n- Binary ↔ Octal: Group in 3s.\n- Binary ↔ Hex: Group in 4s.\n\n**Complements:**\n- 1's Complement: Flip all bits.\n- 2's Complement: 1's complement + 1. Used for negative numbers.\n\n**Applications:** Binary (processors), Octal (Unix permissions), Hex (memory addresses, HTML colors).", procedure: [
              "Input a numerical value into the primary base field (e.g., Base 10 / Decimal).",
              "Select the target conversion base (e.g., Base 2 / Binary, Base 8 / Octal, Base 16 / Hexadecimal).",
              "Observe the step-by-step division process by the target base, noting the quotients and remainders at each explicit step.",
              "Read the string of remainders strictly from bottom to top (or last to first) to construct the converted value.",
              "Reverse the process by multiplying each digit of the converted string by the progressive powers of the base to verify the initial Base 10 value.",
              "Validate the conversion conceptually."
            ], objectives: ["Data representation"],
                realWorldApplications: ["Digital Electronics", "IP Addresses", "Data Encryption"],
                observationTable: { columns: ["Binary", "Decimal"] },
                assignments: [
                    { id: 1, question: "Convert (110101)₂ to Decimal and Octal.", marks: 4 },
                    { id: 2, question: "Perform binary addition: 10110 + 1101.", marks: 3 },
                    { id: 3, question: "Find the 2's complement of the binary number 1011001.", marks: 3 },
                    { id: 4, question: "Convert (255)₁₀ to Binary and Hexadecimal.", marks: 4 },
                    { id: 5, question: "Explain how negative numbers are represented in computer systems.", marks: 4 }
                ]
            }
        },
        {
            id: 'cs6',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Linked List Operations', description: 'Insert, delete, and traverse a singly linked list.', difficulty: 'Medium', duration: '30 min', category: 'Data Structures',            content: { aim: "To implement and visualize linked list operations.", requirements: ["Computer"], theory: "A linked list stores data in nodes. Each node has data and a pointer to the next node. Operations: insert (head/tail/middle), delete, search, traverse.", procedure: [
              "Open the dynamic memory allocation visualization module.",
              "To INSERT, create a newly allocated node with a data value.",
              "Connect the new node\'s Next pointer to an existing target node or Null, and adjust the Head or previous node to point to the new node.",
              "To DELETE, locate the specific tracking pointer pointing to the target node.",
              "Update the preceding node\'s Next pointer to bypass the target node, linking it directly to the subsequent node.",
              "Dynamically deallocate the bypassed node.",
              "To TRAVERSE, start at the Head node and iteratively follow the Next pointers, processing node data, until reaching the Null pointer."
            ], objectives: ["Understand dynamic memory."] }
        },
        {
            id: 'cs7',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Queue Operations', description: 'Enqueue, Dequeue, and visualize FIFO behavior.', difficulty: 'Easy', duration: '20 min', category: 'Data Structures',            content: { aim: "To understand the Queue (FIFO) data structure.", requirements: ["Computer"], theory: "Queue follows First In First Out (FIFO). Operations: Enqueue (rear), Dequeue (front), Peek, isEmpty.", procedure: [
              "Create a Queue array with a specific maximum size to hold elements. Initialize Front and Rear pointers to -1 or 0 appropriately.",
              "To ENQUEUE, input a data item.",
              "Observe the Rear pointer incrementing and placing the item at the sequence\'s end.",
              "To DEQUEUE, request a removal.",
              "Observe the item strictly being removed from the Front pointer location, adhering to the FIFO (First In, First Out) principle, and the Front pointer incrementing.",
              "Observe circular behavior (if demonstrating a Circular Queue) where pointers wrap around using modulo arithmetic.",
              "Verify overflow (Rear meets Front logic) and underflow conditions."
            ], objectives: ["Understand FIFO principle."] }
        },
        {
            id: 'cs8',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Binary Search', description: 'Search a sorted array efficiently using divide and conquer.', difficulty: 'Easy', duration: '20 min', category: 'Algorithms',            content: { aim: "To implement and visualize Binary Search algorithm.", requirements: ["Computer"], theory: "Binary Search works on sorted arrays. Compare target with middle element: if smaller go left, if larger go right. Time complexity: O(log n).", procedure: [
              "Initialize a strictly SORTED numerical array in the interface. Define the target search value (Target).",
              "The algorithm initializes Low (Start) and High (End) pointers at the array\'s boundaries.",
              "The system calculates the Mid index using Mid = (Low + High) / 2 and checks the middle element.",
              "If Target equals Mid element, search is successful, and iteration halts.",
              "If Target is less than Mid element, intuitively discard the right half by setting High = Mid - 1.",
              "If Target is greater than Mid element, discard the left half by setting Low = Mid + 1.",
              "Loop steps 3-6 until the exact target is found or Low exceeds High (signifying target is not present)."
            ], objectives: ["Understand logarithmic search."] }
        },
        {
            id: 'cs9',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'File Handling with Python', description: 'Read and write text and binary files.', difficulty: 'Medium', duration: '40 min', category: 'Programming',            content: { aim: "To perform read and write operations on Text and Binary files using Python.", requirements: ["Computer", "Python IDE"], theory: "File handling allows persistent storage of data. Text files store data as human-readable strings (ASCII/Unicode). Binary files store data in the same format it is held in memory, typically accessed using the 'pickle' module in Python.", procedure: [
              "Open your Python IDE.",
              "To write to a Text File: Use `f = open('data.txt', 'w')`. Write data using `f.write('Hello World')` or `f.writelines()`. Close the file using `f.close()`.",
              "To read from a Text File: Use `f = open('data.txt', 'r')`. Read characters using `f.read()`, lines using `f.readline()`, or iteration over lines. Print the output.",
              "Implement a function to count the number of vowels, consonants, or words in the text file.",
              "To write to a Binary File: Import the `pickle` module. Use `f = open('data.dat', 'wb')`. Create a Python object (e.g., a dictionary or list). Use `pickle.dump(object, f)` to write to the file. Close it.",
              "To read from a Binary File: Use `f = open('data.dat', 'rb')`. Use `data = pickle.load(f)` to deserialize the object. Print the loaded data.",
              "Implement a simple search or update operation on the records within the binary file."
            ], objectives: ["Understand persistent data storage.", "Master serialization with pickle."],
            realWorldApplications: ["Data logging.", "Configuration files.", "Saving application state."],
            observationTable: { columns: ["Operation", "File Type", "Python Function Used", "Status"] },
            assignments: [
                { id: 1, question: "Write a Python script to read a text file and print lines starting with the letter 'A'.", marks: 5 },
                { id: 2, question: "Differentiate between `dump()` and `load()` methods of the pickle module.", marks: 3 }
            ], vivaQuestions: [
                { question: "What is the difference between 'w' mode and 'a' mode in Python file handling?", answer: "'w' mode overwrites the file, 'a' mode appends data to the end of the file." },
                { question: "What is serialization?", answer: "The process of converting a Python object into a byte stream (done via pickle.dump)." }
            ], quizQuestions: [
                { id: 1, question: "Which mode is used to read a binary file in Python?", options: ["r", "w", "rb", "wb"], correctIndex: 2 }
            ]
          }
        },
        {
            id: 'cs10',
    boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
    standards: ['2nd PUC / Class 12'], title: 'Database Management SQL', description: 'Execute SQL queries and integrate Python with SQL.', difficulty: 'Medium', duration: '45 min', category: 'Databases',            content: { aim: "To create and manipulate relational databases using SQL and perform operations through Python.", requirements: ["Computer", "Python IDE", "MySQL Server", "mysql-connector-python module"], theory: "SQL (Structured Query Language) is used to manage relational databases. Key operations include DDL (Data Definition Language) commands like CREATE, DML (Data Manipulation Language) commands like INSERT, UPDATE, DELETE, and DQL (Data Query Language) like SELECT. Python integrates with MySQL via connectors to execute these queries dynamically.", procedure: [
              "Launch MySQL command line or IDE. Create a database using `CREATE DATABASE School;`. Use it via `USE School;`.",
              "Create a table: `CREATE TABLE Student (RollNo INT PRIMARY KEY, Name VARCHAR(50), Marks FLOAT);`.",
              "Insert records: `INSERT INTO Student VALUES (1, 'Alice', 85.5);`. Insert multiple records to populate the table.",
              "Query data: Use `SELECT * FROM Student WHERE Marks > 80;` to retrieve filtered records.",
              "Update records: `UPDATE Student SET Marks = 90 WHERE RollNo = 1;`.",
              "Now, open the Python IDE. Import `mysql.connector`.",
              "Establish a connection using `mysql.connector.connect(host='localhost', user='root', password='password', database='School')`.",
              "Create a cursor object and execute a query string: `cursor.execute(\"SELECT * FROM Student\")`.",
              "Fetch and print all records using `cursor.fetchall()`.",
              "Close the cursor and connection properly."
            ], objectives: ["Understand RDBMS concepts.", "Learn backend programming with Python."],
            realWorldApplications: ["Web development backends.", "Inventory and user management systems."],
            observationTable: { columns: ["SQL Command", "Purpose", "Python equivalent execute string"] },
            assignments: [
                { id: 1, question: "Write an SQL query to display the names of students in descending order of their marks.", marks: 3 },
                { id: 2, question: "Write a complete Python program to insert a new student record into the MySQL database, taking inputs from the user.", marks: 5 }
            ], vivaQuestions: [
                { question: "What is a Primary Key?", answer: "A column or set of columns that uniquely identifies each row in a table." },
                { question: "What is the difference between `fetchall()` and `fetchone()` in Python DB cursors?", answer: "fetchall() returns all rows resulting from the query as a list of tuples, while fetchone() returns a single row at a time." }
            ], quizQuestions: [
                { id: 1, question: "Which SQL clause is used to filter records?", options: ["ORDER BY", "WHERE", "GROUP BY", "SELECT"], correctIndex: 1 }
            ]
          }
        },
        {
                "id": "cs11",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "1st PUC / Class 11",
                        "2nd PUC / Class 12"
                ],
                "title": "Basic Array Operations",
                "description": "Insert, Delete, and find frequency of elements.",
                "difficulty": "Easy",
                "duration": "35 min",
                "category": "Data Structures",
                "content": {
                        "aim": "To write a program to perform insertion, deletion, and frequency counting on a linear array.",
                        "requirements": [
                                "Computer",
                                "C++ / Python / Java IDE"
                        ],
                        "theory": "An array stores elements in contiguous memory. Inserting shifts following elements right. Deleting shifts succeeding elements left. Frequency counts occurrences of a specific target value by traversing.",
                        "procedure": [
                                "Declare an array of specific size and input 'n' initial elements into it.",
                                "For Insertion: Take input for the element to insert and the position. Shift elements from 'n-1' down to the position one place right. Insert the element and increment 'n'.",
                                "For Deletion: Take input for the position to delete. Shift elements from 'position+1' up to 'n-1' one place left. Decrement 'n'.",
                                "For Frequency: Take input for the search element. Iterate from 0 to n-1. Each time the array element matches the search element, increment a counter.",
                                "Output the modified array or the final count."
                        ],
                        "objectives": [
                                "Understand memory shifts.",
                                "Traverse basic collections."
                        ]
                }
        },
        {
                "id": "cs12",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "HTML Forms & Timetables",
                "description": "Create a semantic web page using HTML tables and inputs.",
                "difficulty": "Medium",
                "duration": "45 min",
                "category": "Web Development",
                "content": {
                        "aim": "To design a web page creating a study timetable using HTML tables and an admission form using form elements.",
                        "requirements": [
                                "Computer",
                                "Text Editor (VS Code / Notepad)",
                                "Web Browser"
                        ],
                        "theory": "HTML structures standard web design. <table>, <tr>, <th>, <td> build grids. <form>, <input>, <select> gather user data. Attributes like rowspan and colspan merge table cells.",
                        "procedure": [
                                "Open an editor and write the basic HTML skeleton (<html>, <head>, <body>).",
                                "To create the Timetable: Use the <table> tag. Add a border. Construct header rows for Days/Periods.",
                                "Use <tr> for each day of the week, and <td> for the subjects. Use colspan='x' in a <td> to denote recess/break bridging multiple periods.",
                                "To create the Form: Under a new heading, use the <form> tag.",
                                "Add <input type='text'> for Name, <input type='radio'> for Gender, <input type='date'> for DOB, and <select> dropdowns for subjects/courses.",
                                "Add a <input type='submit'> button to finalize the form interface.",
                                "Save as .html and view in a browser to debug layout issues."
                        ],
                        "objectives": [
                                "Build core web layout.",
                                "Implement data ingestion UI."
                        ]
                }
        },
        {
                "id": "cs13",
                "boards": [
                        "CBSE",
                        "Karnataka PUC",
                        "ICSE"
                ],
                "standards": [
                        "2nd PUC / Class 12"
                ],
                "title": "Object-Oriented Programming",
                "description": "Implement Classes, Objects, and Inheritance.",
                "difficulty": "Hard",
                "duration": "60 min",
                "category": "Programming",
                "content": {
                        "aim": "To write an object-oriented program to demonstrate classes, objects, data encapsulation, and inheritance (single/multiple).",
                        "requirements": [
                                "Computer",
                                "C++ / Python / Java IDE"
                        ],
                        "theory": "OOP relies on 'objects' containing data and methods. Classes act as blueprints. Encapsulation hides data via private access specifiers. Inheritance allows a derived class to acquire properties of a base class.",
                        "procedure": [
                                "Define a base class 'Employee' with private data members for basic salary and name.",
                                "Include public methods to set data, calculate gross salary (adding DA and HRA allowances), and display details.",
                                "Create a derived class 'Manager' that inherits publicly from 'Employee'.",
                                "Add additional data members in 'Manager' for bonus and team size.",
                                "Override the display/calculate methods to include the bonus in the gross salary.",
                                "In the main function, instantiate objects for the 'Manager' class and the generic 'Employee' class.",
                                "Call the methods using the objects and observe how the derived object correctly utilizes base class properties."
                        ],
                        "objectives": [
                                "Map real-world concepts to software.",
                                "Architect scalable applications."
                        ]
                }
        }


    ]
  }
];

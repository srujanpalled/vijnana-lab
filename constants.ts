
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
        title: 'Vernier Calipers', 
        description: 'Measure precise dimensions of small objects.', 
        difficulty: 'Easy', 
        duration: '20 min', 
        category: 'Measurement',
        boards: ['CBSE', 'Karnataka PUC', 'ICSE'],
        standards: ['1st PUC / Class 11'],
        content: {
          videoId: "t9Q_rX0r51E",
          aim: "To measure the diameter of a small spherical body using Vernier Calipers.",
          requirements: ["Vernier Calipers", "Spherical Body (Bob)", "Magnifying Glass"],
          theory: "The Vernier Caliper is a high-precision measuring instrument invented by Pierre Vernier in 1631. It uses a differential scale arrangement to measure dimensions with greater accuracy than a standard meter scale.\n\n**Working Principle (Vernier Acuity):**\nThe device relies on the ability of the human eye to detect the alignment of lines (Vernier Acuity) much more precisely than it can estimate position between lines. It consists of two scales:\n1. **Main Scale:** Fixed, graduated in millimeters.\n2. **Vernier Scale:** Sliding, usually having 10 divisions that span 9mm of the main scale.\n\n**Least Count (L.C.):**\nThe Least Count is the smallest difference between a Main Scale Division (MSD) and a Vernier Scale Division (VSD).\nL.C. = 1 MSD - 1 VSD\nIf N vernier divisions coincide with (N-1) main scale divisions:\n1 VSD = ((N-1)/N) MSD\nTherefore, L.C. = 1 MSD - ((N-1)/N) MSD = (1/N) MSD.\nFor a standard caliper: 1 MSD = 1mm, N = 10. Thus, L.C. = 0.1mm or 0.01cm.\n\n**Measurement Formula:**\nTotal Reading = Main Scale Reading (MSR) + (Vernier Coincidence (VC) × L.C.)\n- **MSR:** The main scale mark immediately to the left of the vernier zero.\n- **VC:** The division on the vernier scale that aligns perfectly with any main scale mark.\n\n**Zero Error Correction:**\nIdeally, when jaws are closed, the zeros of both scales coincide. If not, there is a Zero Error:\n- **Positive Error:** Vernier zero is to the right. Correction is negative.\n- **Negative Error:** Vernier zero is to the left. Correction is positive.",
          procedure: [
            "Determine the Vernier Constant (V.C.) or Least Count.",
            "Check for zero error by closing the jaws completely.",
            "Place the object between the jaws and tighten the screw gently.",
            "Note the Main Scale Reading (M.S.R).",
            "Note the Vernier Scale Division (V.S.D) coinciding with the main scale.",
            "Calculate Total Reading = M.S.R + (V.S.D × V.C.)."
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
            "Measure the radius of the bob.",
            "Suspend the bob and set effective length L.",
            "Displace slightly and release.",
            "Measure time for 20 oscillations.",
            "Calculate T and T²."
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
        title: 'Screw Gauge', 
        description: 'Measure the diameter of a thin wire.', 
        difficulty: 'Medium', 
        duration: '25 min', 
        category: 'Measurement',
        content: {
            videoId: "H7zX7dJ3_1Q",
            aim: "To measure the diameter of a given wire using a screw gauge.",
            requirements: ["Screw Gauge", "Wire", "Half-meter scale"],
            theory: "The Screw Gauge (or Micrometer) works on the principle of converting small linear displacements into large rotational displacements of a screw...",
            procedure: ["Find the least count.", "Determine zero error.", "Place wire between studs.", "Note Main Scale Reading (MSR) and Circular Scale Reading (CSR)."],
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
          title: 'Ohm\'s Law',
          description: 'Verify the relationship between Voltage and Current.',
          difficulty: 'Easy',
          duration: '30 min',
          category: 'Electricity',
          content: {
              videoId: "TsPLr_fKq28",
              aim: "To verify Ohm's Law and determine the resistance of a given wire.",
              requirements: ["Battery", "Voltmeter", "Ammeter", "Rheostat", "Resistor"],
              theory: "Ohm's Law...",
              procedure: ["Connect circuit.", "Adjust rheostat.", "Note Voltmeter and Ammeter.", "Plot V vs I."],
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
          title: 'Concave Mirror',
          description: 'Find focal length using u-v method.',
          difficulty: 'Medium',
          duration: '40 min',
          category: 'Optics',
          content: {
              videoId: "lK6-2gYy2_c",
              aim: "To find the focal length of a concave mirror by determining image distance (v) for various object distances (u).",
              requirements: ["Concave Mirror", "Optical Bench", "Needles/Candle"],
              theory: "A concave mirror...",
              procedure: ["Mount mirror.", "Place object.", "Adjust image.", "Measure v.", "Calculate f."],
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
          id: 'p6', title: 'Metre Bridge — Resistance', description: 'Determine resistance per unit length using Metre Bridge.', difficulty: 'Medium', duration: '35 min', category: 'Electricity',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To determine resistance using a Metre Bridge.", requirements: ["Metre Bridge", "Resistance Box", "Galvanometer", "Jockey"], theory: "Wheatstone Bridge principle: R/S = l/(100-l).", procedure: ["Connect wire.", "Find null point.", "Calculate R."], objectives: ["Verify Kirchhoff's laws."] }
      },
      {
          id: 'p7', title: 'Galvanometer — Figure of Merit', description: 'Determine figure of merit of a galvanometer.', difficulty: 'Hard', duration: '40 min', category: 'Electricity',
          boards: ['Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To determine the figure of merit of a galvanometer.", requirements: ["Galvanometer", "Battery", "Resistance Box"], theory: "k = E / [(R+G) * theta]", procedure: ["Connect galvanometer.", "Note deflections.", "Calculate k."], objectives: ["Understand sensitivity."] }
      },
      {
          id: 'p8', title: 'Glass Prism — Refractive Index', description: 'Find refractive index using minimum deviation.', difficulty: 'Medium', duration: '30 min', category: 'Optics',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To find refractive index of glass prism.", requirements: ["Glass Prism", "Drawing Board", "Pins"], theory: "mu = sin[(A+Dm)/2] / sin(A/2)", procedure: ["Place prism.", "Find minimum deviation.", "Calculate mu."], objectives: ["Snell's Law."] }
      },
      {
          id: 'p9', title: 'Convex Lens — Focal Length', description: 'Determine focal length using u-v method.', difficulty: 'Easy', duration: '25 min', category: 'Optics',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To determine focal length of convex lens.", requirements: ["Convex Lens", "Optical Bench", "Screen"], theory: "1/v - 1/u = 1/f", procedure: ["Mount lens.", "Vary object distance.", "Find image.", "Plot graph."], objectives: ["Verify lens formula."] }
      },
      {
          id: 'p10', title: 'Semiconductor Diode', description: 'Study I-V characteristics of p-n junction diode.', difficulty: 'Medium', duration: '30 min', category: 'Electronics',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To study I-V characteristics of a p-n junction diode.", requirements: ["Diode", "Voltmeter", "Ammeter", "Battery"], theory: "Forward bias: current after 0.7V. Reverse bias: leakage current.", procedure: ["Connect in forward bias.", "Vary voltage.", "Reverse connections.", "Plot I-V."], objectives: ["Semiconductor behavior."] }
      },
      {
          id: 'p11', title: 'Sonometer — String Frequency', description: 'Verify laws of vibrating strings.', difficulty: 'Medium', duration: '35 min', category: 'Waves',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['1st PUC / Class 11'],
          content: { aim: "To verify laws of vibrating strings.", requirements: ["Sonometer", "Tuning Forks", "Weights"], theory: "f = (1/2l)*sqrt(T/mu)", procedure: ["Set up sonometer.", "Find resonance.", "Vary tension."], objectives: ["Standing waves."] }
      },
      {
          id: 'p12', title: 'Resonance Tube — Speed of Sound', description: 'Determine speed of sound in air.', difficulty: 'Medium', duration: '30 min', category: 'Waves',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['1st PUC / Class 11'],
          content: { aim: "To determine speed of sound using resonance tube.", requirements: ["Resonance Tube", "Tuning Forks", "Water"], theory: "v = 2f(l2 - l1)", procedure: ["Fill tube with water.", "Find first resonance.", "Find second resonance.", "Calculate v."], objectives: ["Understand resonance."] }
      }
,
      {
          id: 'p6', title: 'Metre Bridge — Resistance', description: 'Determine resistance per unit length using Metre Bridge.', difficulty: 'Medium', duration: '35 min', category: 'Electricity',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To determine resistance using a Metre Bridge.", requirements: ["Metre Bridge", "Resistance Box", "Galvanometer", "Jockey"], theory: "Wheatstone Bridge principle: R/S = l/(100-l).", procedure: ["Connect wire.", "Find null point.", "Calculate R."], objectives: ["Verify Kirchhoff's laws."] }
      },
      {
          id: 'p7', title: 'Galvanometer — Figure of Merit', description: 'Determine figure of merit of a galvanometer.', difficulty: 'Hard', duration: '40 min', category: 'Electricity',
          boards: ['Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To determine the figure of merit of a galvanometer.", requirements: ["Galvanometer", "Battery", "Resistance Box"], theory: "k = E / [(R+G) * theta]", procedure: ["Connect galvanometer.", "Note deflections.", "Calculate k."], objectives: ["Understand sensitivity."] }
      },
      {
          id: 'p8', title: 'Glass Prism — Refractive Index', description: 'Find refractive index using minimum deviation.', difficulty: 'Medium', duration: '30 min', category: 'Optics',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To find refractive index of glass prism.", requirements: ["Glass Prism", "Drawing Board", "Pins"], theory: "mu = sin[(A+Dm)/2] / sin(A/2)", procedure: ["Place prism.", "Find minimum deviation.", "Calculate mu."], objectives: ["Snell's Law."] }
      },
      {
          id: 'p9', title: 'Convex Lens — Focal Length', description: 'Determine focal length using u-v method.', difficulty: 'Easy', duration: '25 min', category: 'Optics',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To determine focal length of convex lens.", requirements: ["Convex Lens", "Optical Bench", "Screen"], theory: "1/v - 1/u = 1/f", procedure: ["Mount lens.", "Vary object distance.", "Find image.", "Plot graph."], objectives: ["Verify lens formula."] }
      },
      {
          id: 'p10', title: 'Semiconductor Diode', description: 'Study I-V characteristics of p-n junction diode.', difficulty: 'Medium', duration: '30 min', category: 'Electronics',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To study I-V characteristics of a p-n junction diode.", requirements: ["Diode", "Voltmeter", "Ammeter", "Battery"], theory: "Forward bias: current after 0.7V. Reverse bias: leakage current.", procedure: ["Connect in forward bias.", "Vary voltage.", "Reverse connections.", "Plot I-V."], objectives: ["Semiconductor behavior."] }
      },
      {
          id: 'p11', title: 'Sonometer — String Frequency', description: 'Verify laws of vibrating strings.', difficulty: 'Medium', duration: '35 min', category: 'Waves',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['1st PUC / Class 11'],
          content: { aim: "To verify laws of vibrating strings.", requirements: ["Sonometer", "Tuning Forks", "Weights"], theory: "f = (1/2l)*sqrt(T/mu)", procedure: ["Set up sonometer.", "Find resonance.", "Vary tension."], objectives: ["Standing waves."] }
      },
      {
          id: 'p12', title: 'Resonance Tube — Speed of Sound', description: 'Determine speed of sound in air.', difficulty: 'Medium', duration: '30 min', category: 'Waves',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['1st PUC / Class 11'],
          content: { aim: "To determine speed of sound using resonance tube.", requirements: ["Resonance Tube", "Tuning Forks", "Water"], theory: "v = 2f(l2 - l1)", procedure: ["Fill tube with water.", "Find first resonance.", "Find second resonance.", "Calculate v."], objectives: ["Understand resonance."] }
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
          procedure: ["Rinse burette with NaOH.", "Pipette HCl into flask.", "Add indicator.", "Titrate till pale pink."],
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
          title: 'Salt Analysis', 
          description: 'Identify the cation in a given salt.', 
          difficulty: 'Hard', 
          duration: '60 min', 
          category: 'Inorganic Chem',
          content: {
              videoId: "7z9_kK0a6E0",
              aim: "To identify the basic radical (cation) in the given salt.",
              requirements: ["Test tubes", "Reagents (NaOH, NH4OH, etc)", "Salt sample"],
              theory: "Systematic Qualitative Analysis...",
              procedure: ["Prepare solution.", "Add Group 0 reagent.", "Add Group 1 reagent.", "Continue."],
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
          title: 'pH Determination',
          description: 'Find pH of various fruit juices.',
          difficulty: 'Easy',
          duration: '20 min',
          category: 'Physical Chem',
          content: {
              videoId: "ckPHbHlG9MQ",
              aim: "To determine the pH of vegetable/fruit juices using pH paper.",
              requirements: ["pH Paper", "Standard pH scale", "Juice samples"],
              theory: "The pH scale...",
              procedure: ["Dip pH paper.", "Compare color.", "Note pH."],
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
          title: 'Functional Groups',
          description: 'Detect presence of Aldehydes/Ketones.',
          difficulty: 'Medium',
          duration: '40 min',
          category: 'Organic Chem',
          content: {
              videoId: "5Jb2u9ihC44",
              aim: "To identify the functional group (Aldehyde) in the given organic compound.",
              requirements: ["Schiff's Reagent", "Fehling's Solution", "Test tubes"],
              theory: "Functional groups...",
              procedure: ["Add Schiff's reagent.", "Add Fehling's A & B. Heat."],
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
          title: 'Exothermic Reaction',
          description: 'Study enthalpy change of neutralization.',
          difficulty: 'Medium',
          duration: '30 min',
          category: 'Thermodynamics',
          content: {
              videoId: "rdkUe_O20Ts",
              aim: "To determine the enthalpy of neutralization of strong acid and strong base.",
              requirements: ["Calorimeter", "Thermometer", "HCl", "NaOH"],
              theory: "Enthalpy...",
              procedure: ["Measure initial temps.", "Mix quickly.", "Record highest temp."],
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
          id: 'c6', title: 'KMnO4 Titration (Redox)', description: 'Standardize KMnO4 against ferrous ammonium sulphate.', difficulty: 'Hard', duration: '40 min', category: 'Volumetric Analysis',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To determine concentration of KMnO4 by titrating against FAS.", requirements: ["Burette", "Pipette", "KMnO4", "FAS", "H2SO4"], theory: "KMnO4 acts as self-indicator. Endpoint: persistent pink.", procedure: ["Prepare FAS.", "Fill burette with KMnO4.", "Titrate until pink.", "Calculate molarity."], objectives: ["Understand redox titration."] }
      },
      {
          id: 'c7', title: 'Qualitative Analysis — Cations', description: 'Identify cations using systematic group analysis.', difficulty: 'Hard', duration: '45 min', category: 'Qualitative Analysis',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To identify the cation present in a given salt.", requirements: ["Test Tubes", "Reagents", "Bunsen Burner"], theory: "Cations identified by dissolving salt and adding group reagents systematically.", procedure: ["Dissolve salt.", "Perform preliminary tests.", "Add group reagents.", "Confirm with specific tests."], objectives: ["Master wet chemistry."] }
      },
      {
          id: 'c8', title: 'Qualitative Analysis — Anions', description: 'Detect anions using dry and wet tests.', difficulty: 'Medium', duration: '35 min', category: 'Qualitative Analysis',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To identify the anion present in a given salt.", requirements: ["Test Tubes", "Dilute H2SO4", "BaCl2", "AgNO3"], theory: "CO3 gives CO2 effervescence, SO4 gives white ppt with BaCl2, Cl gives white curdy ppt with AgNO3.", procedure: ["Perform dry heating.", "Add dilute acid.", "Test with specific reagents.", "Confirm anion."], objectives: ["Identify common anions."] }
      },
      {
          id: 'c9', title: 'Rate of Reaction', description: 'Study how temperature affects reaction rate.', difficulty: 'Medium', duration: '35 min', category: 'Kinetics',
          boards: ['Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To study effect of temperature on rate of reaction.", requirements: ["Na2S2O3", "HCl", "Beakers", "Thermometer", "Stopwatch"], theory: "Rate doubles for every 10C rise. Arrhenius equation: k = Ae^(-Ea/RT).", procedure: ["Mix reagents at room temp.", "Time until mark disappears.", "Repeat at higher temperatures.", "Plot rate vs temp."], objectives: ["Understand activation energy."] }
      },
      {
          id: 'c10', title: 'Enthalpy of Neutralization', description: 'Measure heat released in acid-base neutralization.', difficulty: 'Medium', duration: '30 min', category: 'Thermodynamics',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To determine enthalpy of neutralization.", requirements: ["Calorimeter", "HCl", "NaOH", "Thermometer"], theory: "For strong acid + strong base: DeltaH = -57.1 kJ/mol. Q = m*c*DeltaT.", procedure: ["Measure initial temps.", "Mix acid and base.", "Record final temp.", "Calculate enthalpy."], objectives: ["Understand thermochemistry."] }
      },
      {
          id: 'c11', title: 'Preparation of Potash Alum', description: 'Prepare potash alum crystals from aluminium.', difficulty: 'Medium', duration: '45 min', category: 'Preparations',
          boards: ['Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To prepare potash alum from scrap aluminium.", requirements: ["Aluminium", "KOH", "H2SO4", "Beaker"], theory: "Al dissolves in KOH, then reacts with H2SO4 to form potash alum crystals.", procedure: ["Dissolve Al in KOH.", "Filter and add H2SO4.", "Heat and concentrate.", "Cool to crystallize.", "Filter and dry."], objectives: ["Understand crystallization."] }
      },
      {
          id: 'c12', title: 'pH of Various Solutions', description: 'Determine pH of household substances.', difficulty: 'Easy', duration: '20 min', category: 'Acids & Bases',
          boards: ['CBSE', 'Karnataka PUC', 'ICSE'], standards: ['1st PUC / Class 11'],
          content: { aim: "To determine pH of various solutions using pH paper.", requirements: ["pH Paper", "Solutions", "Color Chart"], theory: "pH = -log[H+]. Acids: pH < 7, Neutral: pH = 7, Bases: pH > 7.", procedure: ["Dip pH paper in solution.", "Compare color with chart.", "Record pH.", "Classify as acid/base/neutral."], objectives: ["Classify solutions."] }
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
        title: 'Mitosis in Onion Tip', 
        description: 'Observe stages of cell division.', 
        difficulty: 'Medium', 
        duration: '40 min', 
        category: 'Cell Biology',
        content: {
            videoId: "L0k-enzoeOM",
            aim: "To study mitosis in onion root tip cells.",
            requirements: ["Microscope", "Slide", "Onion root"],
            theory: "Mitosis...",
            procedure: ["Prepare slide.", "Stain.", "Observe."],
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
          title: 'Stomata Distribution',
          description: 'Compare stomata on leaf surfaces.',
          difficulty: 'Easy',
          duration: '30 min',
          category: 'Plant Physiology',
          content: {
              videoId: "IlmgFYmbAUg",
              aim: "To study the distribution of stomata on the upper and lower surfaces of a leaf.",
              requirements: ["Leaf", "Forceps", "Safranin", "Glycerin", "Microscope"],
              theory: "Stomata...",
              procedure: ["Peel epidermis.", "Stain and mount.", "Count stomata."],
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
          title: 'Osmosis (Potato)',
          description: 'Demonstrate osmosis using potato osmometer.',
          difficulty: 'Easy',
          duration: '45 min',
          category: 'Cell Physiology',
          content: {
              videoId: "eZsUv-9qYEQ",
              aim: "To demonstrate osmosis using a potato osmometer.",
              requirements: ["Large Potato", "Sugar solution", "Pin", "Beaker", "Water"],
              theory: "Osmosis...",
              procedure: ["Scoop cavity.", "Fill with sugar.", "Place in water.", "Mark level.", "Observe."],
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
          title: 'Test for Sugar in Urine',
          description: 'Detect glucose using Benedict\'s Reagent.',
          difficulty: 'Medium',
          duration: '30 min',
          category: 'Physiology',
          content: {
              videoId: "M_wZ9XQ7v_I",
              aim: "To detect the presence of sugar (glucose) in a given urine sample.",
              requirements: ["Urine sample", "Benedict's Reagent", "Test tube", "Bunsen Burner"],
              theory: "Diabetes mellitus...",
              procedure: ["Take urine.", "Add Benedict's reagent.", "Boil.", "Observe color."],
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
          title: 'Paper Chromatography',
          description: 'Separate plant pigments.',
          difficulty: 'Hard',
          duration: '60 min',
          category: 'Biochemistry',
          content: {
              videoId: "SnbXpZ_k6c0",
              aim: "To separate plant pigments using paper chromatography.",
              requirements: ["Spinach leaves", "Acetone", "Chromatography paper", "Jar"],
              theory: "Chromatography...",
              procedure: ["Extract pigment.", "Spot on paper.", "Dip in solvent.", "Wait.", "Calculate Rf."],
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
          id: 'b6', title: 'Pollen Germination', description: 'Study pollen tube growth on stigma.', difficulty: 'Medium', duration: '30 min', category: 'Reproduction',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To study pollen germination on a slide.", requirements: ["Pollen grains", "Sugar solution", "Slides", "Microscope"], theory: "Pollen grains germinate on sugar solution. Tube carries male gametes to ovule.", procedure: ["Prepare 10% sugar solution.", "Dust pollen on slide.", "Add solution.", "Observe after 30 min.", "Count germinated pollen."], objectives: ["Understand plant reproduction."] }
      },
      {
          id: 'b7', title: 'DNA Isolation', description: 'Extract DNA from plant material.', difficulty: 'Medium', duration: '40 min', category: 'Genetics',
          boards: ['CBSE'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To isolate DNA from plant material.", requirements: ["Spinach/Peas", "Detergent", "Salt", "Ethanol"], theory: "Detergent lyses membranes, salt precipitates proteins, ethanol precipitates DNA.", procedure: ["Blend plant with salt water.", "Add detergent and filter.", "Layer cold ethanol.", "Spool DNA threads."], objectives: ["Understand DNA extraction."] }
      },
      {
          id: 'b8', title: 'Mendelian Inheritance', description: 'Simulate inheritance ratios using beads.', difficulty: 'Easy', duration: '25 min', category: 'Genetics',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To study Mendelian inheritance using bead simulation.", requirements: ["Colored Beads", "Bags", "Data Sheet"], theory: "Mendel's laws: Dominance, Segregation, Independent Assortment. F2 ratio 3:1.", procedure: ["Assign colors to alleles.", "Draw bead pairs.", "Record phenotype ratios.", "Compare with expected."], objectives: ["Verify Mendel's laws."] }
      },
      {
          id: 'b9', title: 'Pedigree Chart Analysis', description: 'Analyze inheritance patterns.', difficulty: 'Medium', duration: '25 min', category: 'Genetics',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To study and analyze pedigree charts.", requirements: ["Pedigree Charts", "Colored Pens"], theory: "Pedigree charts trace inheritance. Squares=male, circles=female, filled=affected.", procedure: ["Study pedigree.", "Identify affected individuals.", "Determine pattern.", "Predict genotypes."], objectives: ["Interpret genetic inheritance."] }
      },
      {
          id: 'b10', title: 'Plant Population Density', description: 'Study density using quadrat method.', difficulty: 'Easy', duration: '30 min', category: 'Ecology',
          boards: ['CBSE'], standards: ['2nd PUC / Class 12'],
          content: { aim: "To study plant population density by quadrat method.", requirements: ["Quadrat", "Measuring Tape", "Data Sheet"], theory: "Throw frame randomly, count individuals. Density = count / area.", procedure: ["Select area.", "Throw quadrat 5 times.", "Count plants.", "Calculate density."], objectives: ["Understand ecological sampling."] }
      },
      {
          id: 'b11', title: 'Plasmolysis', description: 'Observe plasmolysis in Rhoeo epidermal cells.', difficulty: 'Easy', duration: '20 min', category: 'Cell Biology',
          boards: ['CBSE', 'Karnataka PUC'], standards: ['1st PUC / Class 11'],
          content: { aim: "To study plasmolysis in epidermal peel.", requirements: ["Rhoeo leaves", "Sucrose solution", "Microscope"], theory: "In hypertonic solution, water leaves cell, membrane shrinks from wall = plasmolysis.", procedure: ["Peel epidermis.", "Mount in water.", "Replace with sucrose.", "Observe plasmolysis.", "Add water for deplasmolysis."], objectives: ["Understand osmotic behavior."] }
      },
      {
          id: 'b12', title: 'Urine Analysis', description: 'Test for sugar and albumin in urine.', difficulty: 'Easy', duration: '20 min', category: 'Physiology',
          boards: ['CBSE'], standards: ['1st PUC / Class 11'],
          content: { aim: "To test for sugar and albumin in urine.", requirements: ["Urine sample", "Benedicts reagent", "Nitric acid"], theory: "Sugar: Benedicts test (green/orange). Albumin: HNO3 (white ppt).", procedure: ["Add Benedicts reagent and heat.", "Observe color.", "For albumin: heat with HNO3.", "Note precipitate."], objectives: ["Clinical biochemistry."] }
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
            id: 'm1', title: 'Graphing Functions', description: 'Plot and analyze functions.', difficulty: 'Easy', duration: '20 min', category: 'Calculus',
            content: { 
                videoId: "S66-267_2Ck",
                aim: "To plot functions.", requirements: ["Graph paper"], theory: "f(x)=x^2 is a parabola.", procedure: ["Input function", "Plot points"], objectives: ["Visualize graphs"],
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
            id: 'm2', title: 'Definite Integral', description: 'Area under curve.', difficulty: 'Medium', duration: '30 min', category: 'Calculus',
            content: { 
                videoId: "rfG8ce4nNh0",
                aim: "Find area.", requirements: ["Graph"], theory: "Integration is summation.", procedure: ["Select limits", "Sum strips"], objectives: ["Understand Riemann Sum"],
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
            id: 'm3', title: 'Unit Circle', description: 'Trigonometric ratios.', difficulty: 'Easy', duration: '20 min', category: 'Trigonometry',
            content: { 
                videoId: "35-aVBDK5Yk",
                aim: "Study sin/cos.", requirements: ["Circle"], theory: "x^2+y^2=1", procedure: ["Rotate point", "Observe values"], objectives: ["Link geometry to trig"],
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
            id: 'm4', title: 'Conic Sections', description: 'Parabola, Ellipse, Hyperbola.', difficulty: 'Hard', duration: '40 min', category: 'Geometry',
            content: { 
                videoId: "HO2zAU3Eppo",
                aim: "Construct conics.", requirements: ["Focus", "Directrix"], theory: "Locus of points.", procedure: ["Set focus", "Draw"], objectives: ["Eccentricity"],
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
            id: 'm5', title: 'Vectors', description: 'Cross and Dot products.', difficulty: 'Medium', duration: '30 min', category: 'Algebra',
            content: { 
                videoId: "ml4NSzCQobk",
                aim: "Vector operations.", requirements: ["3D space"], theory: "A.B = |A||B|cos0", procedure: ["Define vectors", "Compute"], objectives: ["Spatial understanding"],
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
            id: 'm6', title: 'Inverse Trig Functions', description: 'Explore domains and graphs of sin⁻¹, cos⁻¹, tan⁻¹.', difficulty: 'Medium', duration: '25 min', category: 'Trigonometry',
            boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
            content: { aim: "To study inverse trigonometric functions and their principal values.", requirements: ["Graph paper", "Calculator"], theory: "sin⁻¹x has domain [-1,1] and range [-π/2, π/2]. cos⁻¹x: domain [-1,1], range [0, π]. tan⁻¹x: domain ℝ, range (-π/2, π/2).", procedure: ["Plot y = sin⁻¹x for x ∈ [-1,1].", "Plot y = cos⁻¹x.", "Plot y = tan⁻¹x.", "Find principal values for given inputs."], objectives: ["Understand inverse functions."] }
        },
        {
            id: 'm7', title: 'Maxima & Minima', description: 'Find local maxima and minima of functions using derivatives.', difficulty: 'Medium', duration: '25 min', category: 'Calculus',
            boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
            content: { aim: "To visualize maxima, minima and inflection points of functions.", requirements: ["Graph paper", "Calculator"], theory: "Critical points occur where f'(x) = 0. Second derivative test: f''(x) > 0 → minimum, f''(x) < 0 → maximum.", procedure: ["Choose function f(x).", "Find f'(x) = 0.", "Apply second derivative test.", "Plot function with critical points marked."], objectives: ["Apply differential calculus."] }
        },
        {
            id: 'm8', title: 'Area Under Curve', description: 'Calculate area enclosed using definite integration.', difficulty: 'Hard', duration: '30 min', category: 'Calculus',
            boards: ['Karnataka PUC'], standards: ['2nd PUC / Class 12'],
            content: { aim: "To calculate the area under a curve using definite integration.", requirements: ["Graph paper", "Calculator"], theory: "Area = ∫[a to b] f(x)dx. For area between two curves: ∫[a to b] [f(x) - g(x)]dx.", procedure: ["Plot the function.", "Identify limits of integration.", "Calculate the definite integral.", "Verify using geometric formulas where possible."], objectives: ["Apply integral calculus."] }
        },
        {
            id: 'm9', title: 'Probability Distribution', description: 'Simulate and visualize probability distributions.', difficulty: 'Easy', duration: '20 min', category: 'Statistics',
            boards: ['CBSE', 'Karnataka PUC', 'ICSE'], standards: ['1st PUC / Class 11'],
            content: { aim: "To understand probability distributions through dice/coin experiments.", requirements: ["Dice", "Coins", "Tally Sheet"], theory: "Probability P(E) = favorable outcomes / total outcomes. For two dice: sample space = 36.", procedure: ["Roll dice 50 times.", "Record outcomes.", "Calculate experimental probability.", "Compare with theoretical probability.", "Plot distribution."], objectives: ["Understand random variables."] }
        },
        {
            id: 'm10', title: 'Matrix Operations', description: 'Perform addition, multiplication, inverse, and determinant.', difficulty: 'Medium', duration: '25 min', category: 'Algebra',
            boards: ['CBSE', 'Karnataka PUC', 'ICSE'], standards: ['2nd PUC / Class 12'],
            content: { aim: "To perform matrix operations and understand their properties.", requirements: ["Calculator", "Paper"], theory: "Matrix multiplication: (AB)ij = Σ aik × bkj. Determinant: |A| = ad - bc (2×2). Inverse: A⁻¹ = adj(A)/|A|.", procedure: ["Define two matrices A and B.", "Compute A+B, A×B.", "Find determinant of A.", "Compute inverse A⁻¹.", "Verify A × A⁻¹ = I."], objectives: ["Apply linear algebra."] }
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
            id: 'cs1', title: 'Logic Gates', description: 'AND, OR, NOT, XOR gates.', difficulty: 'Easy', duration: '20 min', category: 'Digital Logic',
            content: { 
                videoId: "gI-qXk7XojA",
                aim: "Verify truth tables.", requirements: ["Gates"], theory: "Boolean algebra.", procedure: ["Connect inputs", "Check output"], objectives: ["Digital circuits"],
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
            id: 'cs2', title: 'Bubble Sort', description: 'Sorting algorithm visualization.', difficulty: 'Medium', duration: '30 min', category: 'Algorithms',
            content: { 
                videoId: "nmhjrI-aW5o",
                aim: "Visualize sorting.", requirements: ["Array"], theory: "O(n^2) complexity.", procedure: ["Step through swaps"], objectives: ["Algorithm analysis"],
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
            id: 'cs3', title: 'Insertion Sort', description: 'Sorting algorithm.', difficulty: 'Medium', duration: '30 min', category: 'Algorithms',
            content: { 
                videoId: "OGzPmgsI-pQ",
                aim: "Visualize insertion sort.", requirements: ["Array"], theory: "O(n^2).", procedure: ["Pick element", "Insert"], objectives: ["Sorting"],
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
            id: 'cs4', title: 'Stack Operations', description: 'Push and Pop visualization.', difficulty: 'Easy', duration: '20 min', category: 'Data Structures',
            content: { 
                videoId: "I5lq6sCuABE",
                aim: "LIFO principle.", requirements: ["Stack"], theory: "Last In First Out.", procedure: ["Push items", "Pop items"], objectives: ["Memory structure"],
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
            id: 'cs5', title: 'Number Systems', description: 'Binary to Decimal conversion.', difficulty: 'Easy', duration: '15 min', category: 'Basics',
            content: { 
                videoId: "LpuPe81bc2w",
                aim: "Convert bases.", requirements: ["Number"], theory: "Base 2 vs Base 10.", procedure: ["Enter binary", "See decimal"], objectives: ["Data representation"],
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
            id: 'cs6', title: 'Linked List Operations', description: 'Insert, delete, and traverse a singly linked list.', difficulty: 'Medium', duration: '30 min', category: 'Data Structures',
            boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
            content: { aim: "To implement and visualize linked list operations.", requirements: ["Computer"], theory: "A linked list stores data in nodes. Each node has data and a pointer to the next node. Operations: insert (head/tail/middle), delete, search, traverse.", procedure: ["Create an empty linked list.", "Insert elements at different positions.", "Delete elements.", "Traverse and display."], objectives: ["Understand dynamic memory."] }
        },
        {
            id: 'cs7', title: 'Queue Operations', description: 'Enqueue, Dequeue, and visualize FIFO behavior.', difficulty: 'Easy', duration: '20 min', category: 'Data Structures',
            boards: ['CBSE', 'Karnataka PUC'], standards: ['2nd PUC / Class 12'],
            content: { aim: "To understand the Queue (FIFO) data structure.", requirements: ["Computer"], theory: "Queue follows First In First Out (FIFO). Operations: Enqueue (rear), Dequeue (front), Peek, isEmpty.", procedure: ["Initialize empty queue.", "Enqueue elements.", "Dequeue elements.", "Observe FIFO order."], objectives: ["Understand FIFO principle."] }
        },
        {
            id: 'cs8', title: 'Binary Search', description: 'Search a sorted array efficiently using divide and conquer.', difficulty: 'Easy', duration: '20 min', category: 'Algorithms',
            boards: ['CBSE', 'Karnataka PUC', 'ICSE'], standards: ['1st PUC / Class 11'],
            content: { aim: "To implement and visualize Binary Search algorithm.", requirements: ["Computer"], theory: "Binary Search works on sorted arrays. Compare target with middle element: if smaller go left, if larger go right. Time complexity: O(log n).", procedure: ["Create sorted array.", "Set low=0 and high=n-1.", "Find mid = (low+high)/2.", "Compare and narrow search range.", "Repeat until found or low > high."], objectives: ["Understand logarithmic search."] }
        }
    ]
  }
];

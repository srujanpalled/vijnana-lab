const { injectData } = require('./inject_enhancements.cjs');

const physicsBatch1 = {
  // --- Vernier Calipers ---
  "p1": {
    quizQuestions: [
      { id: 1, question: "What is the least count of a standard Vernier Caliper?", options: ["0.1 cm", "0.01 cm", "0.001 cm", "1 cm"], correctIndex: 1 },
      { id: 2, question: "If the zero of the vernier scale is to the right of the main scale zero, the zero error is:", options: ["Positive", "Negative", "Zero", "Infinite"], correctIndex: 0 },
      { id: 3, question: "Which part of the Vernier caliper is used to measure the internal diameter of a cylinder?", options: ["Main scale", "External jaws", "Internal jaws", "Depth probe"], correctIndex: 2 },
      { id: 4, question: "The main scale of a Vernier caliper is graduated in:", options: ["Meters and Decimeters", "Centimeters and Millimeters", "Inches only", "Micrometers"], correctIndex: 1 },
      { id: 5, question: "How is the least count of a Vernier caliper calculated?", options: ["1 MSD + 1 VSD", "1 MSD / 1 VSD", "1 MSD - 1 VSD", "1 MSD * 1 VSD"], correctIndex: 2 },
      { id: 6, question: "A negative zero error is corrected by:", options: ["Adding it to the observed reading", "Subtracting it from the observed reading", "Multiplying it", "Ignoring it"], correctIndex: 0 },
      { id: 7, question: "What is the purpose of the depth probe in a Vernier caliper?", options: ["Measure external diameter", "Measure internal diameter", "Measure depth of a beaker", "Measure weight"], correctIndex: 2 },
      { id: 8, question: "If 10 vernier scale divisions coincide with 9 main scale divisions (1 MSD = 1mm), the least count is:", options: ["0.1 mm", "0.01 mm", "1 mm", "0.9 mm"], correctIndex: 0 },
      { id: 9, question: "The sliding friction in a Vernier caliper is reduced by using:", options: ["A locking screw", "A fine adjustment screw", "Lubrication", "The depth strip"], correctIndex: 2 },
      { id: 10, question: "Vernier calipers are based on the principle of:", options: ["Alignment of two different scales", "Screw and nut", "Lenses", "Magnetism"], correctIndex: 0 }
    ],
    vivaQuestions: [
      { question: "What is meant by the 'least count' of a measuring instrument?", answer: "It is the smallest physical quantity that can be accurately measured by the given instrument." },
      { question: "What is the principle of a Vernier Caliper?", answer: "It uses two scales (Main and Vernier) with slightly different division sizes; the difference between one main scale division and one vernier scale division gives the least count." },
      { question: "What is zero error?", answer: "It is the error that occurs when the zero marks of the main scale and the vernier scale do not coincide when the jaws are completely closed." },
      { question: "How do you account for a positive zero error?", answer: "A positive zero error is subtracted from the observed reading to get the true reading." },
      { question: "What are the internal jaws used for?", answer: "They are used for measuring the inner dimensions of objects like hollow pipes or cylinders." },
      { question: "Can a Vernier caliper measure the depth of a blind hole?", answer: "Yes, by using the depth measuring strip (or probe) attached to the sliding jaw." },
      { question: "Why is a Vernier scale better than a standard meter scale?", answer: "It provides a higher resolution and accuracy, allowing measurements down to 0.1 mm (or 0.01 cm), compared to 1 mm on a meter scale." },
      { question: "What is the difference between sliding jaws and fixed jaws?", answer: "Fixed jaws are attached to the main scale and provide a static reference point, while sliding jaws move with the vernier scale to hold the object." },
      { question: "What material are high-quality Vernier calipers usually made of?", answer: "They are typically made of stainless steel to prevent rust and thermal expansion issues." },
      { question: "If the zero of the vernier scale is slightly to the left of the zero on the main scale, what kind of error is it?", answer: "Negative zero error." }
    ],
    realWorldApplications: [
      "Precision Machining: Used by machinists and engineers for highly accurate dimension checks on metal parts.",
      "Aerospace Engineering: Inspecting the diameters and depths of critical engine components to precise tolerances.",
      "Automotive Manufacturing: Measuring the internal diameter of engine cylinders for piston fitting.",
      "Plumbing and Piping: Accurately determining the inner and outer diameters of pipes for connecting tight-fitting joints.",
      "Woodworking: Helping carpenters achieve perfect joints by measuring mortises and tenons.",
      "Medical Implants: Ensuring the dimensions of joint replacements and surgical screws are exactly according to design."
    ]
  },

  // --- Simple Pendulum ---
  "p2": {
    quizQuestions: [
      { id: 1, question: "The time period of a simple pendulum depends directly on:", options: ["Mass of the bob", "Amplitude of swing", "Square root of length", "Material of the bob"], correctIndex: 2 },
      { id: 2, question: "If the length of a simple pendulum is increased by four times, its time period becomes:", options: ["Halved", "Doubled", "Four times", "Remains same"], correctIndex: 1 },
      { id: 3, question: "Which force is responsible for the restoring force in a simple pendulum?", options: ["Tension", "Air resistance", "Component of gravity", "Centripetal force"], correctIndex: 2 },
      { id: 4, question: "What is the time period of a seconds pendulum?", options: ["1 second", "2 seconds", "4 seconds", "0.5 seconds"], correctIndex: 1 },
      { id: 5, question: "At the center of the earth, the time period of a simple pendulum is:", options: ["Zero", "Infinite", "1 second", "Same as surface"], correctIndex: 1 },
      { id: 6, question: "The motion of a simple pendulum is considered simple harmonic if the amplitude is:", options: ["Large", "Greater than 45 degrees", "Small (less than 15 degrees)", "Exactly 90 degrees"], correctIndex: 2 },
      { id: 7, question: "At the extreme position of the swing, the kinetic energy is:", options: ["Maximum", "Minimum (Zero)", "Equal to potential energy", "Infinite"], correctIndex: 1 },
      { id: 8, question: "If a simple pendulum is taken to the moon, its time period will:", options: ["Increase", "Decrease", "Remain the same", "Become zero"], correctIndex: 0 },
      { id: 9, question: "The effective length of a simple pendulum is measured from the point of suspension to the:", options: ["Top of the bob", "Center of gravity of the bob", "Bottom of the bob", "Middle of the string"], correctIndex: 1 },
      { id: 10, question: "In the L-T^2 graph for a simple pendulum, the slope represents:", options: ["g/(4π^2)", "4π^2/g", "g/2π", "2π/g"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a simple pendulum?", answer: "An idealized model consisting of a point mass (bob) suspended by a massless, inextensible string." },
      { question: "Define the 'time period' of a pendulum.", answer: "The time taken to complete one full oscillation." },
      { question: "Does the mass of the bob affect the time period?", answer: "No, the time period is independent of the mass of the bob." },
      { question: "Why must the amplitude of oscillation be small for the formula T = 2π√(L/g) to hold true?", answer: "Because the restoring force is proportional to the sine of the angle (sin θ), and sin θ ≈ θ only for small angles." },
      { question: "What is the relationship between the graph of Length (L) versus Time Period Squared (T²)?", answer: "It is a straight line passing through the origin, indicating L is directly proportional to T²." },
      { question: "What happens to the time period if the experiment is performed in an accelerated elevator going upwards?", answer: "The effective gravity (g') increases, so the time period (T) decreases." },
      { question: "What is a 'seconds pendulum'?", answer: "A pendulum whose time period is exactly 2 seconds." },
      { question: "Where is the potential energy of the pendulum maximum?", answer: "At the extreme positions of its swing." },
      { question: "Why is the bob usually made a heavy metallic sphere?", answer: "To keep the center of gravity low and stable, and minimize the dampening effect of air resistance." },
      { question: "How does the L-T² graph help in finding the acceleration due to gravity?", answer: "The slope of the graph is equal to 4π²/g, from which 'g' can be calculated." }
    ],
    realWorldApplications: [
      "Horology (Clocks): Historically the fundamental mechanism for regulating the timekeeping of grandfather clocks.",
      "Gravimetry: Used historically to measure the local acceleration due to gravity (g) at various places on Earth.",
      "Seismographs: Similar pendulum mechanics form the basis of early seismographs used to detect earthquakes.",
      "Foucault Pendulum: Demonstrated the rotation of the Earth using an unconstrained large pendulum.",
      "Metronomes: Musicians use inverted pendulums (metronomes) to maintain a steady tempo.",
      "Amusement Park Rides: The physics of swing rides and pirate ship rides are based on pendulum mechanics and resonance."
    ]
  },

  // --- Screw Gauge ---
  "p3": {
    quizQuestions: [
      { id: 1, question: "The pitch of a screw gauge is the distance moved by the spindle for:", options: ["One complete rotation", "Half a rotation", "Two complete rotations", "1/100th of a rotation"], correctIndex: 0 },
      { id: 2, question: "If the pitch is 1mm and circular scale has 100 divisions, what is the least count?", options: ["0.1 mm", "0.01 mm", "0.001 mm", "1 cm"], correctIndex: 1 },
      { id: 3, question: "The part of the screw gauge that prevents overtightening onto the object is the:", options: ["Thimble", "Sleeve", "Ratchet", "U-frame"], correctIndex: 2 },
      { id: 4, question: "If the zero of the circular scale is below the reference line when closed, the zero error is:", options: ["Positive", "Negative", "Zero", "Not applicable"], correctIndex: 0 },
      { id: 5, question: "A screw gauge is generally more precise than a vernier caliper by a factor of:", options: ["2", "10", "100", "They are identical"], correctIndex: 1 },
      { id: 6, question: "To find the thickness of a wire, we measure it at several places because:", options: ["To find zero error", "The wire may not be uniformly cylindrical", "The screw gauge is inaccurate", "To increase temperature"], correctIndex: 1 },
      { id: 7, question: "The linear scale parallel to the axis of the screw is called the:", options: ["Circular scale", "Pitch scale (Sleeve)", "Vernier scale", "Ratchet scale"], correctIndex: 1 },
      { id: 8, question: "Backlash error in a screw gauge is caused by:", options: ["Wear and tear of the screw threads", "Change in temperature", "Parallax error", "Magnetic interference"], correctIndex: 0 },
      { id: 9, question: "To avoid backlash error, the screw should be turned:", options: ["In both directions constantly", "In one direction only during measurement", "As fast as possible", "With bare hands"], correctIndex: 1 },
      { id: 10, question: "Which of the following cannot be measured directly using a screw gauge?", options: ["Diameter of a wire", "Thickness of a glass slab", "Internal diameter of a beaker", "Thickness of a paper"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What is the 'pitch' of a screw?", answer: "It is the linear distance covered by the tip of the screw in one complete rotation." },
      { question: "How do you calculate the least count of a screw gauge?", answer: "Least Count = Pitch / Number of divisions on the circular scale." },
      { question: "What is the function of the ratchet?", answer: "It ensures a uniform pressure is applied on the object being measured and prevents overtightening." },
      { question: "What is backlash error in a screw gauge?", answer: "An error due to play or loose fitting between the threads of the screw and the nut, usually caused by wear and tear." },
      { question: "How do you eliminate or minimize backlash error?", answer: "By always advancing the screw in one direction only while taking a reading." },
      { question: "What is a negative zero error in a screw gauge?", answer: "When the zero of the circular scale lies above the reference line on the pitch scale when the studs are in contact." },
      { question: "Why is a screw gauge called a 'micrometer'?", answer: "Because it can measure small lengths or thicknesses accurately up to micrometers (usually 0.01 mm, which is 10 micrometers)." },
      { question: "What is the purpose of the U-shaped frame?", answer: "It provides a rigid support holding the stationary stud (anvil) and the rotating screw (spindle) in alignment." },
      { question: "If you rotate the thimble by 2 full turns and the pitch is 0.5mm, how far does the spindle move?", answer: "1.0 mm." },
      { question: "Can we measure the diameter of a soft rubber ball accurately with a micrometer screw gauge?", answer: "No, because the applied pressure from the spindle deform the soft surface, yielding an inaccurate reading." }
    ],
    realWorldApplications: [
      "Metals Industry: Verifying the precise thickness of sheet metal during rolling mill manufacturing.",
      "Electrical Engineering: Measuring the extremely fine diameter of copper wires used in winding motors and transformers.",
      "Paper Manufacturing: Monitoring the thickness (caliper) of paper and cardboard sheets for quality control.",
      "Optics: Measuring the exact thickness of glass lenses and prisms during fabrication.",
      "Machining operations: Checking tolerances of cylindrical piston pins and metallic shafts.",
      "Forensics: Analyzing the precise caliber and striations of bullet casings."
    ]
  },

  // --- Ohm's Law ---
  "p4": {
    quizQuestions: [
      { id: 1, question: "Ohm's Law states that the current flowing through a conductor is directly proportional to:", options: ["Resistance", "Temperature", "Voltage (Potential Difference)", "Charge"], correctIndex: 2 },
      { id: 2, question: "For Ohm's Law to be valid, which physical condition must remain constant?", options: ["Voltage", "Temperature", "Current", "Time"], correctIndex: 1 },
      { id: 3, question: "The V-I graph of a purely ohmic conductor is:", options: ["A parabola", "An exponential curve", "A straight line passing through the origin", "A circle"], correctIndex: 2 },
      { id: 4, question: "The slope of a V-I graph (where V is on the Y-axis and I is on the X-axis) gives the:", options: ["Conductance", "Resistance", "Power", "Resistivity"], correctIndex: 1 },
      { id: 5, question: "Which of the following is a non-ohmic device?", options: ["Copper wire", "Silver wire", "Semiconductor diode", "Carbon resistor"], correctIndex: 2 },
      { id: 6, question: "The unit of electrical resistance is:", options: ["Ampere", "Volt", "Ohm", "Watt"], correctIndex: 2 },
      { id: 7, question: "In the experimental setup for Ohm's law, a voltmeter is always connected in:", options: ["Series", "Parallel", "Either series or parallel", "Diagonal"], correctIndex: 1 },
      { id: 8, question: "In the experimental setup, the ammeter is connected in:", options: ["Parallel", "Series", "Outside the circuit", "Grounded"], correctIndex: 1 },
      { id: 9, question: "If you double the voltage across an Ohmic resistor, the current will:", options: ["Halve", "Remain the same", "Quadruple", "Double"], correctIndex: 3 },
      { id: 10, question: "The inverse of Resistance is called:", options: ["Resistivity", "Conductivity", "Conductance", "Impedance"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "State Ohm's Law.", answer: "The current flowing through a conductor is directly proportional to the potential difference applied across its ends, provided temperature and other physical conditions remain constant." },
      { question: "What is an Ohmic conductor? Give an example.", answer: "Conductors that strictly obey Ohm's Law (i.e., display a linear V-I relationship), such as pure metals (Copper, Silver)." },
      { question: "Give an example of a non-Ohmic conductor.", answer: "Semiconductor diodes, transistors, or the filament of a light bulb." },
      { question: "Why is a voltmeter connected in parallel?", answer: "To measure the potential difference across the component without drawing a significant amount of current itself (it has very high resistance)." },
      { question: "Why is an ammeter connected in series?", answer: "To measure the full current passing through the component, having a very low resistance so it doesn't drop the voltage." },
      { question: "What does the slope of the I-V graph (I on Y-axis, V on X-axis) represent?", answer: "It represents Conductance (1/R)." },
      { question: "Why does the resistance of a metal wire increase with temperature?", answer: "Because higher temperature increases the thermal vibration of the lattice ions, causing more frequent collisions with the drifting electrons." },
      { question: "What is the function of a rheostat in the circuit?", answer: "To vary the resistance in the circuit, and thereby change the current flowing to plot multiple V-I points." },
      { question: "Can Ohm's law be applied to insulators?", answer: "No, insulators do not allow current to flow easily, and their breakdown behavior is highly non-linear." },
      { question: "What is the difference between Resistance and Resistivity?", answer: "Resistance depends on the material's dimensions (length, area), whereas Resistivity is an intrinsic property of the material independent of its shape." }
    ],
    realWorldApplications: [
      "Circuit Design: Calculating required resistor values to prevent burning out LEDs and sensitive microchips.",
      "Power Distribution: Electric companies calculate voltage drops across high-voltage transmission lines using variations of Ohm's Law.",
      "Heating Appliances: Designing toasters, electric kettles, and space heaters to generate specific wattages based on fixed resistivity.",
      "Fuses and Circuit Breakers: Determining the maximum permissible fault current before a protective element must sever the power.",
      "Battery Life Calculation: Estimating how long a consumer electronic device will run under a specific current load.",
      "Sensor Calibration: Many sensors (strain gauges, thermistors) rely on a changing resistance which is read out as a voltage via Ohm’s Law."
    ]
  },

  // --- Concave Mirror ---
  "p5": {
    quizQuestions: [
      { id: 1, question: "The focal length of a spherical mirror is defined as:", options: ["Half the radius of curvature", "Double the radius of curvature", "Equal to radius of curvature", "Unrelated to radius of curvature"], correctIndex: 0 },
      { id: 2, question: "If the object is placed at the center of curvature (C) of a concave mirror, the image is formed at:", options: ["Focus (F)", "Between F and C", "Center of Curvature (C)", "Infinity"], correctIndex: 2 },
      { id: 3, question: "When an object is placed between the Focus and the Pole of a concave mirror, the image formed is:", options: ["Real, inverted, diminished", "Virtual, erect, magnified", "Real, erect, magnified", "Virtual, inverted, diminished"], correctIndex: 1 },
      { id: 4, question: "The mirror formula is:", options: ["1/f = 1/v + 1/u", "1/f = 1/v - 1/u", "1/f = 1/u - 1/v", "f = u + v"], correctIndex: 0 },
      { id: 5, question: "According to the Cartesian sign convention, the focal length of a concave mirror is taken as:", options: ["Positive", "Negative", "Zero", "Variable depending on object position"], correctIndex: 1 },
      { id: 6, question: "A real image formed by a concave mirror is always:", options: ["Inverted", "Erect", "Magnified", "Diminished"], correctIndex: 0 },
      { id: 7, question: "To find the rough focal length of a concave mirror, we focus the image of:", options: ["A nearby candle", "A distant object (like a tree/sun)", "Our own face", "A magnifying glass"], correctIndex: 1 },
      { id: 8, question: "Magnification (m) for spherical mirrors is given by:", options: ["-v/u", "v/u", "u/v", "-u/v"], correctIndex: 0 },
      { id: 9, question: "If magnification is negative, the image is:", options: ["Virtual", "Erect", "Real and inverted", "Diminished"], correctIndex: 2 },
      { id: 10, question: "In the u-v method, plotting a graph of 1/v vs 1/u yields:", options: ["A parabola", "An exponential curve", "A straight line with intercept 1/f", "A circle"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What is a concave mirror?", answer: "A spherical mirror whose reflecting surface curves inwards, converging parallel light rays to a real focus." },
      { question: "What is meant by principal focus (F)?", answer: "The point on the principal axis where light rays parallel to the principal axis converge after reflection." },
      { question: "Why does a concave mirror form a virtual image when the object is very close to it (between Pole and Focus)?", answer: "Because the reflected rays diverge instead of converging; they appear to meet behind the mirror." },
      { question: "What is the relationship between the radius of curvature (R) and the focal length (f)?", answer: "R = 2f (for mirrors of small aperture)." },
      { question: "What is the mirror formula?", answer: "1/f = 1/v + 1/u, where u is object distance, v is image distance, f is focal length." },
      { question: "What is 'parallax'?", answer: "The apparent shift in the position of an object (or image) relative to another when viewed from different angles." },
      { question: "How do you remove parallax in the optical bench experiment?", answer: "By moving the image needle until its tip coincides perfectly with the inverted image of the object needle, such that they move together when you shift your eye side-to-side." },
      { question: "Why is the focal length of a concave mirror taken as negative?", answer: "Because the focus lies in front of the mirror, in the direction opposite to the incident light, according to Cartesian sign convention." },
      { question: "What is the magnification when the object is at the Center of Curvature?", answer: "Magnification is -1 (the image is real, inverted, and the exact same size)." },
      { question: "Why can't we obtain a virtual image on a screen?", answer: "Because the light rays do not actually meet to form the image; they only appear to diverge from a point behind the mirror." }
    ],
    realWorldApplications: [
      "Astronomical Telescopes: Used as the primary mirror in reflecting telescopes (like Hubble or James Webb) to gather and converge starlight.",
      "Solar Furnaces/Cookers: Using large concave mirrors to concentrate solar energy onto a small point to generate intense heat.",
      "Headlights and Torches: Placing the bulb at the focus of a parabolic/concave reflector produces a strong parallel beam of light.",
      "Dentist's Mirrors: Providing a magnified, virtual, erect image of human teeth when held close.",
      "Shaving Mirrors: Providing a magnified, erect view of the user's face when positioned within the focal length.",
      "Satellite Dishes: Though using radio waves instead of light, they operate on the exact same concave converging principle."
    ]
  }

};

injectData('physics', physicsBatch1);

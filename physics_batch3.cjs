const { injectData } = require('./inject_enhancements.cjs');

const physicsBatch3 = {
  // --- Spherometer ---
  "p13": {
    quizQuestions: [
      { id: 1, question: "A spherometer works on the principle of:", options: ["Wedge", "Micrometer screw", "Lever", "Pulley"], correctIndex: 1 },
      { id: 2, question: "The number of legs a spherometer rests on is:", options: ["One", "Two", "Three", "Four"], correctIndex: 2 },
      { id: 3, question: "The distance between the inner legs (l) is measured to find the:", options: ["Pitch", "Radius of curvature", "Focal length", "Least count"], correctIndex: 1 },
      { id: 4, question: "The central screw in the spherometer measures the:", options: ["Diameter", "Sagitta (h)", "Pitch", "Perimeter"], correctIndex: 1 },
      { id: 5, question: "The formula for the radius of curvature (R) using a spherometer is:", options: ["R = l²/2h + h", "R = l²/6h + h/2", "R = l/6h - h/2", "R = l²/h + h/6"], correctIndex: 1 },
      { id: 6, question: "To find the pitch, the central screw is given a known number of:", options: ["Pushes", "Vibrations", "Full rotations", "Half rotations"], correctIndex: 2 },
      { id: 7, question: "If the pitch is 1mm and the circular disc has 100 divisions, the least count is:", options: ["0.01 mm", "0.1 mm", "0.001 mm", "1 cm"], correctIndex: 0 },
      { id: 8, question: "When placing a spherometer on a flat glass plate, the reading of the central screw should ideally be:", options: ["1 mm", "Zero", "100 mm", "Negative"], correctIndex: 1 },
      { id: 9, question: "For a concave surface, the central screw is turned:", options: ["Downwards", "Upwards", "Sideways", "It is kept stationary"], correctIndex: 0 },
      { id: 10, question: "What is measured to confirm all three legs are equidistant?", options: ["Pitch", "The distance between the tips of the three legs (l)", "The diameter of the central screw", "The height of the glass plate"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a spherometer?", answer: "An instrument used to measure the precise radius of curvature of a spherical surface, like a lens or a curved mirror." },
      { question: "What is the principle of a spherometer?", answer: "It works on the principle of a micrometer screw, converting rotational motion into tiny, precise linear movements." },
      { question: "Why is it called a 'spherometer'?", answer: "Because it is specifically designed to measure the curvature of 'spherical' surfaces." },
      { question: "What is 'sagitta' (h)?", answer: "The maximum height or depth of the curved surface from the plane formed by the tips of the three outer legs." },
      { question: "Why is it important to press the spherometer gently?", answer: "Pressing too hard can cause the legs to slip or mechanically deform the glass surface, leading to an inaccurate reading." },
      { question: "How is the distance between the legs (l) measured?", answer: "By lightly pressing the spherometer legs onto a sheet of paper to mark three dots, and measuring the distance between these dots using a ruler or compass." },
      { question: "Can a spherometer measure the curvature of a very small bead?", answer: "No, the surface must be large enough for all three outer legs to firmly rest on it." },
      { question: "What is the purpose of the plane glass plate?", answer: "It serves as a zero-reference plane to find the initial reading before measuring the height (h) on the curved surface." },
      { question: "If the initial reading on the flat plate is not zero, what do you do?", answer: "Note it down as the zero error (positive or negative) and apply the correction to the final reading." },
      { question: "Why does the formula for R contain l²/6h + h/2?", answer: "It is derived from the geometry of intersecting chords in a sphere, establishing the relationship between the radius, the sagitta, and the chord distance." }
    ],
    realWorldApplications: [
      "Optician Labs: Used to measure the radius of curvature of optical lenses to ensure they meet exact prescription specifications.",
      "Telescope Manufacturing: Verifying the precise curvature of large primary mirrors for astronomical observatories.",
      "Contact Lens Calibration: Quality control testing to ensure the inner curve of a contact lens matches the human cornea safely.",
      "Glass Industry: Checking the convex/concave profiles of watch glasses and specialized laboratory glassware.",
      "Automotive Mirrors: Testing the curvature of vehicle side mirrors (which are convex) for proper field of view.",
      "Laser Optics: Ensuring the precise geometric specifications of spherical resonators and specialized laser focusing lenses."
    ]
  },

  // --- Parallelogram Law of Forces ---
  "p14": {
    quizQuestions: [
      { id: 1, question: "The Parallelogram Law of Forces applies to:", options: ["Collinear forces", "Concurrent, coplanar forces", "Parallel forces", "Non-coplanar forces"], correctIndex: 1 },
      { id: 2, question: "If two forces P and Q act at an angle θ, the magnitude of their resultant R is:", options: ["√(P² + Q² + 2PQ cosθ)", "√(P² - Q² + 2PQ sinθ)", "P + Q + 2PQ", "√(P² + Q² - 2PQ cosθ)"], correctIndex: 0 },
      { id: 3, question: "If the angle θ between forces P and Q is 90°, the resultant R relies on:", options: ["Pythagoras theorem", "Archimedes principle", "Newton's third law", "Boyle's law"], correctIndex: 0 },
      { id: 4, question: "In Gravesand's apparatus, what acts as the resultant force to balance the two hanging weights?", options: ["The tension in the middle string", "The weight of the base", "The friction of the pulleys", "The third suspended weight"], correctIndex: 3 },
      { id: 5, question: "The mirror strip is used to avoid:", options: ["Magnetic interference", "Parallax error while marking the string", "Refraction", "Heating of the string"], correctIndex: 1 },
      { id: 6, question: "For the system to be in equilibrium, the resultant of the two forces must be:", options: ["Greater than the third force", "Equal and opposite to the third force", "Zero", "Perpendicular to the third force"], correctIndex: 1 },
      { id: 7, question: "Why are the pulleys lubricated?", options: ["To prevent rust", "To reduce friction", "To cool the strings", "To increase weight"], correctIndex: 1 },
      { id: 8, question: "What does the diagonal of the parallelogram drawn on the paper represent?", options: ["The equilibrant", "The calculated resultant force", "The friction force", "The tension error"], correctIndex: 1 },
      { id: 9, question: "In a balanced system, the net force on the central knot is:", options: ["Infinite", "Maximum", "Zero", "Random"], correctIndex: 2 },
      { id: 10, question: "If P = 3N and Q = 4N are at 90°, what is R?", options: ["5N", "7N", "1N", "12N"], correctIndex: 0 }
    ],
    vivaQuestions: [
      { question: "State the Parallelogram Law of Vector Addition.", answer: "If two vectors acting simultaneously at a point can be represented in magnitude and direction by the adjacent sides of a parallelogram, their resultant is represented completely by the diagonal passing through that point." },
      { question: "What is an 'equilibrant'?", answer: "A single force that, when applied together with the original forces, brings the system into perfect equilibrium. It is equal in magnitude and opposite in direction to the resultant." },
      { question: "What happens if friction in the pulleys is high?", answer: "The string will not move freely to reach the true equilibrium position, causing an error in the angle and force measurements." },
      { question: "How does the mirror strip prevent parallax error?", answer: "By aligning the actual string in your line of sight so that it covers its own reflection in the mirror, ensuring your eye is perfectly perpendicular to the drawing board." },
      { question: "What do the marks on the paper behind the strings represent?", answer: "They represent the exact lines of action (directions) of the tension forces pulling on the central knot." },
      { question: "Why do we tap the board gently during the experiment?", answer: "To overcome any static friction in the pulleys and allow the knot to settle at the true position of equilibrium." },
      { question: "What is a concurrent force system?", answer: "A system where all the forces' lines of action intersect at a single common point (the knot)." },
      { question: "Can this law be used for velocities as well as forces?", answer: "Yes, because velocity is also a vector quantity and follows identical vector addition rules." },
      { question: "If the angle between two equal forces increases from 0° to 180°, what happens to their resultant?", answer: "The resultant decreases continuously from a maximum (2F) to a minimum (0)." },
      { question: "Why should the central knot not touch the drawing board?", answer: "To avoid friction between the knot and the paper, which would ruin the force balance." }
    ],
    realWorldApplications: [
      "Bridge Engineering: Calculating the massive tension forces acting on the support cables of suspension and cable-stayed bridges to prevent structural failure.",
      "Crane Operations: Determining the resultant load and boom angles required when a crane lifts heavy materials at varying jib extensions.",
      "Aviation: Calculating the resultant flight path of an aircraft when acting under the engine's thrust vector and strong crosswind vectors.",
      "Towing Vehicles: Analyzing the resultant pull when two tugboats tow a large ship from different angles.",
      "Kite Flying/Sailing: Calculating how wind force and string tension combine to keep the object aloft or moving.",
      "Architecture: Analyzing the diagonal bracing structures in skyscraper steel skeletons to resist wind and seismic loads."
    ]
  },

  // --- Hooke's Law ---
  "p15": {
    quizQuestions: [
      { id: 1, question: "Hooke's Law states that within the elastic limit, the extension is:", options: ["Inversely proportional to load", "Directly proportional to applied force (load)", "Independent of the force", "Proportional to the square root of the load"], correctIndex: 1 },
      { id: 2, question: "The mathematical expression for Hooke's Law is:", options: ["F = -kx", "F = k/x", "F = 1/kx", "F = kx²"], correctIndex: 0 },
      { id: 3, question: "The negative sign in F = -kx implies that:", options: ["The force is weak", "The spring is breaking", "The restoring force is opposite to the direction of displacement", "The constant is negative"], correctIndex: 2 },
      { id: 4, question: "The slope of the load-extension graph (Load on Y-axis, Extension on X-axis) gives:", options: ["Work done", "Spring constant (k)", "Elastic limit", "Acceleration"], correctIndex: 1 },
      { id: 5, question: "If you cut a spring exactly in half, the spring constant (k) of each half becomes:", options: ["Half", "Double", "Remains the same", "Quarter"], correctIndex: 1 },
      { id: 6, question: "What happens if the applied load exceeds the elastic limit?", options: ["The spring snaps back faster", "The spring obeys Hooke's law perfectly", "The spring undergoes permanent deformation", "The spring melts"], correctIndex: 2 },
      { id: 7, question: "What is the SI unit of the spring constant (k)?", options: ["Newton", "Meter", "Newton/meter (N/m)", "Joule"], correctIndex: 2 },
      { id: 8, question: "When two identical springs of constant 'k' are connected in series, the equivalent constant is:", options: ["2k", "k", "k/2", "k²"], correctIndex: 2 },
      { id: 9, question: "When two identical springs of constant 'k' are connected in parallel, the equivalent constant is:", options: ["k/2", "k", "2k", "k²"], correctIndex: 2 },
      { id: 10, question: "The area under the Load-Extension graph represents:", options: ["Power", "Force", "Work done (Elastic Potential Energy)", "Velocity"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "State Hooke's Law.", answer: "It states that within the elastic limit, the stress applied to a body is directly proportional to the strain produced. For a spring: F = -kx." },
      { question: "What is an elastic limit?", answer: "The maximum stress that a material can withstand without undergoing permanent deformation. Beyond this point, it will not return to its original shape." },
      { question: "What does the spring constant 'k' indicate?", answer: "It indicates the stiffness of the spring. A high 'k' means the spring is very stiff and requires more force to stretch it." },
      { question: "Why do we take measurements for both 'loading' and 'unloading'?", answer: "To ensure that the spring has not exceeded its elastic limit and to account for any elastic hysteresis." },
      { question: "What is 'elastic hysteresis'?", answer: "The phenomenon where the unloading curve lags behind the loading curve, resulting in some energy loss as heat." },
      { question: "How does Hooke's law apply to a rubber band?", answer: "Rubber bands only obey Hooke's law loosely and for very small extensions; their load-extension graph is generally a curve (non-linear)." },
      { question: "If the load-extension graph is a straight line, what does it prove?", answer: "It visually proves Hooke's Law: F is directly proportional to x." },
      { question: "Why is an initial small weight (dead weight) hung on the spring before starting the experiment?", answer: "To remove any initial kinks or pre-tension in the coiled wire and get a true zero reading." },
      { question: "What is restoring force?", answer: "The internal elastic force developed within the spring opposing the external deforming force, trying to bring it back to its original equilibrium." },
      { question: "What happens to the potential energy when a spring is stretched?", answer: "Elastic potential energy is stored in the spring, equal to 1/2*kx²." }
    ],
    realWorldApplications: [
      "Vehicle Suspensions: Designing shock absorbers and coil springs that smoothly handle the dynamic weight loads of cars on bumpy roads.",
      "Mechanical Watches: The balance spring relies strictly on elastic restoring torque to maintain the precise ticking of a mechanical watch.",
      "Weighing Scales: Spring-based produce scales and luggage scales use Hooke's law to convert physical extension directly into weight readings.",
      "Archery and Slingshots: Calculating the potential energy stored in a drawn bowstring to determine the kinetic energy release of the projectile.",
      "Construction: Engineering the elasticity of tall building frameworks to sway safely during high winds and earthquakes without permanent bending.",
      "Medical Devices: Designing specialized springs for orthodontics (braces), surgical retractors, and cardiovascular stents."
    ]
  },

  // --- Potentiometer ---
  "p16": {
    quizQuestions: [
      { id: 1, question: "The basic principle of a potentiometer is that the potential drop across any portion of the uniform wire is directly proportional to its:", options: ["Area of cross-section", "Resistance", "Length", "Temperature"], correctIndex: 2 },
      { id: 2, question: "A potentiometer is preferred over a voltmeter for measuring EMF because:", options: ["It draws maximum current from the cell", "It draws zero current from the cell at the null point", "It is smaller in size", "It is cheaper"], correctIndex: 1 },
      { id: 3, question: "For the potentiometer to work, the EMF of the driver battery must be:", options: ["Less than the EMF of the experimental cells", "Equal to the EMF of the experimental cells", "Greater than the EMF of the experimental cells", "Zero"], correctIndex: 2 },
      { id: 4, question: "If L1 and L2 are the balancing lengths for cells E1 and E2 respectively, then:", options: ["E1/E2 = L2/L1", "E1/E2 = L1/L2", "E1*E2 = L1*L2", "E1+L1 = E2+L2"], correctIndex: 1 },
      { id: 5, question: "Increasing the length of the potentiometer wire:", options: ["Decreases its sensitivity", "Increases its sensitivity", "Makes it inaccurate", "Increases current"], correctIndex: 1 },
      { id: 6, question: "If the jockey is pressed too hard on the wire:", options: ["The sensitivity increases", "The uniform area of cross-section of the wire is altered, leading to errors", "The battery voltage increases", "Null point is found faster"], correctIndex: 1 },
      { id: 7, question: "In a potentiometer, the uniform wire is typically composed of an alloy like:", options: ["Copper", "Aluminium", "Constantan or Manganin", "Iron"], correctIndex: 2 },
      { id: 8, question: "A high resistance is used in series with the galvanometer to:", options: ["Increase the EMF", "Protect the galvanometer from high initial currents", "Increase the uniform potential gradient", "Reverse the direction of current"], correctIndex: 1 },
      { id: 9, question: "What is 'potential gradient'?", options: ["Current per unit length", "Resistance per unit length", "Potential drop per unit length of the wire", "Temperature per unit length"], correctIndex: 2 },
      { id: 10, question: "If the balance point shifts towards the zero end, it means the unknown EMF has:", options: ["Increased", "Decreased", "Become negative", "Exceeded the driver cell"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is the defining principle of a potentiometer?", answer: "When a steady current passes through a wire of uniform cross-section and homogeneous composition, the potential drop across any segment is directly proportional to its length." },
      { question: "Why is a potentiometer considered superior to a standard voltmeter for measuring the true EMF of a cell?", answer: "Because at the balance (null) point, it draws absolutely no current from the experimental cell, rendering its internal resistance irrelevant." },
      { question: "What is the Potential Gradient (K)?", answer: "The fall in potential per unit length of the potentiometer wire (volts/meter)." },
      { question: "Why must the EMF of the primary driver cell be strictly greater than that of the cells being compared?", answer: "Because the maximum potential difference across the potentiometer wire cannot exceed the driver's EMF. If the unknown EMF is greater, the balance point will never be found on the wire." },
      { question: "Why do we remove the high resistance from the galvanometer circuit once near the null point?", answer: "To maximize the galvanometer's sensitivity; the high resistance desensitizes it to protect it initially from large off-balance currents." },
      { question: "Why is the wire made of constantan or manganin instead of copper?", answer: "These alloys have high resistivity and a very low temperature coefficient of resistance, ensuring the resistance and potential gradient remain stable as the wire naturally heats up." },
      { question: "What physical defect would happen if the wire's cross-sectional area was not uniform?", answer: "The potential gradient would fluctuate along the length of the wire, invalidating the direct proportionality between length and voltage." },
      { question: "What indicates a one-sided deflection before you start the measurement?", answer: "If touching the jockey at opposite ends of the wire yields deflections in the *same* direction, typically meaning the driver cell voltage is too low or the positive terminals are not connected to the same common terminal." },
      { question: "How does adding more meters of wire (e.g. 10m instead of 4m) affect the potentiometer?", answer: "It decreases the potential gradient (since identical voltage is spread over greater length), which makes the device significantly more sensitive and precise." },
      { question: "Why should the jockey never be dragged forcefully across the wire?", answer: "Dragging scrapes off material, creating 'bottlenecks' in the wire's cross-section, destroying the requirement of uniformity." }
    ],
    realWorldApplications: [
      "Precision Electronics Calibration: Used extensively in metrology labs to calibrate digital multimeters, voltmeters, and ammeters with unparalleled accuracy.",
      "Audio Equipment (Volume Controls): The rotating volume knobs on stereos and electric guitars are effectively miniature, rotary-wire potentiometers varying signal voltage.",
      "Industrial Control Sensors (Joysticks): Aircraft yokes and industrial joysticks use potentiometers to convert a pilot's physical movement into an exact electrical voltage signal.",
      "Battery Testing: Research laboratories use highly sensitive potentiometer circuits to calculate precise internal resistance drops inside solid-state batteries.",
      "Motor Speed Control: Older electric sewing machines and RC cars use sliding potentiometers to proportionally adjust incoming motor voltage.",
      "Thermocouple Measurement: Employed in specialized pyrometers to read the minute microvolt-level signals generated by thermocouples in industrial furnaces without drawing current."
    ]
  },

  // --- Unknown IDs for Batch 3 ---
  "p18": {
    quizQuestions: [
      { id: 1, question: "A physical balance operates on the principle of:", options: ["Conservation of momentum", "Moments (equilibrium of torques)", "Archimedes principle", "Newton's second law"], correctIndex: 1 },
      { id: 2, question: "The pointer of a well-adjusted physical balance should rest at:", options: ["The extreme left", "The extreme right", "The zero mark at the center of the scale", "Any random point"], correctIndex: 2 },
      { id: 3, question: "To weigh an object, you place it in the:", options: ["Right pan", "Left pan", "Center groove", "Below the base"], correctIndex: 1 },
      { id: 4, question: "Standard mass boxes usually provide weights down to accurate fractions using:", options: ["Fractional Weights and a Rider", "Liquid mercury drops", "Tiny sand granules", "Magnetic strips"], correctIndex: 0 },
      { id: 5, question: "Why do we raise the beam of the physical balance only via its knob?", options: ["To prevent damage to the knife-edges", "To look professional", "Because the pans are hot", "To create momentum"], correctIndex: 0 },
      { id: 6, question: "A rider on a physical balance beam allows measurement accuracy typically down to:", options: ["10 grams", "1 gram", "0.1 mg to 1 mg", "1 microgram"], correctIndex: 2 },
      { id: 7, question: "If the right arm is slightly heavier than the left when empty, we fix it by:", options: ["Adding sand to the left pan", "Adjusting the balancing screws at the ends of the beam", "Bending the beam", "Ignoring it"], correctIndex: 1 },
      { id: 8, question: "The mass measured using a physical balance is:", options: ["Inertial mass", "Gravitational mass", "Weight in Newtons", "Apparent mass"], correctIndex: 1 },
      { id: 9, question: "Why should we use forceps to handle standard weights?", options: ["To keep hands clean", "The oils/moisture from fingers can alter the exact mass or cause rusting", "Forceps are magnetic", "To prevent dropping them loudly"], correctIndex: 1 },
      { id: 10, question: "A physical balance relies on the assumption that:", options: ["Gravity is zero", "Air resistance is very high", "Gravity acts equally on both pans", "The weights are warm"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "State the principle of moments used in the physical balance.", answer: "When in equilibrium, the clockwise moment produced by the standard weights equals the anticlockwise moment produced by the unknown load." },
      { question: "What is a 'pointer and scale' arrangement used for?", answer: "It visually amplifies the tiny angular tilts of the beam, allowing the user to precisely determine when the scale is perfectly balanced at the equilibrium zero mark." },
      { question: "Why should you never load or unload pans while the beam is raised (unlocked)?", answer: "Adding or removing mass suddenly creates strong, sudden torques that can easily dull or chip the fragile agate knife-edges." },
      { question: "What is the use of the plum-line?", answer: "To ensure the central pillar of the balance is perfectly vertical; if it is tilted, the lever arms become unequal and the balance gives erroneous readings." },
      { question: "What is a 'rider' and why is it used?", answer: "A tiny twisted loop of wire (usually 10mg) that slides along a graduated scale on the top of the beam. It is used to apply micro-adjustments in torque instead of trying to stack incredibly tiny weights in a pan." },
      { question: "Why is an encasing glass box built around the balance?", answer: "To isolate the highly sensitive swinging beam from air drafts, breath moisture, and dust particles that can severely disrupt microgram measurements." },
      { question: "Are 'mass' and 'weight' the same in this experiment?", answer: "No. The balance measures gravitational 'mass' (kg). Weight is a force (N). A balance compares two masses perfectly regardless of the local gravity, unlike a spring scale." },
      { question: "Why use agate (a type of hard quartz) for the knife edges?", answer: "Agate is extremely hard and smooth, which drastically reduces pivot friction and does not rust, ensuring the balance remains hyper-sensitive over time." },
      { question: "How do you define the 'sensitivity' of the balance?", answer: "It is the change in the resting point on the scale (in divisions) caused by adding a mere 1 mg weight to one of the pans." },
      { question: "If you shift a standard weight slightly off-center in its pan, does the reading change?", answer: "Ideally no, because the pans are suspended freely on pivots; the load acts straight down through one point of suspension on the knife edge." }
    ],
    realWorldApplications: [
      "Pharmaceutical Compounding: Critical for meticulously weighing potent atomic-scale active ingredients and medications where a microgram error is lethal.",
      "Chemical Synthesis Labs: Essential in stoichiometry, measuring exact molar ratios of reactants for experimental organic chemistry.",
      "Numismatics and Bullion: Used by assayers and central banks to precisely determine the mass of gold bars, rare coins, and precious gems.",
      "Material Science: Measuring the micro-structural wear-and-tear of metal parts or the subtle mass changes due to oxidation/corrosion.",
      "Forensic Toxicology: Weighing trace amounts of illicit drugs, poisons, or environmental pollutants gathered from crime scenes.",
      "Metrology Institutes: The global calibration standard; maintaining the traceability of mass definitions back to the International Prototype of the Kilogram."
    ]
  },

  // --- Traveling Microscope ---
  "p19": {
    quizQuestions: [
      { id: 1, question: "A traveling microscope is primarily used to measure:", options: ["Incredible magnifications of bacteria", "Very small lengths/depths using vernier scales attached to the microscope", "The mass of slides", "Magnetic fields"], correctIndex: 1 },
      { id: 2, question: "The typical least count of the vernier scale on a traveling microscope is:", options: ["0.1 cm", "0.01 mm or 0.001 cm", "1 mm", "1 micrometer"], correctIndex: 1 },
      { id: 3, question: "When finding the refractive index of a glass slab, the first reading R1 focuses on:", options: ["The top of the slab", "Lycopodium powder", "A cross mark on the paper directly at the bottom without the slab", "The image of the sun"], correctIndex: 2 },
      { id: 4, question: "After placing the glass slab, the image of the cross appears:", options: ["Deeper", "Shifted sideways", "Raised upwards due to refraction", "Smaller"], correctIndex: 2 },
      { id: 5, question: "What is the purpose of the Lycopodium powder?", options: ["To focus on the exact top surface level of the glass slab", "To clean the microscope", "To make the cross darker", "To change the refractive index"], correctIndex: 0 },
      { id: 6, question: "The 'Real Depth' of the glass slab is mathematically represented by:", options: ["R3 - R2", "R3 - R1", "R2 - R1", "R1 + R2"], correctIndex: 1 },
      { id: 7, question: "The Refractive Index formula using a traveling microscope is:", options: ["Apparent Depth / Real Depth", "Real Depth / Apparent Depth", "Real Depth - Apparent Depth", "sin i / sin r"], correctIndex: 1 },
      { id: 8, question: "To avoid parallax error while focusing, the crosswires must:", options: ["Be out of focus", "Coincide perfectly with the image without relative movement", "Be removed", "Be colored red"], correctIndex: 1 },
      { id: 9, question: "In a traveling microscope, the vertical scale measures:", options: ["Height/Depth", "Horizontal distance", "Rotation angle", "Refractive Index directly"], correctIndex: 0 },
      { id: 10, question: "If Real Depth is 30mm and Apparent Depth is 20mm, the refractive index is:", options: ["0.66", "1.5", "10", "50"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a Traveling Microscope?", answer: "It is a compound microscope mounted on graduated horizontal and vertical scales equipped with vernier calipers, enabling precise measurements of minute lengths and depths." },
      { question: "What is the principle behind the refractive index determination using this method?", answer: "When an object in a denser medium (glass) is viewed from a rarer medium (air), it appears laterally elevated due to refraction. The ratio of actual depth to this apparent depth gives the refractive index." },
      { question: "Why does the ink cross appear 'raised' when viewed through the glass slab?", answer: "Light rays emerging from the cross refract (bend away from the normal) as they exit the denser glass into the air, creating a virtual image higher than the actual object." },
      { question: "What is the specific utility of Lycopodium powder in this experiment?", answer: "Glass is perfectly transparent and very difficult to focus purely on its surface. The opaque powder sits exactly on top, providing a crisp target for the microscope to establish the exact physical thickness (R3)." },
      { question: "What exactly are Real Depth and Apparent Depth?", answer: "Real depth is the true physical thickness of the glass (R3 - R1). Apparent depth is how thick the glass appears due to light bending (R3 - R2)." },
      { question: "Why must the paper with the cross be perfectly flat against the microscope base?", answer: "Any gap or air bubble trapped beneath the glass slab would severely distort the depth readings, adding an unknown gap to the real depth calculation." },
      { question: "Can this method be used for liquids like water?", answer: "Yes, by substituting the solid glass slab with a flat-bottomed beaker partially filled with water (after calculating the base thickness first)." },
      { question: "What is back-lash error in the traveling microscope?", answer: "Similar to a screw gauge, wearing of the internal rack-and-pinion threads causes slippage. It's avoided by moving the microscope only in one constant direction." },
      { question: "What happens if we view the cross at an angle instead of perfectly vertically?", answer: "Viewing sideways introduces angled refraction rather than normal incidence, completely violating the simplified real/apparent depth formula." },
      { question: "Define absolute refractive index.", answer: "The ratio of the speed of light in a vacuum to the speed of light in that specific medium." }
    ],
    realWorldApplications: [
      "Precision Engineering: Accurately mapping the internal diameter of capillary tubes or the width of incredibly fine slits used in diffraction.",
      "Semiconductor Fabrication: Inspecting silicon wafers to measure the exact microscopic thickness of etched layers and deposited circuits.",
      "Material Science: Calculating the refractive indices of newly discovered transparent polymers and optical epoxies for commercial lenses.",
      "Botany/Zoology Labs: Measuring the incredibly minute dimensions of biological specimens, such as cell walls and microscopic egg diameters.",
      "Gemology: Identifying counterfeit diamonds or synthetic gemstones by analyzing their exact index of refraction via microscopic optics.",
      "Forensics Labs: Analyzing tool marks, hair thickness, or minute striations on forged documents where a standard ruler is useless."
    ]
  }
};

injectData('physics', physicsBatch3);

const { injectData } = require('./inject_enhancements.cjs');

const physicsBatch2 = {
  // --- Metre Bridge - Resistance ---
  "p6": {
    quizQuestions: [
      { id: 1, question: "The Metre Bridge works on the principle of:", options: ["Ohm's Law", "Wheatstone Bridge", "Kirchhoff's Laws", "Faraday's Laws"], correctIndex: 1 },
      { id: 2, question: "The length of the wire in a standard Metre Bridge is:", options: ["50 cm", "100 cm (1 metre)", "200 cm", "10 metres"], correctIndex: 1 },
      { id: 3, question: "Why is the Metre Bridge wire made of Constantan or Manganin?", options: ["High conductivity", "Low melting point", "High resistivity and low temperature coefficient", "Cheap material"], correctIndex: 2 },
      { id: 4, question: "If the null point is obtained at 40 cm from the left end (with unknown resistance in left gap), the ratio R/S is:", options: ["40/60", "60/40", "40/100", "100/40"], correctIndex: 0 },
      { id: 5, question: "To increase the sensitivity of the Metre Bridge, the null point should ideally be obtained near:", options: ["The left end (0 cm)", "The middle (50 cm)", "The right end (100 cm)", "The 25 cm mark"], correctIndex: 1 },
      { id: 6, question: "The thick copper strips used in a Metre Bridge minimize:", options: ["Contact resistance", "Magnetic interference", "Eddy currents", "Inductance"], correctIndex: 0 },
      { id: 7, question: "What happens if the jockey is dragged forcefully along the wire?", options: ["It produces sparks", "It changes the uniform cross-sectional area of the wire", "It increases voltage", "It decreases resistance"], correctIndex: 1 },
      { id: 8, question: "Why should the battery key be closed only when taking a reading?", options: ["To save electricity", "To prevent heating of the wire", "To avoid damaging the galvanometer", "To prevent magnetization"], correctIndex: 1 },
      { id: 9, question: "The specific resistance (resistivity) of the wire material depends on:", options: ["Length of wire", "Radius of wire", "Nature of the material", "Applied voltage"], correctIndex: 2 },
      { id: 10, question: "If the radius of the unknown resistance wire is doubled, its specific resistance will:", options: ["Double", "Halve", "Increase four times", "Remain unchanged"], correctIndex: 3 }
    ],
    vivaQuestions: [
      { question: "What is a Wheatstone Bridge?", answer: "An arrangement of four resistances used to measure one unknown resistance by balancing the two legs of a bridge circuit." },
      { question: "What is the condition for a balanced Wheatstone Bridge?", answer: "P/Q = R/S, or no current flows through the galvanometer." },
      { question: "Why are the connections made using thick copper strips?", answer: "Thick copper strips have very low resistance, so they do not add significant error to the resistance measurements." },
      { question: "What is the 'null point'?", answer: "The point on the Metre Bridge wire where touching the jockey results in zero deflection in the galvanometer." },
      { question: "Why shouldn't you slide the jockey on the wire?", answer: "Sliding scrapes the wire, making its cross-section non-uniform, which alters its resistance per unit length." },
      { question: "Why is Constantan or Manganin used for the bridge wire?", answer: "They have high resistivity and a very low temperature coefficient of resistance, meaning their resistance doesn't change much as they heat up." },
      { question: "Can a Metre Bridge be used to measure very high or very low resistances accurately?", answer: "No, it is inaccurate for very low resistances (due to contact resistance) and very high resistances (due to low sensitivity of the galvanometer at high resistance)." },
      { question: "What happens to the null point if the positions of the battery and galvanometer are interchanged?", answer: "The balanced condition remains unaffected; the null point does not shift." },
      { question: "Why is it advised to obtain the balance point near the middle (50 cm)?", answer: "It minimizes the percentage error in the measurement of length (l) and (100-l)." },
      { question: "How does the specific resistance depend on the measurement of the radius?", answer: "Resistivity = (R * π * r²) / L. Because r is squared, any error in measuring the radius (e.g., using a screw gauge) is magnified." }
    ],
    realWorldApplications: [
      "Precision Resistor Calibration: Used in labs to verify the exact resistance of standard resistors produced for electronics.",
      "Strain Gauges: Wheatstone bridge circuits form the basis of strain gauges used in mechanical engineering to measure applied stress.",
      "Temperature Sensors: RTDs (Resistance Temperature Detectors) use bridge circuits to measure minute changes in resistance due to temperature.",
      "Fault Detection: Cable companies use similar bridge principles (Murray loop test) to locate short circuits in underground telecommunication cables.",
      "Material Testing: Determining the resistivity of newly synthesized alloys and conductive polymers.",
      "Weight Scales: Electronic scales and balances use load cells constructed from Wheatstone bridge configurations."
    ]
  },

  // --- Galvanometer - Figure of Merit ---
  "p7": {
    quizQuestions: [
      { id: 1, question: "The figure of merit of a galvanometer is defined as:", options: ["Current required for full scale deflection", "Current required to produce a deflection of one division", "Resistance of the galvanometer", "Voltage per division"], correctIndex: 1 },
      { id: 2, question: "What is the SI unit of figure of merit (k)?", options: ["Ampere/division", "Volt/division", "Ohm/Ampere", "Divisions/Ampere"], correctIndex: 0 },
      { id: 3, question: "The resistance of a galvanometer is typically measured using the:", options: ["Meter bridge", "Half-deflection method", "Ohm's law setup", "Potentiometer"], correctIndex: 1 },
      { id: 4, question: "In the half-deflection method, if initial deflection is θ, we introduce a shunt resistance to make the deflection:", options: ["2θ", "Zero", "θ/2", "θ/4"], correctIndex: 2 },
      { id: 5, question: "The figure of merit (k) is related to full-scale deflection current (Ig) and total divisions (N) by:", options: ["Ig = k/N", "Ig = k + N", "Ig = k * N", "Ig = N/k"], correctIndex: 2 },
      { id: 6, question: "If the total number of divisions on the galvanometer scale is 30, and the figure of merit is 20 microamperes/div, the maximum current it can measure is:", options: ["20 uA", "30 uA", "600 uA", "1.5 uA"], correctIndex: 2 },
      { id: 7, question: "High resistance R is connected in series with the galvanometer initially to:", options: ["Increase current", "Prevent the galvanometer from burning out", "Decrease the figure of merit", "Stop the current entirely"], correctIndex: 1 },
      { id: 8, question: "Which equation represents the figure of merit (k) in terms of EMF (E), series resistance (R), galvanometer resistance (G), and deflection (θ)?", options: ["k = E / ((R+G)*θ)", "k = E*θ / (R+G)", "k = (R+G) / (E*θ)", "k = E / (R*G*θ)"], correctIndex: 0 },
      { id: 9, question: "A galvanometer detects:", options: ["Only voltage", "Large currents only", "Small electric currents", "Magnetic poles"], correctIndex: 2 },
      { id: 10, question: "When finding the galvanometer resistance using half deflection, the shunt resistance (S) is approximately equal to the galvanometer resistance (G) because:", options: ["The series resistance R is very low", "The series resistance R is very high compared to G and S", "Current is doubled", "Voltage is halved"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a moving coil galvanometer?", answer: "An instrument used to detect and measure small electric currents, operating on the principle that a current-carrying coil in a magnetic field experiences a torque." },
      { question: "What do you mean by the figure of merit (k)?", answer: "It is the amount of current required to produce a deflection of one scale division in the galvanometer." },
      { question: "How is figure of merit different from current sensitivity?", answer: "Figure of merit is current per division (I/θ), whereas current sensitivity is deflection per unit current (θ/I). They are reciprocals of each other." },
      { question: "What is the half-deflection method?", answer: "A method to find the internal resistance of a galvanometer by introducing a shunt resistance that halves the initial deflection, making the shunt resistance effectively equal to the galvanometer resistance." },
      { question: "Why is a high resistance (R) used in series with the battery?", answer: "To limit the current in the circuit so that the sensitive galvanometer coil does not get damaged or burn out." },
      { question: "What determines the figure of merit?", answer: "The strength of the magnetic field, number of turns in the coil, area of the coil, and the restoring torque per unit twist of the suspension spring." },
      { question: "What is the typical order of magnitude for a galvanometer's resistance (G)?", answer: "Usually in the range of 50 to 100 Ohms." },
      { question: "What is a 'shunt'?", answer: "A low resistance connected in parallel to a galvanometer to bypass the majority of the current, effectively converting it into an ammeter." },
      { question: "What kind of magnetic poles are used in a galvanometer and why?", answer: "Concave cylindrical magnetic poles are used to produce a radial magnetic field, ensuring the plane of the coil is always parallel to the field lines." },
      { question: "Why must the battery key be opened when making changes to the resistance box?", answer: "To prevent accidental high current surges from damaging the galvanometer." }
    ],
    realWorldApplications: [
      "Instrumentation: Galvanometers are the internal sensing mechanism inside many traditional analog ammeters and voltmeters (multimeters).",
      "ECG Machines: Early string galvanometers were used as the primary recording instruments for the first electrocardiograms.",
      "Laser Light Shows: Galvanometer scanners (galvos) are used to rapidly aim laser beams by pivoting small mirrors.",
      "Hard Drives: The positioning of the read/write head in a computer hard drive relies on voice coil actuators that operate on galvanometer principles.",
      "Seismic Detectors: Detecting minute electrical signals generated by geological sensors to predict earthquakes.",
      "Light Meters: Used in older photography light meters where a photovoltaic cell generates a tiny current directly proportional to light intensity."
    ]
  },

  // --- Glass Prism - Refractive Index ---
  "p8": {
    quizQuestions: [
      { id: 1, question: "What is the angle of deviation?", options: ["Angle between incident ray and emergent ray", "Angle between incident ray and normal", "Angle of the prism", "Angle between refracted ray and emergent ray"], correctIndex: 0 },
      { id: 2, question: "At the angle of minimum deviation, how does the refracted ray behave inside the prism?", options: ["It reflects back", "It travels parallel to the base of the prism", "It bends towards the apex", "It splits into seven colors"], correctIndex: 1 },
      { id: 3, question: "The graph plotted between angle of incidence (i) and angle of deviation (D) is a:", options: ["Straight line", "Circle", "Parabola (U-shaped curve)", "Sine wave"], correctIndex: 2 },
      { id: 4, question: "At the angle of minimum deviation (Dm), the angle of incidence (i) is equal to:", options: ["Angle of prism (A)", "Angle of refraction (r)", "Angle of emergence (e)", "90 degrees"], correctIndex: 2 },
      { id: 5, question: "The formula to calculate the refractive index (n) of the prism is:", options: ["sin((A+Dm)/2) / sin(A/2)", "sin(A/2) / sin((A+Dm)/2)", "sin(A+Dm) / sin(A)", "sin(i) / sin(e)"], correctIndex: 0 },
      { id: 6, question: "If the angle of a prism is 60° and the minimum deviation is 30°, the refractive index is:", options: ["1.0", "1.414 (sqrt 2)", "1.5", "1.732 (sqrt 3)"], correctIndex: 1 },
      { id: 7, question: "Which color of white light deviates the most through a glass prism?", options: ["Red", "Green", "Yellow", "Violet"], correctIndex: 3 },
      { id: 8, question: "Dispersion of light occurs because the refractive index of glass is:", options: ["Constant for all colors", "Different for different wavelengths of light", "Zero inside the prism", "Dependent on the temperature alone"], correctIndex: 1 },
      { id: 9, question: "What is the typical angle of an equilateral glass prism?", options: ["45°", "60°", "90°", "120°"], correctIndex: 1 },
      { id: 10, question: "If a monochromatic red laser is passed through the prism instead of white light, what will you observe?", options: ["A rainbow", "No deviation", "Deviation but no dispersion (single red spot)", "The beam disappears"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What is meant by refraction of light?", answer: "The bending of a light ray as it passes from one transparent medium into another, due to a change in its speed." },
      { question: "What is the Angle of Prism (A)?", answer: "The angle between the two refracting surfaces of the prism." },
      { question: "Define the Angle of Deviation (D).", answer: "The angle formed between the path of the incident ray and the path of the emergent ray." },
      { question: "What is the condition for minimum deviation?", answer: "The angle of incidence must equal the angle of emergence (i = e), and the refracted ray inside the prism is parallel to its base." },
      { question: "Why does white light split into seven colors when passing through a prism?", answer: "Because white light is composed of different wavelengths (colors), and the refractive index of glass is different for each wavelength, causing each color to bend by a different amount (Dispersion)." },
      { question: "Which color deviates the least and why?", answer: "Red light deviates the least because it has the longest wavelength and consequently experiences the lowest refractive index in glass." },
      { question: "What does Snell's Law state?", answer: "The ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant for a given pair of media (n = sin i / sin r)." },
      { question: "Why is a pin method used to trace the rays?", answer: "Object pins establish the incident ray line, and viewing their aligned images through the prism allows us to trace the precise emergent path." },
      { question: "How does the angle of deviation change if the prism is immersed in water?", answer: "The angle of deviation decreases because the relative refractive index of glass with respect to water is less than that of glass with respect to air." },
      { question: "Is the graph of angle 'i' versus 'D' a perfect parabola?", answer: "No, it is an asymmetric U-shaped curve. It decreases to a minimum and then rises, but not symmetrically." }
    ],
    realWorldApplications: [
      "Spectrometers: Prisms are used to disperse light into its constituent spectra to analyze the chemical composition of stars and materials.",
      "Binoculars and Periscopes: Porro prisms and roof prisms utilize total internal reflection to erect the inverted images formed by objective lenses.",
      "Cameras: Used inside DSLR viewfinders (pentaprisms) to direct light from the lens into the photographer's eye.",
      "Optometry: Small prisms are ground into eyeglass lenses to correct double vision (diplopia) and strabismus.",
      "Rainbows: Water droplets in the atmosphere act as billions of tiny prisms to naturally disperse sunlight.",
      "Laser Technology: Anamorphic prism pairs are used to shape and correct the elliptical beams emitted by laser diodes."
    ]
  },

  // --- Convex Lens - Focal Length ---
  "p9": {
    quizQuestions: [
      { id: 1, question: "A convex lens is also known as:", options: ["Diverging lens", "Converging lens", "Plano-concave lens", "Cylindrical lens"], correctIndex: 1 },
      { id: 2, question: "According to the thin lens formula, 1/f is equal to:", options: ["1/v + 1/u", "1/u - 1/v", "1/v - 1/u", "v + u"], correctIndex: 2 },
      { id: 3, question: "According to sign convention, the object distance (u) is always taken as:", options: ["Positive", "Negative", "Zero", "Not fixed"], correctIndex: 1 },
      { id: 4, question: "If an object is placed at infinity in front of a convex lens, the image is formed at:", options: ["Center of curvature", "Infinity", "The principal focus", "Optical center"], correctIndex: 2 },
      { id: 5, question: "For an object placed at 2F of a convex lens, the image is formed at:", options: ["F", "Between F and 2F", "2F", "Infinity"], correctIndex: 2 },
      { id: 6, question: "In the 2F case, the magnification is:", options: ["+1", "-1", "+2", "-0.5"], correctIndex: 1 },
      { id: 7, question: "If the lens is moved towards an object placed far away, what happens to the image distance (v)?", options: ["Increases", "Decreases", "Remains constant", "Becomes negative"], correctIndex: 0 },
      { id: 8, question: "Parallax error represents:", options: ["The blurring of the image", "Apparent shift between object and image when moving the eye sideways", "Spherical aberration", "Chromatic aberration"], correctIndex: 1 },
      { id: 9, question: "The graph between u and v for a convex lens is a:", options: ["Straight line", "Circle", "Hyperbola", "Parabola"], correctIndex: 2 },
      { id: 10, question: "The SI unit of Power of a lens is:", options: ["Meter", "Diopter", "Watt", "Focal length"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a convex lens?", answer: "A lens that is thicker at the center than at the edges. It converges parallel rays of light passing through it." },
      { question: "Define the principal focus of a convex lens.", answer: "The point on the principal axis where rays of light parallel to the principal axis converge after refracting through the lens." },
      { question: "What is the optical center?", answer: "The central point of the lens through which a ray of light passes undeviated." },
      { question: "Why is the focal length of a convex lens considered positive?", answer: "Because the real focus lies behind the lens, in the direction of the incident light, according to Cartesian sign convention." },
      { question: "What is parallax and how is it removed?", answer: "Parallax is the apparent separation of the needle and the image when the eye is moved sideways. It is removed by moving the image needle until its tip coincides perfectly with the image and they move together." },
      { question: "What is 'u' and 'v' in the lens formula?", answer: "u is the object distance (distance from optical center to object needle), v is the image distance (distance from optical center to image needle)." },
      { question: "Under what condition does a convex lens act as a magnifying glass?", answer: "When the object is placed between the optical center and the principal focus (u < f). The image formed is virtual, erect, and magnified." },
      { question: "How does the power of a lens relate to its focal length?", answer: "Power is the reciprocal of the focal length in meters (P = 1/f). A shorter focal length means higher converging power." },
      { question: "What happens to the focal length if the lens is immersed in water?", answer: "The focal length increases because the relative refractive index of glass with respect to water is less than that of glass with respect to air." },
      { question: "If you plot a graph of 1/v versus 1/u, what is the shape and what does the intercept represent?", answer: "The graph is a straight line. The x-intercept and y-intercept both represent 1/f." }
    ],
    realWorldApplications: [
      "Human Eye: The crystalline lens in the human eye is a convex lens that focuses incoming light onto the retina.",
      "Magnifying Glasses: Standard magnifying glasses use single convex lenses to produce enlarged virtual images.",
      "Microscopes and Telescopes: Objective lenses and eyepieces are composed of complex arrangements of convex lenses to achieve high magnification.",
      "Photography: Camera lenses use convex elements to focus images of real-world objects onto the digital sensor or film.",
      "Eyeglasses: Convex lenses (positive diopter) are prescribed by optometrists to correct Hypermetropia (farsightedness).",
      "Projectors: Used in movie and digital projectors to cast an enlarged real image onto a distant screen."
    ]
  },

  // --- Semiconductor Diode ---
  "p10": {
    quizQuestions: [
      { id: 1, question: "A p-n junction diode acts primarily as a:", options: ["Amplifier", "Oscillator", "One-way valve (Rectifier)", "Variable resistor"], correctIndex: 2 },
      { id: 2, question: "In forward bias, the p-type material is connected to the:", options: ["Positive terminal", "Negative terminal", "Ground", "Base"], correctIndex: 0 },
      { id: 3, question: "The small current that flows during reverse bias is called:", options: ["Forward current", "Leakage current", "Breakdown current", "Threshold current"], correctIndex: 1 },
      { id: 4, question: "The voltage at which the forward current starts increasing rapidly is called the:", options: ["Breakdown voltage", "Reverse voltage", "Knee voltage (or Cut-in voltage)", "Stopping potential"], correctIndex: 2 },
      { id: 5, question: "For a typical Silicon diode, the knee voltage is approximately:", options: ["0.3 V", "0.7 V", "1.5 V", "5.0 V"], correctIndex: 1 },
      { id: 6, question: "For a typical Germanium diode, the knee voltage is approximately:", options: ["0.3 V", "0.7 V", "1.5 V", "5.0 V"], correctIndex: 0 },
      { id: 7, question: "In reverse bias, if the voltage exceeds a critical limit, the diode conducts heavily. This is called:", options: ["Knee point", "Saturation", "Zener/Avalanche Breakdown", "Pinch-off"], correctIndex: 2 },
      { id: 8, question: "The depletion layer in a p-n junction ________ during forward bias.", options: ["Widens", "Narrows", "Remains unchanged", "Becomes an insulator"], correctIndex: 1 },
      { id: 9, question: "Which carriers are responsible for the forward current in a diode?", options: ["Only electrons", "Only holes", "Majority charge carriers (holes in p, electrons in n)", "Minority charge carriers"], correctIndex: 2 },
      { id: 10, question: "In the experimental setup, a microammeter (uA) is used to measure current during:", options: ["Forward bias", "Reverse bias", "Both forward and reverse", "Neither"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a p-n junction?", answer: "It is the boundary or interface formed when a p-type semiconductor material is brought into intimate contact with an n-type semiconductor material." },
      { question: "What are holes and electrons?", answer: "Electrons are negative charge carriers. Holes are the absence of an electron in a covalent bond, acting as positive charge carriers." },
      { question: "What is the depletion layer?", answer: "A very thin region near the junction devoid of mobile charge carriers, creating a built-in potential barrier." },
      { question: "Define forward biasing.", answer: "Connecting the positive terminal of the battery to the p-region and the negative terminal to the n-region of the diode." },
      { question: "Why does current flow easily in forward bias?", answer: "Because the applied voltage opposes the potential barrier, narrowing the depletion region and allowing majority carriers to cross the junction." },
      { question: "Define reverse biasing.", answer: "Connecting the negative terminal of the battery to the p-region and the positive terminal to the n-region." },
      { question: "What is reverse saturation (leakage) current?", answer: "A very small current (in microamperes) that flows in reverse bias due to thermally generated minority charge carriers." },
      { question: "What is the knee voltage (cut-in voltage)?", answer: "The minimum forward voltage at which the diode starts to conduct heavily (approx. 0.7V for Si, 0.3V for Ge)." },
      { question: "What is Avalanche breakdown?", answer: "When a high reverse voltage is applied, minority carriers gain enough kinetic energy to knock out more electrons from covalent bonds, causing a huge surge in current that may destroy an ordinary diode." },
      { question: "Why do we use an ammeter in milliamperes (mA) for forward bias, but microamperes (uA) for reverse bias?", answer: "Forward current is large (due to majority carriers), while reverse leakage current is minute (due to minority carriers)." }
    ],
    realWorldApplications: [
      "AC to DC Rectification: The primary component in power supplies and mobile phone chargers that converts alternating current from the wall into direct current.",
      "Radio Demodulation: Used as 'detectors' in crystal radios to extract audio signals from amplitude-modulated (AM) radio carrier waves.",
      "Light Emitting Diodes (LEDs): Specialized p-n junctions that release photons when forward-biased, used in everything from TV screens to light bulbs.",
      "Solar Cells (Photodiodes): Large p-n junctions that generate current when exposed to light, converting solar energy into electricity.",
      "Voltage Clamping: Used to protect sensitive electronics from voltage spikes and transient electrostatic discharges.",
      "Logic Gates: Used to build basic OR/AND digital logic circuits in early computer designs."
    ]
  },

  // --- Sonometer ---
  "p11": {
    quizQuestions: [
      { id: 1, question: "A sonometer is fundamentally used to study the laws of:", options: ["Transverse vibrations of strings", "Longitudinal sound waves", "Electromagnetism", "Fluid dynamics"], correctIndex: 0 },
      { id: 2, question: "According to the Law of Length, the fundamental frequency (n) of a stretched string is:", options: ["Directly proportional to its length", "Inversely proportional to its length", "Proportional to the square of its length", "Independent of length"], correctIndex: 1 },
      { id: 3, question: "According to the Law of Tension, the frequency (n) is directly proportional to the square root of:", options: ["Length (l)", "Linear density (m)", "Tension (T)", "Amplitude"], correctIndex: 2 },
      { id: 4, question: "According to the Law of Mass, frequency (n) is inversely proportional to the square root of:", options: ["Mass of the bob", "Tension", "Mass per unit length (m)", "Radius of the wire"], correctIndex: 2 },
      { id: 5, question: "In the sonometer experiment, resonance is proven when:", options: ["The string breaks", "The tuning fork stops vibrating", "The paper rider is thrown off", "The bridges fall"], correctIndex: 2 },
      { id: 6, question: "What type of wave is produced in the sonometer wire?", options: ["Longitudinal traveling", "Transverse stationary (standing) wave", "Longitudinal standing wave", "Electromagnetic wave"], correctIndex: 1 },
      { id: 7, question: "At the position of the wooden bridges, what part of the standing wave is formed?", options: ["Antinode", "Node", "Both", "Neither"], correctIndex: 1 },
      { id: 8, question: "The distance between two adjacent bridges during resonance (the fundamental mode) is equal to:", options: ["Wavelength (λ)", "Half the wavelength (λ/2)", "Quarter wavelength (λ/4)", "Double the wavelength"], correctIndex: 1 },
      { id: 9, question: "If the tension on the wire is quadrupled, its vibrating frequency will:", options: ["Quadruple", "Double", "Halve", "Remain the same"], correctIndex: 1 },
      { id: 10, question: "How do you calculate mass per unit length (m)?", options: ["Mass / Volume", "Mass of the wire / Length of the wire", "Tension / Length", "Volume / Density"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a sonometer?", answer: "An apparatus consisting of a hollow wooden box with a wire stretched across it, used to verify the laws of vibrating strings." },
      { question: "Why is the sonometer box hollow and provided with holes?", answer: "The hollow box acts as a resonating chamber. The air inside vibrates in sympathy with the wire, producing a louder sound, and the holes allow communication with the outside air." },
      { question: "What are stationary (standing) waves?", answer: "Waves formed by the superposition of two identical progressive waves traveling in opposite directions. They have fixed nodes (zero amplitude) and antinodes (max amplitude)." },
      { question: "What is meant by the 'fundamental frequency'?", answer: "The lowest frequency at which the string can vibrate, occurring when exactly one loop is formed between the two bridges." },
      { question: "What is meant by 'resonance' in this experiment?", answer: "Resonance occurs when the natural frequency of the stretched string exactly matches the applied frequency (of the tuning fork), resulting in maximum amplitude of vibration." },
      { question: "Why do we place a paper rider exactly at the center of the segment?", answer: "Because in the fundamental mode of vibration, an antinode (point of maximum displacement) is formed at the center, shaking the rider the hardest." },
      { question: "How is the tension (T) measured in the wire?", answer: "Tension T = Mg, where M is the total mass suspended on the hanger and g is the acceleration due to gravity." },
      { question: "What is 'm' in the formula n = (1/2l)√(T/m)?", answer: "Linear density, which is the mass per unit length of the wire (kilograms per meter)." },
      { question: "How can you change the pitch (frequency) of a guitar string?", answer: "By tightening tuning pegs (increasing Tension), changing the finger position (decreasing Length), or using thicker/heavier strings (increasing m)." },
      { question: "Does the thickness (diameter) of the wire affect its frequency?", answer: "Yes, a thicker wire has a greater mass per unit length (m), which decreases the frequency according to the Law of Mass." }
    ],
    realWorldApplications: [
      "Musical Instruments: The fundamental laws of strings dictate exactly how pianos, guitars, violins, and cellos are designed and tuned.",
      "Piano Tuning: Piano tuners adjust the tension of strings to achieve the precise resonant frequency required for musical notes.",
      "Structural Engineering: Understanding standing waves and resonant frequencies in cables prevents bridge collapses (e.g., Tacoma Narrows).",
      "Power Lines: Engineers must tension high-voltage overhead wires correctly to avoid destructive wind-induced 'galloping' or vibrations.",
      "Elevator Cables: Testing cable tensions by measuring their resonant frequencies under load to ensure passenger safety.",
      "Acoustic Architecture: Designing concert hall stringed panels and acoustic absorbers that resonate at specific frequencies to shape sound."
    ]
  },

  // --- Resonance Tube ---
  "p12": {
    quizQuestions: [
      { id: 1, question: "A resonance tube is used to determine the speed of sound in:", options: ["Water", "Glass", "Air", "Vacuum"], correctIndex: 2 },
      { id: 2, question: "What type of wave is formed in the air column of the resonance tube?", options: ["Transverse standing wave", "Longitudinal stationary wave", "Electromagnetic wave", "Water wave"], correctIndex: 1 },
      { id: 3, question: "The closed end of the resonance tube (water surface) acts as a:", options: ["Node", "Antinode", "Crest", "Trough"], correctIndex: 0 },
      { id: 4, question: "The open end of the resonance tube acts approximately as an:", options: ["Antinode", "Node", "Neither", "Rigid boundary"], correctIndex: 0 },
      { id: 5, question: "The first resonance length (l1) relates to wavelength (λ) as approximately:", options: ["λ", "λ/2", "λ/4", "3λ/4"], correctIndex: 2 },
      { id: 6, question: "The second resonance length (l2) is roughly how many times the first resonance length (l1)?", options: ["2 times", "3 times", "4 times", "5 times"], correctIndex: 1 },
      { id: 7, question: "The formula for the speed of sound using two resonances is:", options: ["v = f(l2 - l1)", "v = 2f(l2 + l1)", "v = 2f(l2 - l1)", "v = f/(l2-l1)"], correctIndex: 2 },
      { id: 8, question: "What is the 'end correction' (e)?", options: ["Error in the scale", "Distance above the tube opening where the true antinode forms", "Effect of temperature", "Error in the tuning fork"], correctIndex: 1 },
      { id: 9, question: "Does the speed of sound in air depend on temperature?", options: ["No, it is constant", "Yes, it increases with temperature", "Yes, it decreases with temperature", "It fluctuates randomly"], correctIndex: 1 },
      { id: 10, question: "The purpose of the water in the resonance tube is to:", options: ["Cool the air", "Act as a rigid boundary that reflects the sound wave", "Moisten the air", "Make it look like a liquid"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is resonance in this experiment?", answer: "Resonance occurs when the frequency of the vibrating tuning fork exactly matches the natural frequency of the air column in the tube, creating a loud boom." },
      { question: "How do longitudinal waves travel?", answer: "They travel as alternating series of compressions (high pressure) and rarefactions (low pressure) parallel to the direction of wave propagation." },
      { question: "Why is an antinode formed slightly outside the open end of the tube?", answer: "Because the sound wave needs some space to expand completely into the surrounding open air, resulting in an 'end correction'." },
      { question: "Write the formula for the end correction (e).", answer: "e = (l2 - 3l1) / 2, or roughly e ≈ 0.3 * d (where d is the internal diameter of the tube)." },
      { question: "Why do we use the difference of two resonance lengths (l2 - l1)?", answer: "Subtracting l1 from l2 automatically cancels out the difficult-to-measure end correction, yielding a purely wavelength-dependent distance (λ/2)." },
      { question: "Why does the water level change the natural frequency?", answer: "Changing the water level changes the length of the air column. Shorter columns resonate at higher frequencies, longer columns at lower frequencies." },
      { question: "What is the approximate speed of sound in air at 0°C?", answer: "Approximately 331 meters per second (m/s)." },
      { question: "How does humidity affect the speed of sound?", answer: "The speed of sound increases slightly with humidity, because moist air is less dense than dry air." },
      { question: "Can we find a third resonance length?", answer: "Yes, it occurs at approximately 5λ/4. However, the tube must be long enough to accommodate it." },
      { question: "Why shouldn't the tuning fork touch the edges of the tube?", answer: "Touching the tube will dampen the tuning fork's vibrations rapidly and introduce unwanted mechanical rattling." }
    ],
    realWorldApplications: [
      "Wind Instruments: Defines how flutes, clarinets, pipe organs, and trumpets are designed with specific tube lengths to produce precise musical notes.",
      "Acoustic Metamaterials: Designing tubes and chambers inside mufflers and exhaust pipes to purposely resonate and cancel out engine noise.",
      "Architecture: Identifying unwanted resonant frequencies in long corridors or stairwells to mitigate acoustic echoing problems.",
      "Hearing Sciences: The human ear canal acts essentially as a closed resonant tube, naturally amplifying frequencies around 3 kHz.",
      "Meteorological Remote Sensing: SODAR devices use pulses of sound to measure atmospheric wind profiles and temperature based on sound velocity.",
      "Voice Mechanics: Understanding how the vocal tract works as an adjustable resonant tube to produce different vowel sounds."
    ]
  }

};

injectData('physics', physicsBatch2);

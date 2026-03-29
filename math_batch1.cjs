const { injectData } = require('./inject_enhancements.cjs');
const batch = {
  "m1": {
    quizQuestions: [
      { id: 1, question: "The graph of y = x² is a:", options: ["Straight line", "Parabola", "Circle", "Hyperbola"], correctIndex: 1 },
      { id: 2, question: "The graph of y = sin(x) has a period of:", options: ["π", "2π", "π/2", "4π"], correctIndex: 1 },
      { id: 3, question: "A function f(x) is even if:", options: ["f(-x) = -f(x)", "f(-x) = f(x)", "f(x) = 0", "f(x) = x"], correctIndex: 1 },
      { id: 4, question: "The domain of f(x) = √x is:", options: ["All real numbers", "x ≥ 0", "x > 0", "x < 0"], correctIndex: 1 },
      { id: 5, question: "The graph of y = |x| has shape:", options: ["U-shape (parabola)", "V-shape", "Straight line", "S-curve"], correctIndex: 1 },
      { id: 6, question: "Shifting y = f(x) to y = f(x-2) moves the graph:", options: ["2 units left", "2 units right", "2 units up", "2 units down"], correctIndex: 1 },
      { id: 7, question: "The range of y = eˣ is:", options: ["All real numbers", "y > 0", "y ≥ 0", "y < 0"], correctIndex: 1 },
      { id: 8, question: "log₁₀(1) equals:", options: ["1", "10", "0", "Undefined"], correctIndex: 2 },
      { id: 9, question: "The graph of y = 1/x has:", options: ["One asymptote", "Two asymptotes (x=0 and y=0)", "No asymptotes", "Three asymptotes"], correctIndex: 1 },
      { id: 10, question: "A function is one-to-one if it passes the:", options: ["Vertical line test", "Horizontal line test", "Both tests", "Neither test"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a function?", answer: "A relation where each input (x) maps to exactly one output (y)." },
      { question: "How do you determine the domain of a function?", answer: "Identify all x-values for which the function produces a valid real output — exclude division by zero, negatives under even roots, etc." },
      { question: "What is the vertical line test?", answer: "If any vertical line intersects the graph at more than one point, the graph does not represent a function." },
      { question: "Explain the effect of y = -f(x) on a graph.", answer: "It reflects the graph across the x-axis." },
      { question: "What is an asymptote?", answer: "A line that the graph approaches but never actually reaches as x or y tends to infinity." },
      { question: "Distinguish between continuous and discontinuous functions.", answer: "A continuous function has no breaks, jumps, or holes in its graph. A discontinuous function has at least one such break." },
      { question: "What does it mean for a function to be increasing?", answer: "For any x₁ < x₂, f(x₁) < f(x₂) — the graph goes uphill from left to right." },
      { question: "What is a piecewise function?", answer: "A function defined by different expressions over different intervals of the domain." },
      { question: "How does stretching vertically differ from horizontally?", answer: "y = af(x) stretches vertically by factor a; y = f(bx) compresses horizontally by factor b." },
      { question: "What is the significance of roots/zeros of a function?", answer: "They are x-values where f(x) = 0, representing where the graph crosses the x-axis." }
    ],
    realWorldApplications: [
      "Engineering Signal Processing: Sine and cosine functions model electrical signals, radio waves, and sound vibrations.",
      "Economics: Exponential and logarithmic functions model compound interest, inflation, and economic growth.",
      "Physics: Parabolic functions describe projectile motion and satellite dish shapes.",
      "Computer Graphics: Function transformations are fundamental to rendering, scaling, and animating objects in video games.",
      "Medicine: Exponential decay functions model drug metabolism and radioactive tracer decay in medical imaging.",
      "Architecture: Understanding curves (parabolas, catenaries) is essential for designing bridges, arches, and suspension cables."
    ]
  },
  "m2": {
    quizQuestions: [
      { id: 1, question: "The definite integral ∫ₐᵇ f(x)dx represents:", options: ["The slope at a point", "The net signed area under f(x) from a to b", "The maximum value", "The derivative"], correctIndex: 1 },
      { id: 2, question: "∫₀¹ x dx equals:", options: ["0", "1", "1/2", "2"], correctIndex: 2 },
      { id: 3, question: "The Fundamental Theorem of Calculus connects:", options: ["Algebra and geometry", "Differentiation and integration", "Probability and statistics", "Trigonometry and algebra"], correctIndex: 1 },
      { id: 4, question: "∫₋₁¹ x³ dx equals:", options: ["2/3", "0", "1", "-1"], correctIndex: 1 },
      { id: 5, question: "If f(x) ≥ 0 on [a,b], the definite integral gives:", options: ["Negative area", "Exact area under the curve above x-axis", "Slope of tangent", "Volume"], correctIndex: 1 },
      { id: 6, question: "∫₀^π sin(x) dx equals:", options: ["0", "1", "2", "π"], correctIndex: 2 },
      { id: 7, question: "Reversing limits of integration changes:", options: ["Nothing", "The sign of the integral", "The function", "The variable"], correctIndex: 1 },
      { id: 8, question: "The trapezoidal rule is a method for:", options: ["Differentiation", "Numerical approximation of definite integrals", "Factoring polynomials", "Finding limits"], correctIndex: 1 },
      { id: 9, question: "∫ₐᵃ f(x)dx always equals:", options: ["1", "a", "f(a)", "0"], correctIndex: 3 },
      { id: 10, question: "Integration is the reverse process of:", options: ["Multiplication", "Division", "Differentiation", "Addition"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "What is the geometric interpretation of a definite integral?", answer: "It represents the net signed area between the curve y=f(x) and the x-axis over the interval [a,b]." },
      { question: "State the Fundamental Theorem of Calculus.", answer: "If F is an antiderivative of f on [a,b], then ∫ₐᵇ f(x)dx = F(b) - F(a)." },
      { question: "What is the difference between definite and indefinite integrals?", answer: "A definite integral has limits and gives a numerical value; an indefinite integral has no limits and gives a family of functions plus constant C." },
      { question: "Why do we add a constant C in indefinite integration?", answer: "Because the derivative of any constant is zero, so infinitely many antiderivatives exist differing only by a constant." },
      { question: "What happens when f(x) is negative on an interval?", answer: "The definite integral gives a negative value for that region, representing area below the x-axis." },
      { question: "Explain the substitution method.", answer: "Replace a complicated expression with a single variable (u-substitution) to simplify the integral into a recognizable form." },
      { question: "What is Simpson's rule?", answer: "A numerical integration method that approximates the area using parabolic segments instead of straight lines, giving higher accuracy." },
      { question: "Can every function be integrated analytically?", answer: "No. Functions like e^(-x²) have no closed-form antiderivative and require numerical methods." },
      { question: "What is an improper integral?", answer: "An integral where either a limit is infinite or the integrand has a discontinuity within the interval." },
      { question: "How is integration used in probability?", answer: "The area under a probability density function curve over an interval gives the probability of the random variable falling in that interval." }
    ],
    realWorldApplications: [
      "Physics (Work and Energy): Calculating work done by a variable force by integrating Force over displacement.",
      "Civil Engineering: Computing the total volume of irregular structures like dams, embankments, and curved surfaces.",
      "Economics: Calculating consumer and producer surplus from supply and demand curves.",
      "Medical Imaging: CT scan reconstruction uses integral calculus to build 3D images from 2D X-ray slices.",
      "Electrical Engineering: Determining total charge from current-time graphs and energy from power-time graphs.",
      "Environmental Science: Estimating total pollutant discharge in a river by integrating concentration over flow rate."
    ]
  },
  "m3": {
    quizQuestions: [
      { id: 1, question: "On the unit circle, the radius is:", options: ["0", "2", "1", "π"], correctIndex: 2 },
      { id: 2, question: "sin(90°) equals:", options: ["0", "1", "-1", "1/2"], correctIndex: 1 },
      { id: 3, question: "cos(0°) equals:", options: ["0", "-1", "1", "√2"], correctIndex: 2 },
      { id: 4, question: "tan(45°) equals:", options: ["0", "1", "√3", "Undefined"], correctIndex: 1 },
      { id: 5, question: "On the unit circle, sin θ represents the:", options: ["x-coordinate", "y-coordinate", "Radius", "Angle"], correctIndex: 1 },
      { id: 6, question: "π radians equals:", options: ["90°", "180°", "360°", "45°"], correctIndex: 1 },
      { id: 7, question: "sin²θ + cos²θ always equals:", options: ["0", "2", "1", "θ"], correctIndex: 2 },
      { id: 8, question: "In the second quadrant, sine is:", options: ["Negative", "Positive", "Zero", "Undefined"], correctIndex: 1 },
      { id: 9, question: "The coordinates at θ = π/6 on the unit circle are:", options: ["(√3/2, 1/2)", "(1/2, √3/2)", "(1, 0)", "(0, 1)"], correctIndex: 0 },
      { id: 10, question: "sec θ is the reciprocal of:", options: ["sin θ", "cos θ", "tan θ", "cot θ"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is the unit circle?", answer: "A circle centered at the origin with radius 1, used to define trigonometric functions for all real angles." },
      { question: "How do you convert degrees to radians?", answer: "Multiply by π/180. For example, 90° = 90 × π/180 = π/2 radians." },
      { question: "What is the ASTC rule?", answer: "All-Sin-Tan-Cos: tells which trig functions are positive in each quadrant (I: All, II: Sin, III: Tan, IV: Cos)." },
      { question: "Why is the unit circle useful?", answer: "It extends trigonometric functions beyond acute angles to all real numbers and provides exact values geometrically." },
      { question: "What are reference angles?", answer: "The acute angle between the terminal side of an angle and the x-axis, used to find trig values in any quadrant." },
      { question: "Derive sin(30°) using the unit circle.", answer: "At 30° (π/6), the coordinates are (√3/2, 1/2), so sin(30°) = y-coordinate = 1/2." },
      { question: "What is a radian?", answer: "The angle subtended at the center by an arc equal in length to the radius. One full rotation = 2π radians." },
      { question: "State the Pythagorean identity.", answer: "sin²θ + cos²θ = 1, derived directly from the equation x² + y² = 1 of the unit circle." },
      { question: "What are the three reciprocal trig functions?", answer: "csc θ = 1/sin θ, sec θ = 1/cos θ, cot θ = 1/tan θ." },
      { question: "How does the unit circle help visualize periodicity?", answer: "Rotating beyond 2π (360°) returns to the same point, showing that trig functions repeat every 2π." }
    ],
    realWorldApplications: [
      "Navigation and GPS: Trigonometric calculations from the unit circle enable precise position determination on Earth's surface.",
      "Music and Acoustics: Sound waves are modeled using sine functions; the unit circle helps visualize phase shifts and harmonics.",
      "Robotics: Joint angles and rotational movements in robot arms are calculated using unit circle trigonometry.",
      "Astronomy: Calculating the positions of stars and planets involves extensive use of spherical trigonometry.",
      "Game Development: Character movement, rotation, and camera angles in video games rely on unit circle math.",
      "Electrical Engineering: AC circuit analysis using phasors directly maps voltage and current to unit circle representations."
    ]
  },
  "m4": {
    quizQuestions: [
      { id: 1, question: "A circle is the locus of points equidistant from:", options: ["A line", "A fixed point (center)", "Two points", "A plane"], correctIndex: 1 },
      { id: 2, question: "The eccentricity of a circle is:", options: ["1", "Greater than 1", "0", "Between 0 and 1"], correctIndex: 2 },
      { id: 3, question: "A parabola has eccentricity:", options: ["0", "1", "2", "0.5"], correctIndex: 1 },
      { id: 4, question: "An ellipse has eccentricity:", options: ["e = 0", "0 < e < 1", "e = 1", "e > 1"], correctIndex: 1 },
      { id: 5, question: "A hyperbola has eccentricity:", options: ["e = 0", "0 < e < 1", "e = 1", "e > 1"], correctIndex: 3 },
      { id: 6, question: "The standard equation of a parabola opening rightward is:", options: ["y² = 4ax", "x² = 4ay", "x² + y² = r²", "x²/a² + y²/b² = 1"], correctIndex: 0 },
      { id: 7, question: "The foci of an ellipse lie on the:", options: ["Minor axis", "Major axis", "Directrix", "Tangent"], correctIndex: 1 },
      { id: 8, question: "A hyperbola has:", options: ["One focus", "No foci", "Two foci", "Three foci"], correctIndex: 2 },
      { id: 9, question: "The sum of distances from any point on an ellipse to its two foci equals:", options: ["2a (length of major axis)", "2b", "a + b", "a²"], correctIndex: 0 },
      { id: 10, question: "Conic sections are obtained by intersecting a:", options: ["Sphere with a plane", "Double cone with a plane", "Cube with a line", "Cylinder with a circle"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What are conic sections?", answer: "Curves obtained by intersecting a right circular cone with a plane at different angles — circle, ellipse, parabola, and hyperbola." },
      { question: "Define eccentricity.", answer: "The ratio of the distance from a point on the conic to the focus, to its distance from the directrix. It determines the shape." },
      { question: "What is the directrix?", answer: "A fixed line associated with a conic such that the ratio of distance to focus over distance to directrix (eccentricity) is constant." },
      { question: "Why is the parabola important in optics?", answer: "Parabolic mirrors reflect all parallel rays through the focus, making them ideal for telescopes and satellite dishes." },
      { question: "What is the latus rectum?", answer: "A chord through the focus perpendicular to the axis of the conic. For a parabola y²=4ax, its length is 4a." },
      { question: "How do planetary orbits relate to conics?", answer: "Kepler's First Law states that planets orbit the Sun in elliptical paths with the Sun at one focus." },
      { question: "What is the relationship between a and b in an ellipse?", answer: "a is the semi-major axis, b is the semi-minor axis, and they relate to eccentricity by b² = a²(1-e²)." },
      { question: "What are the asymptotes of a hyperbola?", answer: "Lines that the branches of the hyperbola approach but never touch. For x²/a² - y²/b² = 1, they are y = ±(b/a)x." },
      { question: "What is a degenerate conic?", answer: "When the cutting plane passes through the apex of the cone, producing a point, a line, or a pair of intersecting lines." },
      { question: "How is the parabola used in projectile motion?", answer: "The trajectory of a projectile under uniform gravity (ignoring air resistance) follows a parabolic path." }
    ],
    realWorldApplications: [
      "Satellite Dishes: Parabolic reflector design focuses incoming signals at the focal point for maximum reception.",
      "Planetary Orbits: All planets follow elliptical orbits as described by Kepler's laws.",
      "Architecture: Elliptical and parabolic arches distribute weight efficiently in bridges and cathedrals.",
      "Automotive Headlights: Parabolic reflectors project light in parallel beams for long-range visibility.",
      "Nuclear Cooling Towers: Hyperbolic shapes provide structural strength with minimal material.",
      "Whispering Galleries: Elliptical rooms (like the US Capitol) focus sound from one focus to the other."
    ]
  },
  "m5": {
    quizQuestions: [
      { id: 1, question: "A vector has both:", options: ["Magnitude only", "Direction only", "Magnitude and direction", "Neither"], correctIndex: 2 },
      { id: 2, question: "The magnitude of vector (3, 4) is:", options: ["7", "12", "5", "1"], correctIndex: 2 },
      { id: 3, question: "Two vectors are equal if they have:", options: ["Same magnitude only", "Same direction only", "Same magnitude and direction", "Same starting point"], correctIndex: 2 },
      { id: 4, question: "The dot product of perpendicular vectors is:", options: ["1", "Maximum", "0", "Undefined"], correctIndex: 2 },
      { id: 5, question: "The cross product of two vectors gives:", options: ["A scalar", "A vector perpendicular to both", "Zero always", "A parallel vector"], correctIndex: 1 },
      { id: 6, question: "If a⃗ · b⃗ = |a⃗||b⃗|, the angle between them is:", options: ["90°", "0°", "180°", "45°"], correctIndex: 1 },
      { id: 7, question: "A unit vector has magnitude:", options: ["0", "1", "Any value", "Infinity"], correctIndex: 1 },
      { id: 8, question: "The zero vector has:", options: ["Magnitude 1", "No definite direction", "Magnitude -1", "Fixed direction"], correctIndex: 1 },
      { id: 9, question: "The triangle law of vector addition states vectors are added:", options: ["Algebraically", "Head to tail", "Tail to tail", "By multiplication"], correctIndex: 1 },
      { id: 10, question: "If a⃗ × b⃗ = 0⃗, the vectors are:", options: ["Perpendicular", "Parallel (or one is zero)", "Equal", "Unit vectors"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a vector?", answer: "A quantity that has both magnitude and direction, represented geometrically as a directed line segment." },
      { question: "Distinguish between scalars and vectors.", answer: "Scalars have only magnitude (mass, temperature). Vectors have both magnitude and direction (force, velocity, displacement)." },
      { question: "What is the geometric meaning of the dot product?", answer: "a⃗·b⃗ = |a⃗||b⃗|cos θ; it measures the projection of one vector onto another." },
      { question: "What is the geometric meaning of the cross product?", answer: "a⃗×b⃗ gives a vector perpendicular to both with magnitude |a⃗||b⃗|sin θ, equal to the area of the parallelogram formed." },
      { question: "What are i⃗, j⃗, k⃗?", answer: "Unit vectors along the x, y, and z axes respectively, forming the standard basis for 3D space." },
      { question: "How do you find the angle between two vectors?", answer: "Using cos θ = (a⃗·b⃗)/(|a⃗||b⃗|)." },
      { question: "What is a position vector?", answer: "The vector from the origin to a point in space, uniquely identifying that point's coordinates." },
      { question: "Is the cross product commutative?", answer: "No, a⃗×b⃗ = -(b⃗×a⃗). It is anti-commutative." },
      { question: "What is the resultant of two vectors?", answer: "The single vector that has the same effect as the two original vectors combined, found by the parallelogram or triangle law." },
      { question: "What is meant by resolution of a vector?", answer: "Splitting a vector into two or more components, typically along perpendicular axes." }
    ],
    realWorldApplications: [
      "Aviation: Pilots calculate resultant velocity vectors considering wind speed and direction for accurate navigation.",
      "Structural Engineering: Force analysis on buildings and bridges uses vector addition to ensure structural integrity.",
      "Computer Graphics: 3D rendering, lighting, and surface normal calculations rely heavily on vector operations.",
      "Robotics: Robot arm kinematics and force calculations use vector mathematics for precise movement control.",
      "Electromagnetism: Electric and magnetic fields are vector quantities; their interactions (Lorentz force) require cross products.",
      "Sports Science: Analyzing projectile trajectories and impact forces in sports like cricket and football uses vector decomposition."
    ]
  }
};
injectData('math', batch);

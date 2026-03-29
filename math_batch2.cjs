const { injectData } = require('./inject_enhancements.cjs');
const batch = {
  "m6": {
    quizQuestions: [
      { id: 1, question: "sin⁻¹(x) is defined for:", options: ["All real x", "-1 ≤ x ≤ 1", "x > 1", "x < -1"], correctIndex: 1 },
      { id: 2, question: "The range of sin⁻¹(x) is:", options: ["[0, π]", "[-π/2, π/2]", "[0, 2π]", "(-∞, ∞)"], correctIndex: 1 },
      { id: 3, question: "cos⁻¹(0) equals:", options: ["0", "π/2", "π", "2π"], correctIndex: 1 },
      { id: 4, question: "tan⁻¹(1) equals:", options: ["0", "π/4", "π/2", "π"], correctIndex: 1 },
      { id: 5, question: "sin⁻¹(x) + cos⁻¹(x) equals:", options: ["0", "π", "π/2", "2π"], correctIndex: 2 },
      { id: 6, question: "The principal value of sin⁻¹(-1/2) is:", options: ["π/6", "-π/6", "5π/6", "-5π/6"], correctIndex: 1 },
      { id: 7, question: "Inverse trig functions are used to find:", options: ["Areas", "Angles from given ratios", "Derivatives only", "Integrals only"], correctIndex: 1 },
      { id: 8, question: "The graph of y = sin⁻¹(x) is:", options: ["A complete sine wave", "An increasing curve from (-1,-π/2) to (1,π/2)", "A circle", "A parabola"], correctIndex: 1 },
      { id: 9, question: "tan⁻¹(x) has range:", options: ["[0, π]", "(-π/2, π/2)", "[-π/2, π/2]", "[0, 2π]"], correctIndex: 1 },
      { id: 10, question: "cos⁻¹(-1) equals:", options: ["0", "π/2", "π", "-π"], correctIndex: 2 }
    ],
    vivaQuestions: [
      { question: "Why are inverse trig functions needed?", answer: "To find the angle when the trigonometric ratio is known, which is essential in solving triangles and real-world angle problems." },
      { question: "What is a principal value?", answer: "The unique value within the restricted range of an inverse trig function that satisfies the equation." },
      { question: "Why do we restrict the domain of trig functions?", answer: "Because trig functions are periodic and not one-to-one over their natural domain; restriction makes them invertible." },
      { question: "State the identity: tan⁻¹(x) + tan⁻¹(y).", answer: "tan⁻¹(x) + tan⁻¹(y) = tan⁻¹((x+y)/(1-xy)) when xy < 1." },
      { question: "What is the derivative of sin⁻¹(x)?", answer: "1/√(1-x²), defined for |x| < 1." },
      { question: "Are inverse trig functions continuous?", answer: "Yes, within their principal value domains they are continuous and differentiable." },
      { question: "What is the relationship between sin⁻¹(x) and cosec⁻¹(x)?", answer: "sin⁻¹(x) = cosec⁻¹(1/x) for |x| ≤ 1, x ≠ 0." },
      { question: "How is tan⁻¹ used in navigation?", answer: "To calculate bearing angles from coordinate differences (arctan of opposite/adjacent)." },
      { question: "What happens if you try sin⁻¹(2)?", answer: "It is undefined for real numbers since the domain of sin⁻¹ is [-1, 1]." },
      { question: "Write sin⁻¹(sin(x)) = x. When is this true?", answer: "Only when x lies within [-π/2, π/2]; otherwise the principal value adjustment applies." }
    ],
    realWorldApplications: [
      "Surveying: Calculating elevation angles from distance and height measurements using arctan.",
      "Robotics: Computing joint angles from desired end-effector positions (inverse kinematics).",
      "Signal Processing: Phase angle computation in Fourier analysis uses arctan extensively.",
      "Construction: Determining roof pitch angles and ramp inclinations from rise-over-run ratios.",
      "Aviation: Pilots use inverse trig to calculate glide slope angles during landing approach.",
      "Optics: Calculating angles of refraction using Snell's law requires inverse sine (arcsin)."
    ]
  },
  "m7": {
    quizQuestions: [
      { id: 1, question: "A function has a local maximum when:", options: ["f'(x) changes from + to -", "f'(x) changes from - to +", "f'(x) = 1", "f(x) = 0"], correctIndex: 0 },
      { id: 2, question: "At a critical point:", options: ["f(x) = 0", "f'(x) = 0 or f'(x) is undefined", "f''(x) = 0", "f(x) is maximum"], correctIndex: 1 },
      { id: 3, question: "The second derivative test: if f''(c) < 0, then x=c is:", options: ["A minimum", "A maximum", "An inflection point", "Neither"], correctIndex: 1 },
      { id: 4, question: "If f''(c) > 0, then x=c is:", options: ["A maximum", "A minimum", "An inflection point", "Undefined"], correctIndex: 1 },
      { id: 5, question: "An inflection point occurs when:", options: ["f'(x) = 0", "f''(x) changes sign", "f(x) = 0", "f'(x) > 0"], correctIndex: 1 },
      { id: 6, question: "For the function f(x) = x² - 4x + 3, the minimum occurs at:", options: ["x = 0", "x = 2", "x = 3", "x = -2"], correctIndex: 1 },
      { id: 7, question: "The absolute maximum of f(x) on [a,b] can occur at:", options: ["Critical points only", "Endpoints only", "Critical points or endpoints", "x = 0 only"], correctIndex: 2 },
      { id: 8, question: "If f'(x) = 0 and f''(x) = 0, the test is:", options: ["Maximum", "Minimum", "Inconclusive", "Always an inflection"], correctIndex: 2 },
      { id: 9, question: "Optimization problems involve finding:", options: ["Limits", "Maximum or minimum values of a quantity", "Derivatives only", "Integrals only"], correctIndex: 1 },
      { id: 10, question: "The first derivative test uses:", options: ["Sign changes of f'(x) around critical points", "Value of f''(x)", "f(x) = 0", "Integration"], correctIndex: 0 }
    ],
    vivaQuestions: [
      { question: "What is a critical point?", answer: "A point where f'(x) = 0 or f'(x) does not exist. These are candidates for local extrema." },
      { question: "Explain the first derivative test.", answer: "If f'(x) changes from positive to negative at c, it's a local max. If from negative to positive, it's a local min." },
      { question: "When does the second derivative test fail?", answer: "When f''(c) = 0; the test is inconclusive, and we must use the first derivative test or higher-order derivatives." },
      { question: "What is the Extreme Value Theorem?", answer: "A continuous function on a closed interval [a,b] always attains both an absolute maximum and minimum on that interval." },
      { question: "How do you solve optimization word problems?", answer: "Define variables, write the objective function, find constraints, use calculus to find critical points, and verify max/min." },
      { question: "What is a saddle point?", answer: "A critical point that is neither a maximum nor minimum — the function increases in one direction and decreases in another." },
      { question: "Can a function have a maximum at an endpoint?", answer: "Yes, the absolute maximum on a closed interval may occur at an endpoint where f'(x) ≠ 0." },
      { question: "What is the concavity of a function?", answer: "Concave up (f'' > 0) means the curve opens upward; concave down (f'' < 0) means it opens downward." },
      { question: "Give a real example of an optimization problem.", answer: "Finding the dimensions of a box with maximum volume for a given amount of material." },
      { question: "What is the global vs local maximum?", answer: "Local maximum is highest in a neighborhood; global maximum is the highest value of f over its entire domain." }
    ],
    realWorldApplications: [
      "Manufacturing: Minimizing material cost while maximizing container volume for packaging design.",
      "Economics: Finding profit-maximizing production levels by analyzing marginal cost and revenue curves.",
      "Medicine: Determining optimal drug dosage that maximizes therapeutic effect while minimizing side effects.",
      "Civil Engineering: Designing structures with minimum material usage for maximum load-bearing capacity.",
      "Machine Learning: Gradient descent algorithms find minima of loss functions to train neural networks.",
      "Logistics: Optimizing delivery routes and warehouse locations to minimize transportation costs."
    ]
  },
  "m8": {
    quizQuestions: [
      { id: 1, question: "The area under a curve y=f(x) from x=a to x=b is given by:", options: ["f(b)-f(a)", "∫ₐᵇ f(x) dx", "f'(x)", "Σf(x)"], correctIndex: 1 },
      { id: 2, question: "To find area between two curves, we calculate:", options: ["∫(upper - lower) dx", "∫(upper × lower) dx", "∫(upper + lower) dx", "upper - lower at one point"], correctIndex: 0 },
      { id: 3, question: "The area under y = x from 0 to 2 is:", options: ["4", "2", "1", "3"], correctIndex: 1 },
      { id: 4, question: "If f(x) < 0 on [a,b], the area is:", options: ["Negative", "|∫ₐᵇ f(x) dx| (take absolute value)", "Zero", "Undefined"], correctIndex: 1 },
      { id: 5, question: "The area of a circle can be computed using:", options: ["∫₋ᵣʳ 2√(r²-x²) dx", "πr", "2πr²", "r²"], correctIndex: 0 },
      { id: 6, question: "Area between y=x² and y=x from 0 to 1 is:", options: ["1/2", "1/3", "1/6", "1"], correctIndex: 2 },
      { id: 7, question: "Simpson's rule gives better area approximation than trapezoidal because:", options: ["It uses straight lines", "It uses parabolic curves to fit data", "It ignores errors", "It uses fewer points"], correctIndex: 1 },
      { id: 8, question: "To find the area bounded by y-axis, we integrate with respect to:", options: ["x", "y", "z", "t"], correctIndex: 1 },
      { id: 9, question: "The area under the normal (bell) curve from -∞ to ∞ equals:", options: ["0", "π", "1", "2π"], correctIndex: 2 },
      { id: 10, question: "Numerical integration is needed when:", options: ["Functions are simple", "An analytical antiderivative doesn't exist", "Area is zero", "The curve is a straight line"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "Why is integration related to area?", answer: "The definite integral sums infinitesimally thin rectangles under the curve, with the limit of this sum equaling the exact area." },
      { question: "How do you find area between two curves?", answer: "Integrate the difference (upper function minus lower function) over the interval where they bound a region." },
      { question: "What if the curves intersect within the interval?", answer: "Split the integral at intersection points and take the absolute value of each part to get total area." },
      { question: "What is the trapezoidal rule?", answer: "A numerical method that approximates the area by dividing it into trapezoids instead of rectangles for better accuracy." },
      { question: "How does increasing the number of partitions affect accuracy?", answer: "More partitions yield narrower strips, reducing approximation error and converging to the true area." },
      { question: "Can area be negative?", answer: "The integral can be negative (when the curve is below the x-axis), but geometric area is always positive." },
      { question: "How do you find the area enclosed by a polar curve?", answer: "Using A = ½∫ r²dθ over the appropriate angular interval." },
      { question: "What is Monte Carlo integration?", answer: "A probabilistic method that estimates area by randomly sampling points and counting how many fall under the curve." },
      { question: "How is area under a curve related to probability?", answer: "For a PDF, the area under the curve over an interval gives the probability of the variable falling in that interval." },
      { question: "What is a Riemann sum?", answer: "The sum of products of function values and strip widths, approximating the area under a curve." }
    ],
    realWorldApplications: [
      "Economics: Calculating total revenue or total cost from marginal curves by finding area under those curves.",
      "Hydrology: Determining total water discharge from a river by integrating flow rate over time.",
      "Pharmacokinetics: Area Under the Curve (AUC) of drug concentration vs time indicates total drug exposure in the body.",
      "Statistics: The area under probability density functions determines probabilities for continuous distributions.",
      "Surveying: Calculating land areas from irregular boundary measurements using numerical integration.",
      "Energy: Computing total energy delivered over time by integrating power output curves of solar panels."
    ]
  },
  "m9": {
    quizQuestions: [
      { id: 1, question: "A probability distribution assigns probabilities to:", options: ["Random variables", "Fixed numbers", "Constants", "Colors"], correctIndex: 0 },
      { id: 2, question: "The sum of all probabilities in a distribution equals:", options: ["0", "0.5", "1", "Infinity"], correctIndex: 2 },
      { id: 3, question: "The mean (expected value) of X is:", options: ["Σ xᵢP(xᵢ)", "ΣP(xᵢ)", "Σxᵢ", "Max P(xᵢ)"], correctIndex: 0 },
      { id: 4, question: "Standard deviation measures:", options: ["Central tendency", "Spread/dispersion of data", "Probability", "Mode"], correctIndex: 1 },
      { id: 5, question: "The binomial distribution models:", options: ["Continuous data", "Fixed number of independent yes/no trials", "Normal curves", "Time between events"], correctIndex: 1 },
      { id: 6, question: "For a fair coin tossed 3 times, P(exactly 2 heads) is:", options: ["1/8", "3/8", "1/2", "1/4"], correctIndex: 1 },
      { id: 7, question: "The normal distribution is:", options: ["Skewed left", "Uniform", "Bell-shaped and symmetric", "Rectangular"], correctIndex: 2 },
      { id: 8, question: "In a normal distribution, approximately 68% of data falls within:", options: ["1 standard deviation of mean", "2 standard deviations", "3 standard deviations", "The mode"], correctIndex: 0 },
      { id: 9, question: "Variance is:", options: ["The square root of standard deviation", "The square of standard deviation", "Mean of the data", "Mode of values"], correctIndex: 1 },
      { id: 10, question: "A Poisson distribution models:", options: ["Continuous data", "The number of events in a fixed interval with a known average rate", "Two outcomes", "Normal data"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a random variable?", answer: "A variable whose value is determined by the outcome of a random experiment." },
      { question: "Distinguish between discrete and continuous distributions.", answer: "Discrete distributions have countable outcomes (e.g., dice). Continuous distributions have uncountable outcomes over an interval." },
      { question: "What is expected value?", answer: "The long-run average value of a random variable; the weighted mean of all possible values weighted by their probabilities." },
      { question: "State the conditions for binomial distribution.", answer: "Fixed number of trials, each trial independent, two possible outcomes, constant probability of success." },
      { question: "What is the Central Limit Theorem?", answer: "The sampling distribution of the sample mean approaches a normal distribution as sample size increases, regardless of population distribution." },
      { question: "What does a Z-score represent?", answer: "The number of standard deviations a data point is from the mean." },
      { question: "When is the Poisson distribution used?", answer: "For modeling rare events occurring randomly over a fixed time, area, or volume at a known average rate." },
      { question: "What is the law of large numbers?", answer: "As the number of trials increases, the experimental probability converges to the theoretical probability." },
      { question: "How is variance calculated?", answer: "Var(X) = E(X²) - [E(X)]² = Σ(xᵢ - μ)²P(xᵢ)." },
      { question: "What is a cumulative distribution function (CDF)?", answer: "F(x) = P(X ≤ x), giving the probability that the random variable is less than or equal to x." }
    ],
    realWorldApplications: [
      "Insurance Actuarial Science: Calculating premiums and risk based on probability distributions of claims.",
      "Quality Control: Using normal distribution to set tolerance limits and detect defective products.",
      "Weather Forecasting: Probability distributions model uncertainty in temperature, rainfall, and wind predictions.",
      "Finance: Stock price movements are modeled using probability distributions for portfolio risk management.",
      "Epidemiology: Modeling disease spread using Poisson and binomial distributions to predict outbreak patterns.",
      "Machine Learning: Naive Bayes classifiers and many ML algorithms are built on probability distribution theory."
    ]
  },
  "m10": {
    quizQuestions: [
      { id: 1, question: "A matrix is an ordered arrangement of numbers in:", options: ["A circle", "Rows and columns", "A single line", "Random positions"], correctIndex: 1 },
      { id: 2, question: "The order of a matrix with 3 rows and 2 columns is:", options: ["2×3", "3×2", "6×1", "1×6"], correctIndex: 1 },
      { id: 3, question: "Matrix multiplication AB is possible only if:", options: ["Rows of A = Rows of B", "Columns of A = Rows of B", "Both are square", "Always possible"], correctIndex: 1 },
      { id: 4, question: "The identity matrix has:", options: ["All zeros", "1s on the main diagonal, 0s elsewhere", "All 1s", "Random values"], correctIndex: 1 },
      { id: 5, question: "The determinant of a 2×2 matrix [[a,b],[c,d]] is:", options: ["a+d", "ad-bc", "ab-cd", "ac-bd"], correctIndex: 1 },
      { id: 6, question: "If det(A) = 0, the matrix is:", options: ["Identity", "Singular (non-invertible)", "Orthogonal", "Symmetric"], correctIndex: 1 },
      { id: 7, question: "The transpose of matrix A is obtained by:", options: ["Multiplying by -1", "Interchanging rows and columns", "Adding identity", "Squaring each element"], correctIndex: 1 },
      { id: 8, question: "AB ≠ BA in general shows that matrix multiplication is:", options: ["Commutative", "Non-commutative", "Distributive", "Impossible"], correctIndex: 1 },
      { id: 9, question: "A symmetric matrix satisfies:", options: ["A = -Aᵀ", "A = Aᵀ", "A = A⁻¹", "A = 0"], correctIndex: 1 },
      { id: 10, question: "Cramer's rule uses determinants to solve:", options: ["Differential equations", "Systems of linear equations", "Quadratic equations", "Integrations"], correctIndex: 1 }
    ],
    vivaQuestions: [
      { question: "What is a matrix?", answer: "A rectangular array of numbers, symbols, or expressions arranged in rows and columns." },
      { question: "When can two matrices be added?", answer: "Only when they have the same order (same number of rows and columns)." },
      { question: "What is the inverse of a matrix?", answer: "Matrix A⁻¹ such that AA⁻¹ = A⁻¹A = I (identity matrix). It exists only if det(A) ≠ 0." },
      { question: "What are eigenvalues?", answer: "Scalars λ such that Av = λv for some non-zero vector v; they reveal fundamental properties of the linear transformation." },
      { question: "What is a diagonal matrix?", answer: "A square matrix where all elements outside the main diagonal are zero." },
      { question: "Explain the use of matrices in solving simultaneous equations.", answer: "A system AX = B can be solved as X = A⁻¹B if A is invertible, or using row reduction (Gaussian elimination)." },
      { question: "What is the trace of a matrix?", answer: "The sum of elements on the main diagonal of a square matrix." },
      { question: "What is an orthogonal matrix?", answer: "A square matrix whose transpose equals its inverse: AᵀA = I." },
      { question: "Why is det(A) important?", answer: "It determines whether the system has a unique solution (non-zero det), tells about volume scaling in transformations." },
      { question: "What is the rank of a matrix?", answer: "The maximum number of linearly independent rows or columns, indicating the dimension of the solution space." }
    ],
    realWorldApplications: [
      "Computer Graphics: 3D transformations (rotation, scaling, translation) are performed using 4×4 transformation matrices.",
      "Google PageRank: The algorithm uses massive matrix operations to rank web pages based on link structures.",
      "Quantum Computing: Quantum states are represented as vectors and operations as unitary matrices.",
      "Cryptography: Hill cipher and other encryption methods use invertible matrices to encode and decode messages.",
      "Structural Engineering: Finite Element Analysis uses large matrices to model stress distribution in complex structures.",
      "Economics (Input-Output Models): Leontief models use matrices to analyze inter-industry dependencies in national economies."
    ]
  }
};
injectData('math', batch);

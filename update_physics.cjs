const fs = require('fs');

const FILE_PATH = 'c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts';
let content = fs.readFileSync(FILE_PATH, 'utf8');

const replacements = {
  'p1': [
    "Find the least count and zero error of the vernier caliper.",
    "Open the jaws of the caliper.",
    "Place the spherical body between the two lower jaws and grip it firmly but gently.",
    "Note the main scale reading (MSR) just to the left of the vernier zero.",
    "Note the vernier scale division (VSD) that best coincides with a main scale division.",
    "Calculate the total reading by using Total Reading = MSR + (VSD * Least Count) - Zero Error.",
    "Repeat the above steps for two more positions of the body to obtain three readings.",
    "Find the mean diameter and halve it to find the radius."
  ],
  'p2': [
    "Measure the radius of the pendulum bob using a vernier caliper.",
    "Tie the string to the bob and suspend it through a split cork firmly clamped to a retort stand.",
    "Adjust the effective length (L) of the pendulum (e.g., 50 cm).",
    "Displace the bob by a small angle (less than 10 degrees) and release it gently so it oscillates in a vertical plane.",
    "Start the stopwatch when the bob crosses the mean position and count 20 complete oscillations.",
    "Stop the stopwatch after exactly 20 oscillations and record the time taken (t).",
    "Calculate the time period T = t/20 and its square T^2.",
    "Repeat the experiment for 4 to 5 different lengths (e.g., 60cm, 70cm, 80cm) and plot a graph between L and T^2."
  ],
  'p3': [
    "Find the value of one main scale division and the total number of divisions on the circular scale to calculate the least count.",
    "Bring the flat faces of the screw and the stud in contact using the ratchet, and determine the zero error.",
    "Grip the given wire gently between the flat faces using the ratchet.",
    "Note the main scale reading (MSR).",
    "Note the circular scale division (CSR) that perfectly coincides with the reference line.",
    "Repeat the observation at three different places along the length of the wire to check for uniformity.",
    "Calculate the total reading and mean diameter of the wire."
  ],
  'p4': [
    "Draw the circuit diagram and connect the apparatus as per the diagram.",
    "Keep the key open and the rheostat at its maximum resistance position to draw minimum current.",
    "Check the zero error of the ammeter and voltmeter.",
    "Close the key and note the lowest current and its corresponding voltage.",
    "Gradually shift the rheostat contact to increase the current in small, distinct steps.",
    "For each step, note down the ammeter and voltmeter readings.",
    "Take at least 5 to 6 sets of readings.",
    "Plot a graph between current (I) on the x-axis and potential difference (V) on the y-axis, and calculate resistance from the slope."
  ],
  'p5': [
    "Find the rough focal length of the concave mirror by focusing a distant object on a screen or wall.",
    "Mount the concave mirror on a specified mirror holder and place it on the optical bench.",
    "Mount an object pin vertically on a stand and place it in front of the mirror between its center of curvature (C) and principal focus (F).",
    "Move the screen or a second image pin to locate the inverted, real, magnified image of the object pin.",
    "Adjust the height and distance of the image pin to remove parallax between it and the mirror image.",
    "Carefully measure the object distance (u) and the exact image distance (v) from the pole of the mirror.",
    "Repeat the procedure for at least five different object distances.",
    "Calculate focal length f = (uv)/(u+v) or plot a 1/u vs 1/v graph to find the focal length."
  ],
  'p6': [
    "Draw a circuit diagram and connect the apparatus strictly as shown.",
    "Connect the unknown resistance wire in the right gap and the resistance box in the left gap of the metre bridge.",
    "Introduce a known resistance (R) from the resistance box.",
    "Touch the jockey gently at the left end and right end of the bridge wire to verify opposite deflections in the galvanometer.",
    "Slide the jockey gently along the wire to find the null point where the galvanometer shows zero deflection.",
    "Note the balancing length (l) from the zero end.",
    "Calculate unknown resistance S = R(100 - l)/l.",
    "Repeat for 4 to 5 different values of R."
  ],
  'p7': [
    "Connect the battery, a high resistance box (R), and the galvanometer in series with a one-way key.",
    "Connect a low resistance box (S) in parallel with the galvanometer to act as a shunt, along with another key.",
    "Close the main key and introduce a high resistance to obtain a full-scale deflection (theta) in the galvanometer.",
    "Record the value of resistance R and the deflection theta.",
    "Close the shunt key and adjust the shunt resistance S until the deflection is reduced exactly to half (theta/2).",
    "Record the value of S. The galvanometer resistance G is roughly equal to S.",
    "Calculate the figure of merit k = E / ((R + G) * theta).",
    "Repeat for different starting deflections."
  ],
  'p8': [
    "Fix a white sheet of paper on a drawing board using drawing pins.",
    "Place the glass prism on the paper and trace its triangular outline.",
    "Remove the prism and draw a normal to one refracting face. Draw an incident ray making an angle of incidence (e.g., 30 degrees).",
    "Fix two pins P and Q vertically on the incident ray.",
    "Place the prism back exactly on its outline.",
    "Look through the other refracting face and fix two more pins R and S such that they perfectly align with the images of P and Q.",
    "Remove the prism and pins, draw the emergent ray joining R and S, and measure the angle of deviation.",
    "Repeat the experiment for angles of incidence from 35 degrees to 60 degrees in steps of 5 degrees.",
    "Plot a graph between angle of incidence (i) and angle of deviation, and determine the angle of minimum deviation to calculate the refractive index."
  ],
  'p9': [
    "Find the rough focal length of the convex lens by catching the image of a distant tree or window on a screen.",
    "Mount the convex lens in a lens holder equipped on the optical bench.",
    "Place the object pin (O) in front of the lens at a distance slightly greater than the rough focal length.",
    "Place the image pin (I) on the other side of the lens and move it to locate the real and inverted image.",
    "Adjust the image pin to accurately remove parallax between the tip of the image and the tip of the image pin.",
    "Note the object distance (u) and image distance (v).",
    "Repeat the process for 5 or 6 different object distances.",
    "Calculate focal length f = (uv)/(u+v) and verify it by plotting a u-v graph."
  ],
  'p10': [
    "For Forward Bias, connect the p-side of the diode to the positive terminal of the battery and the n-side to the negative terminal via a rheostat.",
    "Connect a voltmeter (0-3V) in parallel and a milliammeter (0-50mA) in series with the diode.",
    "Gradually increase the voltage in steps of 0.1V and record the corresponding forward current.",
    "Observe the knee voltage where current starts rising sharply.",
    "For Reverse Bias, connect the p-side to the negative terminal and n-side to the positive terminal of a higher voltage source.",
    "Connect a voltmeter (0-50V) in parallel and a microammeter (0-100uA) in series.",
    "Increase the voltage in steps of 2V and record the steady reverse leakage current.",
    "Plot the Forward and Reverse I-V characteristics on a graph."
  ],
  'p11': [
    "Place the sonometer on the table and stretch the wire over the two movable bridges, passing it over the pulley.",
    "Suspend a known mass (e.g., 1kg or 2kg) from the free end to provide tension (T).",
    "Strike a tuning fork of known frequency and place its stem gently on the sonometer box.",
    "Place a small V-shaped paper rider exactly in the middle of the wire between the bridges.",
    "Adjust the distance between the two bridges until the wire resonates with the tuning fork, causing the paper rider to flutter and fall off.",
    "Measure the resonant length (l) between the two bridges.",
    "Repeat the procedure with tuning forks of 4 to 5 different frequencies while keeping tension constant.",
    "Verify the law of length by checking if frequency * length is a constant."
  ],
  'p12': [
    "Set up the resonance tube apparatus and adjust it so it stands vertically.",
    "Fill the tube completely with water using the attached reservoir.",
    "Strike a tuning fork of known frequency (e.g., 512 Hz) against a rubber pad and hold it horizontally just above the open end of the tube.",
    "Gradually lower the water level by lowering the reservoir until a loud resonant sound is heard.",
    "Measure the length of the air column from the water surface to the top of the tube. This is the first resonating length (l1).",
    "Lower the water level further to approximately three times l1 and fine-tune to find the second resonant position.",
    "Measure the second resonating length (l2).",
    "Calculate the speed of sound using v = 2 * frequency * (l2 - l1)."
  ]
};

let replacedCount = 0;
for (const [id, procArray] of Object.entries(replacements)) {
  const procedureStr = '[\n              ' + procArray.map(s => '"' + s + '"').join(',\n              ') + '\n            ]';
  const regex = new RegExp(`(id:\\s*'${id}'(?:(?!id:\\s*')[\\s\\S])*?procedure:\\s*)\\[[\\s\\S]*?\\]`, 'g');
  
  const matches = content.match(regex);
  if (matches) {
    content = content.replace(regex, `$1${procedureStr}`);
    replacedCount += matches.length;
    console.log(`Successfully updated ${id} (${matches.length} occurrences).`);
  } else {
    console.error(`Regex for ${id} matched nothing.`);
  }
}

fs.writeFileSync(FILE_PATH, content, 'utf8');
console.log(`Successfully applied ${replacedCount} physics procedures substitutions in total.`);

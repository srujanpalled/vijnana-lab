const fs = require('fs');

let content = fs.readFileSync('c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts', 'utf8');

// Normalize CRLF to LF
content = content.replace(/\r\n/g, '\n');

const replacements = [
  {
    target: `          procedure: [
            "Determine the Vernier Constant (V.C.) or Least Count.",
            "Check for zero error by closing the jaws completely.",
            "Place the object between the jaws and tighten the screw gently.",
            "Note the Main Scale Reading (M.S.R).",
            "Note the Vernier Scale Division (V.S.D) coinciding with the main scale.",
            "Calculate Total Reading = M.S.R + (V.S.D × V.C.)."
          ],`,
    replace: `          procedure: [
            "Find the least count and zero error of the vernier caliper.",
            "Open the jaws of the caliper.",
            "Place the spherical body between the two lower jaws and grip it firmly but gently.",
            "Note the main scale reading (MSR) just to the left of the vernier zero.",
            "Note the vernier scale division (VSD) that best coincides with a main scale division.",
            "Calculate the total reading by using Total Reading = MSR + (VSD × Least Count) - Zero Error.",
            "Repeat the above steps for two more positions of the body to obtain three readings.",
            "Find the mean diameter and halve it to find the radius."
          ],`
  },
  {
    target: `          procedure: [
            "Measure the radius of the bob.",
            "Suspend the bob and set effective length L.",
            "Displace slightly and release.",
            "Measure time for 20 oscillations.",
            "Calculate T and T²."
          ],`,
    replace: `          procedure: [
            "Measure the radius of the pendulum bob using a vernier caliper.",
            "Tie the string to the bob and suspend it through a split cork firmly clamped to a retort stand.",
            "Adjust the effective length (L) of the pendulum (e.g., 50 cm).",
            "Displace the bob by a small angle (less than 10 degrees) and release it gently so it oscillates in a vertical plane.",
            "Start the stopwatch when the bob crosses the mean position and count 20 complete oscillations.",
            "Stop the stopwatch after exactly 20 oscillations and record the time taken (t).",
            "Calculate the time period T = t/20 and its square T².",
            "Repeat the experiment for 4 to 5 different lengths (e.g., 60cm, 70cm, 80cm) and plot a graph between L and T²."
          ],`
  },
  {
    target: `            procedure: ["Find the least count.", "Determine zero error.", "Place wire between studs.", "Note Main Scale Reading (MSR) and Circular Scale Reading (CSR)."],`,
    replace: `            procedure: [
              "Find the value of one main scale division and the total number of divisions on the circular scale to calculate the least count.",
              "Bring the flat faces of the screw and the stud in contact using the ratchet, and determine the zero error.",
              "Grip the given wire gently between the flat faces using the ratchet.",
              "Note the main scale reading (MSR).",
              "Note the circular scale division (CSR) that perfectly coincides with the reference line.",
              "Repeat the observation at three different places along the length of the wire to check for uniformity.",
              "Calculate the total reading and mean diameter of the wire."
            ],`
  },
  {
    target: `              procedure: ["Connect circuit.", "Adjust rheostat.", "Note Voltmeter and Ammeter.", "Plot V vs I."],`,
    replace: `              procedure: [
                "Draw the circuit diagram and connect the apparatus as per the diagram.",
                "Keep the key open and the rheostat at its maximum resistance position to draw minimum current.",
                "Check the zero error of the ammeter and voltmeter.",
                "Close the key and note the lowest current and its corresponding voltage.",
                "Gradually shift the rheostat contact to increase the current in small, distinct steps.",
                "For each step, note down the ammeter and voltmeter readings.",
                "Take at least 5 to 6 sets of readings.",
                "Plot a graph between current (I) on the x-axis and potential difference (V) on the y-axis, and calculate resistance from the slope."
              ],`
  },
  {
    target: `              procedure: ["Mount mirror.", "Place object.", "Adjust image.", "Measure v.", "Calculate f."],`,
    replace: `              procedure: [
                "Find the rough focal length of the concave mirror by focusing a distant object on a screen or wall.",
                "Mount the concave mirror on a specified mirror holder and place it on the optical bench.",
                "Mount an object pin vertically on a stand and place it in front of the mirror between its center of curvature (C) and principal focus (F).",
                "Move the screen or a second image pin to locate the inverted, real, magnified image of the object pin.",
                "Adjust the height and distance of the image pin to remove parallax between it and the mirror image.",
                "Carefully measure the object distance (u) and the exact image distance (v) from the pole of the mirror.",
                "Repeat the procedure for at least five different object distances.",
                "Calculate focal length f = (uv)/(u+v) or plot a 1/u vs 1/v graph to find the focal length."
              ],`
  }
];

let replacedCount = 0;
for (let i = 0; i < replacements.length; i++) {
  const r = replacements[i];
  const targetNorm = r.target.replace(/\r\n/g, '\n');
  if (content.includes(targetNorm)) {
    content = content.replace(targetNorm, r.replace);
    replacedCount++;
  } else {
    console.error(`Target ${i + 1} NOT FOUND`);
  }
}

fs.writeFileSync('c:/Users/sruja/Desktop/codde/vijnanalab_by_supra/constants.ts', content, 'utf8');
console.log(`Replaced ${replacedCount} physics lab procedures successfully.`);

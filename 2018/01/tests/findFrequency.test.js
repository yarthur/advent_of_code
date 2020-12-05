import findFrequency from "../../lib/findFrequency";

const inputs = [
    `+1
-2
+3
+1`,
    `+1
+1
+1`,
    `+1
+1
-2`,
    `-1
-2
-3`,
];
const results = [3, 3, 0, -6];

inputs.forEach(function (testInputs, index) {
    console.log(findFrequency(testInputs) === results[index]);
});

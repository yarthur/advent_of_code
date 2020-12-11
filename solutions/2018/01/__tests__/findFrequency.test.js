import findFrequency from "../findFrequency";

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

test("returns the final modified frequency", function () {
    for (let cv1 = 0; cv1 < results.length; cv1 += 1) {
        expect(findFrequency(inputs[cv1])).toEqual(results[cv1]);
    }
});

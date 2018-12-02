import findRepeatFrequency from '../../lib/findRepeatFrequency.mjs';

var inputs = [
`+1
-2
+3
+1`,
`+1
-1`,
`+3
+3
+4
-2
-4`,
`-6
+3
+8
+5
-6`,
`+7
+7
-2
-7
-4`
],
	results = [2, 0, 10, 5, 14];

inputs.forEach(function (testInputs, index) {
	console.log(findRepeatFrequency(testInputs) === results[index]);
});

// import input from './input.mjs';
import processInput from "./processInput.js";
import calculateDelay from "./calculateDelay.js";

var input = `0: 3
1: 2
4: 4
6: 4`;

var layers = processInput(input),
    // part1 = calculateSeverity(layers),
    part2 = calculateDelay(layers);

// console.log(`Part 1: ${part1}`);
console.log(`Part 2: ${part2}`);

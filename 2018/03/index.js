import getInputs from '../lib/getInputs.js';
import calculateOverlap from './calculateOverlap.js';
import findPristineClaim from './findPristineClaim.js';

const inputs = getInputs('03');
const overlaps = calculateOverlap(inputs);

console.log(`Part 1: ${overlaps.length}`);
console.log(`Part 2: ${findPristineClaim(overlaps, inputs)}`);

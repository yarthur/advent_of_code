import getInputs from '../lib/getInputs';
import calculateOverlap from './calculateOverlap';
import findPristineClaim from './findPristineClaim';

const inputs = getInputs('03');
const overlaps = calculateOverlap(inputs);

console.log(`Part 1: ${overlaps.length}`);
console.log(`Part 2: ${findPristineClaim(overlaps, inputs)}`);

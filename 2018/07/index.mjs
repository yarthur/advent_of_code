import getInputs from '../lib/getInputs.mjs';
import parseSteps from './parseSteps.mjs';
import determineStepOrder from './determineStepOrder';
import calculateTimeToCompletion from './calculateTimeToCompletion';

const inputs = getInputs('07');

var steps = parseSteps(inputs);
console.log(`Part 1: ${determineStepOrder(steps)}`);

var steps = parseSteps(inputs);
console.log(`Part 2: ${calculateTimeToCompletion(steps, 5, 60)}`);

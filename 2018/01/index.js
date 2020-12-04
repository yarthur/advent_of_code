import getInputs from '../lib/getInputs.js';
import findFrequency from './findFrequency.js';
import findRepeatFrequency from './findRepeatFrequency.js';

var inputs = getInputs('01');

console.log("Part 1: ", findFrequency(inputs));

console.log("Part 2: ", findRepeatFrequency(inputs));

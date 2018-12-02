import getInputs from './lib/getInputs';
import findFrequency from './lib/findFrequency';
import findRepeatFrequency from './lib/findRepeatFrequency';

var inputs = getInputs('01');

console.log("Part 1: ", findFrequency(inputs));

console.log("Part 2: ", findRepeatFrequency(inputs));

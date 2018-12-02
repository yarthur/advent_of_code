import getInputs from './lib/getInputs';
import calculateBoxIDChecksum from './lib/calculateBoxIDChecksum';
import compareIds from './lib/compareIds';

const inputs = getInputs('02');

console.log(`Part one: ${calculateBoxIDChecksum(inputs)}`);
console.log(`Part two: ${compareIds(inputs)}`);

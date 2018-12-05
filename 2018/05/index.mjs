import getInputs from '../lib/getInputs';
import reactPolymer from './reactPolymer';
import determineShortestWithExclusion from './determineShortestWithExclusion';

const inputs = getInputs('05');

console.log(`Part 1: ${reactPolymer(inputs).length}`);

console.log(`Part 2: ${determineShortestWithExclusion(inputs)}`);

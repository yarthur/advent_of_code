import calculateOverlap from '../calculateOverlap';
import findPristineClaim from '../findPristineClaim';

const inputs = `#1 @ 1,3: 4x4
#2 @ 2,1: 4x4
#3 @ 5,5: 2x2`;

const overlaps = calculateOverlap(inputs);

console.log(findPristineClaim(overlaps, inputs) === 3);

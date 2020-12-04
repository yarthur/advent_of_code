import calculateOverlap from '../calculateOverlap';

const inputs = `#1 @ 1,3: 4x4
#2 @ 3,1: 4x4
#3 @ 5,5: 2x2`;

console.log((calculateOverlap(inputs)).length === 4);

import input from './input.js';
import processInput from './processInput.js';
import reallocate from './reallocate.js';

// var input = `0  2   7  0`;

var memoryBanks = processInput(input),
	part1 = reallocate(memoryBanks),
	part2 = reallocate(part1.memoryBanks);


console.log(`Part 1: ${part1.reallocationCount}`);
console.log(`Part 2: ${part2.reallocationCount}`);

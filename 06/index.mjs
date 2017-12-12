import input from './input.mjs';
import processInput from './processInput.mjs';
import reallocate from './reallocate.mjs';

// var input = `0  2   7  0`;

var memoryBanks = processInput(input),
	part1 = reallocate(memoryBanks),
	part2 = reallocate(part1.memoryBanks);


console.log(`Part 1: ${part1.reallocationCount}`);
console.log(`Part 2: ${part2.reallocationCount}`);

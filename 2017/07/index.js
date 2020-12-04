import towers from './towers.js';
import formatTowers from './formatTowers.js';
import part1 from './part1.js';
import part2 from './part2.js';

var formattedTowers = formatTowers(towers);

console.log(`Part 1: ${part1(formattedTowers)}`);
console.log(`Part 2: ${part2(formattedTowers)}`);

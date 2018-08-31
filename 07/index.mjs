import towers from './towers.mjs';
import formatTowers from './formatTowers.mjs';
import part1 from './part1.mjs';
import part2 from './part2.mjs';

var formattedTowers = formatTowers(towers);

console.log(`Part 1: ${part1(formattedTowers)}`);
console.log(`Part 2: ${part2(formattedTowers)}`);

import spreadsheet from './spreadsheet.mjs';
import processTabSeparatedValues from './processTSV.mjs';
import part1 from './part1.mjs';
import part2 from './part2.mjs';

var data = processTabSeparatedValues(spreadsheet);

console.dir(`Part 1: ${part1(data)}`);
console.dir(`Part 2: ${part2(data)}`);

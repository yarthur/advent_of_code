import spreadsheet from "./spreadsheet.js";
import processTabSeparatedValues from "./processTSV.js";
import part1 from "./part1.js";
import part2 from "./part2.js";

var data = processTabSeparatedValues(spreadsheet);

console.dir(`Part 1: ${part1(data)}`);
console.dir(`Part 2: ${part2(data)}`);

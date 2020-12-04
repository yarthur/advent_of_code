import input from './input.js';
import processInput from './processInput.js';
import groupPrograms from './groupPrograms.js';

// var input = `0 <-> 2
// 1 <-> 1
// 2 <-> 0, 3, 4
// 3 <-> 2, 4
// 4 <-> 2, 3, 6
// 5 <-> 6
// 6 <-> 4, 5`;

var programs = processInput(input),
	programGroups = [],
	progSeed = [...programs['0'], '0']; // Seed the prog0 set with the contents *and key* of program 0.

while (Object.keys(programs).length > 0) {
	let group = groupPrograms(programs, progSeed);

	group.forEach(function (key) {
		delete programs[key];
	});

	programGroups.push(group);

	if (Object.keys(programs).length > 0) {
		let newSeed = Object.keys(programs)[0];
			progSeed = [...programs[newSeed], newSeed];
	}
}

console.log(`Part 1: ${programGroups[0].size}`);
console.log(`Part 2: ${programGroups.length}`);

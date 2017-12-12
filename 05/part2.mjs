import input from './input.mjs';
import processInput from './processInput.mjs';

// const input = `0
// 3
// 0
// 1
// -3`;

var part1 = function jumpOut () {
	var currentPosition = 0,
		offsets = processInput(input),
		exit = offsets.length,
		jumpCount = 0;
	
	while (currentPosition < exit) {
		let jump = offsets[currentPosition],
			offsetModifier = 1;
		jumpCount += 1;

		if (jump >= 3) {
			offsetModifier = -1;
		}

		offsets[currentPosition] += offsetModifier;
		currentPosition += jump;
	}

	return jumpCount;
}

export default part1;

import input from './input.mjs';
import processInput from './processInput.mjs';

var part1 = function jumpOut () {
	var currentPosition = 0,
		offsets = processInput(input),
		exit = offsets.length,
		jumpCount = 0;
	
	while (currentPosition < exit) {
		let jump = offsets[currentPosition];
		jumpCount += 1;
		offsets[currentPosition] += 1;
		currentPosition += jump;
	}

	return jumpCount;
}

export default part1;

import parseInstructions from './parseInstructions.mjs';

var registers = {};
var highestVal = 0;

var checkCondition = function(condition) {
	var conditionParts = condition.split(' '),
		check;

	if (registers[conditionParts[0]] === undefined) {
		registers[conditionParts[0]] = 0;
	}

	check = eval(`registers.${conditionParts[0]} ${conditionParts[1]} ${conditionParts[2]}`);

	return check;
}

var part1 = function (instructions) {
	var parsedInstructions = parseInstructions(instructions);

	parsedInstructions.forEach(function (instruction) {
		var register = instruction.register;

		if (registers[register] === undefined) {
			registers[register] = 0;
		}

		if (checkCondition(instruction.condition) === true) {
			switch(instruction.modification) {
				case 'inc':
					registers[register] += instruction.modifier;
					break;
				case 'dec':
					registers[register] -= instruction.modifier;
					break;
				default:
					break;
			};

			if (registers[register] > highestVal) {
				highestVal = registers[register];
			}
		}
	});

	var registerValues = [];
	for (let register in registers) {
		registerValues.push(registers[register]);
	}


	console.log(`Part 1:`);
	console.dir(registers);
	console.log(`Part 2: ${highestVal}`);
};

export default part1;

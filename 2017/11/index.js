import input from './input.js';


var gatherSteps = function (steps) {
	steps = steps.split(',');

	var gatheredSteps = steps.reduce(function (gathered, step) {
		switch (step) {
			case 'nw':
				gathered.nw += 1;
				break;
			case 'n':
				gathered.n += 1;
				break;
			case 'ne':
				gathered.ne += 1;
				break;
			case 'se':
				gathered.se += 1;
				break;
			case 's':
				gathered.s += 1;
				break;
			case 'sw':
				gathered.sw += 1;
				break;
		}

		return gathered;
	},
		{
			n: 0,
			ne: 0,
			nw: 0,
			s: 0,
			se: 0,
			sw: 0
		});

	return gatheredSteps;
};

var calculateDistance = function (stepObj) {
	var distance = 0,
		furthestDirection = null;

	for (let direction in stepObj) {
		// if ()
	}

	return distance;
};

console.log(gatherSteps(input));

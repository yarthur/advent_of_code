var processInput = function (input) {
	var programsArray = input.split('\n'),
		programs = programsArray.reduce(function (progObj, program) {
			var programParts = program.split(' <-> ');

			progObj[programParts[0]] = programParts[1].split(', ');

			return progObj;
		}, {});

	return programs;
};

export default processInput;

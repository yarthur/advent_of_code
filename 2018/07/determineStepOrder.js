export default function (steps) {
	var stepsInOrder = [];

	while (steps.length > 0) {
		for (let cv1 = 0; cv1 < steps.length; cv1 += 1) {
			let step = steps[cv1];

			step.dependencies = step.dependencies.filter(function (dependency) {
				return (stepsInOrder.includes(dependency) === false);
			});

			if (step.dependencies.length === 0) {
				stepsInOrder.push(step.key);
				steps = steps.filter(function (pets) {
					return (stepsInOrder.includes(pets.key) === false);
				});
				break;
			} else {
				steps[cv1] = step;
			}
		}
	}

	return stepsInOrder.join('');
};

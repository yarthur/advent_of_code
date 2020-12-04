var assignDurations = function (steps, minDelay) {
	let keyModifier = 'A'.charCodeAt(0) - 1,
		stepsWithDuration = steps.map(function (step) {
			step.duration = minDelay + (step.key.charCodeAt('0') - keyModifier);

			return step;
		});

	return stepsWithDuration.sort(function (a, b) {
		return (a.duration > b.duration) ? 1 : -1;
	});
}

export default function (steps, workerCount, minDelay = 0) {
	var stepsWithDuration = assignDurations(steps, minDelay),
		stepCount = stepsWithDuration.length,
		stepsInOrder = [],
		workers = [],
		lastTOC = 0;

	while (stepsInOrder.length < stepCount) {
		let workerLength = workers.length;

		stepsWithDuration.forEach(function (step) {
			if (workers.length < workerCount &&
				step.dependencies.length === 0) {

				step.toc = lastTOC + step.duration;
				step.lastTOC = lastTOC;

				workers.push(step);
				workers = workers.sort(function (a, b) {
					let sortVal = 0;

					if (a.toc === b.toc) {
						sortVal = (a.duration > b.duration) ? 1 : -1;
					} else if (a.toc > b.toc) {
						sortVal = 1;
					} else {
						sortVal = -1;
					}

					return sortVal;
				});

				stepsWithDuration = stepsWithDuration.filter(function (swd) {
					return (swd.key !== step.key);
				});
			}
		});

		if (workers.length > 0 &&
			workerLength === workers.length) {
			let completed = workers.shift();

			lastTOC = completed.toc;
			stepsInOrder.push(completed);

			stepsWithDuration.forEach(function (a) {
				a.dependencies = a.dependencies.filter(function (dependency) {
					return (dependency !== completed.key);
				});
			});
		}
	}

	return stepsInOrder[stepCount - 1].toc;
};

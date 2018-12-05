export default function (records) {
	var currentGuard = null;

	var guardRecords = records.reduce(function (gR, {timestamp, activity, guardId, minute }, index, test) {
		if (guardId !== null) {
			currentGuard = guardId;
		}

		if (gR[currentGuard] === undefined) {
			gR[currentGuard] = {
				total: 0,
				schedule: (new Array(60)).fill(0)
			};
		}

		if (activity === 'falls asleep') {
			let { minute: nextMinute, activity: nextActivity } = records[index + 1];

			if (nextActivity.includes('begins') === true ||
				(minute > nextMinute)) {
				nextMinute = 59;
			}

			for (let min = minute; min !== nextMinute; min += 1) {
				gR[currentGuard].schedule[min] += 1;
				gR[currentGuard].total += 1;
			}
		}

		return gR;
	}, {});

	return guardRecords;
}

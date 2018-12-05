export default function (inputs) {
	var records = (inputs.split('\n')).map(function (record) {
		let recordParts = /\[(\d{4}-\d{2}-\d{2} \d{2}:(\d{2}))\] (.*)/.exec(record),
		    activity = recordParts[3],
			guardId = null;

		if (activity.includes('begins shift') === true) {
			guardId = (/Guard #(\d*)/.exec(activity))[1];
		}

		return {
			timestamp: recordParts[1],
			minute: parseInt(recordParts[2]),
			activity: activity,
			guardId: guardId

		};
	});

	return records.sort(function (a, b) {
		var sortOrder = 0;

		if (a.timestamp > b.timestamp) {
			sortOrder = 1;
		} else if (a.timestamp < b.timestamp) {
			sortOrder = -1;
		}

		return sortOrder
	})
};

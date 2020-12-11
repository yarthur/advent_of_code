export default function (sleepLogs) {
    var sleepiestTimes = {};

    Object.entries(sleepLogs).forEach(function ([key, { schedule }]) {
        let sleepiestMinute = schedule.reduce(function (
            sleepiest,
            count,
            index
        ) {
            if (count > schedule[sleepiest]) {
                sleepiest = index;
            }

            return sleepiest;
        },
        0);

        sleepiestTimes[key] = {
            minute: sleepiestMinute,
            count: schedule[sleepiestMinute],
        };
    });

    return sleepiestTimes;
}

import parseRecords from "./parseRecords.js";
import calculateSleep from "./calculateSleep.js";
import calculateSleepiestTime from "./calculateSleepiestTime.js";
import findSleepiest from "./findSleepiest.js";

// const inputs = `[1518-11-01 00:00] Guard #10 begins shift
// [1518-11-01 00:05] falls asleep
// [1518-11-01 00:25] wakes up
// [1518-11-01 00:30] falls asleep
// [1518-11-01 00:55] wakes up
// [1518-11-01 23:58] Guard #99 begins shift
// [1518-11-02 00:40] falls asleep
// [1518-11-02 00:50] wakes up
// [1518-11-03 00:05] Guard #10 begins shift
// [1518-11-03 00:24] falls asleep
// [1518-11-03 00:29] wakes up
// [1518-11-04 00:02] Guard #99 begins shift
// [1518-11-04 00:36] falls asleep
// [1518-11-04 00:46] wakes up
// [1518-11-05 00:03] Guard #99 begins shift
// [1518-11-05 00:45] falls asleep
// [1518-11-05 00:55] wakes up`;

export const part1 = (input) => {
    var records = parseRecords(input);
    var sleepLog = calculateSleep(records);
    var sleepiest = findSleepiest(sleepLog);
    var sleepAnalysis = calculateSleepiestTime(sleepLog);

    return sleepiest * sleepAnalysis[sleepiest].minute;
};

export const part2 = (input) => {
    var records = parseRecords(input);
    var sleepLog = calculateSleep(records);
    var sleepAnalysis = calculateSleepiestTime(sleepLog);

    var mostPredictable = Object.entries(sleepAnalysis).reduce(function (
        defender,
        contender
    ) {
        if (contender[1].count > defender[1].count) {
            return contender;
        }

        return defender;
    });

    return mostPredictable[0] * mostPredictable[1].minute;
};

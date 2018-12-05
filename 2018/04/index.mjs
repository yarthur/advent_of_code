import getInputs from '../lib/getInputs';
import parseRecords from './parseRecords';
import calculateSleep from './calculateSleep';
import calculateSleepiestTime from './calculateSleepiestTime';
import findSleepiest from './findSleepiest';

const inputs = getInputs('04');
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

var records = parseRecords(inputs);
var sleepLog = calculateSleep(records);
var sleepAnalysis = calculateSleepiestTime(sleepLog);
var sleepiest = findSleepiest(sleepLog);

var mostPredictable = Object.entries(sleepAnalysis).reduce(function (defender, contender) {
	if (contender[1].count > defender[1].count) {
		return contender;
	}

	return defender;
});

console.log(`Part 1: ${sleepiest * sleepAnalysis[sleepiest].minute}`);
console.log(`Part 2: ${mostPredictable[0] * mostPredictable[1].minute}`)

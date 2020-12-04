import { steps } from './sampleData';
import calculateTimeToCompletion from '../calculateTimeToCompletion';

test('', function () {
	expect(calculateTimeToCompletion(steps, 2, 0)).toEqual(15);
});

import { inputs, steps } from './sampleData';
import parseSteps from '../parseSteps';

test('', function () {
	expect(parseSteps(inputs)).toEqual(steps);
});

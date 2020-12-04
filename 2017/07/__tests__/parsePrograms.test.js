import { inputs, programs } from './sampleData.js';
import parsePrograms from '../parsePrograms.js';

test('parses a string into an object of objects.', function () {
	expect(parsePrograms(inputs)).toEqual(programs);
});

import { inputs, programs } from './sampleData';
import parsePrograms from '../parsePrograms';

test('parses a string into an object of objects.', function () {
	expect(parsePrograms(inputs)).toEqual(programs);
});

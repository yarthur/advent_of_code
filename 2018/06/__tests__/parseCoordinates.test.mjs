import { inputs, coordinates } from './sampleData';
import parseCoordinates from '../parseCoordinates';

test('parses coordinates into x & y values', function () {
	expect(parseCoordinates(inputs)).toEqual(coordinates);
});

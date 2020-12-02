import { coordinates, extremes } from './sampleData';
import findExtremes from '../findExtremes';

test('finds the outside bounds of x & y coordinates', function () {
	expect(findExtremes(coordinates)).toEqual(extremes);
});

import { coordinates, extremes } from './sampleData';
import mapArea from '../mapArea';

test('map the areas of the different locations', function () {
	expect(mapArea(coordinates, extremes)).toEqual({});
});

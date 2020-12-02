import { programs } from './sampleData';
import part1 from '../part1';

test('returns the uber-parent program name', function () {
	expect(part1(programs)).toEqual('tknk');
});

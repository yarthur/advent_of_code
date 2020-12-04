import { programs, childParents } from './sampleData.js';

import generateChildParents from '../generateChildParents.js';

test('creates an object, the properties of which detail the parent of each program (if any)', function () {
	expect(generateChildParents(programs)).toEqual(childParents);
});

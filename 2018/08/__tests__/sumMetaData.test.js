import { inputs, metaSum } from './sampleData.js';
import sumMetaData from '../sumMetaData.js';

test('adds up the meta data correctly', function () {
	expect(sumMetaData(inputs)).toEqual(metaSum);
});

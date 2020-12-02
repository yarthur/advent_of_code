import { inputs, metaSum } from './samplData';
import sumMetaData from '../sumMetaData';

test('adds up the meta data correctly', function () {
	expect(sumMetaData(inputs)).toEqual(metaSum);
});

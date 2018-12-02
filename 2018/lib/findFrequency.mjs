import parseFrequencyChanges from './parseFrequencyChanges';
import modulateFrequency from './modulateFrequency';
import { parse } from 'querystring';

export default function (inputs, initial = 0) {
	var changes = parseFrequencyChanges(inputs);
	return changes.reduce(function (frequency, change) {
		return modulateFrequency(frequency, change);
	}, initial);
}

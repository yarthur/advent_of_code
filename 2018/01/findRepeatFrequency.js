import parseFrequencyChanges from './parseFrequencyChanges.js';
import modulateFrequency from './modulateFrequency.js';

export default function (inputs, frequency = 0) {
	var changes = parseFrequencyChanges(inputs),
		frequencies = [frequency],
		repeatedFreq = false,
		cv1 = 0;

	while (repeatedFreq === false) {
		frequency = modulateFrequency(
			frequency,
			changes[cv1],
			function (modulatedFrequency) {
				if (frequencies.includes(modulatedFrequency)) {
					repeatedFreq = modulatedFrequency;
				} else {
					frequencies.push(modulatedFrequency);
				}

				return modulatedFrequency;
			}
		);

		cv1 += 1;

		if (cv1 === changes.length) {
			cv1 = 0;
		}
	}

	return repeatedFreq;
}

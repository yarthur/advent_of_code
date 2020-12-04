import determineUnits from './determineUnits.js';
import reactPolymer from './reactPolymer.js';

export default function (polymer) {
	var uniqueUnits = determineUnits(polymer);

	return uniqueUnits.reduce(function (defender, contender, index) {
		console.log(`Parsing ${index + 1} of ${uniqueUnits.length}`)
		var contenderPolymer = reactPolymer(polymer, contender);

		if (defender === null || contenderPolymer.length < defender) {
			return contenderPolymer.length;
		} else {
			return defender
		}
	}, null);
}

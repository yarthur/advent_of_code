import calculateCheckSum from './calculateCheckSum.mjs';

var reduceRow = function (checksum, reducedValue, reducedIndex, row) {
	row.forEach(function (loopValue, loopIndex) {
		if (
			(checksum === null) &&
			(loopIndex !== reducedIndex)
		) {
			let quotient = loopValue / reducedValue;

			if (Number.isInteger(quotient) === true) {
				checksum = quotient;
			}
		}
	});

	return checksum;
};

var findRowChecksums = function (row) {
	return row.reduce(reduceRow, null);
};

var part2 = function (data) {
	var rowChecksums = data.map(findRowChecksums);

	return calculateCheckSum(rowChecksums);
};

export default part2;

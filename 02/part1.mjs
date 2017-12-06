var getRowChecksum = function (row) {
	var checksumValues = getHighLow(row);

	return checksumValues.high - checksumValues.low;
};

var getHighLow = function (row) {
	var sortedRow = row.sort(function (a, b) {
			return a - b;
		}),
		highLow = {
			high: sortedRow[sortedRow.length - 1],
			low: sortedRow[0]
		};

	return highLow;
};

var part1 = function (data) {
	var checksum = 0,
		rowChecksums = data.map(getRowChecksum);

	return rowChecksums.reduce(function (total, addend) {
		return total + addend;
	});
}

export default part1;

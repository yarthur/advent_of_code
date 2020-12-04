var formatRows = function (row) {
	row = row.split('\t');

	return row.map(function (value) {
		return Number(value);
	});
};

var processTabSeparatedValues = function (tsvData) {
	var data = tsvData.split('\n');

	return data.map(formatRows);
}

export default processTabSeparatedValues;

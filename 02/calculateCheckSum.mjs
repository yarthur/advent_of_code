var calculateCheckSum = function (data) {
	return data.reduce(function (total, addend) {
		return total + addend;
	});
};

export default calculateCheckSum

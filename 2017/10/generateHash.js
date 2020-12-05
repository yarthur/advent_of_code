var generateNumberHash = function (listLength) {
    return [...Array(listLength).keys()];
};

var generateAsciiHash = function (textString) {
    return textString;
};

export { generateNumberHash, generateAsciiHash };

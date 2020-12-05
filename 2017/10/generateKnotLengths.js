var generateKnotLengths = function (lengthsString) {
    var skipSizes = lengthsString.split(",");

    return skipSizes.map(function (size) {
        return Number(size);
    });
};

export default generateKnotLengths;

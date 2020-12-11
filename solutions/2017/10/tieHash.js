var findPosition = function (currentPosition, skipDistance, stringLength) {
    currentPosition += skipDistance;

    if (currentPosition >= stringLength) {
        currentPosition -= stringLength;
    }

    return currentPosition;
};

var tieKnot = function (string, knotStart, knotLength, stringLength) {
    var knot = new Array(knotLength);

    for (let knotPosition = 0; knotPosition < knotLength; knotPosition += 1) {
        let stringPosition = findPosition(
            knotStart,
            knotPosition,
            stringLength
        );

        knot[knotPosition] = string[stringPosition];
    }

    knot.reverse();

    knot.map(function (value, knotPosition) {
        var stringPosition = findPosition(
            knotStart,
            knotPosition,
            stringLength
        );

        string[stringPosition] = value;
    });

    return string;
};

var tieHash = function (hash, knotLengths, currentPosition) {
    var hashLength = hash.length;

    knotLengths.forEach(function (knotLength, skipSize) {
        var skipDistance = knotLength + skipSize;

        hash = tieKnot(hash, currentPosition, knotLength, hashLength);

        currentPosition = findPosition(
            currentPosition,
            skipDistance,
            hashLength
        );
    });

    return hash;
};

export default tieHash;

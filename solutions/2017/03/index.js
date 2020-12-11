var findWidth = function (index) {
    var distanceOut = findOut(index);
    return distanceOut * 2 + 1;
};

var findOut = function (index) {
    var distanceOut = Math.floor(Math.ceil(Math.sqrt(index)) / 2);
    return distanceOut;
};

var findOver = function (index) {
    var width = findWidth(index),
        position = index - Math.pow(width - 2, 2),
        phase = position / (width - 1),
        normalizedPhase = phase - Math.floor(phase),
        distanceOver = normalizedPhase * (width - 1) - (width - 1) / 2;

    return Math.abs(distanceOver);
};

var findDistance = function (index) {
    var distanceOut = findOut(index),
        distanceOver = findOver(index),
        distance = distanceOut + distanceOver;
    return Math.ceil(distance);
};

export const part1 = (input) => {
    return findDistance(input);
};

export const part2 = () => {
    return "https://oeis.org/A141481/b141481.txt";
};

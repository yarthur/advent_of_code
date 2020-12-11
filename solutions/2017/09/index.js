const eliminateAllNegated = function (stream) {
    return stream.replace(/!./g, "");
};

var eliminateGarbage = function (stream) {
    var garbageScore = 0;

    // eslint-disable-next-line no-unused-vars
    stream = stream.replace(/(<[^>]*>)/g, function (match, collected) {
        garbageScore += collected.length - 2;
        return "";
    });

    return garbageScore;
};

export const part1 = (input) => {
    const noNegated = eliminateAllNegated(input);
    return eliminateGarbage(noNegated);
};

export const part2 = () => null;

import stream from "./stream.js";

var eliminateAllNegated = function (stream) {
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

let test = eliminateAllNegated(stream);
test = eliminateGarbage(test);
console.log(test);

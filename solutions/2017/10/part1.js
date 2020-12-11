import { generateNumberHash } from "./generateHash.js";
import generateKnotLengths from "./generateKnotLengths.js";
import tieHash from "./tieHash.js";

var part1 = function (input) {
    var hash, knotLengths, knottedHash;

    hash = generateNumberHash(256);
    knotLengths = generateKnotLengths(input);

    knottedHash = tieHash(hash, knotLengths, 0);

    return knottedHash[0] * knottedHash[1];
};

export default part1;

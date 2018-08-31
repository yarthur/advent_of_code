import input from './input.mjs';
import {generateNumberHash} from './generateHash.mjs';
import generateKnotLengths from './generateKnotLengths';
import tieHash from './tieHash.mjs';

var part1 = function (debug = false) {
	var hash, knotLengths, knottedHash;

	if (debug === false) {
		hash = generateNumberHash(256);
		knotLengths = generateKnotLengths(input);
	} else {
		hash = generateNumberHash(5);
		knotLengths = generateKnotLengths('3,4,1,5');
	}

	knottedHash = tieHash(hash, knotLengths, 0);

	return knottedHash[0] * knottedHash[1];
};

export default part1;

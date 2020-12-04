import stream from './stream.js';

var testGarbage = [
	'<>',
	'<random characters>',
	'<<<<>',
	'<{!>}>',
	'<!!>',
	'<!!!>>',
	'<{o"i!a,<{i<a>'
];

var testGroups = {
	'{}': 1,
	'{{{}}}': 6,
	'{{},{}}': 5,
	'{{{},{},{{}}}}': 16,
	'{<{},{},{{}}>}': 1,
	'{<a>,<a>,<a>,<a>}': 1,
	'{{<!!>},{<!!>},{<!!>},{<!!>}}': 9,
	'{{<a!>},{<a!>},{<a!>},{<ab>}}': 2
};

var eliminateDoubleNegatives = function (stream) {
	return stream.replace(/!!/g, '');
};

var eliminateFalseGarbageEnd = function (stream) {
	return stream.replace(/!>/g, '');
};

var eliminateAllNegated = function (stream) {
	return stream.replace(/!./g, '');
};

var eliminateGarbage = function (stream) {
	var garbageScore = 0;

	stream = stream.replace(/(<[^>]*>)/g, function (match, collected) {
		garbageScore += (collected.length - 2);
		return '';
	});

	return garbageScore;
};


// let test = eliminateDoubleNegatives(stream);
// test = eliminateFalseGarbageEnd(test);

let test = eliminateAllNegated(stream);
test = eliminateGarbage(test);
console.log(test);
// test = test.replace(/,/g, '');

var determineScore = function (groupString) {
	var score = 0;

	groupString.split('').reduce(function (subStr, char) {
		if (char === '}') {
			score += subStr.length;
			subStr.pop();
		} else {
			subStr.push(char);
		}

		return subStr;
	},
	[]);

	return score;
};

// console.log(determineScore(test));

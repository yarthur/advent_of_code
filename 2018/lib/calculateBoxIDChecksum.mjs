var buildLetterCount = function (id) {
	var letterCount = {};
	id.split('').forEach(function (letter) {
		if (letterCount[letter] === undefined) {
			letterCount[letter] = 0;
		}

		letterCount[letter] += 1;
	});

	return letterCount;
}
export default function (input) {
	var boxIds = input.split('\n'),
	    totalCounts = {
			two: 0,
			three: 0
		};

	boxIds.forEach(function (id) {
		let letterCount = buildLetterCount(id);
		let hasTwo = false;
		let hasThree = false;

		for (let letter in letterCount) {
			if (hasTwo === false && letterCount[letter] === 2) {
				totalCounts.two += 1;
				hasTwo = true;
			} else if (hasThree === false && letterCount[letter] === 3) {
				totalCounts.three += 1;
				hasThree = true;
			}
		}
	});

	return totalCounts.two * totalCounts.three;
}

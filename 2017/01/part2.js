import sumMatches from './sumMatches.js';

var part2 = function (captcha) {
	var matches = [],
		counter1 = 0,
		captchaString = captcha.toString(),
		captchaLength = captchaString.length,
		captchaMidpoint = captchaLength / 2;

	for (counter1; counter1 < captchaMidpoint; counter1 += 1) {
		if (captchaString[counter1] === captchaString[counter1 + captchaMidpoint]) {
			matches.push(captchaString[counter1], captchaString[counter1]);  // It _will_ match twice.
		}
	}

	return matches.reduce(sumMatches);
}

export default part2;

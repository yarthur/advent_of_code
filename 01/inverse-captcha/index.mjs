import captcha from './captcha.mjs';

var solution = function () {
    var matches = [],
        counter1 = 0,
        captchaString = captcha.toString(),
        captchaLength = captchaString.length;

    var sumMatches = function (previousValue, currentValue) {
        return Number(previousValue) + Number(currentValue);
    };

    for (counter1; counter1 < captchaLength; counter1 += 1) {
        if (captchaString[counter1] === captchaString[counter1 + 1]) {
            matches.push(captchaString[counter1]);
        }
    }

    if (captchaString[0] === captchaString[captchaLength - 1]) {
        matches.push(captchaString[0]);
    }

    return matches.reduce(sumMatches);
}

console.log(solution());

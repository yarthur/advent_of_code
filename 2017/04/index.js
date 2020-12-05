import passphrasesString from "./passphrasesString.js";
// var passphrases = `aa bb cc dd ee
// aa bb cc dd aa
// aa bb cc dd aaa`;

var formatPassphrases = function (passphrasesString) {
    return passphrasesString.split("\n");
};

var noRepeatedWords = function (passphrases) {
    return passphrases.reduce(function (validPhrases, passphrase) {
        var passphraseWords = passphrase.split(" "),
            uniqueWords = new Set(passphraseWords),
            valid = passphraseWords.length === uniqueWords.size;

        if (valid === true) {
            validPhrases.push(passphrase);
        }
        return validPhrases;
    }, []);
};

var noAnagrams = function (passphrases) {
    return passphrases.reduce(function (validPhrases, passphrase) {
        var passphraseWords = passphrase.split(" "),
            sortedWords = passphraseWords.map(function (word) {
                return word.split("").sort().join();
            }),
            uniqueSortedWords = new Set(sortedWords),
            valid = passphraseWords.length === uniqueSortedWords.size;

        if (valid === true) {
            validPhrases.push(passphrase);
        }

        return validPhrases;
    }, []);
};

var passphrases = formatPassphrases(passphrasesString);
var part1 = noRepeatedWords(passphrases);
var part2 = noAnagrams(part1);

console.log(`Part 1: ${part1.length}`);
console.log(`Part 2: ${part2.length}`);

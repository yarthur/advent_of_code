// var passphrases = `aa bb cc dd ee
// aa bb cc dd aa
// aa bb cc dd aaa`;

var formatPassphrases = function (input) {
    return input.split("\n");
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

const findUniquePassphrases = (input) => {
    var passphrases = formatPassphrases(input);

    return noRepeatedWords(passphrases);
};

export const part1 = (input) => {
    const uniquePassphrases = findUniquePassphrases(input);

    return uniquePassphrases.length;
};

export const part2 = (input) => {
    const uniquePassphrases = findUniquePassphrases(input);

    var uniqueNoAnagrams = noAnagrams(uniquePassphrases);

    return uniqueNoAnagrams.length;
};

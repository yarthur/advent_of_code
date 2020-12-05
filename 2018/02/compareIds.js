export default function (inputs) {
    var ids = inputs.split("\n"),
        matchingLetters = "";

    for (let currentId = ids.shift(); ids.length > 0; currentId = ids.shift()) {
        for (let testId of ids) {
            matchingLetters = testId
                .split("")
                .reduce(function (matches = "", letter, index) {
                    if (currentId[index] === letter) {
                        matches += letter;
                    }

                    return matches;
                });

            if (matchingLetters.length === currentId.length - 1) {
                return matchingLetters;
            }
        }
    }

    return false;
}

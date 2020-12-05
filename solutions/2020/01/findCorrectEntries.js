const findCorrectEntries = (input, accumulator = 0) => {
    const entries = [...input];
    const primaryEntry = entries.shift();

    if (entries.length === 0) {
        return false;
    }

    const accumulatedEntry = accumulator + primaryEntry;

    let correctEntries = entries.reduce((correctEntries, currentEntry) => {
        if (correctEntries !== false) {
            return correctEntries;
        }

        return accumulatedEntry + currentEntry === 2020
            ? [primaryEntry, currentEntry]
            : false;
    }, false);

    if (correctEntries === false) {
        correctEntries = findCorrectEntries(entries, accumulator);
    }

    return correctEntries;
};

export const findWithThree = (input) => {
    const entries = [...input];
    const tertiaryEntry = entries.shift();

    if (entries.length <= 1) {
        return false;
    }

    const correctEntries = findCorrectEntries(entries, tertiaryEntry);

    if (correctEntries === false) {
        return findWithThree(entries);
    }

    correctEntries.unshift(tertiaryEntry);

    return correctEntries;
};
export default findCorrectEntries;

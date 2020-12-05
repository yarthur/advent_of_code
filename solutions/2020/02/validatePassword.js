export const validatePassword = ({ floor, ceiling, letter, password }) => {
    const split = password.split(letter);
    const actualOccurance = split.length - 1;

    if (floor > actualOccurance) {
        return false;
    }

    if (ceiling < actualOccurance) {
        return false;
    }

    return true;
};

export const validatePasswordStrictly = ({
    floor,
    ceiling,
    letter,
    password,
}) => {
    const testCharacters = new Set();
    testCharacters.add(password[floor - 1]);
    testCharacters.add(password[ceiling - 1]);

    return testCharacters.size === 2 && testCharacters.has(letter);
};

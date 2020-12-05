import parsePasswordData from "./parsePasswordData.js";
import {
    validatePassword,
    validatePasswordStrictly,
} from "./validatePassword.js";

export const part1 = (input) => {
    const passwordData = parsePasswordData(input);
    const validPasswords = passwordData.filter(validatePassword);

    return validPasswords.length;
};

export const part2 = (input) => {
    const passwordData = parsePasswordData(input);
    const validPasswords = passwordData.filter(validatePasswordStrictly);

    return validPasswords.length;
};

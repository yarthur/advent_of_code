import { passwordData } from "./testInput.js";
import {
    validatePassword,
    validatePasswordStrictly,
} from "../validatePassword.js";

describe("validatePassword", () => {
    test("validates the passwords", () => {
        const solution = ["abcde", "ccccccccc"];
        const validatedPasswords = passwordData
            .filter(validatePassword)
            .map((pwd) => pwd.password);

        solution.forEach((expected) => {
            expect(validatedPasswords.includes(expected)).toBe(true);
        });

        validatedPasswords.forEach((received) => {
            expect(validatedPasswords.includes(received)).toBe(true);
        });
    });
});

describe("validatePasswordStrictly", () => {
    test("validates the passwords strictly", () => {
        const solution = ["abcde"];
        const validatedPasswords = passwordData
            .filter(validatePasswordStrictly)
            .map((pwd) => pwd.password);

        solution.forEach((expected) => {
            expect(validatedPasswords.includes(expected)).toBe(true);
        });

        validatedPasswords.forEach((received) => {
            expect(validatedPasswords.includes(received)).toBe(true);
        });
    });
});

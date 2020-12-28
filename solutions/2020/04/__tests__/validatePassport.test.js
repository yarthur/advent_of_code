import * as testInput from "./testInput.js";
import * as validatePassport from "../validatePassport.js";

describe("validate RequiredFields", () => {
    const validateRequiredFields = validatePassport.validateRequiredFields;
    test("checks for required fields", () => {
        const passportValidity = [true, false, true, false];

        testInput.passportBatch.forEach((passport, passportIndex) => {
            expect(validateRequiredFields(passport)).toEqual(
                passportValidity[passportIndex]
            );
        });
    });
});

describe("fieldValidators", () => {
    const fieldValidators = validatePassport.fieldValidators;

    testInput.fieldValidation.forEach((testCases, fieldName) => {
        test(`validates ${fieldName} field`, () => {
            const validator = fieldValidators.get(fieldName);

            testCases.forEach((expected, testVal) => {
                expect(validator(testVal)).toEqual(expected);
            });
        });
    });
});

describe("default", () => {
    test("successfully tests invalid passports", () => {
        testInput.invalidPassports.forEach((passport) => {
            expect(validatePassport.default(passport)).toEqual(false);
        });
    });

    test("successfully tests valid passports", () => {
        testInput.validPassports.forEach((passport) => {
            expect(validatePassport.default(passport)).toEqual(true);
        });
    });
});

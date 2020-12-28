import generatePassportBatch from "./generatePassportBatch.js";
import * as validatePassport from "./validatePassport.js";

export const part1 = (input) => {
    const batchData = generatePassportBatch(input);
    const validPassports = batchData.filter(
        validatePassport.validateRequiredFields
    );

    return validPassports.length;
};

export const part2 = (input) => {
    const batchData = generatePassportBatch(input);
    const strictlyValidatedPassports = batchData.filter(
        validatePassport.default
    );

    return strictlyValidatedPassports.length;
};

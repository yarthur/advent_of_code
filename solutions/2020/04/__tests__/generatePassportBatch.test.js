import { input, passportBatch } from "./testInput.js";
import generatePassportBatch from "../generatePassportBatch.js";

describe("passportBatch", () => {
    test("returns passport data in a usable way", () => {
        expect(generatePassportBatch(input)).toEqual(passportBatch);
    });
});

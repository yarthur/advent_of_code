import { initializationPrograms, decodedInitializations } from "./testInput.js";
import * as decodeInitialization from "../decodeInitialization.js";

Object.keys(decodeInitialization).forEach((version) => {
    describe(`${version}`, () => {
        test("successfully parses out initialization program", () => {
            expect(
                decodeInitialization[version](initializationPrograms[version])
            ).toEqual(decodedInitializations[version]);
        });
    });
});

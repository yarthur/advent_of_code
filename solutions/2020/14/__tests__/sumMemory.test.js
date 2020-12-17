import { decodedInitializations, memorySums } from "./testInput.js";
import sumMemory from "../sumMemory.js";

test("sums the values in memory", () => {
    Object.keys(decodedInitializations).forEach((key) => {
        expect(sumMemory(decodedInitializations[key])).toEqual(memorySums[key]);
    });
});

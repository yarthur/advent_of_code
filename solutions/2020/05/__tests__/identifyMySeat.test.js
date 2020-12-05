import { testSeatIds } from "./testInput.js";
import identifyMySeat from "../identifyMySeat.js";

test("returns the correct missing seat id", () => {
    testSeatIds.forEach(({ passes, highest, expected }) => {
        expect(identifyMySeat(passes, highest)).toEqual(expected);
    });
});

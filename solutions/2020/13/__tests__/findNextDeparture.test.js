import { nextDepartures } from "./testInput.js";
import findNextDeparture from "../findNextDeparture.js";

test("finds the next departure after the given timestamp", () => {
    nextDepartures.forEach((expected, busId) => {
        expect(findNextDeparture(939, busId)).toBe(expected);
    });
});

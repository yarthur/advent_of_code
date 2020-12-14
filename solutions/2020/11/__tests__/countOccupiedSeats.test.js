import { part1Changes } from "./testInput.js";
import countOccupiedSeats from "../countOccupiedSeats.js";

const testArrangement = part1Changes[part1Changes.length - 1];

test("counts the correct number of unoccupied seats", () => {
    expect(countOccupiedSeats(testArrangement)).toEqual(37);
});

import { input } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("part1", () => {
    test("finds the proper Manhattan distance, navigating the ferry directly", () => {
        expect(part1(input)).toEqual(25);
    });
});

describe("finds the proper Manhattan distance, navigating by waypoint", () => {
    test("returns the correct boot accumulator value", () => {
        expect(part2(input)).toEqual(286);
    });
});

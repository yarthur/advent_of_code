import { input } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("2020, Day 3", () => {
    test("Part 1", () => {
        expect(part1(input)).toEqual(7);
    });

    test("Part 2", () => {
        expect(part2(input)).toEqual(336);
    });
});

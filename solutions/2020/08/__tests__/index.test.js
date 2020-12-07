import { input } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("part1", () => {
    test("returns the accumulator value prior to loop", () => {
        expect(part1(input)).toEqual(5);
    });
});

describe("part2", () => {
    test("returns the correct boot accumulator value", () => {
        expect(part2(input)).toEqual(8);
    });
});

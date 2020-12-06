import { input } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("part1", () => {
    test("sums the number of unique answers from each group", () => {
        expect(part1(input)).toEqual(11);
    });
});

describe("part2", () => {
    test("sums the number of unanimous answers from each group", () => {
        expect(part2(input)).toEqual(6);
    });
});

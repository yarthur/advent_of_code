import { input, testSolutionA, testSolutionB } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("2020, Day 1", () => {
    test("Part A", () => {
        expect(part1(input)).toEqual(testSolutionA);
    });

    test("Part B", () => {
        expect(part2(input)).toEqual(testSolutionB);
    });
});

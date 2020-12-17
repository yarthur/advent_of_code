import "regenerator-runtime/runtime";

import { testCases } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("part1", () => {
    test("tests Part 1", () => {
        testCases.forEach(({ input, part1: expected }) => {
            expect(part1(input)).toEqual(expected);
        });
    });
});

describe("part2", () => {
    test("tests Part 2", () => {
        testCases.forEach(({ input, part2: expected }) => {
            expect(part2(input)).toEqual(expected);
        });
    });
});

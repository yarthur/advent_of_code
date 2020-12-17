import "regenerator-runtime/runtime";

import { inputs, memorySums } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("part1", () => {
    test("returns the sum of all values left in memory", () => {
        expect(part1(inputs.version1)).toEqual(memorySums.version1);
    });
});

describe("part2", () => {
    test("returns the correct boot accumulator value", () => {
        expect(part2(inputs.version2)).toEqual(memorySums.version2);
    });
});

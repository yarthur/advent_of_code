import { input } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("part1", () => {
    test("correctly calculates the answer", () => {
        expect(part1(input)).toEqual(220);
    });
});

describe("part2", () => {
    test("calculates the correct number of permutations", () => {
        expect(part2(input)).toEqual(19208);
    });
});

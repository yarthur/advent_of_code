import { input } from "./testInput.js";
import { part1, part2 } from "../index.js";

jest.mock("../decryptXmas.js");

describe("part1", () => {
    test("tests Part 1", () => {
        expect(part1(input)).toEqual(127);
    });
});

describe("part2", () => {
    test("returns the correct boot accumulator value", () => {
        expect(part2(input)).toEqual(62);
    });
});

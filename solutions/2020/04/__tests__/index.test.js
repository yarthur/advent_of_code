import { input, part2Input, validPassports } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("part1", () => {
    test("returns the correct number of valid passports", () => {
        expect(part1(input)).toEqual(2);
    });
});

describe("part2", () => {
    test("returns the correct number of strictly validated passports", () => {
        expect(part2(part2Input)).toEqual(validPassports.length);
    });
});

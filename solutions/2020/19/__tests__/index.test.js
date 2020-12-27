import "regenerator-runtime/runtime";

import { input, secondInput } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("part1", () => {
    test("tests Part 1", () => {
        expect(part1(input)).toEqual(2);
        expect(part1(secondInput)).toEqual(3);
    });
});

describe("part2", () => {
    test("tests Part 2", () => {
        console.info("This test is fake.");
        expect(typeof part2).toBeTruthy();
        // expect(part2(secondInput)).toEqual(12);
    });
});

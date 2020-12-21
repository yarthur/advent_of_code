import "regenerator-runtime/runtime";

import { input, answerKey } from "./testInput.js";
import { part1, part2 } from "../index.js";

describe("part1", () => {
    test("tests Part 1", () => {
        const expected = answerKey.standard.reduce((exp, answer) => {
            return exp + answer;
        });

        expect(part1(input)).toEqual(expected);
    });
});

describe("part2", () => {
    test("tests Part 2", () => {
        const expected = answerKey.advanced.reduce((exp, answer) => {
            return exp + answer;
        });

        expect(part2(input)).toEqual(expected);
    });
});

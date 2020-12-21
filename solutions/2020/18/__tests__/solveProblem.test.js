import { homework, answerKey } from "./testInput.js";
import * as solveProblem from "../solveProblem.js";

describe("solveProble.default", () => {
    test("solves the problem correctly", () => {
        homework.forEach((problem, problemNumber) => {
            expect(solveProblem.default(problem)).toEqual(
                answerKey.standard[problemNumber]
            );
        });
    });
});

describe("solveProblem.advanced", () => {
    test("solves the problem correctly using the advanced rules", () => {
        homework.forEach((problem, problemNumber) => {
            expect(solveProblem.advanced(problem)).toEqual(
                answerKey.advanced[problemNumber]
            );
        });
    });
});

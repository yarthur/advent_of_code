import { expenseReport } from "./testInput.js";
import * as findCorrectEntries from "../findCorrectEntries.js";

describe("findCorrectEntries", () => {
    test("it finds the correct number of entries", () => {
        const solution = [1721, 299];
        const correctEntries = findCorrectEntries.default(expenseReport);

        solution.forEach((expected) => {
            expect(correctEntries).toContain(expected);
        });

        correctEntries.forEach((received) => {
            expect(solution).toContain(received);
        });
    });
});

describe("findWithThree", () => {
    test("it finds the correct number of entries", () => {
        const solution = [979, 366, 675];
        const correctEntries = findCorrectEntries.findWithThree(expenseReport);

        solution.forEach((expected) => {
            expect(correctEntries).toContain(expected);
        });

        correctEntries.forEach((received) => {
            expect(solution).toContain(received);
        });
    });
});

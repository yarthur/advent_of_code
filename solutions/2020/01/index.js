import generateExpenseReport from "./generateExpenseReport.js";
import findCorrectEntries, { findWithThree } from "./findCorrectEntries.js";
import correctExpenseReport from "./correctExpenseReport.js";

export const part1 = (input) => {
    const report = generateExpenseReport(input);
    const correctEntries = findCorrectEntries(report);

    return correctExpenseReport(correctEntries);
};

export const part2 = (input) => {
    const report = generateExpenseReport(input);
    const correctEntries = findWithThree(report);

    return correctExpenseReport(correctEntries);
};

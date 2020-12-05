import { input, expenseReport } from "./testInput.js";
import generateExpenseReport from "../generateExpenseReport.js";

test("formats puzzle input as expected", () => {
    expect(generateExpenseReport(input)).toEqual(expenseReport);
});

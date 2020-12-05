import correctExpenseReport from "../correctExpenseReport.js";

describe("correctExpenseReport", () => {
    test("the expense report is corrected correctly", () => {
        expect(correctExpenseReport([1721, 299])).toEqual(514579);
        expect(correctExpenseReport([979, 366, 675])).toEqual(241861950);
    });
});

import determineUnits from "../determineUnits";
const inputs = "dabAcCaCBAcCcaDA";
const results = ["D", "A", "B", "C"];

test("filters all unique unites within the polymer", function () {
    expect(determineUnits(inputs)).toEqual(results);
});

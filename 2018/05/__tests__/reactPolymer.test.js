import reactPolymer from "../reactPolymer";
const inputs = "dabAcCaCBAcCcaDA";
const resultsAll = "dabCBAcaDA";
const resultsExclusions = {
    a: 6,
    b: 8,
    c: 4,
    d: 6,
};

test("fully reacts the polymer", function () {
    expect(reactPolymer(inputs)).toEqual(resultsAll);
});

test("fully reacts polymer with exclusions", function () {
    Object.entries(resultsExclusions).forEach(function ([exclusion, result]) {
        expect(reactPolymer(inputs, exclusion).length).toEqual(result);
    });
});

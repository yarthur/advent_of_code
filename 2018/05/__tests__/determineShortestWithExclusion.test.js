import determineShortestWithExclusion from "../determineShortestWithExclusion";
const inputs = "dabAcCaCBAcCcaDA";

test("returns the length of the shortest polymer with 1 unit excluded", function () {
    expect(determineShortestWithExclusion(inputs)).toEqual(4);
});

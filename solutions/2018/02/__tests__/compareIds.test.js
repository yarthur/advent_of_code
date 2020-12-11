import compareIds from "../compareIds";

const inputs = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;

test("compares all ids, returns the common letters between the two closest matches", function () {
    expect(compareIds(inputs)).toBe("fgij");
});

import chineseRemainderTheorem from "../chineseRemainderTheorem.js";

test("returns the correct value", () => {
    expect(
        chineseRemainderTheorem([
            [3, 5],
            [1, 7],
            [6, 8],
        ])
    ).toEqual(BigInt(78));
});

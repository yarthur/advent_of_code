import getTribonacci from "../getTribonacci.js";

const answerKey = {
    0: 0,
    1: 1,
    2: 1,
    3: 2,
    4: 4,
    5: 7,
    6: 13,
    7: 24,
    8: 44,
    9: 81,
    10: 149,
};

test("generates the correct tribonacci value", () => {
    Object.keys(answerKey).forEach((key) => {
        expect(getTribonacci(key * 1)).toEqual(answerKey[key]);
    });
});

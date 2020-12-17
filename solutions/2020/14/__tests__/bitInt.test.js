import * as bitInt from "../bitInt.js";

const testCases = [
    {
        decimal: 0,
        bI: "0",
    },
    {
        decimal: 11,
        bI: "1011",
    },
    {
        decimal: 73,
        bI: "1001001",
    },
    {
        decimal: 101,
        bI: "1100101",
    },
    {
        decimal: 64,
        bI: "1000000",
    },
];

describe("encode", () => {
    test("encodes the value correctly", () => {
        testCases.forEach(({ decimal, bI }) => {
            expect(bitInt.encode(decimal)).toEqual(bI);
        });
    });

    test("pads the value to the correct length", () => {
        const intLength = 36;
        testCases.forEach(({ decimal, bI }) => {
            const bitIntVal = bitInt.encode(decimal, intLength);
            expect(bitIntVal).toEqual(bI.padStart(36, 0));
        });
    });
});

describe("decode", () => {
    test("decodes the value correctly", () => {
        testCases.forEach(({ decimal, bI }) => {
            const bI36 = bI.padStart(36, 0);

            expect(bitInt.decode(bI)).toEqual(decimal);
            expect(bitInt.decode(bI36)).toEqual(decimal);
        });
    });
});

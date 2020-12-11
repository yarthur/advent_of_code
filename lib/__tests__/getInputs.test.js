import "regenerator-runtime/runtime";
import getInput from "../getInput.js";

jest.mock("fs", () => {
    return {
        promises: {
            readFile: jest.fn().mockResolvedValue("This is fake input."),
        },
    };
});

test("returns the contents of the input file as a text string", async () => {
    expect(await getInput(["lib", "__tests__"])).toEqual("This is fake input.");
});

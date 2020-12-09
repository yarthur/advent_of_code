import getInputs from "../getInputs.js";

test("returns the contents of the input file as a text string", () => {
    expect(getInputs(["lib", "__tests__"])).toEqual("This is fake input.");
});

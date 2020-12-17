import { inputs, initializationPrograms } from "./testInput.js";
import getInitializationProgram from "../getInitializationProgram.js";

test("gets the initialization program", () => {
    expect(getInitializationProgram(inputs.version1)).toEqual(
        initializationPrograms.version1
    );
});

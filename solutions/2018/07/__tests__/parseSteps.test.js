import { inputs, steps } from "./sampleData";
import parseSteps from "../parseSteps";

test("parses steps correctly", function () {
    expect(parseSteps(inputs)).toEqual(steps);
});

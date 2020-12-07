import { input, baggageRules } from "./testInput.js";
import parseBaggageRules from "../parseBaggageRules.js";

test("returns declaration form answers", () => {
    expect(parseBaggageRules(input)).toEqual(baggageRules);
});

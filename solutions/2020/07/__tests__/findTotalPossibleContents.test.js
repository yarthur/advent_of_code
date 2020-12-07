import { baggageRules } from "./testInput.js";
import findTotalPossibleContents from "../findTotalPossibleContents.js";

test("returns the total possible contents", () => {
    expect(findTotalPossibleContents(baggageRules, "shiny gold")).toEqual(32);
});

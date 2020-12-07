import { baggageRules } from "./testInput.js";
import findPossibleContainers from "../findPossibleContainers.js";

test("it finds the right possible containers", () => {
    expect(findPossibleContainers(baggageRules, "shiny gold")).toEqual(
        new Set(["bright white", "muted yellow", "dark orange", "light red"])
    );
});

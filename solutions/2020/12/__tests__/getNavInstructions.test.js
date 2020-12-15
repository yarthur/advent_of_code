import { input, navInstructions } from "./testInput.js";
import getNavInstructions from "../getNavInstructions.js";

test("returns formatted inputs", () => {
    expect(getNavInstructions(input)).toEqual(navInstructions);
});

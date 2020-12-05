import { input, boardingPasses } from "./testInput.js";
import getBoardingPasses from "../getBoardingPasses.js";

test("returns boarding pass data", () => {
    expect(getBoardingPasses(input)).toEqual(boardingPasses);
});

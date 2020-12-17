import { input, startingNumbers } from "./testInput.js";
import getStartingNumbers from "../getStartingNumbers.js";

test("gets the starting numbers for the game", () => {
    expect(getStartingNumbers(input)).toEqual(startingNumbers);
});

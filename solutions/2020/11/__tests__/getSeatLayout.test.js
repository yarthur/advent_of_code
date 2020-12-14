import { input, part1Changes } from "./testInput.js";
import getSeatLayout from "../getSeatLayout.js";

test("returns formatted inputs", () => {
    expect(getSeatLayout(input)).toEqual(part1Changes[0]);
});

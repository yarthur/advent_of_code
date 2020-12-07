import { bootCode, corrected } from "./testInput.js";
import bootUp from "../bootUp.js";

test("boots up to the point of looping", () => {
    expect(bootUp(bootCode)).toEqual([5, false]);
});

test("boots up successfully", () => {
    expect(bootUp(corrected)).toEqual([8, true]);
});

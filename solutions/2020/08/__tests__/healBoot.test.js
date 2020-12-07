import { bootCode } from "./testInput.js";
import healBoot from "../healBoot.js";

test("it successfully heals a corrupted boot", () => {
    const healedBoot = bootCode.reduce(healBoot, [0, false]);
    expect(healedBoot).toEqual([8, true]);
});

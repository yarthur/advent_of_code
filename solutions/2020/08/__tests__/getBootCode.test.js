import { input, bootCode } from "./testInput.js";
import getBootCode from "../getBootCode.js";

test("returns formatted boot code", () => {
    expect(getBootCode(input)).toEqual(bootCode);
});

import { data, decrypted } from "./testInput.js";
import findXmasWeakness from "../findXmasWeakness.js";

test("find the weakness value of an XMAS string", () => {
    expect(findXmasWeakness(data, decrypted.weakpoints[0])).toEqual(62);
});

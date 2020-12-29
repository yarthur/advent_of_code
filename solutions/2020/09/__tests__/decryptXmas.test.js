import { data } from "./testInput.js";
import decryptXmas from "../decryptXmas.js";

test("decrypts the XMAS data until first weakpoint", () => {
    const { weakpoints } = decryptXmas(data, 5);
    expect(weakpoints[0]).toEqual(127);
});

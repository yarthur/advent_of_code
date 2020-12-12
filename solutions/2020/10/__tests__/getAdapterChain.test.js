import { input, adapterChain as expected } from "./testInput.js";
import getAdapterChain from "../getAdapterChain.js";

test("returns formatted inputs", () => {
    expect(getAdapterChain(input)).toEqual(expected);
});

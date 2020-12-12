import { adapterChain } from "./testInput.js";
import examineAdapterChain from "../examineAdapterChain.js";

test("determines the differences between adapters as a map", () => {
    const received = examineAdapterChain(adapterChain);

    expect(received.get(1)).toEqual(22);
    expect(received.get(3)).toEqual(10);
});

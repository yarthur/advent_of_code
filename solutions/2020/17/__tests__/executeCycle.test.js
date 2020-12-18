import { initialState } from "./testInput.js";
import executeCycle from "../executeCycle.js";

test("correctly models the dimmension after a cycle", () => {
    const expected = new Map([
        [1, 11],
        [2, 21],
        [3, 38],
    ]);

    let dimmension = initialState;

    for (let cycle = 1; cycle <= 3; cycle += 1) {
        dimmension = executeCycle(dimmension);

        expect(dimmension.size).toEqual(expected.get(cycle));
    }
});

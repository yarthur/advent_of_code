import { input, initialState } from "./testInput.js";
import getInitialState from "../getInitialState.js";

test("gets the initial state of the pocket dimmension", () => {
    expect(getInitialState(input)).toEqual(initialState);
});

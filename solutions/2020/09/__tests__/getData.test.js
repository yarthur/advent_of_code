import { input, data } from "./testInput.js";
import getData from "../getData.js";

test("returns formatted boot code", () => {
    expect(getData(input)).toEqual(data);
});

import * as testInput from "./testInput.js";
import { part1 } from "../index.js";

describe("part1", () => {
    test("returns the highest seat id value", () => {
        expect(part1(testInput.input)).toEqual(820);
    });
});

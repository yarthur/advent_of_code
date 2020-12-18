import { coordinates } from "./testInput.js";
import * as coordinateUtils from "../coordinateUtils.js";

describe("decode", () => {
    test("correctly decodes a coordinate string", () => {
        coordinates.forEach(([coordinateString, expected]) => {
            expect(coordinateUtils.decode(coordinateString)).toEqual(expected);
        });
    });
});

describe("encode", () => {
    test("correctly encodes a coordinate obejct", () => {
        coordinates.forEach(([expected, coordinateObject]) => {
            expect(coordinateUtils.encode(coordinateObject)).toEqual(expected);
        });
    });
});

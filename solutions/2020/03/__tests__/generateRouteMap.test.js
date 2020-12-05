import { input, routeMap } from "./testInput.js";
import generateRouteMap from "../generateRouteMap.js";

test("formats puzzle input as expected", () => {
    expect(generateRouteMap(input)).toEqual(routeMap);
});

import { routeMap, routeStops } from "./testInput.js";
import mapTobogganRun from "../mapTobogganRun.js";

describe("mapTobogganRun", () => {
    test("maps the toboggan run correclty", () => {
        const runMap = mapTobogganRun(routeMap, 3, 1);

        routeStops.forEach((stop, stopIndex) => {
            expect(runMap[stopIndex]).toEqual(stop);
        });
    });
});

import { routeStops } from "./testInput.js";
import countStops from "../countStops.js";

describe("stopCounts", () => {
    test("counts the stops", () => {
        const solution = [
            [".", 3],
            ["#", 7],
        ];
        const stopCounts = countStops(routeStops);

        solution.forEach(([key, value]) => {
            expect(stopCounts.get(key)).toEqual(value);
        });
    });
});

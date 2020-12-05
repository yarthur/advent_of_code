import generateRouteMap from "./generateRouteMap.js";
import mapTobogganRun from "./mapTobogganRun.js";
import countStops from "./countStops.js";

export const part1 = (input) => {
    const routeMap = generateRouteMap(input);
    const route = mapTobogganRun(routeMap, 3, 1);

    const stopCounts = countStops(route);

    return stopCounts.get("#");
};

export const part2 = (input) => {
    const routeMap = generateRouteMap(input);
    var slopes = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
    ];

    return slopes.reduce((answer, [right, down]) => {
        const route = mapTobogganRun(routeMap, right, down);
        const stopCounts = countStops(route);
        const treeCount = stopCounts.get("#");

        if (answer === false) {
            return treeCount;
        }

        return (answer *= treeCount);
    }, false);
};

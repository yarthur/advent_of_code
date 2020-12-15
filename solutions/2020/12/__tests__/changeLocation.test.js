import { navInstructions, locations } from "./testInput.js";
import * as changeLocation from "../changeLocation.js";

test("correctly changes location", () => {
    const expected = locations.directly;
    let location = expected.shift();

    navInstructions.forEach((instruction, index) => {
        location = changeLocation.default(location, instruction);

        expect(location).toEqual(expected[index]);
    });
});

test("correctly changes location by waypoint", () => {
    const expected = locations.waypoint;
    let location = expected.shift();

    navInstructions.forEach((instruction, index) => {
        location = changeLocation.navigateByWaypoint(location, instruction);

        expect(location).toEqual(expected[index]);
    });
});

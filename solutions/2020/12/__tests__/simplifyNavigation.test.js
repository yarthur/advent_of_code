import { navInstructions } from "./testInput.js";
import * as simplifyNavigation from "../simplifyNavigation.js";

test("calculates the correct Manhattan distance from current location", () => {
    expect(simplifyNavigation.default(navInstructions, 90)).toEqual(25);
});

test("calculates the correct Manhattan distance, navigating by waypoint", () => {
    const waypoint = {
        x: 10,
        y: 1,
    };

    expect(simplifyNavigation.byWaypoint(navInstructions, waypoint)).toEqual(
        286
    );
});

import getNavInstructions from "./getNavInstructions.js";
import * as simplifyNavigation from "./simplifyNavigation.js";

export const part1 = (input) => {
    const navInstructions = getNavInstructions(input);

    return simplifyNavigation.default(navInstructions, 90);
};

export const part2 = (input) => {
    const navInstructions = getNavInstructions(input);

    return simplifyNavigation.byWaypoint(navInstructions, { x: 10, y: 1 });
};

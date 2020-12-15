import * as changeLocation from "./changeLocation.js";

export default (navInstructions, heading) => {
    /**
     *   y
     *   |
     * x-*- x
     *   |
     *   y
     */
    const location = {
        x: 0,
        y: 0,
        heading,
    };

    const { x, y } = navInstructions.reduce(changeLocation.default, location);

    return Math.abs(x) + Math.abs(y);
};

export const byWaypoint = (navInstructions, waypoint) => {
    const location = {
        x: 0,
        y: 0,
    };

    let end = navInstructions.reduce(changeLocation.navigateByWaypoint, {
        waypoint,
        location,
    });

    return Math.abs(end.location.x) + Math.abs(end.location.y);
};

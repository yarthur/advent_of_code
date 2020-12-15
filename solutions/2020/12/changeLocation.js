const determineNewHeading = (heading, change) => {
    return (((heading + change) % 360) + 360) % 360;
};

const getHeadingDirection = (heading) => {
    return {
        0: "N",
        90: "E",
        180: "S",
        270: "W",
    }[heading];
};

const rotateWP = ({ x, y }, rotation) => {
    const heading = determineNewHeading(0, rotation);
    const direction = getHeadingDirection(heading);

    if (direction === "S") {
        return {
            x: x * -1,
            y: y * -1,
        };
    }

    if (direction === "E") {
        return {
            x: y,
            y: x * -1,
        };
    }

    if (direction === "W") {
        return {
            x: y * -1,
            y: x,
        };
    }

    // direction === "N" produces no change
    return { x, y };
};

const changeLocation = ({ x, y, heading }, [action, value]) => {
    if (action === "N") {
        y += value;
    }

    if (action === "S") {
        y -= value;
    }

    if (action === "E") {
        x += value;
    }

    if (action === "W") {
        x -= value;
    }

    if (action === "L") {
        heading = determineNewHeading(heading, value * -1);
    }

    if (action === "R") {
        heading = determineNewHeading(heading, value);
    }

    if (action === "F") {
        return changeLocation({ x, y, heading }, [
            getHeadingDirection(heading),
            value,
        ]);
    }

    return { x, y, heading };
};

export default changeLocation;

export const navigateByWaypoint = ({ waypoint, location }, [action, value]) => {
    const updateWaypoint = (heading) => {
        let { x, y } = changeLocation({ heading, ...waypoint }, ["F", value]);

        return { x, y };
    };

    if (action === "N") {
        return { waypoint: updateWaypoint(0), location };
    }

    if (action === "S") {
        return { waypoint: updateWaypoint(180), location };
    }

    if (action === "E") {
        return { waypoint: updateWaypoint(90), location };
    }

    if (action === "W") {
        return { waypoint: updateWaypoint(270), location };
    }

    if (action === "L") {
        return { waypoint: rotateWP(waypoint, value * -1), location };
    }

    if (action === "R") {
        return { waypoint: rotateWP(waypoint, value), location };
    }

    if (action === "F") {
        return {
            waypoint,
            location: {
                x: location.x + value * waypoint.x,
                y: location.y + value * waypoint.y,
            },
        };
    }

    return { waypoint, location };
};

import getInitialState from "./getInitialState.js";
import executeCycle from "./executeCycle.js";

export const part1 = (input) => {
    let dimmension = getInitialState(input);

    for (let cycle = 0; cycle < 6; cycle += 1) {
        dimmension = executeCycle(dimmension);
    }

    return dimmension.size;
};

export const part2 = (input) => {
    let dimmension = getInitialState(input, ["x", "y", "z", "w"]);

    for (let cycle = 0; cycle < 6; cycle += 1) {
        dimmension = executeCycle(dimmension);
    }

    return dimmension.size;
};

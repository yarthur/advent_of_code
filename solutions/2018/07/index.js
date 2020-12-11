import parseSteps from "./parseSteps.js";
import determineStepOrder from "./determineStepOrder.js";
import calculateTimeToCompletion from "./calculateTimeToCompletion.js";

export const part1 = (input) => {
    var steps = parseSteps(input);

    return determineStepOrder(steps);
};

export const part2 = (input) => {
    var steps = parseSteps(input);

    return calculateTimeToCompletion(steps, 5, 60);
};

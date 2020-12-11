import processInput from "./processInput.js";
import calculateSeverity from "./calculateSeverity.js";
import calculateDelay from "./calculateDelay.js";

export const part1 = (input) => {
    var layers = processInput(input);
    return calculateSeverity(layers);
};

export const part2 = (input) => {
    var layers = processInput(input);
    // part1 = calculateSeverity(layers),

    return calculateDelay(layers);
};

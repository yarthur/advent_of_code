import getInputs from "../lib/getInputs.js";
import parseSteps from "./parseSteps.js";
import determineStepOrder from "./determineStepOrder.js";
import calculateTimeToCompletion from "./calculateTimeToCompletion.js";

const inputs = getInputs("07");

var steps = parseSteps(inputs);

console.log(`Part 1: ${determineStepOrder(steps)}`);
console.log(`Part 2: ${calculateTimeToCompletion(steps, 5, 60)}`);

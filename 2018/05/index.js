import getInputs from "../lib/getInputs.js";
import reactPolymer from "./reactPolymer.js";
import determineShortestWithExclusion from "./determineShortestWithExclusion.js";

const inputs = getInputs("05");

console.log(`Part 1: ${reactPolymer(inputs).length}`);

console.log(`Part 2: ${determineShortestWithExclusion(inputs)}`);

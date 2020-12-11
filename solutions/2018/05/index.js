import reactPolymer from "./reactPolymer.js";
import determineShortestWithExclusion from "./determineShortestWithExclusion.js";

export const part1 = (input) => {
    return reactPolymer(input).length;
};

export const part2 = determineShortestWithExclusion;

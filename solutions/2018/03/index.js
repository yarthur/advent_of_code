import calculateOverlap from "./calculateOverlap.js";
import findPristineClaim from "./findPristineClaim.js";

export const part1 = (input) => {
    const overlaps = calculateOverlap(input);

    return overlaps.length;
};

export const part2 = (input) => {
    const overlaps = calculateOverlap(input);

    return findPristineClaim(overlaps, input);
};

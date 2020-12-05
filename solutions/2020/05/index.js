import getBoardingPasses from "./getBoardingPasses.js";
import identifyMySeat from "./identifyMySeat.js";

export const part1 = (input) => {
    const boardingPasses = getBoardingPasses(input);

    return boardingPasses.reduce((highest, current) => {
        return Math.max(highest, current.seatId);
    }, 0);
};

export const part2 = (input) => {
    const boardingPasses = getBoardingPasses(input);
    const highestSeatId = part1(input);

    return identifyMySeat(boardingPasses, highestSeatId);
};

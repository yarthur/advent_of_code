import processInput from "./processInput.js";
import reallocate from "./reallocate.js";

// var input = `0  2   7  0`;

// var memoryBanks = processInput(input),
//     part1 = reallocate(memoryBanks),
//     part2 = reallocate(part1.memoryBanks);

export const part1 = (input) => {
    const memoryBanks = processInput(input);

    const { reallocationCount } = reallocate(memoryBanks);
    return reallocationCount;
};

export const part2 = (input) => {
    const memoryBanks = processInput(input);
    const firstReallocation = reallocate(memoryBanks);
    const { reallocationCount } = reallocate(firstReallocation.memoryBanks);

    return reallocationCount;
};

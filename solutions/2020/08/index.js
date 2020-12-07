import getBootCode from "./getBootCode.js";
import bootUp from "./bootUp.js";
import healBoot from "./healBoot.js";

export const part1 = (input) => {
    const bootCode = getBootCode(input);
    let [accumulator] = bootUp(bootCode);

    return accumulator;
};

export const part2 = (input) => {
    const bootCode = getBootCode(input);

    let [accumulator] = bootCode.reduce(healBoot, [0, false]);

    return accumulator;
};

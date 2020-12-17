import getInitializationProgram from "./getInitializationProgram.js";
import * as decodeInitialization from "./decodeInitialization.js";
import sumMemory from "./sumMemory.js";

export const part1 = (input) => {
    const initializationProgram = getInitializationProgram(input);
    const decodedInitialization = decodeInitialization.version1(
        initializationProgram
    );

    return sumMemory(decodedInitialization);
};

export const part2 = (input) => {
    const initializationProgram = getInitializationProgram(input);

    const decodedInitialization = decodeInitialization.version2(
        initializationProgram
    );

    return sumMemory(decodedInitialization);
};

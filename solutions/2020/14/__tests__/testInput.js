export const inputs = {
    version1: `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`,
    version2: `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`,
};

export const initializationPrograms = {
    version1: [
        ["mask", "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X"],
        ["mem", [8, 11]],
        ["mem", [7, 101]],
        ["mem", [8, 0]],
    ],
    version2: [
        ["mask", "000000000000000000000000000000X1001X"],
        ["mem", [42, 100]],
        ["mask", "00000000000000000000000000000000X0XX"],
        ["mem", [26, 1]],
    ],
};

export const decodedInitializations = {
    version1: new Map([
        [7, 101],
        [8, 64],
    ]),
    version2: new Map([
        [26, 1],
        [27, 1],
        [58, 100],
        [59, 100],
        [16, 1],
        [17, 1],
        [18, 1],
        [19, 1],
        [24, 1],
        [25, 1],
    ]),
};

export const memorySums = {
    version1: 165,
    version2: 208,
};

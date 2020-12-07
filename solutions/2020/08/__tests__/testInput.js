export const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

export const bootCode = [
    ["nop", 0],
    ["acc", 1],
    ["jmp", 4],
    ["acc", 3],
    ["jmp", -3],
    ["acc", -99],
    ["acc", 1],
    ["jmp", -4],
    ["acc", 6],
];

export const stepByStep = [
    [0, 1],
    [1, 2],
    [1, 6],
    [2, 7],
    [2, 3],
    [5, 4],
    [5, 1],
];

export const corrected = [
    ["nop", 0],
    ["acc", 1],
    ["jmp", 4],
    ["acc", 3],
    ["jmp", -3],
    ["acc", -99],
    ["acc", 1],
    ["nop", -4],
    ["acc", 6],
];

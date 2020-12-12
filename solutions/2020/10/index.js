import getAdapterChain from "./getAdapterChain.js";
import examineAdapterChain from "./examineAdapterChain.js";
import getTribonacci from "./getTribonacci.js";

export const part1 = (input) => {
    const outputs = getAdapterChain(input);
    const outputDifferences = examineAdapterChain(outputs);

    return outputDifferences.get(1) * outputDifferences.get(3);
};

export const part2 = (input) => {
    const adapterChain = getAdapterChain(input);

    let validCombos = 1;

    return adapterChain.reduce((arrangements, adapter, index, chain) => {
        if (chain[index + 1] - adapter === 1) {
            validCombos += 1;
            return arrangements;
        }

        arrangements *= getTribonacci(validCombos);
        validCombos = 1;

        return arrangements;
    }, 1);
};

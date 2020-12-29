import getData from "./getData.js";
import decryptXmas from "./decryptXmas.js";
import findXmasWeakness from "./findXmasWeakness.js";

export const part1 = (input) => {
    const data = getData(input);

    const { weakpoints } = decryptXmas(data, 25);

    return weakpoints[0];
};

export const part2 = (input) => {
    const data = getData(input);

    const weakpoint = part1(input);

    return findXmasWeakness(data, weakpoint);
};

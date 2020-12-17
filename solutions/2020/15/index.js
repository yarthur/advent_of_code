import getStartingNumbers from "./getStartingNumbers.js";
import memoryGame from "./memoryGame.js";

export const part1 = (input) => {
    const startingNumbers = getStartingNumbers(input);

    return memoryGame(startingNumbers, 2020);
};

export const part2 = (input) => {
    const startingNumbers = getStartingNumbers(input);

    return memoryGame(startingNumbers, 30000000);
};

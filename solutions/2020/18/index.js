import getHomework from "./getHomework.js";
import * as solveProblem from "./solveProblem.js";

export const part1 = (input) => {
    const homework = getHomework(input);

    return homework.reduce((sum, problem) => {
        const answer = solveProblem.default(problem);

        return sum + answer;
    }, 0);
};

export const part2 = (input) => {
    const homework = getHomework(input);

    return homework.reduce((sum, problem) => {
        const answer = solveProblem.advanced(problem);

        return sum + answer;
    }, 0);
};

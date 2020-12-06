import getDeclarationForms from "./getDeclarationForms.js";

export const part1 = (input) => {
    const answerSets = getDeclarationForms(input);

    return answerSets.reduce((sum, { total }) => {
        return sum + total.size;
    }, 0);
};

export const part2 = (input) => {
    const answerSets = getDeclarationForms(input);

    return answerSets.reduce((sum, { unanimous }) => {
        return sum + unanimous.length;
    }, 0);
};

import parseBaggageRules from "./parseBaggageRules.js";
import findPossibleContainers from "./findPossibleContainers.js";
import findTotalPossibleContents from "./findTotalPossibleContents.js";

export const part1 = (input) => {
    const rules = parseBaggageRules(input);
    const possibleContainers = findPossibleContainers(rules, "shiny gold");

    return possibleContainers.size;
};

export const part2 = (input) => {
    const rules = parseBaggageRules(input);

    return findTotalPossibleContents(rules, "shiny gold");
};

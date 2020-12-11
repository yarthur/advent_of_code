import processTabSeparatedValues from "./processTSV.js";
import p1 from "./part1.js";
import p2 from "./part2.js";

export const part1 = (input) => {
    const data = processTabSeparatedValues(input);

    return p1(data);
};

export const part2 = (input) => {
    const data = processTabSeparatedValues(input);

    return p2(data);
};

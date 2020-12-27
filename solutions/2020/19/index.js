import getReceived from "./getReceived.js";
import checkMessage from "./checkMessage.js";

export const part1 = (input) => {
    const { rules, messages } = getReceived(input);

    const validMessages = messages.filter((message) => {
        return checkMessage(message, rules);
    });

    return validMessages.length;
};

export const part2 = (input) => {
    const { rules, messages } = getReceived(input);

    rules.set(8, [[42], [42, 8]]);
    rules.set(11, [
        [42, 31],
        [42, 11, 31],
    ]);

    const validMessages = messages.filter((message) => {
        return checkMessage(message, rules);
    });

    return validMessages.length;
};

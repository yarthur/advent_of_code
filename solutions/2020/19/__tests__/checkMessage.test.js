import { received, validationResults } from "./testInput.js";
import checkMessage from "../checkMessage.js";

const { rules, messages } = received;

test("correctly validates the message", () => {
    messages.forEach((message, messageIndex) => {
        expect(checkMessage(message, rules)).toEqual(
            validationResults[messageIndex]
        );
    });
});

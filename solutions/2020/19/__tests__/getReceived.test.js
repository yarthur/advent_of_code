import { input, received } from "./testInput.js";
import getReceived from "../getReceived.js";

test("parses the received data", () => {
    expect(getReceived(input)).toEqual(received);
});

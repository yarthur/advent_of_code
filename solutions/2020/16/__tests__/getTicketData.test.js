import { input, ticketData } from "./testInput.js";
import getTicketData from "../getTicketData.js";

test("gets the ticket data from input", () => {
    expect(getTicketData(input)).toEqual(ticketData);
});

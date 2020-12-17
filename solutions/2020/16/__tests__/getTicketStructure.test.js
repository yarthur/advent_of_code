import { ticketStructure } from "./testInput.js";
import getTicketStructure from "../getTicketStructure.js";

const { ticketRules } = ticketStructure.given;
const allTickets = [
    ticketStructure.given.yourTicket,
    ...ticketStructure.given.nearbyTickets,
];

test("determines the correct ticket structure based on given data", () => {
    expect(getTicketStructure(allTickets, ticketRules)).toEqual(
        ticketStructure.structure
    );
});

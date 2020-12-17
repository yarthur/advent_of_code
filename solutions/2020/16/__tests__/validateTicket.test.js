import { ticketData, validatedTickets } from "./testInput.js";
import * as validateTicket from "../validateTicket.js";

const { ticketRules } = ticketData;

describe("validateTicket.default", () => {
    test("correctly validates a ticket", () => {
        validatedTickets.valid.forEach((expected) => {
            expect(
                validateTicket.default(expected.ticketInfo, ticketRules)
            ).toEqual(expected);
        });

        validatedTickets.invalid.forEach((expected) => {
            expect(
                validateTicket.default(expected.ticketInfo, ticketRules)
            ).toEqual(expected);
        });
    });
});

describe("validateTicket.batch", () => {
    const tickets = [ticketData.yourTicket, ...ticketData.nearbyTickets];

    test("properly validates a batch of tickets", () => {
        expect(validateTicket.batch(tickets, ticketRules)).toEqual(
            validatedTickets
        );
    });
});

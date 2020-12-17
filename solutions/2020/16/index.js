import getTicketData from "./getTicketData.js";
import { batch as validateBatch } from "./validateTicket.js";
import getTicketStructure from "./getTicketStructure.js";

export const part1 = (input) => {
    const { ticketRules, nearbyTickets } = getTicketData(input);

    const validatedTickets = validateBatch(nearbyTickets, ticketRules);

    return validatedTickets.invalid.reduce((errorRate, { invalidValues }) => {
        const ticketErrorRate = invalidValues.reduce((tER, val) => {
            return tER + val;
        }, 0);

        return errorRate + ticketErrorRate;
    }, 0);
};

export const part2 = (input) => {
    const { ticketRules, yourTicket, nearbyTickets } = getTicketData(input);

    const { valid: validTicketInfo } = validateBatch(
        nearbyTickets,
        ticketRules
    );

    const validTickets = validTicketInfo.map(({ ticketInfo }) => {
        return ticketInfo;
    });

    const ticketStructure = getTicketStructure(validTickets, ticketRules);

    return Object.entries(ticketStructure).reduce(
        (solution, [fieldName, fieldPosition]) => {
            if (fieldName.indexOf("departure") === 0) {
                solution *= yourTicket[fieldPosition];
            }

            return solution;
        },
        1
    );
};

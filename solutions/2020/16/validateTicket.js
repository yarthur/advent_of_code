import checkRules from "./checkRules.js";

const validateTicket = (ticketInfo, ticketRules) => {
    const invalidValues = ticketInfo.filter((value) => {
        const rulesCheck = checkRules(value, ticketRules);

        return rulesCheck.length === 0;
    });

    if (invalidValues.length > 0) {
        return { ticketInfo, invalidValues, valid: false };
    }

    return { ticketInfo, valid: true };
};

export default validateTicket;

export const batch = (tickets, ticketRules) => {
    return tickets.reduce(
        (batch, ticketInfo) => {
            const processedTicket = validateTicket(ticketInfo, ticketRules);
            const result = processedTicket.valid ? "valid" : "invalid";

            batch[result].push(processedTicket);

            return batch;
        },
        {
            valid: [],
            invalid: [],
        }
    );
};

const convertToNum = (numString) => {
    return parseInt(numString, 0);
};

export default (input) => {
    const [ticketRuleData, yourTicketData, nearbyTicketData] = input.split(
        "\n\n"
    );

    const ticketRules = ticketRuleData.split("\n").reduce((rules, rule) => {
        const [label, rangeData] = rule.split(": ");
        const ranges = rangeData.split(" or ");

        rules[label] = ranges.map((range) => {
            return range.split("-").map(convertToNum);
        });

        return rules;
    }, {});

    const yourTicket = yourTicketData
        .split("\n")
        .reduce((data, input, index) => {
            if (index === 1) {
                return input.split(",").map(convertToNum);
            }

            return data;
        }, null);

    const nearbyTickets = nearbyTicketData
        .split("\n")
        .reduce((data, ticket, index) => {
            if (index === 0) {
                return data;
            }

            data.push(ticket.split(",").map(convertToNum));

            return data;
        }, []);
    return { ticketRules, yourTicket, nearbyTickets };
};

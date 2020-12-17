export const input = `class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12`;

export const ticketData = {
    ticketRules: {
        class: [
            [1, 3],
            [5, 7],
        ],
        row: [
            [6, 11],
            [33, 44],
        ],
        seat: [
            [13, 40],
            [45, 50],
        ],
    },
    yourTicket: [7, 1, 14],
    nearbyTickets: [
        [7, 3, 47],
        [40, 4, 50],
        [55, 2, 20],
        [38, 6, 12],
    ],
};

export const validatedTickets = {
    valid: [
        {
            ticketInfo: [7, 1, 14],
            valid: true,
        },
        {
            ticketInfo: [7, 3, 47],
            valid: true,
        },
    ],
    invalid: [
        {
            ticketInfo: [40, 4, 50],
            valid: false,
            invalidValues: [4],
        },
        {
            ticketInfo: [55, 2, 20],
            valid: false,
            invalidValues: [55],
        },
        {
            ticketInfo: [38, 6, 12],
            valid: false,
            invalidValues: [12],
        },
    ],
};

export const ticketStructure = {
    given: {
        ticketRules: {
            class: [
                [0, 1],
                [4, 19],
            ],
            row: [
                [0, 5],
                [8, 19],
            ],
            seat: [
                [0, 13],
                [16, 19],
            ],
        },
        yourTicket: [11, 12, 13],
        nearbyTickets: [
            [3, 9, 18],
            [15, 1, 5],
            [5, 14, 9],
        ],
    },
    structure: {
        class: 1,
        row: 0,
        seat: 2,
    },
};

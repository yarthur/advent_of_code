export const input = `FBFBBFFRLR
BFFFBBFRRR
FFFBBBFRRR
BBFFBBFRLL`;

export const boardingPasses = [
    {
        row: 44,
        seat: 5,
        seatId: 44 * 8 + 5,
    },
    {
        row: 70,
        seat: 7,
        seatId: 567,
    },
    {
        row: 14,
        seat: 7,
        seatId: 119,
    },
    {
        row: 102,
        seat: 4,
        seatId: 820,
    },
];

export const testSeatIds = [
    {
        passes: [{ seatId: 2 }, { seatId: 4 }, { seatId: 6 }, { seatId: 7 }],
        highest: 7,
        expected: 5,
    },
    {
        passes: [{ seatId: 20 }, { seatId: 2 }, { seatId: 15 }, { seatId: 13 }],
        highest: 20,
        expected: 14,
    },
];

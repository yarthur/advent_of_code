export const input = `939
7,13,x,x,59,x,31,19`;

export const shuttleData = {
    earliestDeparture: 939,
    busList: new Map([
        [7, 0],
        [13, 1],
        [59, 4],
        [31, 6],
        [19, 7],
    ]),
};

export const nextDepartures = new Map([
    [7, 945],
    [13, 949],
    [59, 944],
    [31, 961],
    [19, 950],
]);

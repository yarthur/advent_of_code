export const input = `F10
N3
F7
R90
F11`;

export const navInstructions = [
    ["F", 10],
    ["N", 3],
    ["F", 7],
    ["R", 90],
    ["F", 11],
];

export const locations = {
    directly: [
        {
            x: 0,
            y: 0,
            heading: 90,
        },
        {
            x: 10,
            y: 0,
            heading: 90,
        },
        {
            x: 10,
            y: 3,
            heading: 90,
        },
        {
            x: 17,
            y: 3,
            heading: 90,
        },
        {
            x: 17,
            y: 3,
            heading: 180,
        },
        {
            x: 17,
            y: -8,
            heading: 180,
        },
    ],
    waypoint: [
        {
            waypoint: {
                x: 10,
                y: 1,
            },
            location: {
                x: 0,
                y: 0,
            },
        },
        {
            waypoint: {
                x: 10,
                y: 1,
            },
            location: {
                x: 100,
                y: 10,
            },
        },
        {
            waypoint: {
                x: 10,
                y: 4,
            },
            location: {
                x: 100,
                y: 10,
            },
        },
        {
            waypoint: {
                x: 10,
                y: 4,
            },
            location: {
                x: 170,
                y: 38,
            },
        },
        {
            waypoint: {
                x: 4,
                y: -10,
            },
            location: {
                x: 170,
                y: 38,
            },
        },
        {
            waypoint: {
                x: 4,
                y: -10,
            },
            location: {
                x: 214,
                y: -72,
            },
        },
    ],
};

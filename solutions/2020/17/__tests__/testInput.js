export const input = `.#.
..#
###`;

export const initialState = new Set([
    "x0,y2,z0",
    "x1,y0,z0",
    "x1,y2,z0",
    "x2,y1,z0",
    "x2,y2,z0",
]);

export const coordinates = new Set([
    [
        "x0,y2,z0",
        {
            x: 0,
            y: 2,
            z: 0,
        },
    ],
    [
        "x1,y0,z0",
        {
            x: 1,
            y: 0,
            z: 0,
        },
    ],
    [
        "x1,y2,z0",
        {
            x: 1,
            y: 2,
            z: 0,
        },
    ],
    [
        "x2,y1,z0,w0",
        {
            x: 2,
            y: 1,
            z: 0,
            w: 0,
        },
    ],
    [
        "x2,y2,z0,w0",
        {
            x: 2,
            y: 2,
            z: 0,
            w: 0,
        },
    ],
]);

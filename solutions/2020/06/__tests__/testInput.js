export const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

export const declarationForms = [
    {
        total: new Set(["a", "b", "c"]),
        unanimous: ["a", "b", "c"],
    },
    {
        total: new Set(["a", "b", "c"]),
        unanimous: [],
    },
    {
        total: new Set(["a", "b", "c"]),
        unanimous: ["a"],
    },
    {
        total: new Set(["a"]),
        unanimous: ["a"],
    },
    {
        total: new Set(["b"]),
        unanimous: ["b"],
    },
];

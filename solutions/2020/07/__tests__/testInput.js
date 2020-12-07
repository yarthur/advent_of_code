export const input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

export const baggageRules = new Map([
    [
        "light red",
        {
            contains: {
                "bright white": 1,
                "muted yellow": 2,
            },
            containedBy: new Set(),
        },
    ],
    [
        "bright white",
        {
            contains: {
                "shiny gold": 1,
            },
            containedBy: new Set(["light red", "dark orange"]),
        },
    ],
    [
        "muted yellow",
        {
            contains: {
                "shiny gold": 2,
                "faded blue": 9,
            },
            containedBy: new Set(["light red", "dark orange"]),
        },
    ],
    [
        "dark orange",
        {
            contains: {
                "bright white": 3,
                "muted yellow": 4,
            },
            containedBy: new Set(),
        },
    ],
    [
        "shiny gold",
        {
            contains: {
                "dark olive": 1,
                "vibrant plum": 2,
            },
            containedBy: new Set(["bright white", "muted yellow"]),
        },
    ],
    [
        "faded blue",
        {
            contains: {},
            containedBy: new Set([
                "muted yellow",
                "dark olive",
                "vibrant plum",
            ]),
        },
    ],
    [
        "dark olive",
        {
            contains: {
                "faded blue": 3,
                "dotted black": 4,
            },
            containedBy: new Set(["shiny gold"]),
        },
    ],
    [
        "dotted black",
        {
            contains: {},
            containedBy: new Set(["dark olive", "vibrant plum"]),
        },
    ],
    [
        "vibrant plum",
        {
            contains: {
                "faded blue": 5,
                "dotted black": 6,
            },
            containedBy: new Set(["shiny gold"]),
        },
    ],
]);

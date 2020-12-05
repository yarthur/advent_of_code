export const inputs = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;

export const programs = [
    { id: "pbga", programWeight: 66, children: [] },
    { id: "xhth", programWeight: 57, children: [] },
    { id: "ebii", programWeight: 61, children: [] },
    { id: "havc", programWeight: 66, children: [] },
    { id: "ktlj", programWeight: 57, children: [] },
    { id: "fwft", programWeight: 72, children: ["ktlj", "cntj", "xhth"] },
    { id: "qoyq", programWeight: 66, children: [] },
    { id: "padx", programWeight: 45, children: ["pbga", "havc", "qoyq"] },
    { id: "tknk", programWeight: 41, children: ["ugml", "padx", "fwft"] },
    { id: "jptl", programWeight: 61, children: [] },
    { id: "ugml", programWeight: 68, children: ["gyxo", "ebii", "jptl"] },
    { id: "gyxo", programWeight: 61, children: [] },
    { id: "cntj", programWeight: 57, children: [] },
];

export const childParents = {
    ktlj: "fwft",
    cntj: "fwft",
    xhth: "fwft",
    pbga: "padx",
    havc: "padx",
    qoyq: "padx",
    ugml: "tknk",
    padx: "tknk",
    fwft: "tknk",
    gyxo: "ugml",
    ebii: "ugml",
    jptl: "ugml",
};

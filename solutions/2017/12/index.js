import processInput from "./processInput.js";
import groupPrograms from "./groupPrograms.js";

const buildProgramGroups = (input) => {
    var programs = processInput(input),
        programGroups = [],
        progSeed = [...programs["0"], "0"]; // Seed the prog0 set with the contents *and key* of program 0.

    while (Object.keys(programs).length > 0) {
        let group = groupPrograms(programs, progSeed);

        group.forEach(function (key) {
            delete programs[key];
        });

        programGroups.push(group);

        if (Object.keys(programs).length > 0) {
            let newSeed = Object.keys(programs)[0];
            progSeed = [...programs[newSeed], newSeed];
        }
    }

    return programGroups;
};

export const part1 = (input) => {
    const programGroups = buildProgramGroups(input);
    return programGroups[0].size;
};

export const part2 = (input) => {
    const programGroups = buildProgramGroups(input);
    return programGroups.length;
};

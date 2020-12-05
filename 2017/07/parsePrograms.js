export default function (inputs) {
    var programStrings = inputs.split("\n"),
        programs = [];

    programStrings.forEach(function (program) {
        let programParts = program.split(" -> ");
        let programId = programParts[0].split(" ")[0];

        let programWeight = /\((\d*)\)/.exec(programParts[0]) || [0, 0];

        let programChildren =
            programParts[1] !== undefined
                ? programParts[1].trim().split(", ")
                : [];

        if (programParts[0] !== "") {
            programs.push({
                id: programId,
                programWeight: Number(programWeight[1]),
                children: programChildren,
            });
        }
    });

    return programs;
}

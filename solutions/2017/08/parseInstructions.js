var mapInstructionString = function (instructionString) {
    var instructionParts = /^([a-z]+) (inc|dec) (-?\d+) if ([a-z]+ [<>=!]{1,2} -?\d*)$/.exec(
            instructionString
        ),
        parsedInstruction = {
            register: instructionParts[1],
            modification: instructionParts[2],
            modifier: Number(instructionParts[3]),
            condition: instructionParts[4],
        };

    return parsedInstruction;
};

var parseInstructions = function (instructionString) {
    var instructions = instructionString.split("\n");

    return instructions.map(mapInstructionString);
};

export default parseInstructions;

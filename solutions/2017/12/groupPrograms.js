var groupPrograms = function (programs, pipesSeed = null) {
    var programPipes = new Set(pipesSeed),
        pipesCountStart = programPipes.size,
        pipesCountEnd = 0;

    while (pipesCountStart !== pipesCountEnd) {
        pipesCountStart = programPipes.size;

        for (let program in programs) {
            if (programPipes.has(program)) {
                programs[program].forEach(function (receiver) {
                    programPipes.add(receiver);
                });
            }
        }

        pipesCountEnd = programPipes.size;
    }

    return programPipes;
};

export default groupPrograms;

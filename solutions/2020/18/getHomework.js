export default (input) => {
    const problems = input.split("\n");

    return problems.map((problem) => {
        return problem.split("").reduce((reducedProblem, char) => {
            if (char === " ") {
                return reducedProblem;
            }

            const numberChar = parseInt(char, 10);

            reducedProblem.push(isNaN(numberChar) ? char : numberChar);

            return reducedProblem;
        }, []);
    });
};

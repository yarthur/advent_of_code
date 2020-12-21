const operations = new Map([
    ["+", (x, y = 0) => x + y],
    ["*", (x, y = 1) => x * y],
]);

const solveProblem = (problem) => {
    const solution = problem.reduce(
        ({ left, operator, parenLeft }, char) => {
            if (operations.has(char) && operator === undefined) {
                operator = operations.get(char);
            }

            if (char === "(") {
                parenLeft.push([left, operator]);
                left = undefined;
                operator = undefined;
            }

            if (char === ")") {
                [char, operator] = parenLeft.pop();
            }

            if (isNaN(char) === false) {
                left = operator === undefined ? char : operator(char, left);
                operator = undefined;
            }

            return { left, operator, parenLeft };
        },
        {
            left: undefined,
            operator: undefined,
            parenLeft: [],
        }
    );

    return solution.left;
};

export default solveProblem;

export const advanced = (problem) => {
    // easy-peasy!
    if (problem.includes("*") === false) {
        return solveProblem(problem);
    }

    const solution = problem.reduce(
        ({ left, operator, multiplication, parenLeft }, char) => {
            if (char === "*") {
                multiplication.push(left, char);
                left = undefined;

                // Don't let the `*` operator proceed as normal.
                return { left, operator, multiplication, parenLeft };
            }

            if (operations.has(char) && operator === undefined) {
                operator = operations.get(char);
            }

            if (char === "(") {
                parenLeft.push([left, operator, multiplication]);
                left = undefined;
                operator = undefined;
                multiplication = [];
            }

            if (char === ")") {
                if (multiplication.length > 0) {
                    left = solveProblem([...multiplication, left]);
                }

                [char, operator, multiplication] = parenLeft.pop();
            }

            if (isNaN(char) === false) {
                left = operator === undefined ? char : operator(char, left);
                operator = undefined;
            }

            return { left, operator, multiplication, parenLeft };
        },
        {
            left: undefined,
            operator: undefined,
            multiplication: [],
            parenLeft: [],
        }
    );

    if (solution.multiplication.length > 0) {
        return solveProblem([...solution.multiplication, solution.left]);
    }

    return solution.left;
};

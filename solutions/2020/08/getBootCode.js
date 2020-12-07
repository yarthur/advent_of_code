export default (input) => {
    const instructions = input.split("\n");

    return instructions.map((instruction) => {
        const [action, value] = instruction.split(" ");

        return [action, value * 1];
    });
};

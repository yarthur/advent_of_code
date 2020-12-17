export default (input) => {
    const instructions = input.split("\n");

    return instructions.map((instruction) => {
        const [action, value] = instruction.split(" = ");

        if (action === "mask") {
            return [action, value];
        }

        const memoryAddress = action.match(/\[(\d*)\]/);

        return ["mem", [parseInt(memoryAddress[1], 10), parseInt(value, 10)]];
    });
};

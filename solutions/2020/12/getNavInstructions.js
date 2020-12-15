export default (input) => {
    const instructions = input.split("\n");

    return instructions.map((line) => {
        return [line.substr(0, 1), line.substr(1) * 1];
    });
};

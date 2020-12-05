export default (input) => {
    const inputArr = input.split("\n");

    return inputArr.map((entry) => {
        const entryParts = entry.split(" ");
        let [floor, ceiling] = entryParts[0].split("-");
        const letter = entryParts[1][0];
        const password = entryParts[2];

        floor *= 1;
        ceiling *= 1;

        return { floor, ceiling, letter, password };
    });
};

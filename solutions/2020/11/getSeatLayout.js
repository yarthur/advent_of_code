export default (input) => {
    const layout = input.split("\n");

    return layout.map((row) => {
        return row.split("");
    });
};

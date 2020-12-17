export default (input) => {
    return input.split(",").map((num) => {
        return parseInt(num, 10);
    });
};

export default (input) => {
    const inputArr = input.split("\n");

    return inputArr.map((entry) => {
        return entry * 1;
    });
};

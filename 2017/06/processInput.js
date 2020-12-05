var processInput = function (input) {
    var processedInput = input.split(/\s+/);

    return processedInput.map(function (value) {
        return Number(value);
    });
};

export default processInput;

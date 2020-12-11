var processInput = function (input) {
    var splitInput = input.split("\n"),
        processedInput = splitInput.map(function (val) {
            return Number(val);
        });

    return processedInput;
};

export default processInput;

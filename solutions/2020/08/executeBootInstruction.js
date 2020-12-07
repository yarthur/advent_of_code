export default ([command, value], accumulator, bootLocation) => {
    switch (command) {
        case "acc":
            accumulator += value;
            bootLocation += 1;
            break;

        case "jmp":
            bootLocation += value;
            break;

        case "nop":
            bootLocation += 1;
            break;

        default:
            break;
    }

    // console.log(accumulator, bootLocation);
    return [accumulator, bootLocation];
};

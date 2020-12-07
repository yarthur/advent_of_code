import executeBootInstruction from "./executeBootInstruction.js";

export default (bootCode) => {
    const stack = new Set();

    let accumulator = 0,
        bootLocation = 0;

    while (
        stack.has(bootLocation) === false &&
        bootLocation < bootCode.length
    ) {
        stack.add(bootLocation);
        [accumulator, bootLocation] = executeBootInstruction(
            bootCode[bootLocation],
            accumulator,
            bootLocation
        );
    }

    const success = stack.has(bootLocation) === false;

    return [accumulator, success];
};

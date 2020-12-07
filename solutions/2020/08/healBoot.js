import bootUp from "./bootUp.js";

export default (bootVal, instruction, bootLocation, bootCode) => {
    // We've already successfully booted!
    if (bootVal[1] === true) {
        return bootVal;
    }

    // Don't mess with acc instructions.
    if (instruction[0] === "acc") {
        return bootVal;
    }

    const flipped = {
        jmp: "nop",
        nop: "jmp",
    };

    const fixedBoot = bootCode.map(([command, value], index) => {
        if (index !== bootLocation) {
            return [command, value];
        }

        return [flipped[command], value];
    });

    return bootUp(fixedBoot);
};

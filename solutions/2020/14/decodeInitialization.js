import * as bitInt from "./bitInt.js";

export const version1 = (initializationProgram) => {
    let mask = new Map();

    return initializationProgram.reduce(
        (completedInitialization, [action, value]) => {
            if (action === "mask") {
                mask = value.split("").reduce((newMask, val, address) => {
                    if (val !== "X") {
                        newMask.set(address, val);
                    }

                    return newMask;
                }, new Map());

                return completedInitialization;
            }

            const address = value[0];
            const memValue = bitInt.encode(value[1], 36);

            const maskedValue = memValue.split("");

            mask.forEach((val, addr) => {
                maskedValue[addr] = val;
            });

            completedInitialization.set(
                address,
                bitInt.decode(maskedValue.join(""))
            );

            return completedInitialization;
        },
        new Map()
    );
};

export const version2 = (initializationProgram) => {
    let mask = "00";

    return initializationProgram.reduce((memory, [action, value]) => {
        if (action === "mask") {
            mask = value;

            return memory;
        }

        const addresses = getMaskedAddresses(mask, bitInt.encode(value[0], 36));

        for (let addr of addresses) {
            memory.set(bitInt.decode(addr), value[1]);
        }

        return memory;
    }, new Map());
};

const getMaskedAddresses = (
    mask,
    originalAddress,
    addressAccumulator = new Set()
) => {
    const addrBitInt = bitInt.encode(originalAddress, 36);

    const maskedAddr = addrBitInt.split("").reduce((addrStr, bit, index) => {
        const maskChar = mask.charAt(index);

        if (maskChar === "0") {
            return addrStr + bit;
        }

        return addrStr + maskChar;
    }, "");

    const getAddresses = (addrSet, address) => {
        if (address.includes("X") === true) {
            return [0, 1].reduce((set, flip) => {
                return getAddresses(set, address.replace("X", flip));
            }, addressAccumulator);
        }

        addrSet.add(address);

        return addrSet;
    };

    return getAddresses(addressAccumulator, maskedAddr);
};

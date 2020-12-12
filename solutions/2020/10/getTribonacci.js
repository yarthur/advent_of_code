export default (index) => {
    if (index < 0) {
        throw "Index argument must be > 0.";
    }

    if (Math.floor(index) !== index) {
        throw "Index argument must be an integer.";
    }

    const seed = [0, 1, 1];

    if (index < 3) {
        return seed[index];
    }

    for (let sequence = 2; sequence < index; sequence += 1) {
        let newVal = seed.reduce((newTerm, term) => {
            return newTerm + term;
        }, 0);

        // append new value to seed array.
        seed.push(newVal);
        // kick out lowest value in seed array.
        seed.shift();
    }

    return seed[2];
};

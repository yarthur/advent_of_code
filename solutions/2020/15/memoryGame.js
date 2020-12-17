export default (startingNumbers, maxRounds = 100) => {
    const memMap = new Map();
    let round = startingNumbers.length;
    let previousNumber = startingNumbers.pop();

    startingNumbers.forEach((num, index) => {
        memMap.set(num, index + 1);
    });

    for (; round < maxRounds; round += 1) {
        if (memMap.has(previousNumber)) {
            let lastRound = memMap.get(previousNumber);
            memMap.set(previousNumber, round);
            previousNumber = round - lastRound;
        } else {
            memMap.set(previousNumber, round);
            previousNumber = 0;
        }
    }

    return previousNumber;
};

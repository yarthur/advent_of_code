export default (adapters) => {
    const diffMap = new Map([
        [1, 0],
        [2, 0],
        [3, 0],
    ]);

    return adapters.reduce((diffs, output, index, adapters) => {
        if (index === 0) {
            return diffs;
        }

        const previousOutput = adapters[index - 1];
        const currentDiff = output - previousOutput;

        const diffCount = diffs.get(currentDiff) + 1;

        diffs.set(currentDiff, diffCount);

        return diffs;
    }, diffMap);
};

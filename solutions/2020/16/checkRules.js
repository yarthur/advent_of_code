export default (value, rules) => {
    return Object.keys(rules).filter((rule) => {
        const ranges = rules[rule];

        const checks = ranges.filter(([floor, ceiling]) => {
            return value >= floor && value <= ceiling;
        });

        return checks.length !== 0;
    });
};

const findTotalPossibleContents = (rules, container) => {
    const ruleSet = rules.get(container);

    if (ruleSet.totalContents !== undefined) {
        return ruleSet.totalContents;
    }

    const childContents = Object.keys(ruleSet.contains).map((contained) => {
        return findTotalPossibleContents(rules, contained);
    });

    const totalCount = Object.keys(ruleSet.contains).reduce(
        (count, containerName, index) => {
            const containerCount = ruleSet.contains[containerName];

            return (
                count + containerCount + containerCount * childContents[index]
            );
        },
        0
    );

    ruleSet.totalContents = totalCount;
    rules.set(container, ruleSet);

    return totalCount;
};

export default findTotalPossibleContents;

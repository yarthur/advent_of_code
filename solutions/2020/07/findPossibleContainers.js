const findPossibleContainers = (
    rules,
    containedName,
    containerSet = new Set()
) => {
    const { containedBy } = rules.get(containedName);

    Array.from(containedBy).reduce((set, name) => {
        containerSet.add(name);
        return findPossibleContainers(rules, name, containerSet);
    }, containerSet);

    return containerSet;
};

export default findPossibleContainers;

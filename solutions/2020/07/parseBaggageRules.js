export default (input) => {
    const ruleTemplate = () => {
        return {
            contains: {},
            containedBy: new Set(),
        };
    };

    const parseRule = (ruleMap, rule) => {
        const [container, contained] = rule.split(" bags contain ");

        const containerRule = ruleMap.get(container) || ruleTemplate();
        contained.split(", ").forEach((containedBag) => {
            if (containedBag === "no other bags.") {
                return;
            }

            const { 1: containedQty, 2: containedName } = containedBag.match(
                /(\d*) (.*) bag/
            );

            containerRule.contains[containedName] = containedQty * 1;

            const containedRule = ruleMap.get(containedName) || ruleTemplate();

            containedRule.containedBy.add(container);

            ruleMap.set(containedName, containedRule);
        });

        ruleMap.set(container, containerRule);

        return ruleMap;
    };

    return input.split("\n").reduce(parseRule, new Map());
};

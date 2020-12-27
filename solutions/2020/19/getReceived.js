export default (input) => {
    const [rulesInput, messageInput] = input.split("\n\n");

    const rules = rulesInput.split("\n").reduce((rules, rule) => {
        const [keyStr, value] = rule.split(": ");

        const key = parseInt(keyStr, 0);

        if (value.includes('"') === true) {
            rules.set(key, value.replace(/"/g, ""));

            return rules;
        }

        const ruleSet = value.split(" | ").map((subRule) => {
            return subRule.split(" ").map((ruleNum) => {
                return parseInt(ruleNum, 10);
            });
        });

        rules.set(key, ruleSet);

        return rules;
    }, new Map());

    const messages = messageInput.split("\n");

    return { rules, messages };
};

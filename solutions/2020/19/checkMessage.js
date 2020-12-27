const validateMessage = (message, rules, ruleToCheck = 0) => {
    const rule = rules.get(ruleToCheck);

    if (typeof rule !== "string") {
        let validMessage = false;

        rule.forEach((ruleSet) => {
            if (validMessage !== false) {
                return;
            }

            validMessage = ruleSet.reduce((validMsg, subRule) => {
                if (validMsg === false) {
                    return validMsg;
                }

                const ruleCheck = validateMessage(
                    message.slice(validMsg.length),
                    rules,
                    subRule
                );

                return ruleCheck === false ? ruleCheck : validMsg + ruleCheck;
            }, "");
        });

        return validMessage;
    }

    const charCheck = message.slice(0, 1);

    return charCheck === rule ? charCheck : false;
};

export default (message, rules) => {
    const validMessage = validateMessage(message, rules);

    return validMessage && validMessage === message;
};

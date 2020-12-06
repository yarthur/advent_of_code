export default (input) => {
    const groupAnswers = input.split("\n\n");

    const uniqueAnswers = (set, individual) => {
        individual.split("").forEach((answer) => {
            set.add(answer);
        });

        return set;
    };

    const findUnanimousAnswers = (answerSet, answers) => {
        return Array.from(answerSet).filter((answer) => {
            return answers.every((individualAnswers) => {
                return individualAnswers.includes(answer);
            });
        });
    };

    return groupAnswers.map((group) => {
        const cleanedAnswers = group.split("\n");

        const groupAnswers = cleanedAnswers.reduce(uniqueAnswers, new Set());

        return {
            total: groupAnswers,
            unanimous: findUnanimousAnswers(groupAnswers, cleanedAnswers),
        };
    });
};

export default function (inputs) {
    var steps = inputs.split("\n").reduce(function (steps, stepString) {
        let [
            // eslint-disable-next-line no-unused-vars
            x,
            dependency,
            key,
        ] = /^Step ([A-Z]) must be finished before step ([A-Z]) can begin\.$/.exec(
            stepString
        );

        let stepIndex = steps.reduce(function (stepIndex, step, currentIndex) {
            if (
                steps.filter(function (otherstep) {
                    return otherstep.key === dependency;
                }).length === 0
            ) {
                steps.push({
                    key: dependency,
                    dependencies: [],
                });
            }

            if (step.key === key) {
                step.dependencies.push(dependency);
                stepIndex = currentIndex;
            }

            return stepIndex;
        }, -1);

        if (stepIndex === -1) {
            steps.push({
                key: key,
                dependencies: [dependency],
            });
        }

        return steps;
    }, []);

    return steps.sort(function (a, b) {
        let sortOrder = 0;

        if (a.key > b.key) {
            sortOrder = 1;
        } else if (a.key < b.key) {
            sortOrder = -1;
        }

        return sortOrder;
    });
}

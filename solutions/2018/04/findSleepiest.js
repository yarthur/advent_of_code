export default function (sleepLog) {
    var sleepiest = Object.entries(sleepLog).reduce(function (
        [defenderKey, defender],
        [contenderKey, contender]
    ) {
        if (contender.count > defender.count) {
            return [contenderKey, contender];
        }

        return [defenderKey, defender];
    });

    return sleepiest[0];
}

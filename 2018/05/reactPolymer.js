export default function (polymer, exclusion = "") {
    var units = polymer.split(""),
        fullyReacted = [""];

    while (units.length > 1) {
        if (units[0].toUpperCase() === exclusion.toUpperCase()) {
            units.shift();

            if (fullyReacted.length > 0) {
                units.unshift(fullyReacted.pop());
            }
        } else if (
            units[0] !== units[1] &&
            units[0].toUpperCase() === units[1].toUpperCase()
        ) {
            units = units.slice(2);

            if (fullyReacted.length > 0) {
                units.unshift(fullyReacted.pop());
            }
        } else {
            fullyReacted.push(units.shift());
        }
    }

    if (units[0].toUpperCase() === exclusion.toUpperCase()) {
        units[0] = "";
    }

    return fullyReacted.join("") + units[0];
}

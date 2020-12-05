export default function (polymer) {
    var units = polymer.split("");
    return units.reduce(function (u, unit) {
        let UNIT = unit.toUpperCase();

        if (u.includes(UNIT) === false) {
            u.push(UNIT);
        }

        return u;
    }, []);
}

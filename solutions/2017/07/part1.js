import generateChildParents from "./generateChildParents.js";

var part1 = function (towers) {
    var childParents = generateChildParents(towers),
        ultimateParent = [];

    ultimateParent = Object.keys(towers).filter(function (child) {
        return Object.keys(childParents).indexOf(child) === -1;
    });

    return ultimateParent[0];
};

export default part1;

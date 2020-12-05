var generateChildParents = function (towers) {
    var childParents = {};

    Object.entries(towers).forEach(function (tower) {
        tower[1].children.forEach(function (child) {
            childParents[child] = tower[0];
        });
    });

    return childParents;
};

export default generateChildParents;

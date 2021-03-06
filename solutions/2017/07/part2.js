import part1 from "./part1.js";
import generateChildParents from "./generateChildParents.js";

var towers;

var findImbalance = function findImbalance(tower) {
    var imbalance = null;
    var parentTower = towers[tower];
    var imbalancedChild = parentTower.children.filter(function (child) {
        return towers[child].balanced === false;
    });

    if (imbalancedChild.length > 0) {
        console.log(imbalancedChild);
        imbalance = findImbalance(imbalancedChild[0]);
        // } else {
        // 	let childWeights = parentTower.children.reduce(function (weights, child) {
        // 		var cW = towers[child].weight;
        // 		if (weights[cW] === undefined) {
        // 			weights[cW] = 1;
        // 		} else {
        // 			weights[cW] += 1;
        // 		}
        // 		return weights;
        // 	}, {});

        // 	console.log(childWeights);

        // 	for (let weights in childWeights) {
        // 		if (childWeights[weights] === 1) {
        // 			return true;
        // 		}
        // 	}
    }

    return imbalance;
};

var restoreBalance = function (imbalance) {
    var childParents = generateChildParents(towers),
        parentProgram = childParents[imbalance],
        badWeight = towers[imbalance].weight,
        balancedChildren,
        goodWeight;

    balancedChildren = towers[parentProgram].children.filter(function (child) {
        return towers[child].weight !== badWeight;
    });

    goodWeight = towers[imbalance].children.reduce(function (weight, child) {
        let childWeight = towers[child].weight;
        console.log(child, childWeight, weight - childWeight);
        return weight - childWeight;
    }, towers[balancedChildren[0]].weight);

    return goodWeight;
};

var part2 = function (towersArg) {
    towers = towersArg;
    var bottomProgram = part1(towers);
    var imbalance = findImbalance(bottomProgram);

    return restoreBalance(imbalance);
};

export default part2;

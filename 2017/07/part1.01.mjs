// import towers from './towers.mjs';
var towers = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;

var towersArr = towers.trim().split('\n');

var buildTowerTree = function (towers) {
	let towersArr = [];
	
	let buildBranch = function(tower, parIndex) {
		if (tower !== null &&
			Array.isArray(tower[2]) === true) {
			tower[2] = tower[2].map(function (childKey) {
				return towersArr.filter(function (branch, index) {
					if (Array.isArray(branch) === true &&
						branch[0] === childKey) {
						towersArr[index] = null;
						return buildBranch(branch);
					}
				});
			});

			towersArr[parIndex] = tower;
		}
		
		return tower;
	}

	towers.trim().split('\n').forEach(function (tower, index) {
		let [name, weight, , ...children] = tower.split(' ');

		weight = weight.replace(/\((\d*)\)/, '$1');

		children = children.map(function (child) {
			return child.replace(',', '');
		});

		towersArr[index] = [name, weight * 1, children];
	});

	towersArr.reduce(function (tA, tower, index) {
		return buildBranch(tower, index);
	}, towersArr);

	return towersArr;

};

console.log(buildTowerTree(towers));

var buildTowerTree = function (obj) {
	var test = [];
	let collapseChildren = function (parentArr, childKey) {
		console.log(parentArr, childKey);

		let child = obj[childKey];
		console.log('***');
		console.dir(child);
		console.log('***');
		let childChildren = child[2];

		if (childChildren !== undefined) {
			let childTree = childChildren.reduce(collapseChildren, []);

			child[2] = childTree;
			child[1] = childTree.reduce(function(weight, child) {
					return weight += child[1];
				},
				child[1]
			);

		}
		// if (childKey === 'pbga') {
		// 	console.log(child);
		// }

		parentArr.push(child);

		delete(obj[childKey]);

		return parentArr;
	};

	Object.entries(obj).forEach(function([branchKey]) {
		// console.log('******************************');
		// console.dir(obj);
		// console.log('==============================');
		let branch = obj[branchKey];

		if (branch !== undefined &&
			branch[2].length !== 0
		) {
			branch[2] = branch[2].reduce(collapseChildren, []);
			obj[branchKey] = branch;

		}
	});

	// console.dir(obj);
	return obj;
};

var part1 = function () {
	var towerObj = buildTowerObj(towersArr),
		towerTree = buildTowerTree(towerObj);

	return towerTree;
}

// part1(towersArr);

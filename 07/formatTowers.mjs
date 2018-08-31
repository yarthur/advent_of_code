var formatTowers = function (towersString) {
	var towersArr = towersString.split('\n'),
		towerObj = {};

	towersArr.forEach(function (tower) {
		let towerParts = tower.split(' -> ');
		let towerParent = towerParts[0]
			.split(' ')[0];

		let towerWeight = /\((\d*)\)/.exec(towerParts[0]) || [0, 0];

		let towerChildren = (towerParts[1] !== undefined) ?
				towerParts[1].trim().split(', ') :
				[];

		if (towerParts[0] !== '') {
			towerObj[towerParent] = {
				weight: Number(towerWeight[1]),
				children: towerChildren
			};
		}
	});

	return towerObj;
};

export default formatTowers;

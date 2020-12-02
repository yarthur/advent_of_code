const calcManhattanDistance = function ({ x: xA, y: yA }, { x: xB, y: yB }) {
	return Math.abs(xA - xB) + Math.abs(yA - yB);
};

const findInfiniteCoords = function (coordinates, { x: xLimit, y: yLimit }) {
	console.log(xLimit);

	return coordinates.filter(function ({ x, y }) {
		return (xLimit.includes(x) === true) || (yLimit.includes(y) === true);
	});
};

export default function (coordinates, {x: xLimit, y: yLimit}) {
	console.log(xLimit);
	var infiniteCoords = findInfiniteCoords(coordinates, { x: xLimit, y: yLimit }),
		firstCoord = coordinates.shift(),
		map = [];

	console.log(infiniteCoords);
	for (let x = xLimit[0]; x < xLimit[1]; x += 1) {
		for (let y = yLimit[0]; y < yLimit[1]; y += 1) {
			let distance = calcManhattanDistance(firstCoord, { x, y });

			map[`${x}:${y}`] = coordinates.reduce(function (defender, contender) {
				let newDistance = calcManhattanDistance(contender, { x, y });

				if (newDistance < defender[0]) {
					defender = [newDistance, contender];
				} else if (newDistance === defender[0]) {
					defender[1] = null;
				}

				return defender;
			}, [distance, firstCoord]);
		}
	}

	console.log(map);
	return {};
}

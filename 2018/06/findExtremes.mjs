export default function (coordinates) {
	let initialVals = coordinates.shift(),
		x = [initialVals.x, initialVals.x],
		y = [initialVals.y, initialVals.y];

	coordinates.forEach(function ({x: newX, y: newY}) {
		if (newX < x[0]) {
			x[0] = newX;
		} else if (newX > x[1]) {
			x[1] = newX;
		}

		if (newY < y[0]) {
			y[0] = newY;
		} else if (newY > y[1]) {
			y[1] = newY;
		}
	});

	return { x, y };
}

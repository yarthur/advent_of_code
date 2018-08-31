var cycleScanners = function (layers) {
	return layers.map(function (layer) {
		var depth = layer.depth,
			scanDirection = layer.scanDirection || 1,
			newPosition = layer.scannerPosition + scanDirection;

		if (depth > 1) {
			if (newPosition > depth) {
				scanDirection = -1;
				newPosition -= 2;
			} else if (newPosition <= 0) {
				scanDirection = 1;
				newPosition = 2;
			}
		}

		return {
			depth: depth,
			scanDirection: scanDirection,
			scannerPosition: newPosition
		};
	});
};

export default cycleScanners;

import cycleScanners from './cycleScanners.js';

var calculateSeverity = function (layers) {
	var layerCount = layers.length,
		severity = 0;

	for (let myPosition = 0; myPosition < layerCount; myPosition += 1) {
		let currentLayer = layers[myPosition];

		if (currentLayer.scannerPosition === 1) {
			severity += (myPosition * currentLayer.depth);
		}

		layers = cycleScanners(layers);
	}

	return severity;
};

export default calculateSeverity;

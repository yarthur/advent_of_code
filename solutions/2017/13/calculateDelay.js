import cycleScanners from "./cycleScanners.js";
import calculateSeverity from "./calculateSeverity.js";

var calculateDelay = function calculateDelay(layers) {
    var delay = 0;

    for (
        let severity = calculateSeverity(layers);
        severity !== 0;
        severity = calculateSeverity(layers)
    ) {
        delay += 1;
        layers = cycleScanners(layers);
    }

    return delay;
};

export default calculateDelay;

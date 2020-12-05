var processInput = function (input) {
    var layersArr = input.split("\n"),
        layers = [],
        namedLayers,
        greatestLayer;

    namedLayers = layersArr.map(function (layerData) {
        var layerParts = layerData.split(":"),
            layer = Number(layerParts[0]);

        layers[layer] = {
            depth: Number(layerParts[1]),
            scannerPosition: 1,
        };
        return layer;
    });

    namedLayers.sort(function (a, b) {
        return a - b;
    });

    greatestLayer = namedLayers[namedLayers.length - 1];

    for (let layer = 0; layer <= greatestLayer; layer += 1) {
        if (layers[layer] === undefined) {
            layers[layer] = {
                depth: 0,
            };
        }
    }

    return layers;
};

export default processInput;

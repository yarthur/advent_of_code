import * as coordinateUtils from "./coordinateUtils.js";

const test = (ranges, seedCoord = {}) => {
    const [coordName, [floor, ceiling]] = ranges.shift();

    const baseCoord = { ...seedCoord };
    const currentSeed = baseCoord[coordName] || 0;

    const coordArr = [...Array(ceiling - floor + 1).keys()].map((x) => {
        return x + currentSeed + floor;
    });

    if (ranges.length > 0) {
        return coordArr.reduce((coordGroup, currentCoord) => {
            baseCoord[coordName] = currentCoord;
            const newGroup = test([...ranges], baseCoord);

            return new Set([...coordGroup, ...newGroup]);
        }, new Set());
    }

    return coordArr.reduce((coordGroup, currentCoord) => {
        baseCoord[coordName] = currentCoord;

        coordGroup.add(coordinateUtils.encode(baseCoord));

        return coordGroup;
    }, new Set());
};

export default (model) => {
    const outerEdges = getOuterEdges(model);

    const coordGroup = test(Array.from(outerEdges.entries()));

    return Array.from(coordGroup.values()).reduce((newModel, coordKey) => {
        const activeNeighbors = getNeighborInfo(model, coordKey);
        const inModel = model.has(coordKey);

        if (inModel === false && activeNeighbors === 3) {
            newModel.add(coordKey);
        }

        if (inModel === true && activeNeighbors >= 2 && activeNeighbors <= 3) {
            newModel.add(coordKey);
        }

        return newModel;
    }, new Set());
};

const getNeighborInfo = (model, coordKey) => {
    const coordinates = coordinateUtils.decode(coordKey);

    const neighborMod = [-1, 1];
    const neighborGroup = Object.keys(coordinates).reduce((nG, key) => {
        nG.set(key, neighborMod);
        return nG;
    }, new Map());

    const coordGroup = test(
        Array.from(neighborGroup.entries()),
        coordinates,
        true
    );

    return [...coordGroup].reduce((activeCount, neighborKey) => {
        // don't count the actual coordinate
        if (neighborKey === coordKey) {
            return activeCount;
        }

        if (model.has(neighborKey) === true) {
            activeCount += 1;
        }

        return activeCount;
    }, 0);
};

const getOuterEdges = (model) => {
    const coordinates = Array.from(model.values());

    const initalBoundaries = coordinateUtils.decode(coordinates.pop());
    const outerEdges = new Map();

    for (const [key, value] of Object.entries(initalBoundaries)) {
        outerEdges.set(key, [value - 1, value + 1]);
    }

    return coordinates.reduce((outerEdges, coordinateString) => {
        const coordinates = coordinateUtils.decode(coordinateString);

        for (const [key, value] of Object.entries(coordinates)) {
            let [floor, ceiling] = outerEdges.get(key);
            if (value >= ceiling) {
                ceiling = value + 1;
            }

            if (value <= floor) {
                floor = value - 1;
            }

            outerEdges.set(key, [floor, ceiling]);
        }

        return outerEdges;
    }, outerEdges);
};

import { encode as encodeCoordinates } from "./coordinateUtils.js";

export default (input, grid = ["x", "y", "z"]) => {
    const coordinateTemplate = grid.reduce((template, coordKey) => {
        template[coordKey] = 0;

        return template;
    }, []);

    return input.split("\n").reduce((dimmension, row, y) => {
        coordinateTemplate.y = y;

        return row.split("").reduce((dimmension, cube, x) => {
            coordinateTemplate.x = x;

            if (cube === "#") {
                dimmension.add(encodeCoordinates(coordinateTemplate));
            }

            return dimmension;
        }, dimmension);
    }, new Set());
};

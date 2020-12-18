export const decode = (coordinateString) => {
    return coordinateString.split(",").reduce((coordinates, val) => {
        const coordKey = val.slice(0, 1);
        const coordValue = val.slice(1);

        coordinates[coordKey] = parseInt(coordValue, 10);

        return coordinates;
    }, {});
};

export const encode = (coordinates) => {
    const coordArr = [];
    Object.entries(coordinates).forEach(([key, value]) => {
        coordArr.push(`${key}${value}`);
    });

    return coordArr.join(",");
};

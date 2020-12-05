export default (routeMap, right, down) => {
    const positions = [];

    const run = (xPos, mapLine) => {
        return (xPos + right) % mapLine.length;
    };

    let y = down,
        x = 0;

    while (routeMap[y] !== undefined) {
        x = run(x, routeMap[y]);

        positions.push(routeMap[y][x]);

        y += down;
    }

    return positions;
};

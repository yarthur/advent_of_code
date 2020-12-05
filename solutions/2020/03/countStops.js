export default (route) => {
    const stopCounts = new Map([
        [".", 0],
        ["#", 0],
    ]);

    route.forEach((stop) => {
        stopCounts.set(stop, stopCounts.get(stop) + 1);
    });

    return stopCounts;
};

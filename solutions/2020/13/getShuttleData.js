export default (input) => {
    const [earliestDeparture, busRoster] = input.split("\n");

    const busList = busRoster.split(",").reduce((list, bus, busOffset) => {
        const busId = bus * 1;

        if (isNaN(busId) === false) {
            list.set(busId, busOffset);
        }
        return list;
    }, new Map());

    return {
        earliestDeparture: earliestDeparture * 1,
        busList,
    };
};

import getShuttleData from "./getShuttleData.js";
import findSoonestDeparture from "./findSoonestDeparture.js";
import chineseRemainderTheorem from "./chineseRemainderTheorem.js";

export const part1 = (input) => {
    const shuttleData = getShuttleData(input);

    const [soonestBus, departureTime] = findSoonestDeparture(shuttleData);

    return soonestBus * (departureTime - shuttleData.earliestDeparture);
};

export const part2 = (input) => {
    const { busList } = getShuttleData(input);

    const busIds = Array.from(busList.keys());
    const scheduleSet = busIds.map((busId) => {
        const mod = busId - busList.get(busId);

        return [mod, busId];
    });

    return chineseRemainderTheorem(scheduleSet);
};

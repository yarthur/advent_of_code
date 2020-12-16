import findNextDeparture from "./findNextDeparture.js";

export default ({ earliestDeparture, busList }) => {
    const departureSchedule = Array.from(busList.keys()).reduce(
        (schedule, busId) => {
            schedule.set(busId, findNextDeparture(earliestDeparture, busId));

            return schedule;
        },
        new Map()
    );

    const soonestDepartingBus = Array.from(departureSchedule.keys()).reduce(
        (soonest, busId) => {
            if (soonest === -1) {
                return busId;
            }

            if (departureSchedule.get(soonest) > departureSchedule.get(busId)) {
                return busId;
            }

            return soonest;
        },
        -1
    );

    return [soonestDepartingBus, departureSchedule.get(soonestDepartingBus)];
};

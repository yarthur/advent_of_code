import { shuttleData } from "./testInput.js";
import findSoonestDeparture from "../findSoonestDeparture.js";

test("finds the next bus to depart after timestamp", () => {
    expect(findSoonestDeparture(shuttleData)).toEqual([59, 944]);
});

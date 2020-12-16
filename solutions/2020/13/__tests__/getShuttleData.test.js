import { input, shuttleData } from "./testInput.js";
import getShuttleData from "../getShuttleData.js";

test("parses the shuttle data correctly", () => {
    expect(getShuttleData(input)).toEqual(shuttleData);
});

import { input, passwordData } from "./testInput.js";
import parsePasswordData from "../parsePasswordData.js";

test("formats puzzle input as expected", () => {
    expect(parsePasswordData(input)).toEqual(passwordData);
});

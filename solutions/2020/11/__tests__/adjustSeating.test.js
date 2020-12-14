import { part1Changes, part2Changes } from "./testInput.js";
import adjustSeating from "../adjustSeating.js";

const part1Arrangements = [...part1Changes];
const part2Arrangements = [...part2Changes];

part1Arrangements.pop();
part2Arrangements.pop();

test("adjusts the seating correctly", () => {
    // test with part1 scenarios, change if 4 occupied
    part1Arrangements.forEach((current, index) => {
        expect(adjustSeating(current, 4)).toEqual(part1Changes[index + 1]);
    });

    // test with part2 scenarios, change if 5 occupied
    part2Arrangements.forEach((current, index) => {
        expect(adjustSeating(current, 5, "findVisiblyOccupied")).toEqual(
            part2Changes[index + 1]
        );
    });
});

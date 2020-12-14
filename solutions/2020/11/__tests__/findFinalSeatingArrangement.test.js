import { part1Changes, part2Changes } from "./testInput.js";
import findFinalSeatingArrangement from "../findFinalSeatingArrangement.js";

test("finds the final seating arrangement", () => {
    expect(findFinalSeatingArrangement(part1Changes[0], 4)).toEqual(
        part1Changes.slice(-1)[0]
    );

    expect(
        findFinalSeatingArrangement(part2Changes[0], 5, "findVisiblyOccupied")
    ).toEqual(part2Changes.slice(-1)[0]);
});

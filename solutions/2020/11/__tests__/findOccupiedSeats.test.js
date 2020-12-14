import { occupiedSeats } from "./testInput.js";
import {
    findAdjacentOccupied,
    findVisiblyOccupied,
} from "../findOccupiedSeats.js";

describe("findAdjacentOccupied", () => {
    test("finds the correct number of immediately adjacent occupied seats", () => {
        const arrangement = occupiedSeats[0].arrangement;
        const [rowNumber, seatNumber] = occupiedSeats[0].testCoordinates;
        const expected = occupiedSeats[0].adjacentlyOccupied;
        expect(
            findAdjacentOccupied(arrangement, rowNumber, seatNumber)
        ).toEqual(expected);
    });

    test("finds the correct number of visibly adjacent occupied seats", () => {
        occupiedSeats.forEach((scenario) => {
            const arrangement = scenario.arrangement;
            const [rowNumber, seatNumber] = scenario.testCoordinates;
            const expected = scenario.visiblyOccupied;
            expect(
                findVisiblyOccupied(arrangement, rowNumber, seatNumber)
            ).toEqual(expected);
        });
    });
});

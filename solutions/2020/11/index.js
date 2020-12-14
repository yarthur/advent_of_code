import getSeatLayout from "./getSeatLayout.js";
import findFinalSeatingArrangement from "./findFinalSeatingArrangement.js";
import countOccupiedSeats from "./countOccupiedSeats.js";

export const part1 = (input) => {
    const seatingArrangement = getSeatLayout(input);

    const finalArrangement = findFinalSeatingArrangement(seatingArrangement, 4);

    return countOccupiedSeats(finalArrangement);
};

export const part2 = (input) => {
    const seatingArrangement = getSeatLayout(input);

    const finalArrangement = findFinalSeatingArrangement(
        seatingArrangement,
        5,
        "findVisiblyOccupied"
    );

    return countOccupiedSeats(finalArrangement);
};

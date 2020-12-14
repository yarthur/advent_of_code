import * as findAdjacentOccupied from "./findOccupiedSeats.js";

export default (
    currentArrangement,
    flipOccupied,
    method = "findAdjacentOccupied"
) => {
    const findOccupiedMethod = findAdjacentOccupied[method];
    const newArrangement = currentArrangement.map((row, rowNumber) => {
        return row.map((seat, seatNumber) => {
            if (seat === ".") {
                return seat;
            }

            const occupiedAdjacentSeats = findOccupiedMethod(
                currentArrangement,
                rowNumber,
                seatNumber
            );

            if (occupiedAdjacentSeats === 0) {
                return "#";
            }

            if (occupiedAdjacentSeats >= flipOccupied) {
                return "L";
            }

            return seat;
        });
    });

    return newArrangement;
};

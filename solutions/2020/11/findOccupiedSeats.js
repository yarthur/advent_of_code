export const findAdjacentOccupied = (arrangement, rowNumber, seatNumber) => {
    const adjacenctIndices = [-1, 0, 1];

    return adjacenctIndices.reduce((occupiedSeats, rowChange) => {
        const adjRowNum = rowNumber + rowChange;

        // if the adjusted row doesn't exist
        if (adjRowNum < 0 || adjRowNum >= arrangement.length) {
            return occupiedSeats;
        }

        const adjacentRow = arrangement[adjRowNum];

        return adjacenctIndices.reduce((occupiedInRow, seatChange) => {
            // Don't check the current seat.
            if (rowChange === 0 && seatChange === 0) {
                return occupiedInRow;
            }

            const adjSeatNumber = seatNumber + seatChange;

            // if the adjusted seat doesn't exist.
            if (adjSeatNumber < 0 || adjSeatNumber >= adjacentRow.length) {
                return occupiedInRow;
            }

            if (adjacentRow[adjSeatNumber] === "#") {
                return occupiedInRow + 1;
            }

            return occupiedInRow;
        }, occupiedSeats);
    }, 0);
};

export const findVisiblyOccupied = (arrangements, rowNumber, seatNumber) => {
    const travelIncrements = [-1, 0, 1];

    return travelIncrements.reduce((occupiedSeats, rowChange) => {
        return travelIncrements.reduce((occupied, seatChange) => {
            // Don't check the current seat.
            if (rowChange === 0 && seatChange === 0) {
                return occupied;
            }

            let visibleRow = rowNumber,
                visibleSeat = seatNumber;

            for (;;) {
                visibleRow += rowChange;
                visibleSeat += seatChange;

                // check that row exists
                if (visibleRow < 0 || visibleRow >= arrangements.length) {
                    return occupied;
                }

                let rowToCheck = arrangements[visibleRow];

                // check that seat exists
                if (visibleSeat < 0 || visibleSeat >= rowToCheck.length) {
                    return occupied;
                }

                let seatToCheck = rowToCheck[visibleSeat];

                if (seatToCheck === "L") {
                    return occupied;
                }

                if (seatToCheck === "#") {
                    return occupied + 1;
                }
            }
        }, occupiedSeats);
    }, 0);
};

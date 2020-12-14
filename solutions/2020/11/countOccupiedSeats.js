export default (seatingArrangement) => {
    return seatingArrangement.reduce((unoccupiedSeats, row) => {
        return row.reduce((unoccupiedInRow, seat) => {
            if (seat === "#") {
                unoccupiedInRow += 1;
            }
            return unoccupiedInRow;
        }, unoccupiedSeats);
    }, 0);
};

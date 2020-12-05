export default (boardingPasses, highestSeatId) => {
    const seatIds = boardingPasses.map((pass) => {
        return pass.seatId;
    });

    for (let currentId = highestSeatId - 1; currentId > 0; currentId -= 1) {
        let mySeat = true;

        if (seatIds.includes(currentId) === true) {
            mySeat = false;
        }

        if (seatIds.includes(currentId + 1) === false) {
            mySeat = false;
        }

        if (seatIds.includes(currentId - 1) === false) {
            mySeat = false;
        }

        if (mySeat === true) {
            return currentId;
        }
    }

    return false;
};

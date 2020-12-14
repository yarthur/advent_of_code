import adjustSeating from "./adjustSeating.js";

const findFinalSeatingArrangement = (
    currentArrangement,
    flipOccupied,
    method = "findAdjacentOccupied"
) => {
    const newArrangement = adjustSeating(
        currentArrangement,
        flipOccupied,
        method
    );

    if (JSON.stringify(newArrangement) === JSON.stringify(currentArrangement)) {
        return newArrangement;
    }

    return findFinalSeatingArrangement(newArrangement, flipOccupied, method);
};

export default findFinalSeatingArrangement;

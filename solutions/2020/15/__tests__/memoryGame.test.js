import { startingNumbers } from "./testInput.js";
import memoryGame from "../memoryGame.js";

test("plays the game correctly", () => {
    expect(memoryGame(startingNumbers, 10)).toEqual(0);
});

import { bootCode, stepByStep } from "./testInput.js";
import executeBootInstruction from "../executeBootInstruction.js";

test("correctly executes the instructions", () => {
    stepByStep.reduce(
        ([accumulator, bootLocation], [expectedAccum, expectedLoc]) => {
            let [receivedAccum, receivedLoc] = executeBootInstruction(
                bootCode[bootLocation],
                accumulator,
                bootLocation
            );

            expect(receivedAccum).toEqual(expectedAccum);
            expect(receivedLoc).toEqual(expectedLoc);
            return [receivedAccum, receivedLoc];
        },
        [0, 0]
    );
});

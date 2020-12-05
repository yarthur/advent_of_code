import { steps, stepOrder } from "./sampleData";
import determineStepOrder from "../determineStepOrder";

test("determines the correct step order", function () {
    expect(determineStepOrder(steps)).toEqual(stepOrder);
});

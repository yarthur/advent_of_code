import getInputs from "../lib/getInputs.js";
import calculateBoxIDChecksum from "./calculateBoxIDChecksum.js";
import compareIds from "./compareIds.js";

const inputs = getInputs("02");

console.log(`Part one: ${calculateBoxIDChecksum(inputs)}`);
console.log(`Part two: ${compareIds(inputs)}`);

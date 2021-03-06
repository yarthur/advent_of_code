import parseFrequencyChanges from "./parseFrequencyChanges.js";
import modulateFrequency from "./modulateFrequency.js";

export default function (inputs, initial = 0) {
    var changes = parseFrequencyChanges(inputs);
    return changes.reduce(function (frequency, change) {
        return modulateFrequency(frequency, change);
    }, initial);
}

export default function (frequency, change, cb) {
    var changeVal = change[1] * 1;

    if (change[0] === "-") {
        changeVal *= -1;
    }

    let modulatedFrequency = frequency + changeVal;

    if (cb) {
        return cb(modulatedFrequency);
    } else {
        return modulatedFrequency;
    }
}

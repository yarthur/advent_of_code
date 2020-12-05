export default function (inputs) {
    return inputs.split("\n").map(function (coordinates) {
        let [x, y] = coordinates.split(", ");

        return { x: parseInt(x), y: parseInt(y) };
    });
}

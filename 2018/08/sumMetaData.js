var parseNodes = function (inputs, nodes = []) {
    let childCount = inputs.shift();

    for (let cv1 = 0; cv1 < childCount; cv1 += 1) {
        [inputs, nodes] = parseNodes(inputs, nodes);
    }
};

export default function (inputs) {
    const nodes = parseNodes(inputs.slice(" "));

    return nodes;
}

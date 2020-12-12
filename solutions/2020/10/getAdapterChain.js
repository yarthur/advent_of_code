export default (inputs) => {
    const outputs = inputs.split("\n");

    const orderedOutputs = outputs.sort((a, b) => {
        return a - b;
    });

    const adapterChain = orderedOutputs.map((value) => {
        return value * 1;
    });
    // add the outlet value
    adapterChain.unshift(0);

    //add the device's output value
    adapterChain.push(adapterChain[adapterChain.length - 1] + 3);

    return adapterChain;
};

const checkValidity = (addends, sum) => {
    let valid = false;

    for (
        let xIndex = 0;
        valid === false && xIndex < addends.length;
        xIndex += 1
    ) {
        let x = addends[xIndex],
            yArr = addends.slice(xIndex);

        for (
            let yIndex = 0;
            valid === false && yIndex < yArr.length;
            yIndex += 1
        ) {
            let y = yArr[yIndex];
            if (x + y === sum) {
                valid = x !== y;
            }
        }
    }

    return valid;
};

export default (data, preambleLength) => {
    const preamble = data.slice(0, preambleLength);
    const encryptedData = data.slice(preambleLength);

    let weakpoints = [...encryptedData].filter((point) => {
        if (checkValidity(preamble, point) === false) {
            return true;
        }

        preamble.shift();
        preamble.push(point);

        return false;
    });

    return {
        preamble: data.slice(0, preambleLength),
        encryptedData,
        weakpoints,
    };
};

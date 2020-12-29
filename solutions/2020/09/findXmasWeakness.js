export default (data, weakPoint) => {
    let weaknessSet = [];
    for (let start = 0; start < data.length; start += 1) {
        let setSum = data[start];
        let end = start + 1;

        for (true; setSum < weakPoint && end < data.length; end += 1) {
            setSum += data[end];
        }

        if (setSum === weakPoint) {
            weaknessSet = data.slice(start, end);

            start += data.length;
        }
    }

    const sortedWeaknessSet = weaknessSet.sort((a, b) => {
        return a - b;
    });

    return sortedWeaknessSet.pop() + sortedWeaknessSet.shift();
};

export default (input) => {
    const boardingPassData = input.split("\n");

    const computeBinaryPartitioning = (partition) => {
        const partitionSize = Math.pow(2, partition.length);

        const test = partition.reduce(
            ([floor, ceiling], node, index) => {
                let move = partitionSize / Math.pow(2, index + 1);

                if (node === true) {
                    floor += move;
                } else {
                    ceiling -= move;
                }

                return [floor, ceiling];
            },
            [0, partitionSize * 1]
        );

        return test[0];
    };

    const parseBoardingPass = (boardingPass) => {
        const rowData = [];
        const seatData = [];

        for (let index = 0; index < boardingPass.length; index += 1) {
            switch (boardingPass[index]) {
                case "F":
                    rowData.push(false);
                    break;

                case "B":
                    rowData.push(true);
                    break;

                case "L":
                    seatData.push(false);
                    break;

                case "R":
                    seatData.push(true);
                    break;

                default:
                    break;
            }
        }

        const passData = {
            row: computeBinaryPartitioning(rowData),
            seat: computeBinaryPartitioning(seatData),
        };

        passData.seatId = passData.row * 8 + passData.seat;

        return passData;
    };

    return boardingPassData.map(parseBoardingPass);
};

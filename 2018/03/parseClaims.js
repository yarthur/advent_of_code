export default function (inputs) {
    return inputs.split("\n").map(function (unparsedClaim) {
        let claimParts = /^#(\d*) @ (\d*),(\d*): (\d*)x(\d*)$/.exec(
            unparsedClaim
        );

        return {
            id: parseInt(claimParts[1]),
            x: parseInt(claimParts[2] * 1),
            y: parseInt(claimParts[3]),
            run: parseInt(claimParts[4]),
            rise: parseInt(claimParts[5]),
        };
    });
}

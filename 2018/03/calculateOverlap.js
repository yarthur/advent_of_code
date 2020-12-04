import parseClaims from './parseClaims.js';

export default function (inputs) {
	var claims = parseClaims(inputs),
		claimedSpaces = [],
		overlaps = [];

	claims.forEach(function ({x, y, run, rise}) {
		for (let cv1 = 0; cv1 < run; cv1 += 1) {
			for (let cv2 = 0; cv2 < rise; cv2 += 1) {
				let claimedSpace = `${x + cv1}x${y + cv2}`;

				if (claimedSpaces.includes(claimedSpace) === false) {
					claimedSpaces.push(claimedSpace);
				} else if (overlaps.includes(claimedSpace) === false) {
					overlaps.push(claimedSpace);
				}
			}
		}
	})

	return overlaps;
};

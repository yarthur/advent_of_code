import parseClaims from "./parseClaims.js";

export default function (overlaps, inputs) {
    var claims = parseClaims(inputs);

    for (let claim of claims) {
        let pristine = true;
        for (let cv1 = 0; cv1 < claim.run; cv1 += 1) {
            for (let cv2 = 0; cv2 < claim.rise; cv2 += 1) {
                let claimedSpace = `${claim.x + cv1}x${claim.y + cv2}`;

                if (overlaps.includes(claimedSpace) === true) {
                    pristine = false;
                    break;
                }
            }

            if (pristine === false) {
                break;
            }
        }

        if (pristine === true) {
            return claim.id;
        }
    }
}

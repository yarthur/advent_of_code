/**
 * a theorem which gives a unique solution to simultaneous linear congruences
 * with coprime moduli. In its basic form, the Chinese remainder theorem will
 * determine a number ppp that, when divided by some given divisors, leaves
 * given remainders.
 *
 * A pretty good explainer: https://www.youtube.com/watch?v=zIFehsBHB8o
 *
 */

// solving for x = b % n, given === [ b, n ]
export default (given) => {
    const N = given.reduce((N, { 1: n }) => {
        return N * n;
    }, 1);

    const sigma = given.map(([bi, ni]) => {
        const Ni = N / ni;
        return {
            bi,
            Ni: Ni,
            xi: getInverse(Ni, ni),
        };
    });

    const x = sigma.reduce((x, { bi, Ni, xi }) => {
        const biNixi = BigInt(BigInt(bi) * BigInt(Ni) * BigInt(xi));
        return x + biNixi;
    }, BigInt(0));

    return x % BigInt(N);
};

/**
 * I don't have a good explanation of how to get the inverse. 😔
 */
const getInverse = (numerator, remainder) => {
    const b = numerator % remainder;

    for (let inverse = 1; inverse < remainder; inverse += 1) {
        if ((b * inverse) % remainder === 1) {
            return inverse;
        }
    }

    return 1;
};

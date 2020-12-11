import formatTowers from "./formatTowers.js";
import p1 from "./part1.js";
// import p2 from "./part2.js";

export const part1 = (input) => {
    var formattedTowers = formatTowers(input);

    return p1(formattedTowers);
};

// export const part2 = (input) => {
//     var formattedTowers = formatTowers(input);

//     p1(formattedTowers);

//     return p2(formattedTowers);
// };

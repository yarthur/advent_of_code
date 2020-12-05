import calculateBoxIDChecksum from "../../lib/calculateBoxIDChecksum";

const input = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;

console.log(calculateBoxIDChecksum(input) === 12);

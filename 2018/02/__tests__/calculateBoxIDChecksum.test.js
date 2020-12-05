import calculateBoxIDChecksum from "../calculateBoxIDChecksum";

const input = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;

test("calculates the box id checksums", function () {
    expect(calculateBoxIDChecksum(input)).toBe(12);
});

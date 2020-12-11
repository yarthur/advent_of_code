import compareIds from "../../lib/compareIds";

const inputs = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;

console.log(compareIds(inputs) === "fgij");

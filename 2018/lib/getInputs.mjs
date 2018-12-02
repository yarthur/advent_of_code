import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(import.meta.url.substring(7));

export default function (day) {
	var inputAddr = path.join(__dirname, `/../inputs/${ day }.txt`);

	return fs.readFileSync(inputAddr, 'utf8').trim();
};

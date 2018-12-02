export default function (changes) {
	let changeArr = changes.split('\n');

	return changeArr.map(function (change) {
		let changeParts = change.match(/([+-]?)(\d*)/);

		return [changeParts[1], changeParts[2]];
	});
}

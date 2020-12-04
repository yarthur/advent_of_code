var parseNodes = function (inputs, nodes = []) {
	let childCount = inputs.shift(),
		metaDataCount = inputs.shift(),
		children = [];

	for (let cv1 = 0; cv1 < childCount; cv1 += 1) {
		[inputs, nodes, children] = parseNodes(inputs, nodes);
	}
	
	
};

export default function (inputs) {
	nodes = parseNodes(inputs.slice(' '));
}

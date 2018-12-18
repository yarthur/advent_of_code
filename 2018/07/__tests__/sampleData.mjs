const inputs = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`;

const steps = [
	{ "key": "A", "dependencies": ["C"] },
	{ "key": "B", "dependencies": ["A"] },
	{ "key": "C", "dependencies": [] },
	{ "key": "D", "dependencies": ["A"] },
	{ "key": "E", "dependencies": ["B", "D", "F"] },
	{ "key": "F", "dependencies": ["C"] }
];

const stepOrder = 'CABDFE';

export {
	inputs,
	steps,
	stepOrder
};

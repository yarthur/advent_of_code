const inputs = `1, 1
1, 6
8, 3
3, 4
5, 5
8, 9`;

const coordinates = [
	{
		x: 1,
		y: 1
	},
	{
		x: 1,
		y: 6
	},
	{
		x: 8,
		y: 3
	},
	{
		x: 3,
		y: 4
	},
	{
		x: 5,
		y: 5
	},
	{
		x: 8,
		y: 9
	}
]

const extremes = {
	x: [1, 8],
	y: [1, 9]
}

export {
	inputs,
	coordinates,
	extremes
}

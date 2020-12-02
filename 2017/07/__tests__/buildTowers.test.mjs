// import { programs } from './sampleData';
import buildTowers from '../buildTowers';
export const programs = [
	{ id: 'xhth', weight: 57, children: [] },
	{ id: 'ktlj', weight: 57, children: [] },
	{ id: 'fwft', weight: 72, children: ['ktlj', 'cntj', 'xhth'] },
	{ id: 'cntj', weight: 57, children: [] }
 ];

const towers = [
	{
		key: 'fwft',
		programWeight: 72,
		children: [
			{
				key: 'ktlj',
				programWeight: 57,
				children: []
			},
			{
				key: 'cntj',
				programWeight: 57,
				children: []
			},
			{
				key: 'xhth',
				programWeight: 57,
				children: []
			}
		]
	}
];

test('builds the towers out', function () {
	expect(buildTowers(programs)).toEqual(towers);
});

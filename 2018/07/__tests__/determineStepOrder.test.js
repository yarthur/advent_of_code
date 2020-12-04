import { steps, stepOrder } from './sampleData';
import determineStepOrder from '../determineStepOrder';

test('', function () {
	expect(determineStepOrder(steps)).toEqual(stepOrder);
});

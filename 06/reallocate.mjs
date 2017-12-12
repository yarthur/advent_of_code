var reallocate = function (memoryBanks) {
	var memoryBankCount = memoryBanks.length,
		snapshots = new Set(),
		reallocationCount = 0;
	while ((snapshots.has(memoryBanks.join(',')) !== true)) {  // snapshots will be one more than snapshots, due to the original configuration (pre-reallocation).
		snapshots.add(memoryBanks.join(','));

		let {heavyVal, allocationIndex} = memoryBanks.reduce(function (retObj, bankVal, index)  {
			if (bankVal > retObj.heavyVal) {
				retObj = {
					heavyVal: bankVal,
					allocationIndex: index
				};
			}

			return retObj;
		}, {heavyVal: 0, allocationIndex: -1});

		memoryBanks[allocationIndex] = 0; // pull value from heaviest index

		for (heavyVal; heavyVal > 0; heavyVal -= 1) {
			allocationIndex += 1;

			if (allocationIndex >= memoryBankCount) {
				allocationIndex = 0;
			}

			memoryBanks[allocationIndex] += 1;
		}

		reallocationCount += 1;
	}

	return {
		memoryBanks,
		reallocationCount
	}
};

export default reallocate;


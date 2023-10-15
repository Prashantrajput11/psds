function twoSumBetter(arr, target) {
	const collection = new Map();

	for (let i = 0; i < arr.length; i++) {
		const compliment = target - arr[i];

		if (collection.has(compliment)) {
			return [collection.get(compliment), i];
		} else {
			collection.set(arr[i], i);
		}
	}
}

// console.log(twoSumBetter([1, 3, 4, 6], 10));

function twoSumOptimised(arr, target) {
	let sortedArr = arr.sort((a, b) => a - b);
	let left = 0;
	let right = sortedArr.length - 1;
	while (left < right) {
		if (sortedArr[left] + sortedArr[right] === target) {
			return "YES";
		} else if (left + right < target) {
			left = left + 1;
		} else if (left + right > target) {
			right = right - 1;
		}
	}

	return "No";
}
console.log(twoSumOptimised([1, 3, 4], 10));

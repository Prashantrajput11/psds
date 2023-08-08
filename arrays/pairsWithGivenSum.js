function findPairs(arr, target) {
	let pairs = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				pairs.push([arr[i], arr[j]]);
			}
		}
	}
	// console.log(pairs);

	return pairs;
}

console.log(findPairs([1, 4, 3, 2], 5));

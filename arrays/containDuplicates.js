function containDuplicatesBrute(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				return true;
			}
		}

		return false;
	}
}

// console.log(containDuplicatesBrute([1, 2, 3]));

function containDuplicatesUsingSet(arr) {
	const mySet = new Set();

	for (let i = 0; i < arr.length; i++) {
		if (mySet.has(arr[i])) {
			return true;
		}

		mySet.add(arr[i]);
	}

	return false;
}

console.log(containDuplicatesUsingSet([1, 2, 3]));

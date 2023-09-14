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
////////////Better /////////////////////

function containDuplicatesBetter(arr) {
	// sort the aray

	for (let i = 0; i < arr.length; i++) {
		for (let k = i + 1; k < arr.length; k++) {
			if (arr[i] > arr[k]) {
				const temp = arr[i];
				arr[i] = arr[k];
				arr[k] = temp;
			}
		}
	}

	for (let curr = 0; curr < arr.length; curr++) {
		if (arr[curr] === arr[curr + 1]) {
			return true;
		}
	}

	return false;
}

console.log(containDuplicatesBetter([1, 3, 2]));
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

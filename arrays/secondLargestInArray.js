// Problem : find the second largest

function getSecondLargestBrute(arr) {
	const n = arr.length;

	for (i = 0; i < n - 1; i++) {
		for (j = 0; j < n - 1; j++) {
			if (arr[j + 1] < arr[j]) {
				//swap

				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return secondLargest(arr);
}

function secondLargest(sortedArray) {
	const largest = sortedArray[sortedArray.length - 1];
	const n = sortedArray.length;
	for (let k = n - 2; k > 0; k--) {
		if (sortedArray[k] !== largest) {
			// means this is second largets
			return sortedArray[k];
		}
	}
}

// console.log(getSecondLargestBrute([1, 5, 4, 7, 7]));

/////////// BETTER Approach ///////////////

function getSecondLargestBetter(arr) {
	// first pass , assign a[o] as largest

	//  second loop ,  assume, secondlargest = -1,
	// check if arr[i] > seconlargest && arr[i] !== largest
	let largest = arr[0];
	let smallest = arr[0];
	let secondLargest = -1;
	let secondSmallest = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > largest) {
			largest = arr[i];
		}

		if (arr[i] < smallest) {
			smallest = arr[i];
		}
	}
	console.log("smallest", smallest);

	// find second largest

	for (let j = 0; j < arr.length; j++) {
		if (arr[j] > secondLargest && arr[j] !== largest) {
			secondLargest = arr[j];
		}

		if (arr[j] < secondSmallest && arr[j] !== smallest) {
			secondSmallest = arr[j];
		}
	}

	return { secondLargest: secondLargest, secondSmallest: secondSmallest };
}

console.log(getSecondLargestBetter([6, 1, 5, 4, 7, 7]));

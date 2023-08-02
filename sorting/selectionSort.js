// Selection sort

function sortArray(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i; // set the first el as minimum index
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j; // set that index to as the new minimum index
			}
		}

		if (minIndex !== i) {
			const temp = arr[i];
			arr[i] = arr[minIndex]; // shift the element to the first pos
			arr[minIndex] = temp;
		}
	}

	return arr;
}

console.log(sortArray([1, 3, 2, 6, 4, 5]));

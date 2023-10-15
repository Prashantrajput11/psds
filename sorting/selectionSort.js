// Selection sort

function sortArray(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i; // set the first el as minimum index
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j; // set that index to as the new minimum index
			}
		}

		swapData(arr, i, minIndex);
	}

	return arr;
}

console.log(sortArray([1, 3, 2, 6, 4, 5]));

function swapData(arr, indexOne, indexTwo) {
	const temp = arr[indexOne];
	arr[indexOne] = arr[indexTwo];
	arr[indexTwo] = temp;
}

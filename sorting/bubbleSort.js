function sortArray(arr) {
	const n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		for (j = 0; j < n - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				//swap

				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
}

console.log(sortArray([1, 3, 2, 6, 5, 4, 7]));

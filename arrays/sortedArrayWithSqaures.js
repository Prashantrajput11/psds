// Using two pointers

function sortArrayWithSquares(arr) {
	let n = arr.length;

	let newArr = new Array(n);
	let start = 0;
	let end = n - 1;

	let storeIndex = n - 1;

	while (start <= end) {
		const leftSqaure = arr[start] * arr[start];
		const rightSquare = arr[end] * arr[end];
		// [36, 25] for first itaeration  lS > RS

		if (leftSqaure > rightSquare) {
			newArr[storeIndex] = leftSqaure;
			start++;
		} else {
			newArr[storeIndex] = rightSquare;
			end--;
		}

		storeIndex--;
	}

	return newArr;
}
console.log(sortArrayWithSquares([-6, -3, -1, 2, 4, 5]));
console.log(sortArrayWithSquares([-5, -4, -2, 0, 1]));

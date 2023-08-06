function leftRotateArrayBrute(arr, d) {
	// step 1
	// store in temp variable
	const n = arr.length;
	d = d % n;

	const temp = [];
	for (let i = 0; i < d; i++) {
		temp.push(arr[i]);
	}

	//step 2
	// shift elements

	for (let i = d; i < n; i++) {
		arr[i - d] = arr[i];
	}
	//step 3
	// put the array in temp back to -> original array
	// [ 3,4,5, _, _]  d= 2
	// [1,2]

	for (let i = n - d; i < n; i++) {
		arr[i] = temp[i - [n - d]];
	}

	return arr;
}

console.log(leftRotateArrayBrute([1, 2, 3, 4, 5, 6, 7], 2));
console.log(leftRotateArrayBrute([1, 2, 3, 4, 5, 6, 7], 12));
console.log(leftRotateArrayBrute([1, 2, 3, 4, 5], 6));
// leftRotateArray([1, 2, 3, 4, 5], 2);

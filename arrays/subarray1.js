/// subarray with given sum k

function subArr(arr, t) {
	let length = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			let sum = 0;
			for (let k = i; k <= j; k++) {
				sum += arr[k];
			}

			if (sum === t) {
				// get length
				console.log(sum);

				length = Math.max(length, j - i + 1);
			}
		}
	}

	return length;
}

console.log(subArr([2, 3, 5, 1, 9], 10));

// i = 0, j = 0  -> 2
// i = 0 , j = 1 -> 2,3
// i = 0, j = 2 -> 2,3,5
// i = 0 , j = 3 -> 2,3,5,1
// i = 0 , j = 4 -> 2,3,5,1,9
// i = 0, j = 5 -> break out

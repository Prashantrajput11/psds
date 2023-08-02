// function sortArray(arr) {
// 	const n = arr.length;
// 	let flag = false;
// 	for (let i = 0; i < n - 1; i++) {
// 		for (j = 0; j < n - 1 - i; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				//swap

// 				const temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 				flag = true;
// 			}
// 		}

// 		if (flag === false) {
// 			return;
// 		}
// 	}

// 	return { sortedArray: arr, isSwapped: flag };
// }

// console.log(sortArray([1, 3, 2, 6, 5, 4, 7]));
// console.log(sortArray([1, 2, 3, 4, 5]));

function sortArray(arr) {
	const n = arr.length;
	let swapped = false;

	for (let i = 0; i < n - 1; i++) {
		swapped = false; // Reset the flag before each pass
		for (let j = 0; j < n - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				// Swap
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				swapped = true;
			}
		}

		if (!swapped) {
			// No swapping occurred in this pass, array is already sorted
			return false;
		}
	}

	return arr;
}

// console.log(sortArray([1, 2, 3, 4, 5]));
// console.log(sortArray([4, 1, 3, 2, 5]));
// console.log(sortArray([4, 3, 2, 1, 8, 9]));

function bubbleSort(arr) {
	var i, j;
	var len = arr.length;

	var isSwapped = false;

	for (i = 0; i < len; i++) {
		isSwapped = false;

		for (j = 0; j < len; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				isSwapped = true;
			}
		}

		// IF no two elements were swapped
		// by inner loop, then break
		if (!isSwapped) {
			break;
		}
	}

	// Print the array
	console.log(arr);
}

var arr = [1, 2, 3, 4, 5];

// calling the bubbleSort Function
// bubbleSort(arr);

///////// BRUTE //////////////////
function getLargestBrute(arr) {
	const n = arr.length;

	for (let i = 0; i < n - 1; i++) {
		for (let j = i + 1; j < n - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				// swap

				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	console.log("max is " + arr[arr.length - 1]);
	return arr;
}

getLargestBrute([3, 2, 7, 4, 1, 6, 5]);

/////////// BETTER ///////////

function getLargestBetter(arr) {
	let max = arr[0];
	for (let i = 0; i <= arr.length; i++) {
		if (arr[i + 1] > max) {
			max = arr[i + 1];
		}
	}
	return max;
}

// i = 0 , 10 > 2, max = 10
// i = 1 , 6> 10
// i = 2 , 5> 10

// i = 3, 1> 10

// console.log(getLargest([2, 10, 6, 5, 1, 3, 6, 11]));

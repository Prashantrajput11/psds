// get index of an element
// function getIndex(arr, target = -11223) {
// 	if (arr == null || arr.length == 0 || !Array.isArray(arr)) {
// 		return "not  a valid input";
// 	}
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == target) {
// 			return arr[i];
// 		}
// 	}

// 	return "not found";
// }
// console.log(getIndex([1, 4, 22, 33, 8, 444, 5, 1, 2, 8, 99, -1]));
// console.log(getIndex({}));

// function getChar(char, target = "h") {
// 	if (char == null || char.length == 0) {
// 		return "not  a valid input";
// 	}
// 	for (let i = 0; i < char.length; i++) {
// 		if (char[i] == target) {
// 			return i;
// 		}
// 	}

// 	return -1;
// }
// console.log(getChar("z"));

let arr = [
	[1, 2, 3],
	[4, 5],
	[7, 8, 9],
];

// function searchElement(arr, target) {
// 	if (arr == null || arr.length == 0 || !Array.isArray(arr)) {
// 		return "not  a valid input";
// 	}
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr[i].length; j++) {
// 			if (arr[i][j] == target) {
// 				return [i, j];
// 			}
// 			// console.log(arr[i][j]);
// 		}
// 	}

// 	return -1;
// }
// console.log(searchElement(arr, 7));

function getEvenDigitCount(arr) {
	// check if array is valid
	if (arr.length == 0 || !Array.isArray(arr) || arr == null) {
		return "not valid input";
	}

	// count for even digits
	let evenCount = 0;
	for (let i = 0; i < arr.length; i++) {
		let digits = arr[i] + "";

		// check if digit's length is even
		if (digits.length % 2 === 0) {
			evenCount = evenCount + 1;
		}
	}

	// if no even digits exist
	if (evenCount == 0) {
		return 0;
	}

	return evenCount;
}

// console.log(getEvenDigitCount([2, 228, 345, 17899, 1]));
// console.log(getEvenDigitCount([555, 901, 482, 1771]));
console.log(getEvenDigitCount([252]));

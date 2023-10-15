function removeDuplicates(array) {
	const set = new Set(array);
	let k = set.size;
	for (let value of set) {
	}
}
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

function removeDuplicatesTwoPointer(arr) {
	let i = 0;
	for (let j = i + 1; j < arr.length; j++) {
		if (arr[j] !== arr[i]) {
			arr[i + 1] = arr[j];
			i++;
		}
	}

	return i + 1;
}

console.log(removeDuplicatesTwoPointer([0, 0, 1, 1, 1, 2, 2, 3, 4, 5, 5]));

function removeDuplicatesUsingSlice(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] === arr[i + 1]) {
			arr.splice(i + 1, 1);
			i--;
		}
	}

	return arr.length;
}

console.log(removeDuplicatesUsingSlice([0, 0, 1, 1, 1, 2, 2, 3, 4, 5, 5]));

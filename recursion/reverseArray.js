function rev(arr) {
	let newArr = [];

	for (let i = arr.length - 1; i >= 0; i--) {
		newArr[arr.length - i - 1] = arr[i];
	}

	return newArr;
}

console.log(rev([1, 4, 5, 6, 0]));

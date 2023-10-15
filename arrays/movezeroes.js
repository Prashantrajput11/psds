function moveZeroes(arr) {
	let j = -1;

	for (let i = 0; i < n; i++) {
		if (a[i] === 0) {
			j = i;
			break;
		}
	}
	for (let i = j + 1; j < arr.length - 1; i++) {
		if (arr[j] !== 0) {
			// we found a non zero ele, swap it
			let temp;

			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

			j++;
		}
	}

	return arr;
}
moveZeroes([0, 1, 0, 2, 3, 0, 4, 0, 0, 5, 6]);

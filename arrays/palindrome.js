function palindrome(innerArr) {
	const numStr = innerArr.toString();
	let start = 0;
	let end = numStr.length - 1;
	while (start < end) {
		if (numStr[start] !== numStr[end]) {
			return false;
		}
		start++;
		end--;
	}
	return true;
}

function checkArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (!palindrome(arr[i])) {
			return 0;
		}
	}

	return 1;
}

console.log(checkArray([1234, 121, 1331]));

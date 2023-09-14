function countDigits(N) {
	let count = 0;
	let temp = N;
	while (N > 0) {
		let digit = N % 10;
		if (temp % digit === 0) {
			count = count + 1;
		}
		N = Math.floor(N / 10);
	}
	return count;
}

console.log(countDigits(100));

function countDigitsBetter(num) {
	let numToString = num + "";
	let count = 0;
	for (let i = 0; i < numToString.length; i++) {
		if (num % numToString[i] === 0) {
			count = count + 1;
		}
	}
	return count;
}

// console.log(countDigitsBetter(100));

function reverseNumber(num) {
	let reverseNumber = 0;
	while (num > 0) {
		let digit = num % 10;
		reverseNumber = reverseNumber * 10 + digit;
		num = Math.floor(num / 10);
	}
	return reverseNumber;
}

console.log(reverseNumber(123));

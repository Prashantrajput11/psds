function countNoOFDigits(num) {
	let count = 0;
	while (num > 0) {
		num = Math.floor(num / 10);
		count++;
	}

	return count;

	// Method 2
	//return num.toString().length;
}

// console.log(countNoOFDigits(1211));

function reverseNumber(num) {
	let originalNum = num;
	let rev = 0;
	while (num > 0) {
		const temp = num % 10;
		num = Math.floor(num / 10);
		rev = rev * 10 + temp;
	}

	console.log(rev);
	console.log(num);

	return rev === originalNum ? "Palindrome number" : "not a plaindrome";
}

// console.log(reverseNumber(121));

function armstrongNo(num) {
	// First count no of digits ->3

	// store digit in temp and add them with raised to power 3
	let orgno = num;
	let sum = 0;

	let temp;
	while (num > 0) {
		temp = num % 10;
		sum += temp * temp * temp;

		num = Math.floor(num / 10);
	}

	return sum === orgno ? " arm no" : "not arm no";
}

console.log(armstrongNo(153));

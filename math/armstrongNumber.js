function armstrongNumber(num) {
	let sum = 0;
	let temp = num;
	while (num > 0) {
		let digit = num % 10;

		sum = sum + digit * digit * digit;

		num = Math.floor(num / 10);
	}
	console.log(sum);
	console.log(num);
	if (sum === temp) {
		return "Yes";
	} else {
		return "No";
	}
}
console.log(armstrongNumber(407));

// Brute

function hcf(num1, num2) {
	let gcd = 1;

	for (let i = Math.min(num1, num2); i > 1; i--) {
		if (num1 % 2 === 0 && num2 % 2 === 0) {
			gcd = i;
			break;
		}
	}
	return gcd;
}

console.log(hcf(20, 40));

// 12 - 1,2,3,4,6,12
// 6 -1,  2,3,6
// gcd - 6

// Optimal using

console.log("hi");

// reduce method
// used to perform operations on arrays
// syntax
// a simple program to calculate sum

// let numbers = [1, 4, 6, 7];

// numbers.reduce();

// let a = 10;
// let b = 20;
// let c = 30;

// function checkMax(a, b, c) {
// 	let max = a;
// 	if (b > max) {
// 		max = b;
// 	} else if (c > max) {
// 		max = c;
// 	}

// 	console.log(max);
// }

// console.log(checkMax(a, b, c));

// let arr = [7, 1, 2, 37, 8, 9, 7, 7];
// let findNo = 7;

// function count() {
// 	let count = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === findNo) {
// 			count += 1;
// 		}
// 	}
// 	console.log("number occur times: " + count);
// }
// count(arr);
// console.log("hello");

// function getRev(n) {
// 	let rev = 0;
// 	while (n > 0) {
// 		let rem = n % 10;
// 		n = Math.floor(n / 10);

// 		rev = rev * 10 + rem;
// 	}

// 	console.log("rev", rev);
// }

// getRev(123);

// function sp(n) {
// 	let prod = 1;
// 	let sum = 0;
// 	while (n > 0) {
// 		rem = n % 10;
// 		n = Math.floor(n / 10);
// 		sum += rem;
// 		prod = prod * rem;
// 	}
// 	return prod - sum;
// }

// console.log(sp(4421));

// function checkPalindrome(n) {
// 	let rev = 0;
// 	while (n > 0) {
// 		let rem = n % 10;
// 		rev = rev * 10 + rem;
// 		n = Math.floor(n / 10);
// 	}
// 	if (rev == org) {
// 		console.log("yes plaindrome");
// 	} else {
// 		console.log("not plaindrome");
// 	}
// }
// checkPalindrome(123);

// function checkPalindrome(n) {
// 	let rev = 0;
// 	let org = n;
// 	while (n > 0) {
// 		let rem = n % 10;
// 		rev = rev * 10 + rem;
// 		n = Math.floor(n / 10);
// 	}

// 	console.log(rev);

// 	console.log(org);
// 	if (rev == org) {
// 		console.log("yes plaindrome");
// 	} else {
// 		console.log("not plaindrome");
// 	}
// }
// checkPalindrome("121");

// 153
// (1*1*1) +
// (5*5*5) +
//(3*3*3)//

// function checkArm(n) {
// 	let sum = 0;
// 	let org = n;
// 	while (n > 0) {
// 		let rev = n % 10;
// 		sum = sum + rev * rev * rev;
// 		n = Math.floor(n / 10);
// 	}

// 	if (sum == org) {
// 		console.log("yes armstrong");
// 	} else {
// 		console.log("not armstrong");
// 	}
// }
// checkArm(153);

for (let i = 0; i < 5; i++) {
	for (let j = 0; j < 5; j++) {
		process.stdout.write("*");
	}
	process.stdout.write("\n");
}

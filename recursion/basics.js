function printOneToN(n) {
	// base case

	let initialNo = 1;

	let number = printOneToN(initialNo + 1);
	console.log(number);
}

// printOneToN(5);

// q2 power of 2

function powerOfTwo(n) {
	// 2 * 2 * 2
	// base case
	// recursive func

	let number = 2;
	powerOfTwo(number * number);
	console.log(number);
}
// powerOfTwo(3);

function NToOne(n) {
	if (n === 0) return;

	// recursive func

	console.log(n);

	NToOne(n - 1);
}
NToOne(10);

function getProduct() {
	// base case
	if (arr.length <= 0) {
		return 1;
	}
	let smallProblem = mul(arr.splice(0, arr.length - 1));

	let bigProblem = arr[arr.length - 1] * smallProblem;

	return bigProblem;
}

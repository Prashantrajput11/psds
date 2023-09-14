/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(N) {
	let count = 0;
	let temp = N;
	while (N > 0) {
		let digit = N % 10;
		if (digit !== 0 && temp % digit === 0) {
			count = count + 1;
		}
		N = Math.floor(N / 10);
	}
	return count;
};
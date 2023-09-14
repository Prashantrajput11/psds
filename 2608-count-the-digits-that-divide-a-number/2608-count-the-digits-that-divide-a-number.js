/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(N) {
	let count = 0;
	let org = N;
	while (N > 0) {
		let digit = N % 10;
		console.log({ digit });

		if (org % digit === 0) {
			count = count + 1;
			console.log("count updated for digit", digit);
		}

		N = Math.floor(N / 10);
	}
	return count;
};
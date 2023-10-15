function primeNumber(num) {
	let count = 0;
	for (let i = 1; i * i <= num; i++) {
		if (num % i === 0) {
			count += 1;

			if (num / i != i) {
				count += 1;
			}
		}
	}

	if (count === 2) {
		console.log("prime no");
	} else {
		console.log("not a prime");
	}
}

console.log(primeNumber(3));

// TC : 0( sqrt N) which is better than O(n)

function sum(n) {
	// base case

	if (n === 0) {
		return 0;
	}
	// recursive function
	return n + sum(n - 1);
}

console.log(sum(5));

// 2 , 3,

function perfectSquare(N) {
	let count = 0;
	for (i = 1; i * i < N; i++) {
		count += 1;
	}

	return count;
}

console.log(perfectSquare(9));

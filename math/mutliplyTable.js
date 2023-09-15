function multiply(num) {
	let table = [];

	for (i = 1; i <= 10; i++) {
		table.push(num * i);
	}

	return table;
}

console.log(multiply(9));

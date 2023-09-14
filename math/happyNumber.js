function findHappyNumber(N) {
	let newNumber = N;
	while (newNumber > 0) {
		let digit = newNumber % 10;
		console.log({ digit });
		newNumber = 0 + digit * digit;

		newNumber = Math.floor(newNumber / 10);
	}

	if (newNumber === 1) {
		return true;
	} else {
		return false;
	}
}

console.log(findHappyNumber(19));

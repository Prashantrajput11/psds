function highestFrequency(arr) {
	let myMap = {};

	for (let i = 0; i < arr.length; i++) {
		if (myMap[arr[i]]) {
			myMap[arr[i]] = myMap[arr[i]] + 1;
		} else {
			myMap[arr[i]] = 1;
		}
	}

	// return myMap;

	// loop on map and check which key has the greatest value
	let highestFrequency = 0;
	let mostFrequentElement;
	// console.log({ highestFrequency });
	for (let i in myMap) {
		if (myMap[i] > highestFrequency) {
			highestFrequency = myMap[i];
			mostFrequentElement = i;
		}
	}
	return mostFrequentElement;
}
console.log(highestFrequency([10, 5, 10, 15, 3, 10, 15]));

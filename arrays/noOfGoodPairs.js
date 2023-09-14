function noOfGoodPairs(arr) {
	let goodPairs = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				goodPairs.push([i, j]);
			}
		}
	}

	return goodPairs.length;
}

// console.log(noOfGoodPairs([1, 2, 3, 1, 1, 3]));
// console.log(noOfGoodPairs([1, 1, 1, 1]));

function goodPairsBetter(arr) {
	let count = {};

	for (let el of arr) {
		if (count[el]) {
			count[el] = count[el] + 1;
		} else {
			count[el] = 1;
		}
	}

	// Calculate good pairs using the count object
	let goodPairs = 0;
	for (let key in count) {
		goodPairs = goodPairs + (count[key] * (count[key] - 1)) / 2;
	}

	return goodPairs;
}

console.log(goodPairsBetter([4, 3, 1, 1, 2])); // Output: 1

// console.log(goodPairsBetter([1, 2, 3, 1, 1, 3]));

function goodPairBest(arr) {
	const mySet = new Set();

	for (let i of arr) {
		if (mySet.has(arr[i])) {
			// increaset the count of that element
		} else {
			mySet.add(arr[i]);
		}
	}

	// Loop on the entire set and get the value of the key
	// now  for the n element perform n*n-1/2 formula and that would be the number of good paird
}
// goodPairBest([1, 2, 3, 1, 1, 3]);

function missingNumber(arr) {
	for (let i = 0; i <= arr.length; i++) {
		let isFound = false;

		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] === i) {
				isFound = true;
				break;
			}
		}

		if (!isFound) {
			return i;
		}
	}
	return -1;
}

// console.log(missingNumber([0, 1]));

function missingNumberBetter(arr) {
	let frequencyMap = {};

	for (let i = 0; i <= arr.length; i++) {
		frequencyMap[i] = 0;
	}

	for (let i = 0; i < arr.length; i++) {
		frequencyMap[arr[i]] = frequencyMap[arr[i]] + 1;
	}

	console.log(frequencyMap);

	for (let num in frequencyMap) {
		if (frequencyMap[num] === 0) {
			return num;
		}
	}
}

// console.log(missingNumberBetter([3, 0, 1]));

function missingNumberusingHashing(arr) {
	let hash = new Array(arr.length + 1).fill(0);
	console.log(hash); // [0,0,0, 0]

	for (let i = 0; i < arr.length; i++) {
		hash[arr[i]]++;
	}

	console.log("after", hash); // 0,1,1,1
	for (let i = 0; i <= arr.length; i++) {
		if (hash[i] === 0) {
			return i;
		}
	}
}
// console.log(missingNumberusingHashing([0, 2]));
console.log(missingNumberusingHashing([3, 0, 1]));
// console.log(missingNumberusingHashing([0, 1]));

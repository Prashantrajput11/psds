/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(arr) {

	
  	for (let i = 0; i <= arr.length; i++) {
		let isFound = false;

		for (let j = 0; j <= arr.length; j++) {
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

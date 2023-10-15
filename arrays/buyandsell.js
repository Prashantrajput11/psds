function getMaxProfit(arr) {
	let buy = 0;
	let sell = 1;

	let maxProfit = 0;

	while (sell < arr.length) {
		if (arr[buy] < arr[sell]) {
			let profit = arr[sell] - arr[buy];
			maxProfit = Math.max(profit, maxProfit);
		} else {
			buy = sell;
		}
		sell++;
	}

	return maxProfit;
}

console.log(getMaxProfit([7, 1, 5, 3, 6, 4]));
console.log(getMaxProfit([7, 6, 4, 3, 1]));

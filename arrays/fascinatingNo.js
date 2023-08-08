function fascinatingNo(number) {
	let productByTwo = number * 2 + "";
	let productByThree = number * 3 + "";

	let concatenationRes = number + productByTwo + productByThree;
	console.log(concatenationRes);

	for (let i = 0; i < concatenationRes.length; i++) {
		console.log(concatenationRes[i]);
	}
}

// fascinatingNo(192);

// let mySet = new Set([1, 4, 6, 8, 0]);
// mySet.add(12);
// mySet.add(6);
// mySet.delete(12);

// console.log(mySet.length);

// if (mySet.has(4)) {
// 	console.log("it is already in the set");
// } else {
// 	mySet.add(4);
// }
// console.log(mySet);

// const myMap = new Map();
// myMap.set("name", "prashant");
// myMap.set("age", 26);
// myMap.set("city", "Gurugram");
// myMap.set("name", "arjun");

// const userName = myMap.get("name");

// myMap["name"] = "dev";

// const hasUserName = myMap.has("name");
// console.log(hasUserName);

// console.log(userName);

// function elementsCount(arr) {
// 	const count = new Map();

// 	for (let i = 0; i < arr.length; i++) {
// 		if (count[arr[i]]) {
// 			count[arr[i]] = count[arr[i]] + 1;
// 		} else {
// 			count[arr[i]] = 1;
// 		}
// 	}

// 	return count;
// }

// console.log(elementsCount([1, 2, 2, 4, 4, 6, 8, 2, 3]));

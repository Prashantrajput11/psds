// // Write a function that takes an array of product objects
// // and returns a new array of products that are in stock.

// const products = [
// 	{ name: "iPhone 12", price: 99, inStock: false },
// 	{ name: "Samsung Galaxy S21", price: 899, inStock: false },
// 	{ name: "Google Pixel 5", price: 9, inStock: false },
// 	{ name: "OnePlus 9 Pro", price: 1099, inStock: false },
// 	{ name: "Xiaomi Mi 11", price: 799, inStock: false },
// ];

// function inStock(products) {
// 	return products.reduce((acc, curr) => {
// 		if (curr.inStock) {
// 			acc.push(curr.name);
// 		}
// 		return acc;
// 	}, []);
// }

// // console.log(inStock(products));

// // Write a function that takes an array of product objects and returns the cheapest product.

// function getCheapestProduct(products) {
// 	let cheapestProduct = products[0].price;
// 	let cheapestProductName = products[0].name;
// 	for (let i = 0; i < products.length; i++) {
// 		if (products[i].price < cheapestProduct) {
// 			cheapestProduct = products[i].price;
// 			cheapestProductName = products[i].name;
// 		}
// 	}
// 	return cheapestProductName;
// }

// // console.log(getCheapestProduct(products));

// function getCheapestProduct(products) {
// 	let cheapest = products.reduce((cheapestProduct, currentProduct) => {
// 		return currentProduct.price < cheapestProduct.price
// 			? currentProduct
// 			: cheapestProduct;
// 	});

// 	return cheapest.name;
// }

// console.log(getCheapestProduct(products));

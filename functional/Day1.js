// Problem :1 Given an array of products with a category property,
// write a function that filters products by a specific category.

// const products = [
// 	{ id: 1, name: "Product 1", category: "Electronics" },
// 	{ id: 2, name: "Product 2", category: "Books" },
// 	{ id: 3, name: "Product 3", category: "Electronics" },
// 	{ id: 4, name: "Product 4", category: "Clothing" },
// 	{ id: 5, name: "Product 5", category: "Books" },
// 	{ id: 6, name: "Product 6", category: "Electronics" },
// 	{ id: 7, name: "Product 7", category: "Clothing" },
// ];

const getProductsByCategories = (products, category) => {
	if (!products || !category || !Array.isArray(products)) {
		return "not a valid data";
	}
	let filteredProducts = products.filter(
		(product) => product.category === category
	);

	return filteredProducts;
};

// console.log(getProductsByCategories([], "Books"));
// problem 2: Given an array of items in a shopping cart, each with a price and quantity property,
// write a function that calculates the total value of the cart.

const shoppingCart = [
	{
		id: 1,
		name: "Laptop",
		price: 1200,
		quantity: 1,
	},
	{
		id: 2,
		name: "Smartphone",
		price: 800,
		quantity: 2,
	},
	{
		id: 3,
		name: "Headphones",
		price: 150,
		quantity: 1,
	},
	{
		id: 4,
		name: "Keyboard",
		price: 100,
		quantity: 1,
	},
	{
		id: 5,
		name: "Mouse",
		price: 50,
		quantity: 1,
	},
];

const getTotalValue = (products) => {
	if (!products || !Array.isArray(products)) {
		return "not a valid input";
	}

	if (products.length == 0) return [];

	return products.reduce((acc, curr) => {
		let value = acc + curr.price * curr.quantity;
		return value;
	}, 0);
};

// console.log(getTotalValue(null));s

//  Problem 3: Given an array of products and a product ID,
//write a function that returns the details of the product with the matching ID.
const products = [
	{ id: 1, name: "Product 1", category: "Electronics", price: 300 },
	{ id: 2, name: "Product 2", category: "Books", price: 650 },
	{ id: 3, name: "Product 3", category: "Electronics", price: 750 },
	{ id: 4, name: "Product 4", category: "Clothing", price: 1450 },
	{ id: 5, name: "Product 5", category: "Books", price: 50 },
	{ id: 6, name: "Product 6", category: "Electronics", price: 950 },
	{ id: 7, name: "Product 7", category: "Clothing", price: 100 },
];

const getProductDetails = (products, id) => {
	if (Array.isArray(products) || !id) return "not valid input";

	if (products.length == 0) return 0;
	let product = products.find((product) => product.id == id);
	return product ? product.category : null;
};

console.log(getProductDetails(products, 2));

//Problem : 4 Given an array of products, write a function
// that applies a discount (percentage) to the price of products in a specific category.

const getDiscountedProducts = (products, categoryId, discountPercent) => {
	return products.map((product) => {
		if (product.category === categoryId) {
			// update price of particular product
			return { ...product, price: calculateDiscount(product, discountPercent) };
		} else {
			return product;
		}
	});
};

const calculateDiscount = (product, discountPercent) => {
	let discountedPrice = (product.price * discountPercent) / 100;
	return discountedPrice;
};

// console.log(getDiscountedProducts(products, "Books", 5));

// Problem : 5 Given an array of products, each with a price property,
// write a function that finds the most expensive product.

const getMostExpensiveProduct = (products) => {
	let mostExpensiveProduct = products[0];
	products.find((product) => {
		if (product.price > mostExpensiveProduct.price) {
			mostExpensiveProduct = product;
		}
	});

	return mostExpensiveProduct;
};

console.log(getMostExpensiveProduct(products));

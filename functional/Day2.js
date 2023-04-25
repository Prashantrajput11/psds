// Given an array of products and a product ID,
// write a function that applies a discount (percentage)
// to the price of the product with the matching ID, without modifying the original array.

const products = [
	{ id: 1, name: "Product 1", category: "Electronics", price: 300 },
	{ id: 2, name: "Product 2", category: "Books", price: 650 },
	{ id: 3, name: "Product 3", category: "Electronics", price: 750 },
	{ id: 4, name: "Product 4", category: "Clothing", price: 1450 },
	{ id: 5, name: "Product 5", category: "Books", price: 50 },
	{ id: 6, name: "Product 6", category: "Electronics", price: 950 },
	{ id: 7, name: "Product 7", category: "Clothing", price: 100 },
];

const calculateDiscount = (product, discountPercentage) => {
	let discount = (product.price * discountPercentage) / 100;
	return product.price - discount;
};
const applyDiscount = (products, productId, discountPercentage) => {
	return products.reduce((acc, curr) => {
		curr.id === productId
			? acc.push({
					...curr,
					price: calculateDiscount(curr, discountPercentage),
			  })
			: acc.push(curr);
		return acc;
	}, []);
};

console.log(applyDiscount(products, 3, 5));

// Given an array of books and a book ID,
// write a function that updates the rating of the book with
// the matching ID to a new value, without modifying the original array.

const books = [
	{
		id: 1,
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		rating: 4.2,
	},
	{ id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", rating: 4.5 },
	{ id: 3, title: "1984", author: "George Orwell", rating: 4.0 },
	{
		id: 4,
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		rating: 3.8,
	},
];

const updateBookRating = (books, bookId, newRating) => {
	return books.map((book) => {
		if (book.id === bookId) {
			return { ...book, rating: newRating };
		} else {
			return book;
		}
	});
};

console.log(updateBookRating(books, 3, 4.6));

////////////////////////////////////////////////////////////////////
// Given an array of products and a product ID,
// write a function that updates the stock of the product with the matching ID to a new value,
//  without modifying the original inventory array.

const inventory = [
	{ id: 1, name: "Product 1", stock: 10 },
	{ id: 2, name: "Product 2", stock: 5 },
	{ id: 3, name: "Product 3", stock: 15 },
	{ id: 4, name: "Product 4", stock: 7 },
];

const updateStockById = (inventory, productId, stockValue) => {
	return inventory.map((item) => {
		if (item.id === productId) {
			return { ...item, stock: stockValue };
		} else {
			return item;
		}
	});
};

// console.log(updateStockById(inventory, 3, 100));

////////////////////////////////////////////////////////////

const users = [
	{
		id: 1,
		name: "John Doe",
		email: "john.doe@example.com",
		address: {
			street: "123 Main St",
			city: "Anytown",
			state: "CA",
			zip: "12345",
		},
	},
	{
		id: 2,
		name: "Jane Doe",
		email: "jane.doe@example.com",
		address: {
			street: "456 Elm St",
			city: "Othertown",
			state: "NY",
			zip: "67890",
		},
	},
	{
		id: 3,
		name: "Bob Smith",
		email: "bob.smith@example.com",
		address: {
			street: "789 Maple St",
			city: "Someplace",
			state: "TX",
			zip: "54321",
		},
	},
];

const updateUserInfo = (users, userId, updateProperty, updateValue) => {
	return users.map((user) => {
		if (user.id === userId) {
			return { ...user, [updateProperty]: updateValue };
		} else {
			return user;
		}
	});
};

console.log(updateUserInfo(users, 1, "email", "prashant1@gmail.com"));

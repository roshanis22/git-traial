// ===============================
// Product Catalog System
// ===============================

// Product object
const product = {
    name: "Laptop",
    price: 50000,
    stock: 10,

    // Method to update stock
    updateStock(quantity) {
        this.stock += quantity;
    },

    // Method to calculate total price
    calculateTotal(quantity) {
        return this.price * quantity;
    }
};

// -------------------------------
// Object Destructuring
// -------------------------------
const { name, price, stock } = product;

console.log("Product Name:", name);
console.log("Price:", price);
console.log("Stock:", stock);

// -------------------------------
// Using Methods
// -------------------------------
console.log("\nUpdating Stock...");
product.updateStock(5);
console.log("Updated Stock:", product.stock);

const totalPrice = product.calculateTotal(2);
console.log("Total Price for 2 items:", totalPrice);

// -------------------------------
// JSON Conversion
// -------------------------------

// Object → JSON
const productJSON = JSON.stringify(product);
console.log("\nJSON Format:");
console.log(productJSON);

// JSON → Object
const parsedObject = JSON.parse(productJSON);
console.log("\nConverted Back to Object:");
console.log(parsedObject);

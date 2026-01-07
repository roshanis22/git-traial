app.get("/", (req, res) => {
    res.send("API is running successfully");
});


console.log("Server file loaded...");

 const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to read JSON body
app.use(express.json());

// In-memory data (temporary storage)
let items = [
    { id: 1, name: "Item A", price: 100 },
    { id: 2, name: "Item B", price: 200 }
];

/*
------------------------------------
GET - Retrieve all items
------------------------------------
*/
app.get("/items", (req, res) => {
    res.status(200).json(items);
});

/*
------------------------------------
POST - Create new item
------------------------------------
*/
app.post("/items", (req, res) => {
    const { name, price } = req.body;

    const newItem = {
        id: items.length + 1,
        name,
        price
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

/*
------------------------------------
PUT - Update item by ID
------------------------------------
*/
app.put("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;

    const item = items.find(i => i.id === id);

    if (!item) {
        return res.status(404).json({ message: "Item not found" });
    }

    item.name = name;
    item.price = price;

    res.json(item);
});

/*
------------------------------------
DELETE - Remove item by ID
------------------------------------
*/
app.delete("/items/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = items.findIndex(i => i.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Item not found" });
    }

    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

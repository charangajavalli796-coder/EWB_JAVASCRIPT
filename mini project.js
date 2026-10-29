
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System ---");

rl.question("Enter product name: ", function(name) {
    rl.question("Enter product price: ", function(priceInput) {
        let price = Number(priceInput);

        // Validate input
        if (name.trim() === "" || priceInput.trim() === "" ||
            !Number.isFinite(price) || price <= 0) {
            console.log("Invalid product details.");
            rl.close();
            return;
        }

        // Add new product
        products.push({
            name: name.trim(),
            price: price
        });

        // Assign category using if-else and switch
        function getCategory(price) {
            let type;

            if (price < 100)
                type = "B";
            else if (price < 200)
                type = "S";
            else
                type = "P";

            switch (type) {
                case "B": return "Budget";
                case "S": return "Standard";
                case "P": return "Premium";
                default: return "Unknown";
            }
        }

        console.log("\n--- Processing Inventory Roster (forEach) ---");

        products.forEach(function(p) {
            console.log(
                "* Item: " + p.name + " ($" + p.price +
                ") -> Category: " + getCategory(p.price)
            );
        });

        // Calculate total inventory value
        const calculateTotal = () =>
            products.reduce((sum, p) => sum + p.price, 0);

        // Apply discount using a local variable
        function applyDiscount(price, discount = 0) {
            let finalPrice = price - price * discount / 100;
            return finalPrice;
        }

        console.log("\n--- Financial Analytics ---");
        console.log("Total Inventory Value: $" + calculateTotal());

        // Filter affordable products
        let affordable = products.filter(p => p.price < 200);
        console.log(
            'Filtered Affordable Items (Under $200): ' +
            JSON.stringify(affordable.map(p => p.name))
        );

        // Create formatted report
        let report = products.map(
            p => p.name.toUpperCase() + ": $" + p.price
        );

        console.log(
            "Formatted Report List: " + JSON.stringify(report)
        );

        rl.close();
    });
});

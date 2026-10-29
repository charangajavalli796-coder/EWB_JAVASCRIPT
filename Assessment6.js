let products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
];

console.log("-- All Products --");

products.forEach(function(p) {
    console.log("Item:", p.name, "- Price: $" + p.price);
});

console.log("-- Filtered Products --");

let filtered = products.filter(p => p.price < 50);
console.log(filtered);

console.log("-- Mapped Product Tags --");

let mapped = products.map(
    p => p.name.toUpperCase() + " costs $" + p.price
);
console.log(mapped);
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter bill amount: ", function(billInput) {
    let bill = Number(billInput);

    rl.question("Enter tip percentage: ", function(tipInput) {
        let tipPercent = Number(tipInput);

        let tip = bill * tipPercent / 100;
        let total = bill + tip;

        console.log("Subtotal: $" + bill);
        console.log("Tip Percentage: " + tipPercent + "%");
        console.log("Calculated Tip: $" + tip);
        console.log("Total Amount to Pay: $" + total);

        rl.close();
    });
});

console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("-- First number > 10 divisible by 6 --");

let n = 11;

while (true) {
    if (n > 10 && n % 6 == 0) {
        console.log("Found:", n);
        break;
    }
    n++;
}

let j = 0;

do {
    j++;
    if (j == 3)
        continue;
    console.log(j);
} while (j < 5);
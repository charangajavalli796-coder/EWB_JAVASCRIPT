function rectangleArea(length = 5, width = 4) {
    return length * width;
}

let area = (length, width) => length * width;

console.log("Standard Function Area:",
            rectangleArea());

console.log("Arrow Function Area:",
            area(10, 3));

{
    let blockVar = 10;
    console.log("Inside block:", blockVar);
}
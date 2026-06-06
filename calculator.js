
//  Simple Calculator

let num_1 = 10;
let num_2 = 5;

function addition(a, b) {
    return a + b;
};
function subtraction(a, b) {
    return a - b;
};
function multiplication(a, b) {
    return a * b;
};
function devition(a, b) {
    return a / b;
};
function modulus(a, b) {
    return a % b;
};

console.log("Addition: " + addition(num_1, num_2));               // Addition: 15
console.log("Subtraction: " + subtraction(num_1, num_2));         // Subtraction: 5
console.log("Multiplication: " + multiplication(num_1, num_2));   // Multiplication: 50
console.log("Devition: " + devition(num_1, num_2));               // Devition: 2
console.log("Modulus: " + modulus(num_1, num_2));                 // Modulus: 0


// Simple Calculator

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
function divition(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed."
    }
    return a / b;
};
function modulus(a, b) {
    if (b === 0) {
        return "Error: Modulus by zero is not allowed."
    }
    return a % b;
};

console.log("Addition: " + addition(num_1, num_2));               // Addition: 15
console.log("Subtraction: " + subtraction(num_1, num_2));         // Subtraction: 5
console.log("Multiplication: " + multiplication(num_1, num_2));   // Multiplication: 50
console.log("Divition: " + divition(num_1, num_2));               // Divition: 2
console.log("Modulus: " + modulus(num_1, num_2));                 // Modulus: 0

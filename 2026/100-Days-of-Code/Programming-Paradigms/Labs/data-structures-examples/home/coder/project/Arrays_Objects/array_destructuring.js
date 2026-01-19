// Part 1: Working with Arrays
// Step 1: Open the array-destructureing.js File
// Step 2: Understand the concept of Array Structure
// Step 3: Uderstand the Provided Array Structure
// Step 4: Destructure the Second Product
// Step 5: Execute the program by clicking the play button
// Step 6: After running the code, the output will be displayed as Second product: Phone | Second product: Price: 500

// Understand provided array structures
const products = [
    ["Laptop", 1000],
    ["Phone", 500],
    ["Tablet", 700]
];
// Destructure the second product's name and price from the array
const [, [secondProductName, secondProductPrice]] = products;

// Print the second product details

console.log(`Second product: ${secondProductName}`); // Second product: Phone
console.log(`Second product price: ${secondProductPrice}`); // Second product price: 500

// Step 2, Consider an array with two elements
/*
const item = ["Laptop", 1000];
const [name, price] = item; // Destructures the array into variables
console.log(name, price); // Output: Laptop
console.log(price); // Output: 1000
*/
//here the name varable takes the first value, and the price variable take sthe second value from the array/







// Resource: https://www.coursera.org/learn/programming-with-javascript/ungradedLab/GfMIQ/working-with-arrays-and-objects-a-destructuring-exercise/lab?path=%2F%3Ffolder%3D%2Fhome%2Fcoder%2Fproject#
// This is the initial code using `var` with some issues to fix.

//var x = 5; // Variable declaration and initialization
//var x = 10; // Redeclaration, works with var but not allowed with let

// Refactored:
const x = 10;
console.log(x);

//console.log(a); // Hoisting example: variable is used before declaration
//var a = 20;

// Refactored
let a = 20;
console.log(a); // Declare before use

/*if (true) {
    var z = 30; // Variable declared with var is accessible outside block
}
console.log(z); // Should cause a scoping issue when switched to let/const
*/

// Refactored:
if (true) {
    let z = 30; // Use let to make z block-scoped
    console.log(z); // Error: z is not accessible outside the block

}

//var b = 40; // Variable that changes value
//b = 50; // Should be let, as it changes value

// Refactored 
let b = 40;
b = 50; // Use let because the value changes
console.log(b);

//var PI = 3.14; // Declared as a variable but should ideally be a constant
//PI = 3.14159; // This should throw an error when changed to const

// Refractored:
const PI = 3.14159; // Use const because the value should remain constant
console.log(PI);

// Your task:
// 1. Replace `var` declarations with `let` or `const` as appropriate.
// 2. Resolve issues caused by hoisting, redeclaration, and scoping.
// 3. Ensure the program works correctly after refactoring.















// Resource
// https://www.coursera.org/learn/programming-with-javascript/ungradedLab/kbv3Y/refactoring-var-to-let-and-const-fixing-common-javascript-errors/lab?path=%2F%3Ffolder%3D%2Fhome%2Fcoder%2Fproject
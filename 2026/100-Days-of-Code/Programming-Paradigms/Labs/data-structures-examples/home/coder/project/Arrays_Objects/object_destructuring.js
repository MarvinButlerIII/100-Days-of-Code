// Part 2: Uderstanding the Concept of Object Destructuring
// Step 1: Open the object-destructuring.js File
// Step 2: Understand the Concept of Object Destructuring
// Step 3: Understand the Provided Object Structure
// Step 4: Destructure Values from the Object
// Step 5: Execute the program by clicking the play button.
// Step 6: Run could the output should show, John Doe poessted a review titled, Amazing Product at 2024 11 24.

// Object representing a review
const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

// Destructure the author, title, and timePosted properties from the review object
const { author, title, timePosted } = review;

// Print the review details
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);


// ═══════════════════════════════════════════════════════════════
// PRACTICE 1: ARRAY BASICS WARM-UP
// Complete each task below
// ═══════════════════════════════════════════════════════════════

// TASK 1: Create an array of 5 programming languages you know/want to learn
// YOUR CODE:
const languages = ["JavaScript", "Python", "Java", "C++", "Go"];
console.log("Languages:", languages);

// TASK 2: Access and print the first and last language
// YOUR CODE:


// TASK 3: Find the total count of languages
// YOUR CODE:


// TASK 4: Check if "JavaScript" exists in the array
// YOUR CODE:

// TASK 5: Find the index of "Python"
// YOUR CODE:

// TASK 6: Add "Rust" to the end
// YOUR CODE:


// TASK 7: Add "TypeScript" to the beginning
// YOUR CODE:


// TASK 8: Remove the last language
// YOUR CODE:



// TASK 9: Remove the first language
// YOUR CODE:



// ═══════════════════════════════════════════════════════════════
// PRACTICE 2: TODO LIST MANAGER
// Build a simple todo list with array operations
// ═══════════════════════════════════════════════════════════════

let todos = [];

// TASK 1: Add these todos - "Wake up", "Code", "Eat", "Sleep"
todos.push("Wake up", "Code", "Eat", "Sleep");
console.log("Initial todos:", todos);
// Output: [ 'Wake up', 'Code', 'Eat', 'Sleep' ]

// TASK 2: you forget to add "Brush teeth" as the second task (after Wake up)

// Output: [ 'Wake up', 'Brush teeth', 'Code', 'Eat', 'Sleep' ]

// TASK 3: Mark "Code" as done by removing it
const codeIndex = todos.indexOf("Code");
if (codeIndex !== -1) {
    todos.splice(codeIndex, 1);
}
console.log("After completing 'Code':", todos);
// Output: [ 'Wake up', 'Brush teeth', 'Eat', 'Sleep' ]

// TASK 4: Add an urgent task "Meeting" at the beginning
todos.unshift("Meeting");
console.log("Urgent task added:", todos);
// Output: [ 'Meeting', 'Wake up', 'Brush teeth', 'Eat', 'Sleep' ]

// TASK 5: Get only the first 3 todos (preview)
const preview = todos.slice(0, 3);
console.log("Preview (first 3):", preview);
// Output: [ 'Meeting', 'Wake up', 'Brush teeth' ]

// TASK 6: Check if "Eat" is still pending
console.log("Is 'Eat' pending?", todos.includes("Eat")); // true

// TASK 7: Replace "Eat" with "Lunch" and "Dinner"
const eatIndex = todos.indexOf("Eat");
todos.splice(eatIndex, 1, "Lunch", "Dinner");
console.log("After replacing Eat:", todos);
// Output: [ 'Meeting', 'Wake up', 'Brush teeth', 'Lunch', 'Dinner', 'Sleep' ]

// TASK 8: Clear all completed (remove first 2 tasks)
const completed = todos.splice(0, 2);
console.log("Completed:", completed);
console.log("Remaining:", todos);
// Completed: [ 'Meeting', 'Wake up' ]
// Remaining: [ 'Brush teeth', 'Lunch', 'Dinner', 'Sleep' ]

// TASK 9: Show todos in reverse order (without modifying original)
// destructure and reverse first, 
// the console log both


# JavaScript — Student Notes
## Chapter 1: Introduction, Terminal & Your First Program

---

## 1.1 What is JavaScript?

JavaScript is a **programming language**. A programming language is a way for humans to give instructions to a computer. The computer then executes those instructions, one by one, from top to bottom.

JavaScript was created in 1995 by a programmer named Brendan Eich. He built the first version in just 10 days. The original goal was simple: make web pages respond to user actions — things like clicking a button, submitting a form, or showing an error message.

Today, JavaScript is one of the most widely used programming languages in the world. It runs everywhere: in browsers, on servers, in mobile apps, and even on small embedded devices.

---

## 1.2 What Problem Does JavaScript Solve?

Before JavaScript existed, web pages were completely **static**. A static page is like a printed newspaper — once it is printed, nothing can change. You could not interact with it. You could not click a button and see new content appear. You could not fill in a form and get an error message without the entire page reloading.

JavaScript solved this by making web pages **dynamic** and **interactive**. It lets the page respond to what the user does, without having to reload everything from the server.

Here is a simple way to understand the three technologies that build the web:

| Technology | Role | Think of it as... |
|---|---|---|
| HTML | Structure — what is on the page | The skeleton of a building |
| CSS | Style — how it looks | The paint, furniture, decoration |
| JavaScript | Behavior — what it does | The electricity and plumbing |

A building can exist without electricity, but it would be dark and useless. Similarly, a website can exist without JavaScript, but it would be static and limited.

---

## 1.3 Why Are We Using Node.js — Not a Browser?

This is an important question. You may have heard that JavaScript runs in the browser (Chrome, Firefox, etc.). That is true. But in this course, we will run JavaScript using **Node.js**, at least in the beginning.

### What is Node.js?

Node.js is a program that allows you to run JavaScript **outside of the browser** — directly on your computer, through the terminal. It was created in 2009 by Ryan Dahl.

Before Node.js, JavaScript could only run inside a browser. Node.js took the same JavaScript engine that Chrome uses (called V8) and made it available as a standalone tool.

### Browser JavaScript vs Node.js JavaScript

| Feature | Browser | Node.js |
|---|---|---|
| Where it runs | Inside Chrome, Firefox, etc. | Directly on your computer |
| Can access the web page (HTML) | Yes | No |
| Can read/write files on your computer | No (security) | Yes |
| Can run without opening a browser | No | Yes |
| Good for | Making websites interactive | Scripts, servers, backend code |
| How you run code | Open an HTML file in browser | Type `node filename.js` in terminal |

### Why are we starting with Node.js?

Because Node.js lets you focus on **learning JavaScript as a language** without worrying about HTML, buttons, or web pages. You write code, you run it in the terminal, you see the result immediately. It is the fastest and cleanest way to learn.

Once your JavaScript is strong, moving to browser JavaScript or frameworks like React becomes straightforward.

---

## 1.4 The Terminal — Your Most Important Tool

The terminal (also called the command line or command prompt) is a text-based interface to your computer. Instead of clicking icons with a mouse, you type commands.

It feels uncomfortable at first. That is normal. Every programmer felt that way. After a few weeks, you will prefer it.

### Why learn the terminal?

- Node.js runs through the terminal
- You navigate to your project folders through the terminal
- You install packages and tools through the terminal
- Professional developers use it every single day

---

## 1.5 Navigating the Terminal on Windows (Command Prompt)

To open Command Prompt on Windows: press `Windows + R`, type `cmd`, press Enter.

### Essential Commands

```
pwd
```
Stands for "Print Working Directory". Shows you which folder you are currently inside.

```
dir
```
Lists all files and folders inside your current folder. (On Linux/Mac this is `ls`.)

```
cd folder-name
```
Stands for "Change Directory". Moves you into a folder.

```
cd ..
```
Moves you one level up — back to the parent folder. The two dots `..` always mean "go up one level".

```
cd \
```
Takes you all the way to the root of the drive (e.g., `C:\`).

```
mkdir folder-name
```
Creates a new folder.

```
cls
```
Clears the terminal screen. Useful when it gets cluttered.

### A Practical Example — Step by Step

Imagine you want to create a folder for your JavaScript course, navigate into it, and run a file.

```
C:\Users\YourName> mkdir javascript-course
C:\Users\YourName> cd javascript-course
C:\Users\YourName\javascript-course> mkdir day-01
C:\Users\YourName\javascript-course> cd day-01
C:\Users\YourName\javascript-course\day-01> node hello.js
```

Read the prompt carefully. The text before `>` tells you exactly which folder you are currently in. This is called your **current working directory**.

---

## 1.6 Navigating the Terminal with Git Bash

Git Bash is a terminal that gives you a Unix-style shell on Windows. If you have it installed, you can use it instead of Command Prompt. Many developers prefer it.

Git Bash uses the same commands as Linux and macOS.

### Essential Bash Commands

```bash
pwd
```
Print Working Directory. Shows your current location.

```bash
ls
```
List. Shows files and folders in the current directory.

```bash
ls -a
```
Shows all files including hidden ones (files starting with a dot like `.gitignore`).

```bash
cd folder-name
```
Change Directory. Move into a folder.

```bash
cd ..
```
Move up one level to the parent folder.

```bash
cd ~
```
Move to your home directory (e.g., `/c/Users/YourName`).

```bash
cd /
```
Move to the root of the file system.

```bash
mkdir folder-name
```
Make Directory. Creates a new folder.

```bash
touch filename.js
```
Creates a new empty file.

```bash
clear
```
Clears the terminal screen.

### A Practical Example in Bash

```bash
$ pwd
/c/Users/YourName

$ mkdir javascript-course
$ cd javascript-course
$ mkdir day-01
$ cd day-01
$ touch hello.js
$ node hello.js
```

The `$` symbol is the prompt — you do not type it. Everything after `$` is what you type.

### Quick Comparison: CMD vs Bash

| Action | Windows CMD | Git Bash |
|---|---|---|
| Show current folder | `cd` or `pwd` | `pwd` |
| List files | `dir` | `ls` |
| Enter folder | `cd folder` | `cd folder` |
| Go up one level | `cd ..` | `cd ..` |
| Create folder | `mkdir name` | `mkdir name` |
| Create file | (use editor) | `touch name.js` |
| Clear screen | `cls` | `clear` |
| Run a JS file | `node file.js` | `node file.js` |

---

## 1.7 Naming Conventions — Files and Directories

This is important and many beginners ignore it. Bad naming causes real problems later.

### Rule 1: Never use spaces in file or folder names

```
❌ Bad:
my project
javascript notes
hello world.js

✅ Good:
my-project
javascript-notes
hello-world.js
```

Why? Because the terminal treats spaces as separators between commands. If your folder is named `my project`, the terminal thinks `my` and `project` are two separate things. You would have to put quotes around the name every time, or use a backslash before the space. It causes unnecessary pain.

### Rule 2: Use lowercase letters

```
❌ Avoid:
MyProject
HelloWorld.js
JavaScriptNotes

✅ Prefer:
my-project
hello-world.js
javascript-notes
```

Why? Because some operating systems (like Linux servers) are case-sensitive. `Hello.js` and `hello.js` are two different files on Linux. Using all lowercase avoids bugs when your code eventually runs on a server.

### Rule 3: Use hyphens to separate words in file and folder names

```
✅ Good file/folder names:
day-01
hello-world.js
student-notes.md
my-first-project
javascript-course
```

### Rule 4: Be descriptive

```
❌ Bad:
file1.js
test.js
aaa.js
temp.js

✅ Good:
calculator.js
user-validator.js
shopping-cart.js
```

A file name should tell you what is inside it without opening it.

---

## 1.8 Naming Conventions — JavaScript Variables and Code

Inside your JavaScript code, the naming rules are different from file names.

### camelCase — used for variables and functions

The first word is all lowercase. Each new word starts with a capital letter. No spaces, no hyphens.

```js
// camelCase examples:
let firstName = "Ahmed";
let totalPrice = 250;
let isLoggedIn = true;
let numberOfStudents = 30;
let userEmailAddress = "ahmed@email.com";

function calculateTotal() {}
function getUserName() {}
function sendEmailNotification() {}
```

### SCREAMING_SNAKE_CASE — used for constants that never change

All uppercase letters, words separated by underscores. Used for values that are fixed across the entire program.

```js
// SCREAMING_SNAKE_CASE for true constants:
const PI = 3.14159;
const MAX_LOGIN_ATTEMPTS = 3;
const DATABASE_URL = "mongodb://localhost:27017";
const TAX_RATE = 0.17;
```

### PascalCase — used for classes (you will learn this later)

Each word starts with a capital letter, including the first one.

```js
// PascalCase — for classes:
class UserAccount {}
class ShoppingCart {}
class ProductManager {}
```

### Summary Table

| Type | Convention | Example |
|---|---|---|
| Variable | camelCase | `userAge`, `totalPrice` |
| Function | camelCase | `calculateTotal()` |
| Constant (never changes) | SCREAMING_SNAKE_CASE | `MAX_USERS`, `TAX_RATE` |
| Class | PascalCase | `UserAccount` |
| File name | kebab-case (lowercase + hyphens) | `user-profile.js` |
| Folder name | kebab-case | `day-01`, `my-project` |

---

## 1.9 Your First JavaScript Program

Create a file called `hello.js` inside your project folder.

```js
// hello.js

console.log("Hello, World!");
console.log("My name is Ahmed.");
console.log("I am learning JavaScript with Node.js.");
```

To run it, open your terminal, navigate to the folder where you saved `hello.js`, and type:

```
node hello.js
```

You should see:

```
Hello, World!
My name is Ahmed.
I am learning JavaScript with Node.js.
```

### What is `console.log()`?

`console.log()` is a built-in JavaScript tool that prints output to the terminal. It is the most basic way to see what your code is doing. You will use it constantly while learning.

- The word `console` refers to the terminal/output area
- `.log()` means "write this out"
- Whatever you put inside the parentheses gets printed

```js
console.log("This is text");       // prints: This is text
console.log(42);                   // prints: 42
console.log(true);                 // prints: true
console.log(10 + 5);               // prints: 15
console.log("My age is", 25);      // prints: My age is 25
```

### What are comments?

Comments are lines that JavaScript completely ignores. They are notes for the human reading the code.

```js
// This is a single-line comment. JavaScript ignores this line.

/*
  This is a multi-line comment.
  Everything between the slash-star and star-slash is ignored.
  Use this for longer explanations.
*/

console.log("This line runs."); // This is an inline comment
```

Write comments often. When you return to your code after a week, comments remind you what you were thinking.

---

## 1.10 How to Run a JavaScript File — Step by Step

1. Write your code and save it as a `.js` file (e.g., `hello.js`)
2. Open your terminal (CMD or Git Bash)
3. Navigate to the folder where the file is saved using `cd`
4. Type `node hello.js` and press Enter
5. The output appears on the next line

```
C:\Users\YourName\javascript-course\day-01> node hello.js
Hello, World!
```

If you see an error like "Cannot find module" or "No such file", you are in the wrong folder. Use `dir` (CMD) or `ls` (Bash) to see the files in your current folder, and `cd` to navigate to the right one.

---

## Key Takeaways from Chapter 1

- JavaScript is a programming language that makes software interactive and dynamic
- We use Node.js in this course so we can run JavaScript directly from the terminal, without a browser
- The terminal is a text-based interface — get comfortable with it early
- Never use spaces in file or folder names — use hyphens instead
- Use camelCase for variable and function names in JavaScript code
- `console.log()` prints output to the terminal — you will use it constantly
- To run a file: navigate to its folder in the terminal, then type `node filename.js`
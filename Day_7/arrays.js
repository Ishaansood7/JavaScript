// Creating an Array

// Method 1
let fruits = ["Apple", "Banana", "Mango"];

// Method 2
let numbers = [10, 20, 30, 40];

// Method 3
let mixed = ["Ishaan", 20, true];

// Method 4
let data = [
    "Ishaan",
    20,
    true,
    null,
    ["HTML", "CSS"],
    { city: "Ludhiana" }
];

console.log(data);

// Accessing Elements from an Array

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Updating Elements

fruits[1] = "Orange";

console.log(fruits);

// Array length
console.log(fruits.length);

// Accessing last index
console.log(fruits[fruits.length - 1]);

// Function in array

// 1. Push - Add element

fruits.push("Guava");

console.log(fruits);

numbers.push(3, 4, 5);

console.log(numbers);

// Pop - Remove Last Element
fruits.pop();

console.log(fruits);

let removed = fruits.pop();

console.log(removed);

// Unshift - Add element at beginning

fruits.unshift("Banana");

console.log(fruits);

// Shift - Remove 1st element
fruits.shift();

console.log(fruits);

// Slice
numbers.slice(1, 4);

console.log(numbers);

//Splice

let colors = ["Red", "Blue"];

colors.splice(1, 0, "Green");

console.log(colors);

// Looping through Arrays

for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


for (let fruit of fruits) {

    console.log(fruit);

}
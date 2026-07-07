// ==========================================
// 🟢 EASY EXERCISES
// ==========================================

console.log("--- 🟢 Easy: Numbers 1 to 10 ---");
// Print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n--- 🟢 Easy: Numbers 10 to 1 ---");
// Print numbers from 10 to 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("\n--- 🟢 Easy: Even Numbers 2 to 20 ---");
// Print all even numbers from 2 to 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("\n--- 🟢 Easy: Odd Numbers 1 to 19 ---");
// Print all odd numbers from 1 to 19.
for (let i = 1; i <= 19; i += 2) {
    console.log(i);
}

console.log("\n--- 🟢 Easy: Name 5 times ---");
// Print your name 5 times.
for (let i = 0; i < 5; i++) {
    console.log("Ishaan");
}


// ==========================================
// 🟡 MEDIUM EXERCISES
// ==========================================

console.log("\n--- 🟡 Medium: Sum 1 to 100 ---");
// Find the sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of numbers from 1 to 100 is: ${sum}`);

console.log("\n--- 🟡 Medium: Multiplication Table of 7 ---");
// Print the multiplication table of 7.
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

console.log("\n--- 🟡 Medium: Squares of 1 to 10 ---");
// Print the square of numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(`Square of ${i} is: ${i * i}`);
}

console.log("\n--- 🟡 Medium: Divisible by 5 Count (1 to 50) ---");
// Count how many numbers between 1 and 50 are divisible by 5.
let count = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        count++;
    }
}
console.log(`Total numbers divisible by 5: ${count}`);

console.log("\n--- 🟡 Medium: Divisible by both 3 and 5 (1 to 100) ---");
// Print all numbers divisible by both 3 and 5 from 1 to 100.
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
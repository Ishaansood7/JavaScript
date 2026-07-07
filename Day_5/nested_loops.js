console.log("\n--- 🔷 Pattern 1: Square of Stars ---");
/*
Task: Print a 5x5 square of stars.
*****
*****
*****
*****
*****
*/
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += "*";
    }
    console.log(row);
}


console.log("\n--- 🔷 Pattern 2: Right-Angled Triangle ---");
/*
Task: Print a triangle that grows with each row.
*
**
***
****
*****
*/
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}


console.log("\n--- 🔷 Pattern 3: Number Triangle ---");
/*
Task: Print a triangle using numbers matching the row number.
1
22
333
444
555
*/
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;
    }
    console.log(row);
}


console.log("\n--- 🔷 Pattern 4: Inverted Triangle ---");
/*
Task: Print a triangle that shrinks with each row.
*****
****
***
**
*
*/
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}


console.log("\n--- 🔷 Pattern 5 (Hard): The Pyramid ---");// ==========================================
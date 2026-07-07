function analyzePasswordStrength(password) {

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;

    // Define string patterns to match characters manually without complex regex structures
    const specialCharactersList = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

    // 2. Loop through every character using the for...of loop
    for (const char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } else if (char >= '0' && char <= '9') {
            hasNumber = true;
        } else if (specialCharactersList.includes(char)) {
            hasSpecialChar = true;
        }
    }

    // 3. Score calculation based on criteria met
    let score = 0;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecialChar) score++;

    // Enforce a length check criteria rule for strong passwords
    const isLongEnough = password.length >= 8;

    let strength = "Weak 🔴";

    // 4. Conditional tier mapping for password evaluation
    if (score === 4 && isLongEnough) {
        strength = "Very Strong 🔥";
    } else if (score >= 3 && isLongEnough) {
        strength = "Strong 🟢";
    } else if (score >= 2) {
        strength = "Medium 🟡";
    }

    // 5. Displaying data diagnostics directly to the user
    console.log(`\n🔒 Password : "${password}"`);
    console.log(`📏 Length: ${password.length} characters`);
    console.log(`🔠 Has Uppercase:  ${hasUppercase ? "✓ Yes" : "✗ No"}`);
    console.log(`🔡 Has Lowercase:  ${hasLowercase ? "✓ Yes" : "✗ No"}`);
    console.log(`🔢 Has Numbers:     ${hasNumber ? "✓ Yes" : "✗ No"}`);
    console.log(`🔣 Has Special:     ${hasSpecialChar ? "✓ Yes" : "✗ No"}`);
    console.log(`💪 Overall Strength: ${strength}`);
}

analyzePasswordStrength("P@ssw0rd123");
analyzePasswordStrength("weakpass");

/* //Conditional Statements

//if statement
let age = 20;

if (age >= 18) {
    console.log("You can vote.");
}

// if else statement

let age = 15;

if (age >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
}

// if elseif ladder

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

// Nested if
let age = 20;
let hasLicense = true;

if (age >= 18) {

    if (hasLicense) {
        console.log("You can drive.");
    }

}

// Switch statement

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
*/

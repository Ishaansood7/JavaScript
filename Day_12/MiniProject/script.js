// 1. Grab DOM Elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const course = document.getElementById('course');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const genderError = document.getElementById('genderError');
const successMessage = document.getElementById('successMessage');

// 2. Add Submit Event Listener
form.addEventListener('submit', function (e) {
    // Prevent the page from refreshing when the form is submitted
    e.preventDefault();

    // Track if the entire form is valid
    let isFormValid = true;

    // --- Rule 1: Name cannot be empty ---
    if (fullName.value.trim() === '') {
        setInvalid(fullName);
        isFormValid = false;
    } else {
        setValid(fullName);
    }

    // --- Rule 2: Email must contain '@' ---
    if (!email.value.includes('@')) {
        setInvalid(email);
        isFormValid = false;
    } else {
        setValid(email);
    }

    // --- Rule 3: Phone must be exactly 10 digits ---
    // We check length and use a simple regex to ensure they are all numbers
    const phoneVal = phone.value.trim();
    if (phoneVal.length !== 10 || !/^\d+$/.test(phoneVal)) {
        setInvalid(phone);
        isFormValid = false;
    } else {
        setValid(phone);
    }

    // --- Rule 4: Age must be 18+ ---
    if (age.value === '' || parseInt(age.value) < 18) {
        setInvalid(age);
        isFormValid = false;
    } else {
        setValid(age);
    }

    // --- Rule 5: Gender must be selected ---
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (!genderSelected) {
        genderError.style.display = 'block';
        isFormValid = false;
    } else {
        genderError.style.display = 'none';
    }

    // --- Rule 6: Course must be selected ---
    if (course.value === '') {
        setInvalid(course);
        isFormValid = false;
    } else {
        setValid(course);
    }

    // --- Rule 7: Password ≥ 8 characters ---
    if (password.value.length < 8) {
        setInvalid(password);
        isFormValid = false;
    } else {
        setValid(password);
    }

    // --- Rule 8: Confirm Password must match ---
    if (confirmPassword.value === '' || confirmPassword.value !== password.value) {
        setInvalid(confirmPassword);
        isFormValid = false;
    } else {
        setValid(confirmPassword);
    }

    // --- Final Check: Success Message ---
    if (isFormValid) {
        // Show success message
        successMessage.classList.remove('hidden');

        // Clear the form fields completely
        form.reset();

        // Remove the green borders from the cleared fields
        const allInputs = document.querySelectorAll('.valid');
        for (let i = 0; i < allInputs.length; i++) {
            allInputs[i].classList.remove('valid');
        }
    } else {
        // Hide success message if they made a mistake on a subsequent try
        successMessage.classList.add('hidden');
    }
});

// 3. Helper Functions for styling
// These functions add the corresponding CSS classes to highlight the fields

function setInvalid(element) {
    element.classList.add('invalid');
    element.classList.remove('valid');
    // Add 'error' class to parent to show the <small> error text
    element.parentElement.classList.add('error');
}

function setValid(element) {
    element.classList.add('valid');
    element.classList.remove('invalid');
    // Remove 'error' class from parent to hide the <small> error text
    element.parentElement.classList.remove('error');
}
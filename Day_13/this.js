// This keyword is a special keyword in JS 

// global scope

console.log(this); //returns windows

// function scope
function keyword() {
    console.log(this); // returns windows
}

keyword();

let obj = {
    name: "Ishaan",
    age: 20,
    greet: function () { // Method - In JS, when a function is created as a (value) inside an object then it is called as method
        console.log(this); //Returns object
    },
};

obj.greet();
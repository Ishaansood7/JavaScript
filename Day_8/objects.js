// Creating Objects

// Method 1
const student = {
    name: "Ishaan",
    age: 20,
    city: "Ludhiana"
};

console.log(student);

// Method 2
const person = {

    name: "Ishaan",

    age: 20,

    isStudent: true,

    skills: ["HTML", "CSS", "JavaScript"]

};

console.log(person);

// Accessing properties
// Method 1
console.log(student.name);

console.log(student.age);

// Method 2
console.log(student["name"]);

console.log(student["city"]);

// Updating Properties

student.age = 21;
console.log(student);

// Adding new Properties

student.course = "BCA";

console.log(student);

// Deleting property

delete student.city;

console.log(student);

// Object Methods
const st = {
    name: "Ishaan",

    sayHi: function () {
        console.log("Hello!");
    }
}


// Using this keyword
const st_1 = {
    name: "Ishaan",

    greet() {
        console.log("Hello " + this.name);
    }
};

st_1.greet();

// Nested Objects
const s = {
    name: "Ishaan",
    address: {
        city: "Ludhiana",
        state: "Punjab"
    }
};

console.log(s.address.city);

// Object.keys()

console.log(Object.keys(s));

console.log(Object.values(s));

console.log(Object.entries(s));

// Looping in objects
const st_2 = {

    name: "Ishaan",
    age: 20,
    city: "Ludhiana"
};

for (let key in st_2) {
    console.log(key, st_2[key]);
}

// Spread operator
const person_1 = {
    name: "Ishaan",
    age: 20
};

const copy = {
    ...person_1
};

console.log(copy);


// Object reference
const obj1 = {

    name: "Ishaan"

};

const obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name);



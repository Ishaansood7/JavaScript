// Constructor Function
function CreateBiscuit(name, price, qty, company, category) {
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
    this.category = category;
}

let biscuit1 = new CreateBiscuit("Oreo", 10, 5, "Cadbury", "Chocolate");
let biscuit2 = new CreateBiscuit("Gluecose", 20, 5, "Sunfeast", "Gluecose");

function CreatePencil(name, color, shape, price) {
    this.name = name;
    this.color = color;
    this.shape = shape;
    this.price = price;
    // this.write = function (text) {
    //     let h1 = document.createElement("h1");
    //     h1.textContent = text;
    //     h1.style.color = color;
    //     document.body.append(h1);
    // }
}

let pencil1 = new CreatePencil("DOMS", "Blue", "Triangle", 5);
let pencil2 = new CreatePencil("Natraj", "Red", "Hexagonal", 2);
let pencil3 = new CreatePencil("Apsara", "Grey", "Circle", 4);



// Prototype - Mechanism that inherits properties of 1 object in another's
// Syntax - ConstructorFunction.prototype.MethodName = function() {--code--}
// Example
/*CreatePencil.prototype.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
}*/


// Example 2
function Student(name) {
    this.name = name;
}

Student.prototype.greet = function () {
    console.log("Hello! " + this.name);
}; // belongs to functions

let s1 = new Student("Aman");
let s2 = new Student("Ishaan");

s1.greet();
s2.greet();

const s3 = new Student();
console.log(s1.__proto__); //belongs to objects

// Creating Class
// Syntax - class className {}

// ES6 claases
// Example :

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

const User = new User("Ishaan", 20);

User.study();


class createPen {
    constructor(name, qty, company, color, price) {
        this.name = name;
        this.qty = qty;
        this.company = company;
        this.color = color;
        this.price = price;
    }

    write(text) {
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1);
    }

    erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        })
    }
}

let p1 = new createPen("TriMax", 1, "Renolds", "Darkblue", 50);
let p2 = new createPen("WritoMeter", 3, "Flair", "Purple", 25);
let p3 = new createPen("V5", 2, "Pilot", "Write", 30);



// Example 2
// Creating Cart Class
class Cart {
    constructor(name, price, qty, company) {
        this.name = name;
        this.price = price;
        this.qty = qty;
        this.company = company;
    }

    displayProduct() {

        const product = document.createElement("div");

        product.innerHTML = `
            <h3>${this.name}</h3>
            <p>Company : ${this.company}</p>
            <p>Price : ₹${this.price}</p>
            <p>Quantity : ${this.qty}</p>

            <button class="buy">Purchase</button>
            <button class="discard">Discard</button>

            <hr>
        `;

        // Purchase Button
        product.querySelector(".buy").addEventListener("click", () => {
            product.style.backgroundColor = "lightgreen";
            alert(`${this.name} Purchased Successfully!`);
        });

        // Discard Button
        product.querySelector(".discard").addEventListener("click", () => {
            product.remove();
            alert(`${this.name} Discarded!`);
        });

        document.getElementById("products").appendChild(product);
    }
}

// Creating Objects
const product1 = new Cart("Laptop", 55000, 1, "HP");
const product2 = new Cart("Smartphone", 25000, 2, "Samsung");
const product3 = new Cart("Headphones", 3000, 1, "Sony");
const product4 = new Cart("Keyboard", 1200, 1, "Logitech");
const product5 = new Cart("Smart Watch", 7000, 1, "Noise");

// Displaying Products
product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
product4.displayProduct();
product5.displayProduct();


//Inheritance
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);

        this.course = course;
    }

    study() {
        console.log(`${this.name} is studying ${this.course}`);
    }
}

const s = new Student("Ishaan", "BCA");

s.greet();
s.study();

// Getter & Setter
/*
class Student {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

const s = new Student("Ishaan");

console.log(s.name);

s.name = "Rahul";

console.log(s.name);*/

// Static Method

class MathHelper {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathHelper.add(10, 20));
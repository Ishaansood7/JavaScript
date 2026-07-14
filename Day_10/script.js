/* Event Listener
    Syntax : element.addEventListener("event_name", function(){--}); */

let h1 = document.querySelector("h1");

//Click Event :
h1.addEventListener("click", function () {
    h1.style.color = "red";
});

//double click Event :
function dblclick() {
    p.style.color = "green";
}

let p = document.querySelector("p");

p.addEventListener("dblclick", dblclick);

//Remove Event Listener
// p.removeEventListener("dblclick", dblclick);

//Input Listener
let input = document.querySelector("input");

// input.addEventListener("input", function () {
//     console.log("Typed");
// });

input.addEventListener("input", function (evt) {
    // console.log(evt); - Showing (Input Event Details)
    // console.log(evt.data); - Printing Each char while typing on input field;

    //If you click backspace then it will return (null value) in console, so to prevent it we use the condition : 
    if (evt.data !== null) {
        console.log(evt.data);
    }
});

//Change Event : Occurs when there is a change in input, select or textarea.

let select = document.querySelector("select");
let device = document.querySelector("#device");

select.addEventListener("change", function (dets) {
    console.log(dets.target.value); //Showing value from (target field) while selecting in console. Also it will show the value represented in (value attribute) in the respective tag.
    device.textContent = `${dets.target.value} Device Selected`;
});

//Mouse Events

// let box = document.querySelector("#box");

// box.addEventListener("mouseover", function () {
//     box.style.backgroundColor = "yellow";
// });

// box.addEventListener("mouseout", function () {
//     box.style.backgroundColor = "red";
// });

// window.addEventListener("mousemove", function (x) {
// console.log(x);
// console.log(x.clientX, x.clientY);
// box.style.top = x.clientY + "px";
// box.style.left = x.clientX + "px";
// });

//Event Objects - variable inside the eventlistener function
//for e.g (in this case e is an object)

let rect = document.querySelector("#rectangle");

rect.addEventListener("click", function (e) {
    console.log(e);
});

// Click the box to get an object of an element
// Target - element jispe event hua (in this case rectangle)
// Type - type of eventlistener (in this case click)

// preventDefault() - Prevent reloading form
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
});

// Event Bubbling - Kind of Inheritance (finding eventlistener from child to parent)

document.querySelector(".nav").addEventListener("click", () => {
    alert("Hello");
});


document.querySelector("button").addEventListener("click", () => {
    console.log("Button clicked");
});

document.querySelector(".c").addEventListener("click", () => {
    console.log("c clicked");
});

document.querySelector(".b").addEventListener("click", () => {
    console.log("b clicked");
});

document.querySelector(".a").addEventListener("click", () => {
    console.log("a clicked");
});

// Event Capturing - vice-versa of Event Bubbling (finding eventlistener from parent to child)

document.querySelector(".a").addEventListener("click", () => {
    console.log("a clicked");
}, true);

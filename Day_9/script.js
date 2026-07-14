// TEXT MANIPULATION

// Selecting Elements from HTML
// Method 1.
let heading = document.getElementById("title"); //("Tag_Name");
console.log(heading);
console.dir(heading); //Showing all the property of that tag in console.

// Method 2
let abcd = document.getElementsByClassName("abcd");
console.dir(abcd);

//Method 3
let tag = document.querySelector("h3");
console.dir(tag);

// Method 4
let dir = document.querySelectorAll("h2");
console.dir(dir);

// Changing text
/* Syntax : variable_name.property_name = value_to_be_changed; */

heading.innerText = "Welcome Ishaan";
// heading.innerHTML = "Welcome Ishaan" (It helps to change HTML, which means you can write HTML tag inside it)
// heading.textContent = "Welcome Ishaan"
tag.innerHTML = "<i>Hey</>";

//ATTRIBUTE MANIPULATION

//1. Select Tag
let a = document.querySelector("a");
console.dir(a);

//2. Changing Value
//Method 1.
//tag_variable.attribute_name;
a.href = "https://www.google.com";

//Method 2.
//tag_variable.setAttribute("attribute_name", "attribute_value")
a.setAttribute("href", "https://www.youtube.com");

//Example :
let img = document.querySelector("img");
img.setAttribute("src", "https://images.unsplash.com/photo-1782126679960-348977c700a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8");

//3. Showing value of Attribute
// console.log(img.href);
console.log(a.getAttribute("href"));

//4. Remove Attribute
a.removeAttribute("href");

//5. Create Attribute


//DYNAMIC DOM MANIPULATION
//1. Creating Element using DOM

let h4 = document.createElement("h4");
h4.textContent = "Example of Dynamic DOM";
console.log(h4);

document.body.append(h4); //Shows after script tag
//document.body.prepend(h4) - Shows before script tag

//OR
//document.querySelector("body").append(h4);

//Remove Tag
// heading.remove();

let h1 = document.createElement("h1");
h1.textContent = "Creating an Element";

document.querySelector("div").appendChild(h1);

// Style Update

// Method 1.

let span = document.querySelector("span");
span.style.color = "Blue";
span.style.backgroundColor = "Pink";
span.style.fontFamily = "Gilroy"
span.style.border = "2px solid black";
span.style.padding = "5px";
console.dir(span);


//How to Apply or Remove Class using JS
// h1.classList.add("css")
// span.classList.add("css")
// span.classList.remove("css")
// span.classList.toggle("css")
// heading.classList.toggle("css");

//Selecting and Removing Item from the list

// let ul = document.querySelector("ul")
// let li = document.querySelector("li")

// ul.removeChild(li);

// Adding class on even class in a list

// let li = document.querySelectorAll("ul li:nth-child(2n)")

// console.dir(li);

// li.forEach(function (elem) {
//     elem.classList.add("css")
// })
// Chapter 46,48

const button = document.getElementById("myButton");

button.addEventListener("click", function () {
    alert("Button clicked!");
});

const elementToHide = document.getElementById('elementToHide');
const clickButton = document.getElementById('clickButton');

const scrollToTopLink = document.getElementById('scrollToTopLink');

const alertButton = document.getElementById('alertButton');


// Chapter 49,50

var userInput = prompt("Enter something:");

if (userInput !== null) {
  console.log("You entered: " + userInput);
} else {
  
  console.log("You canceled the input.");
}

function getValue() {
    var checkbox = document.getElementById("myCheckbox");

    if (checkbox.checked) {
        console.log("Checkbox value is: " + checkbox.value);
    } else {
        console.log("Checkbox is not checked");
    }
}

var field = document.getElementById("myField");


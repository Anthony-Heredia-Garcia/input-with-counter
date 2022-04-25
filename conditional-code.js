const myName = document.getElementById("product-name");
const submitButton = document.querySelector('button');
console.log('empty string');


// if (myName === "Tony") {
//   console.log("Hello!");
// } else if (myName) {
//   console.log("Not an empty string");
// } else {
//   console.log("Empty String!");
// }

function myFunction() {
    if (myName.value) {
        console.log(myName.value);
    } else {
        console.log('empty string');
    }
}

submitButton.addEventListener('click', myFunction);

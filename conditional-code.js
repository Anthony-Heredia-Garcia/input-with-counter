const myName = document.getElementById("product-name");
const submitButton = document.querySelector("button");

// if (myName === "Tony") {
//   console.log("Hello!");
// } else if (myName) {
//   console.log("Not an empty string");
// } else {
//   console.log("Empty String!");
// }

// function getRandom() {
//     randomNumber = Math.random()
//     console.log(randomNumber);
// }


// function getRandom() {
//     newNum = Math.random();
//     console.log(newNum);
//     randomNum = newNum;
//     while (randomNum < .5) {
//         getRandom();
//     }
//     if (randomNum > .5) {
//         console.log('Target reached');
//     }
// }
let randomNum

function getRandom() {
    do {
        newNum = Math.random();
        console.log(newNum);
        randomNum = newNum;
    } while (randomNum < .5);
    if (randomNum > .5) {
        console.log('Number is greater than .5');
    }
}

submitButton.addEventListener("click", getRandom);

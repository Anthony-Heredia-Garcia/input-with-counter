let paragraphElement = document.querySelector('p');
let inputBox = document.querySelector('input');


// function changeBodyColor() {
//     document.body.style.backgroundColor = 'blue';
// }

function changeParagraphText() {
    paragraphElement.textContent = 'YoU cLickEd me YoU bsSTARD!';
}

paragraphElement.addEventListener('click', changeParagraphText);

function userKeyPress() {
    console.log(inputBox.value);
}

inputBox.addEventListener('input', userKeyPress);
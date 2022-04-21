// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
    
    let firstButton = document.body.children[2].children[4];

//    - Select the second button by using an "id"

    let secondButton = document.getElementById('background-btn');
    
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
    // function dirTheButton() {
    //     console.dir(firstButton);
    // }

    firstButton.addEventListener('click', dirTheButton);

//    - Output the second button WITHOUT using the variable in which it's stored

    // function dirOtherButton() {
    //     console.dir(document.body.children[2].children[6]);
    // }

    secondButton.addEventListener('click', dirOtherButton);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements

    oneAndThree = [document.body.children[2].children[1], document.body.children[2].children[3]];
    console.log(oneAndThree);

//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

function dirTheButton() {
    oneAndThree[1].remove();
}

//    - The second button changes the background color of the first paragraph to blue

// function dirOtherButton() {
//     oneAndThree[0].style.backgroundColor = 'blue';
// }

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function dirOtherButton () {
    oneAndThree[0].classList.add('added-background');
}

// document.body.children[1].children[0].href = 'https://google.com';

// let anchorElement = document.getElementById('external-link');
// anchorElement.href = 'https://google.com';

// anchorElement = document.querySelector('p a')
// anchorElement.href = 'https://academind.com'

// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice

console.dir(document);

let title = document.getElementById('headline');
console.log(title);
// title.innerHTML = 'Hello der!';

let wrapper = document.querySelector('.link-wrapper');
console.log(wrapper);

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https:google.com';
newAnchorElement.textContent = 'This leads to Google!';


let firstParagraph = document.querySelector('p');

firstParagraph.append(newAnchorElement);

let firstH1Element = document.querySelector('h1');
firstH1Element.remove();

firstParagraph.parentElement.append(firstParagraph);
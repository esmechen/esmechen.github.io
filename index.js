// Toggles between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



// The typewriter effect for the intro text in landing div in index.html
const introArray = ["is happy to see you here!", "is a senior at Dartmouth College.",
             "is interested in medicine and technology.",
             "studies neuroscience and computer science.", "is a violinist.",
             "likes to play tennis.", "is into photography.", "is an avid reader.",
             "can speak Mandarin, Cantonese, and Spanish.",
             "likes lemon tarts and tiramisu cheesecake."];

let count = 0;  // refers to the block of text
let index = 0;  // refers to the letter in the block of text
let currentText = '';
let letter = '';

(function type() {
    if (count === introArray.length) {
        count = 0;
    }
    currentText = introArray[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-animation').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 150);  // invokes function every 400 ms
}()); // this is a self-invoked function

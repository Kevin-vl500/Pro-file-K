// Split each word into individual letters inside span elements.
let words = document.querySelectorAll('.word');
words.forEach((word) => {
    let letters = word.textContent.split('');
    word.textContent = '';  // Clear original text.
    letters.forEach((letter) => {
        let span = document.createElement('span');
        span.textContent = letter;
        word.appendChild(span);  // Add span to the word element.
    });
});

// Animation logic.
let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

// Set the first word to be visible.
words[currentWordIndex].style.opacity = '1';

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Animate out the letters of the current word.
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = 'letter out';
        }, i * 80);
    });

    // Prepare the next word.
    nextWord.style.opacity = '1';
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = 'letter behind';
        setTimeout(() => {
            letter.className = 'letter in';
        }, 340 + i * 80);
    });

    // Update the index for the next word.
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

// Run the animation initially and set an interval for repeated changes.
changeText();
setInterval(changeText, 3000);


// Circle skill rendering ///////////////////////////////////
const circles = document.querySelectorAll('.circle');

circles.forEach((elem) => {
    const dots = parseInt(elem.getAttribute("data-dots")); // Get number of dots
    const marked = parseInt(elem.getAttribute("data-parcent")); // Get marked percentage
    const percent = Math.floor((dots * marked) / 100); // Calculate points to mark
    const rotate = 360 / dots; // Calculate rotation angle per point
    let points = "";

    // Generate 'dots' number of points dynamically
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate * i}deg"></div>`;
    }

    // Insert points into the circle
    elem.innerHTML = points;

    // Add 'point-marked' class to the appropriate number of points
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('point-marked');
    }
});


var mixer = mixitup('.portfolio-gallery');



// active menu ///////////////////////////////////
let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");

}
activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky menun ///////////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// toggle menuIcons ///////////////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.remove("open");
}




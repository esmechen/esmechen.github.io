// Toggles between adding and removing the "responsive" class to topnav when the user clicks on the icon
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// <-------------- Carousel slideshow 1 ----------------->
const carouselSlide1 = document.querySelector('.carousel-slides-1');
const carouselImages1 = document.querySelectorAll('.carousel-slides-1 img');

// Buttons
const prevBtn1 = document.querySelector('#prevBtn1');
const nextBtn1 = document.querySelector('#nextBtn1');

// Counter
let counter1 = 1;
const size1 = carouselImages1[0].clientWidth;

carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';

// Button listeners
nextBtn1.addEventListener('click',()=>{
    if (counter1 >= carouselImages1.length - 1) return;
    carouselSlide1.style.transition = "transform 0.4s ease-in-out";
    counter1++;
    carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
});
prevBtn1.addEventListener('click',()=>{
    if (counter1 <= 0) return;
    carouselSlide1.style.transition = "transform 0.4s ease-in-out";
    counter1--;
    carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
});
carouselSlide1.addEventListener('transitionend', ()=> {
    if (carouselImages1[counter1].id === 'lastClone1') {
        carouselSlide1.style.transition = "none";
        counter1 = carouselImages1.length - 2;
        carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
    }
    if (carouselImages1[counter1].id === 'firstClone1') {
        carouselSlide1.style.transition = "none";
        counter1 = carouselImages1.length - counter1;
        carouselSlide1.style.transform = 'translateX(' + (-size1 * counter1) + 'px)';
    }
});

// <-------------- Carousel slideshow 2 ----------------->
const carouselSlide2 = document.querySelector('.carousel-slides-2');
const carouselImages2 = document.querySelectorAll('.carousel-slides-2 img');

// Buttons
const prevBtn2 = document.querySelector('#prevBtn2');
const nextBtn2 = document.querySelector('#nextBtn2');

// Counter
let counter2 = 1;
const size2 = carouselImages2[0].clientWidth;

carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';

// Button listeners
nextBtn2.addEventListener('click',()=>{
    if (counter2 >= carouselImages2.length - 1) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2++;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});
prevBtn2.addEventListener('click',()=>{
    if (counter2 <= 0) return;
    carouselSlide2.style.transition = "transform 0.4s ease-in-out";
    counter2--;
    carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});
carouselSlide2.addEventListener('transitionend', ()=> {
    if (carouselImages2[counter2].id === 'lastClone2') {
        carouselSlide2.style.transition = "none";
        counter2 = carouselImages2.length - 2;
        carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    }
    if (carouselImages2[counter2].id === 'firstClone2') {
        carouselSlide2.style.transition = "none";
        counter2 = carouselImages2.length - counter2;
        carouselSlide2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    }
});

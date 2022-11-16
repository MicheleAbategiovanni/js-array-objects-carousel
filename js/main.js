const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const scrollNextEl = document.createElement("button");
const scrollPrevEl = document.createElement("button");

const containerImgEl = document.querySelector(".container-img");
let m = 0;

generateImage(containerImgEl, images, scrollNextEl, scrollPrevEl);

scrollNextEl.addEventListener("click", function () {

    const imgElements = document.querySelectorAll("img");
    const titleElements = document.querySelectorAll("h4");
    const descriptionElements = document.querySelectorAll("p");

    const oldImg = document.querySelector(".opacity");
    const oldTitle = document.querySelector(".opacity-title");
    const oldDescription = document.querySelector(".opacity-description");

    m++;

    if (m > imgElements.length - 1) {
        m = 0;
    }

    console.log(oldImg)

    oldImg.classList.remove("opacity");
    oldTitle.classList.remove("opacity-title");
    oldDescription.classList.remove("opacity-description"); 


    const newActiveEl = imgElements[m];
    const newTitleElements = titleElements[m];
    const newDescriptionElements = descriptionElements[m];


    newActiveEl.classList.add("opacity");
    newTitleElements.classList.add("opacity-title");
    newDescriptionElements.classList.add("opacity-description"); 
});

scrollPrevEl.addEventListener("click", function (){
    const imgElements = document.querySelectorAll("img");
    const titleElements = document.querySelectorAll("h4");
    const descriptionElements = document.querySelectorAll("p");

    const oldImg = document.querySelector(".opacity");
    const oldTitle = document.querySelector(".opacity-title");
    const oldDescription = document.querySelector(".opacity-description");

    m--;

    if (m < 0) {
        m = imgElements.length - 1;
    }

    console.log(oldImg)

    oldImg.classList.remove("opacity");
    oldTitle.classList.remove("opacity-title");
    oldDescription.classList.remove("opacity-description"); 


    const newActiveEl = imgElements[m];
    const newTitleElements = titleElements[m];
    const newDescriptionElements = descriptionElements[m];


    newActiveEl.classList.add("opacity");
    newTitleElements.classList.add("opacity-title");
    newDescriptionElements.classList.add("opacity-description"); 
});
const navMenu = document.querySelector(".menu");
const arrow = document.querySelector(".arrow");
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");


const textArray = ["Web Designer", "Developer", "Freelancer"];
const typingDelay = 300;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

window.addEventListener("scroll", function(){
    navMenu.classList.toggle("sticky", window.scrollY > 0);
});

function type(){
    if(charIndex < textArray[textArrayIndex].length)
    {
        if(!cursor.classList.contains("typing"))
        {
            cursor.classList.add("typing");
        }
        
        typedText.textContent +=  textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else{
        cursor.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase(){
    if(charIndex > 0){
        cursor.classList.remove("typing");
        typedText.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else{
        if(!cursor.classList.contains("typing"))
        {
            cursor.classList.add("typing");
        }
        textArrayIndex++;
        if(textArrayIndex >= textArray.length){
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1000);
    }
}

addEventListener("DOMContentLoaded", function(){
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

const highlightMenu = () => {

    const aboutMenu = document.querySelector("#about-page");
    const homeMenu = document.querySelector("#home-page");
    const resumeMenu = document.querySelector("#resume-page");
    const projectsMenu = document.querySelector("#projects-page");
    const contactMenu = document.querySelector("#contact-page");

    // const aboutMenu = document.querySelector("#about-page");
    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 800){
        homeMenu.classList.add("highlight");
        aboutMenu.classList.remove("highlight");
        resumeMenu.classList.remove("highlight");
        projectsMenu.classList.remove("highlight");
        contactMenu.classList.remove('highlight');
        console.log(scrollPos);
    }
    else if(window.innerWidth >960 && scrollPos < 1400){
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        resumeMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        console.log(scrollPos);
    }
    else if(window.innerWidth >960 && scrollPos < 3400){
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        resumeMenu.classList.add('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.remove('highlight');
        console.log(scrollPos);
    }
    else if(window.innerWidth >960 && scrollPos < 4000){
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        resumeMenu.classList.remove('highlight');
        projectsMenu.classList.add('highlight');
        contactMenu.classList.remove('highlight');
        console.log(scrollPos);
    }
    else if(window.innerWidth >960 && scrollPos < 4400){
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        resumeMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        contactMenu.classList.add('highlight');
        console.log(scrollPos);
    }
};

const highlightMenu2 = () => {

    const education = document.querySelector("#education");
    const skills = document.querySelector("#Skills");
    const projects = document.querySelector("#projects");
    const contact = document.querySelector("#contact");
    // const aboutMenu = document.querySelector("#about-page");
    let scrollPos = window.scrollY;

    if(window.innerWidth > 960 && scrollPos < 2600){
        education.classList.add("highlight-2");
        skills.classList.remove("highlight-2");
        projects.classList.remove("highlight-2");
        contact.classList.remove("highlight-2");
        console.log(scrollPos);
    }
    else if(window.innerWidth >960 && scrollPos < 3200){
        education.classList.remove('highlight-2');
        skills.classList.add('highlight-2');
        projects.classList.remove('highlight-2');
        contact.classList.remove('highlight-2');
        console.log(scrollPos);
    }
    else if(window.innerWidth >960 && scrollPos < 4200){
        education.classList.remove('highlight-2');
        skills.classList.remove('highlight-2');
        projects.classList.add('highlight-2');
        contact.classList.remove('highlight-2');
        console.log(scrollPos);
    }
    else if(window.innerWidth >960 && scrollPos < 5000){
        education.classList.remove('highlight-2');
        skills.classList.remove('highlight-2');
        projects.classList.remove('highlight-2');
        contact.classList.add('highlight-2');
        console.log(scrollPos);
    }
};


window.addEventListener("scroll", highlightMenu);
window.addEventListener("scroll", highlightMenu2);

const menu = document.querySelector('#mobile__menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

})

const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 620 && menuBars)
    {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};
menuLinks.addEventListener('click', hideMobileMenu);
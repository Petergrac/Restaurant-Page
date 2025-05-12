'use strict';

// loading the required files and additional javascript files
require('./style.css');
const createHomeSection = require('./home');
const {menu, renderMenu} = require('./menu.js');
const {createAboutSection} = require('./about.js');
const contact = require('./contacts');

// Loading the Background image directly
const bgImage = require('./resource/restaurant-bg.jpg');
document.querySelector('.container').style.backgroundImage = `url(${bgImage})`;

// Main Selectors
const homenav = document.querySelector('.homez').addEventListener('mouseenter',loadHome);
const contentDiv = document.getElementById('content');
const menuNav = document.querySelector('.menuz').addEventListener('mouseenter',loadMenu);
const aboutNav = document.querySelector('.aboutz').addEventListener('mouseenter',loadAbout);
const contacts = document.querySelector('.contactz').addEventListener('mouseenter',loadContacts);

// Reset the interface
function reset(){
    // Remove all children from the contentDiv
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    // Remove additional classes
    contentDiv.classList.remove('menu', 'active');
};

// Home Section
const {section, btn1, btn2} = createHomeSection()
function loadHome(e){
    e.preventDefault();
    reset();
    contentDiv.appendChild(section);
}

// nMenu Section
function loadMenu (e){
    e.preventDefault();
        reset(); // Clear previous content
        contentDiv.classList.add('menu');
        renderMenu(menu, contentDiv); // Add new content
}

// About Section
function loadAbout (e){
    e.preventDefault();
        reset();
        const aboutSection = createAboutSection();
        contentDiv.appendChild(aboutSection);
}

// Contacts Section
function loadContacts(e){
    e.preventDefault();
    reset();
    const contactSection = contact.createContactSection();
    contentDiv.appendChild(contactSection);
}

// Additional Home Buttons
btn1.addEventListener('click', (e)=>{
    loadMenu(e);
})
btn2.addEventListener('click', (e)=>{
    loadAbout(e);
})
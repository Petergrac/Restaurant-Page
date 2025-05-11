'use strict';

// loading css and additional javascript files
require('./style.css');
const createHomeSection = require('./home');
const {menu, renderMenu} = require('./menu.js');
const {createAboutSection} = require('./about.js');
const contact = require('./contacts');
const { last } = require('lodash');

// Main Selectors
const homenav = document.querySelector('.homez');
const contentDiv = document.getElementById('content');
const menuNav = document.querySelector('.menuz');
const aboutNav = document.querySelector('.aboutz');
const contacts = document.querySelector('.contactz');

// Reset the interface
const reset = () => {
    // Remove all children from the contentDiv
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    // Remove additional classes
    contentDiv.classList.remove('menu', 'active');
};

// Home Event Listener
const {section, btn1, btn2} = createHomeSection()
homenav.addEventListener('mouseenter', (e)=>{
    e.preventDefault();
    reset();
    contentDiv.appendChild(section);
});

// Menu Event Listener
menuNav.addEventListener('mouseenter', (e) => {
    e.preventDefault();
        reset(); // Clear previous content
        contentDiv.classList.add('menu');
        renderMenu(menu, contentDiv); // Add new content
});


// About Event Listener
aboutNav.addEventListener('mouseenter', (e)=>{
    e.preventDefault();
        reset();
        const aboutSection = createAboutSection();
        contentDiv.appendChild(aboutSection);
})
// Contacts Section
contacts.addEventListener('mouseenter', (e)=>{
    e.preventDefault();
    reset();
    const contactSection = contact.createContactSection();
    contentDiv.appendChild(contactSection);
})

// Additional Home Buttons
btn1.addEventListener('click', (e)=>{
    loadMenu(e);
})
function loadMenu(e){
    e.preventDefault();
        reset(); // Clear previous content
        contentDiv.classList.add('menu');
        renderMenu(menu, contentDiv); // Add new content
}
// Button 2
btn2.addEventListener('click', (e)=>{
    loadAbout(e);
})
function loadAbout(e){
    e.preventDefault();
        reset();
        const aboutSection = createAboutSection();
        contentDiv.appendChild(aboutSection);
}
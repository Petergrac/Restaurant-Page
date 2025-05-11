'use strict'

function createHomeSection() {
    const section = document.createElement('section');
    section.classList.add('home');
  
    const p1 = document.createElement('p');
    p1.textContent = 'Welcome to Serenity Dine – where taste meets elegance.';
    p1.className = 'top';
  
    const p2 = document.createElement('p');
    p2.textContent = 'Experience healthy, gourmet meals made with love.';
    p2.className = 'center';
  
    const p3 = document.createElement('p');
    p3.textContent = 'Our space blends fine dining, warm ambiance, and curated beverages to serve you an unforgettable moment.';
    p3.className = 'top';
  
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'buttons';
  
    const btn1 = document.createElement('button');
    btn1.textContent = 'OUR MENU';
 
    const btn2 = document.createElement('button');
    btn2.textContent = 'ABOUT US';


    buttonDiv.appendChild(btn1);
    buttonDiv.appendChild(btn2);
  
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);
    section.appendChild(buttonDiv);
  
    return { section, btn1, btn2 }; // expose buttons
}
  
module.exports = createHomeSection;
  
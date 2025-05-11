// about.js
'use strict';

function createAboutSection() {
  const section = document.createElement('section');
  section.setAttribute('class', 'about');
  section.style.gridColumn = '1 / -1'; // span all columns

  const heading = document.createElement('h1');
  heading.textContent = '🏨 About Us';

  const paragraph1 = document.createElement('p');
  paragraph1.textContent = `Welcome to Paladar – where fine dining meets comfort. 
  Established in 2010, our hotel restaurant is known for combining modern elegance with traditional hospitality.`;

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = `Our chefs use only the freshest, locally sourced ingredients to craft each dish, 
  ensuring a delightful and memorable dining experience.`;

  const paragraph3 = document.createElement('p');
  paragraph3.textContent = `Visit us and enjoy warm lighting, cozy ambiance, and exceptional service that makes 
  you feel at home.`;

  section.append(heading, paragraph1, paragraph2, paragraph3);
  return section;
}

module.exports = { createAboutSection };

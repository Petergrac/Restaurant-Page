// contact.js
function createContactSection() {
    const section = document.createElement('div');
    section.classList.add('contact-section');
  
    const heading = document.createElement('h1');
    heading.textContent = '📞 Contact Us';
  
    const phone = document.createElement('p');
    phone.textContent = 'Phone: +1-234-567-890';
  
    const email = document.createElement('p');
    email.textContent = 'Email: contact@serenity.com';
  
    const address = document.createElement('p');
    address.textContent = '123 Kenyatta Lane, Nairobi, Kenya';
  
    section.appendChild(heading);
    section.appendChild(phone);
    section.appendChild(email);
    section.appendChild(address);
  
    return section;
  }
  
  module.exports = { createContactSection };
  
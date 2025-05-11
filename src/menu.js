// menu.js
'use strict';

// Menu data
const menu = [
  {
    category: "🥗 Starters & Appetizers",
    items: [
      { name: "Tomato Basil Soup", price: "$5.99" },
      { name: "Crispy Calamari Rings", price: "$8.49" },
      { name: "Bruschetta with Balsamic Glaze", price: "$6.99" },
      { name: "Chicken Wings (Spicy/BBQ)", price: "$9.99" },
    ],
  },
  {
    category: "🍝 Main Courses",
    items: [
      { name: "Grilled Chicken Alfredo Pasta", price: "$13.99" },
      { name: "Beef Steak with Garlic Mashed Potatoes", price: "$17.99" },
      { name: "Paneer Butter Masala (V)", price: "$11.49" },
      { name: "Seafood Risotto", price: "$15.99" },
      { name: "Veggie Burger with Sweet Potato Fries (V)", price: "$10.99" },
    ],
  },
  {
    category: "🍕 Pizza & Sandwiches",
    items: [
      { name: 'Margherita Pizza (12")', price: "$9.99" },
      { name: 'BBQ Chicken Pizza (12")', price: "$11.99" },
      { name: "Club Sandwich with Fries", price: "$8.99" },
      { name: "Tandoori Chicken Wrap", price: "$9.49" },
    ],
  },
  {
    category: "🍰 Desserts",
    items: [
      { name: "Chocolate Lava Cake", price: "$5.49" },
      { name: "Classic Cheesecake", price: "$4.99" },
      { name: "Tiramisu", price: "$6.49" },
      { name: "Vanilla Ice Cream Sundae", price: "$3.99" },
    ],
  },
  {
    category: "🥤 Beverages",
    items: [
      { name: "Fresh Lime Soda (Sweet/Salted)", price: "$2.49" },
      { name: "Cold Coffee with Ice Cream", price: "$3.99" },
      { name: "Fruit Punch Mocktail", price: "$4.49" },
      { name: "Bottled Water", price: "$1.00" },
    ],
  },
];

// Function to render menu
function renderMenu(menuData, container) {
  menuData.forEach(section => {
    const div = document.createElement('div');
    div.classList.add('articles');

    const h1 = document.createElement('h1');
    h1.textContent = section.category;
    div.appendChild(h1);

    section.items.forEach(item => {
      const p = document.createElement('p');
      p.textContent = `${item.name}  ${item.price}`;
      div.appendChild(p);
    });

    container.appendChild(div);
  });
}

// Export both
module.exports = {
  menu,
  renderMenu
};

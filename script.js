// Select elements
const menuIcon = document.getElementById('menu');
const navMenu = document.querySelector('.links');

// Add click event to toggle menu visibility
menuIcon.addEventListener('click', () => { 
  navMenu.classList.toggle('active');
});
navMenu.addEventListener("click", () => {
  navMenu.classList.remove('active');
})

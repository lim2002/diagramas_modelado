// Seleccionamos el botón y el menú
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Agregamos un evento para abrir/cerrar el menú
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

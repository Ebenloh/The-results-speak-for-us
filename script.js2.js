const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const menuToggle = document.getElementById('menu-toggle');
const navigation = document.querySelector('.navigation');
if (registerLink && loginLink && wrapper) {
  registerLink.addEventListener('click', () => wrapper.classList.add('active'));
  loginLink.addEventListener('click', () => wrapper.classList.remove('active'));
}

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => navigation.classList.toggle('show'));
}

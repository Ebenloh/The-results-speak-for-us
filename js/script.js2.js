// --- Gestion des éléments d'interface utilisateur de la page publique ---

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


// NOTE : La logique de lecture des matchs (Firebase) a été conservée dans la balise <script>
// du fichier HTML principal (index.html) pour garantir que 'db' est correctement défini
// juste après l'initialisation de Firebase.


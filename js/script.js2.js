// --- Gestion des éléments d'interface utilisateur de la page publique ---

// Sélecteurs pour la gestion des liens et du wrapper (probablement pour une page de connexion/inscription)
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// Sélecteurs pour la gestion du menu mobile
const menuToggle = document.getElementById('menu-toggle');
const navigation = document.querySelector('.navigation');

// 1. Gestion des transitions de connexion/inscription (si ces éléments existent sur la page)
if (registerLink && loginLink && wrapper) {
    registerLink.addEventListener('click', () => wrapper.classList.add('active'));
    loginLink.addEventListener('click', () => wrapper.classList.remove('active'));
}

// 2. Gestion du menu burger/mobile
if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => navigation.classList.toggle('show'));
}

// NOTE : La logique de lecture des matchs (Firebase) a été conservée dans la balise <script>
// du fichier HTML principal (index.html) pour garantir que 'db' est correctement défini
// juste après l'initialisation de Firebase.

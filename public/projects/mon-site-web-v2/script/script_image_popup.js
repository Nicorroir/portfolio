// Quand une image est cliquée, elle s’affiche en grand dans le conteneur
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.galerie img'); // Toutes les images de la galerie
    const popup = document.getElementById('popup-image');      // Conteneur popup
    const popupImg = popup.querySelector('img');               // Image à afficher

    images.forEach(img => {
        img.addEventListener('click', () => {
            popupImg.src = img.src;      // Met à jour la source de l’image popup
            popup.style.display = 'flex'; // Affiche le conteneur (en flex pour centrage)
        });
    });
});

// Ferme le popup si on clique dessus
function fermerPopup() {
    document.getElementById('popup-image').style.display = 'none';
}

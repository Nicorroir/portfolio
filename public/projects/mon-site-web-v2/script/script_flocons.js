// Fonction qui crée un flocon et l'ajoute dans la page
function createSnowflake() {
    const snowflake = document.createElement('div'); 
    // Crée un nouvel élément <div> en mémoire

    snowflake.classList.add('snowflake'); 
    // Ajoute la classe CSS "snowflake" à ce nouvel élément (style défini dans animations.css)

    snowflake.textContent = '❄'; 
    // Définit le contenu textuel du flocon : un symbole flocon Unicode

    snowflake.style.left = Math.random() * 100 + '%'; 
    // Positionne le flocon horizontalement de manière aléatoire (entre 0% et 100% de la largeur)

    snowflake.style.fontSize = Math.random() * 20 + 10 + 'px'; 
    // Définit une taille aléatoire entre 10px et 30px pour le flocon

    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    // Durée aléatoire de l’animation (entre 2s et 5s) pour varier la vitesse de chute

    snowflake.style.opacity = Math.random(); 
    // Opacité aléatoire (entre 0 et 1) pour donner de la profondeur

     snowflake.style.transform = `rotate(${Math.random() * 360}deg)`;
    // Ajout d’un léger effet de rotation
    
    document.querySelector('.snowfall-container').appendChild(snowflake); 
    // Insère le flocon dans le conteneur visible (div.snowfall-container)

    setTimeout(() => {
        snowflake.remove(); 
        // Supprime le flocon du DOM après 8 secondes (quand il est tombé)
    }, 3000);
}

// Exécute la fonction createSnowflake toutes les 300 millisecondes
setInterval(createSnowflake, 300); 
// Cela crée un nouveau flocon environ 3 fois par seconde

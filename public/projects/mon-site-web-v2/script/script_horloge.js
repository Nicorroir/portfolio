// Fonction qui met à jour l'heure dans la page
function mettreAJourHeure() {
    const maintenant = new Date(); 
    // Crée un objet Date contenant la date et l'heure actuelles

    const options = {
        hour: '2-digit',        // Affiche l'heure sur 2 chiffres (ex: 09)
        minute: '2-digit',      // Affiche les minutes sur 2 chiffres
        second: '2-digit'       // Affiche les secondes sur 2 chiffres
    };

    const heureLocale = maintenant.toLocaleTimeString('fr-BE', options); 
    // Formate l'heure selon les options définies, au format belge francophone

    document.getElementById('heure-belgique').textContent = heureLocale; 
    // Insère l'heure formatée dans l'élément HTML avec l'id "heure-belgique"
}

// Quand le DOM est entièrement chargé
window.addEventListener('DOMContentLoaded', () => {
    mettreAJourHeure(); // Met à jour l'heure une première fois immédiatement

    setInterval(mettreAJourHeure, 1000); 
    // Puis répète la mise à jour toutes les 1000 ms (1 seconde)
});

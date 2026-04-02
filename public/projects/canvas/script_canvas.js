// Récupérer le canvas et le contexte
const canvas = document.getElementById("monCanvas");
const ctx = canvas.getContext("2d");

// Dessiner un rectangle de base
ctx.fillStyle = "blue";
ctx.fillRect(100, 100, 200, 100);

// Ajouter un texte
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Hello Canvas !", 130, 160);

<?php
// Connexion à la base MySQL
$conn = mysqli_connect("localhost", "root", "", "site_web");

// Vérifie si la connexion a échoué
if (!$conn) {
    die("Erreur de connexion : " . mysqli_connect_error());
}
?>

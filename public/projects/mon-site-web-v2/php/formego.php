<?php
require_once('connectm.php'); // Connexion à la base de données

// Vérifie la présence des champs obligatoires
if (
    isset($_POST['prenom']) &&
    isset($_POST['nom']) &&
    isset($_POST['email']) &&
    isset($_POST['telephone'])
) {
    // Nettoyage et récupération des champs
    $prenom = trim($_POST['prenom']);
    $nom = trim($_POST['nom']);
    $email = trim($_POST['email']);
    $telephone = trim($_POST['telephone']);
    $adresse = isset($_POST['adresse']) ? trim($_POST['adresse']) : '';
    $fax = isset($_POST['fax']) ? trim($_POST['fax']) : '';
    $cours = isset($_POST['cours']) ? $_POST['cours'] : '';
    $horaire = isset($_POST['horaire']) ? $_POST['horaire'] : '';
    $niveau = isset($_POST['niveau']) ? implode(", ", $_POST['niveau']) : '';
    $profession = isset($_POST['profession']) ? $_POST['profession'] : '';

    // Requête préparée sécurisée
    $stmt = $conn->prepare("INSERT INTO client (prenom, nom, email, telephone, adresse, fax, cours, horaire, niveau, profession) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $prenom, $nom, $email, $telephone, $adresse, $fax, $cours, $horaire, $niveau, $profession);

    if ($stmt->execute()) {
        echo "<h2>Merci, votre demande a bien été envoyée !</h2>";
        echo "<p>Voici un récapitulatif de vos informations :</p>";
        echo "<ul>";
        echo "<li>Nom : $prenom $nom</li>";
        echo "<li>Email : $email</li>";
        echo "<li>Téléphone : $telephone</li>";
        echo "<li>Adresse : $adresse</li>";
        echo "<li>Fax : $fax</li>";
        echo "<li>Formation : $cours</li>";
        echo "<li>Horaire : $horaire</li>";
        echo "<li>Niveau d'études : $niveau</li>";
        echo "<li>Profession : $profession</li>";
        echo "</ul>";
    } else {
        echo "<p>Erreur SQL : " . htmlspecialchars($stmt->error) . "</p>";
    }

    $stmt->close();
} else {
    echo "<p>Certains champs obligatoires sont manquants.</p>";
}
?>

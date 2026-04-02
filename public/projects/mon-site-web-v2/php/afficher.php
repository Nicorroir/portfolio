<?php
// Connexion à la base de données
require_once('connectm.php');

// Requête SQL pour récupérer tous les champs du formulaire
$sql = "SELECT prenom, nom, email, telephone, adresse, fax, cours, horaire, niveau, profession FROM client";
$result = $conn->query($sql);

// Si la table contient des données
if ($result->num_rows > 0) {
    echo "<h2>Liste des clients enregistrés</h2>";
    echo "<table border='1' cellpadding='10' style='border-collapse: collapse;'>";
    echo "<tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Adresse</th>
            <th>Fax</th>
            <th>Formation</th>
            <th>Horaire</th>
            <th>Niveau d'études</th>
            <th>Profession</th>
          </tr>";

    // Affiche chaque ligne
    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($row['prenom']) . "</td>";
        echo "<td>" . htmlspecialchars($row['nom']) . "</td>";
        echo "<td>" . htmlspecialchars($row['email']) . "</td>";
        echo "<td>" . htmlspecialchars($row['telephone']) . "</td>";
        echo "<td>" . nl2br(htmlspecialchars($row['adresse'])) . "</td>";
        echo "<td>" . htmlspecialchars($row['fax']) . "</td>";
        echo "<td>" . htmlspecialchars($row['cours']) . "</td>";
        echo "<td>" . htmlspecialchars($row['horaire']) . "</td>";
        echo "<td>" . htmlspecialchars($row['niveau']) . "</td>";
        echo "<td>" . htmlspecialchars($row['profession']) . "</td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "<p>Aucun client enregistré.</p>";
}
?>

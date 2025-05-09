const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

dotenv.config(); // Charge les variables d'environnement

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour traiter les requêtes JSON
app.use(express.json());


//#region Database
// Synchronisation de la base de données
sequelize.sync().then(() => {
    console.log('Base de données synchronisée !');
}).catch(err => console.error('Erreur BDD:', err));

// Test de connexion à la base de données
sequelize.authenticate()
    .then(() => console.log("Connexion à la base réussie"))
    .catch(err => console.error("Erreur de connexion à la base :", err));

//#endregion


//#region Routes
// Importation des routes
const jokeRoutes = require('./routes/jokes');
app.use('/api', jokeRoutes);

//#endregion


// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});

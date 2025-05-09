const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/controller.js');

/**
 * @swagger
 * /v1/blagues:
 *   post:
 *     summary: Ajoute une nouvelle blague
 *     description: Enregistre une nouvelle blague dans la base de données.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "Pourquoi le football c'est rigolo ? Parce que Thierry en rit."
 *     responses:
 *       201:
 *         description: Blague ajoutée avec succès.
 *       500:
 *         description: Erreur interne du serveur.
 */
router.post('/v1/blagues', jokeController.addJoke);

/**
 * @swagger
 * /v1/blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     description: Retourne la liste complète des blagues enregistrées.
 *     responses:
 *       200:
 *         description: Liste des blagues récupérée avec succès.
 *       500:
 *         description: Erreur interne du serveur.
 */
router.get('/v1/blagues', jokeController.getAllJokes);

/**
 * @swagger
 * /v1/blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     description: Retourne une blague choisie de manière totalement aléatoire.
 *     responses:
 *       200:
 *         description: Blague aléatoire récupérée.
 *       500:
 *         description: Erreur interne du serveur.
 */
router.get('/v1/blagues/random', jokeController.getRandomJoke);

/**
 * @swagger
 * /v1/blagues/{id}:
 *   get:
 *     summary: Récupère une blague spécifique
 *     description: Retourne une blague par son ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la blague.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blague trouvée.
 *       404:
 *         description: Blague non trouvée.
 *       500:
 *         description: Erreur interne du serveur.
 */
router.get('/v1/blagues/:id', jokeController.getJokeById);

module.exports = router;

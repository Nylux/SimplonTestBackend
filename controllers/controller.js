const { Sequelize } = require('sequelize');
const Joke = require('../models/jokeModel.js');

// **Ajouter une blague**
const addJoke = async (req, res) => {
    try {
        const joke = await Joke.create({ text: req.body.text });
        res.status(201).json(joke);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de l’ajout de la blague' });
    }
};

// **Consulter toutes les blagues**
const getAllJokes = async (req, res) => {
    try {
        const jokes = await Joke.findAll();
        res.json(jokes);
    } catch (error) {
        res.status(500).json({ error: 'Impossible de récupérer les blagues' });
    }
};

// **Consulter une blague spécifique**
const getJokeById = async (req, res) => {
    try {
        const joke = await Joke.findByPk(req.params.id);
        if (!joke) return res.status(404).json({ error: 'Blague non trouvée' });
        res.json(joke);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de la blague' });
    }
};

// **Consulter une blague aléatoire**
const getRandomJoke = async (req, res) => {
    try {
        const joke = await Joke.findOne({ order: Sequelize.literal('RANDOM()') });
        res.json(joke);
    } catch (error) {
        res.status(500).json({ error: 'Impossible de récupérer une blague aléatoire' });
    }
};

module.exports = { addJoke, getAllJokes, getJokeById, getRandomJoke };

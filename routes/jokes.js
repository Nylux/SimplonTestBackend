const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/controller.js');

router.post('/v1/blagues', jokeController.addJoke);
router.get('/v1/blagues', jokeController.getAllJokes);
router.get('/v1/blagues/random', jokeController.getRandomJoke);
router.get('/v1/blagues/:id', jokeController.getJokeById);

module.exports = router;

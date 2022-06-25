const movieRouter = require('express').Router();
const { validateMovie, validateMovieId } = require('../middlewares/validation');
const { getMovies } = require('../controllers/movies');
const { createMovie } = require('../controllers/movies');
const { deleteMovie } = require('../controllers/movies');

movieRouter.get('/', getMovies);

movieRouter.post('/', validateMovie, createMovie);

movieRouter.delete('/:movieId', validateMovieId, deleteMovie);

module.exports = movieRouter;

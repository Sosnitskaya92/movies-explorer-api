const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        validator.isURL(v, { require_protocol: true });
        // eslint-disable-next-line no-useless-escape
        return /https?\:\/\/(www\.)?\d?\D{1,}#?/.test(v);
      },
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        validator.isURL(v, { require_protocol: true });
        // eslint-disable-next-line no-useless-escape
        return /https?\:\/\/(www\.)?\d?\D{1,}#?/.test(v);
      },
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        validator.isURL(v, { require_protocol: true });
        // eslint-disable-next-line no-useless-escape
        return /https?\:\/\/(www\.)?\d?\D{1,}#?/.test(v);
      },
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    ref: 'user',
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);

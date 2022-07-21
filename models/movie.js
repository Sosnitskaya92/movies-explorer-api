const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: false,
    default: null,
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
      },
    },
  },
  trailerLink: {
    type: String,
    required: false,
    default: null,
    validate: {
      validator(v) {
        if (v !== null) {
          validator.isURL(v, { require_protocol: true });
        }
      },
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        validator.isURL(v, { require_protocol: true });
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
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: false,
    default: null,
  },
});

module.exports = mongoose.model('movie', movieSchema);

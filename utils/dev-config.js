const {
  PORT = 3000,
  MONGO_URL = 'mongodb://localhost:27017/moviedb',
} = process.env;

module.exports = { PORT, MONGO_URL };

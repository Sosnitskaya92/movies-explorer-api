const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routers = require('./routes/index');
const CentralErrorHandler = require('./errors/CentralErrorHandler');

require('dotenv').config();

const { PORT, MONGO_URL } = require('./utils/dev-config');

const app = express();

app.use(cors({
  origin: [
    'https://diploma.sosnitskaya.nomoreparties.sbs',
    'http://diploma.sosnitskaya.nomoreparties.sbs',
    'http://localhost:3001',
    'https://localhost:3001',
    'http://localhost:3000',
    'https://localhost:3000',
  ],
  credentials: true,
}));

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.use(routers);

app.use(errorLogger);
app.use(errors());
app.use(CentralErrorHandler);

async function main() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: false,
  });

  app.listen(PORT, () => {
    console.log(`App listener on port ${PORT}`);
  });
}

main();

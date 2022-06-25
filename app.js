const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routers = require('./routes/index');
const CentralErrorHandler = require('./errors/CentralErrorHandler');

require('dotenv').config();

const { PORT, MONGO_URL } = require('./utils/dev-config');

const app = express();

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

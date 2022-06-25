const router = require('express').Router();
const { validateRegistration, validateAuthorization } = require('../middlewares/validation');
const auth = require('../middlewares/auth');
const userRoute = require('./users');
const movieRoute = require('./movies');
const { createUser, login, logout } = require('../controllers/users');
const NotFoundError = require('../errors/NotFoundError');

router.post('/signin', validateAuthorization, login);
router.post('/signup', validateRegistration, createUser);

router.use(auth);

router.use('/users', userRoute);
router.use('/movies', movieRoute);
router.post('/signout', logout);

router.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден.');
});

module.exports = router;

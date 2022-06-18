const userRouter = require('express').Router();
const { validateUser } = require('../middlewares/validation');
const { getUser } = require('../controllers/users');
const { updateUser } = require('../controllers/users');

userRouter.get('/me', getUser);

userRouter.patch('/me', validateUser, updateUser);

module.exports = userRouter;

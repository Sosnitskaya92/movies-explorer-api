const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { getUser } = require('../controllers/users');
const { updateUser } = require('../controllers/users');

userRouter.get('/me', getUser);

userRouter.patch('/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().min(2).max(30).required(),
  }),
}), updateUser);

module.exports = userRouter;

require('./user.schema');
const router = require('express').Router();
const Joi = require('joi');
const validation = require('express-joi-validation').createValidator({ passError: true });
const { createUser } = require('./user.controller');

const createUserBodySchema = Joi.object({
    name: Joi.string().min(2).max(30).trim().required(),
    age: Joi.number().integer().min(0).max(150).required(),
    gender: Joi.string().valid('M', 'F').required()
});

router.post('', validation.body(createUserBodySchema), createUser);

module.exports = router;
import Joi from 'joi';

export const signInDto: Joi.Schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().min(6).max(16).required()
});
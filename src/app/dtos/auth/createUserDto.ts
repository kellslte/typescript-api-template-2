import Joi from "joi";

export const createUserDto: Joi.Schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().min(6).max(16).required(),
    username: Joi.string().min(3).max(50).required(),
}); 
import Joi from 'joi'


export const validateInput = function (schema: Joi.Schema, input: Object) {
    let errors: Object = {};

    const { error, value } = schema.validate(input, { abortEarly: false });

    if (error) {
        error.details.forEach(error => {
            // @ts-ignore
            errors[error.context?.key] = error.message
        });

        return errors;
    }

    return;
}
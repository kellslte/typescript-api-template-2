import { createUserDto } from '../dtos/auth/createUserDto';
import { ValidationException } from '../utils/errors';
import { validateInput } from '../utils/validateInput';
import { asyncWrapper } from './../utils/asyncWrapper';
import * as authService from '../services/auth.service';

export const register = asyncWrapper(async function (req, res, next) {
    const errors = validateInput(createUserDto, req.body);

    if (errors && typeof errors === 'object') throw new ValidationException("The request failed with the following errors", errors);

    const user = await authService.register(req.body);

    return res.status(201).json({
        success: true,
        message: 'Registration successful',
        data: {
            user: user
        }
    })
});
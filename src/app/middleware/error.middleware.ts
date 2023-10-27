import { Request, Response } from "express";
import { ValidationException } from "../utils/errors"

export const ErrorMiddleware = function (err: any, req: Request, res: Response, next: any) {
    if (err instanceof ValidationException) {
        res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors,
        })
    }

    return res.status(500).json({
        success: false,
        message: err.message,
        stack: err.stack
    });
}
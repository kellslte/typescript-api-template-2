import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';

export const asyncWrapper = (controller: (arg0: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, arg1: Response<any, Record<string, any>>, arg2: any) => any) => async (req: Request, res: Response, next: (arg0: any) => void) => {
    try {
        await controller(req, res, next);
     }catch (error: any) {
        next(error);
    }
}
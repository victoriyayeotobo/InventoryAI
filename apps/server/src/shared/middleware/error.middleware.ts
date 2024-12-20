import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom.error";
import { StatusCode } from "../constants";

export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ errors: err.serializeErrors() });
    }
    
    res.status(StatusCode.SERVER_ERROR).send({
        errors: [{ message: err.message }]
    });
};
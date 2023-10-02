import { NextFunction, Request, Response } from "express";


export const getItem = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {
        
        res.json()

    } catch (error) {
        next(error)
    }
}
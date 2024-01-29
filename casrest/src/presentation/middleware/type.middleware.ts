import { NextFunction, Request, Response } from "express";



export class TypeMiddleware {


    static validTypes( validTypes: string[] ){

        return (
            req: Request,
            res: Response,
            next: NextFunction
        ) => {

            // in this case we wont be able to get to the params to fix this we use req.url 
            // const type = req.params.type
            const type = req.url.split('/').at(2) ?? '';

            if( !validTypes.includes(type) ){
                return res.status(400).json({ error: `Invalid type: ${type}, valid ones ${validTypes}`})
            }
            next()
        }
    }

}
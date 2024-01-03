import { NextFunction, Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { JWTGenerator } from "../../config/jwt.adapter";
import { UserEntity } from "../../domain/entities/user.entity";


export class AuthMiddleware {

    static async validateJWT( req:Request, res: Response, next: NextFunction ){

        const authorization = req.header('Authorization')

        if( !authorization ) return res.status(401).json({msg:'------ No token provided -------'})
        if( !authorization.startsWith('Bearer ') ) return res.status(401).json({msg:'---- Invalid Bearer Token -----'})
    
        const token = authorization.split(' ').at(1) || '';

        try{

            const payload = await JWTGenerator.validateToken<{id: string}>(token)
            if( !payload ) return res.status(401).json({error: 'Invalid token'})

            const userJWT = await prisma.user.findFirst({
                where:{
                    id: payload.id
                }
            })

            if( !userJWT ){
                return res.status(401).json({
                    msg:'-------- Token no valid or User Id not valid --------'
                })
            }

            // TODO: validate if user is active

            req.body.user = UserEntity.fromObject(userJWT)

            next();

        }catch(error){

            console.log(error)
            res.status(500).json({error: '-------- Internal server Error --------'})

        }


        
    }

}
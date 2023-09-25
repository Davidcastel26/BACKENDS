import { NextFunction, Request, Response } from "express";
import prismadb from "../models/prismadb";

export const getAllProducts = async ( 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {

    try {
        
        const allCategories = await prismadb.category.findMany()

        res.status(200).json( allCategories )

    } catch (error) {
        console.log(res.status(401).json({error, msg: '-- ERROR WITH GET ALL PRODUCTS --'}))
        next(error)
    }

}

export const getOneProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { idCategory } = req.params;



    try {

        const categoryById = await prismadb.category.findUnique({
            where:{ 
                idCategory
             },
            include: { 
                product: true
            }
        })

        res.status(200).json({
            msg:'-- GET ONE CATEGORY --',
            categoryById
        })
        
    } catch (error) {
        console.log( res.status(401).json({error, msg: '-- ERROR WITH GET ONE PRODUCT --'}))
        next(error)
    }
}
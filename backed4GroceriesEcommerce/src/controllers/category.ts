import { NextFunction, Request, Response } from "express";
import prismadb from "../models/prismadb";
import { Category } from "../ts/interfaces/cate";

export const getAllCategory = async ( 
    req: Request, 
    res: Response, 
    next: NextFunction
) => {

    try {
        
        const allCategories = await prismadb.category.findMany()

        res.status(200).json( allCategories )

    } catch (error) {
        console.log(res.status(401).json({
            error, 
            msg: '-- ERROR WITH GET ALL PRODUCTS --'
        }))
        next(error)
    }

}

export const getOneCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { idCategory } = req.params;

    try {

        const categoryById = await prismadb.category.findFirst({
            where:{ 
                idCategory,
                isActive: true
             },
            include: { 
                product: true
            }
        })

        res.status(202).json(categoryById)
        
    } catch (error) {
        console.log( res.status(400).json({
            error, 
            msg: '-- ERROR WITH GET ONE PRODUCT --'
        }))
        next(error)
    }
}

export const createCategory = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { nameCategory }:Category = req.body;

    try {

        const postCate = await prismadb.category.create({
            data: {
                nameCategory
            }
        })
    
        res.status(201).json(postCate)

    } catch (error) {
        console.log( res.status(400).json({
            error,
            msg: '-- ERROR WITH CREATE CATEGORY --'
        }));
        next(error);
    }

}

export const updateCategory = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { idCategory } = req.params;
    const { nameCategory }:Category = req.body;

    try {

        const updateCate = {
            nameCategory
        }

        await prismadb.category.update({
            where:{ 
                idCategory:idCategory 
            },
            data: updateCate
        })

        return res.status(202).json(updateCate)
        
    } catch (error) {
        
        console.log( res.status(400).json({
            error,
            msg: '-- ERROR UPDATEDING CATEGORY --'
        }))

        next(error)

    }

}

export const deleteCategory = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { idCategory } = req.params;

    try {

       const categoryDelete = await prismadb.category.update({
        where: {idCategory},
        data:{
            isActive:false
        }
       })

       return res.status(204)
        
    } catch (error) {
        
        console.log( res.status(400).json({
            error,
            msg: '-- ERROR DELETING CATEGORY --'
        }))

    }

}
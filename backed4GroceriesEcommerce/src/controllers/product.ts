import { NextFunction, Request, Response } from "express";
import prismadb from "../models/prismadb";
import { Product } from "../ts/interfaces/product";

export const  createProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { categoryId, nameProduct, price }: Product = req.body;

    try {

        const newProduct = await prismadb.product.create({
            data: {
                categoryId,
                nameProduct,
                price
            }
        })

        return res.status(202).json(newProduct)
        
    } catch (error) {
        
        console.log( res.status(400).json({
            error,
            msg: '-- ERROR CREATING PRODUCT --'
        }))
        next(error)
    }

}

export const updateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { nameProduct, ...product } = req.body;
    const { idProduct } = req.params;

    try {

        const updateProduct = {
            nameProduct,
            ...product
        }

        await prismadb.product.update({
            where:{
                idProduct
            },
            data: updateProduct
        })

        return res.status(200).json( updateProduct )
        
    } catch (error) {
        
        console.log( res.status(400).json({
            error,
            msg: '-- ERROR WITH UPDATE PRODUCT --'
        }))

        next(error)
    }
}

export const deleteProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { idProduct } = req.params;

    try {

        const deleteProduct = await prismadb.product.update({
            where:{ idProduct },
            data: { 
                isActive:false 
            }
        })
        
        return res.status(204)

    } catch (error) {

        console.log(res.status(400).json({
            error,
            msg: '-- error deleting product --'
        }))

        next(error)
    }

}

export const getOneProduct = async (
    req:Request,
    res: Response,
    next: NextFunction
) => {

    const { idProduct } = req.params;

    try {

        const oneProduct = await prismadb.product.findUnique({
            where:{ 
                idProduct,
                isActive: true
             }
        })

        return res.status(200).json(oneProduct)
        
    } catch (error) {
        
        console.log( res.status(400).json({
            error,
            msg: "-- ERROR GET ONE PRODUCT --"
        }))

    }

}

export const getAllProducts = async(
    req: Request,
    res: Response,
    next: NextFunction
) => {

    try {
        
        const AllProducts = await prismadb.product.findMany({
            where:{
                isActive:true
            }
        })

        return res.status(200).json({
            AllProducts
        })

    } catch (error) {
        
        console.log( res.status(400).json({
            error,
            msg: '-- ERROR WITH ALL PRODUCTS --'
        }))

        next(error)

    }    
    
};
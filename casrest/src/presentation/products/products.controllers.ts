import { Request, Response } from "express";
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';


export class ProductController {

    constructor(
        //TODO private readonly productService: ProductService
    ){}

    createProduct = ( req: Request, res: Response) => {

        // const [ error, createProductDto]
        return res.json('create product')
    }

    getProduct = async( req: Request, res: Response ) => {

        const { page = 1, limit = 10 } = req.query;

        const [ error, paginationDto ] = PaginationDto.create( +page, +limit)

        if( error ) return res.status(400).json({ error })

        // this

        return res.json('get products')

    }
}
import { Request, Response } from "express"
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto'
import { CreateProductDto } from "../../domain/dtos"
import { ProductService } from "../../presentation/services/product.service"
import { CustomError } from "../../domain/errors/custom.error"


export class ProductController {

    constructor(
        private readonly productService: ProductService
    ){}

    private handleError = ( error: unknown, res: Response ) => {
        if( error instanceof CustomError ){
            return res.status( error.statusCode ).json({ error: error.message })
        }

        return res.status(500).json({error: 'Internal server error'})
    }

    createProduct = ( req: Request, res: Response) => {

        const [ error, createProductDto] = CreateProductDto.create( req.body )

        if( error ) return res.status(400).json({error})

        this.productService.createProduct( createProductDto! )
            .then( products => res.json( products ))
            .catch( error => this.handleError( error, res ))

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
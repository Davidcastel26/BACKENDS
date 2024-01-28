import { CategoryService } from "presentation/services/category.service";
import { CreateCategoryDto } from "../../domain/dtos/catogry.ts/createCategoryDto";
import { CustomError } from "../../domain/errors/custom.error";
import { NextFunction, Request, Response } from "express";
import { PaginationDto } from "../../domain/dtos/shared/pagination.dto";


export class CategoryController {

    constructor(
        private readonly categoryService: CategoryService
    ){}

    private handleError = ( error: unknown, res: Response)=>{
        if( error instanceof CustomError){
            return res.status(error.statusCode).json({ error: error.message })
        }
 
        console.log(`${error}`)
        return res.status(500).json({ error: 'Internal Server Error'})
    }

    createCategory = (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        const { name, available } = req.body

        const [error, createCategoryDto] =  CreateCategoryDto.create( req.body )
        if(error) return res.status(400).json({error})

        this.categoryService.createCategory( createCategoryDto!, req.body.user )
            .then( catego => res.status(201).json(catego))
            .catch( error => this.handleError(error, res))
    }

    getCategory = async(
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        const { page = 1 , limit = 10 } = req.query;

        const [error, paginationDto] = PaginationDto.create(+page, +limit)
        if( error ) return res.status(400).json({error}) 

        this.categoryService.getCategories( paginationDto! )
            .then(data => res.status(200).json(data))
            .catch( error => this.handleError(error, res))
    }

}
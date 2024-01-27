import { prisma } from "../../data/postgres";
import { CustomError } from "../../domain/errors/custom.error";
import { PaginationDto } from "../../domain/dtos/shared/pagination.dto";
import { CreateProductDto } from '../../domain/dtos/products/create-product.dto';


export class ProductService {

    constructor(){}

    async createProduct( createProductDto: CreateProductDto ){

        const productExist = await prisma.product.findFirst({
            where:{
                name: createProductDto.name
            }
        })

        if( productExist ) throw CustomError.badRequest('Product already exist')

        try {

            const product = await prisma.product.create({
                data: createProductDto
            })


            return product;
            
        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    }

    async getAllProducts( paginationDto: PaginationDto ){


        const { limit, page } = paginationDto;

        try {

            const [total, products] = await Promise.all([
                prisma.product.count({
                    select:{
                        _all: true
                    }
                }),
                prisma.product.findMany({
                    take: limit ? Number(limit): undefined,
                    skip: page ? Number(page): undefined,
                    // Todo: populate 
                })
            ])

            return {
                page,
                limit,
                total,
                next: `/api/products?page=${( page + 1 )}&limit=${limit}`,
                prev:(page - 1 > 0) ? `/api/products?page=${( page - 1 )}&limit=${limit}` : null,
                products: products
            }

            
        } catch (error) {
            throw CustomError.internalServer(`Internal server error`)
        }

    }


}